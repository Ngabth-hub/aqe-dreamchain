"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/ui/Container";
import StatCard from "@/ui/StatCard";
import Button from "@/ui/Button";

const stats = [
  {
    title: "AQE",
    description: "Digital Real Estate Ecosystem",
  },
  {
    title: "Dubai",
    description: "Al Marjan Island",
  },
  {
    title: "RWA",
    description: "Real World Asset Tokenization",
  },
  {
    title: "Ameritec",
    description: "Global Technology Ecosystem",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#05070A]">

      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/aqe-hero.PNG"
          alt="AQE Digital Real Estate"
          fill
          priority
          className="object-cover"
        />
      </div>


      {/* Dubai Video Layer */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.video
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-full w-full object-cover opacity-30"
        >

          <source
            src="/videos/dubai.mp4"
            type="video/mp4"
          />

        </motion.video>

      </div>


      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#05070A]" />


      {/* Hero Content */}

      <Container className="relative z-10">

        <motion.div
          className="max-w-5xl"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >


          <motion.p
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            transition={{
              delay:0.2
            }}
            className="mb-4 text-sm tracking-[0.45em] text-gray-400 uppercase"
          >
            Global Digital Real Estate Platform
          </motion.p>



          <motion.span
            initial={{
              opacity:0,
              y:20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:0.3
            }}
            className="inline-block rounded-full border border-[#D4AF37]/40 px-5 py-2 text-sm tracking-[0.30em] text-[#D4AF37]"
          >
            AQE DIGITAL EXPERIENCE
          </motion.span>



          <motion.h1
            initial={{
              opacity:0,
              y:40
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:0.4,
              duration:1
            }}
            className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >

            SỞ HỮU

            <br />

            <span className="text-[#D4AF37]">
              GIÁ TRỊ THỰC
            </span>

            <br />

            TRONG KỶ NGUYÊN SỐ

          </motion.h1>



          <motion.p
            initial={{
              opacity:0,
              y:30
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:0.6
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
          >

            Kết nối bất động sản cao cấp với công nghệ blockchain,
            mở ra kỷ nguyên sở hữu tài sản minh bạch, linh hoạt
            và mang tầm nhìn toàn cầu.

          </motion.p>




          <motion.div
            initial={{
              opacity:0,
              y:30
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:0.8
            }}
            className="mt-10 flex flex-wrap gap-4"
          >

            <a href="#project">

              <Button>
                Khám phá AQE
              </Button>

            </a>



            <a href="#contact">

              <Button variant="secondary">
                Liên hệ
              </Button>

            </a>


          </motion.div>





          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((item,index)=>(

              <motion.div
                key={item.title}

                initial={{
                  opacity:0,
                  y:40
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:1 + index * 0.15
                }}
              >

                <StatCard
                  title={item.title}
                  description={item.description}
                />

              </motion.div>

            ))}


          </div>


        </motion.div>


      </Container>




      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y:[0,10,0]
        }}
        transition={{
          duration:2,
          repeat:Infinity
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-xs uppercase tracking-[0.45em] text-gray-400"
      >

        Scroll to Explore

      </motion.div>



    </section>
  );
}