# Stripe Payment Testing Guide

Complete guide to test your Stripe integration before going live.

## 🧪 Pre-Testing Checklist

- [ ] Stripe account created
- [ ] API keys obtained (test mode)
- [ ] Webhook secret configured
- [ ] Environment variables set
- [ ] Website deployed or running locally
- [ ] Google Sheets link updated in code

## 🏃 Quick Test (5 minutes)

### 1. Start Your Website

**Local testing:**
```bash
cd /home/ubuntu/paycheck-powerhouse-website
pnpm dev
# Visit http://localhost:3000
```

**Deployed testing:**
- Visit your live website URL

### 2. Click "Buy Now"

1. Go to home page
2. Click any "Buy Now - £5.99" button
3. You should be redirected to Stripe Checkout

### 3. Enter Test Card

Use this test card:
- **Number**: 4242 4242 4242 4242
- **Expiry**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits (e.g., 123)
- **Email**: test@example.com

### 4. Complete Payment

1. Fill in all fields
2. Click "Pay"
3. You should see success page
4. Check Stripe Dashboard for the payment

## 🔍 Detailed Testing Steps

### Test 1: Basic Payment Flow

**Objective**: Verify payment completes successfully

1. Open website
2. Click "Buy Now"
3. Enter test card 4242 4242 4242 4242
4. Complete payment
5. **Expected**: Success page shows, Stripe Dashboard shows payment

### Test 2: Failed Payment

**Objective**: Verify error handling

1. Open website
2. Click "Buy Now"
3. Enter test card 4000 0000 0000 0002 (fails)
4. Try to complete payment
5. **Expected**: Error message appears, payment fails in Stripe

### Test 3: Webhook Delivery

**Objective**: Verify webhooks are received

1. Complete a test payment (Test 1)
2. Go to Stripe Dashboard
3. Navigate to **Developers** → **Webhooks**
4. Click your endpoint
5. Look for `checkout.session.completed` event
6. Click on it to see details
7. **Expected**: Event shows "Processed" status

### Test 4: Success Page

**Objective**: Verify success page displays correctly

1. Complete a test payment
2. Check success page shows:
   - ✅ Success message
   - ✅ Order ID
   - ✅ Amount paid
   - ✅ "Get Your Template" button
   - ✅ Step-by-step instructions

### Test 5: Promotion Code

**Objective**: Verify discount codes work

1. Create a test coupon in Stripe Dashboard:
   - Go to **Products** → **Coupons**
   - Click **"Create coupon"**
   - Set 50% discount
   - Save coupon code (e.g., SAVE50)

2. Go to checkout
3. Look for "Add promo code" option
4. Enter your coupon code
5. **Expected**: Price reduces by 50%

### Test 6: Different Payment Methods

**Objective**: Verify multiple payment methods work

Test these cards:

| Method | Card | Expected |
|--------|------|----------|
| Visa | 4242 4242 4242 4242 | Success |
| Mastercard | 5555 5555 5555 4444 | Success |
| American Express | 3782 822463 10005 | Success |
| Declined | 4000 0000 0000 0002 | Failure |
| Requires Auth | 4000 0025 0000 3155 | Auth required |

### Test 7: Mobile Checkout

**Objective**: Verify mobile experience works

1. Open website on mobile device (or use browser dev tools)
2. Click "Buy Now"
3. Verify Stripe Checkout is mobile-optimized
4. Complete payment
5. **Expected**: Checkout is responsive and easy to use

### Test 8: Email Confirmation

**Objective**: Verify confirmation email is sent

1. Complete a test payment with your real email
2. Check your email inbox
3. **Expected**: Confirmation email received with order details

## 🐛 Troubleshooting

### Checkout Button Not Working

**Problem**: Clicking "Buy Now" does nothing

**Solutions**:
1. Check browser console for errors (F12)
2. Verify API keys are set correctly
3. Check network tab to see if API call succeeds
4. Verify `/api/stripe/checkout` endpoint exists

### Checkout Page Won't Load

