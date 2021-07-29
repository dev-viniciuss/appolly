import Image from 'next/image'

import { Header } from '../components/Header'

import phoneImg from '../../public/images/phone.svg'

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

      </Styles.Main>
    </>    
  )
}
