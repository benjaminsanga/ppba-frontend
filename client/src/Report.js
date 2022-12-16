import React, { useState } from 'react'

const Report = () => {

  const [donorAgency, setDonorAgency] = useState("")
  const [projectTitle, setProjectTitle] = useState("")
  const [projectDuration, setProjectDuration] = useState("")
  const [projectLGAs, setProjectLGAs] = useState("")
  const [areaOfIntervention, setAreaOfIntervention] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      donorAgency, 
      projectTitle, 
      projectDuration, 
      projectLGAs, 
      areaOfIntervention
    })

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZTIyZDMwLTZiY2MtMTFlZC05MDQxLTA3MzZkN2Y4MjJjMSIsImVtYWlsIjoiYmVuam90YWliYUBnbWFpbC5jb20iLCJpYXQiOjE2NjkyNzYwNjEsImV4cCI6MTY2OTg4MDg2MX0.1Ddxp2I5wazRRlOTkd3tA1Aq7yjFvQ-mj8nPUwZX42o");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      donorAgency, 
      projectTitle, 
      projectDuration, 
      projectLGAs, 
      areaOfIntervention
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/api/report/activity", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.message === "Activity Created") {
          setMessage("Activity submissions successful")
          setDonorAgency("")
          setProjectTitle("")
          setProjectDuration("")
          setProjectLGAs("")
          setAreaOfIntervention("")
        }
        console.log(result)
      })
      .catch(error => console.log('error', error));

  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 mt-5 d-flex justify-content-center text-center">
          <div className="contact-form">
            <div className="contact-form-heading">
              <h2 className="block-heading">Report Activity</h2>
              <a href='/'>Create organization</a>
              <p className='text-success'><b>{message}</b></p>
              <div className="gap"></div>
            </div>
            <form 
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="tp-form tp-form-secondary p-5"
              noValidate="novalidate"
            >
              <div className="row gutter-30">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="minput form-control required"
                      placeholder="Donor Agency"
                      aria-required="true"
                      onChange={(e)=>setDonorAgency(e.target.value)}
                      value={donorAgency}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="minput form-control required"
                      placeholder="Project Title"
                      aria-required="true"
                      onChange={(e)=>setProjectTitle(e.target.value)}
                      value={projectTitle}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="minput form-control required"
                      placeholder="Project Duration"
                      aria-required="true"
                      onChange={(e)=>setProjectDuration(e.target.value)}
                      value={projectDuration}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="minput form-control required"
                      placeholder="Project LGAs"
                      aria-required="true"
                      onChange={(e)=>setProjectLGAs(e.target.value)}
                      value={projectLGAs}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="title"
                      className="minput form-control required"
                      placeholder="Area of Intervention"
                      aria-required="true"
                      onChange={(e)=>setAreaOfIntervention(e.target.value)}
                      value={areaOfIntervention}
                    />
                  </div>
                </div>
                <div className="col-12 mt-20">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-5"
                    >
                      Send Activity
                    </button>
                  <input
                    type="text"
                    className="d-none"
                    name="form-anti-honeypot"
                  />
                </div>
              </div>
              <div className="result">
                <div className="form-results"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report