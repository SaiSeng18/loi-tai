import React from 'react'
import Link from 'next/link';

const Burgermenu = ({handleToggle}) => {
  return (
	<div className="burger-menu">
		
		<li>
			
			<a onClick={handleToggle}>BACK</a>
			<ul>
				<li><Link href="/home/phase"><a onClick={handleToggle}>PHASE-01</a></Link></li>
				<li><Link href="/home/vss1"><a onClick={handleToggle}>LOI TAI X VLONE - VSS1</a></Link></li>
				<li><Link href="/home/mwm"><a onClick={handleToggle}>MEET WITH MAYA</a></Link></li>
			</ul>
		</li>

		<li>
			<a onClick={handleToggle}>SHOP</a>
			<ul>
				<li><Link href="/shop/"><a onClick={handleToggle}>ALL PRODUCT</a></Link></li>
				<li><Link href="/shop/"><a onClick={handleToggle}>IN STOCK</a></Link></li>
				<li><Link href="/shop/"><a>LATEST</a></Link></li>
			</ul>
		</li>

		<li>
			<a onClick={handleToggle}>FOCUS</a>
			<ul>
				<li><Link href="/focus/archive"><a onClick={handleToggle}>ARCHIVE</a></Link></li>
				<li><Link href="/focus/lookbook"><a onClick={handleToggle}>LOOKBOOK</a></Link></li>
			</ul>
		</li>

		<li>
			<a onClick={handleToggle}>EXTRA</a>
			<ul>
				<li><Link href="/extra/subscribe"><a onClick={handleToggle}>SUBSCRIBE</a></Link></li>
				<li><Link href="/extra/stockist"><a onClick={handleToggle}>STOCKIST</a></Link></li>
				<li><Link href="/extra/terms"><a onClick={handleToggle}>TERMS</a></Link></li>
			</ul>
		</li>
		<Link href="/"><div onClick={handleToggle} className="home-page">HOME PAGE</div></Link>
		
	</div>
  )
}

export default Burgermenu;