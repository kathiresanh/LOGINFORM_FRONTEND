import axios from "axios";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Dashboard(){
    
    const [data,setdata] = useState(0)
    useEffect(async()=>{
     try {
        let data =await axios.get("https://loginformbackend.herokuapp.com/dashboard",{
            headers:{
                Authorization : window.localStorage.getItem("token")
            }
        })
        setdata(data.data.total)
     } catch (error) {
         console.log(error)
         
     }
    },[])

    return(
        <>
         <div className="popup-box">
      <div className="box">
      <h1 className="text-center">Total:{data}</h1>
      <Link to="/"><button className="btn bg-primary">Home</button></Link>

      </div>
      </div>
       
        </>
    )
}