import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decrementCartItem, emptyCart, incrementCartItem, removeCartItem } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'



function Cart() {
  const userCart = useSelector(state=>state.cartReducer)
  const [sum,setSum] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  useEffect(()=>{
    setSum(userCart?.reduce((acc,cur)=>acc+cur.totalPrice,0))
  },[userCart])

  const handleDecrementCart = (product)=>{
    if(product.quantity>1){
      //decrement
      dispatch(decrementCartItem(product))
    }else{
      //remove
      dispatch(removeCartItem(product.id))
    }
  }

  const checkout = ()=>{
    dispatch(emptyCart())
    navigate('/')
    Swal.fire({
      title:"Order Placed Successfully...",
      text:"Thankyou for purchasing with us!!!",
      icon:'Success',
      confirmButtonText:'Ok'
    })
  }

  return (
    <>
    <Header/>
    <div className="container py-5">
      {
        userCart?.length>0?
        <div className="my-5">
        <h1 className='text-danger fw-bold'>Cart Summary</h1>
        <div className="row mt-3">
          <div className="col-md-8 border rounded p-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userCart?.map((product,index)=>(
                      <tr>
                    <td>{index+1}</td>
                    <td>{product?.title}</td>
                    <td><img width={'50px'} height={'50px'} src={product?.thumbnail} alt="product" /></td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=>handleDecrementCart(product)} className='btn fs-3 fw-bold' style={{color:'grey'}}>-</button>
                        <input style={{width:'50px'}} value={product?.quantity} type="text" className='form-control' />
                        <button onClick={()=>dispatch(incrementCartItem(product))} className='btn fs-4 fw-bold' style={{color:'grey'}}>+</button>
                      </div>
                    </td>
                    <td>$ {product?.totalPrice}</td>
                    <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className="btn text-danger"><FontAwesomeIcon icon={faTrash}/></button></td>
                  </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="float-end mt-3">
                <button onClick = {()=>dispatch(emptyCart())} className="btn btn-danger me-2">EMPTY CART</button>
                <Link to={'/'} className='btn btn-primary'>SHOP MORE</Link>
              </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-5">
              <h4 className="fw-bold">Total Amount : <span className='text-danger'>$ {sum}</span></h4>
              <hr />
              <div className="d-grid mt-2">
                <button onClick={checkout} className="btn btn-success">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '80vh' }}>
              <img className='w-25' src="https://al7rm.com/_nuxt/no-products.SwWlB0Bl.gif" alt="empty" />
              <h3>Cart is Empty!</h3>
              <Link to={'/'} className='btn btn-secondary'>Add More</Link>
            </div>
      }
    </div>
    </>
  )
}

export default Cart