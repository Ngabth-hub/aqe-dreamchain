"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { LeadershipTeam } from "./types";


interface TeamModalProps {

  team: LeadershipTeam | null;

  onClose: () => void;

}



export default function TeamModal({

  team,

  onClose,

}: TeamModalProps) {


  return (

    <AnimatePresence>


      {team && (

        <motion.div

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          exit={{
            opacity:0,
          }}

          onClick={onClose}

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

        >



          <motion.div

            initial={{
              scale:0.9,
              opacity:0,
            }}

            animate={{
              scale:1,
              opacity:1,
            }}

            exit={{
              scale:0.9,
              opacity:0,
            }}

            transition={{
              duration:0.25,
            }}

            onClick={(e) =>
              e.stopPropagation()
            }


            className="
              relative
              max-h-[90vh]
              w-full
              max-w-5xl
              overflow-y-auto
              rounded-3xl
              border
              border-white/10
              bg-[#05070A]
              p-8
              shadow-2xl
            "

          >



            {/* Close Button */}


            <button

              onClick={onClose}

              className="
                absolute
                right-6
                top-6
                flex
                h-10
                w-10
                items-center
                justify-center
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

              ×

            </button>



            {/* Header */}


            <div
              className="
                pr-10
              "
            >


              <h3
                className="
                  text-3xl
                  font-semibold
                  text-white
                "
              >

                {team.department}

              </h3>



              <p
                className="
                  mt-2
                  text-[#D4AF37]
                "
              >

                {team.role}

              </p>



              <p
                className="
                  mt-5
                  max-w-3xl
                  leading-relaxed
                  text-white/60
                "
              >

                {team.description}

              </p>


            </div>



            {/* Members */}


            <div

              className="
                mt-10
                grid
                gap-8
                md:grid-cols-2
              "

            >


              {team.members.map(

                (member,index)=>(


                  <motion.div


                    key={member.name}


                    initial={{
                      opacity:0,
                      y:30,
                    }}


                    animate={{
                      opacity:1,
                      y:0,
                    }}


                    transition={{
                      delay:index * 0.1,
                    }}


                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      p-6
                    "


                  >



                    {/* Avatar */}


                    <div

                      className="
                        relative
                        mx-auto
                        h-36
                        w-36
                        overflow-hidden
                        rounded-full
                        border
                        border-[#D4AF37]/50
                      "

                    >

                      <Image

                        src={member.image}

                        alt={member.name}

                        fill

                        sizes="144px"

                        className="
                          object-cover
                        "

                      />


                    </div>




                    <h4

                      className="
                        mt-6
                        text-center
                        text-xl
                        font-semibold
                        text-white
                      "

                    >

                      {member.name}

                    </h4>




                    <p

                      className="
                        mt-2
                        text-center
                        text-[#D4AF37]
                      "

                    >

                      {member.position}

                    </p>




                    <p

                      className="
                        mt-2
                        text-center
                        text-sm
                        text-white/50
                      "

                    >

                      📍 {member.location}

                    </p>




                    <p

                      className="
                        mt-6
                        border-t
                        border-white/10
                        pt-5
                        text-center
                        italic
                        leading-relaxed
                        text-white/70
                      "

                    >

                      &ldquo;{member.quote}&rdquo;

                    </p>



                  </motion.div>


                )


              )}


            </div>


          </motion.div>


        </motion.div>


      )}


    </AnimatePresence>


  );

}