import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-light">{subtitle}</p>
      )}
    </div>
  );
}
