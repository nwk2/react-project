import React from 'react';
import { Button, Alert } from 'react-bootstrap';

class AlertDisclaimer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                    <h4>Disclaimer</h4>
                    <p>
                        This is a personal project during my internship and is not
                        a product of Equinix. <br/>
                        No company data or info is used here, please forgive the logo.
                    </p>
                    <p>
                        {/*<Button onClick={this.handleDismiss}>Hide Alert</Button>*/}
                    </p>
                </Alert>
            );
        }

        return <Button onClick={this.handleShow}>Disclaimer</Button>;
    }
}

export default AlertDisclaimer;