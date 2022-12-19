import { ReactNode } from 'react'
import { FooterContainer, FooterDetails } from './styles'


interface Props {
  children: ReactNode
}

export function Footer(props: Props) {
  return (
    <FooterContainer>
      <FooterDetails>
        {props.children}
      </FooterDetails>
    </FooterContainer>
  )
}
