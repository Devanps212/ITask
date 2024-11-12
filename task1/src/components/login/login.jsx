import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom" 

const UserLogin = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

    const handleSubmit = async(e)=>{
      e.preventDefault()

      console.log(formData)
      try{

        const res = await axios({
          method:'POST',
          url:'http://localhost:5000/login',
          data:formData
        })
        console.log(res)
        localStorage.setItem('user',formData.name)
        navigate('/')
        
      }catch(error){
        console.log(error.response.data.message)
        alert(error.response.data.message)
      }
    }

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='form-content w-25 border p-5 shadow-lg bg-warning rounded'>
            <h1 className='text-dark text-center'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input 
                      type='text' 
                      placeholder='sample@gmail.com' 
                      id='email' 
                      className='form-control'
                      value={formData.email} 
                      onChange={(e)=>setFormData({...formData, email: e.target.value})}
                      required/>
                </div>
                <div className="mt-3">
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input 
                      type='password' 
                      placeholder='*****' 
                      id='password' 
                      className='form-control'
                      value={formData.password}
                      onChange={(e)=>setFormData({...formData, password:e.target.value})}
                      required/>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <button type='submit' className='btn btn-primary'>Login</button>   
                </div>  
                <Link to='/signUp' className="text-center">Don`t have an Account</Link>  
            </form>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
