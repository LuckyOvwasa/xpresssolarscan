// ═══════════════════════════════════════════════════════════════
// XPRESS SOLAR — PRODUCT DATA (Scanner App)
// ═══════════════════════════════════════════════════════════════

const SHOP = {
  name: 'Xpress Solar',
  tagline: 'Authentic Product · Verified',
  whatsapp: '2348068755564',
  phone: '+234 806 875 5564',
  bankName: 'GTBank',
  accountName: 'Xpress Solar Ltd.',
  accountNumber: '0123456789'
};

const PRODUCTS = {
  'lf280k-3v2-280ah': {
    name: '3.2V LiFePO₄ Battery Cell — 280Ah',
    brand: 'Docan Power',
    sku: 'XS-LF280K',
    subtitle: 'Lithium Iron Phosphate · 6,000+ cycles · Grade A',
    price: 185000,
    oldPrice: 220000,
    rating: 4.9,
    reviewCount: 127,
    image: '🔋',
    description: 'Premium-grade LiFePO₄ (Lithium Iron Phosphate) prismatic battery cell from Docan Power. Engineered for solar energy storage systems, electric vehicles, and backup power applications. Long cycle life, high thermal stability, and safe chemistry — ideal for daily deep-cycle use. This is a Grade A cell with matched internal resistance, ensuring optimal performance when assembled into battery banks.',
    stats: [
      { label: 'CAPACITY', value: '280Ah', color: 'primary' },
      { label: 'VOLTAGE', value: '3.2V' },
      { label: 'CYCLES', value: '6000+', color: 'success' }
    ],
    specs: [
      ['Brand', 'Docan Power'],
      ['Model', 'LF280K'],
      ['Chemistry', 'LiFePO₄ (LFP)'],
      ['Nominal Voltage', '3.2V'],
      ['Charging Voltage', '3.65V'],
      ['Capacity', '280Ah'],
      ['Internal Resistance', '≤ 0.18 mΩ'],
      ['Cycle Life', '6,000+ cycles'],
      ['Operating Temp', '-20°C to 60°C'],
      ['Weight', '5.4 kg'],
      ['Dimensions', '173 × 72 × 207 mm'],
      ['Origin', 'Made in China']
    ],
    compatibility: ['Solar Inverters', '12V Systems', '24V Systems', '48V Systems', 'EV Conversions', 'UPS Backup'],
    included: ['1× LiFePO₄ Cell (280Ah)', '2× Battery Terminal Bolts', '1× Quick Start Guide', '12-Month Warranty Card'],
    warranty: [
      ['Warranty Period', '12 Months'],
      ['Coverage', 'Manufacturer Defects'],
      ['Returns', '7 days, unused']
    ],
    reviews: [
      { name: 'Adebayo K.', date: '2 weeks ago', stars: 5, text: 'Exactly as described. Already powering my 5KVA inverter for 3 days non-stop. Excellent product.' },
      { name: 'Chidinma O.', date: '1 month ago', stars: 5, text: 'Bought 16 cells for my 48V system. Xpress Solar delivered same-day in Lagos. Cells are well-balanced.' }
    ]
  },

  'deye-5kva-hybrid': {
    name: '5KVA Hybrid Inverter',
    brand: 'Deye',
    sku: 'XS-DEYE5K',
    subtitle: 'High-frequency · MPPT · WiFi-enabled',
    price: 485000,
    oldPrice: null,
    rating: 4.8,
    reviewCount: 89,
    image: '⚡',
    description: 'Deye 5KVA hybrid inverter with built-in MPPT solar charge controller. Supports both grid-tie and off-grid operation. WiFi monitoring through the SOLARMAN app. Industry-leading efficiency and reliable performance for homes and small businesses.',
    stats: [
      { label: 'CAPACITY', value: '5KVA', color: 'primary' },
      { label: 'VOLTAGE', value: '48V' },
      { label: 'EFFICIENCY', value: '97%', color: 'success' }
    ],
    specs: [
      ['Brand', 'Deye'],
      ['Model', 'SUN-5K-SG03LP1-EU'],
      ['Capacity', '5KVA / 5000W'],
      ['Battery Voltage', '48V'],
      ['Max PV Input', '6500W'],
      ['Efficiency', '97%'],
      ['Surge Power', '10000W (5s)'],
      ['Communication', 'WiFi / RS485'],
      ['Weight', '11 kg'],
      ['Origin', 'Made in China']
    ],
    compatibility: ['Solar Panels', 'LiFePO₄ Batteries', 'Lead-Acid Batteries', 'Grid-Tie', 'Off-Grid', 'Hybrid Systems'],
    included: ['1× 5KVA Inverter', '1× WiFi Module', '1× User Manual', '24-Month Warranty Card', 'Mounting Hardware'],
    warranty: [
      ['Warranty Period', '24 Months'],
      ['Coverage', 'Full Manufacturer Warranty'],
      ['Returns', '7 days, sealed']
    ],
    reviews: [
      { name: 'Tunde M.', date: '3 weeks ago', stars: 5, text: 'Brilliant inverter. Switching is seamless. WiFi monitoring lets me check my system from anywhere.' }
    ]
  },

  'felicity-200ah-lithium': {
    name: '200Ah Lithium Battery',
    brand: 'Felicity',
    sku: 'XS-FEL200',
    subtitle: 'Wall-mount · Built-in BMS · 6000 cycles',
    price: 650000,
    oldPrice: 720000,
    rating: 4.7,
    reviewCount: 64,
    image: '🔋',
    description: 'Premium 48V 200Ah lithium battery from Felicity. Wall-mountable design with built-in BMS protection, LCD display, and CAN/RS485 communication. Plug-and-play with most leading hybrid inverters.',
    stats: [
      { label: 'CAPACITY', value: '200Ah', color: 'primary' },
      { label: 'VOLTAGE', value: '48V' },
      { label: 'CYCLES', value: '6000+', color: 'success' }
    ],
    specs: [
      ['Brand', 'Felicity'],
      ['Model', 'LPBA48200'],
      ['Chemistry', 'LiFePO₄'],
      ['Voltage', '48V (51.2V nominal)'],
      ['Capacity', '200Ah / 10.24 kWh'],
      ['Cycles', '6,000 @ 80% DoD'],
      ['Communication', 'CAN, RS485'],
      ['Weight', '95 kg']
    ],
    compatibility: ['Deye', 'Growatt', 'Sungrow', 'SunSynk', 'Voltronic'],
    included: ['1× Battery Unit', '1× Wall Mount Kit', '1× Communication Cable', '1× User Manual', '24-Month Warranty'],
    warranty: [
      ['Warranty Period', '24 Months'],
      ['Coverage', 'Manufacturer Defects'],
      ['Returns', '7 days, unused']
    ],
    reviews: []
  },

  'canadian-solar-450w': {
    name: '450W Mono Solar Panel',
    brand: 'Canadian Solar',
    sku: 'XS-CS450',
    subtitle: 'Monocrystalline · 25-year warranty · A-grade',
    price: 155000,
    oldPrice: null,
    rating: 4.9,
    reviewCount: 156,
    image: '☀️',
    description: 'Canadian Solar HiKu 450W monocrystalline panel. Industry-leading efficiency with 25-year linear performance warranty. Perfect for residential and commercial installations.',
    stats: [
      { label: 'POWER', value: '450W', color: 'primary' },
      { label: 'EFFICIENCY', value: '20.9%' },
      { label: 'WARRANTY', value: '25yr', color: 'success' }
    ],
    specs: [
      ['Brand', 'Canadian Solar'],
      ['Model', 'HiKu CS3W-450MS'],
      ['Type', 'Monocrystalline'],
      ['Power', '450W'],
      ['Efficiency', '20.9%'],
      ['Voltage (Vmp)', '41.4V'],
      ['Current (Imp)', '10.87A'],
      ['Dimensions', '2108 × 1048 × 35 mm'],
      ['Weight', '24.9 kg']
    ],
    compatibility: ['MPPT Charge Controllers', 'Hybrid Inverters', 'Grid-Tie Inverters'],
    included: ['1× 450W Solar Panel', '25-Year Linear Performance Warranty'],
    warranty: [
      ['Performance Warranty', '25 Years'],
      ['Product Warranty', '12 Years']
    ],
    reviews: []
  },

  'growatt-3-5kva-mppt': {
    name: '3.5KVA MPPT Inverter',
    brand: 'Growatt',
    sku: 'XS-GW3500',
    subtitle: 'Pure sine wave · 80A MPPT · Reliable',
    price: 345000,
    oldPrice: null,
    rating: 4.6,
    reviewCount: 42,
    image: '⚡',
    description: 'Growatt 3.5KVA off-grid inverter with built-in 80A MPPT charge controller. Pure sine wave output for sensitive electronics. Compact, reliable, and easy to install.',
    stats: [
      { label: 'CAPACITY', value: '3.5KVA', color: 'primary' },
      { label: 'VOLTAGE', value: '24V' },
      { label: 'MPPT', value: '80A', color: 'success' }
    ],
    specs: [
      ['Brand', 'Growatt'],
      ['Capacity', '3.5KVA / 3500W'],
      ['Battery Voltage', '24V'],
      ['MPPT Current', '80A'],
      ['Efficiency', '93%'],
      ['Output Type', 'Pure Sine Wave'],
      ['Weight', '8 kg']
    ],
    compatibility: ['Solar Panels', 'Lithium Batteries', 'Lead-Acid Batteries'],
    included: ['1× Inverter Unit', '1× User Manual', '12-Month Warranty Card'],
    warranty: [
      ['Warranty Period', '12 Months'],
      ['Coverage', 'Manufacturer Defects']
    ],
    reviews: []
  },

  'trojan-100ah-agm': {
    name: '100Ah AGM Battery',
    brand: 'Trojan',
    sku: 'XS-TR100AGM',
    subtitle: 'Sealed · Maintenance-free · Deep cycle',
    price: 195000,
    oldPrice: 230000,
    rating: 4.5,
    reviewCount: 73,
    image: '🔋',
    description: 'Trojan 100Ah deep-cycle AGM battery. Sealed and maintenance-free. Ideal for solar backup systems where lithium is not yet within budget.',
    stats: [
      { label: 'CAPACITY', value: '100Ah', color: 'primary' },
      { label: 'VOLTAGE', value: '12V' },
      { label: 'TYPE', value: 'AGM', color: 'success' }
    ],
    specs: [
      ['Brand', 'Trojan'],
      ['Type', 'AGM (Sealed)'],
      ['Voltage', '12V'],
      ['Capacity', '100Ah'],
      ['Cycles', '500+ @ 50% DoD'],
      ['Weight', '28 kg']
    ],
    compatibility: ['12V Systems', '24V Banks', '48V Banks'],
    included: ['1× AGM Battery', '12-Month Warranty Card'],
    warranty: [
      ['Warranty Period', '12 Months'],
      ['Coverage', 'Manufacturer Defects']
    ],
    reviews: []
  }
};

function formatNGN(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

function getProduct(slug) {
  return PRODUCTS[slug] || null;
}
