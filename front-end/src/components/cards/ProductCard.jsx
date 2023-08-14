const ProductCard = ({ product }) => {
  const formatPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
  const { title, price, imageURL, linkProduct } = product;
  return (
    <article className="w-[165px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:scale-105 hover:shadow-lg">
      <a href={linkProduct} target="_blank" rel="noopener noreferrer">
        <div className="relative mb-4 overflow-hidden">
          <img
            src={imageURL}
            alt={title}
            className="h-[150px] w-full rounded-md"
          />
        </div>
        <div className="px-1">
          <h3 className="line-clamp-2 font-semibold">{title}</h3>
          <p className="font-semibold text-green-500">
            {formatPrice.format(price)}
          </p>
        </div>
      </a>
    </article>
  );
};

export default ProductCard;
