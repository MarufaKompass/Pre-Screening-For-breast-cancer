import * as yup from "yup";
const phoneRegExp = /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/;
const emailValidation = yup.string().email().required("Email is required");
const designationValidation = yup.string().required("Designation is required");
const addressValidation = yup.string().required("Billing Address is required");
const phoneValidation = yup
  .string()
  .required("phone is required")
  .max(11)
  .min(11)
  .matches(phoneRegExp, "Phone number is not valid");
const country = yup.string().required("country is  required");
const city = yup.string().required("City is  required");
const gender = yup.string().required("Gender is  required");
const age = yup.string().required("Age is  required");
const prescreening = yup.string().required("This is  required field");
const lumpsBreast = yup.string().required("This is  required field");

const liquid = yup.string().required("This is  required field");
const dimpling = yup.string().required("This  is  required field");
const breastPain = yup.string().required("This is  required field");
const nipplePain = yup.string().required("This is  required field");
const retraction = yup.string().required("This  is  required field");
const redSpot = yup.string().required(" This is  required field");
const textureChange = yup.string().required(" This  is  required field");
const position = yup.string().required(" This is  required field");
const swelling = yup.string().required(" This is  required field");
const diagnosed = yup.string().required(" This  is  required field");
// const fullName = yup.string().required("Full Name is  required");
// const employee = yup.string().required("Minimum number is 0");
// const industry = yup.string().required("Industry is required");
// const departmentValidation = yup.string().required("Department is required");

export const QuestionnaireValidation = yup.object().shape({
  // id:bdsl,
  country: country,
  city: city,
  gender: gender,
  age: age,
  chkfreq: prescreening,
  lumps: lumpsBreast,
  nipdis: liquid,
  dimp: dimpling,
  bpain: breastPain,
  nippain: nipplePain,
  nipret: retraction,
  bskin: redSpot,
  btexture: textureChange,
  lumpos: position,
  bswel: swelling,
  bcanpositive: diagnosed,
});

// export const freeTrail = yup.object().shape({
//   personname: fullName,
//   companyname: companyValidation,
//   phonenumber: phoneValidation,
//   email: emailValidation,
//   address: addressValidation,
//   designation: designationValidation,
//   employeenumber: employee,
//   companytype: industry,
//   trailproduct: checkboxes,
// });
// export const customize = yup.object().shape({
//   person_name: fullName,
//   company_name: companyValidation,
//   phone: phoneValidation,
//   person_email: emailValidation,
//   billing_address: addressValidation,
//   person_desg: designationValidation,
//   no_emp: employee,
//   industry_typ: industry,
//   req_packages: checkboxes,
// });
// export const eventPay = yup.object().shape({
//   name: fullName,
//   // phone: phoneValidation,
//   email: emailValidation,
//   company_name: companyValidation,
//   dept_name: departmentValidation,
//   desg_name: designationValidation,
// });
