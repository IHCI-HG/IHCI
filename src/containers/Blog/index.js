import React, { Component } from 'react';
import './blog.scss'

class Blog extends Component {
    state = {
        height: 5000,
    }

    onWindowResize(e) {
        // const blogContainer = document.getElementById("blog-container")
        // console.log(blogContainer.contentWindow);
        // this.setState({ height: blogContainer.contentWindow.scrollHeight})
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize.bind(this))
        console.log(this.refs.blog.contentDocument);
        console.log(this.refs.blog.contentWindow.document.body.offsetHeight);
        console.log(this.refs.blog.contentWindow.innerHeight);
        // this.setState({ height: this.refs.blog.contentWindow.document.body.clientHeight})
    }
    componentWillUnmount() {
        console.log("object");
        window.removeEventListener('resize', this.onWindowResize)
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
