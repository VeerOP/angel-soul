import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, BRAND_INFO } from '../data/spiritualData';
import { ArrowLeft, ShoppingBag, MessageCircle, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : '');
  const [prevSlug, setPrevSlug] = useState(slug);
  const [dob, setDob] = useState('');

  if (slug !== prevSlug) {
    setPrevSlug(slug);
    setSelectedOption(product.options ? product.options[0] : '');
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, 1, selectedOption || undefined);
    showToast({
      title: 'Added to Bag',
      message: `${product.name} ${selectedOption ? `(${selectedOption})` : ''} added to your bag.`,
      type: 'gold'
    });
  };

  return (
    <div className="pt-12 pb-28 bg-[#F7F3FB] text-[#241734] dark:bg-[#12091C] dark:text-[#F5EEFA] min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.15em] text-[#735391] dark:text-purple-300 hover:text-[#3B1E54] dark:hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-[#1A0E28]/85 p-8 sm:p-12 rounded-3xl border border-purple-200/80 dark:border-white/10 shadow-lg shadow-purple-900/5 backdrop-blur-xs space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Image with zoom on hover */}
            <div className="md:col-span-5">
              <div className="aspect-square rounded-2xl overflow-hidden bg-purple-50 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 group">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#735391] dark:text-purple-300 block mb-1">
                    {product.category}
                  </span>
                  <h1 className="font-heading text-2xl sm:text-3xl text-[#241734] dark:text-[#F5EEFA] font-normal">
                    {product.name}
                  </h1>
                </div>
                <span className="font-heading text-xl text-[#3B1E54] dark:text-purple-200 whitespace-nowrap">
                  {product.badge || `₹${product.price.toLocaleString('en-IN')}`}
                </span>
              </div>

              <div className="w-8 h-px bg-purple-200 dark:bg-white/10" />

              <p className="text-[#4A3B5C] dark:text-purple-200/80 font-sans text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Options */}
              {product.options && product.options.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 block">
                    Select Intention:
                  </label>
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                  >
                    {product.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt} (₹1,111)
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* DOB input for bracelet */}
              {product.isCustomizable && (
                <div className="p-4 rounded-2xl bg-[#F2ECF7]/70 dark:bg-white/5 border border-purple-200/60 dark:border-white/10 space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#3B1E54] dark:text-purple-200 block font-medium">
                    Your Date of Birth (for energetic alignment):
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full text-xs font-sans p-2.5 rounded-xl border border-purple-200 dark:border-white/15 bg-white dark:bg-[#12091C] text-[#241734] dark:text-white focus:outline-none focus:border-[#3B1E54] transition-colors"
                  />
                </div>
              )}

              {/* Features Checklist */}
              <div className="space-y-2 pt-2">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#4A3B5C] dark:text-purple-200/70 font-sans">
                    <Check className="w-3.5 h-3.5 text-[#3B1E54] dark:text-purple-300 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-purple-900/10 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
                <a
                  href={`${BRAND_INFO.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Arti, I would like to order ${product.name}${selectedOption ? ` (${selectedOption})` : ''}${dob ? ` with DOB: ${dob}` : ''}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-purple-200 dark:border-white/15 text-[#3B1E54] dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-white/5 text-xs font-sans uppercase tracking-[0.15em] font-medium transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
