# MEKAZONE — Plan de recherche des visuels

**Statut :** plan de recherche, aucun téléchargement effectué
**But :** disposer de requêtes précises, reproductibles et vérifiables pour chaque emplacement
**Référence :** `docs/assets-strategy.md` (dimensions, ratios, budgets) · `docs/assets-licences.md` (droits)

---

## 0. Méthode

1. **Rechercher en anglais** : les trois banques sont indexées en anglais. Les requêtes ci-dessous sont prêtes à coller.
2. **Filtres systématiques** : orientation (paysage/portrait), résolution minimale, catégorie « automobile » ou « industrie » quand elle existe.
3. **Toujours ouvrir la fiche** de l'image : vérifier licence gratuite (pas de badge Unsplash+ / Pexels Pro), auteur, résolution réelle.
4. **Toujours vérifier visuellement** : logo de marque, visage identifiable, filigrane, texte incrusté.
5. **Une image = une ligne** dans `docs/assets-licences.md`, capture de la fiche dans `assets-src/licences/<id>.png`.
6. **Ne jamais** utiliser une image « presque bonne » : mieux vaut le placeholder que l'image incohérente.

**Vocabulaire à privilégier** : `dark`, `workshop`, `garage`, `detail`, `close up`, `flat lay`, `isolated on white`, `studio`.
**Vocabulaire à éviter** : `blue`, `neon`, `futuristic`, `3d render`, `illustration`, `concept`, `banner template`, `mockup`.

**Règle de priorité :** les critères binaires d'exclusion sont prioritaires sur le score R3. Une image éliminée par un critère binaire ne peut pas être retenue, même avec un score élevé.

**Ordre de traitement recommandé** (le hero fixe l'étalonnage de tout le reste) :
`hero` → `catégories` → `bannière sidebar` → `produits` → `bannières secondaires` → `pages`.

---

## 1. Hero

### `hero-main-desktop` — 2400×1000 (12:5)

| Champ | Valeur |
|---|---|
| Requêtes principales | `dark car workshop interior` · `car in dark garage` · `auto repair garage` |
| Variantes | `mechanic workshop car lift` · `car detailing garage dark` · `automotive workshop dramatic lighting` |
| Filtres | Orientation paysage · largeur ≥ 4000 px · tonalité sombre |
| Critères d'acceptation | Sujet (véhicule ou atelier) dans la moitié droite ; **côté gauche sombre, sans détail utile** ; profondeur de champ nette ; aucun logo ; aucun texte |
| Rejet | Atelier blanc/fluorescent, voiture sur fond de studio, présence d'un visage net, logo de marque sur le véhicule, image avec watermark |
| Destination | `assets-src/hero/hero-main-desktop.<ext>` → `public/images/hero/hero-desktop.{avif,webp}` |

### `hero-main-mobile` — 1080×1350 (4:5)

| Champ | Valeur |
|---|---|
| Requêtes principales | `vertical garage workshop` · `mechanic working on car portrait` · `car workshop portrait` |
| Variantes | `automotive workshop vertical` · `car lift dark portrait` |
| Filtres | Orientation portrait · hauteur ≥ 2500 px |
| Critères d'acceptation | Composition verticale réelle (pas un crop), tiers inférieur calme pour le texte sur voile, sujet identifiable dans la moitié haute |
| Rejet | Recadrage d'une image paysage, sujet coupé, espace vide en haut |
| Destination | `assets-src/hero/hero-main-mobile.<ext>` → `public/images/hero/hero-mobile.{avif,webp}` |
| Note | Si aucune composition verticale satisfaisante : conserver le desktop et recadrer **en connaissance de cause**, décision à valider (option explicitement déconseillée par le cahier des charges) |

### Décision formelle du 23 novembre 2026 — `hero-main-mobile`

**Décision du responsable du projet :** `hero-main-mobile` est **définitivement retenu** pour le hero mobile. Cette décision vaut **sélection définitive de la source**, et non validation de mise en production.

| Champ | Valeur |
|---|---|
| Statut | Source sélectionnée — dérogation acceptée — validation technique finale en attente |
| Source | Unsplash — photo `wacb2ChxA4k` |
| Auteur | Connor Botts |
| Page source | https://unsplash.com/photos/wacb2ChxA4k |
| Licence | Licence Unsplash — https://unsplash.com/license (usage commercial gratuit, attribution non obligatoire) |
| Format | 4:5 — export actuel 1080 × 1350 ; master 2701 × 3376 |
| Recadrage | recadrage 4:5 depuis une photographie paysage ; master conservé |
| Date de décision | 23 novembre 2026 |
| Acceptation | acceptation explicite du responsable du projet |

**Dérogation accordée.** Le responsable accepte explicitement et définitivement la dérogation aux critères suivants :

- « composition verticale réelle (pas un crop) » ;
- rejet du « recadrage d'une image paysage » ;
- rejet du « sujet coupé » ;
- rejet de l'« espace vide en haut ».

La dérogation porte uniquement sur `hero-main-mobile`. Elle ne modifie ni les critères ni les décisions des autres visuels.

**Raisons de la dérogation.**

- recherches infructueuses de photographies verticales natives satisfaisantes ;
- cohérence visuelle avec le hero desktop ;
- qualité photographique du recadrage 4:5 ;
- qualité du masquage et de la lisibilité ;
- absence d'une meilleure alternative identifiée.

**Portée.** Cette décision clôt la recherche de source pour `hero-main-mobile`. Elle ne vaut pas validation technique finale : les exports optimisés AVIF/WebP, le test du rendu HTML réel, le budget de poids et les derniers contrôles restent à effectuer avant toute intégration dans `public/`.

---

## 2. Bannières

### `promo-sidebar-desktop` — 600×900 (2:3)

| Champ | Valeur |
|---|---|
| Requêtes | `car parts flat lay dark` · `engine parts dark background` · `tool set dark` |
| Filtres | Portrait · ≥ 2000 px de haut |
| Acceptation | Objet en bas, **haut de l'image sobre** (le titre « Offres spéciales » s'y place) ; tons anthracite/bordeaux compatibles |
| Rejet | Fond coloré, objet centré plein cadre, logo |
| Destination | `public/images/banners/promo-sidebar-desktop.{avif,webp}` |

