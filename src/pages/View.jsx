import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'

function View() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  //get product id from url
  const { id } = useParams()
  console.log(id);
  //state for storing product to be view
  const [product, setProduct] = useState({})
  console.log(product);

  useEffect(() => {
    if (sessionStorage.getItem("products")) {
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])


  const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      alert("Product already added in wishlist!!!")
    }else{
      //add product to wishlist in redux store -dispatch action
      dispatch(addToWishlist(product))
    }

  }

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img src={product?.thumbnail} />
            <div className="d-flex justify-content-between my-2 mx-3">
              <button onClick={handleWishlist} className=" btn btn-secondary">ADD TO WISHLIST</button>
              <button className="btn btn-success">ADD TO CART</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className='fw-bold'>{product?.title}</h1>
            <h4 className='text-danger'>$ {product?.price}</h4>
            <h5>Brand:{product?.brand}</h5>
            <h5>Category:{product?.category}</h5>
            <h5><span className='fw-bold'>Description:{product?.description}</span></h5>

            <h5 className="my-3">Client Reviews</h5>
            {/* duplicate reviews */}
            {
              product?.reviews?.length > 0 ?
                product?.reviews?.map((item, index) => (
                  <div key={index} className="border rounded p-3 shadow">
                    <p><span className="fw-bolder">{item?.reviewerName}:</span>{item?.comment}</p>
                    <p>Rating: {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
                  </div>
                ))

                :
                <div>No Client reviews are available</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default View