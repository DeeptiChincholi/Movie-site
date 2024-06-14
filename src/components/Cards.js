import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import ReactStars from 'react-stars';
import { getDocs } from 'firebase/firestore';
import { movies } from '../Firebase/firebase';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const Cards = () => {
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(false);
  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const data = await getDocs(movies);
      data.forEach((doc) => {
        setData((prev) => [...prev,{...(doc.data()), id: doc.id}])
      })
      setLoading(false);
    }
    getData();
  },[])
  return (
    <div className='flex w-full flex-wrap p-3 mt-1 justify-center'>
        { loading ? <div className='loader'><ThreeDots /></div>:
        data.map((e,i)=>{
            return (
               
                <div key={i} className=" card text-sm shadow-lg p-2 hover:-translate-y-3 transition-all duration-500 cursor-pointer">
                    <img className='h-56 w-40 mb-2' src={e.image} alt="" />
                    <h1><span className='text-red-500'>Name: </span> {e.title} </h1>
                    <h1 className='flex items-center'><span className='text-red-500 mr-2'>Rating: </span> 
                    <ReactStars 
                        size={15}
                        half={true}
                        value={3.5}
                        edit={false}
                    /> </h1>
                    <h1 className='mb-2'><span className='text-red-500'>Year: </span> {e.year} </h1>
                    <Link  to={`/detail/${e.id}`}>
                      <button className='text-white h-5 mt-0 items-center'>
                        <PlayCircleOutlineIcon className='ml-0 mr-0'/>
                        <span className='text-white text-xs pl-1'>Watch Now</span>
                      </button>
                    </Link>
                    
                </div>
              
            )
        })}
    </div>
  )
}

export default Cards