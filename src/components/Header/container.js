import { connect } from 'react-redux';
import { getFilterOptions, getSelectedFilter } from 'state/selectors';
import Header from '.';

const mapStateToProps = (state) => ({
  filterOptions: getFilterOptions(state),
  selectedFilter: getSelectedFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => {
    dispatch({ type: 'CHANGE_FILTER', filter });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
