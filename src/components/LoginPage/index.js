import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Alert } from 'react-bootstrap';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoading: false,
            hasError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        });

        fetch("https://swapi.co/api/people/?search=" + this.state.username)
            .then(res => res.json())
            .then(this.onSuccess)
            .catch(this.onError);
    }

    onSuccess(data) {
        var user;

        this.setState({ isLoading: false });

        if (data.count > 0) {
            user = data.results.find(a =>
                a.name == this.state.username && a.birth_year == this.state.password
            );

            if (!user) {
                this.updateError();
            }
            else {
                localStorage.setItem("user", JSON.stringify(user));
                this.props.history.push("/search");
            }
        }
        else {
            this.updateError();
        }
    }

    onError() {
        this.updateError();
    }

    updateError() {
        this.setState({
            hasError: true
        });
    }

    setUsername(e) {
        this.setState({
            username: e.target.value,
            hasError: false
        });
    }

    setPassword(e) {
        this.setState({
            password: e.target.value,
            hasError: false
        });
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={!this.state.isLoading && this.handleSubmit}>
                    { this.state.hasError && <Alert bsStyle="danger">
                        <strong>Err!</strong> Enter correct details and try again
                    </Alert>}
                    <FormGroup controlId="formControlsName">
                        <ControlLabel>User Name</ControlLabel>
                        <FormControl type="text" required disabled={this.state.isLoading} value={this.state.username} onChange={this.setUsername} placeholder="eg: Luke Skywalker" />
                    </FormGroup>
                    <FormGroup controlId="formControlsPassword">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" required disabled={this.state.isLoading} value={this.state.password} onChange={this.setPassword} placeholder="Password" />
                    </FormGroup>
                    <Button type="submit" disabled={this.state.isLoading}>{this.state.isLoading ? 'Loging in...' : 'Login'}</Button>
                </form>
            </div>
        );
    }
}

export default LoginPage;