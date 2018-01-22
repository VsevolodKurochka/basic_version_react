import React, { Component } from 'react';

class Advertising extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Creating a unique look.',
      description: 'That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our trials and triumphs became at once unique and universal.',
      buttonText: 'purchase now'
    }
  }
  render() {
    return (
      <section className="advertising">
        <div className="container">
          <p className="text-center title title-gray">{this.state.title}</p>
          <p className="text-center text text-gray">{this.state.description}</p>
          <div className="text-center header-inner-button">
            <a href="#" className=" btn button button-primary btn-lg active text-uppercase" role="button" aria-pressed="true">{this.state.buttonText}</a>
          </div>
        </div>
     </section>
    );
  }
}

export default Advertising;
