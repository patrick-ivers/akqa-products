import React, { PropTypes } from 'react';
import './styles.scss';

const Dropdown = ({ title, options, selectedValue, onChange }) => {
  const baseClass = 'dropdown';

  return (
    <div className={baseClass}>
      {title && <span className={`${baseClass}-title`}>{title}</span>}
      <select
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  title: '',
};

export default Dropdown;
