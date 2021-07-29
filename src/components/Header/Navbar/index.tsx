import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../../../public/logo.svg'

import * as Styles from './styles'

export function Navbar() {
  return(
    <Styles.Container>
      <Link href="/">
        <Image src={logoImg} alt="Logo Appolly"/>
      </Link>

      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/features"><a>Features</a></Link>
        <Link href="/screenshot"><a>Screenshot</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
      </nav>

      <button>Download</button>
    </Styles.Container>
  )
}