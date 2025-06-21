'use client';
import { useState } from 'react';
import { FiUpload, FiCreditCard, FiInfo, FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const STEPS = {
  BASIC_INFO: 0,
  MEDIA_UPLOAD: 1,
  PLAN_SELECTION: 2,
  BILLING: 3
};

const PLANS = [
  {
    name: 'Weekly',
    price: '625,000',
    duration: 'Per Week',
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time'
    ]
  },
  {
    name: 'Fortnight',
    price: '1,250,000',
    duration: 'Fifteen Days',
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time',
      'Extended Campaign Duration'
    ]
  },
  {
    name: 'Monthly',
    price: '2,500,000',
    duration: 'Per Month',
    popular: true,
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time',
      'Maximum Campaign Impact',
      'Best Value for Money'
    ]
  }
];

export default function NewAdPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(STEPS.BASIC_INFO);
  const [formData, setFormData] = useState({
    campaignName: '',
    companyName: '',
    businessAddress: '',
    productName: '',
    description: '',
    video: null,
    selectedPlan: null,
    billingInfo: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      name: ''
    }
  });
  const [showCustomPlanModal, setShowCustomPlanModal] = useState(false);
  const [videoError, setVideoError] = useState('');
  const [showThankYouScreen, setShowThankYouScreen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = () => {
        if (video.videoWidth === 1344 && video.videoHeight === 2112) {
          setFormData(prev => ({ ...prev, video: file }));
          setVideoError('');
        } else {
          setFormData(prev => ({ ...prev, video: null }));
          setVideoError('Video dimensions must be 1344x2112 pixels (7:11 aspect ratio)');
        }
      };

      video.src = URL.createObjectURL(file);
    }
  };

  const handlePlanSelect = (plan) => {
    setFormData(prev => ({ ...prev, selectedPlan: plan }));
  };

  const handleBillingInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      billingInfo: {
        ...prev.billingInfo,
        [name]: value
      }
    }));
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case STEPS.BASIC_INFO:
        return formData.campaignName && formData.companyName && formData.businessAddress && 
               formData.productName && formData.description;
      case STEPS.MEDIA_UPLOAD:
        return formData.video && !videoError;
      case STEPS.PLAN_SELECTION:
        return formData.selectedPlan;
      case STEPS.BILLING:
        return Object.values(formData.billingInfo).every(value => value);
      default:
        return false;
    }
  };

  const renderStepIndicator = () => (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4 sm:px-0">
      {/* Mobile Step Indicator */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= 0
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
            }`}>
              {currentStep + 1}
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {Object.keys(STEPS)[currentStep].split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Step {currentStep + 1} of {Object.keys(STEPS).length}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {Object.keys(STEPS).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === currentStep
                    ? 'bg-blue-600'
                    : index < currentStep
                    ? 'bg-blue-400'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Step Indicator */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          {Object.keys(STEPS).map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                index <= currentStep
                  ? 'bg-blue-600 text-white scale-110'
                  : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}>
                {index + 1}
              </div>
              <div className={`ml-2 text-sm font-medium transition-colors ${
                index <= currentStep
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {step.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ')}
              </div>
              {index < Object.keys(STEPS).length - 1 && (
                <div className="relative w-20 h-1 mx-4">
                  <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full`} />
                  <div
                    className={`absolute inset-0 bg-blue-600 rounded-full transition-all ${
                      index < currentStep ? 'w-full' : index === currentStep ? 'w-1/2' : 'w-0'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBasicInfo = () => (
    <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Campaign Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Name</label>
          <input
            type="text"
            name="campaignName"
            value={formData.campaignName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Business Address</label>
          <input
            type="text"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );

  const renderMediaUpload = () => (
    <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Upload Advertisement</h3>
      <div className="flex items-center justify-center w-full">
        <label className="w-full flex flex-col items-center justify-center px-4 py-6 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg border-2 border-gray-300 dark:border-gray-600 border-dashed cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FiUpload className="w-12 h-12 mb-4" />
            <p className="mb-2 text-sm">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Video (1344x2112 pixels)</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Aspect ratio 7:11</p>
            {videoError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{videoError}</p>
            )}
            {formData.video && !videoError && (
              <div className="mt-2 text-center">
                <p className="text-sm text-green-600 dark:text-green-400">Video uploaded successfully</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Dimensions: 1344x2112 (7:11)
                </p>
              </div>
            )}
          </div>
          <input
            type="file"
            className="hidden"
            accept="video/*"
            onChange={handleVideoUpload}
          />
        </label>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        <p className="font-medium mb-2">Video Requirements:</p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li>Dimensions: 1344x2112 pixels</li>
          <li>Aspect Ratio: 7:11</li>
          <li>Format: MP4 recommended</li>
          <li>Maximum file size: 100MB</li>
        </ul>
      </div>
    </div>
  );

  const renderPlanSelection = () => (
    <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Select a Plan</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border-2 p-6 cursor-pointer transition-all ${
              formData.selectedPlan?.name === plan.name
                ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
            }`}
            onClick={() => handlePlanSelect(plan)}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                Popular
              </span>
            )}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Rs. {plan.price}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{plan.duration}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          type="button"
          onClick={() => setShowCustomPlanModal(true)}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          <FiInfo className="mr-2" />
          Need a custom plan?
        </button>
      </div>
    </div>
  );

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `#${timestamp.slice(-8)}${random}`;
  };

  const renderBilling = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Payment Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Payment Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cardholder Name</label>
              <input
                type="text"
                name="name"
                value={formData.billingInfo.name}
                onChange={handleBillingInfoChange}
                placeholder="Dev @ Intelik"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.billingInfo.cardNumber}
                  onChange={handleBillingInfoChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full pl-4 pr-12 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <img 
                    src="/Visa_Brandmark_Blue_RGB_2021.png" 
                    alt="Visa" 
                    className="h-5 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.billingInfo.expiryDate}
                  onChange={handleBillingInfoChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.billingInfo.cvv}
                  onChange={handleBillingInfoChange}
                  placeholder="123"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Payment Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Plan</span>
              <span className="font-medium text-gray-900 dark:text-white">{formData.selectedPlan?.name}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Duration</span>
              <span className="font-medium text-gray-900 dark:text-white">{formData.selectedPlan?.duration}</span>
            </div>
            <div className="flex justify-between items-center pb-4">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="font-medium text-gray-900 dark:text-white">Rs. {formData.selectedPlan?.price}</span>
            </div>
            <div className="flex justify-between items-center text-sm pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Tax</span>
              <span className="font-medium text-green-600 dark:text-green-400">Included</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Rs. {formData.selectedPlan?.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderThankYou = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">Thanks!</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Your order confirmation number is<br />
            <span className="font-mono text-gray-900 dark:text-white font-medium">{orderNumber}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            An email will be sent to you with options to track your delivery.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="font-medium text-gray-900 dark:text-white">Rs. {formData.selectedPlan?.price}</span>
            </div>
            <div className="flex justify-between text-sm pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Tax</span>
              <span className="font-medium text-green-600 dark:text-green-400">Included</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-medium text-gray-900 dark:text-white">Total</span>
              <span className="font-bold text-gray-900 dark:text-white">Rs. {formData.selectedPlan?.price}</span>
            </div>
          </div>
          <button
            onClick={() => router.push('/dashboard/ads')}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case STEPS.BASIC_INFO:
        return renderBasicInfo();
      case STEPS.MEDIA_UPLOAD:
        return renderMediaUpload();
      case STEPS.PLAN_SELECTION:
        return renderPlanSelection();
      case STEPS.BILLING:
        return renderBilling();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 sm:py-8">
      {showThankYouScreen ? (
        renderThankYou()
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6 sm:mb-8">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FiArrowLeft className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Back to Dashboard</span>
              <span className="sm:hidden">Back</span>
            </button>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Create New Ad Campaign</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Fill in the details below to create your new advertising campaign
            </p>
          </div>

          {renderStepIndicator()}
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 sm:p-6">
                {renderStepContent()}
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => currentStep > 0 ? setCurrentStep(currentStep - 1) : router.back()}
                    className="order-2 sm:order-1 w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors"
                  >
                    {currentStep === 0 ? 'Cancel' : 'Back'}
                  </button>
                  <button
                    type="button"
                    disabled={!isCurrentStepValid()}
                    onClick={() => {
                      if (currentStep < STEPS.BILLING) {
                        setCurrentStep(currentStep + 1);
                      } else {
                        // Handle form submission
                        const newOrderNumber = generateOrderNumber();
                        setOrderNumber(newOrderNumber);
                        setShowThankYouScreen(true);
                      }
                    }}
                    className={`order-1 sm:order-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-all ${
                      isCurrentStepValid()
                        ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transform hover:scale-105'
                        : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-75'
                    }`}
                  >
                    {currentStep === STEPS.BILLING ? 'Complete Payment' : 'Continue'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Plan Modal */}
      {showCustomPlanModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
            </div>
            <div className="inline-block w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl text-left overflow-hidden shadow-xl transform transition-all">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Custom Plan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Please contact our sales team to discuss custom advertising solutions tailored to your specific needs.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  onClick={() => setShowCustomPlanModal(false)}
                  className="w-full sm:w-auto inline-flex justify-center rounded-lg border border-transparent px-4 py-2.5 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 sm:text-sm transition-colors"
                >
                  Contact Sales
                </button>
                <button
                  type="button"
                  onClick={() => setShowCustomPlanModal(false)}
                  className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center rounded-lg border border-gray-300 px-4 py-2.5 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 sm:text-sm transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 