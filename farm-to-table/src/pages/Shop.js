//imports of the images of the slideshow 
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import ImageSlider from './ImageSlider';
import './Shop.css';

//imports of the images of the products
import chicken from '../assets/chicken.png';
import egg from '../assets/egg.png';
import turkey from '../assets/turkey.png';
import quailEgg from '../assets/quail-egg.png';
import rice from '../assets/rice.png';
import corn from '../assets/corn.png'
import onion from '../assets/onion.png';
import garlic from '../assets/garlic.png';
import potato from '../assets/potato.png';
import tomato from '../assets/tomato.png';
import eggplant from '../assets/eggplant.png'
import cabbage from '../assets/cabbage.png';


const products = [
  { product_name: 'rice', type: 1, price: 50, product_id: 1, imgUrl: rice },
  { product_name: 'corn', type: 1, price: 80, product_id: 2, imgUrl: corn },
  { product_name: 'onion', type: 1, price: 120, product_id: 3, imgUrl: onion },
  { product_name: 'garlic', type: 1, price: 100, product_id: 4, imgUrl: garlic},
  { product_name: 'potato', type: 1, price: 150, product_id: 5, imgUrl: potato },
  { product_name: 'tomato', type: 1, price: 60, product_id: 6, imgUrl: tomato },
  { product_name: 'eggplant', type: 1, price: 50, product_id: 8, imgUrl: eggplant },
  { product_name: 'chicken', type: 2, price: 200 , product_id: 9, imgUrl: chicken},
  { product_name: 'turkey', type: 2, price: 280, product_id: 10, imgUrl: turkey},
  { product_name: 'egg', type: 2, price: 5, product_id: 11, imgUrl: egg },
  { product_name: 'quail egg', type:2, price: 2, product_id: 12, imgUrl: quailEgg },
  { product_name: 'cabbage', type:1, price: 200, product_id: 7, imgUrl: cabbage },
];

export default function Shop() {
  const slides = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 }
  ];

  const containerStyles = {
    width: "100%",
    height: "35vh",
    margin: "0 auto",
  };

  return (
    <>
      <div style={containerStyles}> {/*creates a slideshow of the image*/}
        <ImageSlider slides={slides} />
      </div>
      <li className="products">

        {
        products.map((product) => {
           return <div key = {product.product_id} className="items"> {/*created the card of products containing its details */}
           <div className='image-container'>
           <img className = "item-image"src={product.imgUrl} alt={product.product_name} /> {/*to display the image of the product */}
           </div>
            <div className="item-details">
              <div>{product.product_name}</div>
              <h4 className='item-price'> P{product.price}</h4> {/*to show the price of the item/product */}  
              <button className= 'item-button'>Add to Cart</button> {/*created the button to add to cart and  calls for the addToCart function when clicked */}
            </div>               
          </div>   
        }

        )}
      </li>
    </>
  );
}
