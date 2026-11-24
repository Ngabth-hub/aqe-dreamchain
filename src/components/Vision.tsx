"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/ui/Container";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#05070A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              AQE Digital Experience
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Tầm nhìn kiến tạo
              <span className="block text-[#D4AF37]">
                hệ sinh thái bất động sản số toàn cầu
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              AQE hướng tới việc kết nối bất động sản cao cấp, công nghệ
              blockchain và tài sản số để tạo ra một hệ sinh thái đầu tư
              minh bạch, hiện đại và bền vững.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Thông qua mô hình token hóa bất động sản (RWA), AQE mở ra cơ hội
              tiếp cận các dự án đẳng cấp quốc tế, nơi giá trị thật được kết nối
              với công nghệ tương lai.
            </p>

            {/* Vision Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-[#D4AF37]">
                  Dubai
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Trung tâm bất động sản cao cấp toàn cầu
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-[#D4AF37]">
                  RWA
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Token hóa tài sản thực trên nền tảng số
                </p>
              </div>

            </div>
          </motion.div>


          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

              <Image
                src="/images/vision/digital-city.png"
                alt="AQE Digital City"
                width={800}
                height={600}
                className="rounded-2xl object-cover"
              />

            </div>


            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 w-[55%] overflow-hidden rounded-3xl border border-white/10 bg-[#05070A]/80 p-3 backdrop-blur-xl"
            >

              <Image
                src="/images/vision/dubai-future.png"
                alt="Dubai Future City"
                width={500}
                height={400}
                className="rounded-2xl object-cover"
              />

            </motion.div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}