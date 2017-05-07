import * as React from 'react';
import './App.css';
import {DataStore} from "./model/DataStore";

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {

    private renderBlogs() {
        return DataStore.getBlogs().map(blog => {
            return (
                <div>
                    <div>{blog.name}</div>
                    <div>{blog.blogSummary}</div>
                    {
                        blog.posts.map(post => {
                            return (
                                <div>
                                    <a href={post.url}>{post.title}</a>
                                </div>
                            )
                        })
                    }
                </div>
            )
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Bloglists!</h2>
                </div>
                <p className="App-intro">
                    We got started!
                </p>

                { this.renderBlogs() }
            </div>
        );
    }
}

export default App;
