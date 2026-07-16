export const collectionOptions = [
  "Boys Wear",
  "Girls Western Wear",
  "Mens Wear",
  "Boys Ethnic Wear",
  "Girls Ethnic Wear",
  "Kids Footwear",
  "General Enquiry"
];

export const initialEnquiryValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  collection: "",
  message: "",
  consent: false
};

const namePattern = /^[\p{L} ]{2,50}$/u;
const emailPattern = /^[^\s@.]+(?:\.[^\s@.]+)*@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;
const phonePattern = /^\d{10}$/;

export function validateEnquiryForm(values) {
  const errors = {};

  if (!namePattern.test(values.firstName.trim())) errors.firstName = "Please enter a valid first name.";
  if (!namePattern.test(values.lastName.trim())) errors.lastName = "Please enter a valid last name.";

  if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid email address.";

  if (!phonePattern.test(values.phone)) errors.phone = "Please enter a valid 10-digit mobile number.";

  if (values.company.trim().length > 100) errors.company = "Company name must be 100 characters or fewer.";
  if (!collectionOptions.includes(values.collection)) errors.collection = "Please select a collection.";

  const message = values.message.trim();
  if (message.length < 10 || message.length > 500) errors.message = "Please enter your message.";

  if (!values.consent) errors.consent = "You must accept the Terms & Conditions and Privacy Policy.";

  return errors;
}
