import React from "react";
import aboutImg from "../../assets/about.png";
import { Link } from 'react-router-dom';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 text-justify">
              Integrated Platform for Solar Energy Prediction and Visualization
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-justify">
              Our solution offers an integrated platform enabling efficient data import, followed by advanced data preprocessing, achievable in real-time or offline. 
              We specialize in precise solar energy prediction, providing relevant analyses and impactful visualizations to facilitate decision-making. 
              Additionally, our system automatically generates detailed reports for each operation, offering complete transparency and traceability throughout the process. 
              With our solution, optimize your energy operations confidently and efficiently.
            </p>
            <Link to="/register">
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey block" style={{ marginLeft: '230px' }}>
                Learn more
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
              The Essential Ally in the <br /> <span className="text-brandPrimary">Energy Revolution</span>
            </h2>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/group.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">4</h4>
                  <p>Researchers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/developpement-web.png" alt="" width="60" height="60" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">3</h4>
                  <p>Developers</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/ai.png" alt="" width="50" height="50" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">9</h4>
                  <p>AI Models</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/panneaux-solaires.png" alt="" width="50" height="50" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">22</h4>
                  <p>Solar Panels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
