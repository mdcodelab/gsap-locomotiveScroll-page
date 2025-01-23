"use client";
import React from 'react'

function SectionHeader({title}) {
  return (
    <div className="section-header" data-scroll-section>
      {title}
    </div>
  )
}

export default SectionHeader
