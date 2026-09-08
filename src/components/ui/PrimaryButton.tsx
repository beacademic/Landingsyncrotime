import React from "react";

export function PrimaryButton({
  children,
  onClick,
  icon,
  className = "",
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white tracking-tight bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_4px_14px_rgba(0,122,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.35)] hover:opacity-95 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${className}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
