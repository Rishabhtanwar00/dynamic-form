const InputEditor = ({ updatedField, setUpdatedField, updateField }) => {
	return (
		<>
			<div className='flex justify-between items-center py-2'>
				<p className='w-[130px]'>label:</p>
				<input
					className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
					type='text'
					placeholder='enter updated label'
					value={updatedField.label}
					onChange={(e) =>
						setUpdatedField({ ...updatedField, label: e.target.value })
					}
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
							value={updatedField.name}
							onChange={(e) =>
								setUpdatedField({
									...updatedField,
									name: e.target.value,
								})
							}
						/>
					</div>
					<div className='flex justify-between items-center py-2'>
						<p className='w-[130px]'>Placeholder:</p>
						<input
							className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
							type='text'
							placeholder='enter updated placeholder'
							value={updatedField.placeholder}
							onChange={(e) =>
								setUpdatedField({
									...updatedField,
									placeholder: e.target.value,
								})
							}
						/>
					</div>
					<div className='flex justify-between items-center py-2'>
						<p className='w-[130px]'>Required:</p>

						<select
							className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
							value={updatedField.required}
							onChange={(e) =>
								setUpdatedField({
									...updatedField,
									required: e.target.value === 'true' ? true : false,
								})
							}
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
					onChange={(e) =>
						setUpdatedField({
							...updatedField,
							disabled: e.target.value === 'true' ? true : false,
						})
					}
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
