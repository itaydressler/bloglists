import * as React from 'react';
import './BlogComponent.css';
import {Blog} from "../../model/Blog";
import { Card, CardText, CardTitle } from 'react-mdl';
import {BlogPostComponent} from "./BlogPost/BlogPostComponent";

interface Props {
    blog:Blog;
}

export class BlogComponent extends React.Component<Props, null> {
    private onClick = () => {
        window.open(this.props.blog.siteUrl,'_blank');
    };

    public render() {
        const { blog } = this.props;
        return (
            <Card shadow={0} style={{width: '512px', marginBottom:'20px', marginLeft:'50px', cursor:'pointer'}} onClick={this.onClick}>
                <CardTitle className="blog-title" style={{color: '#fff', height: '176px', background: `url(${blog.mediaUrl}) center / cover`}}>
                    {blog.name}
                    </CardTitle>
                <CardText>{blog.summary}</CardText>
                <div>
                    { blog.posts.map(post => <BlogPostComponent post={post}/>)}
                </div>
            </Card>
        )
    }
}