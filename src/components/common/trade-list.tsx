import TradeItem from "./trade-item";

const Tradelist = () => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      <TradeItem />
    </div>
  );
};

export default Tradelist;
