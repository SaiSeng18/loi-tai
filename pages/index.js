import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { images } from '../src/img';
import Link from 'next/link';

export default function Home() {
  const card = [
    {header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis fugiat. Ipsum recusandae expedita impedit nisi hic quasi consectetur vitae, inventore debitis ipsam consequuntur, at quia laudantium. Soluta, deserunt vero!", image_1: images.img1 , image_2: images.img3},
    {header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis fugiat. Ipsum recusandae expedita impedit nisi hic quasi consectetur vitae, inventore debitis ipsam consequuntur, at quia laudantium. Soluta, deserunt vero!", image_1: images.img2 , image_2: images.img4},
    {header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis fugiat. Ipsum recusandae expedita impedit nisi hic quasi consectetur vitae, inventore debitis ipsam consequuntur, at quia laudantium. Soluta, deserunt vero!", image_1: images.img3 , image_2: images.img1},
    {header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, corporis fugiat. Ipsum recusandae expedita impedit nisi hic quasi consectetur vitae, inventore debitis ipsam consequuntur, at quia laudantium. Soluta, deserunt vero!", image_1: images.img4 , image_2: images.img2},
  ]

  return (
    <div className="body">
        <div className="main-vid"></div>

        {card.map((card) => (
          <div className="card" key={card.header}>
            <div className="content-container">
              <p className="content">{card.header}</p>
              <Link href="/shop"><a>Visit Link</a></Link>
              
            </div>
            
            <div className="img-container">
              <div className="image-1">
                <Image src={card.image_1} alt="image" layout='fill' objectFit="cover" />
              </div>
              <div className="image-2">
                <Image src={card.image_2} alt="image" layout='fill' objectFit="cover" />
              </div>
            </div>
            
          </div>
        ))}
    </div>
  )
}
