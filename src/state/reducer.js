import products from './products.json';

const INITIAL_STATE = {
  filters: [
    { id: 'saleDescending', name: 'Sale Items' },
    { id: 'exclusiveDescending', name: 'Exclusive Items' },
    { id: 'priceAscending', name: 'Price (Lowest first)' },
    { id: 'priceDescending', name: 'Price (Highest first)' },
    { id: 'nameAscending', name: 'Name (A - Z)' },
    { id: 'nameDescending', name: 'Name (Z - A)' },
  ],
  selectedFilter: 'nameAscending',
  products,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return Object.assign({}, state, { selectedFilter: action.filter });
    default:
      return state;
  }
};
