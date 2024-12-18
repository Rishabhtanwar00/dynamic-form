const InputComponent = ({ item }) => {
	return (
		<>
			{item.type !== 'submit' ? (
				<div className='flex items-center w-[100%] justify-between py-3 gap-2'>
					<label className='w-[200px]'>{item.label}</label>

					<input
						className='border px-3 py-2 min-w-[350px] text-ellipsis overflow-hidden'
						id={item.id}
						type={item.type}
						placeholder={item.placeholder}
						required={item.required}
						disabled
					/>
				</div>
			) : (
				<div className='flex items-center w-[100%] justify-between py-3 gap-2'>
					<label className='w-[200px]'></label>
					<input
						className='border px-3 py-2 min-w-[350px] bg-green-500 text-white'
						id={item.id}
						type={item.type}
						value={item.label}
					/>
				</div>
			)}
		</>
	);
};

export default InputComponent;
