import React from 'react'
import Sidenav from '../SideNav'

const Dashboard = () => {
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
      <table className="border w-full text-left shadow-sm">
        <thead>
          <tr>
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide" />
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
              Customer
            </th>
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
              Member
            </th>
            <th className="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide" />
          </tr>
        </thead>
        <tbody className="border rounded bg-white">
          <tr>
            <td className="p-3 border" width="50px" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
          <tr>
            <td className="p-3 border" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
          <tr>
            <td className="p-3 border" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
          <tr>
            <td className="p-3 border" />
            <td className="p-3 border">John Smith</td>
            <td className="p-3 border">Terry Jones</td>
            <td className="p-3 border" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>


    </>
  )
}

export default Dashboard