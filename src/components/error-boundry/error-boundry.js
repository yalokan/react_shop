import React, { Component } from 'react';
import ErrorIndicator from "../error-indicator";


export default class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorInfo: null,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, errorInfo: errorInfo});
    }

    render() {
        if (this.state.hasError) {
            console.log(this.state.errorInfo);
            return <ErrorIndicator message = {`error message from Boundry ${this.state.errorInfo}`} />
        }
        return this.props.children;
    }
}
