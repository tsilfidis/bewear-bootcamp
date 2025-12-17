import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import DbErrorConection from "@/components/common/db-error-conection";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import ProductActions from "./components/product-actions";
import VariantSelector from "./components/variant-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  try {
    const { slug } = await params;
    const productVariant = await db.query.productVariantTable.findFirst({
      where: eq(productVariantTable.slug, slug),
      with: {
        product: {
          with: {
            variants: true,
          },
        },
      },
    });

    if (!productVariant) {
      return notFound();
    }

    const likelyProducts = await db.query.productTable.findMany({
      where: eq(productTable.categoryId, productVariant.product.categoryId),
      with: {
        variants: true,
      },
    });

    return (
      <>
        <Header />
        <div className="mb-6 flex flex-col space-y-6 px-5">
          {/* Imagem */}
          <Image
            src={productVariant.imageUrl}
            alt={productVariant.name}
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-full rounded-3xl"
          />
          <div>
            <VariantSelector
              selectedVariantSlug={productVariant.slug}
              variants={productVariant.product.variants}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              {productVariant.product.name}
            </h2>
            <h3 className="text-muted-foreground text-sm">
              {productVariant.name}
            </h3>
            <h3 className="text-lg font-semibold">
              {formatCentsToBRL(productVariant.priceInCents)}
            </h3>
          </div>
          <ProductActions productVariantId={productVariant.id} />
          <div>
            <p>{productVariant.product.description}</p>
          </div>
          <div>
            {/* PRODUTOS RELACIONADOS */}
            <ProductList title="Talves você goste" products={likelyProducts} />
          </div>
        </div>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    return <DbErrorConection />;
  }
};

export default ProductVariantPage;
