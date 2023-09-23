import TopNav from 'Components/TopNav'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import designer_img from '../assets/designer_man.svg'
import man from '../assets/man.svg'
import woman from '../assets/woman.svg'

const Login = () => {
  const [categories, setCategories] = useState([])

  const schema = yup
    .object({
      email: yup.string().email().required().label("Email"),
      team_name: yup.string().required().label("Team Name"),
      phone: yup.string().required().label("Phone"),
      category: yup.string().required().label("Category"),
      project_topic: yup.string().required().label("Project Topic"),
      group_size: yup.string().required().label("Group Size"),
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


  const fetchCategoryData = () => {
    fetch("https://backend.getlinked.ai/hackathon/categories-list")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCategories(data)
      })
  }

  useEffect(() => {
    let fetched;
  if(!fetched) {
    fetchCategoryData();
  }
    return () => {
      fetched = true
    }
  }, [])
  


  const onSubmit = async (data) => {
   console.log(data)
    try {
    } catch (error) {
      console.log("Error", error);
    }
  };


  return (
    <div className='bg-[#150E28] text-white mont'>
      <TopNav style="register" className={"btn-border h-14 px-8 rounded"} />
      <section className='md:pr-20 md:py-10'>
        <div className="block md:flex gap-4">
          <img src={designer_img} />
          <div className='border-xl w-full mx-auto rounded-xl shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] bg-[#ffffff08] px-16 py-20'>
            <div className='mb-10'>
              <span className="text-[#D434FE] clash text- font-semibold sm:text-3xl block mb-10">Register</span>
              <div className="flex gap-4 items-center">
                <span className="text-sm text-normal mt-5">Be part of this movement!</span>
                <div className="divide-y divide-dashed divide-[#D434FE]">
                  <div className="flex px-6">
                    <img src={woman} className="w-[30px] h-[30px]" alt='woman_walking' />
                    <img src={man} className="w-[30px] h-[30px]" alt='woman_walking' />
                  </div>
                  <div></div>
                  {/* <span className="divide-dotted border h- w-full text-[#D434FE]" /> */}
                </div>
              </div>
              <span className='uppercase text-lg sm:text-2xl block mt-6'>create your account</span>
            </div>

            {/* form */}
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
              <div className="block sm:flex gap-6 mb-0 sm:mb-8">
                <div className="inline-grid w-full">
                  <label className='text-sm mb-3'>Team's Name</label>
                  <input {...register("team_name")} type="text" placeholder="Enter the name of your group" className="input border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.team_name?.message}</p>
                </div>
                <div className="inline-grid w-full">
                  <label className='text-sm mb-3'>Phone</label>
                  <input {...register("phone")} type="number" placeholder="Enter your phone number" className="input remove-arrow border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.phone?.message}</p>
                </div>
              </div>

              <div className="block sm:flex gap-6 mb-0 sm:mb-8">
                <div className="inline-grid w-full">
                  <label className='text-sm mb-3'>Email</label>
                  <input {...register("email")} type="text" placeholder="What is your email address" className="input border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.email?.message}</p>
                </div>
                <div className="inline-grid w-full">
                  <label className='text-sm mb-3'>Project Topic</label>
                  <input {...register("project_topic")} type="text" placeholder="What is your group project topic" className="input border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.project_topic?.message}</p>
                </div>
              </div>

              <div className="block sm:flex gap-6 mb-0 sm:mb-8">
                <div className="inline-grid w-full">
                  <label className='text-sm mb-3'>Category</label>
                  <select {...register("category")} type="text" placeholder="What is your email address" className="select border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]">
                    <option defaultValue="" disabled>Select</option>
                    {categories?.map((category) => (
                      <option key={category?.id}>{category?.name}</option>
                    ))}
                  </select>
                  <p className="text-red-500 text-xs italic pt-1">{errors.category?.message}</p>
                </div>
                <div className="inline-grid w-full">
                  <label className='text-sm mb-3'>Group Size</label>
                  <input {...register("group_size")} type="text" placeholder="What is your group project topic" className="input border border-solid border-[white] rounded-sm bg-[rgba(255, 255, 255, 0.03)] shadow-[0px_4px_0px_rgba(0,0,0,0.25)]" />
                  <p className="text-red-500 text-xs italic pt-1">{errors.group_size?.message}</p>
                </div>
              </div>

              <div>
                <span className='text-xs text-[#FF26B9] italic'>Please review your registration details before submitting</span>
                <div className='flex items-center gap-2 mt-4'>
                  <input type='checkbox' required className='border border-[#ffffff] border-2' />
                  <span className='text-xs text-[#ffffff] non-italic'>I agreed with the event terms and conditions  and privacy policy</span>
                </div>
              </div>

              <div className='capitalized'>
              <button type="submit" className={"btn-border h-14 px-8 rounded w-full mt-8"}>
                Register Now
              </button>
             </div>

            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Login