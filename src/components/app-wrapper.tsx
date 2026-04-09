"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/loading-screen";
import { BackToTop } from "@/components/back-to-top";

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" onComplete={handleLoadingComplete} />
      ) : (
        <div key="content" className="animate-in fade-in duration-1000">
          {children}
          <BackToTop />
        </div>
      )}
    </AnimatePresence>
  );
}
