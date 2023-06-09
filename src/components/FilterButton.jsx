import PropTypes from 'prop-types';

const FilterButton = (props) => {
    return <button className="filter-item" onClick={() => props.onSelectFilter(props.nameFilter)}>{props.nameFilter}</button>
}

FilterButton.propTypes = {
    nameFilter: PropTypes.string,
    onSelectFilter: PropTypes.func
}

export default FilterButton