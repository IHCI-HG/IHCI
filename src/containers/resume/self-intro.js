import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input, Form, Button } from 'antd'
const FormItem = Form.Item;
import { browserHistory } from 'react-router'

import './self-intro.scss'


class ResumeSelfIntro extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="self-intro-container">
                <h1>自我介绍</h1>
                <div className="description1">在IHCI实验室，个人描述是你简历中最重要的部分，不过你没必要重复你在工作和项目经历中已经罗列出的内容。你可以畅所欲言，评价一下自己的技术能力、获奖经历或者一些能证明自己学习能力，我们希望从，聊聊自己的开源项目，理想中的团队，以及你的个人爱好等等。正是这些内容让你的简历看起来不再冰冷，而是充满了个人特色。</div>

                <Input
                    type="textarea"
                    autosize= {{
                         minRows: 6
                    }}
                />

                <FormItem
                    style={{
                        marginTop: "20px",
                        position: "relative",
                    }}
                >
                    <Button type="primary" className="save-button" >
                        保存
                        </Button>
                    <Button
                        type="primary"
                        className="next-page-button"
                        onClick={() => { browserHistory.push("/resume/project") }}
                    >
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
export default connect(mapStateToProps, mapDispatchToProps)(ResumeSelfIntro)
