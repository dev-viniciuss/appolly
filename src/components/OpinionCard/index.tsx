import * as Styles from './styles'

import { HiCheckCircle } from 'react-icons/hi'

export function OpinionCard() {
  return(
    <Styles.Container>
     <HiCheckCircle fontSize='2rem' color="#5956E9" />
     <div>
       <h2>Creative Design</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
     </div>
    </Styles.Container>
  )
}