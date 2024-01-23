import React from 'react'
import Table from '../../Table/Patienttable';
import Sidenav from '../../SideNav'
import { useState, useEffect } from 'react';


const layout = () => {
  const [patientdata, setPatientdata] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(patientdata.length)

 
  useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch('https://medbarn-emr-backend.onrender.com/api/getallPatient');
         if (!response.ok) {
           throw Error('Something went wrong!');
         }
         const data = await response.json();
         setPatientdata(data);
        //  setLoading(false);
       } catch (error) {
         setError(error.message);
        //  setLoading(false);
       }
     };
     fetchData();
  }, []);

  return (

<>
<Sidenav/>

<div className="w-full min-h-screen bg-gray-100 pt-16 pl-64">
    <div className="p-8 text-sm text-gray-800">
    <div className=' inline-flex space-x-20 mb-4'>
      <h1 className="text-4xl text-gray-700 font-bold leading-none mb-8">
        Patient Record
      </h1>
      <a
                href="/add-patients"
                className="rounded-md bg-primary px-7 py-3 h-max text-base font-medium text-white hover:bg-primary/90"
              >
             +  Add  New record
              </a>
        </div>
      {/* search bar */}
      <div className="flex justify-between">
      <input
        type="search"
        name="search"
        id="search"
        v-model="searchTerm"
        placeholder="Search Surrogates..."
        className="px-2 text-md border-gray-400 rounded-l text-lg pl-11 py-1 shadow-sm float-left w-full border"
      />
      <button
        type="submit"
        className="w-24 flex items-center justify-center bg-gray-100 text-lg py-1 border-t border-r border-b border-gray-400 rounded-r text-gray-600"
      >
        Search
      </button>
    </div>
    {/* search bar end */}
    <Table 
    array= {patientdata}
    />
    </div>
  </div>

</>    
)
}

export default layout