import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindMerge } from "@/app/utils";

// Define button variants using cva
const buttonVariants = cva(
  [
    "rounded-md",
    "m-2",
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
          "bg-blue-600 text-white hover:bg-blue-700 dark:bg-primary dark:text-white dark:hover:bg-blue-800",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
        secondary:
          "bg-gray-100 text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        outline:
          "bg-transparent text-black border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700",
        ghost:
          "bg-transparent text-black hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800",
        link: "bg-transparent text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500",
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
