import orderBy from 'lodash.orderby';

export const getFilterOptions = ({ filters }) => (
  filters.map((filter) => ({
    value: filter.id,
    label: filter.name,
  }))
);

export const getSelectedFilter = ({ selectedFilter }) => selectedFilter;

export const getFilteredProducts = ({ selectedFilter, products }) => {
  const sortedProducts = (() => {
    switch (selectedFilter) {
      case 'saleAscending':
        return orderBy(products, ['isSale'], ['asc']);
      case 'exclusiveAscending':
        return orderBy(products, ['isExclusive'], ['asc']);
      case 'priceAscending':
        return orderBy(products, ['price'], ['asc']);
      case 'priceDescending':
        return orderBy(products, ['price'], ['desc']);
      case 'nameAscending':
        return orderBy(products, ['productName'], ['asc']);
      case 'nameDescending':
        return orderBy(products, ['productName'], ['desc']);
      default:
        return products;
    }
  })();

  return sortedProducts.map((product) => ({
    id: product.index,
    imgUrl: product.productImage,
    name: product.productName,
    isOnSale: product.isSale,
    isExclusive: product.isExclusive,
    price: product.price,
  }));
};
