import { react } from "react";
import Video from "../Data/Video";
import Details from "../Data/Details";
import FeatureProducts from "../Data/FeatureProducts";
import Data from "../Productss/Data";
import Products from "../Productss/Products";
import Testimonials from "../Data/Testimonials";


const Home = () => {
    return <div>
      <Video/>
      <Details/>
      <FeatureProducts/>
      <div className='App' style={{position:'relative', bottom:'250px'}}>
          {Data.map(item => (
            <Products
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              button={item.id}
            />
          ))}
      </div>
      <br/>
      <hr style={{position:'relative', bottom:'200px', width:'850px'}}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='App' style={{position:'relative', bottom:'250px'}}>
          {Data.map(item => (
            <Products
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              button={item.id}
            />
          ))}
      </div>
      <button className="b1">Browse More</button>
      <hr style={{position:'relative', bottom:'200px', width:'850px'}}/>
      <Testimonials/>
    </div>
  };
  
  export default Home;