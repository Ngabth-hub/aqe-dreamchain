"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Container from "@/ui/Container";

const leadershipTeams = [
  {
    department: "Executive Board",
    role: "Strategic Leadership",
    description:
      "Định hướng tầm nhìn, chiến lược phát triển và những quyết định quan trọng trong hệ sinh thái AQE.",

    members: [
      {
        name: "Founder & Visionary",
        position: "Founder",
        location: "Global",
        quote:
          "Xây dựng một hệ sinh thái kết nối giá trị thật với tương lai số.",
        image: "/images/team/placeholder-founder.png",
      },
      {
        name: "Chief Executive Officer",
        position: "CEO",
        location: "Global",
        quote:
          "Kiến tạo tăng trưởng bền vững bằng chiến lược và sự minh bạch.",
        image: "/images/team/placeholder-ceo.png",
      },
      {
        name: "Chief Operating Officer",
        position: "COO",
        location: "Global",
        quote:
          "Biến tầm nhìn thành hành động bằng sự kỷ luật và hiệu quả.",
        image: "/images/team/placeholder-coo.png",
      },
      {
        name: "Chief Technology Officer",
        position: "CTO",
        location: "Global",
        quote:
          "Công nghệ là cầu nối giữa tài sản thực và tương lai số.",
        image: "/images/team/placeholder-cto.png",
      },
    ],
  },


  {
    department: "Business Development",
    role: "Growth & Partnership",

    description:
      "Mở rộng mạng lưới đối tác, khách hàng và cơ hội phát triển AQE trên thị trường toàn cầu.",

    members: [
      {
        name: "Business Director",
        position: "Business Development",
        location: "Global",
        quote:
          "Mỗi mối quan hệ bền vững bắt đầu từ sự tin tưởng.",
        image: "/images/team/placeholder-business.png",
      },
    ],
  },


  {
    department: "Technology & Innovation",
    role: "Digital Transformation",

    description:
      "Xây dựng nền tảng công nghệ giúp AQE kết nối bất động sản thực với nền kinh tế số.",

    members: [
      {
        name: "Technology Leadership",
        position: "Innovation Team",
        location: "Global",
        quote:
          "Đổi mới để tạo ra trải nghiệm sở hữu mới.",
        image: "/images/team/placeholder-tech.png",
      },
    ],
  },
];


