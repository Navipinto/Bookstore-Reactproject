import React,{useState,useEffect} from 'react'
import Displaycontent from '../components/Displaycontent';

function ShowContent() {
    const [conbook, setconbook] = useState([])
    useEffect(() => {
        const Getallbooks = async () => {
            const response = await fetch(`http://localhost:4000/api/Books/getallbooks`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const books = await response.json();
            const contentBook = books.filter((items) => items.id == localStorage.getItem("id"))
            setconbook(contentBook)
        }
        Getallbooks()
    }, [])
  return (
    <div>
           {
            conbook.map((e)=>
            (
                <Displaycontent key={e.id} item={e}/>
            ))
           }
    </div>
  )
}

export default ShowContent