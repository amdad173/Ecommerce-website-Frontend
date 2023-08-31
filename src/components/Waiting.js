import React from 'react'

const Waiting = () => {
  return (
    <div class="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>       
        <div className="card text-white bg-dark mb-3 text-center" style={{maxWidth: '18rem'}}>
            <div className="card-header">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div className="card-body">
                <h4 className="card-title">Welcome</h4>
                <p className="card-text">
                    I'm glad you're here. This project focuses on functionality over design to showcase web development skills.
                    Please be patient as the page loads; it's hosted on a free platform.
                </p>
                <div className="card-footer">
                    Thank You!
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Waiting