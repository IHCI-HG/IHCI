import React, { Component } from 'react';
import { connect } from 'react-redux'

class ResumeSocialExp extends Component {
    render() {
        return (
            <div>ResumeSocialExp</div>
        );
    }
}

function mapStateToProps(state){
    return{
    }
}

const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(ResumeSocialExp)
