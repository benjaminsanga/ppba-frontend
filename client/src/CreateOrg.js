import React from 'react'
import FormRow from './FormRow'

const CreateOrg = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 mt-5 d-flex flex-column justify-content-center text-center">
          <div className="contact-form-heading">
            <h2 className="block-heading">Create Organization</h2>
            <a href='/report'>Report</a>
            <div className="gap"></div>
            <br/>
          </div>
          <form className='dform w-50' onSubmit={()=>{}}>
            <div className='-flex flex-column justify-content-center align-items-center row'>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    name='name'
                    value=""
                    labelText="Name of Organization"
                    handleChange={null}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='date'
                    labelText='Year of Establishment'
                    name='year_of_establishment'
                    value=""
                    handleChange={null}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    labelText="Organizational Thematic Area"
                    name='organizational_thematic_area'
                    value=""
                    handleChange={null}
                  />
              </div>
              <div className='col-md-6'>
              <FormRow
                    type='text'
                    labelText="Address/Office location"
                    name='office_address'
                    value=""
                    handleChange={null}
                  />
              </div>
              <div className='col-md-6'>
              <FormRow
                    type='text'
                    labelText="Contact Details"
                    name='contact_details'
                    value=""
                    handleChange={null}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    labelText="Organization Email Address"
                    name='email_address'
                    value=""
                    handleChange={null}
                  />
              </div>
              <div className='col-md-6'>
                  <FormRow
                    type='text'
                    labelText="Registration Status"
                    name='registration_status'
                    value=""
                    handleChange={null}
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