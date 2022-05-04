import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import FlashItem from './FlashItem';
import { bindActionCreators } from 'redux';
import { actionCreators as flashActionCreators } from  './store';

class Flash extends Component{
    render(){
        return(
            <Fragment>
                {this.props.flashData.map(item => <FlashItem key={item.id} {...item} {...this.props} />)}
            </Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return{
        flashData: state.flash,
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        flashFn: bindActionCreators(flashActionCreators, dispatch),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Flash);