import Image from 'next/image'

import { Header } from '../components/Header'
import { OpinionCard } from '../components/OpinionCard'

import phoneImg from '../../public/images/phone.svg'
import phoneStaticImg from '../../public/images/phone-static.svg'

import { FaGooglePlay, FaApple } from 'react-icons/fa'

import * as Styles from './home'

export default function Home() {
  return (
    <>
      <Header />
      <Styles.Main>

        <Styles.Section>
          <Styles.CardHome>
            <span />
            <Styles.CardMain>
              <h1>A GREAT APP MAKES YOUR LIFE BETTER</h1>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

              <h3>DOWNLOAD APP NOW</h3>

              <div>
                <button type="button">
                  <FaGooglePlay />
                  Google Play
                </button>
                <button type="button">
                  <FaApple />
                  Apple Story
                </button>
              </div>
            </Styles.CardMain>
          </Styles.CardHome>

          <Image src={phoneImg}/>
        </Styles.Section>
        
        <Styles.AboutContainer>
          <div className="titleContainer">
            <h1>ABOUT OUR APP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
          </div>
          <div className="opinionContainer">
            <Image src={phoneStaticImg}/>
            <div className="cardContainer">
              <OpinionCard />
              <OpinionCard />
              <OpinionCard />
            </div>
          </div>
        </Styles.AboutContainer>
      </Styles.Main>
    </>    
  )
}
