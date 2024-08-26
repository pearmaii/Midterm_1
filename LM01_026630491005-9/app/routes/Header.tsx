import React from 'react';

const Header = () => (
  <header className="bg-purple-600 text-white py-4 shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold">PetCare</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">Home</a>
          </li>
          <li>
            <a href="/MyPetForm" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">Pets</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
