import React from "react";
import Table from "../../Table";
import Sidenav from "../../SideNav";
import { useState, useEffect } from "react";

const Surrogates = () => {
  const [surrogatedata, setSurrogatedata] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [userid, setUserid] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3170/api/getallSurrogate",
        );
        if (!response.ok) {
          throw Error("Something went wrong!");
        }
        const data = await response.json();
        console.log(data);
        setSurrogatedata(data);
        //  setLoading(false);
      } catch (error) {
        setError(error.message);
        //  setLoading(false);
      }
    };
    fetchData();
  }, []);

  // const fetchOneSurrogate = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3170/api/getoneSurrogate/${id}`);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return (
    <>
      {/* sidebar */}
      <Sidenav />
      {/* body */}
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
          {/* search bar */}
          <div className="flex justify-between">
            <input
              type="search"
              name="search"
              id="search"
              v-model="searchTerm"
              placeholder="Search Surrogates..."
              className="text-md float-left w-full rounded-l border border-gray-400 px-2 py-1 pl-11 text-lg shadow-sm"
            />
            <button
              type="submit"
              className="flex w-24 items-center justify-center rounded-r border-b border-r border-t border-gray-400 bg-gray-100 py-1 text-lg text-gray-600"
            >
              Search
            </button>
          </div>
          {/* search bar end */}
          {/* {console.log(surrogatedata)} */}
          <Table
            array={surrogatedata}
          />
        </div>
      </div>
    </>
  );
};

export default Surrogates;
