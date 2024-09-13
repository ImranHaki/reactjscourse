import React from 'react'

const Masthead = () => {
  return (
    <>
       <header className="masthead" id='page-top'>
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Astonomy</h1>
                        <h2 className="text-white mx-auto mt-2 mb-5">The study of everything in the universe beyond Earth's atmosphere</h2>
                        <a className="btn btn-primary" href="#facts">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Masthead
