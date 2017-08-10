import orderBy from 'lodash.orderby';

export const getFilterOptions = ({ filters }) => (
  filters.map((filter) => ({
    value: filter.id,
    label: filter.name,
  }))
);

export const getSelectedFilter = ({ selectedFilter }) => selectedFilter;

export const getSortOptions = ({ sortList }) => (
  sortList.map((sort) => ({
    value: sort.id,
    label: sort.name,
  }))
);

export const getSelectedSort = ({ selectedSort }) => selectedSort;

export const getProducts = ({
  selectedFilter,
  selectedSort,
  products,
}) => {
  const filteredProducts = (() => {
    switch (selectedFilter) {
      case 'isOnSale':
        return products.filter((product) => product.isSale);
      case 'isExclusive':
        return products.filter((product) => product.isExclusive);
      case 'all':
      default:
        return products;
    }
  })();

  const sortedProducts = (() => {
    switch (selectedSort) {
      case 'priceAscending':
        return orderBy(filteredProducts, ['price'], ['asc']);
      case 'priceDescending':
        return orderBy(filteredProducts, ['price'], ['desc']);
      case 'nameAscending':
        return orderBy(filteredProducts, ['productName'], ['asc']);
      case 'nameDescending':
        return orderBy(filteredProducts, ['productName'], ['desc']);
      default:
        return filteredProducts;
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
