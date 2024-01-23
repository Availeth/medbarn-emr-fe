import React from 'react'
import Sidenav from '../SideNav'
import dashboardLinks from './dashboard'

const Dashboard = () => {

  const quicklinks = dashboardLinks
  return (
<>
  {/* header */}
< Sidenav/>
  {/* body */}
  <div className="w-full min-h-screen bg-gray-100 pt-16 pl-64">
    <div className="p-8 text-sm text-gray-800">
      <h1 className="text-4xl text-gray-700 font-bold leading-none mb-8">
        MedBarn Agency EMR
      </h1>
      <p>Still in Development</p>
      <div className='grid grid-cols-4 mt-4 space-x-4 '>
        {
          // quicklinks > 0 &&
        quicklinks.map((item, index) =>(
  <div className="flex flex-col bg-[#65A2B9]  rounded-3xl" key={index} >
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
          {item.names}
        </h2>
        <p className="mt-2 text-sm text-gray-100">{item.second}</p>
      </div>
      <div className="mt-6">
        <p>
          <span className="text-5xl font-light tracking-tight text-white">
            {item.numbers}
          </span>
          <span className="text-base font-medium text-white"></span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-starter"
      className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
      href={item.links}
    >
      Quick View
    </a>
  </div>
</div>


        )) 
        }


      </div>

    </div>
  </div>


    </>
  )
}

export default Dashboard