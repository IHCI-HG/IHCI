import React, { Component } from 'react';
import { connect } from 'react-redux'

class ResumeProjectExp extends Component {
    render() {
        return (
            <div>ResumeProjectExp</div>
        );
    }
}

function mapStateToProps(state){
    return{
    }
}

const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ResumeProjectExp)
