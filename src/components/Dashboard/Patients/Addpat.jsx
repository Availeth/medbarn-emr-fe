import { useState } from "react";
import Sidenav from "../../SideNav";
import axios from "axios";


const Addpat = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [information, setInformation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dates, setDates] = useState("");
  // const [res, setRes] = useState({});

  
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imglink, setImglink] = useState("");

  // const [error, setError] = useState([]);
  // const [success, setSuccess] = useState(false);

  const handleSelectFile = (e) => setFile(e.target.files[0]);
  const handleUpload = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("my_file", file);
      const res = await axios.post("https://medbarn-emr-backend.onrender.com/upload", data);
      // console.log(res.data.secure_url)
      // setRes(res);
      // setImglink(res.data.secure_url);
      return res.data.secure_url
      // console.log(res.data.url)
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  
  const handleSubmit = async (e) => {e.preventDefault();

try {

  const data = {
    firstname,
    lastname,
    email,
    phone,
    gender,
    age,
    information,
    imglink: await handleUpload(),
    dates
  }
  console.log(data)

    const response = await axios.post('https://medbarn-emr-backend.onrender.com/api/patientData', data, {
      headers: {
        'Content-type': 'application/json',
      },
      
    });
    console.log(response)
  } catch (error) {
    console.error('Error during Axios request:', error);
  }
    // const { msg, success } = await res.json();
    // setError(msg);
    // setSuccess(success);

    // if (success) {
    //   setFirstname("");
    //   setLastname("");
    //   setEmail("");
    //   setPhone("");
    //   setGender("");
    //   setAge("");
    //   setDates("");
    //   setInformation("");
    //   setImglink("");
    // }
  };
  return (
    <>
      <Sidenav />

      <div className=" h-max pb-40 w-full bg-gray-100 pl-64 pt-16">
        <form className="mx-20" onSubmit={handleSubmit}>
          <h1 className="mb-8 text-4xl font-bold leading-none text-gray-700">
            Add New Patient
          </h1>

          <div className="flex">
            <label className=" mb-[10px]  me-2 block text-base font-medium text-dark dark:text-white">
              Firstname
            </label>
            <input
              type="text"
              minLength={3}
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
              className="mb-[40px] w-full rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition invalid:border-red-500 focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
            />

            <label className=" mb-[10px] me-2 ms-10 block text-base font-medium text-dark dark:text-white">
              Lastname
            </label>
            <input
              type="text"
              minLength={3}
              placeholder="Lastname"
              onChange={(e) => setLastname(e.target.value)}
              className="mb-[40px] w-full rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition invalid:border-red-500 focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
            />
          </div>

          <div className="flex">
            <label className=" mb-[10px]  me-2 block text-base font-medium text-dark dark:text-white">
              Email
            </label>
            <input
              type="email"
              minLength={5}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-[40px] w-full rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition invalid:border-red-500 focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
            />

            <label className=" mb-[10px] me-2 ms-10 block text-base font-medium text-dark dark:text-white">
              Phone
            </label>
            <input
              type="phone"
              minLength={10}
              placeholder="+234"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-[40px] w-full rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition invalid:border-red-500 focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
            />
          </div>

          <div className="grid-row-1 grid grid-flow-col">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Gender
            </label>
            <div className="relative z-20">
              <select className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
              >
                <option value="" className="dark:bg-dark-2">
                  Gender
                </option>
                <option value="female" className="dark:bg-dark-2">
                  Female
                </option>
                <option value="male" className="dark:bg-dark-2">
                  Male
                </option>
              </select>
              <span className="absolute right-4 top-1/4 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
            </div>

            <label className=" mb-[10px] me-2 ms-10 block text-base font-medium text-dark dark:text-white">
              Age
            </label>
            <input
              type="number"
              min={18}
              placeholder="0"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mb-[40px] w-full  rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition invalid:border-red-500 focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
            />
          </div>

          <div className="">
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
              Information
            </label>
            <textarea
              rows="5"
              placeholder="Write as much information as necessary here"
              value={information}
              onChange={(e) => setInformation(e.target.value)}
              className="w-full rounded-md border border-stroke bg-transparent p-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3"
            />
          </div>

          <div className="my-8">
            <label  className=" mb-[10px] block text-base font-medium text-dark dark:text-white">
              Attachments
            </label>
            <div className="relative">
              <label
                htmlFor="file"
                className="flex min-h-[175px] w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-primary p-6"
              >
             {file && <center> {file.name}</center>}

                <div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="sr-only"
                    onChange={handleSelectFile}
                    multiple={false}

                  />
                  <span className="mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5013 11.666C2.96154 11.666 3.33464 12.0391 3.33464 12.4993V15.8327C3.33464 16.0537 3.42243 16.2657 3.57871 16.4219C3.73499 16.5782 3.94695 16.666 4.16797 16.666H15.8346C16.0556 16.666 16.2676 16.5782 16.4239 16.4219C16.5802 16.2657 16.668 16.0537 16.668 15.8327V12.4993C16.668 12.0391 17.0411 11.666 17.5013 11.666C17.9615 11.666 18.3346 12.0391 18.3346 12.4993V15.8327C18.3346 16.4957 18.0712 17.1316 17.6024 17.6004C17.1336 18.0693 16.4977 18.3327 15.8346 18.3327H4.16797C3.50493 18.3327 2.86904 18.0693 2.4002 17.6004C1.93136 17.1316 1.66797 16.4957 1.66797 15.8327V12.4993C1.66797 12.0391 2.04106 11.666 2.5013 11.666Z"
                        fill="#3056D3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.41074 1.91009C9.73618 1.58466 10.2638 1.58466 10.5893 1.91009L14.7559 6.07676C15.0814 6.4022 15.0814 6.92984 14.7559 7.25527C14.4305 7.58071 13.9028 7.58071 13.5774 7.25527L10 3.67786L6.42259 7.25527C6.09715 7.58071 5.56951 7.58071 5.24408 7.25527C4.91864 6.92984 4.91864 6.4022 5.24408 6.07676L9.41074 1.91009Z"
                        fill="#3056D3"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0013 1.66602C10.4615 1.66602 10.8346 2.03911 10.8346 2.49935V12.4994C10.8346 12.9596 10.4615 13.3327 10.0013 13.3327C9.54106 13.3327 9.16797 12.9596 9.16797 12.4994V2.49935C9.16797 2.03911 9.54106 1.66602 10.0013 1.66602Z"
                        fill="#3056D3"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-base text-body-color valid:hidden dark:text-dark-6">
                    Click &amp; drop or
                    <span className="text-primary underline"> browse </span>
                  </span>
                </div>
              </label>
              {/* <code>
        {Object.keys(res).length > 0
          ? Object.keys(res).map((key) => (
              <p className="output-item" key={key}>
                <span>{key}:</span>
                <span>
                  {typeof res[key] === "object" ? "object" : res[key]}
                </span>
              </p>
            ))
          : null}
      </code> */}

              <label className=" my-8 mb-[10px]  me-2 block text-base font-medium text-dark dark:text-white">
                Date
              </label>
              <input
                type="date"
                value={dates}
              onChange={(e) => setDates(e.target.value)}
                placeholder="date"
                className="mb-[40px] w-1/2 rounded-md border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition invalid:border-red-500 focus:border-primary active:border-primary disabled:cursor-default disabled:border-gray-2 disabled:bg-gray-2 dark:border-dark-3"
              />
            </div>

            <div className=" pr-16 sm:flex lg:pr-0">
            {file && (
        <>
              <button
              
              value="send"
                className="my-10 w-full rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-green/90"
              >
            {loading ? "saving..." : "Save"}
                 </button>
            </>
      )}
      </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addpat;
