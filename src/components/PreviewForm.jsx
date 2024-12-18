import { useState } from 'react';

const PreviewForm = ({ formLabel, fields, setShowPreview }) => {
	const [formData, setFormData] = useState({});
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('formdata : ' + JSON.stringify(formData));

		setFormData({});
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='w-[100vw] min-h-[100vh] h-fit flex items-center justify-center overflow-hidden bg-gray-200 relative'>
			<button
				className='px-3 py-2 w-fit bg-black text-white absolute right-10 top-5'
				onClick={() => setShowPreview(false)}
			>
				close
			</button>
			{fields.length > 0 ? (
				<div className='flex flex-col'>
					<h1 className='text-center font-medium text-2xl pb-5'>
						{formLabel.title}
					</h1>
					<form
						onSubmit={handleSubmit}
						className='py-4 grid gtid-cols-1 md:grid-cols-2 gap-5'
					>
						{fields.map((item, index) =>
							// <div key={index} className='flex gap-5 py-3'>
							// 	<label>{item.label}</label>
							// 	<input
							// 		type={item.type}
							// 		placeholder={item.placeholder}
							// 		required={item.required}
							// 	/>
							// </div>

							item.type !== 'submit' ? (
								<div
									key={index}
									className='flex flex-col w-[100%] justify-between py-2 gap-1'
								>
									<label className='w-[200px]'>{item.label}</label>

									<input
										className='border px-3 py-2 min-w-[350px] text-ellipsis overflow-hidden outline-none border-black cursor-text'
										id={item.id}
										type={item.type}
										name={item.name}
										value={formData[item.name] || ''}
										placeholder={item.placeholder}
										required={item.required}
										disabled={item.disabled}
										onChange={handleChange}
									/>
								</div>
							) : (
								<div
									key={index}
									className='flex flex-col w-[100%] justify-between py-2 gap-1'
								>
									<label className='w-[200px]'></label>
									<input
										className='border px-3 py-2 min-w-[350px] text-ellipsis overflow-hidden outline-none border-green-500 cursor-pointer bg-green-500 text-white active:scale-90 transition-all duration-200 ease-in-out'
										id={item.id}
										type={item.type}
										value={item.label}
										disabled={item.disabled}
									/>
								</div>
							)
						)}
					</form>
				</div>
			) : (
				<p>add fields</p>
			)}
		</div>
	);
};

export default PreviewForm;
