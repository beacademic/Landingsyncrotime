import React from "react";

export function StatusBadge({
  label,
  variant = "success",
  pulse = true,
  className = "",
}: {
  label: string;
  variant?: "primary" | "success" | "warning" | "danger";
  pulse?: boolean;
  className?: string;
}) {
  const styles = {
    primary: "bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/25",
    success: "bg-[#34C759]/10 text-[#34C759] border-[#34C759]/25",
    warning: "bg-[#FF9500]/10 text-[#FF9500] border-[#FF9500]/25",
    danger: "bg-[#FF3B30]/10 text-[#FF3B30] border-[#FF3B30]/25",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${styles} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      <span>{label}</span>
    </span>
  );
}
