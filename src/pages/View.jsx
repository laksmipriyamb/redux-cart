import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUcIETG-GGcK-kqCp4ooz_vLYiPJ70Hs3A&s" alt="product" className="img-fluid" />
          <div className="d-flex justify-content-between my-2 mx-3">
            <button className=" btn btn-secondary">ADD TO WISHLIST</button>
            <button className="btn btn-success">ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className='fw-bold'>Title</h1>
          <h4 className='text-danger'>$ price</h4>
          <h5>Brand:</h5>
          <h5>Category:</h5>
          <h5><span className='fw-bold'>Description:</span></h5>

          <h5 className="my-3">Client Reviews</h5>
          {/* duplicate reviews */}
          <div className="border rounded p-3 shadow">
            <p><span className="fw-bolder">username:</span>message</p>
            <p>Rating: number <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View