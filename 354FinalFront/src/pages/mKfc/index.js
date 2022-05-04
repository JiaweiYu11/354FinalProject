import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { actionCreators as grainActionCreators } from './store';
import { actionCreators as flashActionCreators } from '../flash/store';
import App from "./App";

class Kfc extends Component {
    render(){
        return <App {...this.props}/>
    };
};

const mapStateToProps = state => {
    return{
        kfcData: state.Kfc
    };
};

const mapDispatchToProps = dispatch => {
    return{
        //grainFn: bindActionCreators(grainActionCreators, dispatch),
        flashFn: bindActionCreators(flashActionCreators, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Kfc);