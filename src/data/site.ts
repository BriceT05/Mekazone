import { homeCategories } from "@/data/home";

// Contenu du Footer. Toutes les informations commerciales vérifiables vivent ici :
// les zones sans donnée confirmée restent vides et ne sont pas rendues (D2.7 § 5).
// Aucune coordonnée, aucun réseau social, aucun prestataire de paiement n'est inventé.

export type FooterLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

/** Champs tous optionnels : un champ absent supprime la ligne correspondante. */
export type SiteContact = {
  email?: string;
  phone?: string;
  whatsapp?: string;
  addressLines?: string[];
};

export const brand = {
  name: "MEKAZONE",
  // Déclinaison claire dérivée du logo officiel : éléments noirs recolorisés en blanc,
  // emblème rouge conservé, géométrie et transparence du master inchangées.
  // Master intact : public/images/branding/mekazone-logo-transparent.png
  logo: {
    src: "/brand/logo-horizontal-light.png",
    width: 1800,
    height: 595,
    // Le logo officiel contient déjà « AUTO • MOTO • ATELIER • HIGH-TECH » :
    // aucun slogan n'est ajouté ici.
  },
  description:
    "Pièces, accessoires et équipements sélectionnés pour l'automobile, la moto, les machines, l'informatique et la téléphonie.",
};

export const footerShopLinks: FooterLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Nos catégories", href: "/#categories-heading" },
  { label: "Sélection de produits", href: "/#products-heading" },
];

// Libellés courts du Footer ; les hrefs sont dérivés des catégories réelles
// (mêmes ancres que le Header) pour qu'ils ne puissent pas diverger.
const footerCategoryLabels: Record<string, string> = {
  machines: "Machines",
  accessoires: "Accessoires",
};

export const footerCategoryLinks: FooterLink[] = homeCategories.map((category) => ({
  label: footerCategoryLabels[category.slug] ?? category.label,
  href: `/#category-${category.slug}`,
}));

export const footerDelivery = {
  title: "Livraison",
  // Formulations validées en D2.6bis / D2.8 : aucun délai, tarif, gratuité ni garantie.
  note: "Livraison au Sénégal 🇸🇳",
  status: "Conditions de livraison et de retour en cours de publication",
};

export const footerCopyright = "© 2026 MEKAZONE";

export const footerContactSectionLabel = "Contact";

// Zones masquées tant qu'aucune donnée confirmée n'existe (D4 / D5) :
// vides, elles ne produisent aucun élément dans le DOM.
export const siteContact: SiteContact = {};
export const footerSocialLinks: SocialLink[] = [];
export const footerPaymentLabels: string[] = [];

export const hasContactInfo = Object.values(siteContact).some((value) =>
  Array.isArray(value) ? value.length > 0 : Boolean(value),
);
