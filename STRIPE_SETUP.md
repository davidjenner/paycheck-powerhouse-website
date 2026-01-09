# Stripe Payment Integration Guide

This guide explains how to set up and configure Stripe payments for your Paycheck Powerhouse website.

## 🔑 Getting Your Stripe Keys

### Step 1: Create a Stripe Account

1. Go to [Stripe.com](https://stripe.com)
2. Click **"Start now"** or **"Sign up"**
3. Fill in your business information
4. Verify your email address
5. Complete the account setup

### Step 2: Get Your API Keys

1. Log in to your Stripe Dashboard
2. Go to **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_`)
   - **Secret key** (starts with `sk_`)

⚠️ **Important**: Never share your Secret key! Keep it private.

### Step 3: Get Your Webhook Secret

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **"Add endpoint"**
3. Enter your webhook URL: `https://your-domain.com/api/stripe/webhook`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click **"Add endpoint"**
6. Copy the **Signing secret** (starts with `whsec_`)

## 🔐 Configure Environment Variables

Your Stripe keys are automatically configured in the environment. If you need to update them:

1. Go to your Manus dashboard
2. Click **Settings** → **Secrets**
3. Update these values:
   - `STRIPE_SECRET_KEY` - Your secret key
   - `STRIPE_WEBHOOK_SECRET` - Your webhook signing secret
   - `VITE_STRIPE_PUBLISHABLE_KEY` - Your publishable key

## 💳 Testing Payments

### Test Card Numbers

Use these card numbers to test payments in **test mode**:

| Card Type | Number | Exp | CVC |
|-----------|--------|-----|-----|
| Visa | 4242 4242 4242 4242 | Any future date | Any 3 digits |
| Visa (debit) | 4000 0566 5566 5556 | Any future date | Any 3 digits |
| Mastercard | 5555 5555 5555 4444 | Any future date | Any 3 digits |
| Amex | 3782 822463 10005 | Any future date | Any 4 digits |

### Test a Payment

1. Visit your website
2. Click "Buy Now - £5.99"
3. Use one of the test card numbers above
4. Fill in any email and future expiration date
5. Click "Pay"
6. You should see a success page

## 📊 Monitoring Payments

### View Payments in Stripe Dashboard

1. Go to **Payments** → **Payments**
2. You'll see all transactions
3. Click on a payment to see details

### View Webhooks

1. Go to **Developers** → **Webhooks**
2. Click on your endpoint
3. See all webhook events and their status
4. Troubleshoot failed webhooks here

## 🚀 Going Live

### Step 1: Claim Your Stripe Sandbox

When you first set up Stripe, you get a test sandbox. To go live:

1. Go to your Stripe Dashboard
2. You'll see a banner to claim your sandbox
3. Click the link and follow the instructions
4. This gives you a dedicated test environment

### Step 2: Complete Stripe Verification

1. Stripe will ask for business information
2. Provide:
   - Business name
   - Business address
   - Owner information
   - Bank account details
3. Stripe reviews your information (usually 1-2 days)
4. Once approved, you get live API keys

### Step 3: Switch to Live Mode

1. In Stripe Dashboard, toggle **"Test mode"** to OFF
2. Go to **Developers** → **API keys**
3. Copy your **live** Secret key and Publishable key
4. Update your environment variables with live keys
5. Redeploy your website

### Step 4: Update Webhook URL

1. Go to **Developers** → **Webhooks**
2. Add a new endpoint with your live domain
3. Get the new webhook signing secret
4. Update `STRIPE_WEBHOOK_SECRET` with the live secret

## 💰 Pricing Configuration

### Update Product Price

Edit `shared/products.ts`:

```typescript
export const PRODUCTS: Record<string, Product> = {
  PAYCHECK_POWERHOUSE: {
    id: "paycheck-powerhouse",
    name: "Paycheck Powerhouse",
    price: 599, // Price in cents (£5.99)
    // ... other fields
  }
};
```

To change price to £9.99, set `price: 999`

### Add Promotion Codes

1. In Stripe Dashboard, go to **Products** → **Coupons**
2. Click **"Create coupon"**
3. Set discount percentage or fixed amount
4. Set expiration date
5. Customers can use the code at checkout

## 📧 Sending Confirmation Emails

When a customer completes a purchase, you should send them a confirmation email with the Google Sheets link.

### Implement Email Sending

Edit `server/routes/stripe.ts` in the `handleCheckoutSessionCompleted` function:

```typescript
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const productId = session.metadata?.product_id;
  const customerEmail = session.customer_email;

  if (productId && customerEmail) {
    // Send email to customer
    await sendPurchaseEmail(customerEmail, productId);
  }
}
```

You can use services like:
- **SendGrid** - Email API
- **Mailgun** - Email service
- **AWS SES** - Amazon email service
- **Resend** - Modern email API

## 🔗 Webhook Troubleshooting

### Webhook Not Receiving Events

1. Check that your webhook URL is correct
2. Verify HTTPS is enabled
3. Check firewall/security settings
4. Look at webhook logs in Stripe Dashboard

### Test Webhook Locally

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Run: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
3. This forwards Stripe events to your local server
4. Test payments will trigger webhooks

## 🛡️ Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Use HTTPS** - Always use secure connections
3. **Verify webhook signatures** - Already implemented
4. **Don't store card data** - Stripe handles this
5. **Rotate keys regularly** - Update old keys
6. **Monitor for fraud** - Check Stripe Dashboard
7. **Use strong passwords** - Protect your account

## 📱 Mobile Checkout

Stripe Checkout automatically adapts for mobile:
- Optimized layout for small screens
- Touch-friendly buttons
- Mobile payment methods (Apple Pay, Google Pay)
- No additional configuration needed

## 🌍 International Payments

Stripe supports payments in many countries and currencies.

### Add More Currencies

Edit `shared/products.ts`:

```typescript
export const PRODUCTS: Record<string, Product> = {
  PAYCHECK_POWERHOUSE: {
    // ... existing fields
    currency: "USD", // Change to GBP, EUR, etc.
  }
};
```

Supported currencies: USD, EUR, GBP, CAD, AUD, JPY, and 130+ more

## 💡 Advanced Features

### Recurring Billing (Subscriptions)

To add subscriptions instead of one-time payments:

1. Change checkout mode from `payment` to `subscription`
2. Create a subscription product in Stripe
3. Update the checkout session code

### Custom Receipts

Stripe automatically sends receipts. To customize:

1. Go to **Settings** → **Receipts**
2. Add your logo and custom message
3. Receipts will include your branding

### Tax Calculation

Enable Stripe Tax:

1. Go to **Settings** → **Tax**
2. Enable tax collection
3. Configure tax rates
4. Tax is automatically calculated at checkout

## 🆘 Support

If you encounter issues:

1. Check Stripe Dashboard → **Developers** → **Logs**
2. Review webhook delivery status
3. Check browser console for errors
4. Contact Stripe Support: https://support.stripe.com

## 📚 Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Webhook Events](https://stripe.com/docs/api/events)

---

**Your Stripe integration is now ready! Start accepting payments today! 💳**
