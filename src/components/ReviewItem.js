import React, { Component } from 'react';

class ReviewItem extends Component {
	render(){
		return(
			<div className={`carousel-item ${this.props.status}`}>
        <blockquote className="review-item">
          <div className="review-item-content">
            <p>{this.props.content}</p>
          </div>
          <div className="review-item-footer">
          	<p>{`- ${this.props.company}, ${this.props.name}`}</p>	
          </div>
        </blockquote>
      </div>
		)
	}
}

export default ReviewItem;