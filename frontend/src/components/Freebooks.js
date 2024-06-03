import React,{useEffect,useState,useContext} from 'react'
import Context from '../UseContext/Context'
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import FreebookItem from './FreebookItem'

function Freebooks() {
  const context = useContext(Context)
  const { theme } = context
    const [freebook, setfreebook] = useState([])
    useEffect(() => {
      const Getallbooks = async () => {
        const response = await fetch(`http://localhost:4000/api/Books/getallbooks`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const freebooks = await response.json();
        const free=freebooks.filter((items)=>items.category=="free")
        setfreebook(free)
      }
      Getallbooks()
    }, [])
    
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <div className='lg:px-24 px-4 py-6 w-full'>
      <div className={`w-full ${theme=== "#FFFFFF" ? "text-black" : "text-white"}`}>
        <h2 className='font-bold text-2xl'>Free offered courses</h2>
        <p className='py-2'>Explore our extensive collection of free books available for you. Enjoy a variety of genres, from timeless classics to modern masterpieces, all at no cost. Start reading without any financial commitment and discover your next favorite book today!</p>
      </div>
          <div className='py-3'>
        <Slider {...settings}>
          {
            freebook.map((e) => (
              <FreebookItem key={e.id} title={e.title} description={e.description} category={e.category} price={e.price} image={e.image} id={e.id}/>
            ))
          }
        </Slider>
              </div>
          </div>
  )
}

export default Freebooks