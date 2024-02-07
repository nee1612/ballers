// components/Dashboard.js
import React from 'react';
import { useState,useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import InvestmentCard from './InvestmentCard';
import { investmentData } from '../data/investmentData';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const history=useNavigate();
  const refToken = cookies.get("auth-token");
  

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    if (refToken === undefined) {
      history("/login");
    }
  }, []); 
  
  return (
        <div className='flex  '>
            {showSidebar ? (
                <div className="w-[15rem] lmobile:relative fixed z-50">
                    <Sidebar />
                </div>
              ):("")}
                <div className={`w-[100vw] lmobile:w-[${showSidebar ? '80vw' : '100vw'}] bg-gradient-to-br from-blue-200 via-slate-800 to-sky-800`}>
                  <Navbar/>
                  <div  className={`mt-${showSidebar ? '8' : '8'}  ml-5 `}>
                  <div className="bg-emerald-500 p-1 absolute right-4 top-3 rounded-md " onClick={toggleSidebar}>
                  {showSidebar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                      <line x1="3" y1="3" x2="21" y2="21"/>
                      <line x1="21" y1="3" x2="3" y2="21"/>
                    </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                      <line x1="4" x2="20" y1="12" y2="12"/>
                      <line x1="4" x2="20" y1="6" y2="6"/>
                      <line x1="4" x2="20" y1="18" y2="18"/>
                      </svg>
                  )}
                </div>
                    <p className='font-semibold text-3xl mb-5 lmobile:ml-10 mt-3 lmobile:mt-0 md:ml-5 lmobile:block flex lmobile:justify-center'>Welcome, User</p>
                    <h1 className="text-lg lmobile:text-xl sm:text-2xl font-semibold lmobile:font-bold mb-4 lmobile:ml-12 ml-2 md:ml-5 lmobile:block flex lmobile:justify-center">Investment Opportunities</h1>
                    <div className="flex lmobile:justify-center  lmobile:ml-5 sm:ml-0 md:justify-evenly flex-wrap gap-5">
                      {investmentData.map((investment, index) => (
                        <Link to={`/investment/${investment.id}`} key={index}>
                          <InvestmentCard investment={investment} />
                        </Link>
                      ))}
                </div>
              </div>
            </div>
        
      </div>
      );
};


export default Dashboard;
