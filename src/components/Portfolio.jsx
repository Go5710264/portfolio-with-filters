import { Component } from "react";
import PropTypes from 'prop-types';
 import Toolbar from "./Toolbar";
 import ProjectList from "./ProjectList";

class Portfolio extends Component {
    constructor(props){ // props === list
        super(props); // передача list в наследуемы класс Component 
        this.state = {selected: 'All'}; // начальное состояние
        this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
        // this.selected = ['All'];
    }

    render() {
        return (
            <>
                <Toolbar 
                    filters={this.filters}
                    selected={this.state}
                    onSelectFilter={(filter) => this.setState({selected: filter})}
                /*onSelectFilter - является функцией, которая передается внутрь компонента
                    и далее учавствует в обработке события
                    при нажатии на один из фильтров this.setState обновит состояние this.state
                    произойдет рендеринг и новое значение this.state поступит в ProjectList  */
                />
                <ProjectList profile={this.state.selected === 'All' ? 
                this.props.list : 
                this.props.list.filter(element => element.category === this.state.selected)} className={this.state.selected}
                />
            </>
        )
    }
}

Portfolio.propTypes = {
    list: PropTypes.array,
}
export default Portfolio