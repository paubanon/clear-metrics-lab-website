import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: `
      bg-white/10 backdrop-blur-sm text-white border border-white/20
      glow-border
      hover:bg-white/15
    `,
        secondary: `
      bg-white/5 text-accent border border-white/10
      hover:bg-white/10 hover:border-accent/30
    `,
        ghost: `
      text-text-muted
      hover:text-text-primary hover:bg-white/5
    `,
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
