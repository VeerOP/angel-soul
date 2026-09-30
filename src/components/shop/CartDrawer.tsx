import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    total,
    specialInstructions,
    setSpecialInstructions,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const { showToast } = useToast();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    const itemList = items
      .map((i) => `• ${i.product.name} (Qty: ${i.quantity}${i.selectedSize ? `, ${i.selectedSize}` : ''}) — ₹${(i.product.price * i.quantity).toLocaleString('en-IN')}`)
      .join('\n');

    const msg = `Hello Arti, I would like to place an order from Angel Soul:
${itemList}
Total: ₹${total.toLocaleString('en-IN')}
${specialInstructions ? `Special Instructions: ${specialInstructions}` : ''}`;

    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      showToast({
        title: 'Order Prepared',
        message: 'Opening WhatsApp with your order details.',
        type: 'gold',
      });
      window.open(`https://wa.me/919619633432?text=${encodeURIComponent(msg)}`, '_blank');
    }, 700);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (orderComplete) {
      clearCart();
      setOrderComplete(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#F7F3FB] dark:bg-[#1A0E28] text-[#241734] dark:text-[#F5EEFA] shadow-2xl flex flex-col border-l border-purple-200 dark:border-white/10 relative"
            >
              {/* Header */}
              <div className="p-5 border-b border-purple-200/80 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#12091C]">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#3B1E54] dark:text-purple-300" />
                  <div>
                    <h3 className="font-heading text-lg font-normal text-[#241734] dark:text-white">
                      Shopping Bag
                    </h3>
                    <span className="text-[11px] text-[#735391] dark:text-purple-300 font-mono uppercase tracking-wider block">
                      {items.length} {items.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 rounded-full text-[#735391] hover:text-[#3B1E54] dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {orderComplete ? (
                  <div className="text-center py-12 px-4 space-y-4">
                    <h4 className="font-heading text-2xl text-[#241734] dark:text-white font-normal">
                      Order Details Sent
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C4573] dark:text-purple-200/80 leading-relaxed max-w-xs mx-auto font-sans">
                      Your order details have been forwarded to Arti Bhadra on WhatsApp (+91 96196 33432).
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-6 py-2.5 rounded-full bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.15em] font-medium cursor-pointer"
                    >
                      Return
                    </button>
                  </div>
                ) : items.length === 0 ? (
                  <div className="text-center py-16 px-4 space-y-4">
                    <ShoppingBag className="w-8 h-8 text-purple-300 mx-auto" />
                    <h4 className="font-heading text-xl text-[#241734] dark:text-white font-normal">
                      Your bag is empty
                    </h4>
                    <p className="text-xs text-[#5C4573] dark:text-purple-300 max-w-xs mx-auto leading-relaxed font-sans">
                      Discover personalised energy bracelets, aura cleansing salt, 100ml sprays, and consecrated crystals.
                    </p>
                    <Link
                      to="/products"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3B1E54] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] text-xs font-sans uppercase tracking-[0.15em] font-medium shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3">
                      {items.map((item, idx) => (
                        <div
                          key={`${item.product.id}-${item.selectedSize || 'def'}-${idx}`}
                          className="flex gap-3 p-3.5 bg-white dark:bg-[#12091C] rounded-2xl border border-purple-200/80 dark:border-white/10 relative card-hover"
                        >
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-16 h-16 rounded-xl object-cover bg-purple-50 flex-shrink-0"
                          />

                          <div className="flex-1 min-w-0 pr-6">
                            <h5 className="font-heading text-sm font-medium text-[#241734] dark:text-white leading-snug line-clamp-1">
                              {item.product.name}
                            </h5>

                            {item.selectedSize && (
                              <span className="block text-[11px] text-[#735391] dark:text-purple-300 font-sans mt-0.5">
                                Intention: {item.selectedSize}
                              </span>
                            )}

                            <div className="flex items-center justify-between mt-2">
                              <span className="font-sans font-medium text-xs text-[#3B1E54] dark:text-purple-200">
                                ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                              </span>

                              <div className="flex items-center border border-purple-200 dark:border-white/10 rounded-lg bg-[#F7F3FB] dark:bg-white/5">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.product.id,
                                      item.quantity - 1,
                                      item.selectedSize
                                    )
                                  }
                                  className="p-1 text-[#5C4573] hover:text-[#3B1E54] dark:hover:text-white cursor-pointer"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-2 text-xs font-mono font-medium text-[#241734] dark:text-white">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      item.product.id,
                                      item.quantity + 1,
                                      item.selectedSize
                                    )
                                  }
                                  className="p-1 text-[#5C4573] hover:text-[#3B1E54] dark:hover:text-white cursor-pointer"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id, item.selectedSize)}
                            className="absolute top-3 right-3 text-[#735391] hover:text-red-600 dark:hover:text-red-400 p-1 cursor-pointer transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Special Instructions */}
                    <div className="pt-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#735391] dark:text-purple-300 mb-1.5 font-medium">
                        Notes / DOB for Bracelet:
                      </label>
                      <textarea
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        placeholder="e.g. Date of Birth for bracelet or custom requests..."
                        rows={2}
                        className="w-full text-xs p-2.5 bg-white dark:bg-[#12091C] border border-purple-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-[#3B1E54] text-[#241734] dark:text-white font-sans transition-colors"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Summary */}
              {!orderComplete && items.length > 0 && (
                <div className="p-5 border-t border-purple-200/80 dark:border-white/10 bg-white dark:bg-[#12091C] space-y-3">
                  <div className="flex justify-between text-xs text-[#5C4573] dark:text-purple-300 font-sans">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#241734] dark:text-white">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm font-sans font-medium text-[#241734] dark:text-white pt-2 border-t border-purple-100 dark:border-white/5">
                    <span>Total</span>
                    <span className="font-heading text-lg text-[#3B1E54] dark:text-purple-200">
                      ₹{total.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full py-3.5 rounded-full bg-[#3B1E54] hover:bg-[#4E286E] text-white dark:bg-[#F5EEFA] dark:text-[#1F0E31] dark:hover:bg-white text-xs font-sans uppercase tracking-[0.15em] font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-purple-900/10 cursor-pointer"
                  >
                    <span>{isCheckingOut ? 'Preparing...' : 'Order via WhatsApp (+91 96196 33432)'}</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