### `promo-sidebar-mobile` — 800×400 (2:1)

| Champ | Valeur |
|---|---|
| Requêtes | `car parts flat lay` · `workshop tools flat lay` |
| Filtres | Paysage |
| Acceptation | Sujet à droite, gauche lisible pour le texte, même série visuelle que la version desktop |
| Destination | `public/images/banners/promo-sidebar-mobile.{avif,webp}` |

### `promo-large-desktop` / `-mobile` — 1920×480 / 1080×540

| Champ | Valeur |
|---|---|
| Requêtes | `garage tools wide` · `workshop bench tools dark` · `auto parts shelves` |
| Filtres | Paysage panoramique · ≥ 3000 px |
| Acceptation | Bande large, safe area centrale 60 %, faible contraste au centre |
| Destination | `public/images/banners/promo-large-desktop.{avif,webp}` · `promo-large-mobile.*` |

### `category-header-desktop` / `-mobile` — 1920×420 / 1080×520

| Champ | Valeur |
|---|---|
| Requêtes | `auto parts store interior` · `workshop bench dark wide` · `garage shelves parts` |
| Filtres | Paysage très large |
| Acceptation | Bandeau calme, compatible voile `#171719` à 45 %, texte de catégorie lisible par-dessus |
| Destination | `public/images/banners/category-header-desktop.*` · `-mobile.*` |

---

## 3. Catégories (6 × 2 tailles)

**Requête commune à toutes** : ajouter `dark` ou `workshop` pour conserver l'étalonnage ; viser le **même fond** pour les six.

| Catégorie | Requête principale | Variantes | Rejet spécifique |
|---|---|---|---|
| `automobile` | `car engine close up` | `engine bay detail` · `car parts workshop` | moteur de voiture de course avec sponsors lisibles |
| `moto` | `motorcycle chain close up` | `motorcycle detail dark` · `motorcycle helmet gloves` | moto de marque avec logo sur le réservoir |
| `machines-equipements` | `industrial machine workshop` | `power tools workshop` · `drill press workshop` | machine jaune vif (hors palette) |
| `informatique` | `motherboard close up` | `computer components flat lay` · `pc build detail` | boîtier RGB multicolore |
| `telephonie` | `smartphone accessories flat lay` | `phone repair tools` · `smartphone dark surface` | écran affichant une interface de marque |
| `accessoires-composants` | `electrical connectors close up` | `screws bolts hardware` · `cables workshop` | câbles multicolores saturés |

| Champ | Valeur |
|---|---|
| Format master | 800×600 minimum (idéalement 1600×1200) |
| Dérivés | tuile `-` (800×600) + vignette `-sm` (240×240) |
| Acceptation | Sujet lisible même à 240 px, contraste suffisant pour un titre blanc si overlay |
| Destination | `public/images/categories/<slug>.{avif,webp}` + `<slug>-sm.{avif,webp}` |

---

## 4. Produits de démonstration (4 × 5 vues)

**Règles communes** : fond blanc pur, produit entier dans le cadre, marge 8 %, même ombre douce, **aucun nom/logo de marque**, aucune référence commerciale réelle. Si une photo « isolated on white » est introuvable, accepter un flat lay sur surface blanche **à condition que les 4 produits partagent le même traitement**.

### `batterie-auto` — `public/images/products/demo/batterie-auto/`

| Vue | Requête | Variante |
|---|---|---|
| 01 face | `car battery isolated white background` | `automotive battery white background` |
| 02 trois-quarts | `car battery studio white` | `battery three quarter view` |
| 03 dessus / bornes | `battery terminals close up` | `car battery top view` |
| 04 détail connectique | `battery cable terminal close up` | `battery connectors macro` |
| 05 contexte | `car battery engine bay` | `battery installed engine compartment` |

