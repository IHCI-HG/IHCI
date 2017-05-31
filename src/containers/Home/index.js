import React from 'react';
import style from './home.css'
const arrow1 = require('./images/arrowdown.png')
const arrow2 = require('./images/arrowup.png')
const c1 = require('./images/1-1.png')
const c2 = require('./images/1-2.jpg')
const c3 = require('./images/1-3.png')
const c4 = require('./images/1-4.png')
const c5 = require('./images/1-5.png')
const c6 = require('./images/1-6.png')
const m1 = require('./images/m1.jpg')
const m2 = require('./images/m2.jpg')
const m3 = require('./images/m3.jpg')
const m4 = require('./images/m4.jpg')
const b1 = require('./images/b1.jpg')
const b2 = require('./images/b2.jpg')
const b3 = require('./images/b3.jpg')
const h1 = require('./images/h1.png')
const h2 = require('./images/h2.png')
const h3 = require('./images/h3.png')
const h4 = require('./images/h4.png')
const h5 = require('./images/h5.png')
const h6 = require('./images/h6.png')




const Home = () => (
    <div className="main">
        <div className="cover" id="top">
            <h1>iHCI</h1>
            <p className="description">iHCI助力成长iHCI助力成长iHCI助力成长iHCI助力成长iHCI助力成长iHCI助力成长iHCI助力成长</p>
            <a href="#jump"><img src={arrow1} alt=""/></a>
        </div>
        <div className="chance" id="jump">
            <h2>机会</h2>
            <h3>iHCI给你提升自我的机会</h3>
            <ul>
                <li><a href="">项目</a></li>
                <li><a href="">实习</a></li>
                <li><a href="">比赛</a></li>
            </ul>
            <table>
                <tr>
                    <td><img src={c1} className="chance-pic" /></td>
                    <td><img src={c2} className="chance-pic" /></td>
                    <td><img src={c3} className="chance-pic" /></td>
                </tr>
                <tr>
                    <td><img src={c4} className="chance-pic" /></td>
                    <td><img src={c5} className="chance-pic" /></td>
                    <td><img src={c6} className="chance-pic" /></td>
                </tr>
            </table>
        </div>
        <div className="model">
            <h2>榜样</h2>
            <h3>看看他们的故事</h3>
            <table>
                <tr>
                    <td><img src={m1} alt=""/></td>
                    <td><p>Tom William</p></td>
                    <td><img src={m2} alt="" /></td>
                    <td><p>Sarah Green</p></td>
                </tr>
                <tr>
                    <td><p>John Doe</p></td>
                    <td><img src={m3} alt=""/></td>
                    <td><p>Jenny White</p></td>
                    <td><img src={m4} alt="" /></td>
                </tr>
            </table>
        </div>
        <div className="blog">
            <h2>博客</h2>
            <h3>微观技术前沿</h3>
            <ul>
                <li><img src={b1} className="blog-pic"/></li>
                <li><img src={b2} className="blog-pic"/></li>
                <li><img src={b3} className="blog-pic"/></li>
            </ul>
        </div>
        <div className="help">
            <h2>iHCI这样帮助你成长</h2>
            <ul>
                <li>
                     <img src={h1} alt=""/>
                     <p>在一周内看到5-10个合适的项目机会</p>
                 </li>
                 <li>
                     <img src={h2} alt=""/>
                     <p>让你在毕业时拥有漂亮的简历</p>
                 </li>
                 <li>
                     <img src={h3} alt=""/>
                     <p>我们尊重你的隐私，企业看不到你的姓名和联系方式，除非你同意</p>
                 </li>
                 <li>
                     <img src={h4} alt=""/>
                     <p>发现更好的自己</p>
                 </li>
                 <li>
                     <img src={h5} alt=""/>
                     <p>iHCI在整个过程中向你提供专业的帮助和建议</p>
                 </li>
                 <li>
                     <img src={h6} alt=""/>
                     <p>我们不收取任何费用，相反，入职后，你还会收到我们的一份贺礼</p>
                 </li> 
            </ul>
        </div>
        <footer>
            <div className="top">
                <p>iHCI</p>
                <input type="text"/>
            </div>
            <div className="footer-tb">
                <table>
                    <tr>
                        <th colSpan="2">看机会</th><th>招人才</th><th>关于我们</th>
                    </tr>
                    <tr>
                        <td>看机会</td><td className="specialcell">常见问题</td><td>招人才</td><td>关于我们</td>
                    </tr>
                    <tr>
                        <td>注册</td>
                        <td></td>
                        <td>注册</td>
                        <td>加入我们</td>
                    </tr>
                    <tr>
                        <td>登录</td><td></td><td>登录</td>
                    </tr>
                </table>
                <a href="#top"><img src={arrow2} alt=""/></a>
            </div>
            <p>iHCI@2017</p>
        </footer>
    </div>
    
)


export default Home
