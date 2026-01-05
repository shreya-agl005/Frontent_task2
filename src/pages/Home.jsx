// import React from 'react'
import React, { useState, useEffect } from "react";

// import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

// const Home = () => {
//   return (
//     <div>
//       {/* <Header /> */}
//       <Hero />
//       <Footer />
//     </div>
//   );
// };


//Carousel UI 
const slides = [
  {
    title: "10-minute delivery",
    text: "From your local stores",
  },
  {
    title: "Fresh groceries",
    text: "Delivered super fast",
  },
  {
    title: "Best prices",
    text: "No hidden charges",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup (IMPORTANT)
  }, []);

  return (
    <div className="home">
      {/* Carousel */}
      <section className="carousel">
        <div className="carousel-item">
          <h2>{slides[activeIndex].title}</h2>
          <p>{slides[activeIndex].text}</p>
        </div>
      </section>

      <Hero />
      <Footer />
    </div>
  );
};

export default Home;