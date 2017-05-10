import * as React from 'react';
import './BlogPostComponent.css';
import { Card, CardText, CardTitle } from 'react-mdl';
import {Post} from "../../../model/Post";

interface Props {
    post:Post;
}

export class BlogPostComponent extends React.Component<Props, {}> {
    private onClick = () => {
        window.open(this.props.post.url,'_blank');
    };

    public render() {
        const { post } = this.props;
        return (
            <Card className="blog-post-card depth" shadow={0} style={{ width:'90%'}} onClick={this.onClick}>
                <CardTitle>
                    {post.title}
                </CardTitle>
                <CardText>{post.summary}</CardText>
            </Card>
        )
    }
}