# MEKAZONE — Stratégie images & ressources graphiques

**Statut :** validée par le propriétaire le 22/11/2026
**Portée :** tous les visuels du site (accueil, catalogue, fiche produit, panier, compte, admin, pages secondaires)
**Hors portée :** photographie des vrais produits (phase ultérieure, fournisseurs officiels)

> Aucun visuel n'est téléchargé ni généré à ce stade. Ce document est la référence unique pour la production et l'intégration des assets.

---

## 1. Décisions validées

| Sujet | Décision |
|---|---|
| Conteneur | 1440 px max |
| Zone utile | 1280 px |
| Gouttière | 24 px (12 px en mobile) |
| Grille produits | 4 colonnes desktop |
| Hero | Une photographie unique composée, atelier + véhicule, zone gauche sombre pour le texte HTML |
| Hero mobile | Cadrage dédié ; dérogation acceptée pour le recadrage 4:5 depuis une photographie paysage (décision du 23 novembre 2026) |
| Identité | Placeholder typographique provisoire, logo réel fourni plus tard |
| Produits de démo | Batterie, disque de frein, pneu, smartphone — génériques, non identifiables, fond blanc |
| Sources | Unsplash, Pexels, Pixabay ; fournisseurs officiels pour les vrais produits |
| Licences | Vérification individuelle + conservation des références (voir `assets-licences.md`) |
| Paiements | Libellés textuels neutres, aucun logo Wave / Orange Money / Visa |
| Formats | AVIF + WebP, JPEG de secours |
| Poids | Budgets du §12, vérifiés Lighthouse + Playwright |

---

## 2. Direction artistique photographique

Un seul univers visuel sur tout le site : **atelier automobile premium, sombre, technique, propre**.

**À retenir**
- Éclairage : contrasté, latéral, avec zones d'ombre profondes ; jamais de flash direct ni de blanc clinique.
- Colorimétrie : dominante anthracite/noir, accents chauds discrets (métal, cuir, rouge profond). Pas de bleu froid, pas de vert, pas de couleurs saturées hors palette.
- Matières : métal brossé, caoutchouc, plastique technique, béton d'atelier.
- Composition : espace négatif généreux, sujets nets, profondeur de champ maîtrisée.
- Personnes : évitées ou non identifiables (mains, silhouette, dos). Aucun visage reconnaissable sans autorisation.
- Marques : **aucun logo, emblème ou texte de marque lisible** dans le cadre. Si un logo apparaît, l'image est rejetée.

**À rejeter systématiquement**
- filigrane, texte incrusté, mention « stock photo » ;
- fond bleu/gris froid de banque d'images générique ;
- image manifestement générique sans lien avec l'automobile ou la technique ;
- résolution insuffisante pour le 2× (voir §5) ;
- présence d'une personne identifiable sans release.

**Cohérence inter-pages :** toutes les photos d'atelier (hero, à propos, bannière catégorie, connexion) doivent sembler issues de la même séance : même température de blanc, même contraste, même grain.

---

## 3. Grille et points de rupture

| Nom | Largeur | Colonnes produits | Gouttière |
|---|---|---|---|
| `xs` | 360–419 px | 2 | 12 px |
| `sm` | 420–639 px | 2 | 12 px |
| `md` | 640–1023 px | 3 | 16 px |
| `lg` | 1024–1279 px | 4 | 24 px |
| `xl` | 1280–1439 px | 4 | 24 px |
| `2xl` | ≥ 1440 px | 4 | 24 px |

Carte produit desktop : `(1280 − 3×24) / 4 = 302 px` de large, image 1:1 → **302 px affichés, 604 px nécessaires en 2×**.

---

## 4. Palette et overlays

| Token | Hex | Usage |
|---|---|---|
| `brand` | `#741E2B` | Boutons, accents, bandeaux, survols |
| `accent` | `#B5122B` | Badges promo, lien actif, prix promotionnel |
| `ink` | `#171719` | Header, nav, hero, footer, titres |
| `anthracite` | `#34373B` | Surfaces sombres secondaires, bandeau réassurance |
| `surface` | `#F3F3F3` | Séparateurs, fonds de section clairs |
| `white` | `#FFFFFF` | Catalogue, cartes, formulaires |

**Overlays autorisés (aucune autre couleur)**

