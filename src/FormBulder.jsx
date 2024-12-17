import { useEffect } from 'react';
import { useState } from 'react';
import PreviewForm from './PreviewForm';

const FormBulder = () => {
	const [formLabel, setFormLabel] = useState({
		title: 'Form label',
		disabled: true,
	});

	const [fields, setFields] = useState([]);

	const [updatedField, setUpdatedField] = useState({});

	const [showProperties, setShowProperties] = useState(false);

	const [showPreview, setShowPreview] = useState(false);

	const addField = async (type) => {
		setFields([
			...fields,
			{
				id: Date.now(),
				type: type,
				label: `New ${type} field`,
				placeholder: `Enter ${type}`,
				required: false,
			},
		]);
	};

	const removeField = (id) => {
		setFields(fields.filter((item) => item.id !== id));
		setShowProperties(false);
	};

	const updateField = async (updatedField) => {
		setFields(
			fields.map((item) => (item.id === updatedField.id ? updatedField : item))
		);
		setShowProperties(false);
		setUpdatedField({
			id: '',
			type: '',
			label: '',
			placeholder: '',
			required: false,
		});
	};

	const changeSettings = async (id) => {
		setShowProperties(true);
		const field = fields.filter((item) => item.id === id)[0];
		setUpdatedField(field);
	};

	const saveForm = () => {
		localStorage.setItem('fields', JSON.stringify(fields));
		setFormLabel({ ...formLabel, disabled: true });
		localStorage.setItem('formlabel', JSON.stringify(formLabel));
	};

	useEffect(() => {
		console.log(updatedField);
	}, [fields, updatedField]);

	useEffect(() => {
		const savedFields = JSON.parse(localStorage.getItem('fields'));
		if (savedFields) setFields(savedFields);

		const savedLabel = JSON.parse(localStorage.getItem('formlabel'));
		if (savedLabel) {
			setFormLabel({ ...savedLabel, disabled: true });
		}
	}, []);

	return (
		<div className='w-[100%] flex flex-col items-center gap-5 py-10 relative '>
			<h1>Dynamic Form Builder</h1>
			<div className='flex gap-5'>
				<button
					className='px-5 py-2 bg-black text-white'
					onClick={() => addField('text')}
				>
					Text
				</button>
				<button
					className='px-5 py-2 bg-black text-white'
					onClick={() => addField('email')}
				>
					Email
				</button>
				<button
					className='px-5 py-2 bg-black text-white'
					onClick={() => addField('password')}
				>
					Password
				</button>
				<button
					className='px-5 py-2 bg-green-500 text-white'
					onClick={() => saveForm()}
				>
					Save
				</button>
				<button
					className='px-5 py-2 bg-red-500 text-white'
					onClick={() => setShowPreview(true)}
				>
					Preview
				</button>
			</div>
			{fields.length > 0 && (
				<>
					<div className='py-10 flex flex-col items-center'>
						<div className='flex gap-5 pb-10'>
							<input
								id='formlabel'
								type='text'
								className={`${
									!formLabel.disabled ? ' border-black' : 'border-white'
								} text-center font-medium text-xl border-2  outline-none`}
								onChange={(e) =>
									setFormLabel({ ...formLabel, title: e.target.value })
								}
								value={formLabel.title}
								disabled={formLabel.disabled}
							/>
							<button
								className='px-2 py-1 h-fit bg-black text-white text-sm'
								onClick={() => setFormLabel({ ...formLabel, disabled: false })}
							>
								edit
							</button>
						</div>

						{fields.map((item, index) => (
							<div key={index} className='flex items-center gap-5 w-[100%]'>
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
								<button
									onClick={() => removeField(item.id)}
									className='px-3 py-1 bg-gray-200 text-black'
								>
									Remove
								</button>
								<button
									onClick={() => changeSettings(item.id, item.type)}
									className='px-3 py-1 bg-green-400 text-black'
								>
									Settings
								</button>
							</div>
						))}
					</div>
					<div
						className={`${
							showProperties ? 'scale-100' : 'scale-0'
						} flex flex-col gap-4 max-w-[500px] p-5 bg-gray-200 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] roundede-lg transition-all duration-300 ease-in-out`}
					>
						<button
							className='text-base text-center w-[30px] h-[30px] rounded-full absolute right-[-10px] top-[-10px] bg-green-400 text-black'
							onClick={() => setShowProperties(false)}
						>
							&#10008;
						</button>
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
						<button
							onClick={() => updateField(updatedField)}
							className='px-3 py-1 bg-green-400 text-black'
						>
							save
						</button>
					</div>
				</>
			)}
			<div
				className={` ${
					showPreview ? 'scale-100' : 'scale-0'
				} absolute top-0 left-[-9vw] transition-all duration-300 ease-in-out`}
			>
				<PreviewForm
					fields={fields}
					formLabel={formLabel}
					setShowPreview={setShowPreview}
				/>
			</div>
		</div>
	);
};

export default FormBulder;
