import * as React from 'react';
import './App.css';
import {DataStore} from "./model/DataStore";
import {BlogComponent} from "./components/Blog/BlogComponent";

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {

    private renderBlogs() {
        return DataStore.getBlogs().map(blog => <BlogComponent blog={blog}/>);
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
