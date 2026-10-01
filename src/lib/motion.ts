/**
 * Motion tokens — mirrors the CSS motion system in `src/app/globals.css`
 * (`@theme --ease-primary`) for JS-driven animation.
 *
 * Rules:
 * - one easing per surface (ease-primary for entrances/reveals)
 * - micro 250ms (hovers, focus, small toggles)
 * - reveal 500ms (standard scroll reveals, image fades)
 * - section 700ms max (large transitions, hero)
 * - stagger steps of ~20ms where a cascade is wanted
 * - animate transform / opacity only — never layout properties
 */

export const EASE_PRIMARY = "cubic-bezier(0.22, 1, 0.36, 1)";

export const DURATION_MICRO = 250;
export const DURATION_REVEAL = 500;
export const DURATION_SECTION = 700;

export const STAGGER_STEP = 20;

/** Standard reveal travel distance (px) — calm, not bouncy. */
export const REVEAL_DISTANCE_PX = 20;

/** delay for the nth item in a staggered cascade */
export function staggerDelay(index: number, step = STAGGER_STEP): number {
  return index * step;
}
