import { useState } from "react";

const Toolbar = (props) => {

    const { filters, selected } = props;
    console.log(selected.selected)
    // const [state, setState] = useState()

    // console.log(onSelectFilter)
    const filtering = (category) => {
        console.log(category)
    };

    return(
        <div className="filter-bar">
            {filters.map((item) => 
                item !== selected.selected ? 
                    <button className="filter-item" onClick={() => filtering(item)}>{item}</button> : 
                    <button className="filter-item selected">{item}</button>
                )
            }
        </div>
    )
}

export default Toolbar;