import Image from "next/image";

import Footer from "./Footer";
import Header from "./header";

const DbErrorConection = () => {
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <div className="border-destructive/30 bg-destructive/10 text-destructive rounded-md border p-4">
            <p className="font-medium">
              Não foi possível conectar-se ao banco de dados.
            </p>
            <p className="text-muted-foreground text-sm">
              Tente novamente em alguns instantes.
            </p>
          </div>
        </div>
        <div className="px-5">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com Estilo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Leve uma vida com Estilo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DbErrorConection;
