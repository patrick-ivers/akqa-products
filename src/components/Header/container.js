import { connect } from 'react-redux';
import {
  getFilterOptions,
  getSelectedFilter,
  getSortOptions,
  getSelectedSort,
} from 'state/selectors';
import Header from '.';

const mapStateToProps = (state) => ({
  filterOptions: getFilterOptions(state),
  selectedFilter: getSelectedFilter(state),
  sortOptions: getSortOptions(state),
  selectedSort: getSelectedSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => {
    dispatch({ type: 'CHANGE_FILTER', filter });
  },
  onSortChange: (sort) => {
    dispatch({ type: 'CHANGE_SORT', sort });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
