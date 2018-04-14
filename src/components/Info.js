import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Info extends Component {

    render() {
        return (

            <div className='info-page'>
                <PageHeader>
                    Information <small> Dashboard</small>
                </PageHeader>
                <ul>
                    <li>React</li>
                    <li>Http Client: Axios </li>
                    <li>react-bootstrap, semantic-ui</li>
                </ul>
            </div>
        )
    }
}

export default Info;