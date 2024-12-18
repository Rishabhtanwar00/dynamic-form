const Navbar = ({
	fields,
	setFields,
	formLabel,
	setFormLabel,
	setShowPreview,
}) => {
	const addField = async (type) => {
		setFields([
			...fields,
			{
				id: Date.now(),
				type: type,
				label: `New ${type === 'submit' ? 'button' : type + ' field'}`,
				name: '',
				placeholder: ` Enter ${type}`,
				required: false,
				disabled: false,
			},
		]);
	};

	const saveForm = () => {
		localStorage.setItem('fields', JSON.stringify(fields));
		setFormLabel({ ...formLabel, disabled: true });
		localStorage.setItem('formlabel', JSON.stringify(formLabel));
	};

	return (
		<div className='flex gap-5'>
			<button
				className='px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
				onClick={() => addField('text')}
			>
				Text
			</button>
			<button
				className='px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
				onClick={() => addField('email')}
			>
				Email
			</button>
			<button
				className='px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
				onClick={() => addField('password')}
			>
				Password
			</button>
			<button
				className='px-5 py-2 bg-black text-white active:scale-90 transition-all duration-200 ease-in-out'
				onClick={() => addField('submit')}
			>
				Button
			</button>
			<button
				className='px-5 py-2 bg-green-500 text-white active:scale-90 transition-all duration-200 ease-in-out'
				onClick={() => saveForm()}
			>
				Save
			</button>
			<button
				className='px-5 py-2 bg-red-500 text-white active:scale-90 transition-all duration-200 ease-in-out'
				onClick={() => setShowPreview(true)}
			>
				Preview
			</button>
		</div>
	);
};

export default Navbar;
