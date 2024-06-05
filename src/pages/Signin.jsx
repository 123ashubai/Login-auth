import React from 'react'
import signupbg from "../assets/signupbg.jpg"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../confg/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Signin = () => {
  const navigate = useNavigate();
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("")
  const [error,setError] = React.useState("")
  const {setUser} = React.useContext(AuthContext)

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(email,password)
          const user = userCredential.user;
          setUser(user)
          console.log(user);
          navigate("/protected")
      })
      .catch((error) => {
        setError("error.message")
          console.log(error);
      });
    }


  return (
    <div className='grid grid-cols-2 w-full h-[100vh] '>
    <div className=''>
      <img src={signupbg} className='w-full h-full object-cover' alt="signup image" />
    </div>

    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-purple-600'>Please Login To Continue</h1>
      <form action="" className='flex flex-col space-y-8 mt-14 w-full px-32' onSubmit={(e)=>onSubmit(e)}>
        <input type="email" name="email" required placeholder='Enter your email' className='p-1 border-2 border-[rgba(0,0,0,0.3)] rounded-sm' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name='password' required placeholder='Enter your password' className='p-1 border-2 border-[rgba(0,0,0,0.3)] rounded-sm' onChange={(e)=>setPassword(e.target.value)}/>
        {
          error !== "" ? <p>{error}</p> : null 
        }
        <button type='submit' className='bg-purple-600 p-2 text-white' >Login</button>
      </form>
    </div>

  </div>
  )
}

export default Signin