import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function QuesnarisePart() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async  (data) =>{
    console.log(data);
    try {
        const res = await axios.post("https://api.myhealthrow.com/public/api/store", data);
        console.log(res.data);
        console.log("Response:", res.data);
      } catch (error) {
        console.error("Error posting data:", error);
      }
  } 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="number"
            name="bdsl"
            value="1"
            className="input input-bordered w-full max-w-xs rounded-none"
            {...register("bdsl")}
          />
        </div>
        <div>
          <p>
            সচেতনতাই সুরক্ষা: This Questionnaire will be used for an academic
            research purposes. Below question answers may help you and us to
            SAVE more lives.
            <span>
              **Note: Personal identity is not being asked and we are not
              storing any personal information. All general questions are being
              asked.
            </span>
          </p>
        </div>
        <div>
          <label>Question 1 :</label>
          <p class="textStyle">Your Country? আপনার দেশ? *</p>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("country")}
          >
            <option value="Bangladesh" selected>
              Bangladesh
            </option>
            <option value="Bahrain">Bahrain</option>
          </select>
        </div>

        <div>
          <label>Question 2 :</label>
          <p class="textStyle">Your City? আপনার শহর/জেলা? *</p>
          <label>
            <input
              type="radio"
              name="city"
              value="barishal"
              {...register("city")}
            />
            Barishal বরিশাল
          </label>

          <label>
            <input
              type="radio"
              name="city"
              value="chattagram"
              {...register("city")}
            />
            Chattagram চট্টগ্রাম
          </label>
          <label>
            <input
              type="radio"
              name="city"
              value="dhaka"
              {...register("city")}
            />
            Dhaka ঢাকা
          </label>
          <label>
            <input
              type="radio"
              name="city"
              value="khulna"
              {...register("city")}
            />
            Khulna খুলনা
          </label>

          <label>
            <input
              type="radio"
              name="city"
              value="rajshahi"
              {...register("city")}
            />
            Rajshahi রাজশাহী
          </label>
          <label>
            <input
              type="radio"
              name="city"
              value="rangpur"
              {...register("city")}
            />
            Rangpur রংপুর
          </label>
          <label>
            <input
              type="radio"
              name="city"
              value="sylhet"
              {...register("city")}
            />
            Sylhet সিলেট
          </label>

          <label>
            <input
              type="radio"
              name="city"
              value="others"
              {...register("city")}
            />
            Others
          </label>
        </div>

        <div>
          <label>Question 3 :</label>
          <p>Gender? আপনার লিঙ্গ? *</p>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                {...register("gender")}
              />
              Male (পুরুষ)
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                {...register("gender")}
              />
              Female (মহিলা)
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="others"
                {...register("gender")}
              />
              Others (অন্যান্য)
            </label>
          </div>
        </div>

        <div>
          <label>Question 4 :</label>
          <p>Your Age? আপনার বয়স কত? *</p>

          <input
            type="text"
            placeholder=" age"
            name="age"
            className="input input-bordered w-full max-w-xs rounded-none"
            {...register("age", { required: true })}
          />
        </div>

        <div>
          <label>Question 5 :</label>
          <p>
            How frequently do you do the prescreening? আপনি কত সময় পর পর, নিজে
            স্তন ক্যানসার এর প্রাথমিক পরীক্ষা করেন?*
          </p>

          <div>
            <label>
              <input
                type="radio"
                name="monthly"
                value="monthly"
                {...register("chkfreq")}
              />
              Monthly ( প্রতি মাসে)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="quarterly"
                value="quarterly"
                {...register("chkfreq")}
              />
              Quarterly (প্রতি তিন মাসে)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="half Yearly"
                value="half Yearly "
                {...register("chkfreq")}
              />
              Half Yearly (প্রতি ছয় মাসে)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="yearly"
                value=" yearly"
                {...register("chkfreq")}
              />
              Yearly (প্রতি বছরে)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="never"
                value="never"
                {...register("chkfreq")}
              />
              Never (কখনো করিনা)
            </label>
          </div>
        </div>

        <div>
          <label>Question 6 :</label>
          <p>
            Did you identify/noticed any lumps on your breast? আপনি কি আপনার
            স্তনে কোন প্রকার গিটলী অনুভব করেন? *
          </p>
          <div>
            <label>
              <input type="radio" name="6" value="1" {...register("lumps")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="6" value="0" {...register("lumps")} />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Question 7 :</label>
          <p>
            Do your nipple discharge any liquid? আপনার স্তনের বোটা থেকে কি কোন
            তরল বের হয়? *
          </p>
          <div>
            <label>
              <input type="radio" name="7" value="1" {...register("nipdis")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="7" value="0" {...register("nipdis")} />
              No
            </label>
          </div>
        </div>

        <div>
          <legend>Question 8 :</legend>
          <p>
            Do you feel dimpling on your breast? আপনি কি আপনার স্তনের কোন স্থানে
            টোল পরা খেয়াল করেছেন? *
          </p>

          <div>
            <label>
              <input type="radio" name="8" value="1" {...register("dimp")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="8" value="0" {...register("dimp")} />
              No
            </label>
          </div>
        </div>

        <div>
          <legend>Question 9 :</legend>
          <p>
            Do you have or feel any breast pain? আপনি কি আপনার স্তনে কোন ব্যাথা
            / বেদনা আছে অথবা অনুভব করেন ? *
          </p>

          <div>
            <label>
              <input type="radio" name="9" value="1" {...register("bpain")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="9" value="0" {...register("bpain")} />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Question 10 :</label>
          <p class="textStyle">
            Do you have nipple pain? আপনি কি আপনার স্তন বোটায় কোন ব্যাথা / বেদনা
            অনুভব করেন ? *
          </p>

          <div>
            <label>
              <input
                type="radio"
                name="10"
                value="1"
                {...register("nippain")}
              />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="10"
                value="0"
                {...register("nippain")}
              />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Question 11 :</label>
          <p>
            Do you have nipple retraction / inversion? আপনার স্তন বোটা কি
            সঙ্কোচিত হয়ে ছোট হয়ে গিয়েছে ? *
          </p>

          <div>
            <label>
              <input type="radio" name="11" value="1" {...register("nipret")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="11" value="0" {...register("nipret")} />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Question 12 :</label>
          <p>
            Do your breast skin have redness or red spot? আপনার স্তনে কি লালচে
            দাগ দেখা যাচ্ছে ? *
          </p>

          <div>
            <label>
              <input type="radio" name="12" value="1" {...register("bskin")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="12" value="0" {...register("bskin")} />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Question 13 :</label>
          <p>
            Do your breast skin’s texture changes? আপনার স্তনের চামড়া কি
            পরিবর্তন হয়ে যাচ্ছে ? *
          </p>
          <div>
            <label>
              <input
                type="radio"
                name="13"
                value="1"
                {...register("btexture")}
              />
              Yes
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="13"
                value="0"
                {...register("btexture")}
              />
              No
            </label>
          </div>
        </div>

        <div>
          <legend>Question 14 :</legend>
          <p>
            Does the lumps node change its position? আপনার স্তনের গিটলী কি জায়গা
            পরিবর্তন করছে ? *
          </p>

          <div>
            <label>
              <input type="radio" name="14" value="1" {...register("lumpos")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="14" value="0" {...register("lumpos")} />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Question 15 :</label>
          <p>
            Do your breast swelling? আপনার স্তন কি স্ফিত অথবা ফুলে যাচ্ছে ? *
          </p>

          <div>
            <label>
              <input type="radio" name="15" value="1" {...register("bswel")} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="15" value="0" {...register("bswel")} />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Question 16 :</label>
          <p>
            Have you been diagnosed with breast cancer? আপনার কি স্তন ক্যান্সার
            সনাক্ত হয়েছে? *
          </p>

          <div>
            <label>
              <input
                type="radio"
                name="16"
                value="1"
                {...register("bcanpositive")}
              />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="16"
                value="0"
                {...register("bcanpositive")}
              />
              No
            </label>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
