import * as Yup from 'yup';

export const Input1 = [
  { title: "FirstName", label: "First Name" },
  { title: "LastName", label: "Last Name" },
  { title: "Email", label: "Email" }
];

// Create validation schema dynamically based on Input1
const schemaFields = Input1.reduce((acc, input) => {
  acc[input.title.toLowerCase()] = Yup.string().required(`${input.label} is required`);
  return acc;
}, {});

export const validationSchema = Yup.object().shape(schemaFields);

export const initialValues = {
  firstname: '',
  lastname: '',
  email: ''
  
};
