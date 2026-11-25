# MEKAZONE — Inventaire des assets internes

**Statut :** produits, non intégrés à une page (aucun développement d'interface engagé)
**Date :** 22/11/2026
**Portée :** logo provisoire, icônes, illustrations d'états, placeholder produit, gabarits Open Graph, favicon et icônes PWA
**Aperçu :** `docs/apercu-assets-internes.png`

---

## 1. Identité provisoire

| Fichier | Format | Dimensions | Palette | Usage |
|---|---|---|---|---|
| `public/brand/logo-mark.svg` | SVG | viewBox 96×96 | `#741E2B`, `#FFFFFF` | Marque seule, réseaux, contextes carrés |
| `public/brand/logo-horizontal-light.svg` | SVG | viewBox 436×96 | `#FFFFFF`, `#171719` | Header et footer sombres |
| `public/brand/logo-horizontal-bordeaux.svg` | SVG | viewBox 436×96 | `#171719`, `#741E2B` | Fonds blancs, documents, factures |
| `assets-src/brand/favicon-mark.svg` | SVG (master) | viewBox 96×96 | `#741E2B`, `#FFFFFF` | Source du favicon, trou de serrure agrandi |
| `assets-src/brand/icon-square.svg` | SVG (master) | viewBox 512×512 | `#741E2B`, `#FFFFFF` | Source des icônes PWA |

**Construction du mark** : hexagone (écrou mécanique) + trou de serrure (clé), sans dégradé, sans ombre, sans effet — lisible de 24 px à l'infini.
**Construction du wordmark** : `MEKA` / `ZONE`, graisse 800, `textLength` fixé pour que la largeur reste identique quel que soit le repli de police. `Archivo` en première position, `Inter`, puis pile système.
**Limite assumée** : le logo est un placeholder typographique. Il sera remplacé par le logo réel (tracés vectorisés) dès réception ; aucun fichier ne dépend de sa géométrie interne.

## 2. Favicon et icônes PWA

| Fichier | Dimensions | Contenu |
|---|---|---|
| `public/brand/favicon.ico` | 16, 32, 48 px (3 entrées PNG) | Hexagone bordeaux, trou de serrure blanc, fond transparent |
| `public/brand/icon-192.png` | 192×192 | Carré bordeaux plein, mark blanc |
| `public/brand/icon-512.png` | 512×512 | Carré bordeaux plein, mark blanc |
| `public/brand/apple-touch-icon.png` | 180×180 | Carré bordeaux plein (pas de transparence, iOS masque les angles) |

Poids : favicon 2 Ko, icon-192 2 Ko, icon-512 5 Ko, apple-touch 2 Ko.
Le mark occupe 56 % du carré : marge de sécurité suffisante pour un usage « maskable ».
**Non créé volontairement** : `site.webmanifest` (relève de la configuration applicative, pas d'un asset).

## 3. Icônes d'interface (25)

Grille 24×24 · `fill="none"` · `stroke="currentColor"` · `stroke-width="1.75"` · extrémités et jonctions arrondies · `aria-hidden="true"`.

`cart` · `search` · `user` · `chevron-down` · `chevron-right` · `arrow-right` · `menu` · `close` · `filter` · `sort` · `star` · `star-half` · `check` · `truck` · `shield-check` · `headset` · `credit-card` · `map-pin` · `package` · `trash` · `plus` · `minus` · `eye` · `heart` · `share`

Emplacement : `public/icons/ui/<nom>.svg`

**Usage couleur** : la couleur vient du texte parent (`currentColor`) lorsque l'icône est intégrée en JSX. Dans une balise `<img>`, `currentColor` retombe sur du noir — préférer l'inline ou un masque CSS pour les états bordeaux.

**Cas particuliers** : `star-half` utilise un `clipPath` interne (identifiant préfixé `mkz-`) pour un remplissage strictement à moitié ; `share` est composé de trois nœuds et deux liens.

## 4. Icônes de catégories (6)

Même grille et mêmes constantes de trait, dessins spécifiques :

| Fichier | Sujet |
|---|---|
| `automobile.svg` | Voiture de profil |
| `moto.svg` | Moto, deux roues et cadre |
| `machines.svg` | Engrenage |
| `informatique.svg` | Ordinateur portable |
| `telephonie.svg` | Smartphone |
| `accessoires.svg` | Connecteur / prise |

Emplacement : `public/icons/categories/<slug>.svg`

## 5. Illustrations d'états (4)

| Fichier | Dimension | Message | Accent |
|---|---|---|---|
| `empty-cart.svg` | 480×360 | Panier vide | Pastille « + » bordeaux |
| `empty-search.svg` | 480×360 | Aucun résultat | Carte en pointillés + « ! » |
| `error-404.svg` | 480×360 | Engrenage à dent manquante | Dent détachée bordeaux |
| `error-500.svg` | 480×360 | Triangle d'alerte | Point d'exclamation bordeaux |

Style commun : disque `#F3F3F3`, trait `#34373B` de 6 à 14 px, accent en `currentColor` (couleur par défaut `#B5122B`, surchargeable en CSS). Aucun texte dans l'image : les titres restent du HTML, pour l'accessibilité et la traduction.

## 6. Placeholder produit

| Fichier | Dimensions | Poids |
|---|---|---|
| `public/images/products/_placeholder/product-placeholder.svg` | 1200×1200 | 1,2 Ko |
| `public/images/products/_placeholder/product-placeholder.png` | 1200×1200 | 18 Ko |

Cadre en pointillés `#F3F3F3`, silhouette neutre, filet bordeaux, mention **« VISUEL DE DÉMONSTRATION »** et signature MEKAZONE. Ratio 1:1 conforme aux cartes et à la galerie. Le SVG est la source ; le PNG sert de master pour `next/image` tant que la conversion AVIF/WebP n'est pas faite par le pipeline.

## 7. Gabarits Open Graph

| Fichier | Dimensions | Poids | Contenu |
|---|---|---|---|
| `public/og/og-default.png` | 1200×630 | 41 Ko | Fond `#171719`, mark, wordmark, « Toutes les pièces, une seule destination. », ligne de catégories |
| `public/og/og-produit.png` | 1200×630 | 28 Ko | Zone texte + panneau blanc « PHOTO PRODUIT », champs génériques (nom, référence, prix) |
| `assets-src/og/og-default.svg` | master | — | Source éditable |
| `assets-src/og/og-produit.svg` | master | — | Source éditable |

Aucune donnée commerciale inventée : les champs affichent « Nom du produit », « Référence · Marque », « Prix en FCFA » et « Visuel de démonstration ». Le PNG est le format servi (compatibilité sociale) ; les masters SVG restent hors `public/`.

## 8. Décisions techniques

- **Aucune dépendance ajoutée** : les SVG sont écrits à la main, les PNG générés par rendu Chrome headless (Playwright déjà disponible), le `.ico` assemblé par un script Node temporaire hors projet.
- **Pas de photo, pas de banque d'images, aucune génération photographique.**
- **Pas d'AVIF/WebP pour l'instant** : la conversion sera faite par `next/image` à partir des masters (PNG/SVG), conformément à `assets-strategy.md`. Les masters lourds restent dans `assets-src/`.
- **Couleurs** : uniquement `#741E2B`, `#B5122B`, `#171719`, `#34373B`, `#F3F3F3`, `#FFFFFF`. Aucune teinte intermédiaire.
- **Accessibilité** : `role="img"` + `<title>` sur les logos, illustrations et placeholder ; `aria-hidden="true"` sur les icônes décoratives.

## 9. Contrôles effectués

- 42 fichiers SVG ouverts dans Chrome : **aucune erreur de parsing**, `viewBox` présent partout.
- Dimensions des PNG vérifiées par lecture d'en-tête : 512, 192, 180, 1200×630 (×2), 1200×1200.
- `favicon.ico` : 3 entrées (16/32/48), 1,7 Ko, entêtes conformes.
- Poids total de `public/` : **185 Ko** pour 46 fichiers — très en dessous des budgets.
- Planche d'aperçu générée et inspectée visuellement : `docs/apercu-assets-internes.png`.

## 10. Reste à faire (hors périmètre autorisé)

1. Remplacer le logo provisoire par le logo réel.
2. Sourcing des photographies (hero, catégories, bannières, produits de démo) — **bloqué**, en attente d'autorisation.
3. Conversion AVIF/WebP et déclinaisons de tailles à l'intégration.
4. `site.webmanifest` et balises `metadata` (phase applicative).
5. Vérification Lighthouse/Playwright des budgets — nécessite une page réelle.
