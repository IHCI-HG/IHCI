import React, { Component } from 'react';
import { connect } from 'react-redux'


class ResumeSelfIntro extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div id="editor-container">   </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ResumeSelfIntro)
