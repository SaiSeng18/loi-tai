import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import images from '../src/img/images'

const Footer = () => {
  return (
	  <div className="footer">
      <div className="footer-logo"><Image src={images.logomark} alt="image" layout='fill' objectFit="cover" className="logomark"/></div>
      <div className="divider"></div>
      <div className="footer-content">
        <div className="size-guide">
          <Link href="/sizeguide"><a>SIZE GUIDE</a></Link>
          <Link href="/contact"><a>CONTACT</a></Link>
        </div>
        <div className="social-media">
          <Link href="/"><a>INSTAGRAM</a></Link>
          <Link href="/"><a>FACEBOOK</a></Link>
          <Link href="/"><a>MESSENGER</a></Link>
        </div>
      </div>
      <div className="copyrights"></div>
    </div>
  )
}

export default Footer