import React from 'react'

function Featured() {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout" data-scroll>
        <h6>White Lily</h6>
        <img src="/images/image-2.jpg" alt="white lily"></img>
      </div>
      <div className="featured-column-layout">
        <h6>Red Lily</h6>
        <img src="images/image-4.jpg" alt="red-lily"></img>
      </div>
    </section>
  )
}

export default Featured
