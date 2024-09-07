import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindMerge } from "@/app/utils";

// Define button variants using cva
export const buttonVariants = cva(
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
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-2 focus:ring-primary/50 disabled:bg-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
        destructive:
          "bg-destructive text-white hover:bg-destructive/80 dark:bg-destructive dark:hover:bg-destructive/70 focus:ring-2 focus:ring-destructive/50 disabled:bg-destructive/50 disabled:cursor-not-allowed disabled:opacity-50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:hover:bg-secondary/70 focus:ring-2 focus:ring-secondary/50 disabled:bg-secondary/50 disabled:cursor-not-allowed disabled:opacity-50",
        outline:
          "bg-transparent text-outline border border-outline hover:bg-outline/10 dark:hover:bg-outline/20 focus:ring-2 focus:ring-outline/50 disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
        ghost:
          "bg-ghost/0 text-primary-foreground hover:bg-ghost/100 dark:hover:bg-ghost/30 focus:ring-2 focus:ring-ghost/50 disabled:bg-ghost/50 disabled:cursor-not-allowed disabled:opacity-50",
        link: "bg-transparent text-link hover:underline dark:text-link dark:hover:text-link/80 focus:ring-2 focus:ring-link/50 disabled:text-link/50 disabled:cursor-not-allowed disabled:opacity-50",
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
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
      rounded: "md",
    },
  }
);

// Define button props with updated icon types
interface Iprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  startIcon?: ReactNode; // Allow ReactNode instead of boolean
  endIcon?: ReactNode; // Allow ReactNode instead of boolean
}

// Button component
const Button = ({
  children,
  variant,
  fullWidth,
  rounded,
  size,
  startIcon,
  endIcon,
  ...rest
}: Iprops) => {
  return (
    <button
      className={`${tailwindMerge(
        buttonVariants({ variant, size, fullWidth, rounded })
      )}`}
      {...rest}
    >
      {startIcon && (
        <span className="inline-flex items-center pr-4">{startIcon}</span>
      )}
      {children}
      {endIcon && (
        <span className="inline-flex items-center pl-4">{endIcon}</span>
      )}
    </button>
  );
};

export default Button;
