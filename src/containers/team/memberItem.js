import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import './memberItem.scss'
 
 
class MemberItem extends Component{

    constructor(props){
        super(props);
        this.state={
            name: this.props.name
        }
    }

    render(){
        return (
            <div className="member">
                <div className="picture">

                </div>
                <p>{this.state.name}</p>
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

export default MemberItem = connect(mapStateToProps, mapDispatchToProps)(MemberItem);