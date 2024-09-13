import React from 'react'

const Projects = () => {
  return (
    <>
      <section className="projects-section bg-light" id="basicFacts">
                {/* Featured Project Row*/}
                
            <div className="container px-4 px-lg-5">
            <div className="text-center ">
            <h2 className="mb-4">Some basic facts about the <i>Celestial</i> Bodies you may find out in space!</h2>
            </div>
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fill mb-3 mb-lg-0" src="assets/img/nasa-vhSz50AaFAs-unsplash.jpg" alt="A planet" /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Planets</h4>
                            <p className="text-black-50 mb-0">Planets are any of the large bodies that revolve around a star in space that 
                                has enough gravity to maintain a spherical shape and cleared the space around it of other objects of similar size.</p>
                        </div>
                    </div>
                </div>
                {/* Project One Row*/}
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fill" src="assets/img/nasa-JHyiw_dpALk-unsplash.jpg" alt="Sun" /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Stars</h4>
                                    <p className="mb-0 text-white-50">Stars are giant balls of hot gas – mostly hydrogen, with some helium and small amounts of other elements. 
                                        Every star has its own life cycle, ranging from a few million to trillions of years, and its properties change as it ages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project Two Row*/}
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fill" src="assets/img/andrew-hughes-6C1LwWx40hs-unsplash.jpg" alt="Moon" /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Satellites</h4>
                                    <p className="mb-0 text-white-50">Satellites are other similar to planets, but instead of orbiting a sun, they orbit a planet instead. 
                                        Satellites need not be spherical, like the moon. In fact, they do not need to be natural either!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects
