import React from 'react';
import HornedBeast from './hornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <div>
       
        < HornedBeast 
        title = {'Bharal'} 
        image = {'http://modernfarmer.com/wp-content/uploads/2014/08/bharal.jpg'} 
        description ={ "According to reputable sources, the bharal is also known as the Himalayan blue sheep due to a bluish tint to its fur. In the interest of journalism, we spent quite awhile looking at pictures of bharals online and are sad to say that this sheep is not really colored blue. But! It does have very good horns. Sheep horns tend to be wider and smoother than narrow, knobbly goat horns, and the bharal is in possession of some excellently wide and smooth horns."} />
          
          < HornedBeast 
        title = {'Addax'} 
        image = {'http://modernfarmer.com/wp-content/uploads/2014/08/addax.jpg'} 
        description ={ "The addax is also known as the screwhorn antelope, which is a perfect name. It’s an antelope, you see, and it has horns, and the horns have swirling teeth like a screw. Good work, whoever named this animal. “Addax” is a cool name too, though. It’s basically extinct from its native Sahara, but weirdly survives well in captivity, so it’s a common sight in zoos."} />
      </div>
    )
  }
}

export default Main;