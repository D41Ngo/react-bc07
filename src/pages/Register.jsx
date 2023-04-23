import React, {Component} from 'react';

import {Prompt} from 'react-router-dom'

class Register extends Component {
    state = {
        isSubmit: false,
    }

    handleRegister = () => {
        this.setState({
            isSubmit:true,
        })
    }

    render() {
        return (
            <div className={'container'}>
                <h2>Register</h2>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                        id={'username'}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Password"
                        id={'password'}/>

                </div>

                <button
                    className={'btn btn-success'}
                    onClick={this.handleRegister}
                >
                    Register
                </button>

                <Prompt
                    when={this.state.isSubmit === false}
                    message={'You have unsaved changes that will be lost if you leave the page.'}
                />
            </div>
        );
    }
}

export default Register;