```css
/* Hero — lisibilité du texte à gauche, sujet préservé à droite */
--overlay-hero: linear-gradient(90deg,
  rgba(23,23,25,.94) 0%,
  rgba(23,23,25,.74) 36%,
  rgba(23,23,25,.18) 66%,
  rgba(23,23,25,0) 100%);

/* Hero mobile — voile vertical, texte en bas */
--overlay-hero-mobile: linear-gradient(180deg,
  rgba(23,23,25,.15) 0%,
  rgba(23,23,25,.55) 45%,
  rgba(23,23,25,.95) 100%);

/* Bannières promotionnelles */
--overlay-promo: linear-gradient(135deg, #741E2B 0%, #B5122B 100%);
--overlay-promo-photo: linear-gradient(135deg, rgba(116,30,43,.92) 0%, rgba(181,18,43,.72) 55%, rgba(23,23,25,.55) 100%);

/* Photo claire (catégories) */
--overlay-photo: linear-gradient(180deg, rgba(23,23,25,0) 45%, rgba(23,23,25,.72) 100%);
```

Règles : pas de flou, pas de texture, pas d'overlay > 0,94 d'opacité sur une photo utile ; le noir `#171719` est le seul noir utilisé dans les dégradés.

---

## 5. Inventaire des emplacements

### 5.1 Fonds et bannières

| ID | Emplacement | Master desktop | Master mobile | Ratio | Formats | Priorité |
|---|---|---|---|---|---|---|
| `hero-main` | D — hero | 2400×1000 | 1080×1350 | 12:5 · 4:5 | AVIF, WebP | `priority` (LCP) |
| `banner-promo-sidebar` | F — « Offres spéciales » | 600×900 | 800×400 | 2:3 · 2:1 | AVIF, WebP | lazy |
| `banner-promo-large` | Boutique / panier vide | 1920×480 | 1080×540 | 4:1 · 2:1 | AVIF, WebP | lazy |
| `banner-category-header` | En-tête de catégorie | 1920×420 | 1080×520 | 32:7 · 2:1 | AVIF, WebP | lazy |
| `banner-auth-side` | Connexion / inscription | 1200×1600 | masqué en mobile | 3:4 | AVIF, WebP | lazy |
| `about-atelier` | À propos | 1600×900 | 1080×1080 | 16:9 · 1:1 | AVIF, WebP | lazy |

### 5.2 Produits (démonstration)

| ID | Usage | Master | Ratio | Variantes |
|---|---|---|---|---|
| `product-main` | Carte + image principale fiche | 1600×1600 | 1:1 | 320 / 604 / 960 |
| `product-gallery-2…5` | Galerie fiche | 1600×1600 | 1:1 | 640 / 1200 |
| `product-thumb` | Vignettes | 320×320 | 1:1 | 160 |
| `product-zoom` | Zoom (optionnel) | 2400×2400 | 1:1 | 1600 |
| `product-placeholder` | Fallback | 1200×1200 | 1:1 | 320 / 640 |

**4 produits de démonstration × 5 vues = 20 visuels**
1. `batterie-auto` — face, trois-quarts, dessus/bornes, détail connectique, en contexte compartiment moteur.
2. `disque-frein` — face, trois-quarts, tranche/épaisseur, détail perçage, paire.
3. `pneu` — face, trois-quarts, bande de roulement, flanc, jante montée.
4. `smartphone` — face allumé (écran neutre, sans interface de marque), dos, tranche, détail appareil photo, accessoires.

Contraintes : fond blanc pur ou détouré, produit centré, marge de sécurité 8 %, même ombre portée douce pour les 4 familles, **aucun texte de marque, aucun modèle identifiable**.

### 5.3 Catégories (6)

| Slug | Sujet photographique | Tuile | Vignette | Icône |
|---|---|---|---|---|
| `automobile` | Moteur / pièces auto en atelier | 800×600 | 240×240 | SVG |
| `moto` | Détail moto (chaîne, carénage, casque) | 800×600 | 240×240 | SVG |
| `machines-equipements` | Machines-outils / outillage pro | 800×600 | 240×240 | SVG |
| `informatique` | Composants PC / carte mère | 800×600 | 240×240 | SVG |
| `telephonie` | Smartphone + accessoires, flat lay | 800×600 | 240×240 | SVG |
| `accessoires-composants` | Connectique, visserie, câbles | 800×600 | 240×240 | SVG |

Cohérence : même fond pour les six (gris clair `#F3F3F3` ou atelier sombre, **pas les deux**), même angle, même traitement de contraste. Aucun texte dans l'image.

### 5.4 Identité visuelle

| Élément | Fichier | Origine |
|---|---|---|
| Logo clair (header/footer) | `brand/logo-horizontal-light.svg` | Placeholder typographique provisoire → logo fourni |
| Logo bordeaux | `brand/logo-horizontal-bordeaux.svg` | Déclinaison du même master |
| Marque seule | `brand/logo-mark.svg` | Déclinaison |
| Favicon | `favicon.ico` 32/48 | Généré du logo |
| Icônes PWA | `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` 180 | Générés |
| Open Graph | `og/og-default.jpg`, `og/og-produit.jpg` (1200×630) | Gabarit généré |

