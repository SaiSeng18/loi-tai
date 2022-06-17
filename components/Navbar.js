import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '../src/img';
import Burgermenu from '../components/Burgermenu.js'

const Navbar = () => {
	const [toggle, setToggle] = useState(true);

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<nav className="navbar">
			<Link href="/"><a><img src="" alt="logo" /></a></Link>
			<div className="menu">
				<li>
					<Link href="/"><a>HOME</a></Link>
					<ul>
						<li><Link href="/home/phase"><a>PHASE-01</a></Link></li>
						<li><Link href="/home/vss1"><a>LOI TAI X VLONE - VSS1</a></Link></li>
						<li><Link href="/home/mwm"><a>MEET WITH MAYA</a></Link></li>
					</ul>
				</li>

				<li>
					<Link href=""><a>SHOP</a></Link>
					<ul>
						<li><Link href="/shop/"><a>ALL PRODUCT</a></Link></li>
						<li><Link href="/shop/"><a>IN STOCK</a></Link></li>
						<li><Link href="/shop/"><a>LATEST</a></Link></li>
					</ul>
				</li>

				<li>
					<Link href=""><a>FOCUS</a></Link>
					<ul>
						<li><Link href="/focus/archive"><a>ARCHIVE</a></Link></li>
						<li><Link href="/focus/lookbook"><a>LOOKBOOK</a></Link></li>
					</ul>
				</li>

				<li>
					<Link href=""><a>EXTRA</a></Link>
					<ul>
						<li><Link href="/extra/subscribe"><a>SUBSCRIBE</a></Link></li>
						<li><Link href="/extra/stockist"><a>STOCKIST</a></Link></li>
						<li><Link href="/extra/terms"><a>TERMS</a></Link></li>
					</ul>
				</li>
			</div>

			<div className="shop">
				<div className="cart">cart</div>
				{toggle ? <div className="menu-icon" onClick={handleToggle}>click</div> : <Burgermenu handleToggle={handleToggle} />}
			</div>
		</nav>
	)
}

export default Navbar