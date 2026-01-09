/**
 * Product definitions for Stripe
 * These are the products available for purchase
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents (e.g., 599 = $5.99)
  currency: string;
  features: string[];
  popular?: boolean;
  stripeProductId?: string;
  stripePriceId?: string;
}

export const PRODUCTS: Record<string, Product> = {
  PAYCHECK_POWERHOUSE: {
    id: "paycheck-powerhouse",
    name: "Paycheck Powerhouse",
    description: "Professional Google Sheets budget tracker with 50/30/20 rule breakdown",
    price: 599, // $5.99
    currency: "USD",
    features: [
      "Smart budget tracker",
      "50/30/20 rule breakdown",
      "Real-time calculations",
      "Professional design",
      "Works on any device",
      "Fully customizable",
      "No subscriptions",
      "Lifetime access"
    ],
    popular: true,
    // These will be populated from Stripe dashboard
    stripeProductId: process.env.STRIPE_PRODUCT_ID,
    stripePriceId: process.env.STRIPE_PRICE_ID,
  }
};

export const getProduct = (productId: string): Product | undefined => {
  return PRODUCTS[productId];
};

export const getAllProducts = (): Product[] => {
  return Object.values(PRODUCTS);
};

export const getProductByStripeId = (stripePriceId: string): Product | undefined => {
  return Object.values(PRODUCTS).find(p => p.stripePriceId === stripePriceId);
};
