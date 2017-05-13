import React, { Component } from 'react';
import './blog.scss'

class Blog extends Component {
    state = {
        height: 3000,
    }


    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <iframe src="/blog/Practice.html"
                className="blog-container"
                id="blog-container"
                ref="blog"
                style = {{ height: this.state.height }}
            ></iframe>
        );
    }
}

export default Blog;
