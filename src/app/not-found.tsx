
"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route"
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#221F26] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/80 mb-4">Oops! Page not found</p>
        <a href="/" className="text-accent hover:text-accent/80 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
}
