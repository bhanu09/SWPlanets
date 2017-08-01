import React, { Component } from 'react';

class Graph extends React.Component {
    render() {
        return (
            <svg width="150" height="150">
                <circle cx="50" cy="50" r={this.props.radius} />
                <text x="50" textAnchor="middle" y="110">{this.props.name}</text>
            </svg>
        )
    }
}

class PlanetsView extends Component {
    constructor(props) {
        super(props);

        this.getPlanetsView = this.getPlanetsView.bind(this);
    }

    getPlanetsView() {
        var {planets} = this.props;

        var biggestPlanet = planets.reduce((a,b)=> {
            var pol = b.population * 1;
            return !isNaN(pol) && pol > a.population ? b : a;
        }, {population:0})
        
        var biggestPopulation = biggestPlanet.name ? biggestPlanet.population : 0;

        var planetSets = planets.map(a => {
            var pol = a.population * 1;
            var radius = biggestPopulation && !isNaN(pol) ? (pol/biggestPopulation * 50) : 25;
            return {
                name: a.name,
                radius
            }
        })

        return (
            <div>
                {planetSets.map((a, i) => <Graph key={"planet-"+ (i + 1)} {...a} />)}
            </div>
        );
    }

    render() {
        return (
            <div className="planets-view">
                {this.getPlanetsView()}
            </div>
        );
    }
}

export default PlanetsView;