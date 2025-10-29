"use client";

import { useState, useEffect } from "react";
import { Copy, CheckCircle2, Link2, Moon, Sun } from "lucide-react";
import UrlForm from "@/components/url-form";

export default function Home() {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Link2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                URL Shortener
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Shorten your links instantly
            </h1>

            <p className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed">
              Create short, memorable links that are easy to share. Track clicks
              and manage your URLs all in one place.
            </p>

            {/* Form Section */}
            <UrlForm onShorten={(url) => setShortenedUrl(url)} />

            {/* Results Section */}
            {shortenedUrl && (
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  Your shortened URL
                </p>
                <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="flex-1">
                    <p className="text-lg font-mono font-semibold text-foreground break-all">
                      {shortenedUrl}
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex-shrink-0 p-2 hover:bg-background rounded-lg transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span>No sign-up required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span>Instant shortening</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span>Secure & private</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
