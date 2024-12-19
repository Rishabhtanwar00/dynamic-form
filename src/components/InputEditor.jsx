import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const InputEditor = () => {
	const { updatedField, handleEditorChange, handleDropdownChange, saveEditorForm } =
		useContext(FormContext);

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
					onChange={handleEditorChange}
				/>
			</div>
			{updatedField.type !== 'submit' && (
				<>
					<div className='flex justify-between items-center py-2'>
						<p className='w-[130px]'>Id:</p>
						<input
							className='border px-3 py-1.5 min-w-[250px] rounded text-ellipsis overflow-hidden'
							type='text'
							placeholder='id - used as key on submit'
							name='name'
							value={updatedField.name}
							onChange={handleEditorChange}
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
							onChange={handleEditorChange}
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
				onClick={() => saveEditorForm(updatedField)}
				className='px-3 py-1 bg-green-400 text-black'
			>
				save
			</button>
		</>
	);
};

export default InputEditor;
