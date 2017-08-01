import React, { Component } from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        };

        this.user = JSON.parse(localStorage.getItem("user"));
        this.onSearch = this.onSearch.bind(this);
        this.updatePlanets = this.updatePlanets.bind(this);
    }

    componentDidMount() {
        this.updatePlanets()
    }

    updatePlanets() {
        this.props.onSearch(this.state.search);
    }

    onSearch(e) {
        this.setState({search: e.target.value}, this.updatePlanets);
    }

    render() {
        return (
            <div className="search-bar">
                <p>Hello {this.user.name}, which planet would you like to explore?</p>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <FormControl type="text" value={this.state.search} onChange={this.onSearch} placeholder="Search" />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default SearchPage;