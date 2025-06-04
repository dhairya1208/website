import React from 'react';
import Projects from './Projects'
import { motion } from 'framer-motion';

const Home = ({ project ,searchTerm}) => {

  const filteredProjects = project.filter(p =>
  p.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>

      {filteredProjects.map((item) => {
        return (<Projects key={item.id} pro={item} />)
      })}
    </div>
  );
};

export default Home;
