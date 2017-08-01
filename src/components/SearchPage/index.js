import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Button } from 'react-bootstrap';
import SearchBar from '../SearchBar';
import PlanetsView from '../PlanetsView';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.removeItem("user");
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="search-page">
                <div className="header">
                    <Navbar inverse>
                        <Navbar.Header>
                            <Navbar.Brand>SWPlanets</Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem>
                                    <Button bsStyle="link" onClick={this.onLogout}>Logout</Button>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <SearchBar />
                <PlanetsView />
            </div>
        );
    }
}

export default SearchPage;