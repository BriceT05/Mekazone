import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

// Les bannières promotionnelles sont des photographies brutes (aucun texte incrusté) :
// l'eyebrow, le titre, le sous-titre et le CTA sont rendus ici en HTML/CSS.
// Les CTA restent désactivés tant qu'aucune route commerciale n'existe : pas de <Link>
// fictif, pas de CTA focusable (attribut `disabled` natif). Réactivation : remplacer le
// <Button disabled> par un <Link> lorsque les pages de destination seront livrées.
const PROMO_DEMO_CTA_DISABLED = true;

type PromoBannerOverlay = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
};

type PromoBannerProps = {
  /** Chemin desktop sans extension : `.avif` et `.webp` sont composés automatiquement. */
  desktopSrc: string;
  /** Chemin mobile sans extension : `.avif` et `.webp` sont composés automatiquement. */
  mobileSrc: string;
  alt: string;
  /** Media query qui bascule sur le cadrage desktop (art direction). */
  desktopMedia: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  /** Classes de ratio responsive, ex. `aspect-[2/1] md:aspect-[4/1]`. */
  ratioClassName: string;
  scrim?: "bottom" | "left" | "bottom-left";
  /** Breakpoint d'affichage du sous-titre, selon la hauteur utile de la bannière. */
  subtitleVisibilityClassName?: string;
  overlay?: PromoBannerOverlay;
  loading?: "eager" | "lazy";
  className?: string;
};

const scrimLayers: Record<
  NonNullable<PromoBannerProps["scrim"]>,
  string[]
> = {
  bottom: ["bg-gradient-to-t from-noir/90 via-noir/45 to-transparent"],
  left: ["bg-gradient-to-r from-noir/95 via-noir/65 to-transparent"],
  "bottom-left": [
    "bg-gradient-to-r from-noir/90 via-noir/45 to-transparent",
    "bg-gradient-to-t from-noir/90 via-noir/50 to-transparent",
  ],
};

export function PromoBanner({
  desktopSrc,
  mobileSrc,
  alt,
  desktopMedia,
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
  ratioClassName,
  scrim = "bottom",
  subtitleVisibilityClassName = "hidden sm:block",
  overlay,
  loading = "lazy",
  className,
}: PromoBannerProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl bg-noir shadow-card",
        ratioClassName,
        className,
      )}
    >
      {/* AVIF prioritaire, WebP en secours, un seul fichier téléchargé par viewport.
          Les exports sont déjà optimisés et sous budget : aucun passage par
          l'optimiseur Next (pas de recompression ni de requête supplémentaire). */}
      <picture>
        <source
          type="image/avif"
          media={desktopMedia}
          srcSet={`${desktopSrc}.avif`}
          width={desktopWidth}
          height={desktopHeight}
        />
        <source
          type="image/avif"
          srcSet={`${mobileSrc}.avif`}
          width={mobileWidth}
          height={mobileHeight}
        />
        <source
          type="image/webp"
          media={desktopMedia}
          srcSet={`${desktopSrc}.webp`}
          width={desktopWidth}
          height={desktopHeight}
        />
        <source
          type="image/webp"
          srcSet={`${mobileSrc}.webp`}
          width={mobileWidth}
          height={mobileHeight}
        />
        <img
          src={`${mobileSrc}.webp`}
          alt={alt}
          width={mobileWidth}
          height={mobileHeight}
          loading={loading}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {scrimLayers[scrim].map((scrimClass) => (
          <div key={scrimClass} className={cn("absolute inset-0", scrimClass)} />
        ))}
      </div>

      {overlay ? (
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 lg:p-8">
          <div className="max-w-md lg:max-w-xl">
            {overlay.eyebrow ? (
              <p className="mb-2 inline-flex w-fit items-center rounded-sm bg-rouge px-2 py-1 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-white md:text-[11px]">
                {overlay.eyebrow}
              </p>
            ) : null}
            {overlay.title ? (
              <h3 className="font-heading text-lg font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-xl md:text-2xl lg:text-3xl">
                {overlay.title}
              </h3>
            ) : null}
            {overlay.subtitle ? (
              <p
                className={cn(
                  "mt-2 max-w-sm font-body text-sm leading-snug text-white/85",
                  subtitleVisibilityClassName,
                )}
              >
                {overlay.subtitle}
              </p>
            ) : null}
            {overlay.ctaLabel ? (
              <Button
                type="button"
                size="sm"
                disabled={PROMO_DEMO_CTA_DISABLED}
                className="mt-3 bg-bordeaux text-white"
              >
                {overlay.ctaLabel}
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
