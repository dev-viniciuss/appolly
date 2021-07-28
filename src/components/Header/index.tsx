import { Contact } from './Contact'
import { Navbar } from './Navbar'

import * as Styles from './styles'

export function Header() {
  return(
    <Styles.Container>
      <Contact />
      <Navbar />
    </Styles.Container>
  )
}