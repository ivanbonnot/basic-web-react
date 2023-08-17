import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Chef.css';


const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title={"Chef's Word"} />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nam.
          </p>
        </div>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquid neque eaque amet provident laborum, necessitatibus nobis dolorem voluptate aut?

        </p>
      </div>
      <div className='app__chef-sign'>
        <p>Ivan Bonn</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
