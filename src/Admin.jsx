import React from 'react'
import { useHistory } from 'react-router-dom'

const Admin = () => {
    let history = useHistory();
  return (
      <>
    history.push("/AllUsers");
    </>
  )
}

export default Admin