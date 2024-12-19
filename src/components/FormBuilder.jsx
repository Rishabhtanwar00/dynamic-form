import { useContext } from 'react';
import PreviewForm from './PreviewForm';
import Navbar from './Navbar';
import FormLabel from './FormLabel';
import InputComponent from './InputComponent';
import InputEditor from './InputEditor';
import { FormContext } from '../context/FormContext';

const FormBuilder = () => {
	const {
		fields,
		removeField,
		changeSettings,
		showPreview,
		showProperties,
		setShowProperties,
	} = useContext(FormContext);

	return (
		<div className='w-[100%] flex flex-col items-center gap-5 py-10 relative '>
			<h1>Dynamic Form Builder</h1>
			<Navbar />
			{fields.length > 0 && (
				<>
					<div className='py-10 flex flex-col items-center'>
						<FormLabel />

						{fields.map((item, index) => (
							<div key={index} className='flex items-center gap-5 w-[100%]'>
								<InputComponent item={item} />
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
						<InputEditor />
					</div>
				</>
			)}
			<div
				className={` ${
					showPreview ? 'scale-100' : 'scale-0'
				} absolute top-0 left-[-9vw] transition-all duration-300 ease-in-out`}
			>
				<PreviewForm />
			</div>
		</div>
	);
};

export default FormBuilder;
