import React, { Component } from 'react';
import { connect } from 'react-redux'

// import Quill from '../../components/quill'

class ResumeSelfIntro extends Component {
    componentDidMount() {
        // var quill = new Quill('#editor-container', {
        //     modules: {
        //         toolbar: [
        //             [{ header: [1, 2, false] }],
        //             ['bold', 'italic', 'underline'],
        //             ['image', 'code-block']
        //         ]
        //     },
        //     placeholder: 'Compose an epic...',
        //     theme: 'snow'  // or 'bubble'
        // });
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
