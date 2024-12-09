import { clsx, type ClassValue } from "clsx";
import type { PortableTextBlock } from "sanity";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateReadingTime(text: string, wordsPerMinute = 200) {
  // Diviser le texte en mots
  const wordCount = text.split(/\s+/).length;

  // Calculer le temps de lecture
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime; // Temps en minutes
}

export function portableTextToPlainText(
  portableText: PortableTextBlock[],
): string {
  if (!Array.isArray(portableText)) return "";

  return portableText
    .map((block) => {
      // Vérifiez si le bloc est un objet texte
      if (block._type === "block" && Array.isArray(block.children)) {
        return block.children.map((child) => child.text).join(" ");
      }
      return ""; // Ignorer les autres types de blocs
    })
    .join(" ");
}
