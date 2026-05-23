interface BrandLogoProps {
  variant?: "dark" | "light";
}
export default function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  return (
    <span
      className={`text-[22px] font-extrabold tracking-tight leading-none ${
        variant === "light" ? "text-white" : "text-brand-dark"
      }`}
    >
      Tierra Roots Acquisitions
    </span>
  );
}