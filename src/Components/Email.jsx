import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const socialIcons = [
  { component: FaFacebook, className: 'w-10 h-10 cursor-pointer' },
  { component: RiInstagramFill, className: 'w-10 h-10 cursor-pointer' },
  { component: AiFillTwitterCircle, className: 'w-10 h-10 cursor-pointer' },
  { component: FaLinkedin, className: 'w-10 h-10 cursor-pointer' }
];

const links = [
  { href: "", text: "Legal & Privacy" },
  { href: "", text: "Site Map" }
];

const Email = () => {
  return (
    <div className=''>
      <h1 className='text-xl font-semibold'>Submit your email to stay updated on the latest in technology</h1>
      <div className='flex gap-[10vw]'>
        <div className='flex gap-5 py-3'>
          <input className='border h-[4vw] w-[40vw] px-6 rounded-md border-black' type="text" placeholder='Email Address' />
          <button className='w-[20vw] rounded-md h-[4vw] text-blue-600 font-[0px] border-blue-600 hover:bg-blue-700 hover:text-white  border-2'>Subscribe to Newsletter</button>
        </div>
        <div>
          <div className='icons py-6 flex gap-4'>
            {socialIcons.map((icon, index) => {
              const IconComponent = icon.component;
              return <IconComponent key={index} className={icon.className} />;
            })}
          </div>
          <div className='flex font-semibold gap-4 w-[20vw]'>
            {links.map((link, index) => (
              <a key={index} href={link.href} className='hover:underline'>{link.text}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;

