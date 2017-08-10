import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './createTeam.scss'
const FormItem = Form.Item;

class CreateTeam extends Component{

    render(){
        return (
            <div className = "createTeam-container">
               <Form>
                   <div className = "create-container">
                       <h1>新团队名称</h1>
                       <FormItem>
                            <input 
                                placeholder = "例如：智能人机交互实验室"
                                type = "text"
                                //onChange = {}
                            />
                       </FormItem>

                        <Button
                            type = "primary"
                            className = "create-team-btn"
                            //onClick = {}
                            //disabled = {}
                        >
                            创建团队
                       </Button>
                       
                       <Button
                            type = "dark"
                            className = "cancel-btn"
                            //onClick = {}
                        >
                            取消
                       </Button>
                   </div>
               </Form>
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

export default CreateTeam = connect(mapStateToProps, mapDispatchToProps)(CreateTeam);