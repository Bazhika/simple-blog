import React, {Component} from "react";
import {dumpLogs} from "./Utils";

import classes from './BlogCard.module.css';

class BlogCard extends Component {

    state = {
        LikeCount: 0
    };

    updateCount = () => {
        this.setState((prevState, prevProps) => {
            return {likeCount: prevState.LikeCount++}
        });
    };

    render() {
        dumpLogs(this.props);
        return (
            <div className={classes.NewBlogCard}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
                <p>Like Count: <span className={classes.LikeCount}>{this.state.LikeCount}</span></p>
                <button onClick={this.updateCount}>Like</button>
            </div>
        )
    }
}

export default BlogCard;