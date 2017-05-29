import React from 'react'
import './home-page.scss'
import { Button } from 'antd';
import {Icon} from "antd";
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}
class Home extends React.Component {
    render() {
        return (
            <div className='body'>
                <div className="hope-page">
                <div className="inner-mask"></div>
                <p>我们提供创新、创造、就业和创业等多层次的机会平台</p>
                <Button className="hope-page-button" type="primary" >浏览机会</Button>
                </div>
                <div className="chance-page">
                  <div className="project-content">
                      <div className="chance-icon">
                        <Icon type="rocket" className="project-icon"/>
                        <span>&nbsp;项目机会</span>
                      </div>
                      <div className="project">
                         <Icon type="question-circle-o" />
                         <span>SRP项目</span>
                     </div>
                    <div className="project">
                              <Icon type="question-circle-o" />
                              <span>国创项目</span>
                    </div>
                    <div className="project">
                                  <Icon type="question-circle-o" />
                                 <span>企业项目</span>
                    </div>                    
                </div>
                      <div className="company-practice">
                          <div className="practice-content">
                          <Icon type="hourglass" /><span>企业实习机会</span>
                          </div>
                          </div>
                </div>
                <div className="example-page">
                 <h1>遇见优秀榜样，预见精彩人生</h1>
                 <br/>
                 <span>看看他（她）们的故事</span>
                 <br />
                 <div className="table">
                 <table className="table">
                     <tr>
                         <td className="picture"><img src="http://opbzdyf3b.bkt.clouddn.com/boy.jpg" alt="wrong"/></td>
                         <td className="text"> <span className="name">时代先锋</span><br/>
                            <span className="cause">C++工程师</span><br/>
                            <span className="sentence">&nbsp;成为时代先锋是我们的不懈追求，我们致力于时代先锋的培养</span></td>
                         <td className="picture"><img src="http://opbzdyf3b.bkt.clouddn.com/coding.jpg"/></td>
                         <td className="text"> <span className="name">时代先锋</span><br/>
                            <span className="cause">C++工程师</span><br/>
                            <span className="sentence">&nbsp;成为时代先锋是我们的不懈追求，我们致力于时代先锋的培养</span></td>
                    </tr>
                    <tr className="needDo">
                        <td className="text"> <span className="name">时代先锋</span><br/>
                            <span className="cause">C++工程师</span><br/>
                            <span className="sentence">&nbsp;成为时代先锋是我们的不懈追求，我们致力于时代先锋的培养</span></td>
                        <td className="picture"><img src="http://opbzdyf3b.bkt.clouddn.com/girl.jpg"/></td>
                        <td className="text">
                            <span className="name">时代先锋</span><br/>
                            <span className="cause">C++工程师</span><br/>
                            <span className="sentence">&nbsp;成为时代先锋是我们的不懈追求，我们致力于时代先锋的培养</span>
                            </td>
                        <td className="picture"><img src="http://opbzdyf3b.bkt.clouddn.com/view.jpg"/></td>
                   </tr>
                </table>
                </div>
                 <Button className="story">更多故事</Button>
                </div>
                <div className="occupation-page">
                    <h1>我们这样帮你发现职业机会</h1>
                    <div className="service-wrapper">
                        <div className="service-block">
                         <img src="https://snow-assets.100offer.com/assets/index/service/1-e97c44ba3cf591445d13bedaefb2f5da.png" alt="it's wrong"/>
                            <div className="service-text">前沿技术阵地，选择未来，拥抱未来</div>
                        </div>
                        <div className="service-block">
                            <img src="https://snow-assets.100offer.com/assets/index/service/2-d456bdf3ca805b6e1e5406f172f23a57.png" alt="wrong"/>
                            <div className="service-text">专业的指导，让你对未来发展之路更加清晰</div>
                        </div>
                        <div className="service-block">
                            <img src="https://snow-assets.100offer.com/assets/index/service/3-9029a219fa0ebd1fc587ef7980aa1436.png" alt="wrong"/>
                            <div className="service-text">多项目实践，掌握前沿技术</div>
                        </div>
                        <div className="service-block">
                            <img src="https://snow-assets.100offer.com/assets/index/service/4-971fa862b236b9850a6948fedb2953ac.png" alt="wrong"/>
                            <div className="service-text">优秀的学习氛围，让你在浓厚的学习氛围下快速成长</div>
                        </div>
                        <div className="service-block">
                            <img src="https://snow-assets.100offer.com/assets/index/service/5-e0d5cf8b4d72cc509b6e014db2433fb9.png"alt="wrong"/>
                            <div className="service-text">师兄师姐的分享，让你更加经验丰富</div>
                        </div>
                        <div className="service-block">
                            <img src="https://snow-assets.100offer.com/assets/index/service/6-2a80aa41b4cb8920fa4e72402eddd564.png"alt="wrong"/>
                            <div className="service-text">活跃的社团的环境，助你在轻松的氛围中愉快coding</div>
                        </div>
                    </div>

            </div>
            </div>
            
        );
    }
}

export default Home;

