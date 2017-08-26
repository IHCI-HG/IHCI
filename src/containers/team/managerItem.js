import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './managerItem.scss'
 
 
class ManagerItem extends Component{

    constructor(props){
        super(props);
        this.state={
            name: this.props.name
        }
        
    }

    render(){
        return (
            <div className="manager">
                <div className="picture">

                </div>
                <p id="name">{this.state.name}</p>
                <div style={{marginLeft:5}}><p style={{color:'gray'}}>（管理员）</p></div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
    
}

export default ManagerItem = connect(mapStateToProps, mapDispatchToProps)(ManagerItem);