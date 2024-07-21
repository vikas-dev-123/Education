import React from 'react';
import Email from './Email';

const sections = [
  {
    title: 'Company',
    links: [
      'About Us',
      'Why Udacity',
      'Blog',
      'In the News',
      'Jobs at Udacity',
      'Become a Mentor',
      'Partner with Udacity',
    ],
  },
  {
    title: 'Udacity Schools',
    links: [
      'Nanodegree Programs',
      'Courses',
      'Career Services',
      'Udacity for Business',
      'Student Success',
    ],
  },
  {
    title: 'Featured Program',
    links: [
      'Help Center',
      'Contact Us',
      'FAQs',
      'Community',
    ],
  },
  {
    title: 'Only at Udacity',
    links: [
      'Terms of Use',
      'Privacy Policy',
      'Cookie Policy',
      'Accessibility',
    ],
  },
];

const Ending = () => {
  return (
    <div className='w-full px-24 py-20 h-auto bg-white'>
      <div className='w-full'>
        <div className='w-full flex gap-10 px-10 py-8'>
          {sections.map((section, index) => (
            <div key={index} className='w-1/5'>
              <h1 className='text-2xl font-bold'>{section.title}</h1>
              <div className='w-full py-8 text-black flex flex-col items-start space-y-4'>
                {section.links.map((link, idx) => (
                  <a key={idx} href='' className='hover:underline'>{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Email/>
    </div>
  );
}

export default Ending;

