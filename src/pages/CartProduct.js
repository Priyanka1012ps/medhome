import React from 'react'
import {Container,Row,Col} from "reactstrap"
import Button from '@material-ui/core/Button';
import "./CartProduct.css"
import {useStateValue} from "../StateProvider"

function CartProduct({image,price,id,name,subtitle}) 

{
  console.log(name)
  const [{basket},dispatch]=useStateValue()

  const remove=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }
  return (
    
      <Container fluid>
      <div className="back ">
        <Row>
          <Col md={2}>
            <img src={image} className="cartpro__image" />
          </Col>
          <Col md={5}>
            <h6 className="mt-2">{name}</h6>
            <p>{subtitle}</p>
            <p><span className="bd">Price</span>{price}</p>
            <Button color="secondary" variant="contained" onClick={remove}>Remove from cart</Button>

          </Col>
        </Row>
      </div>
      </Container>
      

  )
}

export default CartProduct
