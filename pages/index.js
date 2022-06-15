import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { images } from '../src/img'

export default function Home() {
  const card = [
    {header: "something", image: images.img1},
    {header: "hello", image: images.img2},
    {header: "world", image: images.img3},
    {header: "eg", image: images.img4},
  ]

  return (
    <div className="body">
        {card.map((card) => (
          <div className="card" key={card.header}>
            <p>{card.header}</p>
            <div className="img-container">
              <Image src={card.image} alt="image" layout='fill' objectFit="cover" />
            </div>
          </div>
        ))}
    </div>
  )
}