Rejet : batterie de marque identifiable (étiquette lisible), fond gris, batterie partielle.

### `disque-frein` — `public/images/products/demo/disque-frein/`

| Vue | Requête | Variante |
|---|---|---|
| 01 face | `brake disc isolated white` | `brake rotor white background` |
| 02 trois-quarts | `brake disc studio` | `ventilated brake disc white` |
| 03 tranche / épaisseur | `brake disc edge close up` | `brake rotor thickness` |
| 04 détail perçage | `drilled brake disc macro` | `brake disc holes close up` |
| 05 paire | `brake discs pair` | `two brake rotors white background` |

Rejet : disque rouillé ou usé (mauvais signal produit), étrier avec logo, fond d'atelier pour la vue principale.

### `pneu` — `public/images/products/demo/pneu/`

| Vue | Requête | Variante |
|---|---|---|
| 01 face | `car tire isolated white` | `tyre white background front` |
| 02 trois-quarts | `car tire three quarter white` | `tire studio shot` |
| 03 bande de roulement | `tire tread close up` | `tyre tread macro` |
| 04 flanc | `tire sidewall close up` | `tyre sidewall detail` |
| 05 monté sur jante | `wheel rim tire white background` | `alloy wheel tire studio` |

Rejet : marquage de marque lisible sur le flanc (très fréquent → recadrer ou changer d'image), pneu sale.

### `smartphone` — `public/images/products/demo/smartphone/`

| Vue | Requête | Variante |
|---|---|---|
| 01 face | `smartphone isolated white front` | `phone front blank screen white` |
| 02 dos | `smartphone back camera white background` | `phone rear studio` |
| 03 tranche | `smartphone side profile white` | `phone edge white background` |
| 04 appareil photo | `smartphone camera close up` | `phone camera module macro` |
| 05 accessoires | `smartphone accessories flat lay white` | `phone charger cable white` |

Rejet : écran affichant une interface ou un logo constructeur, téléphone avec logo visible au dos, rendu 3D.

---

## 5. Pages

| Asset | Requêtes | Format | Destination |
|---|---|---|---|
| `about-atelier` | `mechanic team garage` · `auto parts store interior` · `mechanic working car` | 1600×900 | `public/images/pages/about-atelier.*` |
| `auth-side` | `car workshop portrait dark` · `garage tools vertical` | 1200×1600 | `public/images/pages/auth-side.*` |
| `faq-visual` (optionnel) | `workshop bench tools` · `car parts detail` | 1200×600 | `public/images/pages/faq-visual.*` |

`auth-side` : visage identifiable interdit ; privilégier mains, outils, détail de véhicule.
`about-atelier` : une équipe est acceptable **si** aucune personne n'est reconnaissable, ou si la banque fournit une release.

---

## 6. À générer (aucune recherche)

| Asset | Méthode | Destination |
|---|---|---|
| Logo placeholder typographique | SVG, texte + symbole engrenage/clé dessiné | `public/brand/` |
| Favicon + icônes PWA | Export depuis le logo | `public/brand/` |
| ~30 icônes d'interface et de catégories | SVG maison, grille 24, `currentColor` | `public/icons/` |
| Illustrations panier vide, aucun résultat, 404, 500 | SVG maison | `public/images/illustrations/` |
| Placeholder produit | SVG/WebP, silhouette neutre + mention démo | `public/images/products/_placeholder/` |
| Carte des zones de livraison | SVG depuis Natural Earth (domaine public) | `public/images/pages/delivery-map.svg` |
| Gabarits Open Graph | Composition typographique | `public/og/` |

---

## 7. Checklist avant de valider une image

- [ ] Résolution ≥ 2× la taille d'affichage
- [ ] Licence gratuite confirmée, pas de badge payant
- [ ] Aucun logo, emblème ou nom de marque lisible
- [ ] Aucune personne identifiable sans autorisation
- [ ] Aucun filigrane, texte incrusté, signature
- [ ] Fond et étalonnage cohérents avec la série
- [ ] Recadrage prévu sans perte du sujet
- [ ] Ligne ajoutée dans `docs/assets-licences.md`
- [ ] Capture de la fiche source enregistrée
- [ ] Nom de fichier conforme (`kebab-case`, suffixe viewport si besoin)

---

## 8. Pipeline après téléchargement (phase ultérieure)

1. Master conservé dans `assets-src/<famille>/` (original, non déployé).
2. Recadrage au ratio exact, conservation d'un master 2×.
3. Export AVIF + WebP aux largeurs cibles (voir `assets-strategy.md` §5).
4. Contrôle du poids : recompression jusqu'au respect du budget.
5. Nommage définitif, déplacement dans `public/images/…`.
6. Mise à jour du registre de licences (`statut: intégré`).
7. Vérification Lighthouse + Playwright (une fois la page en place).

Aucune de ces étapes n'est engagée avant validation explicite.