**Icônes SVG maison** (grille 24, `stroke="currentColor"`, 1,75 px) :
`ui/` : cart, search, user, chevron-down, chevron-right, arrow-right, menu, close, filter, sort, star, star-half, check, truck, shield-check, headset, credit-card, map-pin, package, trash, plus, minus, eye, heart, share.
`categories/` : automobile, moto, machines, informatique, telephonie, accessoires.
Réseaux sociaux : icônes neutres ou kit officiel de la plateforme uniquement (usage « lien vers le profil »), jamais modifiées.

### 5.5 Pages et états

| ID | Usage | Format | Origine |
|---|---|---|---|
| `empty-cart` | Panier vide | SVG | Généré |
| `empty-search` | Aucun résultat | SVG | Généré |
| `error-404`, `error-500` | Erreurs | SVG | Généré |
| `delivery-map` | Carte des zones (Livraison) | SVG 1200×800 | **Généré** (carte simplifiée du Sénégal, source ouverte Natural Earth) — pas de photo |
| `faq-visual` | FAQ (optionnel) | 1200×600 | Recherché, même série atelier |

---

## 6. Cadrages et règles par emplacement

| Emplacement | Ratio | Règle |
|---|---|---|
| Hero desktop | 12:5 | Sujet dans les 55 % droits ; 45 % gauches sombres et peu détaillés |
| Hero mobile | 4:5 | Composition verticale dédiée ou recadrage 4:5 accepté par dérogation ; sujet centré-bas ; texte en bas sur voile |
| Bannière sidebar | 2:3 | Texte en haut, visuel en bas |
| Bannière large | 4:1 → 2:1 | Safe area centrale 60 % |
| Carte produit | 1:1 **strict** | `object-fit: contain`, jamais `cover` |
| Galerie | 1:1 | Cadrage identique à la carte |
| Tuile catégorie | 4:3 | `cover`, point focal haut-centre |
| OG | 1,91:1 | Logo + titre lisibles à 300 px |

---

## 7. Organisation des fichiers

```
public/
├─ brand/
│  ├─ logo-horizontal-light.svg
│  ├─ logo-horizontal-bordeaux.svg
│  ├─ logo-mark.svg
│  ├─ favicon.ico
│  ├─ icon-192.png · icon-512.png · apple-touch-icon.png
├─ icons/
│  ├─ ui/*.svg
│  └─ categories/*.svg
├─ images/
│  ├─ hero/            hero-desktop.{avif,webp} · hero-mobile.{avif,webp}
│  ├─ banners/         promo-sidebar-desktop.* · promo-sidebar-mobile.*
│  │                   promo-large-desktop.* · promo-large-mobile.*
│  │                   category-header-desktop.* · category-header-mobile.*
│  ├─ categories/      automobile.{avif,webp} · automobile-sm.{avif,webp} · … (×6)
│  ├─ products/
│  │  ├─ _placeholder/ product-placeholder.{avif,webp}
│  │  └─ demo/<slug>/  01.{avif,webp} … 05.{avif,webp}
│  ├─ pages/           about-atelier.* · auth-side.*
│  └─ illustrations/   empty-cart.svg · empty-search.svg · error-404.svg · error-500.svg
├─ og/                 og-default.jpg · og-produit.jpg
└─ site.webmanifest
assets-src/            masters haute résolution, NON déployés
docs/                  assets-strategy.md · assets-licences.md · assets-recherche.md
```

**Conventions**
- `kebab-case`, minuscules, sans accents ni espaces.
- Suffixe `-desktop` / `-mobile` **uniquement** si le cadrage diffère réellement.
- Suffixe `-sm` pour la vignette.
- Aucun fichier > 400 Ko dans `public/`.
- `assets-src/` conservé hors build (masters, PSD/AI, originaux téléchargés).
- En production, les visuels administrables (produits, bannières) vivent dans **Supabase Storage**, pas dans `public/` ; `public/images/products/demo/` ne sert qu'à la phase maquette.

---

## 8. Intégration Next.js

```ts
// next.config.ts (extrait)
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [360, 420, 640, 768, 1024, 1280, 1440, 1536, 1920],
  imageSizes: [96, 160, 240, 320, 480],
  minimumCacheTTL: 2678400, // 31 jours, fichiers versionnés
  remotePatterns: [
    { protocol: 'https', hostname: '<project-ref>.supabase.co',
      pathname: '/storage/v1/object/public/**' },
  ],
}
```

