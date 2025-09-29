import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(
  ...inputs: Array<string | Record<string, boolean> | undefined>
) {
  return twMerge(clsx(inputs));
}
