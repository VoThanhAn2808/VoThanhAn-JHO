import { ReactNode } from "react";

interface ButtonProps {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Acctions({
  variant = "default",
  size = "default",
  className = "",
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none";
  const variants = variant === "ghost" ? "bg-transparent hover:bg-[#2C313A]" : "bg-blue-600 hover:bg-blue-700 text-white";
  const sizes = size === "icon" ? "w-8 h-8 p-0" : "h-10 px-4";

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants} ${sizes} ${className}`}>
      {children}
    </button>
  );
}
