import React, { useState } from 'react';

export default function Hero() {
  return (
    <div className="bg-gray">
      <header className="absolute inset-x-0 top-0 z-50"></header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* ... gradient background ... */}
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Fixed Deposit Interest Calculator
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Easily calculate the interest you'll earn on your fixed deposit. Whether you're saving for a short term or a
            long term goal, our calculator will provide you with accurate results.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        {/* ... gradient background ... */}
      </div>
    </div>
  );
}
