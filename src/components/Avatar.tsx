import Image from "next/future/image";
import { ImageProps } from "next/image";

interface AvatarProps extends ImageProps {
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ hasBorder = false, alt = "", ...props }: AvatarProps) {
  return (
    <Image
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      className={`w-12 h-12 rounded-lg ${
        hasBorder
          ? "border-4 border-gray-800 outline outline-2 outline-green-500 box-content"
          : null
      }`}
      {...props}
    />
  );
}
