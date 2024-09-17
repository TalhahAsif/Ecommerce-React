const addProductToLS = (item) => {
  const productInLS = localStorage.getItem(product);
  if (product) {
    product = JSON.parse(productInLS);
  } else {
    localStorage.setItem("product", item);
  }
};

export { addProductToLS };
