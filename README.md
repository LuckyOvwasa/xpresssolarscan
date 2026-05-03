# Xpress Solar — Product Info Scanner

A lightweight, single-purpose web app for in-store product QR scans. Customers scan a code on a physical product and instantly see its full details — like a smart digital product brochure.

This is **not a full e-commerce site**. There's no cart, no online checkout. The customer is already physically in your shop, so payment is handled at the counter. An optional bank transfer screen is provided if customers prefer to transfer right then and there.

## What's inside

```
xpress-scan/
├── index.html          ← Main HTML (~3 KB)
├── css/styles.css      ← Lean stylesheet (~12 KB)
├── js/data.js          ← Product catalog (edit to add products)
├── js/app.js           ← App logic (~10 KB)
└── README.md
```

## How it works

Each product has a unique URL slug. Generate a QR code that points to:

```
https://yoursite.com/#/<product-slug>
```

For example:
- Docan battery → `https://yoursite.com/#/lf280k-3v2-280ah`
- Deye inverter → `https://yoursite.com/#/deye-5kva-hybrid`
- Felicity battery → `https://yoursite.com/#/felicity-200ah-lithium`
- Canadian Solar panel → `https://yoursite.com/#/canadian-solar-450w`
- Growatt inverter → `https://yoursite.com/#/growatt-3-5kva-mppt`
- Trojan AGM battery → `https://yoursite.com/#/trojan-100ah-agm`

Print the QR code on a sticker, attach it to the physical product, and that's it. When a customer scans:

1. Their phone opens the URL
2. They see a **branded "Verified Product" header** (Xpress Solar trust signal)
3. **Full product details** load: photo, price, specs, compatibility, what's included, warranty, reviews
4. They can:
 - Speak to a staff member at the counter to buy
 - Tap **"Pay by Bank Transfer"** to see your account details (with copy button + WhatsApp receipt option)
 - Tap **"Ask a Question on WhatsApp"** to chat directly
 - Tap the phone number to call you

## Customer journey

```
🏪 Customer in your shop sees a battery
       ↓
📷 Scans QR code on the battery
       ↓
📱 Phone opens the product info page
       ↓
👁  Reads specs, sees price, gets confidence
       ↓
        ┌─────────────┴─────────────┐
        │                           │
   Walks to                  Taps "Pay by Bank Transfer"
   counter to pay            sees account details
   normally                  copies number, transfers,
                             sends receipt via WhatsApp
```

## Bank account details (for the Pay by Transfer modal)

These are stored in `js/data.js` in the `SHOP` object:

```javascript
const SHOP = {
  bankName: 'GTBank',
  accountName: 'Xpress Solar Ltd.',
  accountNumber: '0123456789',
  whatsapp: '2348068755564',
  phone: '+234 806 875 5564'
};
```

**Update these to your real account details before deploying.**

## Adding more products

Edit `js/data.js` and add a new entry to the `PRODUCTS` object:

```javascript
const PRODUCTS = {
  'your-new-slug': {
    name: 'Your Product Name',
    brand: 'Brand Name',
    sku: 'XS-CODE',
    subtitle: 'Short tagline',
    price: 250000,
    oldPrice: null,        // or e.g. 280000 if showing a discount
    rating: 4.8,
    reviewCount: 25,
    image: '🔋',           // emoji or unicode (or replace with actual image URL later)
    description: 'Full description here...',
    stats: [
      { label: 'CAPACITY', value: '100Ah', color: 'primary' },
      { label: 'VOLTAGE', value: '12V' },
      { label: 'WARRANTY', value: '2yr', color: 'success' }
    ],
    specs: [
      ['Brand', 'Brand Name'],
      ['Model', 'Model X'],
      // ... more spec rows
    ],
    compatibility: ['Use case 1', 'Use case 2'],
    included: ['Item 1', 'Item 2'],
    warranty: [
      ['Warranty Period', '12 Months']
    ],
    reviews: []  // add review objects here when you have them
  }
};
```

Then generate a QR code for `https://yoursite.com/#/your-new-slug`.

## Deploy in 2 minutes (Netlify)

1. Go to https://app.netlify.com/drop
2. Drag and drop the `xpress-scan` folder onto the page
3. Done — you'll get a URL like `https://random-name.netlify.app`

To use a custom domain (e.g. `scan.xpresssolar.com` or `xpresssolar.ng/scan`):
- Site Settings → Domain management → Add custom domain
- Add a CNAME record at your registrar pointing to the netlify subdomain

## Generating QR codes

Use any free QR generator:
- https://www.qr-code-generator.com — easy, free, customizable
- https://qrcode-monkey.com — supports logo embedding (add the Xpress Solar sun ☀️)
- https://www.qrcode-tiger.com — supports analytics if you upgrade

For each product, paste the URL like `https://yoursite.com/#/lf280k-3v2-280ah`, generate the QR code, then print it on durable sticker labels.

## Quick test

After deployment, open these URLs to see what customers will see:

| URL | Product |
|---|---|
| `yoursite.com/#/lf280k-3v2-280ah` | Docan LiFePO₄ 280Ah battery |
| `yoursite.com/#/deye-5kva-hybrid` | Deye 5KVA inverter |
| `yoursite.com/#/canadian-solar-450w` | 450W solar panel |
| `yoursite.com/#/` (no slug) | Welcome screen |
| `yoursite.com/#/wrong-slug` | "Product not found" page |

## What this app does NOT do

By design, this is intentionally minimal. It does NOT include:

- ❌ A homepage or shop page (this is a scanner target, not a website)
- ❌ A cart or online checkout
- ❌ Real-time payment processing
- ❌ Order tracking
- ❌ User accounts or login

If you later want a full e-commerce site, you can deploy the bigger `xpress-solar` project alongside this one — they can coexist on different domains or subdomains.

## Future improvements (when you're ready)

When you have time, consider:

1. **Replace emoji images with real product photos** — update the `image` field in `data.js` to be image URLs
2. **Add "Save to phone wallet"** — Apple Pay / Google Pay receipt format
3. **Connect to inventory** — show "5 left in stock" indicators
4. **Add analytics** — track which products get scanned most (Plausible, Umami, or Google Analytics)
5. **Add structured data (JSON-LD)** — helps Google index your product pages if customers later share the link

## Need help?

For technical questions, customizations, or to add features — reach out.

—
© 2026 Xpress Solar
