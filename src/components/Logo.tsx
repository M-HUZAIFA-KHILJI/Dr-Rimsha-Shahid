import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "mark" | "mobile";
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="Dr. Rimsha Shahid Logo"
        width={160}
        height={50}
        className="h-10 w-auto sm:h-12 md:h-14"
        priority
      />
    </div>
  );
}
