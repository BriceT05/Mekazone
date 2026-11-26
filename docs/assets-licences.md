# MEKAZONE — Registre des licences d'images

**Rôle :** preuve de provenance et de droits pour chaque visuel tiers utilisé sur le site.
**Règle :** aucune image n'entre dans `public/` ou Supabase Storage sans une ligne renseignée ici.
**Conservation :** ce fichier est versionné ; les captures d'écran de licence sont stockées dans `assets-src/licences/` (hors build).

---

## 1. Synthèse des licences des sources retenues

| Plateforme | Usage commercial | Attribution | Interdits principaux | Point de vigilance |
|---|---|---|---|---|
| **Unsplash** (licence Unsplash) | Oui, gratuite | Non obligatoire (appréciée) | Vendre une copie non modifiée ; redistribuer pour recréer un service concurrent ; utiliser les photos pour suggérer une caution | Les contenus **Unsplash+** sont payants et sous licence différente → vérifier l'absence de badge « + » |
| **Pexels** (licence Pexels) | Oui, gratuite | Non obligatoire | Vendre des copies non modifiées ; laisser croire que le modèle ou la marque approuve le site ; redistribuer sur une autre banque | Vérifier l'absence de marque/logo visible et de visage identifiable |
| **Pixabay** (Content License) | Oui, gratuite | Non obligatoire | Redistribuer l'image telle quelle comme produit principal ; usage diffamatoire ; identifier des personnes | Certains contenus historiques ont des licences plus restrictives → relire la fiche |
| **Natural Earth** (carte) | Oui, domaine public | Non | — | Citer la source par courtoisie |
| **Lucide** (icônes) | Oui (MIT) | Conserver la licence | — | Utiliser le paquet officiel, ne pas modifier la licence |

> Les licences de banques d'images ne couvrent **pas** les droits liés aux marques, aux logos, aux œuvres d'art ou au droit à l'image. Ces vérifications restent manuelles, image par image.

---

## 2. Modèle de ligne (à dupliquer)

```
| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
```

`Vérifs` = `logo:non` · `visage:non` · `filigrane:non` · `texte:non`
`Statut` = `proposé` / `validé` / `intégré` / `rejeté`

---

## 3. Registre

### 3.1 Hero

| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| `hero-main-desktop` | `images/hero/hero-desktop` | D — hero | — | — | — | — | — | — | — | à rechercher |
| `hero-main-mobile` | `images/hero/hero-mobile` | D — hero mobile | Unsplash | https://unsplash.com/photos/wacb2ChxA4k | Connor Botts | Unsplash | 2026-11-23 | — | à produire | Source et dérogation validées — exports AVIF/WebP validés techniquement — intégration non effectuée |

**Détail `hero-main-mobile` — décision du 23 novembre 2026**

- **Décision :** source sélectionnée définitivement ; dérogation explicite acceptée pour le recadrage 4:5 d'une photographie paysage (voir `docs/assets-recherche.md`, § 1).
- **Master :** 2701 × 3376.
- **Export JPEG de référence :** 1080 × 1350 (4:5) — SHA-256 `ae178746b54b4b9273ce25baaac614dc3313696a088c3e7c9d6a8ce0e448c44f`.
- **Export AVIF :** 1080 × 1350 — 177 064 o — SHA-256 `c32c210453775d5d9da57accd288ae17bf451796bb9a159d0b600e0f51720342`.
- **Export WebP :** 1080 × 1350 — 242 432 o — SHA-256 `b754bd785b30ad03684d2d6304b7ade1d4df1bbb06defcae12086bc3b4fefcbc`.
- **Fiche de licence validée :** `fiche-licence-hero-main-mobile.md` (document de travail, non encore intégré au projet).
- **Statut :** licence et provenance validées ; choix photographique validé ; dérogation acceptée ; exports optimisés validés techniquement ; intégration dans le site non effectuée.
- **Reste à effectuer :** intégration dans `public/` et capture de licence. Aucun fichier n'a été copié dans `public/`.
- **Capture de licence :** à produire dans `assets-src/licences/hero-main-mobile.png`.
- **Notes techniques :** master conservé intact ; masquage de l'autocollant appliqué uniquement aux exports ; paramètres de masquage conservés ; redimensionnement sans agrandissement ; conversion explicite en sRGB ; génération AVIF/WebP directement depuis l'image préparée ; absence de recompression JPEG intermédiaire ; budgets de poids respectés. Polices Archivo et Inter validées dans R2.1 ; rendu HTML/CSS testé aux largeurs 360, 390 et 430 px.

