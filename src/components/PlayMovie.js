import React from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

const PlayMovie = (props) => {
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
    <div className='flex justify-center items-center player'>
    <ReactPlayer controls={true} url={"https://www.youtube.com/watch?v=2OPOGUUkauc&pp=ygURc3BpZGVybWFuIHRyYWlsZXI%3D"} playing={true}/>
    </div>
  )
}

export default PlayMovie