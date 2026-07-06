type PlaceholderProps = {
  label?: string;
  className?: string;
};

// Neutral image placeholder — swap for a real <Image> when assets are ready.
export function Placeholder({ label = "画像", className = "" }: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-[#f2efe7] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 11px, rgba(27,26,23,0.035) 11px, rgba(27,26,23,0.035) 12px)",
        }}
      />
      <span className="relative z-10 text-xs font-medium tracking-widest text-[#a49f93]">
        {label}
      </span>
    </div>
  );
}
