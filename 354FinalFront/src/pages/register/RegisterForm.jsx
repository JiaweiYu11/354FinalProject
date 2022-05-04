import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import shortid from 'shortid';

class RegisterForm extends Component {
    state = {
        userInfo: {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        errMsg: []
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ errMsg: [] });
        const { data } = await this.props.registerFn.registerAc(this.state.userInfo);
        if (data.status === 1) {
       
            
            this.props.flashFn.addFlashAc({
                type: 'alert-danger',
                text: 'Login Failed !',
                id: shortid.generate()
        });
        return;

    };
    this.props.history.push('/login');
    this.props.flashFn.addFlashAc({
        type: 'alert-success',
        text: 'Sign Up Successful!',
        id: shortid.generate()
    });
}
    handleChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    };


    render() {
        const { username, email, password, confirmpassword } = this.state.userInfo;
        const { errMsg } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {/* User Name */}
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "username",
                        })}
                        id="username"
                        name="username"
                        defaultValue={username}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'username' && errMsg[1]}
                    </small>
                </div>
                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "email",
                        })}
                        id="email"
                        name="email"
                        defaultValue={email}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'email' && errMsg[1]}
                    </small>
                </div>
                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "password",
                        })}
                        id="password"
                        name="password"
                        defaultValue={password}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'password' && errMsg[1]}
                    </small>
                </div>
                {/* Confirm Password */}
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                        type="password"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "confirmpassword",
                        })}
                        id="confirmpassword"
                        name="confirmpassword"
                        defaultValue={confirmpassword}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'confirmpassword' && <p>The password is inconsistent</p>}
                    </small>
                </div>
                <hr className="my-4" />
                {/* Show password check(not finish yet !!!!) */}
                {/* <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>

        );
    }
}

export default withRouter(RegisterForm);