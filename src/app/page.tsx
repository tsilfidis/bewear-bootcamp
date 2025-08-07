import Image from "next/image";

import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  return (
    <>
      <Header />
      <div className="space-y-6 px-5">
        <Image
          src="/banner-01.png"
          alt="Leve uma vida com Estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <ProductList products={products} title="Mais Vendidos" />

        <Image
          src="/banner-02.png"
          alt="Leve uma vida com Estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </>
  );
};

export default Home;
