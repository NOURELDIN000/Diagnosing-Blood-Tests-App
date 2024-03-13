import './Footer.css';

import React from 'react'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='links   list-unstyled d-flex justify-content-center'>
        <li><a href='/'>Register</a></li>
        <li>  <a href='#/'> Forum</a>    </li>
        <li> <a href='#/'>  Affiliate </a> </li>
        <li> <a href='#/'> FAQ</a>  </li>
      </ul>
      <ul className='icons  list-unstyled d-flex justify-content-center'>
        <li><a target='/' href="https://www.facebook.com/login/"> <FaFacebookF/></a></li>
        <li><a target='/' href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=ASKXGp3P7bHrRY_iEcpNteLHOZApj3_VskTo7MkjApjq_JCmHi1FHXyC_PznUFaLJKmKvCJn_GNN4A&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1929573637%3A1707145915883510&theme=glif"><FaGoogle/> </a></li>
        <li><a href='#/'> <FaTwitter/></a></li>
        <li> <a href='#/'> <TfiYoutube/></a></li>
        <li><a href='#/'> <LuInstagram/></a> </li>
        
      </ul>
      <p>&copy; 2024. appName. All rights reserved.</p>
    </div>
  )
};

export default Footer;
