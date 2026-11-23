"use client";

import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  message: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };