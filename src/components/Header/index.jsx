import React, { PropTypes } from 'react';
import './styles.scss';

const Header = ({ filterOptions, selectedFilter, onFilterChange }) => {
  const baseClass = 'header';

  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>Women&apos;s Tops</h1>
      <select
        className={`${baseClass}-filter`}
        value={selectedFilter}
        onChange={(event) => onFilterChange(event.target.value)}
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
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
};

export default Header;
