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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
        <Link href="/screenshot">Screenshot</Link>
        <Link href="/blog">Blog</Link>
      </nav>

      <button>Download</button>
    </Styles.Container>
  )
}