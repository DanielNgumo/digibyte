"use client";

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'DigibtYe transformed our digital presence completely. Their team delivered a stunning website that increased our conversions by 300%. Absolutely incredible work!',
      project: 'E-commerce Website'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, GreenLife',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Working with DigibtYe was a game-changer. They understood our vision perfectly and delivered a mobile app that our customers love. Professional, reliable, and creative!',
      project: 'Mobile App Development'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, FashionHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The branding and design work exceeded all expectations. DigibtYe created a visual identity that perfectly captures our brand essence. Our customers noticed immediately!',
      project: 'Brand Identity & Design'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CTO, DataFlow Solutions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Exceptional technical expertise and project management. DigibtYe delivered our complex web application on time and within budget. Highly recommend their services!',
      project: 'Web Application'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-primary font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped transform their digital presence.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            
            {/* Quote icon */}
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-8 font-medium">
              "{current.text}"
            </blockquote>

            {/* Client info */}
            <div className="flex items-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
              />
              <div>
                <div className="font-bold text-lg text-foreground">{current.name}</div>
                <div className="text-muted-foreground">{current.position}</div>
                <div className="text-sm text-primary font-medium">{current.project}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-primary hover:text-white rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-primary hover:text-white rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100+</div>
            <div className="text-muted-foreground">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;