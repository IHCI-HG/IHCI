import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Form, Button } from 'antd'
const FormItem = Form.Item;


import './project-exp.scss'

class ResumeProjectExp extends Component {
    state = {
        projectList:[

        ],

        showNewProject: false,
        newProjectItem: {
            name: "",
            role: "",
            duty: "",
        },

    }


//编辑相关

    editProjectItem = (key) => {
        this.state.projectList[key].editable = true;
        this.setState({
            projectList: this.state.projectList
        })
    }

    cancelEditProject = (key) => {
        this.state.projectList[key].editable = false;
        //从state里面拿数据填入state之中，现在还没有state，所以这个逻辑无法生效
        this.setState({projectList: this.state.projectList})
    }

    saveEditProject = (key) => {
        this.state.projectList[key].editable = false;
        this.setState({ projectList: this.state.projectList})
    }


    delProjectItem = (key) => {
        this.state.projectList.splice(key, 1)
        this.setState({ projectList: this.state.projectList})
    }



//新建相关

    editNewProject = () => {
        this.setState({
            showNewProject: true
        })
    }

    addToProjectList = () => {
        this.state.projectList.push({
            name: this.state.newProjectItem.name,
            role: this.state.newProjectItem.role,
            duty: this.state.newProjectItem.duty,
            editable: false,
        })
        this.setState({
            projectList: this.state.projectList,
            showNewProject: false
        })
    }

    delNewProject = () => {
        this.setState({
            showNewProject: false
        })
    }




    render() {
        return (
            <div className="project-container">
                <h1>项目经历</h1>
                {
                    this.state.projectList.map((item,index)=>{
                        if(item.editable) {
                            return (
                                <div key={index} data-id={index}>
                                    <FormItem>
                                        <span className="help-span"> 项目名称 </span>
                                        <Input
                                            onChange={(e) => {
                                                this.state.projectList[index].name = e.target.value;
                                            }}
                                            defaultValue={this.state.projectList[index].name}
                                        />
                                    </FormItem>

                                    <FormItem>
                                        <span className="help-span"> 承担职责 </span>
                                        <Input
                                            onChange={(e) => {
                                                this.state.projectList[index].role = e.target.value;
                                            }}
                                            defaultValue={this.state.projectList[index].role}
                                        />
                                    </FormItem>

                                    <FormItem>
                                        <span className="help-span"> 项目描述 </span>
                                        <Input
                                            type="textarea"
                                            autosize={{ minRows: 6 }}
                                            onChange={(e) => {
                                                this.state.projectList[index].duty = e.target.value;
                                            }}
                                            defaultValue={this.state.projectList[index].duty}
                                        />
                                    </FormItem>
                                    <Button data-id={index} onClick={this.saveEditProject.bind(this, index)}>保存</Button>
                                    <Button data-id={index} onClick={this.cancelEditProject.bind(this, index)}>取消</Button>
                                </div>
                            )
                        }
                        return (
                            <div key={index}>
                                    <div>项目名称：{item.name}</div>
                                    <div>承担职责：{item.role}</div>
                                    <div>项目描述：{item.duty}</div>
                                <Button data-id={index} onClick={this.editProjectItem.bind(this, index)}>编辑</Button>
                                <Button data-id={index} onClick={this.delProjectItem.bind(this, index)}>删除</Button>
                            </div>
                        )
                    })
                }

                {
                    this.state.showNewProject ?
                    (
                        <div>
                            <FormItem>
                                <span className="help-span"> 项目名称 </span>
                                <Input
                                    onChange={(e) => {
                                        this.state.newProjectItem.name = e.target.value;
                                        this.setState({newProjectItem: this.state.newProjectItem})
                                    }}
                                />
                            </FormItem>

                            <FormItem>
                                <span className="help-span"> 承担职责 </span>
                                <Input
                                    onChange={(e) => {
                                        this.state.newProjectItem.role = e.target.value;
                                        this.setState({ newProjectItem: this.state.newProjectItem })
                                    }}
                                />
                            </FormItem>

                            <FormItem>
                                <span className="help-span"> 项目描述 </span>
                                <Input
                                    type="textarea"
                                    autosize={{minRows: 6}}
                                    onChange={(e) => {
                                        this.state.newProjectItem.duty = e.target.value;
                                        this.setState({ newProjectItem: this.state.newProjectItem })
                                    }}
                                />
                            </FormItem>

                            <FormItem>
                                <Button onClick={this.addToProjectList} style={{ marginLeft: "20px", marginTop: "20px" }}> 保存 </Button>
                                <Button onClick={this.delNewProject} style={{ float: "right", marginRight: "20px", marginTop: "20px"}}> 取消 </Button>
                            </FormItem>
                        </div>
                        ) :
                        <FormItem
                            style={{
                                marginTop: "20px",
                                position: "relative",
                                textAlign: "center"
                            }}
                        >
                            <Button  className="new-project-btn"  onClick={this.editNewProject}> 新增 </Button>
                        </FormItem>
                }



                <FormItem
                    style={{
                        marginTop: "20px",
                        position: "relative",
                        textAlign: "center"
                    }}
                >
                    <Button type="primary">
                        下一页
                    </Button>
                </FormItem>

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
export default connect(mapStateToProps, mapDispatchToProps)(ResumeProjectExp)
