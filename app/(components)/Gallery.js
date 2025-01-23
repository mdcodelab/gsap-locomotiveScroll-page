"use client";
import React from 'react';
import { useState } from 'react';

function Gallery() {
  const images = [
    {src: "/images/image-4.jpg",
      title: "Flower-4",
      subtitle: "aaaaa",
      category: "Category 4"
    },

    {src: "/images/image-7.jpg",
      title: "Flower-7",
      subtitle: "ccccc",
      category: "Category 7"
    },

    {src: "/images/image-8.webp",
      title: "Flower-8",
      subtitle: "ddddd",
      category: "Category 8"
    },

    {src: "/images/image-9.webp",
      title: "Flower-9",
      category: "Category 9"
    },
  ]

  function GalleryItem ({src, title, subtitle, category, updateImage, index}) {
    return (
      <div className="gallery-item-wrapper">
        <div className="gallery-item">
          <div className="gallery-item-info">
            <h1 className="gallery-info-title">{title}</h1>
            <h6 className="gallery-info-subtitle">{subtitle}</h6>
            <p className="gallery-info-category">{category}</p>
          </div>
          <div className="gallery-item-image">
          <img src={src} alt={title}></img>
          </div>
        </div>
      </div>
    )
  }
const [activeImage, setActiveImage]=useState(1); //current index

  return (
    <section className="section wrapper gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter" style={{border: "4px solid black"}}>
        <span>{activeImage}</span>
        <span className="divider"></span>
        <span>{images.length}</span>
        </div>

          {images.map((image, index)=> {
            return <GalleryItem index={index} key={image.src} {...image}
            updateImage = {(index)=> setActiveImage(index+1)}></GalleryItem>
          })}
      </div>
    </section>
  )
}

export default Gallery
