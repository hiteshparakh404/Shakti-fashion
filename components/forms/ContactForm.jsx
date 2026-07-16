"use client";

import Link from "next/link";
import { useState } from "react";
import { collectionOptions, initialEnquiryValues, validateEnquiryForm } from "../../lib/enquiryValidation";
import CheckboxField from "./CheckboxField";
import InputField from "./InputField";
import SelectField from "./SelectField";
import SubmitButton from "./SubmitButton";
import TextAreaField from "./TextAreaField";

export default function ContactForm() {
  const [values, setValues] = useState(initialEnquiryValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value
    }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateEnquiryForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setLoading(false);
    setSuccess(true);
    setValues(initialEnquiryValues);
  };

  return (
    <section id="enquiry" className="bg-slate-50 py-20">
      <div className="section-shell grid min-w-0 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="section-label">Enquiry</p>
          <h2 className="section-title">Tell us what you are looking for.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Share your collection preference and contact details. Our team will help you with styles, availability and showroom guidance.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="soft-card min-w-0 rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <InputField label="First Name" name="firstName" value={values.firstName} onChange={handleChange} error={errors.firstName} required />
            <InputField label="Last Name" name="lastName" value={values.lastName} onChange={handleChange} error={errors.lastName} required />
            <InputField label="Email Address" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
            <InputField label="Phone Number" name="phone" type="tel" value={values.phone} onChange={handleChange} error={errors.phone} required />
            <InputField label="Company Name" name="company" value={values.company} onChange={handleChange} error={errors.company} />
            <SelectField label="Select Collection" name="collection" value={values.collection} onChange={handleChange} error={errors.collection} options={collectionOptions} required />
          </div>

          <div className="mt-5">
            <TextAreaField label="Message" name="message" value={values.message} onChange={handleChange} error={errors.message} required />
          </div>

          <div className="mt-5">
            <CheckboxField checked={values.consent} onChange={handleChange} error={errors.consent}>
              I have read and agree to the{" "}
              <Link href="/terms" className="font-bold text-[#1f78b8] transition hover:text-[#d62828]">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/policy" className="font-bold text-[#1f78b8] transition hover:text-[#d62828]">
                Privacy Policy
              </Link>
              .
            </CheckboxField>
          </div>

          <div className="mt-7">
            <SubmitButton loading={loading} />
          </div>

          {success && (
            <p role="status" className="mt-5 rounded-2xl bg-green-50 p-4 text-sm font-bold text-green-700">
              Thank you. Your enquiry has been submitted successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

