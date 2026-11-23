"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { LeadershipTeam } from "./types";


interface OrganizationCardProps {
  team: LeadershipTeam;
  index: number;
  onSelect: (team: LeadershipTeam) => void;
}


export default function OrganizationCard({
  team,
  index,
  onSelect,
}: OrganizationCardProps) {


  return (

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
        duration: 0.5,
        delay: index * 0.12,
      }}

      onClick={() => onSelect(team)}

      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition
        hover:border-[#D4AF37]/50
        hover:bg-white/10
      "

    >


      {/* Avatar Preview */}

      <div

        className="
          flex
          h-64
          items-center
          justify-center
          bg-black/30
        "

      >

        <div className="flex -space-x-5">


          {team.members
            .slice(0, 4)
            .map((member) => (

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
                  transition
                  duration-300
                  group-hover:scale-105
                "

              >

                <Image

                  src={member.image}

                  alt={member.name}

                  fill

                  sizes="80px"

                  className="
                    object-cover
                  "

                />

              </div>

            ))}



          {team.members.length > 4 && (

            <div

              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/40
                bg-[#0B0E13]
                text-lg
                font-semibold
                text-[#D4AF37]
              "

            >

              +{team.members.length - 4}

            </div>

          )}


        </div>


      </div>



      {/* Content */}

      <div className="p-6">


        <h3

          className="
            text-xl
            font-semibold
            text-white
          "

        >

          {team.department}

        </h3>



        <p

          className="
            mt-2
            text-sm
            text-[#D4AF37]
          "

        >

          {team.role}

        </p>



        <p

          className="
            mt-4
            leading-relaxed
            text-white/60
          "

        >

          {team.description}

        </p>



        <div

          className="
            mt-6
            flex
            items-center
            justify-between
          "

        >


          <span

            className="
              text-sm
              text-white/50
            "

          >

            👥 {team.members.length} Members

          </span>



          <span

            className="
              text-sm
              text-[#D4AF37]
              transition
              group-hover:translate-x-1
            "

          >

            View Team →

          </span>


        </div>


      </div>


    </motion.div>

  );

}