import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'
import Header from '../components/Header'

function WishList() {
  return (
    <>
      <Header />
      <div className='container py-5'>
        {/* wishlist with content */}
        <div className="row my-5">
          <div className="col-md-3 mb-2">
            {/* card -react bootsrap*/}
            <Card>
              <Card.Img height={'250px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUcIETG-GGcK-kqCp4ooz_vLYiPJ70Hs3A&s" />
              <Card.Body className='text-center'>
                <Card.Title>Title</Card.Title>
                <div className="d-flex justify-content-evenly my-1">
                  <button className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark}/> </button>
                  <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus}/> </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default WishList