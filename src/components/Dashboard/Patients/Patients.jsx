import React from 'react'
import Table from '../../Table'
import Sidenav from '../../SideNav'

const Patients = () => {
  return (
<>
  {/* header */}

  < Sidenav/>

  {/* body */}
  <div className="w-full min-h-screen bg-gray-100 pt-16 pl-64">
    <div className="p-8 text-sm text-gray-800">
      <div className='inline-flex space-x-20 mb-4'>

      <h1 className="text-4xl text-gray-700 font-bold leading-none mb-8">
        Patients Record
      </h1>
      <a
                href="/add-patients"
                className="rounded-md bg-primary px-7 py-3 h-max text-base font-medium text-white hover:bg-primary/90"
              >
             +  Add New record
              </a>
      </div>
      {/* search bar */}
      <div className="flex justify-between">
      <input
        type="search"
        name="search"
        id="search"
        v-model="searchTerm"
        placeholder="Search Patient..."
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

    <Table/>
    </div>
  </div>
</>

  )
}

export default Patients