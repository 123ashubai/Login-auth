import React from 'react'
import signupbg from "../assets/signupbg.jpg"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../confg/firebaseConfig';
import { useNavigate } from 'react-router-dom';



const Signup = () => {

  const navigate = useNavigate();
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("")
  const [confirmPassword,setConfirmPassword] = React.useState("")
  const [error,setError] = React.useState("")

  const onSubmit = async (e) => {
    e.preventDefault()

    if(password !== confirmPassword)
      {
        setError("Password and confirm password should match")
        return;
      }
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(email,password)
          const user = userCredential.user;
          console.log(user);
          navigate("/signin")
      })
      .catch((error) => {
          console.log(error);
      });
    }





  return (
    <div className='grid grid-cols-2 w-full h-[100vh]'>
      <div className='order-2'>
        <img src={signupbg} className='w-full h-full object-cover' alt="signup image" />
      </div>

      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-purple-600'>Please Signup To Continue</h1>
        <form action="" className='flex flex-col space-y-8 mt-14 w-full px-32' onSubmit={(e)=>onSubmit(e)}>
          <input type="email" name="email" required placeholder='Enter your email' className='p-1 border-2 border-[rgba(0,0,0,0.3)] rounded-sm' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" name='password' required placeholder='Enter your password' className='p-1 border-2 border-[rgba(0,0,0,0.3)] rounded-sm' onChange={(e)=>setPassword(e.target.value)}/>
          <input type="password" name='confrmPassword' required placeholder='Enter confirm password' className='p-1 border-2 border-[rgba(0,0,0,0.3)] rounded-sm'onChange={(e)=>setConfirmPassword(e.target.value)}/>
          {
            error !== "" ? <p>{error}</p> : null 
          }
          <button type='submit' className='bg-purple-600 p-2 text-white' >Signup</button>
        </form>
      </div>

    </div>
  )
}

export default Signup