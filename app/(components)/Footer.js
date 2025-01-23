import React from 'react';
import SectionHeader from './SectionHeader';

function Footer() {
  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in"></SectionHeader>
      <h1 className="location" id="location-text" data-scroll>Rio de Janeiro</h1>
    </section>
  )
}

export default Footer
