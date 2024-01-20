import React from "react";

const Table = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-[#a9cd47] text-center">
                  <th className="w-1/6 min-w-[160px] border-l border-transparent px-3 py-4 text-lg font-semibold text-white lg:px-4 lg:py-7">
                    {" "}
                   Firstname
                  </th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent px-3 py-4 text-lg font-semibold text-white lg:px-4 lg:py-7">
                    {" "}
                    Lastname
                  </th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent px-3 py-4 text-lg font-semibold text-white lg:px-4 lg:py-7">
                    {" "}
                    Age
                  </th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent px-3 py-4 text-lg font-semibold text-white lg:px-4 lg:py-7">
                    {" "}
                    Date
                  </th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent px-3 py-4 text-lg font-semibold text-white lg:px-4 lg:py-7">
                    {" "}
                    Gender
                  </th>
                  <th className="w-1/6 min-w-[160px] border-l border-transparent px-3 py-4 text-lg font-semibold text-white lg:px-4 lg:py-7">
                    {" "}
                    Add Record
                  </th>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                      Linda
                    </td>
                    <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                      Rita
                    </td>
                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                      30
                    </td>
                    <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                      Dec 15 2023
                    </td>
                    <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                      Female
                    </td>
                    <td className="border-b border-r border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                      <a
                        href="javascript:void(0)"
                        className="inline-block rounded-md border border-primary px-6 py-2.5 font-medium text-primary hover:bg-primary hover:text-white"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
