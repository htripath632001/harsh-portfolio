// Home.js
import React from 'react';
import NeuralNetwork from '../components/NeuralNetwork';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-red-600">Hi! - I'm Harsh Tripathi</h1>
          <p className="text-xl text-white-600">
            Welcome to my website !
          </p>
          <p className="text-lg text-white-600/70 mt-2">
            Scroll down and interact with my neural network below to know more about my work :) 
          </p>
        </div>
      </div>

      {/* Neural Network Section */}
      <div className="h-screen relative bg-black">
        <NeuralNetwork />
      </div>
    </div>
  );
};

export default Home;