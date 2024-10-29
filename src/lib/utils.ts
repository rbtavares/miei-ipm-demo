import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPath = (sub: string) => {
  const baseUrl = import.meta.env.BASE_URL;

  if (baseUrl) {
    const cleanedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    return `${cleanedBaseUrl}${sub}`;
  }

  return sub;
};
