"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";


const stats = [
  {
    number: 5,
    suffix: "+",
    label: "ML Projects Deployed",
  },
  {
    number: 5,
    suffix: "",
    label: "Production Applications",
  },
  {
    number: 20,
    suffix: "+",
    label: "Technologies Used",
  },
  {
    number: 100,
    suffix: "%",
    label: "Responsive Design",
  },
];


const expertise = [
  {
    icon: FaBrain,
    title: "Machine Learning",
    description:
      "Regression, Classification, Clustering, Fraud Detection, Feature Engineering and Model Evaluation.",
  },

  {
    icon: FaCode,
    title: "Software Development",
    description:
      "Python, FastAPI, Next.js, React, TypeScript and REST API development.",
  },

  {
    icon: FaDatabase,
    title: "Data Analysis",
    description:
      "Data cleaning, exploration, visualization and extracting insights from datasets.",
  },

  {
    icon: FaServer,
    title: "Deployment",
    description:
      "Git, GitHub, Render, Vercel and deploying machine learning applications.",
  },
];


export default function About() {

  return (

    <section
      id="about"
      className="
      bg-white
      py-24
      dark:bg-slate-950
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.6
          }}

          className="
          mb-16
          text-center
          "

        >

          <h2
            className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            About Me
          </h2>


          <p
            className="
            mx-auto
            mt-5
            max-w-3xl
            text-lg
            text-slate-600
            dark:text-slate-300
            "
          >
            I am a Machine Learning Engineer focused on building
            practical AI solutions. I develop end-to-end applications
            from data preparation and model training to API development
            and cloud deployment.
          </p>


        </motion.div>



        <div
          className="
          grid
          gap-12
          lg:grid-cols-2
          "
        >



          {/* Expertise */}

          <div
            className="
            space-y-7
            "
          >

            {
              expertise.map((item,index)=>{

                const Icon = item.icon;

                return (

                  <motion.div

                    key={item.title}

                    initial={{
                      opacity:0,
                      x:-40
                    }}

                    whileInView={{
                      opacity:1,
                      x:0
                    }}

                    viewport={{
                      once:true
                    }}

                    transition={{
                      delay:index * 0.15
                    }}

                    className="
                    flex
                    gap-5
                    "
                  >

                    <Icon
                      className="
                      mt-1
                      text-3xl
                      text-blue-600
                      "
                    />


                    <div>

                      <h3
                        className="
                        text-xl
                        font-semibold
                        text-slate-900
                        dark:text-white
                        "
                      >
                        {item.title}
                      </h3>


                      <p
                        className="
                        mt-2
                        text-slate-600
                        dark:text-slate-300
                        "
                      >
                        {item.description}
                      </p>

                    </div>


                  </motion.div>

                );

              })
            }


          </div>





          {/* Statistics */}

          <div
            className="
            grid
            grid-cols-2
            gap-6
            "
          >

            {
              stats.map((stat,index)=>(

                <motion.div

                  key={stat.label}

                  initial={{
                    opacity:0,
                    scale:0.8
                  }}

                  whileInView={{
                    opacity:1,
                    scale:1
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    delay:index * 0.15
                  }}


                  className="
                  rounded-2xl
                  bg-slate-50
                  p-8
                  text-center
                  shadow-sm
                  dark:bg-slate-900
                  "
                >

                  <h3
                    className="
                    text-4xl
                    font-bold
                    text-blue-600
                    "
                  >

                    <CountUp
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix}
                    />

                  </h3>


                  <p
                    className="
                    mt-3
                    text-slate-600
                    dark:text-slate-300
                    "
                  >
                    {stat.label}
                  </p>


                </motion.div>

              ))
            }


          </div>


        </div>


      </div>


    </section>

  );
}