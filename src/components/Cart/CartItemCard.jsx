import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Button from '../elements/Button'
import { addToCart, removeFromCart } from '../../state/actions'

const CardItemCard = ({ id, title, price, image, quantity,stock }) => {
  const cartItem = { id, title, price, image, quantity,stock }
  const product = { id, title, price, image,stock}
  const dispatch = useDispatch()

  const formatTitle = (title) => {
    return title.length <= 14 ? title : title.substr(0, 14) + '...'
  }

  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2)
  }
  const cekStock = ()=> {
    let stock =  cartItem.stock - cartItem.quantity;
    if(stock <= 0){
      return stock = 'Habis'
    }
    return stock
  }
  return (
    <CartItemCardWrapper>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Details>
        <Title>{formatTitle(title)}</Title>
        <div>${sumPrice()}</div>
        <AmountChanger>
          <Button
            onClick={() => dispatch(removeFromCart(product))}
            content={<FaMinus />}
            color="grey"
            animation="color"
          ></Button>

          <div>{cartItem.quantity > cartItem.stock ? "memenuhi stock" : cartItem.quantity}</div>
          <Button
            onClick={() => cartItem.quantity >= cartItem.stock ? null : dispatch(addToCart(product))}
            content={<FaPlus />}
            color="grey"
            animation="color"
          ></Button>
          <p style={cartItem.quantity >= cartItem.stock ? {color: 'red'}: null}>{"stock : "+cekStock()}</p>
        </AmountChanger>
      </Details>
    </CartItemCardWrapper>
  )
}

CardItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

const CartItemCardWrapper = styled.div`
  display: flex;
`

const ImageContainer = styled.div`
  height: 13rem;
  width: 20%;
  margin: auto;
`

const Image = styled.img`
  width: auto;
  height: 100%;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`

const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  overflow: hidden;
`

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export default CardItemCard
