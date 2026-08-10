import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "linkedin";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  target?: "_blank" | "_self";
  rel?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-sm",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 shadow-sm",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "text-text hover:bg-surface",
  linkedin:
    "bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 shadow-sm",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  type = "button",
  onClick,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
