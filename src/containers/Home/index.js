import React from 'react'
import './home-page.scss'

class Home extends React.Component {
    render() {
        return (
            <div className='jumbotron'>
                <h1>这是主页</h1>
                <p>这是一些描述真的是这样子的，吗</p>
                <button className='btn btn-primary'>Learn more</button>
            </div>
        );
    }
}

export default Home;

