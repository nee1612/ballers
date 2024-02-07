// components/InvestmentCard.js
import React from 'react';
import { useState } from 'react';


const InvestmentCard = ({ investment }) => {
  const { title, image, amount } = investment;
  const [hide,setHide]=useState(false);
  const [data,setData]=useState('')
  const tt=(e)=>{
    console.log("hello",e)
    setHide(true)
    setData(e)
  }

  return (
  <>
      
       <div className=" bg-white opacity-80    rounded-lg shadow-md hover:shadow-lg duration-200 ml-3 sm:ml-0 p-3 w-[75vw] lmobile:w-[53vw] sm:w-[60vw] md:w-[20rem] h-auto sm:h-[19rem] relative" >
       <div>
       <img src={image} alt={title} className="h-36 w-full object-cover mb-4" />
       <h2 className="text-lg font-bold mb-2">{title}</h2>
       {/* <p >Amount: {amount}</p> */}
       <div className='flex gap-1 '>
        <p className="text-gray-600">Amount:</p>
        <p className='text-lime-900'>{amount}</p>
       </div>
       <div className="  sm:absolute sm:bottom-2 cursor-pointer my-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-800 rounded-sm hover:bg-emerald-700 ">
          Read more
          </div>
       </div>
     </div>
  </>
  );
};

export default InvestmentCard;
