import React, { Component } from 'react';
import ReviewItem from '../components/ReviewItem';

class ReviewSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: "carouselReview",
      items: [
        {
          "content": "Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.",
          "name": "Herman Melville",
          "company": "Moby-Dick"
        },
        {
          "content": "Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.",
          "name": "Herman Melville",
          "company": "Moby-Dick"
        },
        {
          "content": "Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.",
          "name": "Herman Melville",
          "company": "Moby-Dick"
        },
        {
          "content": "Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.",
          "name": "Herman Melville",
          "company": "Moby-Dick"
        },
        {
          "content": "Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.",
          "name": "Herman Melville",
          "company": "Moby-Dick"
        },
        {
          "content": "Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.",
          "name": "Herman Melville",
          "company": "Moby-Dick"
        }
      ]
    }
  }
  render() {
    return (
      <section className="review-section">
        <div className="container">
          <div id={this.state.id} className="carousel slide carousel-center" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              {
                this.state.items.map( (review, index) => {
                  let status = (index == 0) ? 'active' : '';
                  return <ReviewItem key={`ReviewItem-${index}`} status={status} content={review.content} name={review.name} company={review.company} />
                })
              }
            </div>
            <ol className="carousel-indicators review-carousel-indicators">
              {
                this.state.items.map( (review, index) => {
                  let status = (index == 0) ? 'active' : '';
                  return <li key={`ReviewIndicator-${index}`} data-target={`#${this.state.id}`} data-slide-to={index} className={status}></li>;
                } )
              }
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default ReviewSection;
