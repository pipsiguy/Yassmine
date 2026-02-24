import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function timeZoneToLocation(tz?: string) {
    if (!tz) return "";
    const parts = tz.split("/");
    const location = parts.length > 1 ? parts.slice(1).join(" - ") : parts[0];
    return location
        .replace(/_/g, ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
        .join(' ');
}
