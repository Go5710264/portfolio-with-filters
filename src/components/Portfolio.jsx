import React, { Component } from "react";
 import Toolbar from "./Toolbar";
 import ProjectList from "./ProjectList";

class Portfolio extends Component {
    constructor(props){ // props === list
        super(props); // передача list в наследуемы класс Component 
        this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
        this.selected = ['All'];
        this.projectList = ProjectList;
        console.log(this.projectList)
        this.state = {selected: 'All'}; // начальное состояние
    }

    render() {
        return (
            <>
                <Toolbar 
                    filters={this.filters}
                    selected={this.state}
                    // onSelectFilter={(filter) => this.setState({selected:filter})} // обработчик события?? Как это понять? откуда берется filter?
                    onSelectFilter={(filter) => console.log(filter)} // обработчик события?? Как это понять? откуда берется filter?

                />
                <ProjectList profile={this.props}/>
            </>
        )
    }
}
export default Portfolio