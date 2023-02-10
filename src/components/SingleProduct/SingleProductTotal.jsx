export const SingleProductTotal = ({ price, discount }) => {
  const _discount = discount ? (price * (100 - discount)) / 100 : 0;
  return (
    <div className=" flex flex-col font-xs">
      <small className="text-[12px] text-[#AAAAAA]">total price</small>
      <span className="text-lg font-medium">
        {_discount ? _discount : price}$
      </span>
    </div>
  );
};
