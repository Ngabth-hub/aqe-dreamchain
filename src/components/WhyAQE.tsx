"use client";

import { motion } from "framer-motion";

import Container from "@/ui/Container";

const features = [
  {
    number: "01",
    title: "Real Asset",
    subtitle: "Tài sản thật – Giá trị thật",
    description:
      "AQE bắt đầu từ những tài sản thực có nền tảng rõ ràng, hướng đến việc tạo dựng giá trị bền vững trong dài hạn.",
  },
  {
    number: "02",
    title: "Digital Transparency",
    subtitle: "Minh bạch trong kỷ nguyên số",
    description:
      "Công nghệ số giúp tăng cường tính minh bạch, khả năng kết nối và hiệu quả trong việc quản lý tài sản.",
  },
  {
    number: "03",
    title: "RWA Tokenization",
    subtitle: "Kết nối tài sản thực với nền kinh tế số",
    description:
      "AQE hướng đến việc kết nối bất động sản truyền thống với các giải pháp kỹ thuật số, mở ra những phương thức tiếp cận mới trong tương lai.",
  },
  {
    number: "04",
    title: "Global Ecosystem",
    subtitle: "Hệ sinh thái toàn cầu",
    description:
      "AQE hướng tới một hệ sinh thái kết hợp bất động sản, công nghệ và những giải pháp đổi mới nhằm tạo ra giá trị dài hạn.",
  },
];

export default function WhyAQE() {
  return (
    <section
      id="why-aqe"
      className="relative overflow-hidden bg-[#05070A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-20 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
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
  WHY AQ ESTATE
</p>

<h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
  XÂY DỰNG TƯƠNG LAI
  <span className="block text-[#D4AF37]">
    TRÊN NHỮNG GIÁ TRỊ THỰC
  </span>
</h2>

<p className="mt-6 text-lg leading-relaxed text-white/70">
  AQ Estate tin rằng tương lai của bất động sản không chỉ nằm ở
  việc sở hữu tài sản, mà còn ở cách công nghệ giúp kết nối,
  quản lý và mở rộng những giá trị đó một cách hiệu quả hơn.
</p>
          </motion.div>


          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {features.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                  hover:border-[#D4AF37]/40
                "
              >

                <div className="flex items-start gap-6">

                  <span className="
                    text-5xl
                    font-bold
                    text-[#D4AF37]/40
                    transition
                    group-hover:text-[#D4AF37]
                  ">
                    {item.number}
                  </span>


                  <div>

                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[#D4AF37]">
                      {item.subtitle}
                    </p>

                    <p className="mt-4 leading-relaxed text-white/65">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>


          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="
              text-2xl
              font-semibold
              tracking-wide
              text-white
              md:text-4xl
            ">
              AQE =
<span className="mx-2 text-[#D4AF37]">
  Bất động sản cao cấp
</span>
+
<span className="mx-2 text-[#D4AF37]">
  Công nghệ số
</span>
+
<span className="mx-2 text-[#D4AF37]">
  Tầm nhìn toàn cầu
</span>
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}