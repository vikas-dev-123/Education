import React from 'react';

const CategoryCard = ({ href, imgSrc, imgAlt, text }) => (
  <div className='w-[10vw] h-[12vw] rounded-md border border-transparent hover:border-2 hover:border-blue-300 bg-white overflow-hidden'>
    <a href={href} className='flex flex-col items-center p-5 text-center'>
      <img
        alt={imgAlt}
        loading="lazy"
        width="64"
        height="64"
        decoding="async"
        className="w-16 h-16 object-contain"
        src={imgSrc}
      />
      <p className='mt-2 text-black'>{text}</p>
    </a>
  </div>
);

const Section1 = () => {
  return (
    <div className="w-full h-auto  pt-1">
      <div className="imagetxt mt-[4.4vw] relative">
        <img
          className="w-full h-[33vw]"
          src="https://www.udacity.com/videos/waves-poster.webp"
          alt="img"
        />
        <div className="absolute -top-1/4 left-0 w-full h-full flex flex-col justify-center items-center selection:bg-lime-500">
          {["Every course has real-world projects designed to develop the", "skills you need to reach your career goals."].map((item, index) => (
            <h1
              key={index}
              className={`text-[3vw] leading-none tracking-tighter font-["Roboto Flex"] font-medium text-white text-center ${index === 1 ? 'mt-2' : ''}`}
            >
              {item}
            </h1>
          ))}
        </div>
        <div className='w-full h-[10vw] px-[10vw] absolute flex gap-5 bottom-[5vw] left-0'>
          <CategoryCard 
            href="/"
            imgSrc="https://uds-assets.udacity.com/glyphs/v2/school-data-sci-one.svg"
            imgAlt="Data Science"
            text="Data Science"
          />
          <CategoryCard 
            href="/"
            imgSrc="https://uds-assets.udacity.com/glyphs/v2/school-business-one.svg"
            imgAlt="Business"
            text="Business"
          />
          <CategoryCard 
            href="/"
            imgSrc="https://uds-assets.udacity.com/glyphs/v2/school-programming-one.svg"
            imgAlt="Programming & Development"
            text="Programming & Development"
          />
          <CategoryCard 
            href="/"
            imgSrc="https://uds-assets.udacity.com/glyphs/v2/school-ai-one.svg"
            imgAlt="Artificial Intelligence"
            text="Artificial Intelligence"
          />
          <CategoryCard 
            href="/"
            imgSrc="https://uds-assets.udacity.com/glyphs/v2/school-autonomous-sys-one.svg"
            imgAlt="Autonomous Systems"
            text="Autonomous Systems"
          />
          <CategoryCard 
            href="/"
            imgSrc="https://uds-assets.udacity.com/glyphs/v2/school-product-mgt-one.svg"
            imgAlt="Product Management"
            text="Product Management"
          />
          <CategoryCard 
            href="/"
            imgSrc="https://uds-assets.udacity.com/glyphs/v2/school-cloud-computing-one.svg"
            imgAlt="Cloud Computing"
            text="Cloud Computing"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
