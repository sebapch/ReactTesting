/* eslint-disable no-restricted-globals */
/* eslint-disable react/require-render-return */

import React, {Component} from 'react';

class CommentBox extends Component {
    state = { comment: ''};

    handleChange = () => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        //TODO: call action creator
        
        this.setState({comment: ''});
    } 

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add Comment</h4>
                <textarea onChange={this.handleChange}value={this.state.comment} />
                <div>
                    <button>Submit comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;
