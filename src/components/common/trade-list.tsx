import Image from "next/image";

const Tradelist = () => {
  return (
    <>
      <h3 className="px-5 font-semibold">Marcas Parceiras</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-[100px] flex-col items-center justify-center gap-1">
          <Image src="/nike.png" alt="Nike" width={100} height={100} />
          <p className="truncate text-sm font-medium">Nike</p>
        </div>
        <div className="flex min-w-[100px] flex-col items-center justify-center gap-1">
          <Image src="/adidas.png" alt="Adidas" width={100} height={100} />
          <p className="truncate text-sm font-medium">Adidas</p>
        </div>
        <div className="flex min-w-[100px] flex-col items-center justify-center gap-1">
          <Image src="/puma.png" alt="Puma" width={100} height={100} />
          <p className="truncate text-sm font-medium">Puma</p>
        </div>
        <div className="flex min-w-[100px] flex-col items-center justify-center gap-1">
          <Image
            src="/new_balance.png"
            alt="New Balance"
            width={100}
            height={100}
          />
          <p className="truncate text-sm font-medium">New Balance</p>
        </div>
      </div>
    </>
  );
};

export default Tradelist;
