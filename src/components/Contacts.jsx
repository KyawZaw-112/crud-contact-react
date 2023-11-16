import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Contacts = () => {
	const [contacts, setContacts] = useState([]);

	const fetchContact = async () => {
		const { data } = await axios.get(`http://localhost:3000/contact`);
		setContacts(data);
	};

	useEffect(() => {
		fetchContact();
	}, []);

	const apiDeleteContact = async (id) => {
		const { data } = await axios.delete(
			`http://localhost:3000/contact/${id}`
		);
		toast.error('Successfully deleted!')
		fetchContact();
	};

	return (
		<>
			<div><Toaster/></div>
			<Link to={"/create"}>
				<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 my-4">
					<span className="flex  items-center gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
						<AiOutlinePlus />
						Create New Contact
					</span>
				</button>
			</Link>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
							>
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Email Address
							</th>
							<th
								scope="col"
								className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
							>
								Phone
							</th>
							<th scope="col" className="px-6 py-3">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{contacts?.map((contact) => (
							<tr
								className="border-b border-gray-200 dark:border-gray-700"
								key={contact.id}
							>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
								>
									{contact.name}
								</th>
								<td className="px-6 py-4">{contact.email}</td>
								<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
									{contact.phone}
								</td>
								<td className="px-6 py-4">
									<Link to={`/edit/${contact.id}`}>
									<button
										type="button"
										className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
									>
										<CiEdit />
									</button>
									</Link>
									<button
										onClick={() =>
											apiDeleteContact(contact.id)
										}
										type="button"
										className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
									>
										<FaRegTrashCan />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Contacts;
