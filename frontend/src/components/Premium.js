import React,{useState,useEffect,useContext} from 'react'
import Context from '../UseContext/Context'
import FreebookItem from './FreebookItem'

function Premium() {
  const Bookcontext = useContext(Context)
  const { theme } = Bookcontext
  const [premiumbook, setpremiumbook] = useState([])
  useEffect(() => {
    const Getallbooks = async () => {
      const response = await fetch(`http://localhost:4000/api/Books/getallbooks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const premiumbooks = await response.json();
      const premium = premiumbooks.filter((items) => items.category == "Premium")
      setpremiumbook(premium)
    }
    Getallbooks()
  }, [])
  return (
    <div className='lg:px-24 px-4 py-2'>
      <br />
      <br />
      <br />
      <div className={`flex flex-col items-center justify-center ${theme === "#FFFFFF" ? "text-black" : "text-white"}`}>
        <h2 className='text-3xl font-semibold mt-10 text-center'>We're delighted to have you <span className='text-pink-500 font-bold'>Here:&#41;!!</span></h2>
        <p className='w-11/12 text-center my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cum blanditiis aspernatur sapiente sequi laboriosam autem ex. Tempora doloremque, consectetur cum necessitatibus nihil nisi explicabo rem dolore odit quam nam sunt modi provident alias fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, repudiandae?</p>
        <a href="#" className='bg-pink-500 px-3 py-2 rounded-md text-white font-semibold'>Back</a>
      </div>
      <div className=' md:px-10'>
        <div className='grid md:grid-cols-3'>
          {
            premiumbook.map((e) => (
              <FreebookItem key={e.id} title={e.title} description={e.description} category={e.category} price={e.price} image={e.image} id={e.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Premium