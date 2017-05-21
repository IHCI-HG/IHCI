import React, { Component } from 'react';
import { connect } from 'react-redux'


class ResumeProduction extends Component {
    render() {
        return (
            <div>
                ResumeProduction
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
    }
}

const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ResumeProduction)
