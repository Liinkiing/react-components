import React from 'react'
import PropTypes from 'prop-types';


class TabPanel extends React.Component {
    render() {
        let activePanel = this.props.panels.filter(panel => panel.props.index === this.props.activePanel)[0];
        console.log(activePanel);
        return (
            <div className="tab-panel">
                {activePanel.props.children}
            </div>
        )
    }
}

export class Tabs extends React.Component {

    constructor() {
        super();
        this.state = {
            active: 0
        }
    }

    handleItemClick(e) {
        e.preventDefault();
        this.setState({active: Number(e.target.dataset.index)});
    }

    render() {
        let panels = [];
        let i = 0;
        return (
            <div className="tabs">
                <ul className="tab tab-block">
                    {this.props.children.map(panel => {
                        let item =  <TabItem activePanel={this.state.active} index={i} key={i} onItemClick={(e) => this.handleItemClick(e)} {...panel.props}/>;
                        panels.push(item);
                        i++;
                        return item;
                    })}
                </ul>
                <TabPanel panels={panels} activePanel={this.state.active}/>
            </div>
        );
    }
}


export class TabItem extends React.Component {

    render() {
        return (
            <li onClick={this.props.onItemClick} className={"tab-item" + (this.props.index === this.props.activePanel ? " active" : "")}>
                <a data-index={this.props.index} href="#">{this.props.title}</a>
            </li>
        )
    }
}

TabItem.propTypes = {
    index: PropTypes.number,
    activePanel: PropTypes.number,
    title: PropTypes.string.isRequired,
    onItemClick: PropTypes.func
};
