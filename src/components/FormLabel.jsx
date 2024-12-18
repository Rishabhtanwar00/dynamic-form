const FormLabel = ({ formLabel, setFormLabel }) => {
	return (
		<div className='flex gap-5 pb-10'>
			<input
				id='formlabel'
				type='text'
				className={`${
					!formLabel.disabled ? ' border-black' : 'border-white'
				} text-center font-medium text-xl border-2  outline-none`}
				onChange={(e) => setFormLabel({ ...formLabel, title: e.target.value })}
				value={formLabel.title}
				disabled={formLabel.disabled}
			/>
			<button
				className='px-2 py-1 h-fit bg-black text-white text-sm'
				onClick={() => setFormLabel({ ...formLabel, disabled: false })}
			>
				Edit
			</button>
		</div>
	);
};

export default FormLabel;
