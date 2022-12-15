const getActivityReports = () => {
  return fetch("http://localhost:8000/api/report/get-activities")
                .then(response => response.json())
                .then(data => data?.data)
                .catch(err => console.log(err));
}

const getOrganizations = () => {
  return fetch("http://localhost:8000/api/report/get-organizations")
                .then(response => response.json())
                .then(data => data?.data)
                .catch(err => console.log(err));
}

export {
  getActivityReports,
  getOrganizations
}