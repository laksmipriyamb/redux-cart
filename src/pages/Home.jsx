import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'


function Home() {
  const dispatch = useDispatch()
  const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  return (
    <>
      <Header />
      <div className='container py-5'>
        {
          loading?
          <div className='d-flex justify-content-center align-items-center my-5'><img  width="200px" src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkf5jym2t51hf098ppgs.gif" alt="Loading" /> <h1>Loading...</h1></div>
          :
          
          <div className="row my-5">
          {/* duplicte */}
          {
            allProducts?.length>0?
            allProducts?.map(product=>(

            
            <div key={product?.id} className="col-md-3 mb-2">
            {/* card -react bootsrap*/}
            <Card>
              <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{product?.title}</Card.Title>
                <Link to={`/products/${product?.id}/view`} className='btn btn-secondary'>View More...</Link>
              </Card.Body>
            </Card>
          </div>
          ))
        :
        <p className='fs-5 fw-bold mt-5'>Product Not Found!!!</p>
        }
        </div>}
      </div>
    </>
  )
}

export default Home