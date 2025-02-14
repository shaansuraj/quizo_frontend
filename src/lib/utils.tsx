import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class strings conditionally.
 * Typically used in ShadCN UI to combine class names elegantly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
