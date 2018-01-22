import React, { Component } from 'react';

class FeaturesItem extends Component {
	render(){
		return(
			<div className="col-12 col-sm-12 col-md-6 features-item-column">
			  <div className="features-item">
			    <div className="features-item-icon">
			      <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>
			    </div>
			    <p className="features-item-title">{this.props.title}</p>
			    <div className="features-item-content">
			      <p>{this.props.content}</p>
			    </div>
			  </div>
			</div>
		)
	}
}

export default FeaturesItem;