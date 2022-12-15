// import logo from '../../assets/images/undraw_accept_terms_re_lj38.svg'
import Wrapper from '../../assets/wrappers/StatsContainer'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
// import styled from 'styled-components'
import { getOrganizations } from '../../api/calls';
import { useEffect, useState } from 'react';

const style = {
  organizations: {
    padding: '20px'
  }
}

const defaultStat=[
  {
    title: 'Number of reports made',
    color: '#e9b949',
    count: '0',
    icon: <FaSuitcaseRolling />
  },
  {
    title: 'Responded reports',
    color: '#647acb',
    count: '0',
    icon: <FaCalendarCheck />
  }, {
    title: 'Pending reports',
    color: '#d66a6a',
    count: '0',
    icon: <FaBug />
  }
]

function Home() {

  const [organizations, setOrganizations] = useState([])

  useEffect(() => {
    getOrganizations().then(data=>setOrganizations(data)).catch(err=>console.log(err))
  }, []) 

  console.log(organizations)

  return (
  <>
     <Wrapper>
        
        {defaultStat.map((stat,index)=>{
          return(
          <StatItem key={index} {...stat}></StatItem>
          )
        })}
      </Wrapper>
      <div style={style.organizations}>
        <h1>Registered Organizations</h1>
        <table>
          <tr>
            <th>Name of Organization</th>
            <th>Year of Establishment</th>
            <th>Thematic Areas</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Registration Status</th>
          </tr>
        {
          organizations?.map(({
            nameOfOrganization, 
            yearOfEstablishment, 
            thematicAreas, 
            address, 
            contact,
            email,
            registrationStatus
          }, index) => (
            <tr key={index}>
                <td>{nameOfOrganization}</td>
                <td>{yearOfEstablishment}</td>
                <td>{thematicAreas}</td>
                <td>{address}</td>
                <td>{contact}</td>
                <td>{email}</td>
                <td>{registrationStatus}</td>
            </tr>
          ))
        }
        
        </table>
      </div>
     {/* <Image>
     <img src={logo} alt='emergency' style={{width: '20%', height: 'auto'}}/>
     </Image> */}
  </>
  )
}


// const Image =  styled.div`
// display: flex;
// align-items: center;
// margin-top: 50px;
// justify-content: center;
// `
export default Home
