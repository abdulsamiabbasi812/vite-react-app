import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { isSubmitting } } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(2)
    console.log(data);
  }
  return (
    <div className='contact'>
      <div className="contact-items">

        <h1 className='contact-h1'>Contact Us</h1>
        {isSubmitting && <div className='contact-submitting'>Loading...</div>}

        <form className='form--items' action="" onSubmit={handleSubmit(onSubmit)}>

          <input className='contact-input' placeholder=' Enter Your Name' type="text" {...register("name", { required: { value: true, message: "This field is required" } })} />

          <input className='contact-input' placeholder='Enter Your PH-Number' type="number" {...register("number", { required: { value: true, message: "This field is required" } })} />

          <input className='contact-input' placeholder='Enter Your Location' type="text" {...register("location", { required: { value: true, message: "This field is required" } })} />

          <button className="contact-btn" disabled={isSubmitting}>Submit</button>
          {/* <input disabled={isSubmitting} type="submit" value="Submit" /> */}
        </form>
      </div>
    </div>
  )
}

export default Contact
