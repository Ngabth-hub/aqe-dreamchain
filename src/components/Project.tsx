"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/ui/Container";

const highlights = [
  {
    title: "Real Asset Value",
    description:
      "HEWE HOTEL & CLUB đại diện cho giá trị tài sản thực, nơi nền tảng bất động sản kết hợp cùng tiềm năng phát triển dài hạn.",
  },
  {
    title: "Strategic Location",
    description:
      "Tọa lạc tại Al Marjan Island, Ras Al Khaimah – khu vực đang phát triển với định hướng trở thành điểm đến quốc tế mới.",
  },
  {
    title: "Digital Experience",
    description:
      "AQE ứng dụng công nghệ số để kết nối tài sản thực với những trải nghiệm sở hữu hiện đại trong kỷ nguyên mới.",
  },
  {
    title: "Future Ecosystem",
    description:
      "Không chỉ là một dự án bất động sản, HEWE là một phần trong tầm nhìn xây dựng hệ sinh thái giá trị tương lai.",
  },
];

export default function Project() {
  return (
    <section
      id="project"
      className="relative overflow-hidden bg-[#05070A] py-28"
    >

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/4 top-20 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
      </div>


      <Container>

        <div className="relative z-10">


          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              FEATURED PROJECT
            </p>


            <h2 className="mt-5 text-4xl font-semibold text-white md:text-5xl">

              HEWE HOTEL & CLUB

              <span className="block text-[#D4AF37]">
                A New Vision of Digital Real Estate
              </span>

            </h2>


            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Một dự án bất động sản nghỉ dưỡng thế hệ mới tại Al Marjan Island,
              nơi giá trị tài sản thực kết hợp cùng công nghệ số và
              tầm nhìn phát triển toàn cầu.
            </p>

          </motion.div>



          {/* Main Image */}
          <motion.div

            initial={{ opacity: 0, scale: 0.95 }}

            whileInView={{ opacity: 1, scale: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 0.8 }}

            className="relative mt-16 overflow-hidden rounded-3xl border border-white/10"

          >

            <Image

              src="/images/project/hewe-main.png"

              alt="HEWE Hotel and Club"

              width={1400}

              height={900}

              className="h-[500px] w-full object-cover"

            />


            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#05070A]
              via-transparent
              to-transparent
            " />



            <div className="
              absolute
              bottom-8
              left-8
            ">

              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Ras Al Khaimah - UAE
              </p>


              <h3 className="mt-3 text-3xl font-semibold text-white">
                Where Luxury Meets Future
              </h3>

            </div>


          </motion.div>




          {/* Highlights */}

          <div className="mt-14 grid gap-6 md:grid-cols-2">


            {highlights.map((item, index) => (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 30
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.15
                }}

                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-xl
                "

              >

                <h3 className="text-xl font-semibold text-[#D4AF37]">
                  {item.title}
                </h3>


                <p className="mt-3 leading-relaxed text-white/65">
                  {item.description}
                </p>


              </motion.div>

            ))}


          </div>




          {/* Closing */}

          <motion.div

            initial={{
              opacity:0
            }}

            whileInView={{
              opacity:1
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.8
            }}

            className="mt-20 text-center"

          >

            <p className="text-3xl font-semibold text-white">

              AQE × HEWE

              <span className="block mt-3 text-[#D4AF37]">
                TÀI SẢN THỰC TRONG TƯƠNG LAI SỐ
              </span>

            </p>


          </motion.div>



        </div>

      </Container>


    </section>
  );
}