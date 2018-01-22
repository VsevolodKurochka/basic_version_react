import React, { Component } from 'react';

class TeamMember extends Component {
	render(){
		return(
			<div className="team-item col-xs-12 col-sm-6 col-md-3">
				<div className="team-item-inner">
					<div className="team-item-header">
						<img src={this.props.image} alt="" className="team-item-image" />
					</div>
					<div className="team-item-body">
						<div className="team-item-info">
							<p className="team-item-info-title">{this.props.name}</p>
							<p className="team-item-info-subtitle">{this.props.info}</p>
						</div>
						<div className="team-item-body-content">
							<p>{this.props.content}</p>
						</div>
					</div>
					<div className="team-item-footer">
						<a href={this.props.link} className="btn button team-item-btn btn-lg text-uppercase" role="button">Profile</a>
					</div>
				</div>
			</div>
		)
	}
}

export default TeamMember;