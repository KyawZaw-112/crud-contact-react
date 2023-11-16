import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

  const {id} = useParams()
  const navigate = useNavigate()

  const getSingleContact = async() => {
    const {data} = await axios.get(`http://localhost:3000/contact/${id}`)
    console.log(data);
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
  }
  
  const updateApiContact = async(contact) => {
    const {data} = axios.patch(`http://localhost:3000/contact/${id}`,contact);
    navigate('/')
  }
  
  const onSubmitHandler = e => {
    e.preventDefault()
    const contact = {name,email,phone}
    updateApiContact(contact);
    setTimeout(()=> toast.success('Successfully updated!'),20)
  }

  useEffect(()=>{
    getSingleContact()
  },[])

	return (
    <>
    <div><Toaster /></div>    
		<div className="w-96 border p-5 rounded-lg mx-auto my-32 shadow-md">
			<p className="mb-7 font-bold text-xl text-gray-500">
				Edit Account
			</p>
			<form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
				<div className="relative z-0 w-full group">
					<input
						defaultValue={name}
						onChange={(e) => setName(e.target.value)}
						type="name"
						name="floating_name"
						id="floating_name"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_name"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Name
					</label>
				</div>
				<div className="relative z-0 w-full group">
					<input
						defaultValue={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						name="floating_email"
						id="floating_email"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_email"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email
					</label>
				</div>
				<div className="relative z-0 w-full group">
					<input
						defaultValue={phone}
						onChange={(e) => setPhone(e.target.value)}
						type="phone"
						name="phone"
						id="phone"
						className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="phone"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Phone
					</label>
				</div>
				<div className="flex flex-row justify-between">
					<button
						type="submit"
						className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						Update
					</button>
					<Link to={"/"}>
						<button
							type="button"
							className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
						>
							Cancle
						</button>
					</Link>
				</div>
			</form>
		</div>
    </>
	);
};

export default Edit;
