import React, { Component } from 'react';
//import axios from '../../utils/request';
import decode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import shortid from 'shortid';

class LoginForm extends Component {
    state = {
        userInfo: {
            username: '',
            password: ''
        }
    };


    handleSubmit = async e => {
        e.preventDefault();
        const { data } = await this.props.loginFn.loginAc(this.state.userInfo);
        if (data.status === 0) {
            //save token at local
            localStorage.setItem('@#@TOKEN', data.token);
            //send user information to redux
            this.props.loginFn.syncInfoAc(decode(data.token));
            //link to dashboard
            this.props.history.push('/dashboard')
            //alert
            this.props.flashFn.addFlashAc({
                type: 'alert-success',
                text: 'Login Successful!',
                id: shortid.generate()
            });
            return;
        }
            this.props.flashFn.addFlashAc({
            type: 'alert-danger',
            text: 'Login Failed !',
            id: shortid.generate()
        });
        //console.log(data);
    };
    handleChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }


    render() {
        const { username, password } = this.state.userInfo;
        return (
            <form onSubmit={this.handleSubmit}>
                {/* User Name */}
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" name="username" id="username" defaultValue={username} onChange={this.handleChange} />
                </div>
                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" defaultValue={password} onChange={this.handleChange} />
                </div>
                <hr className="my-4" />
                {/* Show password check(not finish yet !!!!) */}
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        )
    }
}

export default withRouter(LoginForm);