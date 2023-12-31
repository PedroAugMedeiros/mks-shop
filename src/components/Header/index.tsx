import React from 'react'
import * as S from './index.styles'
import Logo from './Logo';
import CartButton from './CartButton';

export default function Header() {
  return (
    <S.Header>
    <Logo />
    <CartButton />
    </S.Header>
  )
}
