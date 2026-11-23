"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Container from "@/ui/Container";

import OrganizationCard from "./OrganizationCard";
import TeamModal from "./TeamModal";

import { leadershipTeams } from "./leadership-data";
import { LeadershipTeam } from "./types";



export default function Leadership() {


  const [selectedTeam, setSelectedTeam] =
    useState<LeadershipTeam | null>(null);



  return (

    <section

      id="leadership"

      className="
        bg-[#05070A]
        py-24
      "

    >

      <Container>


        {/* Heading */}


        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="
            mx-auto
            max-w-3xl
            text-center
          "

        >


          <h2

            className="
              text-4xl
              font-semibold
              text-white
              md:text-5xl
            "

          >

            Leadership & Organization

          </h2>



          <p

            className="
              mt-5
              leading-relaxed
              text-white/60
            "

          >

            Những con người đứng sau tầm nhìn
            và sự phát triển của hệ sinh thái AQE.

          </p>


        </motion.div>





        {/* Organization Grid */}



        <div

          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "

        >



          {leadershipTeams.map(

            (team,index)=>(


              <OrganizationCard

                key={team.department}

                team={team}

                index={index}

                onSelect={setSelectedTeam}

              />


            )


          )}



        </div>




      </Container>




      {/* Modal */}



      <TeamModal

        team={selectedTeam}

        onClose={() =>
          setSelectedTeam(null)
        }

      />



    </section>


  );

}