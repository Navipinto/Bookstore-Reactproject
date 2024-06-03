import React, { useContext } from 'react'
import Context from '../UseContext/Context'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  const context = useContext(Context)
  const { theme } = context
  return (
    <div className='sm:h-screen sm:w-full'>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className={`lg:px-28 md:px-12 px-4 ${theme === "#FFFFFF" ? "text-black" : "text-white"}`}>
          <h2 className='underline underline-offset-2 font-bold text-4xl'>About</h2>
          <p className='text-md w-fits py-4 text-justify'>
          a unique online bookstore designed to cater to all your reading needs. Our platform offers a diverse range of free books across various genres, ensuring that everyone can access quality literature without any financial barriers. Whether you're a fan of classic literature, contemporary fiction, or specialized non-fiction, our free collection is curated to provide you with endless reading possibilities. Our user-friendly interface allows for easy browsing, downloading, and reading, making it simple for you to find and enjoy your next great read.
          In addition to our extensive free book collection, we also offer a selection of premium books for those seeking the latest bestsellers and exclusive content. Our premium section is updated regularly with new releases and popular titles, providing you with access to the newest and most sought-after books on the market. With flexible subscription options and competitive pricing, our premium service ensures that you can stay up-to-date with the literary world without breaking the bank. Join our community of book lovers today and enjoy the perfect blend of free and premium reading experiences tailored just for you.
          </p>
        </div>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default About