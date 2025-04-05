import React, { useEffect, useState } from 'react';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.webp";

const Home = () => {
  const [products,setProducts] =useState ([]);
  const [cards,setCards] =useState (JSON.parse(localStorage.getItem("cartdata")))

  function handleevent(item){
    console.log(item);
    // Add item to cart
    // Update local storage or API
    setCards(item,...cards)
    alert("you added product successfully")
  }
useEffect(()=>{
  localStorage.setItem("cartdata",JSON.stringify(cards))
})
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((res)=>{
      console.log(res);
      setProducts(res);
    },)
    .catch((err)=>{
      console.error(err);
    })
  },[]);
  useEffect(() => {
    let currentSlide = 0;
    const images = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    // Show the first image initially
    images[currentSlide].classList.remove('hidden');
    indicators[currentSlide].classList.add('bg-blue-500');

    // Function to update the carousel
    const updateCarousel = (index) => {
      // Hide all images
      images.forEach((image) => image.classList.add('hidden'));
      indicators.forEach((indicator) => indicator.classList.remove('bg-blue-500'));

      // Show the current image
      images[index].classList.remove('hidden');
      indicators[index].classList.add('bg-blue-500');
    };

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % images.length; // Cycle through the slides
      updateCarousel(currentSlide);
    });

    // Event listener for the prev button
    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + images.length) % images.length; // Cycle through the slides
      updateCarousel(currentSlide);
    });

    // Event listeners for the indicator buttons
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel(currentSlide);
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      nextButton.removeEventListener('click', () => {});
      prevButton.removeEventListener('click', () => {});
      indicators.forEach((indicator) => {
        indicator.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className=" h-full">
    <section className='home h-[800px] bg-gray-400'>
      <h1 className='font-bold text-[60px]'>premium outfits</h1>
    <div id="default-carousel" className="relative w-full  ">
      {/* Carousel wrapper */}
      <div className="relative h-58 overflow-hidden rounded-lg md:h-150">
        {/* Item 1 */}
        <div className="carousel-item hidden duration-700 ease-in-out">
          <img
            src={image1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2  object-fit-cover "
            alt="Image 1"
          />
        </div>
        {/* Item 2 */}
        <div className="carousel-item hidden duration-700 ease-in-out">
          <img
            src={image2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-fit-fill"
            alt="Image 2"
          />
        </div>
        {/* Item 3 */}
        <div className="carousel-item hidden duration-700 ease-in-out">
          <img
            src={image3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-fit-fill"
            alt="Image 3"
          />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="carousel-indicator w-3 h-3 rounded-full bg-gray-500"
          aria-label="Slide 1"
        />
        <button
          type="button"
          className="carousel-indicator w-3 h-3 rounded-full bg-gray-500"
          aria-label="Slide 2"
        />
        <button
          type="button"
          className="carousel-indicator w-3 h-3 rounded-full bg-gray-500"
          aria-label="Slide 3"
        />
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="carousel-prev absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="carousel-next absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    
    </section>
    <section className='sec2 bg-gray-400 mt-[-50px]'>
    <h1 className='font-bold text-[60px]'>PRODUCTS</h1>
      <div className='main flex-column justify-items-center item-center  p-5'>
        <div className='grid grid-cols-3 gap-10 p-5'>
          {products 
          && products.map((item)=>{
            return(
              <div key={item.id} className='border-2 card bg-white h-[330px] hover:border-blue-50 w-130'>
                <h2 className='font-bold text-[28px]'>{item.title.slice(0,21)}...</h2>
                <div className=''><img className='h-[180px] w-[100%]  object-contain ' src={item.image} alt={item.title}  /></div>
                <p className='font-bold text-[24px]'>${item.price}</p>
                <a href="" className='bg-blue-400 btn text-[20px]' onClick={()=>{handleevent(item)}}>ADD TO CART <i className="fa-solid fa-cart-shopping"></i></a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
