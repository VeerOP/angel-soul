import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { SESSIONS_OFFERINGS } from '../../data/spiritualData';
import { SessionOffering, BookingFormData } from '../../types';

interface BookingWizardProps {
  initialServiceId?: string | null;
  onComplete?: () => void;
  isModal?: boolean;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialServiceId,
  onComplete,
  isModal = false,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSession, setSelectedSession] = useState<SessionOffering>(() => {
    if (initialServiceId) {
      const match = SESSIONS_OFFERINGS.find((s) => s.id === initialServiceId || s.slug === initialServiceId);
      if (match) return match;
    }
    return SESSIONS_OFFERINGS[1]; // Energy Scan as default starting point
  });

  const [selectedFormat, setSelectedFormat] = useState<string>(() => {
    return selectedSession.pricingOptions[0]?.format || 'Standard';
  });

  const currentPrice = React.useMemo(() => {
    const opt = selectedSession.pricingOptions.find((p) => p.format === selectedFormat);
    return opt ? opt.price : selectedSession.startingPrice;
  }, [selectedSession, selectedFormat]);

  const [formData, setFormData] = useState<BookingFormData>({
    sessionId: selectedSession.id,
    sessionTitle: selectedSession.title,
    format: selectedFormat,
    price: currentPrice,
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    primaryConcern: '',
    preferredDate: '',
    preferredTimeSlot: 'Morning',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const [prevServiceId, setPrevServiceId] = useState(initialServiceId);
  if (initialServiceId !== prevServiceId) {
    setPrevServiceId(initialServiceId);
    if (initialServiceId) {
      const match = SESSIONS_OFFERINGS.find((s) => s.id === initialServiceId || s.slug === initialServiceId);
      if (match) {
        setSelectedSession(match);
        setSelectedFormat(match.pricingOptions[0]?.format || 'Standard');
      }
    }
  }

  const handleSessionSelect = (svc: SessionOffering) => {
    setSelectedSession(svc);
    const initialFormat = svc.pricingOptions[0]?.format || 'Standard';
    setSelectedFormat(initialFormat);
    setFormData((prev) => ({
      ...prev,
      sessionId: svc.id,
      sessionTitle: svc.title,
      format: initialFormat,
      price: svc.pricingOptions[0]?.price || svc.startingPrice,
    }));
  };

  const handleFormatSelect = (fmt: string) => {
    setSelectedFormat(fmt);
    const opt = selectedSession.pricingOptions.find((p) => p.format === fmt);
    const price = opt ? opt.price : selectedSession.startingPrice;
    setFormData((prev) => ({ ...prev, format: fmt, price }));
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 3) {
      if (!validateStep3()) return;
    }
    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);

      const text = `Hello Arti, I am booking an appointment with Angel Soul.
• Session: ${formData.sessionTitle} (${formData.format})
• Fee: ₹${formData.price ? formData.price.toLocaleString('en-IN') : 'Customised'}
• Name: ${formData.fullName}
• Phone: ${formData.phone}
${formData.email ? `• Email: ${formData.email}` : ''}
${formData.dateOfBirth ? `• DOB: ${formData.dateOfBirth}` : ''}
${formData.primaryConcern ? `• Notes: ${formData.primaryConcern}` : ''}`;

      setTimeout(() => {
        window.open(`https://wa.me/919619633432?text=${encodeURIComponent(text)}`, '_blank');
      }, 700);
    }, 600);
  };

  const steps = [
    { step: 1, title: 'Modality' },
    { step: 2, title: 'Format & Fee' },
    { step: 3, title: 'Details' },
    { step: 4, title: 'Confirm' },
  ];

  return (
    <div className={`w-full ${isModal ? '' : 'max-w-2xl mx-auto'}`}>
      {/* Step Indicators */}
      {!isConfirmed && (
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-sm mx-auto px-4">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs transition-all ${
                    currentStep === s.step
                      ? 'bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] font-medium shadow-sm'
                      : currentStep > s.step
                      ? 'bg-purple-100 dark:bg-white/10 text-[#3B1E54] dark:text-purple-300'
                      : 'border border-purple-200 dark:border-white/10 text-[#735391] dark:text-purple-400'
                  }`}
                >
                  {currentStep > s.step ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.step}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 mt-1">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Confirmation State */}
      {isConfirmed ? (
        <div className="text-center py-10 space-y-4">
          <CheckCircle2 className="w-10 h-10 text-[#3B1E54] dark:text-purple-300 mx-auto" />
          <h3 className="font-heading text-2xl text-[#241734] dark:text-white font-normal">
            Request Prepared
          </h3>
          <p className="text-xs sm:text-sm text-[#5C4573] dark:text-purple-200/80 font-sans max-w-md mx-auto leading-relaxed">
            Your booking details for <strong>{formData.sessionTitle}</strong> ({formData.format}) have been formatted for WhatsApp (+91 96196 33432).
          </p>

          <div className="p-4 rounded-2xl bg-[#F2ECF7]/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 max-w-md mx-auto text-left text-xs font-sans space-y-1">
            <p><strong>Name:</strong> {formData.fullName}</p>
            <p><strong>Session:</strong> {formData.sessionTitle} ({formData.format})</p>
            <p><strong>Investment:</strong> {formData.price ? `₹${formData.price.toLocaleString('en-IN')}` : 'Customised after scan'}</p>
          </div>

          <div className="pt-2 flex justify-center gap-3">
            {onComplete && (
              <button
                type="button"
                onClick={onComplete}
                className="px-6 py-2.5 rounded-full border border-purple-200 dark:border-white/20 text-[#3B1E54] dark:text-purple-200 text-xs font-sans uppercase tracking-[0.15em] font-medium hover:bg-purple-50 transition-colors cursor-pointer"
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Step 1: Select Session */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h4 className="font-heading text-xl text-[#241734] dark:text-white font-normal">
                Select Your Session
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                {SESSIONS_OFFERINGS.map((svc) => {
                  const isSelected = selectedSession.id === svc.id;
                  return (
                    <div
                      key={svc.id}
                      onClick={() => handleSessionSelect(svc)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all card-hover ${
                        isSelected
                          ? 'border-[#3B1E54] bg-[#F2ECF7]/80 dark:border-purple-300 dark:bg-white/10 shadow-sm'
                          : 'border-purple-200/80 bg-white/70 dark:bg-white/5 dark:border-white/10 hover:border-purple-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="font-heading text-base text-[#241734] dark:text-white font-medium">
                          {svc.title}
                        </span>
                        <span className="text-xs font-mono text-[#3B1E54] dark:text-purple-300 whitespace-nowrap font-medium">
                          {svc.startingPrice > 0 ? `₹${svc.startingPrice.toLocaleString('en-IN')}` : 'Customised'}
                        </span>
                      </div>
                      <p className="text-xs text-[#5C4573] dark:text-purple-200/80 font-sans line-clamp-2">
                        {svc.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Format & Pricing */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-heading text-xl text-[#241734] dark:text-white font-normal">
                  {selectedSession.title}
                </h4>
                <p className="text-xs text-[#735391] dark:text-purple-300 font-sans mt-0.5">
                  Select consultation medium:
                </p>
              </div>

              <div className="space-y-2">
                {selectedSession.pricingOptions.map((opt) => {
                  const isSelected = selectedFormat === opt.format;
                  return (
                    <div
                      key={opt.format}
                      onClick={() => handleFormatSelect(opt.format)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all flex items-center justify-between card-hover ${
                        isSelected
                          ? 'border-[#3B1E54] bg-[#F2ECF7]/80 dark:border-purple-300 dark:bg-white/10 shadow-sm'
                          : 'border-purple-200/80 bg-white/70 dark:bg-white/5 dark:border-white/10 hover:border-purple-300'
                      }`}
                    >
                      <div>
                        <span className="text-sm font-sans font-medium text-[#241734] dark:text-white block">
                          {opt.format}
                        </span>
                        {opt.note && (
                          <span className="text-xs text-[#5C4573] dark:text-purple-300 font-sans block mt-0.5">
                            {opt.note}
                          </span>
                        )}
                      </div>
                      <span className="font-heading text-lg text-[#3B1E54] dark:text-purple-200">
                        {opt.price > 0 ? `₹${opt.price.toLocaleString('en-IN')}` : 'Customised'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Client Details */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h4 className="font-heading text-xl text-[#241734] dark:text-white font-normal">
                Your Information
              </h4>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your name..."
                    className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                  />
                  {errors.fullName && <span className="text-[10px] text-red-500 font-sans">{errors.fullName}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98200XXXXX"
                      className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 font-sans">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#5C4573] dark:text-purple-300 block mb-1">
                    Notes / Area of Focus (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.primaryConcern}
                    onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value })}
                    placeholder="Briefly describe what you are looking to explore..."
                    className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h4 className="font-heading text-xl text-[#241734] dark:text-white font-normal">
                Review Details
              </h4>

              <div className="p-4 rounded-2xl bg-[#F2ECF7]/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 space-y-2 text-xs font-sans">
                <div className="flex justify-between py-1 border-b border-purple-200/60 dark:border-white/5">
                  <span className="text-[#5C4573] dark:text-purple-300">Session:</span>
                  <span className="font-medium text-[#241734] dark:text-white">{formData.sessionTitle}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-200/60 dark:border-white/5">
                  <span className="text-[#5C4573] dark:text-purple-300">Format:</span>
                  <span className="font-medium text-[#241734] dark:text-white">{formData.format}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-200/60 dark:border-white/5">
                  <span className="text-[#5C4573] dark:text-purple-300">Fee:</span>
                  <span className="font-medium text-[#3B1E54] dark:text-purple-200">
                    {formData.price > 0 ? `₹${formData.price.toLocaleString('en-IN')}` : 'Customised after scan'}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5C4573] dark:text-purple-300">Client:</span>
                  <span className="font-medium text-[#241734] dark:text-white">{formData.fullName} ({formData.phone})</span>
                </div>
              </div>
            </div>
          )}

          {/* Wizard Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-purple-200/80 dark:border-white/10">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-purple-200 text-xs font-sans uppercase tracking-[0.15em] font-medium flex items-center gap-1.5 hover:bg-purple-50 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium flex items-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleFinalSubmit}
                className="px-7 py-3 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium flex items-center gap-2 shadow-sm hover:shadow-md hover:shadow-purple-900/10 cursor-pointer"
              >
                <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send to WhatsApp (+91 96196 33432)'}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
