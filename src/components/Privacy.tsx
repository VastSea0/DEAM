import React from 'react';
import { ArrowLeft, Shield, Database, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-slate-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="h-5 w-px bg-slate-300"></div>
            <div className="flex items-center space-x-3">
              <img
                src="/assets/app_icon.png"
                alt="Notia Logo"
                className="h-8 w-8 rounded-lg border border-slate-200"
              />
              <span className="text-lg font-semibold text-slate-900">Notia</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm p-8 lg:p-12">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mx-auto mb-6">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Privacy & Data Protection Policy
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your privacy is fundamental to us. This comprehensive policy details how Notia 
              collects, uses, and protects your data in full compliance with app store requirements.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              Last Updated: January 2025 | Effective: January 15, 2025
            </div>
          </div>

          {/* Data Collection Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center">
              <Database className="h-6 w-6 text-orange-600 mr-3" />
              Data Collection & Third-Party Services
            </h2>

            {/* NotiaAI Service */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl p-6 mb-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. NotiaAI Service (GitHub Models)</h3>
              <div className="space-y-3 text-slate-700">
                <p><strong>Third-Party Provider:</strong> GitHub Models (GPT-4.1)</p>
                <p><strong>Data Collected:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ AI prompt text submitted by users</p>
                  <p>→ Anonymized usage patterns for AI features</p>
                  <p>→ Response quality metrics</p>
                </div>
                <p><strong>Purpose of Collection:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ A/B testing AI response accuracy</p>
                  <p>→ Detecting misuse and preventing abuse</p>
                  <p>→ Improving model performance over time</p>
                </div>
                <p className="font-medium text-slate-900 bg-green-50 p-2 rounded">
                  ✅ <strong>Data Protection:</strong> No photos, personal images, or user identity stored
                </p>
              </div>
            </div>

            {/* Account Services */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border border-green-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Notia Account Services (Firebase Authentication)</h3>
              <div className="space-y-3 text-slate-700">
                <p><strong>Third-Party Provider:</strong> Google Firebase Authentication & Firestore</p>
                <p><strong>Data Collected:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ Email address and username (for account creation)</p>
                  <p>→ Device information (Android version, app build version)</p>
                  <p>→ Usage statistics (AI requests per day, feature usage)</p>
                  <p>→ Note metadata (file paths, note text content)</p>
                </div>
                <p><strong>Data Storage & Security:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ All data encrypted in transit and at rest</p>
                  <p>→ Stored on secure Google Firebase servers</p>
                  <p>→ Access controlled via Firebase security rules</p>
                </div>
                <p className="font-medium text-slate-900 bg-green-50 p-2 rounded">
                  📁 <strong>Important:</strong> Photos themselves are NEVER uploaded or stored on our servers
                </p>
              </div>
            </div>

            {/* Telemetry Services */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 mb-6 border border-purple-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Notia Telemetry Services (Firebase Analytics)</h3>
              <div className="space-y-3 text-slate-700">
                <p><strong>Third-Party Provider:</strong> Google Firebase Analytics</p>
                <p><strong>Anonymous Data Collected:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ App usage patterns and feature interactions</p>
                  <p>→ Crash reports and error logs</p>
                  <p>→ Performance metrics and load times</p>
                  <p>→ A/B testing participation (anonymized)</p>
                </div>
                <p><strong>Data Retention:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ Analytics data: 14 months (Firebase default)</p>
                  <p>→ Crash reports: 90 days</p>
                  <p>→ Can be deleted upon user request</p>
                </div>
                <p className="font-medium text-slate-900 bg-blue-50 p-2 rounded">
                  🔒 <strong>Privacy Guarantee:</strong> No data sold or used for advertising purposes
                </p>
              </div>
            </div>

            {/* Data Subject Rights */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Your Data Rights & Control</h3>
              <div className="space-y-3 text-slate-700">
                <p><strong>You have the right to:</strong></p>
                <div className="ml-4 space-y-1">
                  <p>→ <strong>Access:</strong> Request a copy of your personal data</p>
                  <p>→ <strong>Rectification:</strong> Correct inaccurate information</p>
                  <p>→ <strong>Erasure:</strong> Delete your account and associated data</p>
                  <p>→ <strong>Portability:</strong> Export your data in a readable format</p>
                  <p>→ <strong>Opt-out:</strong> Disable analytics and telemetry collection</p>
                </div>
                <p className="font-medium text-slate-900">
                  Contact us at vastseaoffical0@outlook.com to exercise these rights.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center">
              <Lock className="h-6 w-6 text-orange-600 mr-3" />
              Core Privacy Principles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">🛡️ Privacy by Design</span>
                </div>
                <p className="text-slate-700">Built with privacy as a fundamental principle, not an afterthought</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">🔐 Data Minimization</span>
                </div>
                <p className="text-slate-700">We collect only what's necessary for app functionality</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">🌍 GDPR Compliant</span>
                </div>
                <p className="text-slate-700">Full compliance with European data protection standards</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="font-semibold text-slate-900">🚫 No Data Sales</span>
                </div>
                <p className="text-slate-700">Your data is never sold, shared, or used for advertising</p>
              </div>
            </div>
          </section>

          {/* Creator Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center">
              <Mail className="h-6 w-6 text-orange-600 mr-3" />
              Privacy Contact & Data Controller
            </h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-orange-800 font-bold text-lg">EK</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Egehan KAHRAMAN (VastSea)</h3>
                  <p className="text-slate-600">Data Controller & Privacy Officer</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Mail className="h-4 w-4" />
                  <a 
                    href="mailto:vastseaoffical0@outlook.com"
                    className="hover:text-orange-600 transition-colors font-medium"
                  >
                    vastseaoffical0@outlook.com
                  </a>
                </div>
                <p className="text-sm text-slate-600">
                  <strong>For privacy-related inquiries:</strong> Data access requests, deletion requests, 
                  privacy concerns, or questions about this policy.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Response time:</strong> We aim to respond to all privacy requests within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* License Notice */}
          <section className="bg-slate-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">License Notice</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                This software and its source code, assets, and AI features are the exclusive 
                property of <strong className="text-white">Egehan Kahraman (VastSea)</strong>.
              </p>
              <p>
                Unauthorized redistribution, reverse-engineering, or copying of any part of 
                Notia is strictly prohibited.
              </p>
              <p className="text-slate-100 font-semibold">
                All Rights Reserved © 2025
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Last updated: January 15, 2025 | Effective Date: January 15, 2025
            </p>
            <p className="text-xs text-slate-400 mt-2">
              This policy may be updated periodically. Users will be notified of significant changes.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Privacy;