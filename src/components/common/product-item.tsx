"use client";

import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";

interface ProductListProps {
  title: string;
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}
const ProductItem = ({ product }: ProductListProps) => {
  const firstVariant = product.variants[0];
  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={firstVariant.imageUrl}
        alt={firstVariant.name}
        width={100}
        height={100}
        className="rounded-3xl"
      />
      <div className="flex flex-col gap-1">
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs">
          {product.description}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
