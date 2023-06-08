import { useState } from "react";

const Toolbar = (props) => {

    const { filters, selected } = props;
    // const [state, setState] = useState()

    // console.log(onSelectFilter)
    return(
        <div className="filter-bar">
            {filters.map((item) => 
                item !== selected[0] ? <div  className="filter-item">{item}</div> : <div className="filter-item selected">{item}</div>)
            }
        </div>
    )
}

export default Toolbar;