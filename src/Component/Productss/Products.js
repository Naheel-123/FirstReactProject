import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

export default function Products(item) {
    return(
        <div className='productList'>
            <div key={item.id} className='productCard'>
                <img src={item.image} alt='product-img' className='productImage'></img>
                <FaShoppingCart className={"productcard__cart"} />
                <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} />

                <div className='productCard__content'>
                    <h3 className='productName'>{item.title}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${item.price}</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                            {[...Array(item.rating)].map((index) => {
                                <FaStar id={index +1 } key={index} />
                            })}
                        </div>
                        <button className='productButton'>{item.id} Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}