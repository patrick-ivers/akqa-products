import React, { PropTypes } from 'react';
import Dropdown from 'components/Dropdown';
import './styles.scss';

const Header = ({
  filterOptions,
  selectedFilter,
  onFilterChange,
  sortOptions,
  selectedSort,
  onSortChange,
}) => {
  const baseClass = 'header';

  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>Women&apos;s Tops</h1>
      <Dropdown
        title="Filter by:"
        options={filterOptions}
        selectedValue={selectedFilter}
        onChange={onFilterChange}
      />
      <Dropdown
        title="Sort by:"
        options={sortOptions}
        selectedValue={selectedSort}
        onChange={onSortChange}
      />
    </div>
  );
};

Header.propTypes = {
  filterOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedSort: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default Header;
