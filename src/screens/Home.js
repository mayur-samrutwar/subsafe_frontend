import React from 'react';
import Navbar from '../comps/Navbar'
import Hero  from '../comps/Hero';
import Footer from '../comps/Footer'
export default function Home(){
  return (
    <div class="relative w-full h-full">
        <Navbar />
        <Hero />
        <Footer />
    </div>
  );
};