import * as React from 'react';
import './BlogComponent.css';
import {Blog} from "../../model/Blog";
import { Card, CardText, CardTitle } from 'react-mdl';

interface Props {
    blog:Blog;
}

export class BlogComponent extends React.Component<Props, null> {
    public render() {
        const { blog } = this.props;
        return (
            <Card shadow={0} style={{width: '512px', margin: 'auto', marginBottom:'20px'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${blog.mediaUrl}) center / cover`}}>
                    {blog.name}
                    </CardTitle>
                <CardText>{blog.summary}</CardText>
            </Card>
        )
    }
}