export default function Leadership() {

  const [selectedTeam, setSelectedTeam] =
    useState<any | null>(null);

  return (

    <section
      id="leadership"
      className="relative overflow-hidden bg-[#05070A] py-28"
    >

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute
          left-1/4
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[130px]
        " />

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

            <p className="
              text-sm
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
            ">
              LEADERSHIP
            </p>


            <h2 className="
              mt-5
              text-4xl
              font-semibold
              text-white
              md:text-5xl
            ">

              Những người đứng sau

              <span className="block text-[#D4AF37]">
                tầm nhìn AQE
              </span>

            </h2>


            <p className="
              mt-6
              text-lg
              leading-relaxed
              text-white/70
            ">

              AQE được xây dựng bởi những con người cùng chung
              một tầm nhìn: kết nối tài sản thực, công nghệ số 
              và những giá trị bền vững trong nền kinh tế toàn cầu.

            </p>


          </motion.div>





          {/* Cards */}

          <div className="
            mt-16
            grid
            gap-8
            md:grid-cols-3
          ">


{leadershipTeams.map((team, index) => (

<motion.div

  key={team.department}

  initial={{
    opacity: 0,
    y: 40
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
    group
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    transition
    hover:border-[#D4AF37]/40
  "

>

  {/* Team Preview */}

  <div className="
    relative
    flex
    h-[260px]
    items-center
    justify-center
    bg-[#05070A]
  ">


    <div className="
      flex
      -space-x-5
    ">

      {team.members.slice(0,5).map((member)=>(

        <div
          key={member.name}
          className="
            relative
            h-20
            w-20
            overflow-hidden
            rounded-full
            border
            border-[#D4AF37]/40
            bg-black
          "
        >

          <Image

            src={member.image}

            alt={member.name}

            fill

            className="
              object-cover
            "

          />

        </div>

      ))}

    </div>


  </div>


  {/* Content */}

  <div className="p-7">


    <h3 className="
      text-2xl
      font-semibold
      text-white
    ">

      {team.department}

    </h3>


    <p className="
      mt-2
      text-[#D4AF37]
    ">

      {team.role}

    </p>


    <p className="
      mt-4
      leading-relaxed
      text-white/65
    ">

      {team.description}

    </p>


    <p className="
      mt-5
      text-sm
      text-white/50
    ">

      {team.members.length} Members

    </p>


  </div>


</motion.div>

))}


          </div>




          {/* Closing */}

          <div className="mt-20 text-center">

            <p className="
              text-3xl
              font-semibold
              text-white
            ">

              Building The Future

              <span className="text-[#D4AF37]">
                {" "} WITH VISION, TRUST & INNOVATION
              </span>

            </p>


          </div>



        </div>


      </Container>




      {/* Image Modal */}

            <AnimatePresence>

{
selectedTeam && (

<motion.div

initial={{
 opacity:0
}}

animate={{
 opacity:1
}}

exit={{
 opacity:0
}}

className="
 fixed
 inset-0
 z-50
 flex
 items-center
 justify-center
 bg-black/90
 p-6
"

onClick={() =>
 setSelectedTeam(null)
}

>


<motion.div

initial={{
 scale:0.9
}}

animate={{
 scale:1
}}

exit={{
 scale:0.9
}}

className="
 max-h-[90vh]
 w-full
 max-w-5xl
 overflow-y-auto
 rounded-3xl
 border
 border-white/10
 bg-[#05070A]
 p-8
"

onClick={(e)=>
 e.stopPropagation()
}

>


<button

onClick={() =>
 setSelectedTeam(null)
}

className="
 absolute
 right-8
 top-6
 text-3xl
 text-white
"

>

<button

onClick={() =>
setSelectedTeam(null)
}

className="
absolute
right-6
top-6
h-10
w-10
rounded-full
border
border-white/20
text-xl
text-white
transition
hover:border-[#D4AF37]
hover:text-[#D4AF37]
"

>

</button>

</button>



<h3 className="
 text-3xl
 font-semibold
 text-white
">

{selectedTeam.department}

</h3>


<p className="
 mt-2
 text-[#D4AF37]
">

{selectedTeam.role}
<p className="
mt-5
max-w-3xl
text-white/60
leading-relaxed
">

{selectedTeam.description}

</p>



<div className="
 mt-10
 grid
 gap-8
 md:grid-cols-2
">


{
{selectedTeam.members.map(
  (member:any, index:number)=>(
  
  <motion.div
  
  key={member.name}
  
  initial={{
   opacity:0,
   y:30
  }}
  
  animate={{
   opacity:1,
   y:0
  }}
  
  transition={{
   delay:index * 0.12
  }}
  
  className="
   group
   rounded-3xl
   border
   border-white/10
   bg-white/5
   p-6
   backdrop-blur-xl
   hover:border-[#D4AF37]/40
   transition
  "
  
  >
  
  
  {/* Avatar */}
  
  <div className="
  relative
  mx-auto
  h-36
  w-36
  overflow-hidden
  rounded-full
  border
  border-[#D4AF37]/40
  "
  
  >
  
  <Image
  
  src={member.image}
  
  alt={member.name}
  
  fill
  
  sizes="144px"
  
  className="
  object-cover
  transition
  duration-500
  group-hover:scale-105
  "
  
  />
  
  </div>
  
  
  
  {/* Name */}
  
  <h4 className="
  mt-6
  text-center
  text-xl
  font-semibold
  text-white
  ">
  
  {member.name}
  
  </h4>
  
  
  
  {/* Position */}
  
  <p className="
  mt-2
  text-center
  text-[#D4AF37]
  ">
  
  {member.position}
  
  </p>
  
  
  
  {/* Location */}
  
  <p className="
  mt-2
  text-center
  text-sm
  text-white/50
  ">
  
  📍 {member.location}
  
  </p>
  
  
  
  {/* Quote */}
  
  <div className="
  mt-6
  border-t
  border-white/10
  pt-5
  "
  
  >
  
  <p className="
  text-center
  italic
  leading-relaxed
  text-white/70
  ">
  
  "{member.quote}"
  
  </p>
  
  </div>
  
  
  </motion.div>
  
  ))}


<div

key={member.name}

className="
 rounded-3xl
 border
 border-white/10
 bg-white/5
 p-6
"

>


<div className="
 relative
 h-40
 w-40
 overflow-hidden
 rounded-full
"

>

<Image

src={member.image}

alt={member.name}

fill

className="
 object-cover
"

/>

</div>



<h4 className="
 mt-5
 text-xl
 font-semibold
 text-white
">

{member.name}

</h4>



<p className="
 text-[#D4AF37]
">

{member.position}

</p>


<p className="
 mt-2
 text-sm
 text-white/60
">

{member.location}

</p>



<p className="
 mt-4
 italic
 text-white/70
">

"{member.quote}"

</p>


</div>


)

)

}


</div>


</motion.div>


</motion.div>

)

}

</AnimatePresence>
    </section>

  );
}