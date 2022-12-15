import React, { useEffect, useState } from 'react'
import { getActivityReports } from '../../api/calls'

function Reports() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    getActivityReports().then(data=>setActivities(data)).catch(err=>console.log(err))
  }, []) 

  console.log(activities)

  return (
    <div className='activities'>
      <h2>Activities</h2>
      <table>
          <tr>
            <th>Area of Intervention</th>
            <th>Donor Agency</th>
            <th>Project Duration</th>
            <th>Project LGAs</th>
            <th>Project Title</th>
          </tr>
      {activities?.map(({areaOfIntervention, donorAgency, projectDuration, projectLGAs, projectTitle}, index) => (
        <tr key={index} className="activity">
          <td>{areaOfIntervention}</td>
          <td>{donorAgency}</td>
          <td>{projectDuration}</td>
          <td>{projectLGAs}</td>
          <td>{projectTitle}</td>
        </tr>
      ))}
      </table>
    </div>
  )
}

export default Reports
