import { HiMail, HiPhone } from 'react-icons/hi'

import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

import * as Styles from './styles'

export function Contact() {
  return(
    <Styles.Contact>
      <Styles.ContactLeftContainer>
        <span>
          <HiMail fontSize="20px"/>
          <p>marcus@gmail.com</p>
        </span>
        
        <span>
          <HiPhone fontSize="20px"/>
          <p>(98)98423-7549</p>
        </span>
      </Styles.ContactLeftContainer>

      <Styles.ContactRightContainer>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <AiFillYoutube />
      </Styles.ContactRightContainer>
    </Styles.Contact>
  )
}