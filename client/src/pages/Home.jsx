import React from 'react'
import SectionOne from '../components/homePage/SectionOne'
import Sectiontwo from '../components/homePage/Sectiontwo'
import SectionThree from '../components/homePage/SectionThree';
import SectionFour from '../components/homePage/SectionFour';
import SectionFive from '../components/homePage/SectionFive';
import SectionSix from '../components/homePage/SectionSix';
import Footer from '../components/common/Footer';

const codeblockHTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coursify</title>
    <script>
      const theme = localStorage.getItem("theme") || "light";
      document.documentElement.classList.add(theme);
    </script>
  </head>
  <body>
    <div id="root"></div>`;

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      
        <SectionOne />
        <Sectiontwo rev="flex-row" codeblock={codeblockHTML} desc={"Unlock your coding potential with our "} htext={"online courses."} subDesc={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}/>
        <SectionFour />
        <SectionThree />
        <SectionFive />
        <SectionSix />
        <Footer />
    </div>
  )
}

export default Home