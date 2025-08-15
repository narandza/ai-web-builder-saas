import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  width: number;
  height: number;
  className?: string;
}

export const Logo = ({ width, height, className }: Props) => {
  return (
    <Image
      src="/logo.svg"
      alt="Vibe"
      width={width}
      height={height}
      className={cn(className && className)}
    />
  );
};