### 3.2 Bannières

**B2 — Bannières promotionnelles latérales (sidebar)**

| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| `promo-sidebar-desktop` | `images/banners/promo-sidebar-desktop.{avif,webp}` | F — sidebar | Pexels | https://www.pexels.com/photo/cloth-above-the-tools-8478258/ | Sergey Meshkov | Pexels License | vérification source 2026-11-23 (intégration non effectuée) | logo:non · visage:non · filigrane:non · texte:non | produite — `assets-src/licences/promo-sidebar-desktop.png` | validé — exports optimisés présents dans `public/images/banners/` (non committés) |
| `promo-sidebar-mobile` | `images/banners/promo-sidebar-mobile.{avif,webp}` | F — mobile | Pexels | https://www.pexels.com/photo/mechanical-tools-in-a-tool-box-10126655/ | Auto Records | Pexels License | vérification source 2026-11-23 (intégration non effectuée) | logo:non · visage:non · filigrane:non · texte:non | produite — `assets-src/licences/promo-sidebar-mobile.png` | validé — exports optimisés présents dans `public/images/banners/` (non committés) |

**B3 — Grandes bannières promotionnelles**

| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| `promo-large-desktop` | `images/banners/promo-large-desktop.{avif,webp}` | Boutique | Pexels | https://www.pexels.com/photo/mechanic-assembling-engine-with-precision-tools-33559451 | Auto Tech | Pexels License | vérification source 2026-11-23 (intégration non effectuée) | logo:non · visage:non · filigrane:non · texte:non | produite — `assets-src/licences/promo-large.png` | validé — exports optimisés présents dans `public/images/banners/` (non committés) |
| `promo-large-mobile` | `images/banners/promo-large-mobile.{avif,webp}` | Boutique mobile | Pexels | https://www.pexels.com/photo/mechanic-assembling-engine-with-precision-tools-33559451 | Auto Tech | Pexels License | vérification source 2026-11-23 (intégration non effectuée) | logo:non · visage:non · filigrane:non · texte:non | produite — `assets-src/licences/promo-large.png` (source commune) | validé — exports optimisés présents dans `public/images/banners/` (non committés) |

**B4 — En-têtes de catégories (non régularisés dans ce lot)**

| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| `category-header-desktop` | `images/banners/category-header-desktop` | En-tête catégorie | — | — | — | — | — | — | — | à rechercher |
| `category-header-mobile` | `images/banners/category-header-mobile` | En-tête catégorie mobile | — | — | — | — | — | — | — | à rechercher |

