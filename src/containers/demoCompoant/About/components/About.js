import React from 'react'
// import $ from 'jquery'

const About = React.createClass({
    handleSubmit1(e) {
        e.preventDefault()
        this.props.addStr(this.refs.tttt.value)


    },

    //   handleSubmit2 (e) {
    //     e.preventDefault()
    //     const that = this
    //     $.ajax({
    //       method: 'get',
    //       url: 'getState.json'
    //     }).done(function (data) {
    //       that.props.inite.call(that, data.number, data.str)
    //       console.log(data.number)
    //       console.log(data.str)
    //     })
    //     $.ajax({
    //       method: 'get',
    //       url: 'api.hzy.pw/saying/v1/ciba',
    //     }).done(function (data) {

    //     })
    //   },
    render() {
        return (
            <div style={{ margin: '0 auto' }} >
                <div style={{ fontSize: '38px' }} className='help-block'>bootstarp demo组件示范</div>
                <div style={{ fontSize: '24px' }}>这整个组件都很多毛病，各种野鸡写法，是个错误示范</div>
                <div> 功能函数和事件已经被注释掉了 </div>
                <div> 注意看console React.createClass 方法已经废弃，但是还面前能用所以会报错</div>
                <div>Number: {this.props.number}</div>
                <button onClick={this.props.increNumber}> ADD NUMBER </button>
                <button onClick={this.props.async}> ADD NUMBER </button>
                <button onClick={this.handleSubmit2}> Init </button>

                <div>Str : {this.props.str}</div>
                <form ref='commentForm' onSubmit={this.handleSubmit1}>
                    <input type='text' ref='tttt' placeholder='input' />
                    <input type='submit' value='sss' />
                </form>

                {/*    下面开始bootstrap代码调试     */}
                <br /><br /><br />

                <form role='form'>
                    <div className='form-group'>
                        <label>Email address</label>
                        <input type='email' className='form-control' id='exampleInputEmail1' placeholder='Enter email' />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
                    </div>
                    <div className='form-group'>
                        <label>File input</label>
                        <input type='file' id='exampleInputFile' />
                        <p className='help-block'>Example block-level help text here.</p>
                    </div>
                    <div className='checkbox'>
                        <label>
                            <input type='checkbox' /> Check me out
            </label>
                    </div>
                    <button type='submit' className='btn btn-default'>Submit</button>
                </form>

            </div>
        )
    }
})



export default About
