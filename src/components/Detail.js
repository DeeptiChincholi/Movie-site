import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { movies } from '../Firebase/firebase';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const Detail = () => {
  const {id} = useParams();
  const[loader,setLoader]= useState(false);
  const [data,setData] = useState({
    title: "",
    year: "",
    image: "",
    description: ""
  });
  useEffect(()=>{
    async function getData(){
      setLoader(true)
      const _doc = doc(db,"movies",id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoader(false)
    }
    getData();
  },[])

   return (
    <div> 
      { loader ? <div className='loader'><ThreeDots /></div>: 
      <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
      <img className='h-96 block md:sticky top-24' src={data.image} alt="" />
      <div className='md:ml-24 ml-0 w-full md:w-1/2 '>
        <h1 className=' text-3xl md:text-5xl font-bold mt-5 md:mt-0 md:mb-3'>{data.title} <span> ({data.year})</span></h1>
        <ReactStars 
          size={20}
          half={true}
          value={5}
          edit={false}
        />
        <Link  to={`/playmovie/${id}`}>
          <div className='mt-5'>
          <button className='text-white flex justify-center items-center bg-red-500 hover:bg-red-600 hover:-translate-y-1 transition-all duration-500 cursor-pointer p-2'>
            <PlayCircleOutlineIcon className='ml-0 mr-1 ' color=''/>
            <span className='text-white text-lg pl-1 pr-1'>Watch Now</span>
          </button>
          </div>
        </Link> 
        <p className='mt-3'>{data.description}</p>
        
      </div></div> }
    </div> 
  )
}

export default Detail