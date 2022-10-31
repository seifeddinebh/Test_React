import React from 'react';
 import { Formik } from 'formik';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 
 function Login() {
  const navigate = useNavigate () 
  return (
    <div>
     <Formik
       initialValues={{ 
        email:'', 
        password:''
       }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={ async (values,  { setSubmitting }) => {

        try {
          const users = await axios.get('http://localhost:3000/users')
         
        const trouve = await users.data.find((user)=>user.email === values.email && user.password === values.password)
        if (trouve!=null)
        {
        
         navigate('/ListProduit')
          
        } else 
        {
          alert(' vérifier votre email ou password')
         
        }
        }catch(error)
        {
          console.log(error)
        }

        
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
          <div className="form-group">
          <label for="staticEmail" className="col-sm-2 col-form-label"><h3>Login</h3></label><br></br>
           <input className="form-control"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           </div>
           <p style={{color:'red'}}>{errors.email && touched.email && errors.email}</p>
           <div className="form-group">
          <label for="staticEmail" className="col-sm-2 col-form-label"><h3>Password</h3></label><br></br>
           <input className="form-control"
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           </div>
           <p style={{color:'red'}}>{errors.password && touched.password && errors.password}</p>
           <button type="submit" disabled={isSubmitting} class="btn btn-success">
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 )
       };
 
 export default Login;