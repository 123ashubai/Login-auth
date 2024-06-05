import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Protected = () => {
    const {user} = React.useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()
    React.useLayoutEffect(()=>{
        if(user === null || user === ""){
            navigate("/login")
        }
    },[])
  return (
    <div className='hero'>
    <div className='content'>
      <h1>Welcome {(user?.email).split("@").at(0)}</h1>
    </div>
  </div>
  )
}

export default Protected;