import React, { Component } from 'react';
import { connect } from 'react-redux'
import './base-info.scss'

class ResumeBaseInfo extends Component {
    render() {
        return (
            <div className="base-info-container">
                <h1>基本信息</h1>
                {this.props.name}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        name: state.resume.name
    }
}



const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ResumeBaseInfo)

