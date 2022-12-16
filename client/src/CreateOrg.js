import React, { useState } from 'react'
import FormRow from './FormRow'

const CreateOrg = () => {
  
  const [nameOfOrganization, setNameOfOrganization] = useState("")
  const [yearOfEstablishment, setYearOfEstablishment] = useState("")
  const [thematicAreas, setThematicAreas] = useState("")
  const [address, setAddress] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [registrationStatus, setRegistrationStatus] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      nameOfOrganization, 
      yearOfEstablishment, 
      thematicAreas, 
      address, 
      contact,
      email,
      registrationStatus
    })

    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzZTIyZDMwLTZiY2MtMTFlZC05MDQxLTA3MzZkN2Y4MjJjMSIsImVtYWlsIjoiYmVuam90YWliYUBnbWFpbC5jb20iLCJpYXQiOjE2NjkyNzYwNjEsImV4cCI6MTY2OTg4MDg2MX0.1Ddxp2I5wazRRlOTkd3tA1Aq7yjFvQ-mj8nPUwZX42o");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nameOfOrganization, 
      yearOfEstablishment, 
      thematicAreas, 
      address, 
      contact,
      email,
      registrationStatus
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/api/report/organization", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.message === "Organization Created") {
          setMessage("Organization submission successful")
          setNameOfOrganization("")
          setYearOfEstablishment("")
          setThematicAreas("")
          setAddress("")
          setContact("")
          setEmail("")
          setRegistrationStatus("")
        }
        console.log(result)
      })
      .catch(error => console.log('error', error));

  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 mt-5 d-flex flex-column justify-content-center text-center">
          <div className="contact-form-heading">
            <h2 className="block-heading">Create Organization</h2>
            <a href='/report'>Report</a>
            <p className='text-success'><b>{message}</b></p>
            <div className="gap"></div>
            <br/>
          </div>
          <form className='dform w-50' onSubmit={(e)=>handleSubmit(e)}>
            <div className='-flex flex-column justify-content-center align-items-center row'>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    name='name'
                    value={nameOfOrganization}
                    labelText="Name of Organization"
                    handleChange={setNameOfOrganization}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='date'
                    labelText='Year of Establishment'
                    name='year_of_establishment'
                    value={yearOfEstablishment}
                    handleChange={setYearOfEstablishment}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    labelText="Organizational Thematic Area"
                    name='organizational_thematic_area'
                    value={thematicAreas}
                    handleChange={setThematicAreas}
                  />
              </div>
              <div className='col-md-6'>
              <FormRow
                    type='text'
                    labelText="Address/Office location"
                    name='office_address'
                    value={address}
                    handleChange={setAddress}
                  />
              </div>
              <div className='col-md-6'>
              <FormRow
                    type='text'
                    labelText="Contact Details"
                    name='contact_details'
                    value={contact}
                    handleChange={setContact}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    labelText="Organization Email Address"
                    name='email_address'
                    value={email}
                    handleChange={setEmail}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    labelText="Registration Status"
                    name='registration_status'
                    value={registrationStatus}
                    handleChange={setRegistrationStatus}
                  /> 
              </div>
              <div className='col-md-6'>
                <div className='mt-3'>
                  <button className='btn btn-block btn-success' type='submit' disabled={false}>
                    Register Organization
                  </button>
                </div>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateOrg