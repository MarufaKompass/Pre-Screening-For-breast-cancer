import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { QuestionnaireValidation } from "../../components/Validation/YupValidation";
export default function QuesnarisePart() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(QuestionnaireValidation),
  });
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ageList, setAgeList] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    // Read Local JSON File
    const fetchAgeList = async () => {
      try {
        // Use GET request to fetch the local JSON
        const response = await axios.get("./ageList.json");
        setAgeList(response.data);
      } catch (error) {
        console.error("Error while fetching the JSON file:", error.message);
      }
    };

    fetchAgeList();
  }, []);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          "https://api.hellokompass.com/country"
        );
        setCountry(response.data.data); // Assuming response data is an array
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "https://api.myhealthrow.com/public/api/store",
        data
      );
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>
            সচেতনতাই সুরক্ষা: This Questionnaire will be used for an academic
            research purposes. Below question answers may help you and us to
            SAVE more lives.
            <p className="font-[poppins] font-normal  text-[11px] text-[#3f403f]">
              ( **Note:Personal identity is not being asked and we are not
              storing any personal information. All general questions are being
              asked.)
            </p>
          </p>
        </div>
        <div className="mt-10">
          <div>
            <input
              type="number"
              name="bdsl"
              value="1"
              className="input input-bordered w-full max-w-xs rounded-none hidden"
              {...register("bdsl")}
            />
          </div>
          <div>
            {/* border-b border-[#f1f1f1] */}
            <div className="  pb-1 mb-3">
              <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
                Question 1{" "}
              </label>
            </div>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center">
              Your Country ? আপনার দেশ? *
            </p>
            <div className="mt-3">
              <select
                className="select select-bordered w-full  rounded-none text-[16px] text-[#333] font-normal"
                {...register("country")}
                value={selectedCountry}
                onChange={handleChange}
              >
                <option value="">Selected Country</option>
                {country.map((c) => (
                  <option key={c.id} sx={{ color: "#333" }} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              <p className="label-text-alt text-red-500 mt-3">
                {errors.country?.message}
              </p>
            </div>
          </div>

          <div>
            <div className="  pb-1 mb-3 mt-3">
              <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
                Question 2{" "}
              </label>
            </div>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center">
              Your City? আপনার শহর/জেলা? *
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  className="w-4 h-4"
                  value="barishal"
                  {...register("city")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  Barishal বরিশাল
                </span>
              </p>

              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  className="w-4 h-4"
                  value="chattagram"
                  {...register("city")}
                />
                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  Chattagram চট্টগ্রাম
                </span>
              </p>
              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  className="w-4 h-4"
                  value="dhaka"
                  {...register("city")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  Dhaka ঢাকা
                </span>
              </p>
              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  value="khulna"
                  className="w-4 h-4"
                  {...register("city")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  {" "}
                  Khulna খুলনা
                </span>
              </p>

              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  value="rajshahi"
                  className="w-4 h-4"
                  {...register("city")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  Rajshahi রাজশাহী
                </span>
              </p>
              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  className="w-4 h-4"
                  value="rangpur"
                  {...register("city")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  Rangpur রংপুর
                </span>
              </p>
              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  className="w-4 h-4"
                  value="sylhet"
                  {...register("city")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  Sylhet সিলেট
                </span>
              </p>

              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="city"
                  value="others"
                  className="w-4 h-4"
                  {...register("city")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  Others
                </span>
              </p>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.city?.message}
            </p>
          </div>

          <div className="  pb-1 mb-3 mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 3{" "}
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3">
              Gender? আপনার লিঙ্গ? *
            </p>
            <div className="border border-[#f1f1f1] mt-3">
              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="w-4 h-4"
                  value="male"
                  {...register("gender")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  {" "}
                  Male (পুরুষ)
                </span>
              </p>

              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="w-4 h-4"
                  value="female"
                  {...register("gender")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  {" "}
                  Female (মহিলা)
                </span>
              </p>

              <p className="border-b py-3 px-4 flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  className="w-4 h-4"
                  {...register("gender")}
                />

                <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                  {" "}
                  Others (অন্যান্য)
                </span>
              </p>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.gender?.message}
            </p>
          </div>

          <div>
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 4 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Your Age? আপনার বয়স কত? *
            </p>

            <div className="mt-3">
              <select
                name="age"
                className="select select-bordered w-full  rounded-none text-[16px] text-[#333] font-normal"
                {...register("age")}
              >
                <option selected value="">
                  Select Age
                </option>
                {ageList.map((age) => (
                  <option
                    key={age.id}
                    sx={{ color: "#a7a7a7" }}
                    value={age.pcode}
                  >
                    {age.age}
                  </option>
                ))}
              </select>
              <p className="label-text-alt text-red-500 mt-3">
                {errors.age?.message}
              </p>
            </div>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 5 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              How frequently do you do the prescreening? আপনি কত সময় পর পর, নিজে
              স্তন ক্যানসার এর প্রাথমিক পরীক্ষা করেন?*
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="monthly"
                    value="monthly"
                    className="w-4 h-4"
                    {...register("chkfreq")}
                  />

                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Monthly ( প্রতি মাসে)
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="quarterly"
                    value="quarterly"
                    className="w-4 h-4"
                    {...register("chkfreq")}
                  />

                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Quarterly (প্রতি তিন মাসে)
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="half Yearly"
                    value="half Yearly "
                    className="w-4 h-4"
                    {...register("chkfreq")}
                  />

                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Half Yearly (প্রতি ছয় মাসে)
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="yearly"
                    value=" yearly"
                    className="w-4 h-4"
                    {...register("chkfreq")}
                  />

                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yearly (প্রতি বছরে)
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="never"
                    value="never"
                    className="w-4 h-4"
                    {...register("chkfreq")}
                  />

                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Never (কখনো করিনা)
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.chkfreq?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 6 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Did you identify/noticed any lumps on your breast? আপনি কি আপনার
              স্তনে কোন প্রকার গিটলী অনুভব করেন? *
            </p>
            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="6"
                    value="1"
                    className="w-4 h-4"
                    {...register("lumps")}
                  />

                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="6"
                    value="0"
                    className="w-4 h-4"
                    {...register("lumps")}
                  />

                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.lumps?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 7 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do your nipple discharge any liquid? আপনার স্তনের বোটা থেকে কি কোন
              তরল বের হয়? *
            </p>
            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="7"
                    value="1"
                    className="w-4 h-4"
                    {...register("nipdis")}
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="7"
                    value="0"
                    className="w-4 h-4"
                    {...register("nipdis")}
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.nipdis?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 8 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do you feel dimpling on your breast? আপনি কি আপনার স্তনের কোন
              স্থানে টোল পরা খেয়াল করেছেন? *
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="8"
                    value="1"
                    {...register("dimp")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="8"
                    value="0"
                    {...register("dimp")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.dimp?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 9 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do you have or feel any breast pain? আপনি কি আপনার স্তনে কোন
              ব্যাথা / বেদনা আছে অথবা অনুভব করেন ? *
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="9"
                    value="1"
                    {...register("bpain")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="9"
                    value="0"
                    {...register("bpain")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.bpain?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 10 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do you have nipple pain? আপনি কি আপনার স্তন বোটায় কোন ব্যাথা /
              বেদনা অনুভব করেন ? *
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="10"
                    value="1"
                    {...register("nippain")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="10"
                    value="0"
                    {...register("nippain")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.nippain?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 11 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do you have nipple retraction / inversion? আপনার স্তন বোটা কি
              সঙ্কোচিত হয়ে ছোট হয়ে গিয়েছে ? *
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="11"
                    value="1"
                    {...register("nipret")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="11"
                    value="0"
                    {...register("nipret")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.nipret?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 12 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do your breast skin have redness or red spot? আপনার স্তনে কি লালচে
              দাগ দেখা যাচ্ছে ? *
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="12"
                    value="1"
                    {...register("bskin")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="12"
                    value="0"
                    {...register("bskin")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.bskin?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 13 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do your breast skin’s texture changes? আপনার স্তনের চামড়া কি
              পরিবর্তন হয়ে যাচ্ছে ? *
            </p>
            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="13"
                    value="1"
                    {...register("btexture")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>

              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="13"
                    value="0"
                    {...register("btexture")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.btexture?.message}
            </p>
          </div>

          <div className="mt-3">
            <legend className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 14 :
            </legend>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Does the lumps node change its position? আপনার স্তনের গিটলী কি
              জায়গা পরিবর্তন করছে ? *
            </p>
            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="14"
                    value="1"
                    {...register("lumpos")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="14"
                    value="0"
                    {...register("lumpos")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.lumpos?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 15 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Do your breast swelling? আপনার স্তন কি স্ফিত অথবা ফুলে যাচ্ছে ? *
            </p>
            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="15"
                    value="1"
                    {...register("bswel")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="15"
                    value="0"
                    {...register("bswel")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>
            <p className="label-text-alt text-red-500 mt-3">
              {errors.bswel?.message}
            </p>
          </div>

          <div className="mt-3">
            <label className="font-[poppins] font-medium text-[16px] text-[#333] ">
              Question 16 :
            </label>
            <p className="font-[poppins] font-semibold text-[18px] text-[#333] flex items-center mt-3 mb-2">
              Have you been diagnosed with breast cancer? আপনার কি স্তন
              ক্যান্সার সনাক্ত হয়েছে? *
            </p>

            <div className="border border-[#f1f1f1] mt-3">
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="16"
                    value="1"
                    {...register("bcanpositive")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    Yes
                  </span>
                </label>
              </div>
              <div>
                <label className="border-b py-3 px-4 flex items-center">
                  <input
                    type="radio"
                    name="16"
                    value="0"
                    {...register("bcanpositive")}
                    className="w-4 h-4"
                  />
                  <span className="font-[poppins] font-normal text-[14px] pl-2 ">
                    No
                  </span>
                </label>
              </div>
            </div>

            <p className="label-text-alt text-red-500 mt-3">
              {errors.bcanpositive?.message}
            </p>
          </div>
        </div>
        <div className="flex justify-end mb-10">
          <button type="submit">
            <div className="w-60 border mt-4  h-12 flex items-center justify-center bg-[#BCA44E] text-[#fff]">
              Submit
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
