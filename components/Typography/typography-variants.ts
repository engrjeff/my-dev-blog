import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const typographyVariants = cva(["font-sans"], {
  variants: {
    variant: {
      heading1: ["text-5xl font-bold"],
      heading2: ["text-4xl font-semibold"],
      heading3: ["text-3xl font-semibold"],
      heading4: ["text-2xl font-semibold"],
      heading5: ["text-xl font-medium"],
      heading6: ["text-lg font-medium"],
      body1: ["text-base"],
      body2: ["text-sm"],
      body3: ["text-xs"],
      body4: ["text-[11px]"],
      link: ["text-base underline text-blue-600"],
    },
    color: {
      primary: ["text-blue-600"],
      success: ["text-green-600"],
      warning: ["text-amber-600"],
      info: ["text-cyan-600"],
      danger: ["text-red-600"],
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});

export interface TypographyVariants
  extends VariantProps<typeof typographyVariants> {}

export const typography = (variants: TypographyVariants, classes?: string[]) =>
  twMerge(typographyVariants(variants), classes);
