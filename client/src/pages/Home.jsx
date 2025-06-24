import React from 'react'
import SectionOne from '../components/homePage/SectionOne'
import Sectiontwo from '../components/homePage/Sectiontwo'

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
    const codeblockREACT = `import Header from "./components/common/Header";
    import Home from "./pages/Home";
    import Signup from "./pages/Signup";
    import Signin from "./pages/Signin";
    import Dasboard from "./pages/Dasboard";
    import Cookies from "js-cookie";
    function App() {
      return (
        <div className="min-h-[100vh] bg-[#0f0f0f]">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />`;

const Home = () => {
  return (
    <div className='w-full '>
      
        <SectionOne />
        <Sectiontwo rev="flex-row" codeblock={codeblockHTML} desc={"Unlock your coding potential with our online courses."} subDesc={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}/>
        <Sectiontwo rev="flex-row-reverse" codeblock={codeblockREACT} desc={"Start coding in seconds"} subDesc={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}/>
    </div>
  )
}

export default Home