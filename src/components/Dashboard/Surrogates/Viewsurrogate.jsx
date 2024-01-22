import { useState , useEffect } from "react";
import Sidenav from "../../SideNav";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";



const Viewsurrogate = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    // const location  = useLocation()
    const params = useParams()
    // console.log(location.pathname.split('/')[2])
    // console.log(params.id)
    
    useEffect(() => {
        const fetchData = async () => {
            console.log(params.id)
          try {
            const response = await axios.get(`http://localhost:3170/api/getoneSurrogate/${params.id}`);
            const data = await response.data;
            // console.log("data", data);
            setData(data);
            console.log(data)
            //  setLoading(false);
          } catch (error) {
            setError(error.message);
            console.log(error)
            //  setLoading(false);
          }
        };
        fetchData();
      }, []);


  return (
    <>
      <Sidenav />

      <div className="min-h-screen w-full bg-gray-100 pl-64 pt-16">
        <div className="p-8 text-sm text-gray-800">
          <div className=" mb-4 inline-flex space-x-20">
            {/* {console.log(surrogateid)} */}
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
         
                  <p key={data._id}> {data.firstname}</p>
                  <p>{data.firstname}</p>
                  <p>{data.firstname}</p>
                  <p>email</p>
                  <p>age</p>
                  <p>gender</p>
                  <p>information</p>
         
        </div>
      </div>
    </>
  );
};

export default Viewsurrogate;
