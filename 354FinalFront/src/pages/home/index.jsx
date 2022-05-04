import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Here is the home page</h1>
                <p className="lead">
                    Here is a takeout app
                </p>
                <hr className="my-4" />
                <h2>Notice:</h2>
                <p className="lead">login as a shopkeeper: can add new product on menu for your store</p>
                <div>
                <button className="" style={{ width: "600px" }}>
                    <Link className="nav-link" to="/mcOrder"><img style={{ width: "550px" }} alt="mc" src="https://th.bing.com/th/id/OIP.y0eEA5UzSo1-5ZQkrn_3-QHaEo?pid=ImgDet&rs=1"></img></Link>
                </button>
                </div>
                <div>
                <button className="" style={{ width: "600px" }}>
                    <Link className="nav-link" to="/kfcOrder"><img style={{ width: "550px" }} alt="mc" src="https://meetmeprograms.hu/wp-content/uploads/2017/06/kfc-head.jpg"></img></Link>
                </button>
                </div>
                <div>
                <button className="" style={{ width: "600px" }}>
                    <Link className="nav-link" to="/subwayOrder"><img style={{ width: "550px" }} alt="mc" src="https://th.bing.com/th/id/R.cadd0d9935ac6e596001702fd6661d57?rik=mZrJTjDLSF2hkQ&riu=http%3a%2f%2fguyhut.com%2fwp-content%2fuploads%2f2018%2f09%2fsubway-sandwich-1024x683.jpg&ehk=Yx%2fvE8RI96FwFSEZ%2b6vtawEiYSYWVUP6C27GH3m5scE%3d&risl=&pid=ImgRaw&r=0"></img></Link>
                </button>
                </div>
                <div>
                <button className="" style={{ width: "600px" }}>
                    <Link className="nav-link" to="/applebeeOrder"><img style={{ width: "550px" }} alt="mc" src="https://static1.therichestimages.com/wordpress/wp-content/uploads/2018/11/Applebees-New-Target-Market-Is-Stress-Eaters.jpg"></img></Link>
                </button>
                </div>
                
                <p className="lead">login as a customer: can order product online</p>
                <p className="lead">frontend without login will show on this page. here is no router intercept</p>
            </div>

        );
    }
}