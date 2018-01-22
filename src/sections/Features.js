import React, { Component } from 'react';
import FeaturesItem from '../components/FeaturesItem';

class Features extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          "icon": "star",
          "title": "Brilliant creative design",
          "content": "Ah, well! It means much the same thing, said the Duchess, digging her  sharp little chin into Alice's shoulder as she added, and the moral  of that is m-dash."
        },
        {
          "icon": "trophy",
          "title": "On mouse over title",
          "content": "Then they both bowed low, and their curls got entangled together. Alice laughed so much at this, that she had to run back into the wood for fear of their hearing her."
        },
        {
          "icon": "magic",
          "title": "Incredible documentation",
          "content": "Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman, 'and that for two reasons."
        },
        {
          "icon": "cloud-upload",
          "title": "Responsive &amp; retina ready",
          "content": "Alice went timidly up to the door, and knocked. 'There's no sort of use in knocking,' said the Footman, 'and that for two reasons. First, because I'm on the same side."
        }
      ]
    }
  }
  render() {
    return (
      <section className="features">
        <div className="container">
          <div className="text-center text-gray">
            <p className="title">Super features</p>
          </div>
          <div className="row features-content">
            {
              this.state.items.map( (item, index) => {
                return <FeaturesItem key={'FeaturesItem-' + index} icon={item.icon} title={item.title} content={item.content}/>
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
