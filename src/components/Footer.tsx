"use client";

import { motion } from "framer-motion";

import Container from "@/ui/Container";


const navigation = [
  {
    name: "Trang chủ",
    href: "#",
  },
  {
    name: "Tầm nhìn",
    href: "#vision",
  },
  {
    name: "AQ Estate",
    href: "#why-aqe",
  },
  {
    name: "Dự án",
    href: "#project",
  },
  {
    name: "Đội ngũ",
    href: "#leadership",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Liên hệ",
    href: "#contact",
  },
];


export default function Footer() {

  return (

    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#05070A]
        py-16
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
            y: 30,
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
            md:grid-cols-3
          "

        >


          {/* BRAND */}

          <div>

            <h2
              className="
                text-4xl
                font-bold
                tracking-[0.2em]
                text-white
              "
            >
              AQE
            </h2>


            <p
              className="
                mt-5
                max-w-sm
                leading-relaxed
                text-white/60
              "
            >
              Real Estate Meets Future.
              Kiến tạo hệ sinh thái bất động sản số
              toàn cầu bằng công nghệ và giá trị thật.
            </p>


          </div>





          {/* NAVIGATION */}

          <div>

            <h3
              className="
                text-lg
                font-semibold
                text-[#D4AF37]
              "
            >
              Navigation
            </h3>


            <ul className="mt-5 space-y-3">


              {navigation.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="
                      text-white/60
                      transition
                      hover:text-white
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}


            </ul>


          </div>







          {/* CONTACT */}

          <div>


            <h3
              className="
                text-lg
                font-semibold
                text-[#D4AFG37]
              "
            >
              Contact
            </h3>


            <div
              className="
                mt-5
                space-y-5
                text-white/60
              "
            >


              <div>

                <p className="text-[#D4AF37]">
                  Location
                </p>

                <p className="mt-1">
                  Dubai, United Arab Emirates
                </p>

              </div>




              <div>

                <p className="text-[#D4AF37]">
                  Website
                </p>

                <a
                  href="https://aqestate.net"
                  target="_blank"
                  className="
                    transition
                    hover:text-white
                  "
                >
                  aqestate.net
                </a>

              </div>




              <div>

                <p className="text-[#D4AF37]">
                  Email
                </p>

                <a
                  href="mailto:dreamchainteam@gmail.com"
                  className="
                    transition
                    hover:text-white
                  "
                >
                  dreamchainteam@gmail.com
                </a>

              </div>




              <div>

                <p className="text-[#D4AF37]">
                  Ecosystem
                </p>

                <p className="mt-1">
                  Real Estate • Technology • Future
                </p>

              </div>



            </div>


          </div>



        </motion.div>






        {/* COPYRIGHT */}

        <div

          className="
            relative
            z-10
            mt-14
            border-t
            border-white/10
            pt-8
            text-center
            text-sm
            text-white/40
          "

        >

          © 2026 AQE. All Rights Reserved.

        </div>



      </Container>


    </footer>

  );

}