> Cohérence avec §6.3 et §6.4 : mêmes sources, auteurs, URL et dates de vérification (23 nov 2026) et même liste de vérifs. Les captures de licence pour B2 et B3 ont été produites le 26 novembre 2026 dans `assets-src/licences/` (`promo-sidebar-desktop.png`, `promo-sidebar-mobile.png`, `promo-large.png`) ; preuves authentiques de la fiche Pexels (licence « Free »). Les masters sont conservés intacts dans `C:\Users\Fabrice\AppData\Local\Temp\mekazone-banners\` ; les anciens exports restent dans `…/B2.5/exports/` et `…/B3.4/exports/`.

### 3.3 Catégories

**Dates — convention appliquée à cette section :** la colonne `Date` porte la **date d'intégration** des fichiers dans `public/`. Elle ne vaut **pas** date de vérification de la source : la consultation de la fiche Unsplash (licence, absence de badge Unsplash+, absence de logo/visage/filigrane) n'a pas été datée pour ces six photographies. Les deux informations sont donc dissociées dans chaque ligne.

| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| `cat-automobile` | `images/categories/automobile-800x600.jpg`, `automobile-240x240.jpg` | Catégorie | Unsplash | https://unsplash.com/fr/photos/compartiment-moteur-noir-et-rouge-SlgLD4_drDA | Joshua Aragon | Unsplash | intégration 2026-11-25 — vérification source non datée | logo:non · visage:non · filigrane:non · texte:non | à produire dans `assets-src/licences/cat-automobile.png` (inexistante à ce jour) | intégré — capture de licence manquante |
| `cat-moto` | `images/categories/moto-800x600.jpg`, `moto-240x240.jpg` | Catégorie | Unsplash | https://unsplash.com/photos/9ehmPYBJkyU | LouisMoto | Unsplash | intégration 2026-11-25 — vérification 2026-11-25 | logo:non · visage:non · filigrane:non · texte:non | à produire dans `assets-src/licences/cat-moto.png` (inexistante à ce jour) | intégré — capture de licence manquante |
| `cat-machines` | `images/categories/machines-800x600.jpg`, `machines-240x240.jpg` | Catégorie | Unsplash | https://unsplash.com/fr/photos/outil-a-main-en-acier-inoxydable-et-bleu-hJ4JxDJkRUw | nik biziuk | Unsplash | intégration 2026-11-25 — vérification source non datée | logo:non · visage:non · filigrane:non · texte:non | à produire dans `assets-src/licences/cat-machines.png` (inexistante à ce jour) | intégré — capture de licence manquante |
| `cat-informatique` | `images/categories/informatique-800x600.jpg`, `informatique-240x240.jpg` | Catégorie | Unsplash | https://unsplash.com/fr/photos/processeur-informatique-maintenu-par-une-pince-a-epiler-S4jSvcHYcOs | Brian Kostiuk | Unsplash | intégration 2026-11-25 — vérification source non datée | logo:non · visage:non · filigrane:non · texte:non | à produire dans `assets-src/licences/cat-informatique.png` (inexistante à ce jour) | intégré — capture de licence manquante |
| `cat-telephonie` | `images/categories/telephonie-800x600.jpg`, `telephonie-240x240.jpg` | Catégorie | Unsplash | https://unsplash.com/fr/photos/smartphone-noir--baMCm2CLKM | Matt Wojtaś | Unsplash | intégration 2026-11-25 — vérification source non datée | logo:non · visage:non · filigrane:non · texte:non | à produire dans `assets-src/licences/cat-telephonie.png` (inexistante à ce jour) | intégré — capture de licence manquante |
| `cat-accessoires` | `images/categories/accessoires-800x600.jpg`, `accessoires-240x240.jpg` | Catégorie | Unsplash | https://unsplash.com/fr/photos/un-couple-de-vis-pose-sur-une-table-wYKgV2SZMc8 | Raindrops Photography | Unsplash | intégration 2026-11-25 — vérification source non datée | logo:non · visage:non · filigrane:non · texte:non | à produire dans `assets-src/licences/cat-accessoires.png` (inexistante à ce jour) | intégré — capture de licence manquante |

### 3.4 Produits de démonstration

| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| `demo-batterie-01…05` | `images/products/demo/batterie-auto/` | Carte + fiche | — | — | — | — | — | — | — | à rechercher |
| `demo-disque-01…05` | `images/products/demo/disque-frein/` | Carte + fiche | — | — | — | — | — | — | — | à rechercher |
| `demo-pneu-01…05` | `images/products/demo/pneu/` | Carte + fiche | — | — | — | — | — | — | — | à rechercher |
| `demo-smartphone-01…05` | `images/products/demo/smartphone/` | Carte + fiche | — | — | — | — | — | — | — | à rechercher |

### 3.5 Pages

| ID | Fichier final | Emplacement | Source | URL | Auteur | Licence | Date | Vérifs | Capture | Statut |
|---|---|---|---|---|---|---|---|---|---|---|
| `about-atelier` | `images/pages/about-atelier` | À propos | — | — | — | — | — | — | — | à rechercher |
| `auth-side` | `images/pages/auth-side` | Connexion | — | — | — | — | — | — | — | à rechercher |
| `delivery-map` | `images/pages/delivery-map.svg` | Livraison | Natural Earth | naturalearthdata.com | Natural Earth | Domaine public | — | — | — | à générer |

### 3.6 Assets produits par MEKAZONE (aucune licence tierce)

| Famille | Fichiers | Auteur | Licence | Statut |
|---|---|---|---|---|
| Logo placeholder typographique | `brand/logo-*` | Interne | Propriété MEKAZONE | à générer |
| Icônes d'interface et de catégories | `icons/**` | Interne (inspirées de Lucide, MIT) | MIT / propriété MEKAZONE | à générer |
| Illustrations d'états | `illustrations/*.svg` | Interne | Propriété MEKAZONE | à générer |
| Placeholder produit | `products/_placeholder/*` | Interne | Propriété MEKAZONE | à générer |
| Gabarits Open Graph | `og/*` | Interne | Propriété MEKAZONE | à générer |

---

## 4. Contrôles à effectuer avant validation

1. La page de licence affichée correspond bien à la licence gratuite (pas de badge payant).
2. Aucun logo, emblème ou nom de marque lisible dans l'image.
3. Aucune personne identifiable sans autorisation écrite.
4. Aucun filigrane, aucune signature, aucun texte incrusté.
5. Résolution ≥ 2× la taille d'affichage prévue.
6. Absence de contenu choquant, politique ou trompeur.
7. Capture d'écran de la fiche source enregistrée dans `assets-src/licences/<id>.png`.
8. Ligne du registre complétée **avant** le déplacement du fichier dans `public/`.

---

## 5. Retrait d'une image

Si une licence est contestée ou une image retirée par la banque : supprimer le fichier de `public/` et de Supabase Storage, marquer la ligne `rejeté`, consigner la date et la raison, remplacer par une image déjà validée. Ne jamais conserver un visuel dont la provenance n'est pas prouvée.

---

## 6. Registre consolidé B8 (lots validés)

### 6.1 Assets internes

| Famille | Fichiers | Source / origine | Licence | Notes |
|---|---|---|---|---|
| Logo placeholder | `brand/logo-*` | Interne | Propriété MEKAZONE | Placeholder typographique |
| Icônes UI et catégories | `icons/**` | Interne, inspirées de Lucide | MIT / propriété MEKAZONE | Aucune modification de licence |
| Illustrations d'états | `illustrations/*.svg` | Interne | Propriété MEKAZONE | — |
| Placeholder produit | `products/_placeholder/*` | Interne | Propriété MEKAZONE | Mention « visuel de démonstration » |
| Gabarits Open Graph | `og/*` | Interne | Propriété MEKAZONE | — |
| Carte livraison | `images/pages/delivery-map.svg` | Natural Earth | Domaine public | Citer la source par courtoisie |

### 6.2 Hero

| ID | Fichier | Source | URL | Auteur | Licence | Date | Vérifs | Statut |
|---|---|---|---|---|---|---|---|---|
| `hero-main-desktop` | `images/hero/hero-desktop` | Unsplash | https://unsplash.com/photos/wacb2ChxA4k | Connor Botts | Unsplash | non renseigné | logo:non · visage:non · filigrane:non · texte:non | source sélectionnée — dimensions originales 6000×3376 |
| `hero-main-mobile` | `images/hero/hero-mobile` | Unsplash | https://unsplash.com/photos/wacb2ChxA4k | Connor Botts | Unsplash | 2026-11-23 | logo:non · visage:non · filigrane:non · texte:non | Source sélectionnée — dérogation acceptée — exports validés techniquement |

Détail `hero-main-mobile` : master 2701×3376 ; exports AVIF 1080×1350 (177 064 o) et WebP 1080×1350 (242 432 o) ; dérogation au recadrage paysage acceptée le 23 novembre 2026 ; aucune copie dans `public/`.

### 6.3 B2 — Bannières promotionnelles latérales

| ID | Fichier | Source | URL | Auteur | Licence | Date | Vérifs | Statut |
|---|---|---|---|---|---|---|---|---|
| `promo-sidebar-desktop` | `images/banners/promo-sidebar-desktop` | Pexels | https://www.pexels.com/photo/cloth-above-the-tools-8478258/ | Sergey Meshkov | Pexels | 2026-11-23 | logo:non · visage:non · filigrane:non · texte:non | validé |
| `promo-sidebar-mobile` | `images/banners/promo-sidebar-mobile` | Pexels | https://www.pexels.com/photo/mechanical-tools-in-a-tool-box-10126655/ | Auto Records | Pexels | 2026-11-23 | logo:non · visage:non · filigrane:non · texte:non | validé |

> Cohérence (D2.5ter) : voir §3.2 pour la version consolidée. Exports optimisés présents dans `public/images/banners/` (non committés) ; masters intacts ; anciens exports conservés ; captures produites dans `assets-src/licences/` (`promo-sidebar-desktop.png`, `promo-sidebar-mobile.png`, `promo-large.png`).

### 6.4 B3 — Grandes bannières promotionnelles

| ID | Fichier | Source | URL | Auteur | Licence | Date | Vérifs | Statut |
|---|---|---|---|---|---|---|---|---|
| `promo-large-desktop` / `-mobile` | `images/banners/promo-large-*` | Pexels | https://www.pexels.com/photo/mechanic-assembling-engine-with-precision-tools-33559451 | Auto Tech | Pexels | 2026-11-23 | logo:non · visage:non · filigrane:non · texte:non | validé |

Réserve documentée : contenant translucide vert-jaune en haut à gauche et numéros de fonderie sur le bloc-moteur, non retouchés.

> Cohérence (D2.5ter) : voir §3.2 pour la version consolidée. Exports optimisés présents dans `public/images/banners/` (non committés) ; masters intacts ; anciens exports conservés ; captures produites dans `assets-src/licences/` (`promo-sidebar-desktop.png`, `promo-sidebar-mobile.png`, `promo-large.png`).

### 6.5 B4 — En-têtes de catégories

| ID | Fichier | Source | URL | Auteur | Licence | Date | Vérifs | Statut |
|---|---|---|---|---|---|---|---|---|
| `category-header-desktop` / `-mobile` | `images/banners/category-header-*` | Pexels | https://www.pexels.com/photo/composition-of-assorted-service-instruments-on-black-surface-7238606/ | Maddy Freddie | Pexels | 2026-11-23 | logo:non · visage:non · filigrane:non · texte:non | validé |

### 6.6 B5 — Produits de démonstration

| ID | Fichier | Source | URL | Auteur | Licence / origine | Date | Vérifs | Statut |
|---|---|---|---|---|---|---|---|---|
| `product-auto-mats` | `images/products/demo/auto-mats/` | — | — | — | Visuel IA 3D | non renseigné | logo:non · visage:non · filigrane:non · texte:non | validé avec réserve |
| `product-moto-helmet` | `images/products/demo/moto-helmet/` | Pexels | https://www.pexels.com/photo/motorcycle-helmet-on-wall-26390764 | Şahin Doğdu | Pexels | non renseigné | logo:non · visage:non · filigrane:non · texte:non | validé |
| `product-cordless-drill` | `images/products/demo/cordless-drill/` | — | — | — | Visuel IA 3D | non renseigné | logo:non · visage:non · filigrane:non · texte:non | validé avec réserve |
| `product-smartphone` | `images/products/demo/smartphone/` | Pexels | https://www.pexels.com/photo/white-android-smartphone-near-black-android-smartphone-215581 | John Tekeridis | Pexels | non renseigné | logo:non · visage:non · filigrane:non · texte:non | validé |

Précisions :

- Le périmètre validé est de quatre photos principales, une par produit.
- A (`product-auto-mats`) et C (`product-cordless-drill`) sont des visuels 3D originaux générés par IA (1254×1254), non des photographies de produits commercialisés.
- B (`product-moto-helmet`) : Pexels 26390764, Şahin Doğdu, Pexels License — https://www.pexels.com/photo/motorcycle-helmet-on-wall-26390764
- D (`product-smartphone`) : Pexels 215581, John Tekeridis, Pexels License — https://www.pexels.com/photo/white-android-smartphone-near-black-android-smartphone-215581

Note : les vues secondaires sont facultatives et ne sont mentionnées que si elles existent réellement. Aucune vue secondaire n'est retenue dans le périmètre validé.

### 6.7 B6 — Pages

| ID | Fichier | Source | URL | Auteur | Licence | Date | Vérifs | Statut |
|---|---|---|---|---|---|---|---|---|
| `about-atelier` | `images/pages/about-atelier` | Pexels | https://www.pexels.com/photo/automotive-workshop-tools-and-equipment-setup-28641472 | Tahamie Farooqui | Pexels | 2026-11-23 | logo:non · visage:non · filigrane:non · texte:non | validé |
| `auth-side` | `images/pages/auth-side` | Pexels | https://www.pexels.com/photo/auto-repair-workshop-20872015 | Shuaizhi Tian | Pexels | 2026-11-23 | logo:non · visage:non · filigrane:non · texte:non | validé |

---

## 7. Informations non vérifiées

- `hero-main-desktop` : source non renseignée dans les documents consultés.
- Produits A et C : origine IA documentée, pas de source photographique tierce.
- Dates de vérification non renseignées pour les produits B et D.
- Captures de licence à produire dans `assets-src/licences/` pour les ressources non encore intégrées.
- Six photos de catégories (§3.3, §6.8) : date de vérification de la source non renseignée ; la date indiquée est celle de l'intégration dans `public/`.

### 6.8 Catégories (photographies intégrées)

| Catégorie | Auteur | ID Unsplash | URL | Dimensions natives | Licence | Intégration | Vérification de la source | Statut |
|---|---|---|---|---|---|---|---|---|
| Automobile | Joshua Aragon | photo-1622062929134-a8fa99b46f56 | https://unsplash.com/fr/photos/compartiment-moteur-noir-et-rouge-SlgLD4_drDA | 6000×3376 | Unsplash | 2026-11-25 | non datée | intégré — 800×600 + 240×240 JPEG progressifs — capture de licence manquante |
| Moto | LouisMoto | photo-1657873961503-89a65459de2b | https://unsplash.com/photos/9ehmPYBJkyU | 6000×3376 | Unsplash | 2026-11-25 | 2026-11-25 | intégré — 800×600 + 240×240 JPEG progressifs — capture de licence manquante |
| Machines et équipements | nik biziuk | photo-1602664876866-d3b33b77756b | https://unsplash.com/fr/photos/outil-a-main-en-acier-inoxydable-et-bleu-hJ4JxDJkRUw | 6000×4000 | Unsplash | 2026-11-25 | non datée | intégré — 800×600 + 240×240 JPEG progressifs — capture de licence manquante |
| Informatique | Brian Kostiuk | photo-1494083306499-e22e4a457632 | https://unsplash.com/fr/photos/processeur-informatique-maintenu-par-une-pince-a-epiler-S4jSvcHYcOs | 6028×4012 | Unsplash | 2026-11-25 | non datée | intégré — 800×600 + 240×240 JPEG progressifs — capture de licence manquante |
| Téléphonie | Matt Wojtaś | photo-1557774058-c9148bc6e481 | https://unsplash.com/fr/photos/smartphone-noir--baMCm2CLKM | 5633×3912 | Unsplash | 2026-11-25 | non datée | intégré — 800×600 + 240×240 JPEG progressifs — capture de licence manquante |
| Accessoires et composants | Raindrops Photography | photo-1704732061018-3ac738176c20 | https://unsplash.com/fr/photos/un-couple-de-vis-pose-sur-une-table-wYKgV2SZMc8 | 3900×2550 | Unsplash | 2026-11-25 | non datée | intégré — 800×600 + 240×240 JPEG progressifs — capture de licence manquante |

Note : ces six photographies sont distinctes des six en-têtes de catégories B4. **Intégration** : six exports 800×600 et six exports 240×240 (JPEG progressifs), ratio 4:3 pour les 800×600, copiés dans `public/images/categories/` le 2026-11-25. **Vérification de la source** : non datée pour cinq des six photographies (Automobile, Machines et équipements, Informatique, Téléphonie, Accessoires et composants) — aucune consultation de fiche Unsplash n'est documentée à une date précise ; le 25 novembre 2026 est la date d'intégration, pas une date de vérification. Exception : la photographie Moto a été vérifiée le 2026-11-25 sur la fiche canonique https://unsplash.com/photos/9ehmPYBJkyU (photographe LouisMoto / @louismotorrad ; titre de la fiche « a close up of a watch », description « Motorradkette und Kettenrad auf Holztisch // Motorcycle chain and sprocket on wooden table » ; publiée le 15 juillet 2022, SONY SLT-A77V ; licence Unsplash gratuite, sans badge Unsplash+ ; correspondance visuelle avec `moto-800x600.jpg` confirmée ; identifiant CDN `photo-1657873961503-89a65459de2b` confirmé). La précédente URL au slug français « gros-plan-dune-montre » (trompeur) est remplacée par l'URL canonique. Capture de licence toujours manquante. Les colonnes `logo:non · visage:non · filigrane:non · texte:non` reprennent les constats du lot B7, sans nouvelle vérification image par image sur les dérivés. Validées techniquement : oui (format, dimensions, ratio, nommage). Captures de licence : non produites — le répertoire `assets-src/licences/` n'existe pas à ce jour ; aucune capture n'est revendiquée. Réserves maintenues : vérification juridique manuelle (logo/marque/visage/filigrane/texte) non documentée par capture ; vérification de la licence Unsplash et de l'absence de badge Unsplash+ non datée.
