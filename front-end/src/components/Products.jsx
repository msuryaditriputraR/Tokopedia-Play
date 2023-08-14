import useFetch from "../hooks/useFetch";
import ProductCard from "./cards/ProductCard";

const Products = ({ videoId }) => {
  const [products] = useFetch(
    import.meta.env.VITE_ROOT_API + `video/${videoId}/products`,
  );

  return (
    products && (
      <div className="carousel no-scrollbar col-span-3 px-2">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    )
  );
};

export default Products;
