import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPath = (sub: string): string => {
  const baseUrl = import.meta.env.BASE_URL;

  if (baseUrl) {
    const cleanedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    return `${cleanedBaseUrl}${sub}`;
  }

  return sub;
};

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const isInPast = diffMs < 0;
  const absDiffMs = Math.abs(diffMs);

  // If difference is less than 60 seconds
  if (absDiffMs < 60 * 1000) {
    return 'now';
  }

  // Convert to days, hours, minutes
  const days = Math.floor(absDiffMs / (24 * 60 * 60 * 1000));
  const hours = Math.floor((absDiffMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((absDiffMs % (60 * 60 * 1000)) / (60 * 1000));

  // Build the time parts array
  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);

  // Join the parts with spaces
  const timeString = parts.join(' ');

  // Return the formatted string with appropriate prefix
  return isInPast ? `${timeString} ago` : `in ${timeString}`;
}
