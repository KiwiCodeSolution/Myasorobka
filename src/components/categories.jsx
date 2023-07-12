import { observer } from "mobx-react-lite";

// import products from "../store/products";

const Categories = observer(({ products }) => {
  const categories = [];
  for (let i = 0; i < products.length; i += 1) {
    if (!categories.includes(products[i].category)) {
      categories.push(products[i].category);
    }
  }

  return (
    <div>
      <h2>Категорії товарів</h2>
      {categories.length > 0 && (
        <ul>
          !!!!!!!!!!!!!!!!!
          {categories.map((el) => {
            console.log(el);
            // <li key={el}>{el}</li>;
          })}
        </ul>
      )}
    </div>
  );
});

export default Categories;
