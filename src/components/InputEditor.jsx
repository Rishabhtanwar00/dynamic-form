const InputEditor = ({ updatedField, setUpdatedField, updateField }) => {
	const handleChange = (e) => {
		setUpdatedField({
			...updatedField,
			[e.target.name]: e.target.value,
		});
	};

	const handleDropdownChange = (e) => {
		setUpdatedField({
			...updatedField,
			[e.target.name]: e.target.value === 'true' ? true : false,
		});
	};

	return (
		<>
			<div className='flex justify-between items-center py-2'>
				<p className='w-[130px]'>label:</p>
				<input
					className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
					type='text'
					name='label'
					placeholder='enter updated label'
					value={updatedField.label}
					onChange={handleChange}
				/>
			</div>
			{updatedField.type !== 'submit' && (
				<>
					<div className='flex justify-between items-center py-2'>
						<p className='w-[130px]'>Name (used as key in form data):</p>
						<input
							className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
							type='text'
							placeholder='enter updated placeholder'
							name='name'
							value={updatedField.name}
							onChange={handleChange}
						/>
					</div>
					<div className='flex justify-between items-center py-2'>
						<p className='w-[130px]'>Placeholder:</p>
						<input
							className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
							type='text'
							placeholder='enter updated placeholder'
							name='placeholder'
							value={updatedField.placeholder}
							onChange={handleChange}
						/>
					</div>
					<div className='flex justify-between items-center py-2'>
						<p className='w-[130px]'>Required:</p>

						<select
							className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
							name='required'
							value={updatedField.required}
							onChange={handleDropdownChange}
						>
							<option value={false}>False</option>
							<option value={true}>True</option>
						</select>
					</div>
				</>
			)}
			<div className='flex justify-between items-center py-2'>
				<p className='w-[130px]'>Disabled:</p>

				<select
					className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
					value={updatedField.disabled}
					name='disabled'
					onChange={handleDropdownChange}
				>
					<option value={false}>False</option>
					<option value={true}>True</option>
				</select>
			</div>
			<button
				onClick={() => updateField(updatedField)}
				className='px-3 py-1 bg-green-400 text-black'
			>
				save
			</button>
		</>
	);
};

export default InputEditor;
