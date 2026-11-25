# MEKAZONE — Guide préparatoire à l'intégration des ressources visuelles

**Date :** 24 novembre 2026
**Statut :** préparation uniquement — aucune intégration effectuée.

## 1. Ressources disponibles

Voir `docs/assets-inventory-global.md` pour la liste complète.

## 2. Destination prévue

Selon `docs/assets-strategy.md` §7 :

- `public/images/hero/`
- `public/images/banners/`
- `public/images/categories/`
- `public/images/products/demo/`
- `public/images/pages/`
- `public/brand/`, `public/icons/`, `public/og/`

## 3. Formats et dimensions

- AVIF + WebP.
- Dimensions selon chaque lot (voir inventaire).
- JPEG de secours optionnel.

## 4. Budgets de poids

Selon `docs/assets-strategy.md` §9 et B6.1.

## 5. Règles de chargement

- `priority` uniquement sur le hero LCP.
- Lazy pour le reste.
- `width`/`height` ou `aspect-ratio` obligatoires.
- `placeholder="blur"` sur hero, catégories et bannières.
- Jamais de rendu au-delà de 2× la taille d'affichage.

## 6. Dépendances et réserves

- Validation visuelle humaine recommandée.
- Mise à jour du registre des licences avant intégration.
- Captures de licence à produire.
- Variantes responsives à produire si nécessaire.

## 7. Ressources B5 validées

- `product-auto-mats` — 800×800 — Visuel IA 3D.
- `product-moto-helmet` — 800×800 — Pexels.
- `product-cordless-drill` — 800×800 — Visuel IA 3D.
- `product-smartphone` — 800×800 — Pexels.

Masters respectifs : 1254×1254 (A, C) et 1600×1600 (B, D).

## 8. Catégories

Six en-têtes B4 validés : 1920×420 desktop / 1080×520 mobile.

Six photographies de catégories produites : 800×600 et 240×240, validées techniquement, non intégrées.
