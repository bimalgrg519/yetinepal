"use client";

import { useCallback, useMemo, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import { Mail, Phone, Copy, Check, ExternalLink } from "lucide-react";
import { CONTACT } from "@/data/contact";

type Props = {
  onClick?: () => void;
  className?: string;
};

export default function LetsTalkButton({ onClick, className }: Props) {
  const [copied, setCopied] = useState<null | "whatsapp" | "email">(null);

  const whatsappDisplay = useMemo(
    () => CONTACT.phoneDisplay ?? CONTACT.phoneE164,
    []
  );
  const whatsappLink = useMemo(() => {
    const message = encodeURIComponent(
      "Hi Yeti Nepal, I'd like to discuss a project."
    );
    // Use wa.me with country code without plus
    const number = CONTACT.whatsappNumber ?? CONTACT.phoneE164.replace("+", "");
    return `https://wa.me/${number}?text=${message}`;
  }, []);

  const emailLink = useMemo(() => {
    const subject = encodeURIComponent("Inquiry from yetinepal.com");
    return `mailto:${CONTACT.email}?subject=${subject}`;
  }, []);

  const handleCopy = useCallback(
    async (value: string, key: "whatsapp" | "email") => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(key);
        setTimeout(() => setCopied(null), 1500);
      } catch {
        // no-op
      }
    },
    []
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={
            "text-white px-8 py-3 rounded-md transition-colors flex items-center gap-3 border-[1px] border-b-4 border-primary/40 hover:border-primary/60 " +
            (className ?? "")
          }
          onClick={onClick}
        >
          <span className="text-sm">Let's Talk</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Contact us</SheetTitle>
          <SheetDescription>
            Reach us on WhatsApp or email. We usually respond within a few
            hours.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {/* WhatsApp */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-md bg-emerald-500/15 p-2 text-emerald-400">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/70">WhatsApp</p>
                <p className="font-medium text-white break-words">
                  {whatsappDisplay}
                </p>

                <div className="mt-3 flex flex-wrap sm:flex-nowrap items-center gap-2 gap-y-2">
                  <Button asChild size="sm" className="h-8 px-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open WhatsApp chat"
                    >
                      WhatsApp
                      <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3"
                    onClick={() => handleCopy(CONTACT.phoneE164, "whatsapp")}
                    aria-label="Copy WhatsApp number"
                  >
                    {copied === "whatsapp" ? (
                      <>
                        <Check className="mr-1 h-3.5 w-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-3.5 w-3.5" /> Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-md bg-blue-500/15 p-2 text-blue-400">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/70">Email</p>
                <p className="font-medium text-white break-words">
                  {CONTACT.email}
                </p>

                <div className="mt-3 flex flex-wrap sm:flex-nowrap items-center gap-2 gap-y-2">
                  <Button asChild size="sm" className="h-8 px-3">
                    <a href={emailLink} aria-label="Send email">
                      Send Email
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3"
                    onClick={() => handleCopy(CONTACT.email, "email")}
                    aria-label="Copy email address"
                  >
                    {copied === "email" ? (
                      <>
                        <Check className="mr-1 h-3.5 w-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-3.5 w-3.5" /> Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/50">
          Prefer a call? We can schedule one after your first message.
        </p>
      </SheetContent>
    </Sheet>
  );
}
