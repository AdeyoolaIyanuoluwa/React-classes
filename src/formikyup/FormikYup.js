import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const FormikYup = () => {
    const validationSchema = Yup.object({
        firstname: Yup.string().required(),
        lastname:  Yup.string().required(),
        email:     Yup.string().email().required(),
        password:  Yup.string().required().min(4).max(16)
    })
    const initialValues ={
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (value)=>{
            console.log(value);
            axios.post()
        }
    })

  return (
    <div>
        <input type="text" className="form-control" value={formik.lastname} onChange={formik.handleChange} name="lastname" placeholder='Lastname'/><span className='text-danger '>{formik.errors.lastname}</span>

        <input type="text" className="form-control" value={formik.firstname} onChange={formik.handleChange} name="firstname" placeholder='Firstname'/><span className='text-danger'>{formik.errors.firstname}</span>

        <input type="email" className="form-control" value={formik.email} onChange={formik.handleChange} name="email" placeholder='Email'/><span className='text-danger'>{formik.errors.email}</span>

        <input type="password" className="form-control" value={formik.password} onChange={formik.handleChange} name="password" placeholder='Password'/><p className='text-danger'>{formik.errors.password}</p>
            
        <button className='btn btn-success' onClick={formik.handleSubmit}>Submit</button>
    </div>
  )
}

export default FormikYup