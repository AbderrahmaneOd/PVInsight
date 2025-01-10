import React from 'react';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const Blog = () => {
    const blogs = [
        { id: 2, title: "Users have control to customize the preprocessing of their data.", image: "/src/assets/dash3.jpeg" },
        { id: 3, title: "We provide users with visualization tools to facilitate their decision-making process.", image: "/src/assets/dash2.jpeg" },
        { id: 4, title: "We offer users prediction models to help them make strategic and informed decisions.", image: "/src/assets/dash1.jpeg" }
    ];

    return (
        <div className="px-6 lg:px-20 max-w-screen-2xl mx-auto my-16" id="solutions">
            {/* Header */}
            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="text-center md:w-2/3 mx-auto"
            >
                <h2 className="text-4xl text-gray-800 font-bold mb-6">Our Solutions</h2>
                <p className="text-lg text-gray-600">
                    Explore our range of tools and services designed to empower your decision-making process.
                </p>
            </motion.div>

            {/* Blog Grid */}
            <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-12"
            >
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        {/* Blog Image */}
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-60 object-cover"
                        />
                        {/* Blog Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-medium text-center text-gray-800 mb-3">
                                {blog.title}
                            </h3>
                            {/* <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-700 transition-all">
                                Learn More
                            </button> */}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Blog;
