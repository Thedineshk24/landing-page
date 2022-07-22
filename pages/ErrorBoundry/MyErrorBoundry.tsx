import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props)

        // Define a state variable to track whether is an error or not
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI

        return { hasError: true }
    }
    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo);
    }
    render() {
        // @ts-ignore
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again?
                    </button>
                </div>
            )
        }


        // @ts-ignore
        return this.props.children
    }
}

export default ErrorBoundary