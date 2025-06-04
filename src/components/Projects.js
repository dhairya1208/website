import React from 'react'
import { motion } from 'framer-motion';



const Projects = ({ pro }) => {

    return (
        <>
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>

            <div className="container">
                <div class="card mb-3 mt-3" style={{ maxwidth: "540px", backgroundColor: '#d6cfcb' }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={pro.img} className=" mx-auto d-block img-fluid rounded-start mt-2" alt="..." style={{ height: '200px', width: '200px' }} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{pro.title}</h5>
                                <p class="card-text">{pro.desc}</p>
                                <p class="card-text">Technology : {pro.tech}</p>
                                <p class="card-text"><small class="text-body-secondary">Last update on {pro.updated}</small></p>
                                <button type="button" class="btn btn-success"><a href={pro.link} target="_blank" rel="noopener noreferrer" className='text-black-50 text-decoration-none'>View Project</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</motion.div>
        </>
    )
}

export default Projects
