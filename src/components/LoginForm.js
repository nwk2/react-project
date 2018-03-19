import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: '',
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });

    render() {
        const { data } = this.state;

        return (
            <div class="ui form">
            <Form>
                <Form.Field>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Username'
                        value={data.value}
                        onChange={this.onChange}
                    />
                </Form.Field>

                <Form.Field>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
            </div>
        );
    }

}
export default LoginForm;
