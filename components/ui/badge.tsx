import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-emerald-800/70 px-3 py-1 text-xs font-medium text-white",
        className
      )}
      {...props}
    />
  );
}
