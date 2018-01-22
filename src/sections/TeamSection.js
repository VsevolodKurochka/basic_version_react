import React, { Component } from 'react';
import TeamMember from '../components/TeamMember';

class TeamSection extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: 'Our Team',
			team: [
				{
					'image': 'img/photo-4.jpeg',
					'name': 'Manny Delgad1',
					'info': 'a little boy',
					'content': 'Be who you are and say what you feel, because those who mind don\'t matter.',
					'link': '#'
				},
				{
					'image': 'img/photo-4.jpeg',
					'name': 'Manny Delgado',
					'info': 'a little boy',
					'content': 'Be who you are and say what you feel, because those who mind don\'t matter.',
					'link': '#'
				},
				{
					'image': 'img/photo-4.jpeg',
					'name': 'Manny Delgado',
					'info': 'a little boy',
					'content': 'Be who you are and say what you feel, because those who mind don\'t matter.',
					'link': '#'
				},
				{
					'image': 'img/photo-4.jpeg',
					'name': 'Manny Delgado',
					'info': 'a little boy',
					'content': 'Be who you are and say what you feel, because those who mind don\'t matter.',
					'link': '#'
				}
			]
		}
	}
	render() {
		return (
			<section className="team-section">
				<div className="container">
					<div className="text-center">
						<p className="title">{this.state.title}</p>
					</div>
					<div className="row">
						{
							this.state.team.map( (member, index) => {
								return <TeamMember key={'team-member-' + index} image={member.image} name={member.name} info={member.info} content={member.content} link={member.link} />
							})
						}
					</div>
				</div>
			</section>
		);
	}
}

export default TeamSection;
