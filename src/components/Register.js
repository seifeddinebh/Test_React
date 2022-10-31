import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
 
 function Register() {
  const navigate = useNavigate () 
  return (
<div>
     <Formik
       initialValues={{
         firstname: '',
          lastname: '',
          password: "",
          email: "", }}
          validate={values => {
            const errors = {};
            if (!values.firstname) {
              errors.firstname = 'Required';
            }
            if (!values.lastname) {
              errors.lastname = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }else if(values.password && values.password.length <6){
              errors.password = 'Password is too short';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
       onSubmit={async (values, { setSubmitting }) => {
        try {
          const users = await axios.get('http://localhost:3000/users')
          console.log(users)
        const trouve = await users.data.find((user)=>user.email === values.email)
        if (trouve!=null)
        {
          alert('user existe vérifier votre email')
        } else 
        {
          await axios.post('http://localhost:3000/users' , values)
          navigate('/login')
        }
        }catch(error)
        {
          console.log(error)
        }
        
        //
        
        
        }}
        
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit} className='w-50 m-auto'>
        <h1>Register</h1>
        <div className="form-group">
         <label for="staticEmail" className="col-sm-2 col-form-label"> Nom </label><br></br>
        <input
          type="text"
          name="firstname"
          onChange={handleChange}
          className='form-control'
          onBlur={handleBlur}
          value={values.firstname}
        />
        
       <p style={{color:'red'}}> {errors.firstname && touched.firstname && errors.firstname}</p>
        </div>
        <div class="form-group">
        <label for="staticEmail" class="col-sm-2 col-form-label"><h3>Prenom</h3>P</label><br></br>
        <input
          type="text"
          name="lastname"
          onChange={handleChange}
          className='form-control'
          onBlur={handleBlur}
          value={values.lastname}
        />
       <p style={{color:'red'}}> {errors.lastname && touched.lastname && errors.lastname}</p>
        </div>
        <div class="form-group">
        <label for="staticEmail" class="col-sm-2 col-form-label"><h3>Email</h3></label><br></br>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className='form-control'
          onBlur={handleBlur}
          value={values.email}
        />
        <p style={{color:'red'}}>{errors.email && touched.email && errors.email}</p>
        </div>
        <div class="form-group">
        <label for="staticEmail" class="col-sm-2 col-form-label"><h3>PassWord</h3></label><br></br>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className='form-control'
          onBlur={handleBlur}
          value={values.password}
        />
        <p style={{color:'red'}}>{errors.password && touched.password && errors.password}</p>
        </div>
           <button type="submit" disabled={isSubmitting} class="btn btn-success" >
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 )
       };
 
 export default Register;



 