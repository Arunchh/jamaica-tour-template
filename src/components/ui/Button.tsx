import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-coral-500 text-white shadow-lg shadow-coral-500/25 hover:bg-coral-600",
  secondary:
    "bg-ocean-700 text-white shadow-lg shadow-ocean-700/20 hover:bg-ocean-800",
  outline:
    "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  whatsapp:
    "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
