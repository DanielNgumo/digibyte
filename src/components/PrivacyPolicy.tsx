import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 2, 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            At DigiByte Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Database className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
          </div>
          <div className="pl-9">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Data</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may collect personally identifiable information such as your name, email address, phone number, and company name when you voluntarily provide it to us through contact forms, service inquiries, or newsletter subscriptions.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Data</h3>
            <p className="text-gray-700 leading-relaxed">
              We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits. This information helps us understand how our website is being used and improve user experience.
            </p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
          </div>
          <div className="pl-9">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>To respond to your inquiries and provide customer support</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>To send you marketing communications (with your consent)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>To improve our website and services based on your feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>To process transactions and deliver services you have requested</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>To comply with legal obligations and protect our rights</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
          </div>
          <div className="pl-9">
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Third-Party Disclosure */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Eye className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Third-Party Disclosure</h2>
          </div>
          <div className="pl-9">
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>To trusted service providers who assist us in operating our website or conducting our business</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>When required by law or to protect our rights and safety</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>In connection with a business transfer or merger</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>The right to access and receive a copy of your personal data</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>The right to correct inaccurate or incomplete information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>The right to request deletion of your personal information</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>The right to opt-out of marketing communications</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences, but disabling cookies may limit your ability to use certain features of our website.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
          </div>
          <div className="pl-9">
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> privacy@digibyte.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +254 700 000 000</p>
              <p className="text-gray-700"><strong>Address:</strong> Nairobi, Kenya</p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;