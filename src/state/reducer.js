import products from './products.json';

const INITIAL_STATE = {
  filters: [
    { id: 'all', name: 'All items' },
    { id: 'isOnSale', name: 'Sale items' },
    { id: 'isExclusive', name: 'Exclusive items' },
  ],
  selectedFilter: 'all',
  sortList: [
    { id: 'priceAscending', name: 'Price (Lowest first)' },
    { id: 'priceDescending', name: 'Price (Highest first)' },
    { id: 'nameAscending', name: 'Name (A - Z)' },
    { id: 'nameDescending', name: 'Name (Z - A)' },
  ],
  selectedSort: 'nameAscending',
  products,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return Object.assign({}, state, { selectedFilter: action.filter });
    case 'CHANGE_SORT':
      return Object.assign({}, state, { selectedSort: action.sort });
    default:
      return state;
  }
};
