import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names and intelligently merges
 * conflicting Tailwind CSS utility classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as Kenyan Shillings.
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats a date using the Kenyan locale.
 */
export function formatDate(
  date: Date | string,
  options?: Intl.DateTimeFormatOptions
): string {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  }).format(parsedDate);
}

/**
 * Creates a WhatsApp link.
 */
export function createWhatsAppLink(
  phone: string,
  message: string
): string {
  const formattedPhone = phone.replace(/\D/g, "");

  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}