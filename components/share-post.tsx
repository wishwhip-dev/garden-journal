"use client";

import { useCallback, useSyncExternalStore, useRef, useState } from "react";
import { Check, Link2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const noopSubscribe = () => () => {};

/**
 * Read once per render whether the browser exposes the native share sheet. useSyncExternalStore
 * with a no-op store keeps this honest between server and client renders: the server says false,
 * and the value flips without any setState-in-an-effect.
 */
function useCanShare(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => typeof navigator !== "undefined" && typeof navigator.share === "function",
    () => false,
  );
}

type ShareState = "idle" | "copied" | "manual";

/**
 * The Share control every post carries. Opens a dialog with the post's absolute URL, offers the
 * browser's native share sheet when `navigator.share` exists, and a Copy link button that
 * confirms with a visible "Copied" state. If the clipboard is unavailable at all, the URL stays
 * on screen as selectable text and the dialog says so — sharing never dead-ends.
 */
export function SharePost({
  slug,
  title,
  blurb,
}: Readonly<{ slug: string; title: string; blurb?: string }>) {
  const [open, setOpen] = useState(false);
  const [shareState, setShareState] = useState<ShareState>("idle");
  const [shareError, setShareError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canShare = useCanShare();

  // The dialog content only mounts once it is open, so window exists whenever this renders.
  const url = open && typeof window !== "undefined" ? `${window.location.origin}/posts/${slug}` : "";

  const rememberCopied = useCallback(() => {
    setShareState("copied");
    if (copiedTimer.current) clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setShareState("idle"), 2500);
  }, []);

  const copyLink = async () => {
    setShareState("idle");
    try {
      await navigator.clipboard.writeText(url);
      rememberCopied();
    } catch {
      // Clipboard API refused (permissions, non-secure context). Fall back to selecting the
      // text and the deprecated command; if even that fails, say so instead of failing silently.
      const input = inputRef.current;
      const legacyWorked = input
        ? (input.select(), document.execCommand?.("copy") === true)
        : false;
      if (legacyWorked) {
        rememberCopied();
      } else {
        input?.focus();
        input?.select();
        setShareState("manual");
      }
    }
  };

  const nativeShare = async () => {
    setShareError("");
    try {
      await navigator.share({ title, text: blurb || title, url });
    } catch (error) {
      // Cancelling the share sheet is the user changing their mind, not a failure.
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareError("The share sheet could not be opened. Copy the link below instead.");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setShareState("idle");
          setShareError("");
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="min-h-11 gap-2">
          <Share2 aria-hidden className="size-4" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this post</DialogTitle>
          <DialogDescription>
            Send “{title}” to someone who gardens, or who should.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-2">
          <Label htmlFor={`share-url-${slug}`}>Post link</Label>
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              id={`share-url-${slug}`}
              readOnly
              value={url}
              onFocus={(event) => event.currentTarget.select()}
              className="font-mono text-sm"
            />
            <Button onClick={copyLink} className="min-h-11 shrink-0 gap-2" aria-live="polite">
              {shareState === "copied" ? (
                <>
                  <Check aria-hidden className="size-4" /> Copied
                </>
              ) : (
                <>
                  <Link2 aria-hidden className="size-4" /> Copy link
                </>
              )}
            </Button>
          </div>
          {shareState === "manual" && (
            <p className="text-sm text-amber-500" role="status">
              Copying is blocked in this browser. The link above is selected — copy it by hand
              (Ctrl+C or Cmd+C).
            </p>
          )}
          {shareError && (
            <p className="text-sm text-destructive" role="alert">
              {shareError}
            </p>
          )}
        </div>

        {canShare && (
          <DialogFooter>
            <Button variant="secondary" onClick={nativeShare} className="min-h-11 gap-2">
              <Share2 aria-hidden className="size-4" />
              Share with your device
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}