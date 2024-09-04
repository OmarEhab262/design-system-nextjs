import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindMerge } from "@/app/utils";

// Define button variants using cva
const buttonVariants = cva(
  [
    "rounded-md",
    "m-1",
    "transition-all",
    "duration-150",
    "ease-in-out",
    "inline-flex",
    "items-center",
  ], // Common classes
  {
    // bg-blue-600 text-white hover:bg-blue-700 dark:bg-primary dark:text-white dark:hover:bg-blue-800
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        destructive:
          "bg-destructive text-white hover:bg-destructive/80 dark:bg-destructive dark:hover:bg-destructive/70",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-secondary/70",
        outline:
          "bg-transparent text-outline border border-outline hover:bg-outline/10 dark:hover:bg-outline/20",
        ghost:
          "bg-ghost/0 text-primary-foreground hover:bg-ghost/100 dark:hover:bg-ghost/30",
        link: "bg-transparent text-link hover:underline dark:text-link dark:hover:text-link/80",
      },

      size: {
        xs: "px-2 text-xs h-6",
        sm: "px-4 text-sm h-8",
        base: "px-6 text-md h-10",
        lg: "px-8 text-lg h-12",
      },
      fullWidth: {
        true: "w-full justify-center",
      },
    },
    defaultVariants: {
      variant: "primary", // Default variant is primary
      size: "base",
    },
  }
);

// Define button props with intent and className
interface Iprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

// Button component
const Button = ({ children, variant, fullWidth, size, ...rest }: Iprops) => {
  return (
    <button
      className={`${tailwindMerge(
        buttonVariants({ variant, size, fullWidth })
      )}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
