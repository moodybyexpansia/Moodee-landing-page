import type { PortableTextBlock, SanityDocumentLike } from "sanity";

export interface TestimonialType extends SanityDocumentLike {
  title: string;
  content: string;
  note: number;
  author: string;
  position?: string; // Optionnel, si certaines données n'ont pas ce champ
  authorImageUrl?: string; // URL de l'image associée
  publishedAt?: string; // Date de publication, optionnelle
}

export interface FAQType extends SanityDocumentLike {
  question: string; // Question posée
  answer: string; // Réponse associée
}

export interface PromptType extends SanityDocumentLike {
  title: string; // Titre du prompt
  slug: {
    current: string; // Slug de l'article (URL friendly)
    _type: "slug"; // Type Sanity pour le slug
  };
  date: string; // Date associée au prompt en format ISO
  prompt: string; // Le texte du prompt
  response: string; // La réponse générée pour ce prompt
  category: string; // Catégorie associée (par exemple, "veille-concurrentielle")
  imageUrl?: string; // URL complète de l'image (optionnelle, pour faciliter l'accès)
}

export interface ArticleType extends SanityDocumentLike {
  title: string; // Titre du prompt
  slug: {
    current: string; // Slug de l'article (URL friendly)
    _type: "slug"; // Type Sanity pour le slug
  };
  date: string; // Date associée au prompt en format ISO
  imageUrl?: string; // URL complète de l'image (optionnelle, pour faciliter l'accès)
  content: PortableTextBlock[]; // Contenu en format Portable Text
}
