import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import backgroundImageUrl from "../../images/authBackground.png";
import sideDesign from "../../images/sideDesign.png";

import { DatePicker } from "antd";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
export default function Registration() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");
  const [selectedCountryCode, setSelectedCountryCode] = useState("88");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleChangeCode = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          "https://api.hellokompass.com/country"
        );
        setCountry(response.data.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  const onSubmit = (data) => {
    console.log("data", data);

    // setIsSubmitting(true);

    axios
      .post("https://api.myhealthrow.com/public/api/signup", data)
      .then((res) => {
        const data = res.data;
        if (data.code === 200) {
          sessionStorage.setItem(
            "usersInfo",
            JSON.stringify(res.data.data.token)
          );
          // navigate('/');
        } else if (data.code === 208) {
          // setErrorData(data);
        } else if (data.code === 209) {
          // setErrorData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // setIsSubmitting(false);
      });
  };

  return (
    <div
      className=" h-screen  bg-cover bg-center  bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="flex justify-center items-center h-screen ">
        <div className="border w-[65%] bg-white shadow-lg">
          <div className="grid grid-cols-3">
            <div>
              <div
                className=" h-[600px]  bg-cover bg-center  bg-no-repeat"
                style={{ backgroundImage: `url(${sideDesign})` }}
              >
                <div className="flex items-center justify-center h-[600px] px-10">
                  <dv>
                    <h2 className="text-white font-[poppins] font-bold text-[30px] ">
                      Welcome to Website
                    </h2>
                    <p className="text-white font-[poppins] text-[14px]">
                      "Join our community for vital information, support, and
                      resources on breast cancer prevention and care."
                    </p>
                  </dv>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mt-[70px] mx-[30px]">
                <div>
                  <h1 className="text-center mb-3 font-[poppins] font-semibold text-[22px] text-[#BCA44E] underline">
                    User Registration{" "}
                  </h1>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="mb-4">
                      <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">
                        Full Name *
                      </p>
                      <input
                        type="text"
                        placeholder="Type Full Name"
                        className="input input-bordered w-full rounded-none text-sm placeholder-[#c5c5c7]"
                      />
                    </div>
                    <div className="mb-4">
                      <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">
                        Email *
                      </p>
                      <input
                        type="email"
                        placeholder="Type Email"
                        className="input input-bordered w-full rounded-none text-sm placeholder-[#c5c5c7] "
                      />
                    </div>
                    <div>
                      <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">
                        phone *
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        <div>
                          {/* <input
                            type="number"
                            value="88"
                            className="input input-bordered w-full rounded-none text-sm "
                          /> */}
                          <select
                            className="select select-bordered w-full  rounded-none text-sm text-[#333] font-normal"
                            // {...register("country")}
                            value={selectedCountryCode}
                            onChange={handleChangeCode}
                          >
                            {country.map((c) => (
                              <option key={c.id} value={c.pcode}>
                                {c.pcode}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-span-3">
                          <input
                            type="number"
                            placeholder="Type Phone Number"
                            className="input input-bordered w-full rounded-none text-sm placeholder-[#c5c5c7]"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">
                        Date Of Birth *
                      </p>
                      <DatePicker
                        onChange={onChange}
                        className="rounded-none w-full py-[11px]"
                      />
                    </div>
                    <div className="mb-4">
                      <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">
                        Country *
                      </p>
                      <select
                        className="select select-bordered w-full  rounded-none text-sm text-[#333] font-normal"
                        // {...register("country")}
                        value={selectedCountry}
                        onChange={handleChange}
                      >
                        {/* <option value="">Selected Country</option> */}
                        {country.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <p className="pb-1 font-[poppins] font-normal text-[14px] text-[#a4a4a4]">
                        Password *
                      </p>
                      <input
                        type="password"
                        placeholder="Type Password"
                        className="input input-bordered w-full rounded-none text-sm placeholder-[#c5c5c7]"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center border py-2 mt-6 bg-[#BCA44E] cursor-pointer">
                    <button className="text-white font-bold" type="submit">
                      Register
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="font-[poppins] font-normal text-[14px] text-gray-600">
                      Have an account ?{" "}
                      <span className="cursor-pointer pl-1 text-[#BCA44E] underline">
                        <Link to="/login"> Login here</Link>
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
