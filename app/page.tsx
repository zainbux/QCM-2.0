import Image from 'next/image'

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import ImageCarousel from './components/ImgCarousel';
import Pricing from './components/Pricing';
import { Contact} from './components/Contact';
import Footer from './components/Footer';



import { getDetails, getImages } from "@/sanity/sanity-utils";

export default async function Home() {

  const details = await getDetails();
  const images = await getImages();

  console.log("images:", images);
  console.log("Details:", details);

  const basicPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Basic')

  const premiumPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Premium')

  const luxuryPrices = details
    .filter((detail: any) => detail.selectedPackage === 'Luxury')

  console.log("Basic Prices:", basicPrices);
  console.log("Premium Prices:", premiumPrices);
  console.log("Luxury Prices:", luxuryPrices);

  const carouselimg = images.map((imageData: { image: string }) => imageData.image);
  console.log(carouselimg);


const carouselImages = [
  '/wheel.png',
  '/seat.png',
  '/cup-holder.png',
  // Add more image URLs as needed
];

  return (
    <main>
      
        <section id="home" className='relative grow bg-primary bg-cover bg-center' style={{backgroundImage: "url('/herobg.jpg')"}} >
          <Nav/>
          <Hero />   
        </section>
     
        <section id="about">
          <About/>
        </section>

        <section id="photos" className='bg-primary'>
          <h1 className='text-6xl font-semibold text-center pt-16 p-6 text-blue-100'>Our Work</h1>
          <ImageCarousel images={carouselimg}/>
          <br className='text-white'></br>
        </section>

        <section id="pricing">
          <Pricing/>
        </section>

        <section id="contact">
          <h1 className='text-6xl font-semibold text-center p-6'>Booking</h1>
          <p className='p-5 text-2xl text-center md:text-3xl pb-5'>Please fill in both forms correctly to get your Quote as soon as possible</p>
          <Contact luxuryPrices={luxuryPrices} premiumPrices={premiumPrices} basicPrices={basicPrices} />
        </section>

        <section>
          <Footer/>
        </section>

    </main>
  )

}
