"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Container from "@/ui/Container";

const questions = [
  {
    question: "AQE là gì?",
    answer:
      "AQE là hệ sinh thái bất động sản số kết hợp giữa tài sản thực, công nghệ blockchain và mô hình Real World Asset (RWA), hướng tới việc kết nối bất động sản toàn cầu trong kỷ nguyên số.",
  },
  {
    question: "RWA Tokenization là gì?",
    answer:
      "RWA Tokenization là quá trình ứng dụng công nghệ blockchain để số hóa các tài sản thực như bất động sản, giúp tăng tính minh bạch, khả năng quản lý và mở rộng cơ hội tiếp cận.",
  },
  {
    question: "HEWE HOTEL & CLUB nằm ở đâu?",
    answer:
      "HEWE HOTEL & CLUB tọa lạc tại Al Marjan Island, Ras Al Khaimah, UAE – một khu vực đang phát triển mạnh về du lịch cao cấp và bất động sản quốc tế.",
  },
  {
    question: "AQE có chỉ là một dự án bất động sản không?",
    answer:
      "Không. AQE hướng tới xây dựng một hệ sinh thái toàn cầu kết hợp bất động sản, công nghệ số, giải pháp tài chính và phong cách sống hiện đại.",
  },
  {
    question: "Làm thế nào để tìm hiểu thêm về AQE?",
    answer:
      "Bạn có thể liên hệ trực tiếp với đội ngũ AQE để nhận thông tin chi tiết về hệ sinh thái, dự án và các cơ hội hợp tác trong tương lai.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#05070A] py-28"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-20 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
      </div>


      <Container>

        <div className="relative z-10">


          {/* Heading */}
          <motion.div

            initial={{
              opacity:0,
              y:30
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.8
            }}

            className="mx-auto max-w-3xl text-center"

          >

            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              FAQ
            </p>


            <h2 className="mt-5 text-4xl font-semibold text-white md:text-5xl">

              Những câu hỏi

              <span className="block text-[#D4AF37]">
                thường gặp về AQE
              </span>

            </h2>


            <p className="mt-6 text-lg text-white/70">

              Những thông tin quan trọng giúp bạn hiểu rõ hơn về
              hệ sinh thái bất động sản số AQE.

            </p>


          </motion.div>





          {/* Accordion */}

          <div className="mx-auto mt-16 max-w-4xl space-y-5">


            {questions.map((item, index) => (

              <motion.div

                key={item.question}

                initial={{
                  opacity:0,
                  y:20
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:0.5,
                  delay:index * 0.1
                }}

                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "

              >


                <button

                  onClick={() =>
                    setActive(active === index ? null : index)
                  }

                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    p-7
                    text-left
                  "

                >

                  <span className="text-lg font-medium text-white">

                    {item.question}

                  </span>


                  <span
                    className="
                      text-2xl
                      text-[#D4AF37]
                    "
                  >

                    {active === index ? "−" : "+"}

                  </span>


                </button>




                {active === index && (

                  <motion.div

                    initial={{
                      opacity:0,
                      height:0
                    }}

                    animate={{
                      opacity:1,
                      height:"auto"
                    }}

                    transition={{
                      duration:0.3
                    }}

                    className="
                      border-t
                      border-white/10
                      px-7
                      pb-7
                      pt-5
                    "

                  >

                    <p className="leading-relaxed text-white/65">

                      {item.answer}

                    </p>


                  </motion.div>

                )}


              </motion.div>


            ))}


          </div>


        </div>

      </Container>


    </section>
  );
}