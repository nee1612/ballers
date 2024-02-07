import React from 'react';
import { useParams } from 'react-router-dom';
import { investmentData } from '../data/investmentData';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function InvestmentDetailPage() {
  const { id } = useParams();
  const investment = investmentData.find(item => item.id === parseInt(id));
  const history =useNavigate();

  if (!investment) {
    return <div>Investment not found</div>;
  }
  const handleGoBack=()=>{
    console.log ("sdfa")
        history('/dashboard');
  }
 
  return (
            <div className='w-full bg-gradient-to-br from-blue-200 via-slate-800 to-sky-800s pb-20'>
              <Navbar/>
              <div className=" mt-5">
                <div className='flex gap-5  items-center py-3'>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"
                  onClick={()=>{handleGoBack()}}
                  ><path d="m15 18-6-6 6-6"/></svg>
                  </div>
                  
                  <div className="text-2xl font-bold flex items-center" onClick={()=>{handleGoBack()}}>Investment Info</div>
                </div>
                <div className=''>
                  <div className='flex justify-center '>
                     <div className='w-[75vw] ml-5 mt-5 flex justify-center'>
                      <img src={investment.image} className="h-[20rem] w-full rounded-md object-cover mb-4" />
                     </div>
                  </div>
                <div className='mx-5 pb-6 pr-2 rounded-lg  overflow-hidden flex justify-center border-2 border-gray-400  backdrop-blur-3xl backdrop-brightness-50 shadow-lg'>
                <div className='mt-5 ml-9 text-white'>
                       <div className='flex flex-col'>
                        <div className='text-xl font-semibold'>
                        Title :
                        </div>
                        <div className='text-lg pl-1'>
                          {investment.title}
                        </div>
                       </div>
                       <div className='flex flex-col  mt-3'>
                        <div className='text-xl font-semibold'>
                        Description:
                        </div>
                        <div className='text-lg pl-1 text-wrap '>
                          {investment.description}
                        </div>
                       </div>
                       <div className='flex flex-col  mt-3'>
                        <div className='text-xl font-semibold'>
                        Risks:
                        </div>
                        <div className='text-lg pl-1'>
                          {investment.risks}
                        </div>
                       </div>
                       <div className='flex flex-col mt-3'>
                       <div className='text-xl font-semibold'>
                       Terms:
                       </div>
                       <div className='text-lg pl-1'>
                        {investment.terms}
                       </div>
                       </div>
                     </div>
                </div>
                </div>
              </div>
              </div>
  );
}

export default InvestmentDetailPage;
