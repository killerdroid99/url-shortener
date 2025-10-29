import Link from "next/link";
import Header from "@/components/header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Header with theme toggle */}
      <Header />

      {/* 404 Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold text-primary mb-4">
              404
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
              Page not found
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist. It might have been
              moved or deleted.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Back to home
            </Link>
            <a
              href="mailto:support@pitter.icu"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Contact support
            </a>
          </div>

          {/* Decorative element */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Error code: <span className="font-mono">404_NOT_FOUND</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
