import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


function WishList() {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  

  const handleCart = (product)=>{
      const existingProduct = userCart?.find(item=>item.id==product.id)
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      Swal.fire({
          title: 'Completed!',
          text: existingProduct?`Quantity of ${product.title}, is updated successfully`: 'Product added to your cart successfully!!!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
  
    }
  return (
    <>
      <Header />
      <div className='container py-5'>
        {/* wishlist with content */}
        {
          userWishlist?.length > 0 ?
            <div className="row my-5">
              {
                userWishlist?.map(product => (
                  <div className="col-md-3 mb-2">
                    {/* card -react bootsrap*/}
                    <Card>
                      <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title}</Card.Title>
                        <div className="d-flex justify-content-evenly my-1">
                          <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark} /> </button>
                          <button onClick={()=>handleCart(product)} className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus} /> </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              }
            </div>
            :
            <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '80vh' }}>
              <img className='w-25' src="https://al7rm.com/_nuxt/no-products.SwWlB0Bl.gif" alt="empty" />
              <h3>Wishlist is Empty!</h3>
              <Link to={'/'} className='btn btn-secondary'>Add More</Link>
            </div>
        }
      </div>
    </>
  )
}

export default WishList