import { createContext, useEffect, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {
	const [forms, setForms] = useState([]);

	const [formLabel, setFormLabel] = useState({
		title: 'Form label',
		disabled: true,
	});

	const [formData, setFormData] = useState({});

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
				label: `New ${type === 'submit' ? 'button' : type + ' field'}`,
				name: '',
				placeholder: ` Enter ${type}`,
				required: false,
				disabled: false,
			},
		]);
	};

	const removeField = (id) => {
		setFields(fields.filter((item) => item.id !== id));
		setShowProperties(false);
	};

	const saveEditorForm = async (updatedField) => {
		setFields(
			fields.map((item) => (item.id === updatedField.id ? updatedField : item))
		);
		setShowProperties(false);
		setUpdatedField({
			id: '',
			type: '',
			label: '',
			name: '',
			placeholder: '',
			required: false,
			disabled: false,
		});
	};

	const changeSettings = async (id) => {
		setShowProperties(true);
		const field = fields.filter((item) => item.id === id)[0];
		setUpdatedField(field);
	};

	const handleEditorChange = (e) => {
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

	const saveForm = () => {
		localStorage.setItem('fields', JSON.stringify(fields));
		setFormLabel({ ...formLabel, disabled: true });
		localStorage.setItem('formlabel', JSON.stringify(formLabel));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		console.log('formdata : ' + JSON.stringify(formData));

		setFormData({});
	};

	const value = {
		forms,
		setForms,
		fields,
		setFields,
		formLabel,
		setFormLabel,
		updatedField,
		setUpdatedField,
		showPreview,
		setShowPreview,
		showProperties,
		setShowProperties,
		formData,
		setFormData,
		addField,
		removeField,
		saveEditorForm,
		changeSettings,
		handleEditorChange,
		handleDropdownChange,
		saveForm,
		handleFormSubmit,
	};

	useEffect(() => {
		const savedFields = JSON.parse(localStorage.getItem('fields'));
		if (savedFields) setFields(savedFields);

		const savedLabel = JSON.parse(localStorage.getItem('formlabel'));
		if (savedLabel) {
			setFormLabel({ ...savedLabel, disabled: true });
		}
	}, []);

	return (
		<FormContext.Provider value={value}>{props.children}</FormContext.Provider>
	);
};

export default FormContextProvider;
