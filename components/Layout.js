import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
	<div>
		<Navbar/>
		<div className="divider"></div>
			{children}
		<Footer/>
	</div>
  )
}

export default Layout