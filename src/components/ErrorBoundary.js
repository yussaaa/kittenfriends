import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hassError: false
        }
    }

    coomponentDidCatch(error, info) {
        this.setState({ hassError: true })
    }

    render() {
        if (this.state.hassError) {
            return <h1>Ooooops. Something wrond happened!!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;

