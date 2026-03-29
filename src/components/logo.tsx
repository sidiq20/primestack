"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  mode?: "minimal" | "full";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, mode = "full", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: {
      brand: "text-lg",
      sub: "text-[8px]",
    },
    md: {
      brand: "text-xl",
      sub: "text-[10px]",
    },
    lg: {
      brand: "text-2xl",
      sub: "text-[12px]",
    },
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <span className={cn(
        "font-syne font-bold tracking-tight leading-none",
        sizeClasses[size].brand
      )}>
        PrimeStack
      </span>
      {mode === "full" && (
        <span className={cn(
          "font-general uppercase tracking-[0.2em] text-white/40 leading-none mt-1",
          sizeClasses[size].sub
        )}>
          web solutions
        </span>
      )}
    </div>
  );
}
