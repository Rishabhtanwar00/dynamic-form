const PreviewForm = ({ formLabel, fields,setShowPreview }) => {
	return (
		<div className='w-[100vw] min-h-[100vh] flex items-center justify-center overflow-hidden bg-gray-200 relative'>
			<button className='px-3 py-2 w-fit bg-black text-white absolute right-10 top-5' onClick={() => setShowPreview()}>close</button>
			{fields.length > 0 ? (
				<div className='flex flex-col'>
					<h1 className='text-center font-medium text-2xl pb-5'>
						{formLabel.title}
					</h1>
					<div className='py-4'>
						{fields.map((item, index) => (
							// <div key={index} className='flex gap-5 py-3'>
							// 	<label>{item.label}</label>
							// 	<input
							// 		type={item.type}
							// 		placeholder={item.placeholder}
							// 		required={item.required}
							// 	/>
							// </div>
							<div
								key={index}
								className='flex flex-col w-[100%] justify-between py-2 gap-1'
							>
								<label className='w-[200px]'>{item.label}</label>

								<input
									className='border px-3 py-2 min-w-[350px] text-ellipsis overflow-hidden'
									id={item.id}
									type={item.type}
									placeholder={item.placeholder}
									required={item.required}
								/>
							</div>
						))}
					</div>
				</div>
			) : (
				<p>add fields</p>
			)}
		</div>
	);
};

export default PreviewForm;
