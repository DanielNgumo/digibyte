import React from 'react';
import { FileText, AlertCircle, Scale, Ban, RefreshCw, Shield } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 2, 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to DigiByte Solutions. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
              <p className="text-sm text-gray-700">
                Please read these terms carefully before using our services. These terms contain important information about your legal rights and obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Scale className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
          </div>
          <div className="pl-9">
            <p className="text-gray-700 leading-relaxed">
              By accessing and using DigiByte Solutions' website and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. This agreement is effective upon your first use of our services. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
            </p>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              DigiByte Solutions provides web development, mobile app development, digital marketing, and related technology services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The specific terms of service delivery, project scope, timelines, and pricing will be outlined in separate service agreements or contracts between DigiByte Solutions and the client.
            </p>
          </div>
        </section>

        {/* User Obligations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Obligations</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed mb-4">When using our services, you agree to:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Provide accurate and complete information when requested</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Maintain the confidentiality of any account credentials</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Use our services only for lawful purposes and in accordance with these terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Not interfere with or disrupt the integrity or performance of our services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Respect intellectual property rights of DigiByte Solutions and third parties</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Ban className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Prohibited Activities</h2>
          </div>
          <div className="pl-9">
            <p className="text-gray-700 leading-relaxed mb-4">You may not:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">×</span>
                <span>Use our services for any illegal or unauthorized purpose</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">×</span>
                <span>Attempt to gain unauthorized access to our systems or networks</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">×</span>
                <span>Upload or transmit viruses, malware, or any other malicious code</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">×</span>
                <span>Engage in any activity that could damage, disable, or impair our services</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">×</span>
                <span>Violate any applicable laws, regulations, or third-party rights</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">×</span>
                <span>Reproduce, duplicate, or copy any part of our services without permission</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, images, software, and design, are the exclusive property of DigiByte Solutions or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For client projects, intellectual property ownership will be specified in individual service agreements. Unless otherwise stated, all deliverables created specifically for a client project will be transferred to the client upon full payment.
            </p>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment and Fees</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms for services will be outlined in individual service agreements or project proposals. Generally:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Deposits may be required before work commences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Payments are due according to the agreed schedule</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Late payments may result in project suspension and additional fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>All fees are non-refundable unless otherwise specified</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Warranties and Disclaimers */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Warranties and Disclaimers</h2>
          </div>
          <div className="pl-9">
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are provided "as is" without warranties of any kind, either express or implied. While we strive to deliver high-quality services, we do not guarantee that:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>Our services will be uninterrupted, timely, secure, or error-free</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>The results obtained from using our services will meet your requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>Any errors in our services will be corrected</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, DigiByte Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <RefreshCw className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Termination</h2>
          </div>
          <div className="pl-9">
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms of Service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use our services will immediately cease. All provisions of these terms that by their nature should survive termination shall survive, including intellectual property provisions, warranty disclaimers, and limitations of liability.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. Material changes will be notified by posting the new terms on this page with an updated revision date. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Nairobi, Kenya.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="pl-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> legal@digibyte.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +254 700 000 000</p>
              <p className="text-gray-700"><strong>Address:</strong> Nairobi, Kenya</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            By using DigiByte Solutions' services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;