**Problem**: Stripe Checkout page shows error

**Solutions**:
1. Verify Stripe API keys are correct
2. Check that webhook URL is correct
3. Ensure website is using HTTPS (required for live mode)
4. Check Stripe Dashboard for any account issues

### Webhook Not Firing

**Problem**: Webhook events not appearing in Stripe Dashboard

**Solutions**:
1. Verify webhook URL is correct
2. Check firewall/security settings
3. Ensure website is publicly accessible
4. Use Stripe CLI to test locally: `stripe listen --forward-to localhost:3000/api/stripe/webhook`

### Payment Succeeds but No Success Page

**Problem**: After payment, redirected to wrong page

**Solutions**:
1. Check that success_url is correct in checkout code
2. Verify website domain matches in Stripe settings
3. Check browser console for errors
4. Clear browser cache and try again

### Test Cards Not Working

**Problem**: Test card numbers are declined

**Solutions**:
1. Ensure you're in **test mode** (not live mode)
2. Use correct test card numbers from this guide
3. Use future expiration date
4. Use any 3-digit CVC
5. Check Stripe Dashboard for card requirements

## 📊 Monitoring Test Payments

### View Test Payments

1. Go to Stripe Dashboard
2. Ensure **Test mode** is ON (toggle in top right)
3. Go to **Payments** → **Payments**
4. You'll see all test transactions

### View Webhook Events

1. Go to **Developers** → **Webhooks**
2. Click your endpoint
3. See all webhook deliveries
4. Click on event to see payload

### View Logs

1. Go to **Developers** → **Logs**
2. See all API calls made
3. Helpful for debugging issues

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] All test payments complete successfully
- [ ] Success page displays correctly
- [ ] Webhook events are received
- [ ] Error messages display properly
- [ ] Mobile checkout works
- [ ] Promotion codes work
- [ ] Multiple payment methods work
- [ ] Email confirmations send
- [ ] Google Sheets link is correct
- [ ] Website is using HTTPS
- [ ] Stripe account is verified
- [ ] Live API keys are ready

## 🚀 Switching to Live Mode

Once testing is complete:

1. **Get Live Keys**:
   - Complete Stripe verification
   - Go to **Developers** → **API keys**
   - Copy live Secret key and Publishable key

2. **Update Environment Variables**:
   - Go to Settings → Secrets
   - Update with live keys
   - Redeploy website

3. **Update Webhook**:
   - Add new webhook endpoint with live domain
   - Get new webhook signing secret
   - Update `STRIPE_WEBHOOK_SECRET`

4. **Test Live Payment**:
   - Use real card (small amount)
   - Verify payment appears in Stripe
   - Check success page

5. **Monitor First Payments**:
   - Watch Stripe Dashboard for transactions
   - Check webhook delivery
   - Monitor for errors

## 📞 Getting Help

If tests fail:

1. **Check Stripe Logs**:
   - Developers → Logs
   - See what API calls failed

2. **Check Webhook Logs**:
   - Developers → Webhooks
   - See webhook delivery status

3. **Check Browser Console**:
   - Press F12
   - Look for JavaScript errors

4. **Contact Stripe Support**:
   - https://support.stripe.com
   - Provide error details and logs

## 🎓 Test Scenarios

### Scenario 1: New Customer Purchase

1. First-time visitor
2. Click "Buy Now"
3. Enter email (first time)
4. Complete payment
5. Verify success page and email

### Scenario 2: Returning Customer

1. Previous customer
2. Click "Buy Now"
3. Stripe remembers email
4. Quick checkout
5. Verify success page

### Scenario 3: Abandoned Checkout

1. Start checkout
2. Close browser without paying
3. Return to website
4. Click "Buy Now" again
5. Verify new checkout session created

### Scenario 4: Multiple Purchases

1. Complete first payment
2. Go back to home
3. Click "Buy Now" again
4. Complete second payment
5. Verify both appear in Stripe Dashboard

---

**Testing complete? You're ready to go live! 🚀**