| Emplacement | `sizes` |
|---|---|
| Carte produit | `(max-width: 639px) 45vw, (max-width: 1023px) 31vw, 302px` |
| Hero | `100vw` |
| Bannière sidebar | `(max-width: 1023px) 100vw, 300px` |
| Tuile catégorie | `(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 200px` |
| Vignette galerie | `80px` |
| Miniature panier | `72px` |

**Règles d'exécution**
- `priority` **uniquement** sur `hero-main` (LCP) ; tout le reste en lazy.
- `width`/`height` ou `aspect-ratio` sur chaque image → CLS cible 0.
- `placeholder="blur"` sur hero, catégories, bannières.
- `quality` 72–78.
- Art direction : deux composants (`hidden md:block` / `md:hidden`) ou `getImageProps` + `<picture>` pour ne charger qu'une variante.
- Jamais de rendu au-delà de 2× la taille d'affichage.
- `alt` descriptif obligatoire ; `alt=""` seulement pour un décor purement ornemental.

---

## 9. Budgets de poids

| Élément | Mobile | Desktop |
|---|---|---|
| Hero (LCP) | ≤ 180 Ko AVIF | ≤ 380 Ko AVIF |
| Carte produit | ≤ 45 Ko | ≤ 70 Ko |
| Tuile catégorie | ≤ 60 Ko | ≤ 90 Ko |
| Bannière | ≤ 80 Ko | ≤ 150 Ko |
| Images du 1er écran | ≤ 450 Ko | ≤ 900 Ko |
| Images page complète | ≤ 1,2 Mo | ≤ 2,2 Mo |

---

## 10. Vérification (Lighthouse + Playwright)

**Lighthouse** — build de production (`next build && next start`), preset mobile (Moto G Power, throttling 4G) :
- LCP ≤ 2,5 s ; CLS ≤ 0,05 ; Performance ≥ 85 ; Best Practices ≥ 95.
- Contrôle explicite : poids de l'image LCP, nombre de requêtes images, absence d'image surdimensionnée.

**Playwright**
- Captures à 1536 px (référence maquette) et 390 px (mobile), comparaison visuelle bloc par bloc.
- Journal réseau : aucune image > budget, une seule requête `priority`, aucune variante desktop chargée en mobile.
- Vérification que le hero mobile n'est pas le recadrage du desktop.

**Seuils de rejet** : une image qui dépasse son budget est recompressée ou remplacée, pas acceptée « temporairement ».

---

## 11. Supabase Storage (phase administration)

| Bucket | Lecture | Écriture | Contenu |
|---|---|---|---|
| `product-images` | publique | admin uniquement (RLS via `is_admin()`) | photos produits |
| `banners` | publique | admin uniquement | bannières, hero administrable |
| `branding` | publique | admin uniquement | logo, favicon |

**Chemin** : `products/{product_id}/{position}-{preset}.webp`, `banners/{slot}/{viewport}-{preset}.webp`.
**Presets générés à l'upload** (jamais à la volée par défaut) : produit 1600/960/640/320 ; bannière 2400/1080 ; catégorie 800/240.
**Remplacement** : nouveau nom de fichier ou suffixe `-v2` → invalidation du cache sans purge manuelle.
**Transformations à la volée** (`/render/image/…`) : réservées au plan Supabase payant — décision ultérieure, non bloquante.
**Suppression** : suppression douce côté base (`is_active`), purge du fichier seulement sur action admin explicite.

---

## 12. Licences et conformité

- Toute image issue d'une banque doit être enregistrée dans `docs/assets-licences.md` **avant** intégration.
- Vérifier pour chaque image : usage commercial autorisé, absence de filigrane, absence de marque lisible, absence de personne identifiable sans release.
- Conserver une capture d'écran de la page de licence au moment du téléchargement (preuve datée).
- Images de démonstration : mention visible « visuel de démonstration » sur la fiche produit et dans l'admin.
- Aucun logo de fabricant fabriqué, vectorisé ou recoloré.
- Aucun logo de moyen de paiement avant autorisation écrite du prestataire.

---

## 13. Suivi des assets

Statuts : `à rechercher` → `proposé` → `validé` → `intégré` → `remplacé`.

| Famille | Nombre | Statut global |
|---|---|---|
| Hero | 2 fichiers | à rechercher |
| Bannières | 6 fichiers | à rechercher |
| Catégories | 6 photos × 2 tailles | à rechercher |
| Produits démo | 20 visuels + placeholder | à rechercher / généré |
| Identité | 8 fichiers | généré (placeholder typographique) |
| Icônes | ~30 SVG | à générer |
| Illustrations d'états | 4 SVG | à générer |
| Carte livraison | 1 SVG | à générer |
| OG | 2 | à générer |

Détail des recherches : `docs/assets-recherche.md`.
Registre des licences : `docs/assets-licences.md`.
