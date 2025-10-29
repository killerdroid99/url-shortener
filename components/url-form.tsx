"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UrlForm = ({ onShorten }: { onShorten: (url: string) => void }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      setLoading(true);

      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setLoading(false);
      onShorten(data.url);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-foreground"
          >
            Paste your long URL
          </label>
          <Input
            id="url"
            type="url"
            placeholder="https://example.com/very/long/url/that/needs/shortening"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <Button
          type="submit"
          disabled={loading || !url.trim()}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              <span>Shortening...</span>
            </div>
          ) : (
            "Shorten URL"
          )}
        </Button>
      </form>
    </div>
  );
};

export default UrlForm;
