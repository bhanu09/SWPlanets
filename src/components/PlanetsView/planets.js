import React, { Component } from 'react';

class Graph extends React.Component {
    render() {
        return (
            <svg width={this.props.width} height={this.props.height}>
                <circle cx="25" cy="25" r="25" />
                <circle cx="45" cy="25" r="25" />
                <circle cx="25" cy="25" r="25" />
            </svg>
        )
    }
}

class PlanetsView extends Component {
    constructor(props) {
        super(props);
    }

    getPlanetsView() {
        return (
            <Graph height="600" width="800" />
        );
    }

    render() {
        return (
            <div className="planets-view">
                {this.getPlanetsView()}
                <ul>
                    {this.props.planets.map((planet, i) => <li key={"planet-" + (i + 1)}>{planet.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default PlanetsView;