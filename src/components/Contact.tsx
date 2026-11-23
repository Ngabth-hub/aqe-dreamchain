"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Container from "@/ui/Container";


const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzZqEIw6Qv80grLO7rXXWmzh65S6mmgTFjpedHDWDFX709r2JHknRePTmx0Y-X97fMviA/exec";


export default function Contact() {

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");


  const [formData, setFormData] = useState({

    fullName: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    referrer: "",
    source: "",
    message: "",

  });



  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    setLoading(true);

    setStatus("");



    try {

      await fetch(
        SCRIPT_URL,
        {

          method: "POST",

          mode: "no-cors",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify(formData),

        }
      );



      setStatus(
        "Cảm ơn bạn. AQE sẽ liên hệ trong thời gian sớm nhất."
      );



      setFormData({

        fullName: "",
        email: "",
        phone: "",
        country: "",
        interest: "",
        referrer: "",
        source: "",
        message: "",

      });



    } catch {

      setStatus(
        "Có lỗi xảy ra. Vui lòng thử lại."
      );

    }



    setLoading(false);

  };




  return (

    <section

      id="contact"

      className="
        relative
        overflow-hidden
        bg-[#05070A]
        py-28
      "

    >


      {/* Background Glow */}

      <div

        className="
          absolute
          left-1/2
          top-0
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "

      />



      <Container>


        <motion.div

          initial={{

            opacity: 0,

            y: 40,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

          }}

          transition={{

            duration: 0.8,

          }}

          className="
            relative
            z-10
            grid
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
          "

        >



          {/* INFORMATION */}

          <div>


            <p

              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#D4AF37]
              "

            >

              Contact AQE

            </p>



            <h2

              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-white
                md:text-5xl
              "

            >

              Kết nối cùng

              <br />

              <span className="text-[#D4AF37]">

                Hệ sinh thái AQE

              </span>


            </h2>



            <p

              className="
                mt-6
                max-w-xl
                leading-relaxed
                text-white/60
              "

            >

              AQE Digital Experience kết nối

              bất động sản thực, công nghệ

              hiện đại và những giá trị

              toàn cầu bền vững.


            </p>


            <div

              className="
                mt-10
                space-y-6
                text-white/70
              "

            >


              <div>

                <p className="text-[#D4AF37]">

                  Location

                </p>

                <p>

                  Dubai, United Arab Emirates

                </p>

              </div>



              <div>

                <p className="text-[#D4AF37]">

                  Website

                </p>

                <p>

                  aqestate.net

                </p>

              </div>



              <div>

                <p className="text-[#D4AF37]">

                  Email

                </p>

                <p>

                  dreamchainteam@gmail.com

                </p>

              </div>



            </div>


          </div>
                    {/* FORM */}

                    <form

onSubmit={handleSubmit}

className="
  rounded-3xl
  border
  border-white/10
  bg-white/[0.03]
  p-8
  shadow-2xl
  backdrop-blur-xl
  md:p-10
"

>


<h3

  className="
    text-2xl
    font-semibold
    text-white
  "

>

  Đăng ký nhận thông tin AQE

</h3>



<p

  className="
    mt-3
    text-sm
    leading-relaxed
    text-white/50
  "

>

  Để lại thông tin của bạn,
  đội ngũ AQE sẽ liên hệ và
  cung cấp thông tin dự án.

</p>




<div

  className="
    mt-8
    space-y-5
  "

>



  <input

    required

    name="fullName"

    value={formData.fullName}

    onChange={handleChange}

    placeholder="Họ và tên"

    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-black/30
      px-5
      py-4
      text-sm
      text-white
      outline-none
      transition
      placeholder:text-white/40
      focus:border-[#D4AF37]
    "

  />




  <div

    className="
      grid
      gap-5
      md:grid-cols-2
    "

  >

    <input

      required

      name="email"

      value={formData.email}

      onChange={handleChange}

      placeholder="Email"

      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-sm
        text-white
        outline-none
        transition
        placeholder:text-white/40
        focus:border-[#D4AF37]
      "

    />



    <input

      name="phone"

      value={formData.phone}

      onChange={handleChange}

      placeholder="Số điện thoại"

      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        text-sm
        text-white
        outline-none
        transition
        placeholder:text-white/40
        focus:border-[#D4AF37]
      "

    />


  </div>





  <input

    name="country"

    value={formData.country}

    onChange={handleChange}

    placeholder="Quốc gia"

    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-black/30
      px-5
      py-4
      text-sm
      text-white
      outline-none
      transition
      placeholder:text-white/40
      focus:border-[#D4AF37]
    "

  />





  <select

    name="interest"

    value={formData.interest}

    onChange={handleChange}

    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-black/30
      px-5
      py-4
      text-sm
      text-white
      outline-none
      focus:border-[#D4AF37]
    "

  >

    <option value="">

      Bạn quan tâm đến điều gì?

    </option>


    <option value="AQE Real Estate">

      AQE Real Estate

    </option>


    <option value="HEWE Hotel Club">

      HEWE Hotel Club

    </option>


    <option value="RWA Tokenization">

      Tokenization / RWA

    </option>


  </select>





  <input

    name="referrer"

    value={formData.referrer}

    onChange={handleChange}

    placeholder="Người giới thiệu bạn biết đến Dự án này?"

    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-black/30
      px-5
      py-4
      text-sm
      text-white
      outline-none
      transition
      placeholder:text-white/40
      focus:border-[#D4AF37]
    "

  />





  <select

    name="source"

    value={formData.source}

    onChange={handleChange}

    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-black/30
      px-5
      py-4
      text-sm
      text-white
      outline-none
      focus:border-[#D4AF37]
    "

  >

    <option value="">

      Bạn biết đến AQE từ nguồn nào?

    </option>


    <option>

      Website AQE

    </option>


    <option>

      Facebook

    </option>


    <option>

      YouTube

    </option>


    <option>

      TikTok

    </option>


    <option>

      Bạn bè giới thiệu

    </option>


    <option>

      Khác

    </option>


  </select>





  <textarea

    name="message"

    value={formData.message}

    onChange={handleChange}

    rows={5}

    placeholder="Lời nhắn của bạn"

    className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-black/30
      px-5
      py-4
      text-sm
      text-white
      outline-none
      transition
      placeholder:text-white/40
      focus:border-[#D4AF37]
    "

  />



</div>





<button

  disabled={loading}

  className="
    mt-8
    w-full
    rounded-xl
    bg-[#D4AF37]
    py-4
    font-semibold
    text-black
    transition
    hover:opacity-90
    disabled:opacity-50
  "

>

  {loading
    ? "Đang gửi..."
    : "Gửi thông tin"
  }


</button>




{status && (

  <p

    className="
      mt-5
      text-sm
      text-[#D4AF37]
    "

  >

    {status}

  </p>

)}



</form>


</motion.div>


</Container>


</section>

);

}