import PropTypes from 'prop-types';
import FilterButton from "./FilterButton";

const Toolbar = (props) => {
    const { filters, onSelectFilter } = props;

    return(
        <div className="filter-bar">
            {filters.map((item) => 
                <FilterButton 
                    key={item} 
                    nameFilter={item} 
                    onSelectFilter={onSelectFilter} />
            )}
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    onSelectFilter: PropTypes.func,
    map: PropTypes.func
}

export default Toolbar;