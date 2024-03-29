import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi?</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
