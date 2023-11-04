import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import routes from '../constants/routes.json'

const Footer = () => {
  const location = useLocation()
  // console.log(location.pathname)
  return (
    <FooterWrapper>
      {location.pathname !== routes.PRODUCTS}
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
`

export default Footer
