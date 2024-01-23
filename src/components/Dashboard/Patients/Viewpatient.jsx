import { useState , useEffect } from "react";
import Sidenav from "../../SideNav";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";



const ViewPatient = () => {
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
            const response = await axios.get(`https://medbarn-emr-backend.onrender.com/api/getonePatient/${params.id}`);
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
            {/* {console.log(Patientid)} */}
            <h1 className="mb-8 text-4xl font-bold leading-none text-gray-700">
              Patients Record
            </h1>
            <a
              href="/add-Patients"
              className="h-max rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
            >
              + Add New record
            </a>
          </div>
        <span key={data._id} className="hidden"></span>
                  <div className="grid">
                  <p className="text-3xl">{data.firstname} {data.lastname}</p>
                  <a href={`mailto:${data.email}`} className="link font-bold">Email address: {data.email}</a>
                  <a href={`tel:${data.phone}`} className="link font-bold" > Phone number {data.phone}</a>
                  <p className="link text-lg font-bold">Age {data.age}</p>
                  <p> Gender: {data.gender}</p>
                  </div>

                  <h1 className=" mt-10 text-2xl ">Note</h1>

                  <p>{data.information}</p>

                  <h1 className=" mt-10 text-2xl ">Uploaded image</h1>

                  <img src={data.imglink} alt="uploaded-image" />
         
        </div>
      </div>
    </>
  );
};

export default ViewPatient;
