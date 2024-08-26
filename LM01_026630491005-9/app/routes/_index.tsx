import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PetHomePage from './PetHomePage';

const Index = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow py-8 px-4 bg-gray-100">
      <PetHomePage/>
    </main>
    <Footer />
  </div>
);

export default Index;
