import React from 'react'
import { MdEmail } from "react-icons/md";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    message: Yup.string()
      .required('Required')
  });

const Contact = () => {
     // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema,
    onSubmit: values => {
      // Handle form submission
      console.log(values);
      // You would typically send these values to a server here
    },
  });





  return (    
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" >
        <div className="max-w-[1200px] mx-auto">
        
                <div className="grid grid-cols-l md:grid-cols-2 ">
                <div className="p-6 mr-2 bg-[#e5e7eb] dark:bg-[#212121] rounded-xl flex flex-col justify-around" >
                    <h1 className="text-4x1 sm:text-5x1 " >
                        Contact <span>Me</span>
                    </h1>
                    <p className="text-normal text-lg font-medium a dark:text-gray-400 mt-2">
                    Lets connect on LinkedIn <br/> or send me an Email
                    </p>
                    <div className="flex items-center mt-2 dark:text-gray-400">
                    <div className="flex items-center mt-2 dark:text-gray-400">    
                    <MdEmail />  
                        <div className="ml-4 text-md tracking-wide w-40">
                            <p>Amaan Nakhwa</p>
                        </div>
                    </div>   
                </div>  
                </div>
                <form onSubmit={formik.handleSubmit} className="p-6 flex-col justify-center max-w-[700px]">
                    <div className="flex flex-col">
                        <input
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Full Name"
                        {...formik.getFieldProps('name')}
                        className="w-100 mt-2 p-3 px-3 rounded-lg bg-[#e5e7eb] dark:bg-[#212121] border-gray-700 "/>
                        {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="flex flex-col mt-2">
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        {...formik.getFieldProps('email')}
                        className="w-100 mt-2 p-3 px-3 rounded-lg bg-[#e5e7eb] dark:bg-[#212121] border-gray-700 "
                        />
                        {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                        ) : null}                   
                    </div>

                    <div className="flex flex-col mt-2">
                        <textarea 
                        name="message" 
                        id="message" 
                        placeholder="Your Message"
                        {...formik.getFieldProps('message')}
                        className="w-100 mt-2 p-3 px-3 rounded-lg bg-[#e5e7eb] dark:bg-[#212121] border-gray-700 ">
                        </textarea>
                        {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.message}</div>
                        ) : null}              
                    </div>
                    
                    
                    <div className="relative inline-flex group my-3">
                    <div className="absolute inset-0 transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#FFC51A] via-[#EFB310] to-[#FFECB3] rounded-xl blur-lg group-hover:opacity-100 group-hover:duration-200">
                    </div>
                    <button
                    type="submit"
                    className="md:w-64 relative inline-flex items-center justify-center w-[190px] h-[60px] px-8 py-4 text-lg font-bold dark:text-white transition-all duration-200 bg-primary-color rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Submit
                    </button>
                    </div>   
                </form>
                </div>    
        </div>
    </div>

)
}

export default Contact