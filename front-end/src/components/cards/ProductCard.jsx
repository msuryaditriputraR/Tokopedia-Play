const ProductCard = ({ product }) => {
  const formatPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
  const { title, price, imageURL, linkProduct } = product;
  return (
    <article className="w-[135px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:scale-105 hover:shadow-lg xl:w-[165px]">
      <a href={linkProduct} target="_blank" rel="noopener noreferrer">
        <div className="relative mb-4 overflow-hidden">
          <img
            src={imageURL}
            alt={title}
            className="h-[120px] w-full rounded-md xl:h-[150px]"
          />
        </div>
        <div className="px-1">
          <h3 className="line-clamp-2 text-sm font-semibold xl:text-base">
            {title}
          </h3>
          <p className="text-sm font-semibold text-green-500 xl:text-base">
            {formatPrice.format(price)}
          </p>
        </div>
      </a>
    </article>
  );
};

export default ProductCard;
