"use client"

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  onSubmit?: (formData: ContactFormData) => Promise<void>;
}

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact2Enhanced = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+254 742 580 239",
  email = "dev@technasi.co.ke",
  web = { label: "technasi.co.ke", url: "https://technasi.co.ke" },
  onSubmit,
}: Contact2Props) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - you can replace this with your API call
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }
      }

      setSubmitStatus('success');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success message
      alert('Thank you for your message! We\'ll get back to you soon.');
    } catch (error) {
      setSubmitStatus('error');
      alert('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Replace the outer section and container
return (
  <section className="relative w-full bg-[#030303] py-20 md:py-28" id="contact">
    {/* Ambient blobs — same as AboutUs */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#f26d26]/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0c4a6e]/10 blur-[100px]" />
    </div>

    <div className="relative z-10 container mx-auto">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
        
        {/* Left panel */}
        <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
          <div className="text-center lg:text-left">
            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-white">
              {title}
            </h1>
            <p className="text-white/40">{description}</p>
          </div>
          <div className="mx-auto w-fit lg:mx-0">
            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-white">
              Contact Details
            </h3>
            <ul className="ml-4 list-disc text-white/60">
              <li>
                <span className="font-bold text-white">Phone: </span>
                <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
              </li>
              <li>
                <span className="font-bold text-white">Email: </span>
                <a href={`mailto:${email}`} className="underline hover:text-[#f26d26]">{email}</a>
              </li>
              <li>
                <span className="font-bold text-white">Web: </span>
                <a href={web.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#f26d26]">
                  {web.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Form panel */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-white/[0.1] bg-white/[0.03] p-10"
        >
          <div className="flex gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname" className="text-white/70">First Name</Label>
              <Input type="text" id="firstname" placeholder="First Name"
                value={formData.firstname} onChange={handleInputChange} required
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-[#f26d26]" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname" className="text-white/70">Last Name</Label>
              <Input type="text" id="lastname" placeholder="Last Name"
                value={formData.lastname} onChange={handleInputChange} required
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-[#f26d26]" />
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-white/70">Email</Label>
            <Input type="email" id="email" placeholder="Email"
              value={formData.email} onChange={handleInputChange} required
              className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-[#f26d26]" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject" className="text-white/70">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject"
              value={formData.subject} onChange={handleInputChange} required
              className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-[#f26d26]" />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className="text-white/70">Message</Label>
            <Textarea placeholder="Type your message here." id="message" rows={5}
              value={formData.message} onChange={handleInputChange} required
              className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/30 focus:border-[#f26d26]" />
          </div>

          <Button type="submit" disabled={isSubmitting}
            className="w-full bg-[#f26d26] hover:bg-[#e05a18] text-white border-0">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>

      </div>
    </div>
  </section>
);


};