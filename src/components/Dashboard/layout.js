import React from 'react'
import Sidenav from '../../SideNav'

const layout = () => {
  return (

<>
<Sidenav/>

<div className="min-h-screen w-full bg-gray-100 pl-64 pt-16">
        <div className="p-8 text-sm text-gray-800">
          <div className=" mb-4 inline-flex space-x-20">
            <h1 className="mb-8 text-4xl font-bold leading-none text-gray-700">
              Surrogates Record
            </h1>
            <a
              href="/add-surrogates"
              className="h-max rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
            >
              + Add New record
            </a>
          </div>
          {/* body area */}
          </div>
          </div>

</>    
)
}

export default layout