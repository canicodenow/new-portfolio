import React from 'react';

export default function Footer() {
  return (
    <footer className="container mx-auto px-6 md:px-8 lg:px-28 pt-8">
      <p className="text-center">
        &copy; PoorTrader {new Date().getFullYear()}
      </p>
    </footer>
  );
}
