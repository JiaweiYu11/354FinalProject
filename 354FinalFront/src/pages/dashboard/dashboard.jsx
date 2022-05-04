import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from '../../utils/request';

export default class Dashboard extends Component {
    async componentDidMount() {
        // const { data } = await axios.post('/api/dashboard');
        // console.log(data);
    }
    render() {
        return (
            <div>
                <hr className="my-4" />
                <div className="input-group">
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/mc">McDonald</Link>
                    </button>
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/kfc">KFC</Link>
                    </button>
                </div>
                <hr className="my-4" />

                <div className="input-group">
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/subway">Subway</Link>
                    </button>
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/abee">Applebee's</Link>
                    </button>
                </div>
                <hr className="my-4" />

                <div className="input-group">
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/miscequipments">Subway</Link>
                    </button>
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/toolssupplies">Wendy's</Link>
                    </button>
                </div>
                <hr className="my-4" />

                <div className="input-group">
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/livestock">Popeys</Link>
                    </button>
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/farmuse">Restaurant 01</Link>
                    </button>
                </div>
                <hr className="my-4" />

                <div className="input-group"> 
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/lienholder">Restaurant 02</Link>
                    </button>
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/scheduled">Restaurant 03</Link>
                    </button>
                </div>
                <hr className="my-4" />

                <div className="input-group">
                    <button className="alert alert-primary container" style={{ width: "350px" }}>
                        <Link className="nav-link" to="/specifically">Restaurant 04</Link>
                    </button>
                </div>

            </div>
        )
    };
};