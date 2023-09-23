import TopNav from 'Components/TopNav'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import facebook from '../assets/facebook.svg'
import instagram from '../assets/mdi_instagram.svg'
import ri_linkedin_fill from '../assets/ri_linkedin_fill.svg'
import twitter from '../assets/twitter.svg'
import back_button from '../assets/back_button.svg'
import { MoonLoader } from 'react-spinners';

const ContactUs = () => {
  const [loading, setLoading] = useState(false)

  const schema = yup
    .object({
      mail: yup.string().email().required().label("Email"),
      first_name: yup.string().required().label("First Name"),
      message: yup.string().required().label("Message"),
      phone_no: yup.string().required().label("Phone Number"),
    })
    .required();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true)
    const formData = {
        email:data?.mail,
        phone_number:data?.phone_no,
        first_name: data?.first_name,
        message: data?.message
    }
      try{
          const response = await fetch("https://backend.getlinked.ai/hackathon/contact-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          const result = await response.json();
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
    setLoading(false)
   };

  return (
    <div className='bg-[#150E28] text-white mont'>
      <div className='py-10 md:py-0 hidden md:block'>
      <div className='hidden md:block'>
      <TopNav link="" style="register" className={"btn-border h-14 px-8 rounded"} />
      </div>
      </div>

      <div className='block md:hidden'>
        <div className='px-[50px] pt-12'>
      <img src={back_button} alt="back_btn image" className='' /> 
        </div>
      </div>

      <section className='px-4 lg:px-28 md:py-10'>
        <div className="block md:flex gap-4">
        <div className='border-xl w-full hidden md:block mx-auto rounded-xl shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] px-16 md:py-20 mt-10'>
            <div className='mb-10'>
              <span className="text-[#D434FE] clash font-semibold text-2xl block">Get in touch</span>
            </div>
            <div className='mb-5'>
              <span className="text-[#fff] clash font-normal text-base block">Contact Information</span>
            </div>
            <div className='mb-5'>
              <span className="text-[#fff] clash font-normal text-base block w-32">27,Alara Street Yaba 100012 Lagos State</span>
            </div>
            <div className='mb-5'>
              <span className="text-[#fff] clash font-normal text-base block">Call Us : 07067981819</span>
            </div>
            <div className='mb-5'>
              <span className="text-[#fff] clash font-normal text-base block w-full w-72">we are open from Monday-Friday 08:00am - 05:00pm</span>
            </div>
            <div className='mb-5'>
            <span className="text-[#D434FE] clash font-normal text-xs block">Share on</span>
            </div>
            <div className="flex gap-3">
                <img src={instagram} alt="instagram icon" className='' />
                <img src={twitter} alt="twitter icon" className='' />
                <img src={facebook} alt="facebook icon" className='' />
                <img src={ri_linkedin_fill} alt="linkedin icon" className='' />
              </div>
          </div>

          <div className='border-xl w-full mx-auto rounded-xl shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] bg-none md:bg-[#ffffff08] px-8 sm:px-10 md:px-16 py-12 pb-12'>
            <div className='mb-10'>
              <span className="text-[#D434FE] clash font-semibold text-2xl block">Questions or need assistance?</span>
              <span className="text-[#D434FE] clash font-semibold text-2xl block">Let us know  about it!</span>
            <div className='my-5'>
            <span className="text-[#fff] clash font-normal text-xs block">Email us below to any question related to our event</span>
            </div>
            </div>

            {/* form */}
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 sm:mb-8">
                <div className="inline-grid w-full">
                  <input {...register("first_name")} type="text" placeholder="First Name" className="input border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.first_name?.message}</p>
                </div>
              </div>
              <div className="mb-4 sm:mb-8">
                <div className="inline-grid w-full">
                  <input {...register("mail")} type="text" placeholder="Mail" className="input border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.mail?.message}</p>
                </div>
              </div>
              <div className="mb-4 sm:mb-8">
                <div className="inline-grid w-full">
                  <input {...register("phone_no")} type="text" placeholder="Phone Number" className="input border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.phone_no?.message}</p>
                </div>
              </div>
              <div className="mb-4 sm:mb-8">
                <div className="inline-grid w-full">
                  <textarea rows={6} cols={40} {...register("message")} type="text" placeholder="Message" className="textarea border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.message?.message}</p>
                </div>
              </div>

              <div className='capitalized w-full text-center'>
                {loading ? 
                <div className='btn-border h-14 px-8 rounded w-full flex justify-center items-center w-[230px] mx-auto gap-4'>
                  <MoonLoader size={20} className='it'/>
                  <span>Submitting</span>
                </div>
                :
              <button type="submit" disabled={loading} className={"btn-border h-14 px-8 rounded w-full sm:max-w-[172px]"}>
                Submit
              </button>
              }
             </div>

            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ContactUs