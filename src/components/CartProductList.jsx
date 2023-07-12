import CartProductItem from "./CartProductItem";

const products = ["apples", "fish", "bread", "eggs", "tomatos"];

const CartProductList = () => {
  return (
    <>
      <h1 className="mt-4">Product List</h1>
      <div className="py-4  flex flex-col gap-y-4">
        {products.map((product) => (
          <div key={product} className="flex items-center gap-x-2">
            {product}
            <CartProductItem />
          </div>
        ))}
      </div>
    </>
  );
};

export default CartProductList;
