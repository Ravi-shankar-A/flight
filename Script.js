/* =====================================================================
   SKYROUTE — FLIGHT BOOKING APP
   Organized sections: data, state, storage, notifications, navigation,
   auth, search, results/filtering, passengers, seats, pricing,
   summary, payment, booking management, confirmation, my trips, init
===================================================================== */

/* ============ 1. MOCK DATA ============ */
const AIRPORTS = [
  { code: 'JFK', city: 'New York', country: 'USA' },
  { code: 'LAX', city: 'Los Angeles', country: 'USA' },
  { code: 'ORD', city: 'Chicago', country: 'USA' },
  { code: 'SFO', city: 'San Francisco', country: 'USA' },
  { code: 'MIA', city: 'Miami', country: 'USA' },
  { code: 'LHR', city: 'London', country: 'UK' },
  { code: 'CDG', city: 'Paris', country: 'France' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany' },
  { code: 'AMS', city: 'Amsterdam', country: 'Netherlands' },
  { code: 'DXB', city: 'Dubai', country: 'UAE' },
  { code: 'SIN', city: 'Singapore', country: 'Singapore' },
  { code: 'HND', city: 'Tokyo', country: 'Japan' },
  { code: 'FCO', city: 'Rome', country: 'Italy' },
  { code: 'DEL', city: 'Delhi', state: 'Delhi', country: 'India' },
  { code: 'BOM', city: 'Mumbai', state: 'Maharashtra', country: 'India' },
  { code: 'HYD', city: 'Hyderabad', state: 'Telangana', country: 'India' },
  { code: 'BLR', city: 'Bengaluru', state: 'Karnataka', country: 'India' },
  { code: 'MAA', city: 'Chennai', state: 'Tamil Nadu', country: 'India' },
  { code: 'CJB', city: 'Coimbatore', state: 'Tamil Nadu', country: 'India' },
  { code: 'IXM', city: 'Madurai', state: 'Tamil Nadu', country: 'India' },
  { code: 'TRZ', city: 'Tiruchirappalli', state: 'Tamil Nadu', country: 'India' },
  { code: 'SXV', city: 'Salem', state: 'Tamil Nadu', country: 'India' },
  { code: 'TCR', city: 'Thoothukudi', state: 'Tamil Nadu', country: 'India' },
  { code: 'PNY', city: 'Puducherry', state: 'Puducherry', country: 'India' },
  { code: 'VTZ', city: 'Visakhapatnam', state: 'Andhra Pradesh', country: 'India' },
  { code: 'VGA', city: 'Vijayawada', state: 'Andhra Pradesh', country: 'India' },
  { code: 'TIR', city: 'Tirupati', state: 'Andhra Pradesh', country: 'India' },
  { code: 'RJA', city: 'Rajahmundry', state: 'Andhra Pradesh', country: 'India' },
  { code: 'HGI', city: 'Itanagar', state: 'Arunachal Pradesh', country: 'India' },
  { code: 'GAU', city: 'Guwahati', state: 'Assam', country: 'India' },
  { code: 'DIB', city: 'Dibrugarh', state: 'Assam', country: 'India' },
  { code: 'IXS', city: 'Silchar', state: 'Assam', country: 'India' },
  { code: 'PAT', city: 'Patna', state: 'Bihar', country: 'India' },
  { code: 'GAY', city: 'Gaya', state: 'Bihar', country: 'India' },
  { code: 'DBR', city: 'Darbhanga', state: 'Bihar', country: 'India' },
  { code: 'RPR', city: 'Raipur', state: 'Chhattisgarh', country: 'India' },
  { code: 'GOI', city: 'Dabolim', state: 'Goa', country: 'India' },
  { code: 'GOX', city: 'Mopa', state: 'Goa', country: 'India' },
  { code: 'AMD', city: 'Ahmedabad', state: 'Gujarat', country: 'India' },
  { code: 'STV', city: 'Surat', state: 'Gujarat', country: 'India' },
  { code: 'BDQ', city: 'Vadodara', state: 'Gujarat', country: 'India' },
  { code: 'HSR', city: 'Rajkot', state: 'Gujarat', country: 'India' },
  { code: 'IXC', city: 'Chandigarh', state: 'Haryana', country: 'India' },
  { code: 'KUU', city: 'Kullu', state: 'Himachal Pradesh', country: 'India' },
  { code: 'SLV', city: 'Shimla', state: 'Himachal Pradesh', country: 'India' },
  { code: 'IXR', city: 'Ranchi', state: 'Jharkhand', country: 'India' },
  { code: 'DGH', city: 'Deoghar', state: 'Jharkhand', country: 'India' },
  { code: 'IXE', city: 'Mangaluru', state: 'Karnataka', country: 'India' },
  { code: 'HBX', city: 'Hubballi', state: 'Karnataka', country: 'India' },
  { code: 'IXG', city: 'Belagavi', state: 'Karnataka', country: 'India' },
  { code: 'MYQ', city: 'Mysuru', state: 'Karnataka', country: 'India' },
  { code: 'COK', city: 'Kochi', state: 'Kerala', country: 'India' },
  { code: 'TRV', city: 'Thiruvananthapuram', state: 'Kerala', country: 'India' },
  { code: 'CCJ', city: 'Kozhikode', state: 'Kerala', country: 'India' },
  { code: 'CNN', city: 'Kannur', state: 'Kerala', country: 'India' },
  { code: 'BHO', city: 'Bhopal', state: 'Madhya Pradesh', country: 'India' },
  { code: 'IDR', city: 'Indore', state: 'Madhya Pradesh', country: 'India' },
  { code: 'JLR', city: 'Jabalpur', state: 'Madhya Pradesh', country: 'India' },
  { code: 'PNQ', city: 'Pune', state: 'Maharashtra', country: 'India' },
  { code: 'NAG', city: 'Nagpur', state: 'Maharashtra', country: 'India' },
  { code: 'ISK', city: 'Nashik', state: 'Maharashtra', country: 'India' },
  { code: 'IXU', city: 'Chhatrapati Sambhajinagar', state: 'Maharashtra', country: 'India' },
  { code: 'IMF', city: 'Imphal', state: 'Manipur', country: 'India' },
  { code: 'SHL', city: 'Shillong', state: 'Meghalaya', country: 'India' },
  { code: 'AJL', city: 'Aizawl', state: 'Mizoram', country: 'India' },
  { code: 'DMU', city: 'Dimapur', state: 'Nagaland', country: 'India' },
  { code: 'BBI', city: 'Bhubaneswar', state: 'Odisha', country: 'India' },
  { code: 'JRG', city: 'Jharsuguda', state: 'Odisha', country: 'India' },
  { code: 'ATQ', city: 'Amritsar', state: 'Punjab', country: 'India' },
  { code: 'JAI', city: 'Jaipur', state: 'Rajasthan', country: 'India' },
  { code: 'UDR', city: 'Udaipur', state: 'Rajasthan', country: 'India' },
  { code: 'JDH', city: 'Jodhpur', state: 'Rajasthan', country: 'India' },
  { code: 'PYG', city: 'Pakyong', state: 'Sikkim', country: 'India' },
  { code: 'IXA', city: 'Agartala', state: 'Tripura', country: 'India' },
  { code: 'LKO', city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' },
  { code: 'VNS', city: 'Varanasi', state: 'Uttar Pradesh', country: 'India' },
  { code: 'IXD', city: 'Prayagraj', state: 'Uttar Pradesh', country: 'India' },
  { code: 'GOP', city: 'Gorakhpur', state: 'Uttar Pradesh', country: 'India' },
  { code: 'AGR', city: 'Agra', state: 'Uttar Pradesh', country: 'India' },
  { code: 'DED', city: 'Dehradun', state: 'Uttarakhand', country: 'India' },
  { code: 'PGH', city: 'Pantnagar', state: 'Uttarakhand', country: 'India' },
  { code: 'CCU', city: 'Kolkata', state: 'West Bengal', country: 'India' },
  { code: 'IXB', city: 'Bagdogra', state: 'West Bengal', country: 'India' },
  { code: 'RDP', city: 'Durgapur', state: 'West Bengal', country: 'India' },
  { code: 'IXJ', city: 'Jammu', state: 'Jammu and Kashmir', country: 'India' },
  { code: 'SXR', city: 'Srinagar', state: 'Jammu and Kashmir', country: 'India' },
  { code: 'IXL', city: 'Leh', state: 'Ladakh', country: 'India' },
  { code: 'IXZ', city: 'Port Blair', state: 'Andaman and Nicobar Islands', country: 'India' },
  { code: 'AGX', city: 'Agatti', state: 'Lakshadweep', country: 'India' },
  { code: 'SYD', city: 'Sydney', country: 'Australia' },
  { code: 'YYZ', city: 'Toronto', country: 'Canada' },
  { code: 'GRU', city: 'Sao Paulo', country: 'Brazil' },
  { code: 'JNB', city: 'Johannesburg', country: 'South Africa' },
  { code: 'HKG', city: 'Hong Kong', country: 'China' },
  { code: 'ICN', city: 'Seoul', country: 'South Korea' },
  { code: 'BKK', city: 'Bangkok', country: 'Thailand' },
  { code: 'HKT', city: 'Phuket', country: 'Thailand' }
];

const INDIAN_HUB_CODES = new Set(['DEL', 'BOM', 'BLR', 'HYD', 'MAA', 'CCU', 'COK', 'GOI', 'AMD', 'PNQ']);

const AIRLINES = [
  { code: 'SV', name: 'Sky Via Air', color: '#12314F' },
  { code: 'AV', name: 'Aventura Airlines', color: '#C97F1F' },
  { code: 'BW', name: 'BlueWing', color: '#1C4468' },
  { code: 'NH', name: 'NorthernHall', color: '#2E7D5B' },
  { code: 'PC', name: 'Pacific Crest', color: '#7A4FB5' },
  { code: 'ZJ', name: 'Zenith Jet', color: '#C1443C' }
];

const OFFERS = [
  { city: 'Hyderabad', code: 'HYD', price: 129, airline: 'IndiGo', emoji: '🌆', color: '#1C4468', image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=900&q=82' },
  { city: 'Chennai', code: 'MAA', price: 115, airline: 'Air India', emoji: '🌊', color: '#C1443C', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=82' },
  { city: 'Mumbai', code: 'BOM', price: 99, airline: 'IndiGo', emoji: '🌇', color: '#2E7D5B', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=82' },
  { city: 'Delhi', code: 'DEL', price: 109, airline: 'Air India', emoji: '🏛️', color: '#C97F1F', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=82' },
  { city: 'Bengaluru', code: 'BLR', price: 119, airline: 'IndiGo', emoji: '🌿', color: '#7A4FB5', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=82' },
  { city: 'Kochi', code: 'COK', price: 139, airline: 'Qatar Airways', emoji: '🌴', color: '#1C4468', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=82' },
  { city: 'Goa', code: 'GOX', price: 89, airline: 'IndiGo', emoji: '🏖️', color: '#2E7D5B', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=82' },
  { city: 'Bangkok', code: 'BKK', price: 249, airline: 'Thai Airways', emoji: '🛕', color: '#7A4FB5', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=82' },
  { city: 'Phuket', code: 'HKT', price: 279, airline: 'Thai Airways', emoji: '🌊', color: '#1C4468', image: 'https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=900&q=82' },
  { city: 'Paris', code: 'CDG', price: 289, airline: 'Emirates', emoji: '🗼', color: '#1C4468', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=82' },
  { city: 'Dubai', code: 'DXB', price: 344, airline: 'Emirates', emoji: '🕌', color: '#7A4FB5', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=82' },
  { city: 'Tokyo', code: 'HND', price: 512, airline: 'Qatar Airways', emoji: '🗾', color: '#C97F1F', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=82' },
  { city: 'Sydney', code: 'SYD', price: 601, airline: 'Qatar Airways', emoji: '🌉', color: '#2E7D5B', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=82' },
  { city: 'London', code: 'LHR', price: 319, airline: 'Emirates', emoji: '🎡', color: '#12314F', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=82' },
  { city: 'Singapore', code: 'SIN', price: 299, airline: 'Qatar Airways', emoji: '🌃', color: '#1C4468', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=82' },
  { city: 'Rome', code: 'FCO', price: 329, airline: 'Emirates', emoji: '🏛️', color: '#C97F1F', image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=82' }
];

const AIRLINE_LOGOS = {
  'IndiGo': 'https://logo.clearbit.com/goindigo.in?size=128',
  'Emirates': 'https://logo.clearbit.com/emirates.com?size=128',
  'Qatar Airways': 'https://logo.clearbit.com/qatarairways.com?size=128',
  'Air India': 'https://logo.clearbit.com/airindia.com?size=128',
  'Thai Airways': 'https://logo.clearbit.com/thaiairways.com?size=128'
};

const POPULAR_FLIGHTS = [
  { from: 'DEL', to: 'GOX', route: 'Delhi to Goa', offer: 'From $89', airline: 'IndiGo', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=82', tag: 'Beach escape' },
  { from: 'BOM', to: 'BKK', route: 'Mumbai to Bangkok', offer: 'From $249', airline: 'Thai Airways', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=82', tag: 'City break' },
  { from: 'MAA', to: 'SIN', route: 'Chennai to Singapore', offer: 'From $299', airline: 'Qatar Airways', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=82', tag: 'Top international' },
  { from: 'DEL', to: 'HKG', route: 'Delhi to Hong Kong', offer: 'From $329', airline: 'Emirates', image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1000&q=82', tag: 'Great value' },
  { from: 'BOM', to: 'LHR', route: 'Mumbai to London', offer: 'From $319', airline: 'Emirates', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=82', tag: 'Long-haul favorite' }
];

const DOMESTIC_DESTINATIONS = [
  { code: 'DEL', label: 'Delhi', note: 'Capital city', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=82' },
  { code: 'BOM', label: 'Mumbai', note: 'City by the sea', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=700&q=82' },
  { code: 'GOX', label: 'Goa', note: 'Beach escape', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=82' },
  { code: 'BLR', label: 'Bengaluru', note: 'Garden city', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=700&q=82' },
  { code: 'HYD', label: 'Hyderabad', note: 'Heritage and tech', image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=700&q=82' },
  { code: 'MAA', label: 'Chennai', note: 'Coastal gateway', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=700&q=82' },
  { code: 'COK', label: 'Kochi', note: 'Tropical Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=82' },
  { code: 'JAI', label: 'Jaipur', note: 'The Pink City', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=82' }
];

const DOMESTIC_ROUTES = [
  { from: 'DEL', to: 'BOM', airline: 'IndiGo', offer: 'From $72', tag: 'Most booked' },
  { from: 'DEL', to: 'GOX', airline: 'Air India', offer: 'From $89', tag: 'Beach break' },
  { from: 'BOM', to: 'BLR', airline: 'IndiGo', offer: 'From $68', tag: 'Business route' },
  { from: 'BLR', to: 'HYD', airline: 'IndiGo', offer: 'From $54', tag: 'Quick getaway' },
  { from: 'MAA', to: 'DEL', airline: 'Air India', offer: 'From $115', tag: 'Top connection' },
  { from: 'HYD', to: 'COK', airline: 'Sky Via Air', offer: 'From $79', tag: 'New favorite' }
];

// NOTE: This default key was supplied once during setup so the feature works out of the box.
// Anyone who can view this file's source can see it. Replace/rotate it in the Settings (⚙) panel,
// which stores your own key in *your* browser's localStorage instead of in this shared file.
const DEFAULT_GROQ_KEY = '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';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

const EXTRA_COSTS = { baggage: 30, meal: 15, insurance: 20 };
const PREMIUM_SEAT_SURCHARGE = 25;
const CABIN_MULTIPLIER = { 'Economy': 1, 'Premium Economy': 1.6, 'Business': 2.8, 'First': 4.2 };
const CABIN_BAGGAGE = { 'Economy': '15kg', 'Premium Economy': '20kg', 'Business': '30kg', 'First': '40kg' };

/* ============ 2. STATE ============ */
const state = {
  view: 'home',
  search: { tripType: 'round', from: null, to: null, departDate: '', returnDate: '', adults: 1, children: 0, cabin: 'Economy' },
  flights: { outbound: [], return: [] },
  selectedFlight: { outbound: null, return: null },
  resultsLeg: 'outbound',
  filters: { maxPrice: 1000, nonstop: false, airlines: new Set(), sort: 'price-asc' },
  seatCache: {},
  seats: { outbound: [], return: [] },
  seatLeg: 'outbound',
  extras: { baggage: false, meal: false, insurance: false },
  passengers: [],
  contact: { email: '', phone: '' },
  currentUser: null,
  viewedBooking: null
};

/* ============ 3. LOCALSTORAGE HELPERS ============ */
const Storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { console.error('Storage error', e); return false; }
  },
  getUsers() { return Storage.get('skyroute_users', []); },
  saveUsers(users) { Storage.set('skyroute_users', users); },
  getBookings() { return Storage.get('skyroute_bookings', []); },
  saveBookings(bookings) { Storage.set('skyroute_bookings', bookings); },
  getCurrentUser() { return Storage.get('skyroute_currentUser', null); },
  setCurrentUser(user) { Storage.set('skyroute_currentUser', user); },
  getGroqKey() { return Storage.get('skyroute_groq_key', DEFAULT_GROQ_KEY); },
  setGroqKey(key) { Storage.set('skyroute_groq_key', key); },
  getSavedFlights() { return Storage.get('skyroute_saved_flights', []); },
  saveSavedFlights(list) { Storage.set('skyroute_saved_flights', list); },
  getFlightTimings() { return Storage.get('skyroute_flight_timings', {}); },
  saveFlightTimings(timings) { Storage.set('skyroute_flight_timings', timings); },
  getAiReviews() { return Storage.get('skyroute_ai_reviews', {}); },
  saveAiReviews(obj) { Storage.set('skyroute_ai_reviews', obj); }
};

/* ============ 4. NOTIFICATIONS & LOADER ============ */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .3s';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function showLoader(text) {
  document.getElementById('loaderText').textContent = text || 'Loading…';
  document.getElementById('loader').classList.remove('hidden');
}
function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}
function withLoader(text, work, delay = 700) {
  showLoader(text);
  setTimeout(() => { work(); hideLoader(); }, delay);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============ 5. NAVIGATION / ROUTER ============ */
function navigate(viewName) {
  const protectedViews = ['home', 'results', 'passengers', 'seats', 'summary', 'payment', 'confirmation', 'mytrips'];
  if (protectedViews.includes(viewName) && !state.currentUser) {
    viewName = 'auth';
    currentAuthTab = 'login';
  }
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById(`view-${viewName}`);
  if (!target) return;
  target.classList.remove('hidden');
  state.view = viewName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const mobileNav = document.getElementById('navMobile');
  const burger = document.getElementById('navBurger');
  mobileNav.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.textContent = '☰';

  const activeNavView = ['results', 'passengers', 'seats', 'summary', 'payment', 'confirmation'].includes(viewName) ? 'home' : viewName;
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active-nav', btn.dataset.nav === activeNavView);
  });

  // Per-view render hooks
  if (viewName === 'results') renderResults();
  if (viewName === 'passengers') renderPassengerForm();
  if (viewName === 'seats') renderSeatsView();
  if (viewName === 'summary') renderSummary();
  if (viewName === 'payment') renderPayment();
  if (viewName === 'mytrips') renderMyTrips();
  if (viewName === 'popular') renderPopularFlights();
  if (viewName === 'today') renderTodayFlights();
  if (viewName === 'auth') renderAuthView();
}

document.addEventListener('click', (e) => {
  const navBtn = e.target.closest('[data-nav]');
  if (navBtn) navigate(navBtn.dataset.nav);
  
  const destinationButton = e.target.closest('[data-footer-destination]');
  if (destinationButton) {
    const airport = AIRPORTS.find(item => item.code === destinationButton.dataset.footerDestination);
    const from = AIRPORTS.find(item => item.code === 'DEL');
    if (!airport || !from) return;
    state.search.from = from;
    state.search.to = airport;
    state.search.tripType = 'round';
    document.getElementById('fromInput').value = `${from.city} (${from.code})`;
    document.getElementById('toInput').value = `${airport.city} (${airport.code})`;
    const depart = new Date();
    depart.setDate(depart.getDate() + 14);
    const returnDate = new Date(depart);
    returnDate.setDate(returnDate.getDate() + 7);
    document.getElementById('departDate').value = depart.toISOString().split('T')[0];
    document.getElementById('returnDate').value = returnDate.toISOString().split('T')[0];
    document.querySelector('input[name=tripType][value=round]').checked = true;
    onTripTypeChange();
    navigate('home');
    showToast(`${airport.city} selected. Choose your dates and search.`, 'success');
  }
});

/* ============ 6. AUTH ============ */
function initAuth() {
  state.currentUser = Storage.getCurrentUser();
  refreshAuthUI();
}

function refreshAuthUI() {
  const chip = document.getElementById('userChip');
  const authBtn = document.getElementById('authNavBtn');
  if (state.currentUser) {
    chip.classList.remove('hidden');
    authBtn.classList.add('hidden');
    document.getElementById('userChipName').textContent = state.currentUser.name;
  } else {
    chip.classList.add('hidden');
    authBtn.classList.remove('hidden');
  }
}

function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const phone = document.getElementById('regPhone').value.trim();
  const pw = document.getElementById('regPassword').value;
  const pw2 = document.getElementById('regPassword2').value;
  const errEl = document.getElementById('registerError');
  errEl.textContent = '';

  if (!name || !email || !phone || !pw || !pw2) { errEl.textContent = 'Please fill in every field.'; return; }
  if (!validateEmail(email)) { errEl.textContent = 'Enter a valid email address.'; return; }
  if (pw.length < 6) { errEl.textContent = 'Password must be at least 6 characters.'; return; }
  if (pw !== pw2) { errEl.textContent = 'Passwords do not match.'; return; }

  const users = Storage.getUsers();
  if (users.some(u => u.email === email)) { errEl.textContent = 'An account with this email already exists.'; return; }

  const newUser = { name, email, phone, password: pw };
  users.push(newUser);
  Storage.saveUsers(users);
  state.currentUser = { name, email, phone };
  Storage.setCurrentUser(state.currentUser);
  refreshAuthUI();
  showToast('Account created. Welcome aboard, ' + name.split(' ')[0] + '!', 'success');
  navigate('home');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pw = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  errEl.textContent = '';

  const users = Storage.getUsers();
  const user = users.find(u => u.email === email && u.password === pw);
  if (!user) { errEl.textContent = 'Incorrect email or password.'; return; }

  state.currentUser = { name: user.name, email: user.email, phone: user.phone };
  Storage.setCurrentUser(state.currentUser);
  refreshAuthUI();
  showToast('Logged in as ' + user.name, 'success');
  navigate('home');
}

function handleLogout() {
  state.currentUser = null;
  Storage.setCurrentUser(null);
  refreshAuthUI();
  showToast('You have been logged out.', 'info');
  navigate('home');
}

function renderAuthView() {
  const isLoggedIn = !!state.currentUser;
  document.querySelector('.auth-tabs').parentElement.querySelector('.auth-tabs').style.display = isLoggedIn ? 'none' : 'flex';
  document.getElementById('loginForm').classList.toggle('hidden', isLoggedIn || currentAuthTab !== 'login');
  document.getElementById('registerForm').classList.toggle('hidden', isLoggedIn || currentAuthTab !== 'register');
  document.getElementById('profileCard').classList.toggle('hidden', !isLoggedIn);
  document.querySelector('.auth-wrap .auth-card:first-child').classList.toggle('hidden', isLoggedIn);

  if (isLoggedIn) {
    const bookingCount = Storage.getBookings().filter(b => b.userEmail === state.currentUser.email).length;
    document.getElementById('profileInfo').innerHTML = `
      <div class="profile-row"><span>Name</span><strong>${escapeHtml(state.currentUser.name)}</strong></div>
      <div class="profile-row"><span>Email</span><strong>${escapeHtml(state.currentUser.email)}</strong></div>
      <div class="profile-row"><span>Phone</span><strong>${escapeHtml(state.currentUser.phone)}</strong></div>
      <div class="profile-row"><span>Bookings made</span><strong>${bookingCount}</strong></div>
    `;
  }
}

let currentAuthTab = 'login';

/* ============ 7. HOME / SEARCH FORM ============ */
function initHome() {
  populateOffers();
  setMinDates();
  initAutocomplete('fromInput', 'fromList', 'from');
  initAutocomplete('toInput', 'toList', 'to');
  initPaxDropdown();
  document.getElementById('swapBtn').addEventListener('click', swapFromTo);
  document.getElementById('searchForm').addEventListener('submit', handleSearchSubmit);
  document.getElementById('naturalSearchBtn').addEventListener('click', handleNaturalSearch);
  document.querySelectorAll('input[name=tripType]').forEach(r => r.addEventListener('change', onTripTypeChange));
  onTripTypeChange();
}

function getDateFromNaturalLanguage(text, daysFromNow) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  if (/next weekend/i.test(text)) {
    const daysUntilSaturday = (6 - date.getDay() + 7) % 7 || 7;
    date.setDate(date.getDate() + daysUntilSaturday);
  }
  return date.toISOString().split('T')[0];
}

function localNaturalSearch(text) {
  const normalized = text.toLowerCase();
  const routeMatch = normalized.match(/from\s+(.+?)\s+to\s+(.+?)(?=\s+(?:next|this|on|for|with|in)\b|$)/i);
  const findAirport = value => AIRPORTS.find(airport => airport.city.toLowerCase() === value.trim() || airport.code.toLowerCase() === value.trim())
    || AIRPORTS.find(airport => value.trim().includes(airport.city.toLowerCase()) || value.trim().includes(airport.code.toLowerCase()));
  const from = routeMatch ? findAirport(routeMatch[1]) : AIRPORTS.find(airport => normalized.includes(airport.city.toLowerCase()) || normalized.includes(airport.code.toLowerCase()));
  const to = routeMatch ? findAirport(routeMatch[2]) : AIRPORTS.find(airport => airport !== from && (normalized.includes(airport.city.toLowerCase()) || normalized.includes(airport.code.toLowerCase())));
  const passengerMatch = normalized.match(/(\d+)\s*(?:people|passengers|travellers|travelers|adults?)/);
  const totalPassengers = passengerMatch ? Math.max(1, Math.min(6, Number(passengerMatch[1]))) : 1;
  const tripType = /one[- ]?way|single/i.test(text) ? 'one' : 'round';
  const departDate = getDateFromNaturalLanguage(text, /next weekend/i.test(text) ? 0 : 14);
  const returnDate = tripType === 'round' ? getDateFromNaturalLanguage(text, /next weekend/i.test(text) ? 7 : 21) : '';
  return { from, to, adults: totalPassengers, children: 0, cabin: /business/i.test(text) ? 'Business' : /first class/i.test(text) ? 'First' : 'Economy', tripType, departDate, returnDate };
}

async function handleNaturalSearch() {
  const input = document.getElementById('naturalSearchInput');
  const error = document.getElementById('naturalSearchError');
  const text = input.value.trim();
  error.textContent = '';
  if (!text) { error.textContent = 'Describe a route, for example: Chennai to Singapore next weekend.'; return; }

  const button = document.getElementById('naturalSearchBtn');
  button.disabled = true;
  button.textContent = 'Understanding...';
  let parsed = localNaturalSearch(text);
  try {
    const aiText = await callGroq(`Parse this flight request into JSON only. Use airport codes from this airport list when possible: ${AIRPORTS.map(a => `${a.city}=${a.code}`).join(', ')}. Return keys from, to, tripType, departDate, returnDate, adults, children, cabin. Dates must be YYYY-MM-DD. Today is ${new Date().toISOString().split('T')[0]}. Request: ${text}`);
    const json = JSON.parse(aiText.replace(/```json|```/g, '').trim());
    const aiFrom = AIRPORTS.find(a => a.code === String(json.from).toUpperCase()) || AIRPORTS.find(a => a.city.toLowerCase() === String(json.from).toLowerCase());
    const aiTo = AIRPORTS.find(a => a.code === String(json.to).toUpperCase()) || AIRPORTS.find(a => a.city.toLowerCase() === String(json.to).toLowerCase());
    if (aiFrom && aiTo) parsed = { ...parsed, ...json, from: aiFrom, to: aiTo };
  } catch (e) {
    // The local parser keeps natural search useful when Groq is unavailable.
  }
  button.disabled = false;
  button.textContent = 'Find flights';
  if (!parsed.from || !parsed.to) { error.textContent = 'I could not find both airports. Try “from Delhi to Goa”.'; return; }
  applyNaturalSearch(parsed);
}

function applyNaturalSearch(parsed) {
  state.search.from = parsed.from;
  state.search.to = parsed.to;
  state.search.tripType = parsed.tripType === 'one' ? 'one' : 'round';
  state.search.adults = Number(parsed.adults) || 1;
  state.search.children = Number(parsed.children) || 0;
  state.search.cabin = CABIN_MULTIPLIER[parsed.cabin] ? parsed.cabin : 'Economy';
  document.getElementById('fromInput').value = `${parsed.from.city} (${parsed.from.code})`;
  document.getElementById('toInput').value = `${parsed.to.city} (${parsed.to.code})`;
  document.getElementById('departDate').value = parsed.departDate || getDateFromNaturalLanguage('', 14);
  document.getElementById('returnDate').value = parsed.returnDate || getDateFromNaturalLanguage('', 21);
  document.querySelector(`input[name=tripType][value=${state.search.tripType}]`).checked = true;
  document.getElementById('adultsCount').textContent = state.search.adults;
  document.getElementById('childrenCount').textContent = state.search.children;
  document.getElementById('cabinClass').value = state.search.cabin;
  updatePaxLabel();
  onTripTypeChange();
  document.getElementById('searchForm').requestSubmit();
}

function renderPopularFlights() {
  const grid = document.getElementById('popularFlightGrid');
  if (!grid || grid.children.length) return;
  grid.innerHTML = POPULAR_FLIGHTS.map((flight, index) => `
    <article class="popular-flight-card">
      <div class="popular-flight-image">
        <img src="${flight.image}" alt="${flight.route}" loading="lazy" onerror="this.style.display='none'">
        <span class="popular-flight-tag">${flight.tag}</span>
      </div>
      <div class="popular-flight-body">
        <div class="popular-flight-airline"><span class="airline-logo-fallback">✈</span><span>${flight.airline}</span></div>
        <h2>${flight.route}</h2>
        <p class="muted-sm">Round trip offer · Flexible dates available</p>
        <div class="popular-flight-footer"><strong>${flight.offer}</strong><button class="btn btn-primary btn-small" data-popular-flight="${index}">Search this route</button></div>
      </div>
    </article>
  `).join('');
  grid.querySelectorAll('[data-popular-flight]').forEach(button => {
    button.onclick = () => startPopularFlightSearch(POPULAR_FLIGHTS[Number(button.dataset.popularFlight)]);
  });
  renderDomesticSections();
}

function renderDomesticSections() {
  const destinations = document.getElementById('domesticDestinationGrid');
  const routes = document.getElementById('domesticRouteGrid');
  if (!destinations || !routes || destinations.children.length) return;
  destinations.innerHTML = DOMESTIC_DESTINATIONS.map(destination => `<button class="domestic-destination-card" data-domestic-destination="${destination.code}"><img src="${destination.image}" alt="${destination.label}" loading="lazy" onerror="this.style.display='none'"><span><strong>${destination.label}</strong><small>${destination.note}</small></span></button>`).join('');
  routes.innerHTML = DOMESTIC_ROUTES.map(route => {
    const from = AIRPORTS.find(airport => airport.code === route.from);
    const to = AIRPORTS.find(airport => airport.code === route.to);
    return `<article class="domestic-route-card"><div class="domestic-route-tag">${route.tag}</div><div class="domestic-route-airports"><div><strong>${route.from}</strong><small>${from.city}</small></div><span>→</span><div><strong>${route.to}</strong><small>${to.city}</small></div></div><div class="domestic-route-footer"><div><strong>${route.offer}</strong><small>${route.airline} · one way</small></div><button class="btn btn-primary btn-small" data-domestic-route="${route.from}-${route.to}">Search</button></div></article>`;
  }).join('');
  destinations.querySelectorAll('[data-domestic-destination]').forEach(button => {
    button.onclick = () => startDomesticDestinationSearch(button.dataset.domesticDestination);
  });
  routes.querySelectorAll('[data-domestic-route]').forEach(button => {
    button.onclick = () => {
      const [from, to] = button.dataset.domesticRoute.split('-');
      startDomesticRouteSearch(from, to);
    };
  });
}

function startDomesticDestinationSearch(destinationCode) {
  startDomesticRouteSearch('DEL', destinationCode);
}

function startDomesticRouteSearch(fromCode, toCode) {
  const route = POPULAR_FLIGHTS.find(item => item.from === fromCode && item.to === toCode) || { from: fromCode, to: toCode, route: `${fromCode} to ${toCode}` };
  const from = AIRPORTS.find(airport => airport.code === fromCode);
  const to = AIRPORTS.find(airport => airport.code === toCode);
  if (!from || !to || from.code === to.code) return;
  startPopularFlightSearch({ ...route, from: from.code, to: to.code, route: `${from.city} to ${to.city}` });
}

const TODAY_ROUTES = [
  ['DEL', 'BOM'], ['DEL', 'GOX'], ['DEL', 'BLR'], ['BOM', 'DEL'],
  ['BOM', 'HYD'], ['BOM', 'BLR'], ['BLR', 'MAA'], ['BLR', 'HYD'],
  ['HYD', 'MAA'], ['MAA', 'DEL'], ['MAA', 'SIN'], ['CCU', 'DEL'],
  ['COK', 'DXB'], ['DEL', 'DXB'], ['BOM', 'LHR']
];

function renderTodayFlights() {
  const grid = document.getElementById('todayFlightsGrid');
  if (!grid) return;
  const today = new Date();
  const dateValue = today.toISOString().split('T')[0];
  const flights = TODAY_ROUTES.flatMap(([fromCode, toCode]) => {
    const from = AIRPORTS.find(airport => airport.code === fromCode);
    const to = AIRPORTS.find(airport => airport.code === toCode);
    return from && to ? generateFlights(from, to, dateValue).slice(0, 2) : [];
  }).sort((a, b) => new Date(a.departISO) - new Date(b.departISO));

  document.getElementById('todayFlightsDate').textContent = today.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
  document.getElementById('todayFlightsUpdated').textContent = `Updated ${formatTime(new Date().toISOString())}`;
  const airlineFilter = document.getElementById('todayAirlineFilter');
  const selectedAirline = airlineFilter.value || 'all';
  airlineFilter.innerHTML = '<option value="all">All airlines</option>' + [...new Map(flights.map(flight => [flight.airline.code, flight.airline])).values()].sort((a, b) => a.name.localeCompare(b.name)).map(airline => `<option value="${airline.code}">${airline.name}</option>`).join('');
  airlineFilter.value = [...new Set(flights.map(flight => flight.airline.code))].includes(selectedAirline) ? selectedAirline : 'all';

  const applyTodayFilters = () => {
    const query = document.getElementById('todayFlightSearch').value.trim().toLowerCase();
    const airline = airlineFilter.value;
    const stops = document.getElementById('todayStopsFilter').value;
    const filtered = flights.filter(flight => {
      const routeText = `${flight.from} ${flight.to} ${flight.fromCity} ${flight.toCity} ${flight.airline.name}`.toLowerCase();
      return (!query || routeText.includes(query)) && (airline === 'all' || flight.airline.code === airline) && (stops === 'all' || String(flight.stops) === stops);
    });
    document.getElementById('todayFlightsSummary').textContent = `${filtered.length} flights available today`;
    document.getElementById('todayFlightsEmpty').classList.toggle('hidden', filtered.length > 0);
    grid.innerHTML = filtered.map(todayFlightCardHTML).join('');
    grid.querySelectorAll('[data-today-book]').forEach(button => {
      button.onclick = () => startTodayFlightSearch(flights.find(flight => flight.id === button.dataset.todayBook));
    });
  };
  document.getElementById('todayFlightSearch').oninput = applyTodayFilters;
  airlineFilter.onchange = applyTodayFilters;
  document.getElementById('todayStopsFilter').onchange = applyTodayFilters;
  document.getElementById('todayRefreshBtn').onclick = () => { renderTodayFlights(); showToast('Today\'s availability refreshed.', 'success'); };
  applyTodayFilters();
}

function todayFlightCardHTML(flight) {
  const stops = flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`;
  return `<article class="today-flight-card"><div class="today-flight-top"><span class="today-status"><i></i> Available</span><span>${flight.airline.name}</span></div><div class="today-route"><div><strong>${formatTime(flight.departISO)}</strong><span>${flight.from}</span><small>${flight.fromCity}</small></div><div class="today-route-line"><span>${formatDuration(flight.durationMins)}</span><b></b><small>${stops}</small></div><div class="today-route-end"><strong>${formatTime(flight.arriveISO)}</strong><span>${flight.to}</span><small>${flight.toCity}</small></div></div><div class="today-flight-bottom"><div><strong>$${flight.price}</strong><span>from · ${flight.baggage} baggage</span></div><button class="btn btn-primary btn-small" data-today-book="${flight.id}">Book flight</button></div></article>`;
}

function startTodayFlightSearch(flight) {
  const from = AIRPORTS.find(airport => airport.code === flight.from);
  const to = AIRPORTS.find(airport => airport.code === flight.to);
  state.search = { tripType: 'one', from, to, departDate: flight.departISO.split('T')[0], returnDate: '', adults: 1, children: 0, cabin: flight.cabin };
  document.getElementById('fromInput').value = `${from.city} (${from.code})`;
  document.getElementById('toInput').value = `${to.city} (${to.code})`;
  document.getElementById('departDate').value = state.search.departDate;
  document.getElementById('returnDate').value = '';
  document.querySelector('input[name=tripType][value=one]').checked = true;
  onTripTypeChange();
  navigate('home');
  showToast(`${from.city} to ${to.city} selected. Review and search.`, 'success');
}

function startPopularFlightSearch(route) {
  const from = AIRPORTS.find(airport => airport.code === route.from);
  const to = AIRPORTS.find(airport => airport.code === route.to);
  if (!from || !to) return;
  const depart = new Date();
  depart.setDate(depart.getDate() + 21);
  const returnDate = new Date(depart);
  returnDate.setDate(returnDate.getDate() + 7);
  state.search.from = from;
  state.search.to = to;
  state.search.tripType = 'round';
  state.search.departDate = depart.toISOString().split('T')[0];
  state.search.returnDate = returnDate.toISOString().split('T')[0];
  document.getElementById('fromInput').value = `${from.city} (${from.code})`;
  document.getElementById('toInput').value = `${to.city} (${to.code})`;
  document.getElementById('departDate').value = state.search.departDate;
  document.getElementById('returnDate').value = state.search.returnDate;
  document.querySelector('input[name=tripType][value=round]').checked = true;
  onTripTypeChange();
  navigate('home');
  showToast(`${route.route} selected. Choose your dates and search.`, 'success');
}

function setMinDates() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('departDate').min = today;
  document.getElementById('returnDate').min = today;
  document.getElementById('departDate').addEventListener('change', () => {
    document.getElementById('returnDate').min = document.getElementById('departDate').value || today;
  });
}

function onTripTypeChange() {
  const type = document.querySelector('input[name=tripType]:checked').value;
  state.search.tripType = type;
  const returnField = document.getElementById('returnField');
  const returnInput = document.getElementById('returnDate');
  if (type === 'one') {
    returnField.style.opacity = '.4';
    returnInput.required = false;
    returnInput.disabled = true;
  } else {
    returnField.style.opacity = '1';
    returnInput.required = true;
    returnInput.disabled = false;
  }
}

function populateOffers() {
  const grid = document.getElementById('offerGrid');
  grid.innerHTML = OFFERS.map(o => `
    <button type="button" class="offer-card" data-offer-code="${o.code}">
      <div class="offer-img" style="background:${o.color}">${o.image ? `<img src="${o.image}" alt="${o.city} destination" loading="lazy" onerror="this.remove()">` : o.emoji}</div>
      <div class="offer-body">
        <div class="offer-title-row"><h4>${o.city}</h4><img class="airline-logo" src="${AIRLINE_LOGOS[o.airline] || ''}" alt="${o.airline} logo" loading="lazy" onerror="this.style.display='none'"></div>
        <p class="muted-sm" style="margin:0 0 3px">${o.airline} · Round trip from</p>
        <span class="offer-price">$${o.price}</span>
      </div>
    </button>
  `).join('');
  grid.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('click', () => {
      const code = card.dataset.offerCode;
      const airport = AIRPORTS.find(a => a.code === code);
      document.getElementById('fromInput').value = 'New York (JFK)';
      state.search.from = AIRPORTS.find(a => a.code === 'JFK');
      document.getElementById('toInput').value = `${airport.city} (${airport.code})`;
      state.search.to = airport;
      const d = new Date(); d.setDate(d.getDate() + 21);
      const r = new Date(); r.setDate(r.getDate() + 28);
      document.getElementById('departDate').value = d.toISOString().split('T')[0];
      document.getElementById('returnDate').value = r.toISOString().split('T')[0];
      showToast(`Prefilled a round trip to ${airport.city}. Review and search.`, 'info');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function initAutocomplete(inputId, listId, field) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    state.search[field] = null;
    if (!q) { list.classList.remove('open'); return; }
    const matches = AIRPORTS.filter(a =>
      a.city.toLowerCase().includes(q) || a.code.toLowerCase().includes(q) || a.country.toLowerCase().includes(q) || a.state?.toLowerCase().includes(q)
    ).sort((a, b) => {
      const exactA = a.city.toLowerCase().startsWith(q) || a.code.toLowerCase().startsWith(q) ? 0 : 1;
      const exactB = b.city.toLowerCase().startsWith(q) || b.code.toLowerCase().startsWith(q) ? 0 : 1;
      if (exactA !== exactB) return exactA - exactB;
      const hubA = INDIAN_HUB_CODES.has(a.code) ? 0 : 1;
      const hubB = INDIAN_HUB_CODES.has(b.code) ? 0 : 1;
      return hubA - hubB;
    }).slice(0, 10);
    if (!matches.length) { list.innerHTML = '<div class="ac-item">No airports found</div>'; list.classList.add('open'); return; }
    list.innerHTML = matches.map(a => `
      <div class="ac-item" data-code="${a.code}"><span class="ac-code">${a.code}</span><span class="ac-city">${a.city}${a.state ? ', ' + a.state : ''}, ${a.country}</span></div>
    `).join('');
    list.classList.add('open');
  });

  list.addEventListener('click', (e) => {
    const item = e.target.closest('.ac-item[data-code]');
    if (!item) return;
    const airport = AIRPORTS.find(a => a.code === item.dataset.code);
    input.value = `${airport.city} (${airport.code})`;
    state.search[field] = airport;
    list.classList.remove('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest(`#${inputId}`) && !e.target.closest(`#${listId}`)) list.classList.remove('open');
  });
}

function swapFromTo() {
  const fromInput = document.getElementById('fromInput');
  const toInput = document.getElementById('toInput');
  const tmpVal = fromInput.value; fromInput.value = toInput.value; toInput.value = tmpVal;
  const tmpState = state.search.from; state.search.from = state.search.to; state.search.to = tmpState;
}

function initPaxDropdown() {
  const toggle = document.getElementById('paxToggle');
  const panel = document.getElementById('paxPanel');
  toggle.addEventListener('click', () => panel.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#paxField')) panel.classList.remove('open');
  });
  document.getElementById('paxDone').addEventListener('click', () => panel.classList.remove('open'));

  document.querySelectorAll('[data-pax]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.pax;
      const dir = parseInt(btn.dataset.dir, 10);
      let val = state.search[key] + dir;
      const min = key === 'adults' ? 1 : 0;
      const max = key === 'adults' ? 6 : 5;
      val = Math.max(min, Math.min(max, val));
      state.search[key] = val;
      document.getElementById(key === 'adults' ? 'adultsCount' : 'childrenCount').textContent = val;
      updatePaxLabel();
    });
  });

  document.getElementById('cabinClass').addEventListener('change', (e) => {
    state.search.cabin = e.target.value;
    updatePaxLabel();
  });
}

function updatePaxLabel() {
  const total = state.search.adults + state.search.children;
  const label = `${total} ${total === 1 ? 'Passenger' : 'Passengers'} · ${state.search.cabin}`;
  document.getElementById('paxToggle').textContent = label;
}

function handleSearchSubmit(e) {
  e.preventDefault();
  const errEl = document.getElementById('searchError');
  errEl.textContent = '';

  if (!state.search.from) { errEl.textContent = 'Select a valid departure airport from the list.'; return; }
  if (!state.search.to) { errEl.textContent = 'Select a valid destination airport from the list.'; return; }
  if (state.search.from.code === state.search.to.code) { errEl.textContent = 'Origin and destination cannot be the same.'; return; }

  const departVal = document.getElementById('departDate').value;
  if (!departVal) { errEl.textContent = 'Choose a departure date.'; return; }
  state.search.departDate = departVal;

  if (state.search.tripType === 'round') {
    const returnVal = document.getElementById('returnDate').value;
    if (!returnVal) { errEl.textContent = 'Choose a return date.'; return; }
    if (returnVal < departVal) { errEl.textContent = 'Return date cannot be before the departure date.'; return; }
    state.search.returnDate = returnVal;
  }

  // reset downstream state for a fresh search
  state.selectedFlight = { outbound: null, return: null };
  state.seats = { outbound: [], return: [] };
  state.resultsLeg = 'outbound';
  state.seatLeg = 'outbound';
  state.filters = { maxPrice: 1000, nonstop: false, airlines: new Set(), sort: 'price-asc' };

  withLoader('Searching flights…', () => {
    state.flights.outbound = generateFlights(state.search.from, state.search.to, state.search.departDate);
    state.flights.return = state.search.tripType === 'round'
      ? generateFlights(state.search.to, state.search.from, state.search.returnDate)
      : [];
    navigate('results');
  }, 750);
}

/* ============ 8. FLIGHT SEARCH (mock generation) ============ */
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateFlights(from, to, dateStr) {
  const seedBase = (from.code + to.code + dateStr).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const count = 5 + Math.floor(seededRandom(seedBase) * 4);
  const flights = [];
  const storedTimings = Storage.getFlightTimings();
  let timingsChanged = false;
  for (let i = 0; i < count; i++) {
    const seed = seedBase + i * 37;
    const airline = AIRLINES[Math.floor(seededRandom(seed) * AIRLINES.length)];
    const flightNumber = `${airline.code}${100 + Math.floor(seededRandom(seed + 1) * 800)}`;
    const departHour = Math.floor(seededRandom(seed + 2) * 22);
    const departMin = Math.floor(seededRandom(seed + 3) * 60);
    const durationMins = 90 + Math.floor(seededRandom(seed + 4) * 600);
    const stopsRand = seededRandom(seed + 5);
    const stops = stopsRand < 0.45 ? 0 : stopsRand < 0.8 ? 1 : 2;
    const basePrice = 79 + Math.floor(seededRandom(seed + 6) * 520);
    const price = Math.round(basePrice * CABIN_MULTIPLIER[state.search.cabin]);

    const departDate = new Date(dateStr + 'T00:00:00');
    departDate.setHours(departHour, departMin, 0, 0);
    const arriveDate = new Date(departDate.getTime() + durationMins * 60000);
    const id = `${airline.code}-${flightNumber}-${dateStr}-${from.code}-${to.code}`;
    const timing = storedTimings[id] || { departISO: departDate.toISOString(), arriveISO: arriveDate.toISOString() };
    if (!storedTimings[id]) {
      storedTimings[id] = timing;
      timingsChanged = true;
    }

    flights.push({
      id,
      airline, flightNumber,
      from: from.code, to: to.code,
      fromCity: from.city, toCity: to.city,
      departISO: timing.departISO,
      arriveISO: timing.arriveISO,
      durationMins, stops,
      baggage: CABIN_BAGGAGE[state.search.cabin],
      price,
      cabin: state.search.cabin
    });
  }
  if (timingsChanged) Storage.saveFlightTimings(storedTimings);
  return flights;
}

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
function formatDuration(mins) {
  const h = Math.floor(mins / 60), m = mins % 60;
  return `${h}h ${m}m`;
}
function formatDateLong(iso) {
  return new Date(iso).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
}

/* ============ 9. SEARCH RESULTS + FILTERING/SORTING ============ */
function renderResults() {
  const isRound = state.search.tripType === 'round';
  document.getElementById('resultsTabs').classList.toggle('hidden', !isRound);
  document.querySelectorAll('#resultsTabs .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.leg === state.resultsLeg);
  });

  const leg = state.resultsLeg;
  const legLabel = leg === 'outbound'
    ? `${state.search.from.city} → ${state.search.to.city}`
    : `${state.search.to.city} → ${state.search.from.city}`;
  document.getElementById('resultsSummary').textContent =
    `${legLabel} · ${formatDateLong(leg === 'outbound' ? state.search.departDate + 'T00:00:00' : state.search.returnDate + 'T00:00:00')}`;

  renderFlexibleDateGrid();
  renderBookingAdvisor();
  buildAirlineFilterList();
  applyFiltersAndRenderList();

  document.getElementById('priceFilter').oninput = (e) => {
    state.filters.maxPrice = parseInt(e.target.value, 10);
    document.getElementById('priceFilterValue').textContent = '$' + state.filters.maxPrice;
    applyFiltersAndRenderList();
  };
  document.getElementById('nonstopFilter').onchange = (e) => {
    state.filters.nonstop = e.target.checked;
    applyFiltersAndRenderList();
  };
  document.getElementById('sortSelect').onchange = (e) => {
    state.filters.sort = e.target.value;
    applyFiltersAndRenderList();
  };
  document.getElementById('clearFilters').onclick = () => {
    state.filters.maxPrice = 1000;
    state.filters.nonstop = false;
    state.filters.airlines.clear();
    state.filters.sort = 'price-asc';
    renderResults();
  };
  document.querySelectorAll('#resultsTabs .tab-btn').forEach(btn => {
    btn.onclick = () => { state.resultsLeg = btn.dataset.leg; renderResults(); };
  });
}

function renderFlexibleDateGrid() {
  const panel = document.getElementById('flexibleDatePanel');
  const isOutbound = state.resultsLeg === 'outbound';
  const baseDate = new Date(`${isOutbound ? state.search.departDate : state.search.returnDate}T00:00:00`);
  const from = isOutbound ? state.search.from : state.search.to;
  const to = isOutbound ? state.search.to : state.search.from;
  const cards = [];
  for (let offset = -3; offset <= 3; offset++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + offset);
    const dateValue = date.toISOString().split('T')[0];
    const flights = generateFlights(from, to, dateValue);
    const lowest = Math.min(...flights.map(flight => flight.price));
    cards.push(`<button class="flexible-date-card ${offset === 0 ? 'active' : ''}" data-flex-date="${dateValue}"><span>${date.toLocaleDateString([], { weekday: 'short' })}</span><strong>${date.toLocaleDateString([], { month: 'short', day: 'numeric' })}</strong><em>from $${lowest}</em></button>`);
  }
  panel.innerHTML = `<div class="flexible-date-head"><div><strong>Flexible dates</strong><span>Compare nearby prices</span></div><span class="muted-sm">Lowest fare per day</span></div><div class="flexible-date-grid">${cards.join('')}</div>`;
  panel.querySelectorAll('[data-flex-date]').forEach(button => {
    button.onclick = () => {
      const date = button.dataset.flexDate;
      if (isOutbound) state.search.departDate = date;
      else state.search.returnDate = date;
      document.getElementById(isOutbound ? 'departDate' : 'returnDate').value = date;
      state.flights.outbound = generateFlights(state.search.from, state.search.to, state.search.departDate);
      state.flights.return = state.search.tripType === 'round' ? generateFlights(state.search.to, state.search.from, state.search.returnDate) : [];
      renderResults();
    };
  });
}

function renderBookingAdvisor() {
  const panel = document.getElementById('bookingAdvisor');
  const flights = state.flights[state.resultsLeg] || [];
  if (!panel || !flights.length) return;
  const currentLowest = Math.min(...flights.map(flight => flight.price));
  const isOutbound = state.resultsLeg === 'outbound';
  const baseDate = new Date(`${isOutbound ? state.search.departDate : state.search.returnDate}T00:00:00`);
  const nearbyPrices = [-2, -1, 1, 2].map(offset => {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + offset);
    const dateValue = date.toISOString().split('T')[0];
    const from = isOutbound ? state.search.from : state.search.to;
    const to = isOutbound ? state.search.to : state.search.from;
    return Math.min(...generateFlights(from, to, dateValue).map(flight => flight.price));
  });
  const nearbyAverage = nearbyPrices.reduce((sum, price) => sum + price, 0) / nearbyPrices.length;
  const isGoodTime = currentLowest <= nearbyAverage * 0.92;
  panel.innerHTML = `<div class="advisor-icon">${isGoodTime ? '↘' : '◷'}</div><div><strong>${isGoodTime ? 'Good time to book' : 'You could wait for a better fare'}</strong><p>${isGoodTime ? `Today’s lowest fare is $${Math.round(nearbyAverage - currentLowest)} below nearby dates.` : `Nearby dates average $${Math.round(nearbyAverage)}. Try shifting your date in the flexible grid.`}</p></div><span class="advisor-label">Fare guide</span>`;
}

function buildAirlineFilterList() {
  const flights = state.flights[state.resultsLeg];
  const uniqueAirlines = [...new Map(flights.map(f => [f.airline.code, f.airline])).values()];
  const container = document.getElementById('airlineFilterList');
  container.innerHTML = uniqueAirlines.map(a => `
    <label class="checkbox-row">
      <input type="checkbox" data-airline="${a.code}" ${state.filters.airlines.has(a.code) ? 'checked' : ''}>
      ${a.name}
    </label>
  `).join('');
  container.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) state.filters.airlines.add(cb.dataset.airline);
      else state.filters.airlines.delete(cb.dataset.airline);
      applyFiltersAndRenderList();
    });
  });

  const maxObservedPrice = Math.max(...flights.map(f => f.price), 100);
  const priceInput = document.getElementById('priceFilter');
  priceInput.max = maxObservedPrice;
  if (state.filters.maxPrice > maxObservedPrice || state.filters.maxPrice === 1000) {
    state.filters.maxPrice = maxObservedPrice;
  }
  priceInput.value = state.filters.maxPrice;
  document.getElementById('priceFilterValue').textContent = '$' + state.filters.maxPrice;
}

function applyFiltersAndRenderList() {
  let flights = [...state.flights[state.resultsLeg]];
  flights = flights.filter(f => f.price <= state.filters.maxPrice);
  if (state.filters.nonstop) flights = flights.filter(f => f.stops === 0);
  if (state.filters.airlines.size) flights = flights.filter(f => state.filters.airlines.has(f.airline.code));

  switch (state.filters.sort) {
    case 'price-asc': flights.sort((a, b) => a.price - b.price); break;
    case 'price-desc': flights.sort((a, b) => b.price - a.price); break;
    case 'duration-asc': flights.sort((a, b) => a.durationMins - b.durationMins); break;
    case 'depart-asc': flights.sort((a, b) => new Date(a.departISO) - new Date(b.departISO)); break;
  }

  const listEl = document.getElementById('flightList');
  const emptyEl = document.getElementById('noResults');
  if (!flights.length) {
    listEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  listEl.innerHTML = flights.map(f => flightCardHTML(f)).join('');
  listEl.querySelectorAll('[data-select-flight]').forEach(btn => {
    btn.addEventListener('click', () => selectFlight(btn.dataset.selectFlight));
  });
  listEl.querySelectorAll('[data-save-flight]').forEach(btn => {
    btn.addEventListener('click', () => toggleSaveFlight(btn.dataset.saveFlight));
  });
}

function flightCardHTML(f) {
  const stopsLabel = f.stops === 0 ? 'Non-stop' : f.stops === 1 ? '1 stop' : `${f.stops} stops`;
  return `
    <article class="flight-card">
      <div class="flight-main">
        <div class="flight-airline">
          <span class="airline-badge" style="background:${f.airline.color}">${f.airline.code}</span>
          <div><strong>${f.airline.name}</strong><span>${f.flightNumber}</span></div>
        </div>
        <div class="flight-times">
          <div class="time-block"><div class="t">${formatTime(f.departISO)}</div><div class="a">${f.from}</div></div>
          <div class="route-vis"><div class="line"></div><div class="dur">${formatDuration(f.durationMins)}</div><div class="stops">${stopsLabel}</div></div>
          <div class="time-block"><div class="t">${formatTime(f.arriveISO)}</div><div class="a">${f.to}</div></div>
        </div>
        <div class="flight-meta">
          <span>Baggage: ${f.baggage}</span>
          <span>${f.cabin}</span>
        </div>
      </div>
      <div class="flight-price-col">
        <div class="flight-price-col-wrap">
          <button class="save-flight-btn ${isFlightSaved(f.id) ? 'saved' : ''}" data-save-flight="${f.id}" aria-label="Save flight" title="Save flight">${isFlightSaved(f.id) ? '♥' : '♡'}</button>
          <div class="flight-price">$${f.price}<small>per passenger</small></div>
        </div>
        <button class="btn btn-primary btn-small" data-select-flight="${f.id}">Select flight</button>
      </div>
    </article>
  `;
}

function isFlightSaved(flightId) {
  const saved = Storage.getSavedFlights();
  const owner = state.currentUser ? state.currentUser.email : 'guest';
  return saved.some(s => s.flight.id === flightId && s.userEmail === owner);
}

function toggleSaveFlight(flightId) {
  if (!state.currentUser) {
    showToast('Log in to save flights for later.', 'info');
    navigate('auth');
    return;
  }
  const flight = findFlightById(flightId);
  if (!flight) return;
  const saved = Storage.getSavedFlights();
  const owner = state.currentUser.email;
  const idx = saved.findIndex(s => s.flight.id === flightId && s.userEmail === owner);
  if (idx >= 0) {
    saved.splice(idx, 1);
    showToast('Removed from saved flights.', 'info');
  } else {
    saved.unshift({ userEmail: owner, flight, savedAt: new Date().toISOString(), timing: {
      departISO: flight.departISO,
      arriveISO: flight.arriveISO
    } });
    showToast('Flight saved. Find it under My Trips → Saved flights.', 'success');
  }
  Storage.saveSavedFlights(saved);
  applyFiltersAndRenderList();
}

function findFlightById(id) {
  return [...state.flights.outbound, ...state.flights.return].find(f => f.id === id);
}

function selectFlight(flightId) {
  const flight = findFlightById(flightId);
  if (!flight) return;
  if (state.resultsLeg === 'outbound') {
    state.selectedFlight.outbound = flight;
    showToast(`Outbound flight ${flight.flightNumber} selected.`, 'success');
    if (state.search.tripType === 'round' && !state.selectedFlight.return) {
      state.resultsLeg = 'return';
      renderResults();
      return;
    }
  } else {
    state.selectedFlight.return = flight;
    showToast(`Return flight ${flight.flightNumber} selected.`, 'success');
  }

  const ready = state.selectedFlight.outbound && (state.search.tripType === 'one' || state.selectedFlight.return);
  if (ready) {
    withLoader('Preparing your booking…', () => navigate('passengers'), 500);
  }
}

/* ============ 10. PASSENGER DETAILS ============ */
function renderPassengerForm() {
  renderBookingRecap();
  const total = state.search.adults + state.search.children;
  const form = document.getElementById('passengerForm');

  let html = `
    <div class="passenger-block">
      <h4>Contact details</h4>
      <div class="form-grid">
        <div class="field"><label for="contactEmail">Email</label><input type="email" id="contactEmail" value="${state.currentUser ? state.currentUser.email : ''}" required></div>
        <div class="field"><label for="contactPhone">Phone</label><input type="tel" id="contactPhone" value="${state.currentUser ? state.currentUser.phone : ''}" required></div>
      </div>
    </div>
  `;

  for (let i = 0; i < total; i++) {
    const type = i < state.search.adults ? 'Adult' : 'Child';
    const existing = state.passengers[i] || {};
    html += `
      <div class="passenger-block">
        <h4>${type} ${i + 1}</h4>
        <div class="form-grid">
          <div class="field"><label>First name</label><input type="text" data-p="${i}" data-f="firstName" value="${existing.firstName || ''}" required></div>
          <div class="field"><label>Last name</label><input type="text" data-p="${i}" data-f="lastName" value="${existing.lastName || ''}" required></div>
          <div class="field"><label>Date of birth</label><input type="date" data-p="${i}" data-f="dob" value="${existing.dob || ''}" required></div>
          <div class="field"><label>Gender</label>
            <select data-p="${i}" data-f="gender">
              <option value="">Select</option>
              <option value="Female" ${existing.gender === 'Female' ? 'selected' : ''}>Female</option>
              <option value="Male" ${existing.gender === 'Male' ? 'selected' : ''}>Male</option>
              <option value="Other" ${existing.gender === 'Other' ? 'selected' : ''}>Other</option>
            </select>
          </div>
          <div class="field"><label>Passport / ID number</label><input type="text" data-p="${i}" data-f="passport" value="${existing.passport || ''}" required></div>
          <div class="field"><label>Passport expiry</label><input type="date" data-p="${i}" data-f="passportExpiry" value="${existing.passportExpiry || ''}" required><span class="field-hint">Must be valid 6 months after travel</span></div>
        </div>
      </div>
    `;
  }
  form.innerHTML = html;
  form.onsubmit = handlePassengerSubmit;
  document.getElementById('paxPageTotal').textContent = '$' + computeFlightsSubtotal();
}

function renderBookingRecap() {
  const ob = state.selectedFlight.outbound, rt = state.selectedFlight.return;
  let html = `
    <div class="rc-item"><span>Route</span><strong>${ob.from} → ${ob.to}${rt ? ' → ' + rt.to : ''}</strong></div>
    <div class="rc-item"><span>Depart</span><strong>${formatDateLong(ob.departISO)}, ${formatTime(ob.departISO)}</strong></div>
    ${rt ? `<div class="rc-item"><span>Return</span><strong>${formatDateLong(rt.departISO)}, ${formatTime(rt.departISO)}</strong></div>` : ''}
    <div class="rc-item"><span>Passengers</span><strong>${state.search.adults + state.search.children}</strong></div>
    <div class="rc-item"><span>Cabin</span><strong>${state.search.cabin}</strong></div>
  `;
  document.getElementById('bookingRecap').innerHTML = html;
}

function handlePassengerSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('contactEmail').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  if (!email || !validateEmail(email)) { showToast('Enter a valid contact email.', 'error'); return; }
  if (!phone || phone.length < 7) { showToast('Enter a valid contact phone number.', 'error'); return; }

  const inputs = document.querySelectorAll('#passengerForm [data-p]');
  const passengers = [];
  let valid = true;
  inputs.forEach(inp => {
    const idx = parseInt(inp.dataset.p, 10);
    const field = inp.dataset.f;
    if (!passengers[idx]) passengers[idx] = {};
    passengers[idx][field] = inp.value.trim();
    if (!inp.value.trim()) valid = false;
  });

  if (!valid) { showToast('Please complete every passenger field.', 'error'); return; }

  const travelDate = new Date(state.selectedFlight.outbound.departISO);
  const readinessDate = new Date(travelDate);
  readinessDate.setMonth(readinessDate.getMonth() + 6);
  const notReady = passengers.findIndex(passenger => new Date(passenger.passportExpiry) < readinessDate);
  if (notReady >= 0) {
    showToast(`Passenger ${notReady + 1}'s passport should be valid for at least 6 months after departure.`, 'error');
    return;
  }

  passengers.forEach((p, i) => { p.type = i < state.search.adults ? 'Adult' : 'Child'; });

  state.contact = { email, phone };
  state.passengers = passengers;
  navigate('seats');
}

/* ============ 11. SEAT SELECTION ============ */
function getOrCreateSeatCache(flight) {
  if (state.seatCache[flight.id]) return state.seatCache[flight.id];
  const rows = 15;
  const cols = ['A', 'B', 'C', 'D', 'E', 'F'];
  const occupied = new Set();
  const seedBase = flight.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  let n = 0;
  for (let r = 1; r <= rows; r++) {
    for (const c of cols) {
      n++;
      if (seededRandom(seedBase + n) < 0.28) occupied.add(`${r}${c}`);
    }
  }
  const cache = { rows, cols, occupied };
  state.seatCache[flight.id] = cache;
  return cache;
}

function renderSeatsView() {
  const isRound = state.search.tripType === 'round';
  let tabsEl = document.getElementById('seatTabs');
  if (isRound) {
    if (!tabsEl) {
      tabsEl = document.createElement('div');
      tabsEl.id = 'seatTabs';
      tabsEl.className = 'results-tabs';
      tabsEl.innerHTML = `
        <button class="tab-btn" data-seatleg="outbound">Outbound</button>
        <button class="tab-btn" data-seatleg="return">Return</button>
      `;
      document.querySelector('#view-seats .seats-main').insertBefore(tabsEl, document.querySelector('#view-seats .seat-legend'));
    }
    tabsEl.classList.remove('hidden');
    tabsEl.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.seatleg === state.seatLeg);
      btn.onclick = () => { state.seatLeg = btn.dataset.seatleg; renderSeatsView(); };
    });
  } else if (tabsEl) {
    tabsEl.classList.add('hidden');
  }

  const flight = state.selectedFlight[state.seatLeg];
  const needed = state.search.adults + state.search.children;
  document.getElementById('seatsNeeded').textContent = needed;

  const cache = getOrCreateSeatCache(flight);
  const map = document.getElementById('seatMap');
  const selected = new Set(state.seats[state.seatLeg]);
  let html = '';
  for (let r = 1; r <= cache.rows; r++) {
    const isPremium = r <= 3;
    html += `<div class="seat-row"><span class="seat-row-label">${r}</span>`;
    cache.cols.forEach((c, idx) => {
      const code = `${r}${c}`;
      const isOccupied = cache.occupied.has(code);
      const isSelected = selected.has(code);
      const classes = ['seat'];
      if (isOccupied) classes.push('occupied');
      if (isSelected) classes.push('selected');
      if (isPremium) classes.push('premium');
      html += `<button type="button" class="${classes.join(' ')}" data-seat="${code}" ${isOccupied ? 'disabled' : ''} aria-label="Seat ${code}">${code}</button>`;
      if (idx === 2) html += `<span class="aisle-gap"></span>`;
    });
    html += `</div>`;
  }
  map.innerHTML = html;

  map.querySelectorAll('.seat:not(.occupied)').forEach(seatBtn => {
    seatBtn.addEventListener('click', () => toggleSeat(seatBtn.dataset.seat));
  });

  document.getElementById('extraBaggage').checked = state.extras.baggage;
  document.getElementById('extraMeal').checked = state.extras.meal;
  document.getElementById('extraInsurance').checked = state.extras.insurance;
  document.getElementById('extraBaggage').onchange = (e) => { state.extras.baggage = e.target.checked; renderPriceBreakdown(); };
  document.getElementById('extraMeal').onchange = (e) => { state.extras.meal = e.target.checked; renderPriceBreakdown(); };
  document.getElementById('extraInsurance').onchange = (e) => { state.extras.insurance = e.target.checked; renderPriceBreakdown(); };

  document.getElementById('toSummaryBtn').onclick = handleSeatsContinue;
  renderPriceBreakdown();
}

function toggleSeat(code) {
  const needed = state.search.adults + state.search.children;
  const legSeats = state.seats[state.seatLeg];
  const idx = legSeats.indexOf(code);
  if (idx >= 0) {
    legSeats.splice(idx, 1);
  } else {
    if (legSeats.length >= needed) {
      showToast(`You can select up to ${needed} seat(s) for this flight.`, 'error');
      return;
    }
    legSeats.push(code);
  }
  renderSeatsView();
}

function isSeatPremium(flightLeg, code) {
  const row = parseInt(code, 10);
  return row <= 3;
}

function computeFlightsSubtotal() {
  const pax = state.search.adults + state.search.children;
  let total = 0;
  if (state.selectedFlight.outbound) total += state.selectedFlight.outbound.price * pax;
  if (state.selectedFlight.return) total += state.selectedFlight.return.price * pax;
  return total;
}

function computeExtrasSubtotal() {
  const pax = state.search.adults + state.search.children;
  let total = 0;
  if (state.extras.baggage) total += EXTRA_COSTS.baggage * pax;
  if (state.extras.meal) total += EXTRA_COSTS.meal * pax;
  if (state.extras.insurance) total += EXTRA_COSTS.insurance * pax;
  return total;
}

function computeSeatSurcharge() {
  let total = 0;
  ['outbound', 'return'].forEach(leg => {
    state.seats[leg].forEach(code => { if (isSeatPremium(leg, code)) total += PREMIUM_SEAT_SURCHARGE; });
  });
  return total;
}

function computeGrandTotal() {
  return computeFlightsSubtotal() + computeExtrasSubtotal() + computeSeatSurcharge();
}

function renderPriceBreakdown() {
  const flights = computeFlightsSubtotal();
  const extras = computeExtrasSubtotal();
  const seats = computeSeatSurcharge();
  const total = flights + extras + seats;
  document.getElementById('seatsPriceBreakdown').innerHTML = `
    <div class="pb-row"><span>Flights</span><span>$${flights}</span></div>
    <div class="pb-row"><span>Seat surcharges</span><span>$${seats}</span></div>
    <div class="pb-row"><span>Extras</span><span>$${extras}</span></div>
    <div class="pb-row total"><span>Total</span><span>$${total}</span></div>
  `;
}

function handleSeatsContinue() {
  const needed = state.search.adults + state.search.children;
  if (state.seats.outbound.length !== needed) {
    showToast(`Select ${needed} seat(s) for your outbound flight.`, 'error');
    state.seatLeg = 'outbound'; renderSeatsView(); return;
  }
  if (state.search.tripType === 'round' && state.seats.return.length !== needed) {
    showToast(`Select ${needed} seat(s) for your return flight.`, 'error');
    state.seatLeg = 'return'; renderSeatsView(); return;
  }
  navigate('summary');
}

/* ============ 13. BOOKING SUMMARY ============ */
function renderSummary() {
  const ob = state.selectedFlight.outbound, rt = state.selectedFlight.return;
  const pax = state.search.adults + state.search.children;

  function flightBlock(f, seats, label) {
    return `
      <div class="summary-section">
        <h4>${label}</h4>
        <div class="summary-flight-row">
          <div>
            <strong>${f.airline.name} ${f.flightNumber}</strong>
            <p class="muted-sm" style="margin-top:4px">${f.from} ${formatTime(f.departISO)} → ${f.to} ${formatTime(f.arriveISO)} · ${formatDateLong(f.departISO)}</p>
          </div>
          <span class="pill-tag">${f.cabin}</span>
        </div>
        <p class="muted-sm">Seats: ${seats.join(', ') || '—'} · Baggage: ${f.baggage}</p>
      </div>
    `;
  }

  let html = flightBlock(ob, state.seats.outbound, 'Outbound flight');
  if (rt) html += flightBlock(rt, state.seats.return, 'Return flight');

  html += `
    <div class="summary-section">
      <h4>Passengers</h4>
      ${state.passengers.map(p => `<p class="muted-sm">${p.type}: ${p.firstName} ${p.lastName} · Passport ${p.passport}</p>`).join('')}
      <p class="muted-sm">Contact: ${state.contact.email} · ${state.contact.phone}</p>
    </div>
    <div class="summary-section">
      <h4>Extras</h4>
      <p class="muted-sm">Extra baggage: ${state.extras.baggage ? 'Yes' : 'No'} · Meal: ${state.extras.meal ? 'Yes' : 'No'} · Insurance: ${state.extras.insurance ? 'Yes' : 'No'}</p>
    </div>
    <div class="summary-section">
      <h4>Price breakdown</h4>
      <div class="pb-row"><span>Flights (${pax} passenger${pax > 1 ? 's' : ''})</span><span>$${computeFlightsSubtotal()}</span></div>
      <div class="pb-row"><span>Seat surcharges</span><span>$${computeSeatSurcharge()}</span></div>
      <div class="pb-row"><span>Extras</span><span>$${computeExtrasSubtotal()}</span></div>
      <div class="pb-row total"><span>Total</span><span>$${computeGrandTotal()}</span></div>
    </div>
  `;

  document.getElementById('summaryContent').innerHTML = `<div class="card-block">${html}</div>`;
  document.getElementById('summaryTotal').textContent = '$' + computeGrandTotal();
  document.getElementById('toPaymentBtn').onclick = () => navigate('payment');
}

/* ============ 14. PAYMENT ============ */
function renderPayment() {
  const total = computeGrandTotal();
  document.getElementById('payAmount').textContent = '$' + total;

  const ob = state.selectedFlight.outbound, rt = state.selectedFlight.return;
  document.getElementById('paySummaryCard').innerHTML = `
    <h4>Order summary</h4>
    <div class="pb-row"><span>${ob.from} → ${ob.to}${rt ? ' → ' + rt.to : ''}</span><span></span></div>
    <div class="pb-row"><span>Passengers</span><span>${state.search.adults + state.search.children}</span></div>
    <div class="pb-row"><span>Cabin</span><span>${state.search.cabin}</span></div>
    <div class="pb-row total"><span>Total due</span><span>$${total}</span></div>
  `;

  document.querySelectorAll('input[name=payMethod]').forEach(r => r.onchange = togglePayFields);
  togglePayFields();
  document.getElementById('paymentForm').onsubmit = handlePaymentSubmit;
}

function togglePayFields() {
  const method = document.querySelector('input[name=payMethod]:checked').value;
  document.getElementById('payCardFields').classList.toggle('hidden', method !== 'card');
  document.getElementById('payUpiFields').classList.toggle('hidden', method !== 'upi');
  document.getElementById('payNetbankingFields').classList.toggle('hidden', method !== 'netbanking');
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  const errEl = document.getElementById('paymentError');
  errEl.textContent = '';
  const method = document.querySelector('input[name=payMethod]:checked').value;

  if (method === 'card') {
    const name = document.getElementById('cardName').value.trim();
    const number = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiry = document.getElementById('cardExpiry').value.trim();
    const cvv = document.getElementById('cardCvv').value.trim();
    if (!name) { errEl.textContent = 'Enter the name on the card.'; return; }
    if (!/^\d{13,16}$/.test(number)) { errEl.textContent = 'Enter a valid card number (13–16 digits).'; return; }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) { errEl.textContent = 'Enter expiry as MM/YY.'; return; }
    if (!/^\d{3,4}$/.test(cvv)) { errEl.textContent = 'Enter a valid CVV.'; return; }
  } else if (method === 'upi') {
    const upi = document.getElementById('upiId').value.trim();
    if (!/^[\w.-]+@[\w.-]+$/.test(upi)) { errEl.textContent = 'Enter a valid UPI ID, e.g. name@bank.'; return; }
  }
  // netbanking just needs a bank selected, which always has a default.

  withLoader('Processing your payment…', () => {
    const booking = createBooking(method);
    saveBooking(booking);
    state.viewedBooking = booking;
    renderConfirmation(booking);
    navigate('confirmation');
    showToast('Payment successful. Booking confirmed!', 'success');
  }, 1100);
}

/* ============ 15. BOOKING MANAGEMENT ============ */
function genPNR() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let pnr = '';
  for (let i = 0; i < 6; i++) pnr += chars[Math.floor(Math.random() * chars.length)];
  return pnr;
}

function createBooking(paymentMethod) {
  return {
    pnr: genPNR(),
    bookingDate: new Date().toISOString(),
    status: 'Confirmed',
    tripType: state.search.tripType,
    cabin: state.search.cabin,
    outboundFlight: state.selectedFlight.outbound,
    returnFlight: state.selectedFlight.return,
    seats: { outbound: [...state.seats.outbound], return: [...state.seats.return] },
    passengers: JSON.parse(JSON.stringify(state.passengers)),
    contact: { ...state.contact },
    extras: { ...state.extras },
    total: computeGrandTotal(),
    paymentMethod,
    userEmail: state.currentUser ? state.currentUser.email : 'guest'
  };
}

function saveBooking(booking) {
  const bookings = Storage.getBookings();
  bookings.unshift(booking);
  Storage.saveBookings(bookings);
}

function updateBookingStatus(pnr, status) {
  const bookings = Storage.getBookings();
  const b = bookings.find(bk => bk.pnr === pnr);
  if (b) { b.status = status; Storage.saveBookings(bookings); }
  return b;
}

/* ============ 16. CONFIRMATION + TICKET ============ */
function buildTicketHTML(b) {
  const ob = b.outboundFlight, rt = b.returnFlight;
  function legHTML(f, seats, label) {
    return `
      <div class="ticket-route">
        <div class="rt"><div class="t">${f.from}</div><div class="muted-sm">${formatTime(f.departISO)} · ${formatDateLong(f.departISO)}</div></div>
        <div class="arrow">✈ ${label}</div>
        <div class="rt" style="text-align:right"><div class="t">${f.to}</div><div class="muted-sm">${formatTime(f.arriveISO)} · ${formatDateLong(f.arriveISO)}</div></div>
      </div>
      <div class="ticket-grid">
        <div><div class="k">Airline</div><div class="v">${f.airline.name}</div></div>
        <div><div class="k">Flight</div><div class="v">${f.flightNumber}</div></div>
        <div><div class="k">Duration</div><div class="v">${formatDuration(f.durationMins)}</div></div>
        <div><div class="k">Seats</div><div class="v">${seats.join(', ') || '—'}</div></div>
        <div><div class="k">Baggage</div><div class="v">${f.baggage}</div></div>
        <div><div class="k">Cabin</div><div class="v">${f.cabin}</div></div>
      </div>
    `;
  }
  return `
    <div class="ticket">
      <div class="ticket-top">
        <div><div class="muted-sm" style="color:#C7D3E0">PNR / Booking No.</div><div class="ticket-pnr">${b.pnr}</div></div>
        <span class="ticket-status ${b.status === 'Cancelled' ? 'status-cancelled' : 'status-confirmed'}">${b.status}</span>
      </div>
      <div class="ticket-body">
        ${legHTML(ob, b.seats.outbound, 'Outbound')}
        ${rt ? `<div class="ticket-divider"></div>${legHTML(rt, b.seats.return, 'Return')}` : ''}
        <div class="ticket-divider"></div>
        <div class="ticket-grid">
          <div><div class="k">Passengers</div><div class="v">${b.passengers.map(p => p.firstName + ' ' + p.lastName).join(', ')}</div></div>
          <div><div class="k">Contact</div><div class="v">${b.contact.email}</div></div>
          <div><div class="k">Payment method</div><div class="v" style="text-transform:capitalize">${b.paymentMethod}</div></div>
          <div><div class="k">Total paid</div><div class="v">$${b.total}</div></div>
        </div>
      </div>
    </div>
  `;
}

function renderConfirmation(booking) {
  document.getElementById('ticketContainer').innerHTML = buildTicketHTML(booking);
  document.getElementById('confirmPrintBtn').onclick = () => printTicket(booking);
  document.getElementById('confirmTripsBtn').onclick = () => navigate('mytrips');
}

function printTicket(booking) {
  const win = window.open('', '_blank', 'width=700,height=900');
  win.document.write(`
    <html><head><title>Ticket ${booking.pnr}</title>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter&display=swap" rel="stylesheet">
    <style>${document.querySelector('link[href="style.css"]') ? '' : ''}
      body{font-family:Inter,sans-serif;padding:24px;color:#182231;}
      .ticket{border:1px solid #E1E6ED;border-radius:16px;overflow:hidden;}
      .ticket-top{background:#0A1B2E;color:#fff;padding:20px 24px;display:flex;justify-content:space-between;align-items:center;}
      .ticket-pnr{font-family:'Space Grotesk',sans-serif;font-size:1.3rem;letter-spacing:.05em;color:#E8A33D;}
      .ticket-status{padding:4px 12px;border-radius:999px;font-size:.78rem;font-weight:700;background:#E7F5EE;color:#2E7D5B;}
      .ticket-body{padding:20px 24px;}
      .ticket-route{display:flex;align-items:center;gap:16px;margin-bottom:16px;justify-content:space-between;}
      .t{font-size:1.4rem;font-weight:700;font-family:'Space Grotesk',sans-serif;}
      .muted-sm{color:#8998A8;font-size:.8rem;}
      .ticket-divider{border-top:1.5px dashed #E1E6ED;margin:14px 0;}
      .ticket-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;font-size:.88rem;}
      .k{color:#8998A8;font-size:.72rem;text-transform:uppercase;}
      .v{font-weight:600;}
    </style></head><body>${buildTicketHTML(booking)}</body></html>
  `);
  win.document.close();
  setTimeout(() => win.print(), 300);
}

/* ============ 17. MY TRIPS ============ */
let tripsActiveTab = 'bookings';

function renderMyTrips() {
  renderAiReviewCard();
  renderRecentReviews();
  seedDemoTrips();

  document.querySelectorAll('#view-mytrips [data-tripstab]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tripstab === tripsActiveTab);
    btn.onclick = () => { tripsActiveTab = btn.dataset.tripstab; renderMyTrips(); };
  });
  document.getElementById('tripsBookingsPanel').classList.toggle('hidden', tripsActiveTab !== 'bookings');
  document.getElementById('tripsSavedPanel').classList.toggle('hidden', tripsActiveTab !== 'saved');

  renderBookingsList();
  renderSavedFlightsList();
}

function seedDemoTrips() {
  const owner = state.currentUser ? state.currentUser.email : 'guest';
  const bookings = Storage.getBookings();
  if (bookings.some(booking => booking.userEmail === owner)) return;

  const seeded = Storage.get('skyroute_demo_trips_seeded', {});
  if (seeded[owner]) return;

  const createDemoFlight = (from, to, airline, flightNumber, departOffset, departHour, durationMins, price) => {
    const depart = new Date();
    depart.setDate(depart.getDate() + departOffset);
    depart.setHours(departHour, 30, 0, 0);
    const arrive = new Date(depart.getTime() + durationMins * 60000);
    return {
      id: `demo-${flightNumber}-${depart.toISOString().slice(0, 10)}`,
      airline,
      flightNumber,
      from: from.code,
      to: to.code,
      fromCity: from.city,
      toCity: to.city,
      departISO: depart.toISOString(),
      arriveISO: arrive.toISOString(),
      durationMins,
      stops: 0,
      baggage: '15kg',
      price,
      cabin: 'Economy'
    };
  };

  const delhi = AIRPORTS.find(airport => airport.code === 'DEL');
  const goa = AIRPORTS.find(airport => airport.code === 'GOX');
  const dubai = AIRPORTS.find(airport => airport.code === 'DXB');
  const mumbai = AIRPORTS.find(airport => airport.code === 'BOM');
  const indigo = AIRLINES.find(airline => airline.code === '6E') || AIRLINES[0];
  const emirates = { code: 'EK', name: 'Emirates', color: '#D71920' };
  const trips = [
    {
      pnr: 'SRDEMO', bookingDate: new Date().toISOString(), status: 'Confirmed', tripType: 'round', cabin: 'Economy',
      outboundFlight: createDemoFlight(delhi, goa, indigo, '6E 2145', 18, 7, 165, 89),
      returnFlight: createDemoFlight(goa, delhi, indigo, '6E 2146', 24, 18, 170, 89),
      seats: { outbound: ['12A'], return: ['12A'] }, passengers: [{ firstName: 'Demo', lastName: 'Traveler', type: 'Adult', passport: 'DEMO123', dob: '1990-01-01', gender: 'Other' }],
      contact: { email: owner === 'guest' ? 'traveler@example.com' : owner, phone: '+91 90000 00000' }, extras: { baggage: false, meal: true, insurance: false }, total: 193, paymentMethod: 'card', userEmail: owner, demo: true
    },
    {
      pnr: 'SRTRIP2', bookingDate: new Date(Date.now() - 86400000 * 4).toISOString(), status: 'Confirmed', tripType: 'one', cabin: 'Economy',
      outboundFlight: createDemoFlight(mumbai, dubai, emirates, 'EK 507', 42, 22, 190, 344),
      returnFlight: null,
      seats: { outbound: ['8C'], return: [] }, passengers: [{ firstName: 'Demo', lastName: 'Traveler', type: 'Adult', passport: 'DEMO456', dob: '1990-01-01', gender: 'Other' }],
      contact: { email: owner === 'guest' ? 'traveler@example.com' : owner, phone: '+91 90000 00000' }, extras: { baggage: true, meal: false, insurance: true }, total: 394, paymentMethod: 'upi', userEmail: owner, demo: true
    }
  ];

  Storage.saveBookings([...trips, ...bookings]);
  seeded[owner] = true;
  Storage.set('skyroute_demo_trips_seeded', seeded);
}

function renderBookingsList() {
  const all = Storage.getBookings();
  const mine = state.currentUser
    ? all.filter(b => b.userEmail === state.currentUser.email)
    : all.filter(b => b.userEmail === 'guest');

  renderMilestones(mine);

  const listEl = document.getElementById('tripsList');
  const emptyEl = document.getElementById('noTrips');
  if (!mine.length) {
    listEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  listEl.innerHTML = mine.map(b => `
    <div class="trip-card">
      ${buildTicketHTML(b)}
      <div class="trip-actions">
        <button class="btn btn-tertiary" data-view-pnr="${b.pnr}">View</button>
        <button class="btn btn-secondary" data-print-pnr="${b.pnr}">Download / Print ticket</button>
        <button class="btn btn-tertiary" data-pack-pnr="${b.pnr}">Packing list</button>
        <button class="btn btn-tertiary" data-journal-pnr="${b.pnr}">Create travel story</button>
        ${b.status !== 'Cancelled' ? `<button class="btn btn-tertiary" style="color:#C1443C;border-color:#C1443C" data-cancel-pnr="${b.pnr}">Cancel booking</button>` : ''}
      </div>
      <div class="ai-trip-tools" data-ai-panel="${b.pnr}"></div>
    </div>
  `).join('');

  listEl.querySelectorAll('[data-view-pnr]').forEach(btn => {
    btn.onclick = () => {
      const b = Storage.getBookings().find(bk => bk.pnr === btn.dataset.viewPnr);
      renderConfirmation(b);
      navigate('confirmation');
    };
  });
  listEl.querySelectorAll('[data-print-pnr]').forEach(btn => {
    btn.onclick = () => {
      const b = Storage.getBookings().find(bk => bk.pnr === btn.dataset.printPnr);
      printTicket(b);
    };
  });
  listEl.querySelectorAll('[data-cancel-pnr]').forEach(btn => {
    btn.onclick = () => {
      if (confirm(`Cancel booking ${btn.dataset.cancelPnr}? This cannot be undone.`)) {
        updateBookingStatus(btn.dataset.cancelPnr, 'Cancelled');
        showToast(`Booking ${btn.dataset.cancelPnr} cancelled.`, 'info');
        renderMyTrips();
      }
    };
  });
  listEl.querySelectorAll('[data-pack-pnr]').forEach(btn => {
    btn.onclick = () => generateTripTool(btn.dataset.packPnr, 'packing');
  });
  listEl.querySelectorAll('[data-journal-pnr]').forEach(btn => {
    btn.onclick = () => generateTripTool(btn.dataset.journalPnr, 'journal');
  });
}

function renderMilestones(bookings) {
  const list = document.getElementById('milestonesList');
  const count = document.getElementById('milestonesCount');
  if (!list || !count) return;
  const destinations = new Set(bookings.map(booking => booking.outboundFlight.to));
  const international = bookings.filter(booking => booking.outboundFlight.toCity && booking.outboundFlight.to !== 'GOX' && booking.outboundFlight.to !== 'DEL').length;
  const badges = [
    { icon: '✈', title: 'First takeoff', text: 'Booked your first Sky Via trip', earned: bookings.length >= 1 },
    { icon: '◈', title: 'Route collector', text: 'Visited three different destinations', earned: destinations.size >= 3 },
    { icon: '◎', title: 'World curious', text: 'Booked an international journey', earned: international >= 1 },
    { icon: '★', title: 'Frequent flyer', text: 'Reached five completed bookings', earned: bookings.length >= 5 }
  ];
  const earned = badges.filter(badge => badge.earned).length;
  count.textContent = `${earned}/${badges.length} unlocked`;
  list.innerHTML = badges.map(badge => `<article class="milestone ${badge.earned ? 'earned' : ''}"><span class="milestone-icon">${badge.icon}</span><div><strong>${badge.title}</strong><p>${badge.text}</p></div>${badge.earned ? '<span class="milestone-check">✓</span>' : ''}</article>`).join('');
}

function getTripToolPrompt(booking, type) {
  const flight = booking.outboundFlight;
  const tripDays = booking.returnFlight ? Math.max(1, Math.round((new Date(booking.returnFlight.departISO) - new Date(flight.departISO)) / 86400000)) : 3;
  if (type === 'packing') return `Create a concise packing checklist for a ${tripDays}-day trip to ${flight.toCity}, departing ${formatDateLong(flight.departISO)}. Cabin: ${booking.cabin}. Extras: ${Object.keys(booking.extras).filter(key => booking.extras[key]).join(', ') || 'none'}. Use 3 short categories and checkbox-style lines. No markdown heading.`;
  return `Write a warm, vivid 100-word travel postcard story for a traveler flying from ${flight.fromCity} to ${flight.toCity} on ${flight.airline.name} ${flight.flightNumber}. Mention the ${booking.cabin} cabin, ${booking.seats.outbound.join(', ') || 'their seat'}, and one imaginative moment at the destination. Do not claim real events beyond these facts.`;
}

function getLocalTripToolText(booking, type) {
  const flight = booking.outboundFlight;
  if (type === 'packing') return `Essentials\n□ Passport and travel documents\n□ Phone, charger, and power bank\n□ Comfortable clothes for the trip\n\nDestination extras\n□ Weather-appropriate shoes\n□ Toiletries and medication\n□ Reusable water bottle\n\nFlight day\n□ Arrive at the airport 2 hours early\n□ Keep your ${booking.cabin} boarding details handy`;
  return `From ${flight.fromCity} to ${flight.toCity}, the journey begins above the clouds on ${flight.airline.name} ${flight.flightNumber}. Settled into ${booking.cabin} and looking out from seat ${booking.seats.outbound.join(', ') || 'your seat'}, the world turns into a patchwork of light and sky. Soon, ${flight.toCity} appears ahead: a new horizon, new flavors, and a story waiting to be written. Pack lightly, wander slowly, and leave room for one beautiful surprise.`;
}

async function generateTripTool(pnr, type) {
  const booking = Storage.getBookings().find(item => item.pnr === pnr);
  const panel = document.querySelector(`[data-ai-panel="${pnr}"]`);
  if (!booking || !panel) return;
  panel.innerHTML = `<div class="ai-trip-tool-loading">✦ Creating your ${type === 'packing' ? 'packing list' : 'travel story'}...</div>`;
  const cache = Storage.get('skyroute_trip_tools', {});
  try {
    const text = await callGroq(getTripToolPrompt(booking, type));
    cache[`${pnr}:${type}`] = text;
    Storage.set('skyroute_trip_tools', cache);
    renderTripTool(panel, text, type);
  } catch (e) {
    const text = cache[`${pnr}:${type}`] || getLocalTripToolText(booking, type);
    renderTripTool(panel, text, type, !cache[`${pnr}:${type}`]);
  }
}

function renderTripTool(panel, text, type, offline = false) {
  panel.innerHTML = `<div class="ai-trip-tool"><div class="ai-trip-tool-head"><strong>${type === 'packing' ? 'Packing list' : 'Your travel story'}</strong><span>${offline ? 'Offline draft' : 'AI generated'}</span></div><p>${escapeHtml(text).replace(/\n/g, '<br>')}</p><div class="trip-tool-actions"><button class="link-btn" data-copy-trip-tool>Copy</button>${type === 'journal' ? '<button class="link-btn" data-share-trip-tool>Share</button>' : ''}</div></div>`;
  panel.querySelector('[data-copy-trip-tool]').onclick = async () => {
    await navigator.clipboard?.writeText(text);
    showToast('Copied to clipboard.', 'success');
  };
  const shareButton = panel.querySelector('[data-share-trip-tool]');
  if (shareButton) shareButton.onclick = async () => {
    if (navigator.share) await navigator.share({ title: 'My Sky Via travel story', text });
    else { await navigator.clipboard?.writeText(text); showToast('Story copied. Paste it anywhere to share.', 'success'); }
  };
}

/* ============ 17b. SAVED FLIGHTS ============ */
function renderSavedFlightsList() {
  const all = Storage.getSavedFlights();
  const owner = state.currentUser ? state.currentUser.email : 'guest';
  const mine = all.filter(s => s.userEmail === owner);

  const listEl = document.getElementById('savedFlightsList');
  const emptyEl = document.getElementById('noSaved');
  if (!mine.length) {
    listEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  listEl.innerHTML = mine.map(s => {
    const f = s.flight;
    const savedLabel = s.savedAt ? `Saved ${formatDateLong(s.savedAt)} at ${formatTime(s.savedAt)}` : 'Saved flight';
    const stopsLabel = f.stops === 0 ? 'Non-stop' : f.stops === 1 ? '1 stop' : `${f.stops} stops`;
    return `
      <article class="flight-card">
        <div class="flight-main">
          <div class="flight-airline">
            <span class="airline-badge" style="background:${f.airline.color}">${f.airline.code}</span>
            <div><strong>${f.airline.name}</strong><span>${f.flightNumber}</span></div>
          </div>
          <div class="flight-times">
            <div class="time-block"><div class="t">${formatTime(f.departISO)}</div><div class="a">${f.from}</div></div>
            <div class="route-vis"><div class="line"></div><div class="dur">${formatDuration(f.durationMins)}</div><div class="stops">${stopsLabel}</div></div>
            <div class="time-block"><div class="t">${formatTime(f.arriveISO)}</div><div class="a">${f.to}</div></div>
          </div>
          <div class="flight-meta"><span>Baggage: ${f.baggage}</span><span>${f.cabin}</span><span>${savedLabel}</span></div>
        </div>
        <div class="flight-price-col">
          <div class="flight-price">$${f.price}<small>per passenger</small></div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-tertiary btn-small" data-remove-saved="${f.id}">Remove</button>
            <button class="btn btn-primary btn-small" data-book-saved="${f.id}">Book now</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  listEl.querySelectorAll('[data-remove-saved]').forEach(btn => {
    btn.onclick = () => {
      const list = Storage.getSavedFlights().filter(s => !(s.flight.id === btn.dataset.removeSaved && s.userEmail === owner));
      Storage.saveSavedFlights(list);
      showToast('Removed from saved flights.', 'info');
      renderSavedFlightsList();
    };
  });
  listEl.querySelectorAll('[data-book-saved]').forEach(btn => {
    btn.onclick = () => bookSavedFlight(btn.dataset.bookSaved);
  });
}

function bookSavedFlight(flightId) {
  const saved = Storage.getSavedFlights();
  const owner = state.currentUser ? state.currentUser.email : 'guest';
  const entry = saved.find(s => s.flight.id === flightId && s.userEmail === owner);
  if (!entry) return;
  const flight = entry.flight;

  const fromAirport = AIRPORTS.find(a => a.code === flight.from) || { code: flight.from, city: flight.fromCity };
  const toAirport = AIRPORTS.find(a => a.code === flight.to) || { code: flight.to, city: flight.toCity };

  state.search = { tripType: 'one', from: fromAirport, to: toAirport, departDate: flight.departISO.split('T')[0], returnDate: '', adults: 1, children: 0, cabin: flight.cabin };
  state.flights = { outbound: [flight], return: [] };
  state.selectedFlight = { outbound: flight, return: null };
  state.seats = { outbound: [], return: [] };
  state.seatLeg = 'outbound';
  state.passengers = [];
  state.extras = { baggage: false, meal: false, insurance: false };

  showToast(`Booking ${flight.airline.name} ${flight.flightNumber} from your saved flights.`, 'success');
  navigate('passengers');
}

/* ============ 17c. AI TRIP REVIEW (Groq) ============ */
async function callGroq(promptText) {
  const key = Storage.getGroqKey();
  if (!key) throw new Error('NO_KEY');
  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: 'system', content: 'You are a witty, concise travel reviewer. Write a short, upbeat, specific review of a completed flight trip using the facts given. 2-3 sentences max, no markdown, no hashtags.' },
        { role: 'user', content: promptText }
      ],
      max_tokens: 160,
      temperature: 0.85
    })
  });
  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    throw new Error('HTTP_' + resp.status + ' ' + errText.slice(0, 120));
  }
  const data = await resp.json();
  return data.choices?.[0]?.message?.content?.trim() || '';
}

function getLastBookingForReview() {
  const all = Storage.getBookings();
  const owner = state.currentUser ? state.currentUser.email : 'guest';
  const mine = all.filter(b => b.userEmail === owner);
  if (!mine.length) return null;
  return mine.slice().sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate))[0];
}

function buildReviewPrompt(b) {
  const ob = b.outboundFlight, rt = b.returnFlight;
  const extrasList = Object.entries(b.extras).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none';
  return `Trip: ${ob.fromCity} (${ob.from}) to ${ob.toCity} (${ob.to})${rt ? ' round trip' : ' one-way'}.
Airline: ${ob.airline.name}, flight ${ob.flightNumber}, cabin ${b.cabin}.
Seats: ${b.seats.outbound.join(', ') || 'unassigned'}.
Extras purchased: ${extrasList}.
Passengers: ${b.passengers.length}.
Write the review as if the traveler just landed.`;
}

function renderAiReviewCard() {
  const card = document.getElementById('aiReviewCard');
  const body = document.getElementById('aiReviewBody');
  const lastBooking = getLastBookingForReview();

  if (!lastBooking) { card.classList.add('hidden'); return; }
  card.classList.remove('hidden');

  const cached = Storage.getAiReviews()[lastBooking.pnr];
  if (cached) {
    renderReviewContent(body, lastBooking, getReviewText(cached));
  } else {
    body.innerHTML = `<p>Generate a quick AI-written review of your ${lastBooking.outboundFlight.toCity} trip (${lastBooking.pnr}).</p>
      <button class="btn btn-primary btn-small" id="aiReviewGenBtn" style="margin-top:8px">✨ Generate review</button>`;
    const genBtn = document.getElementById('aiReviewGenBtn');
    if (genBtn) genBtn.onclick = () => generateAndShowReview(lastBooking);
  }

  document.getElementById('aiReviewRegenBtn').onclick = () => generateAndShowReview(lastBooking);
}

function getReviewText(review) {
  return typeof review === 'string' ? review : review?.text || '';
}

function renderRecentReviews() {
  const section = document.getElementById('recentReviewsSection');
  const list = document.getElementById('recentReviewsList');
  const count = document.getElementById('recentReviewsCount');
  const reviews = Storage.getAiReviews();
  const bookings = Storage.getBookings();
  const owner = state.currentUser ? state.currentUser.email : 'guest';
  const recent = Object.entries(reviews)
    .map(([pnr, review]) => ({ booking: bookings.find(b => b.pnr === pnr && b.userEmail === owner), review }))
    .filter(item => item.booking && getReviewText(item.review))
    .sort((a, b) => new Date(b.review.createdAt || b.booking.bookingDate) - new Date(a.review.createdAt || a.booking.bookingDate))
    .slice(0, 5);

  section.classList.toggle('hidden', !recent.length);
  if (!recent.length) return;
  count.textContent = `${recent.length} saved`;
  list.innerHTML = recent.map(({ booking, review }) => `
    <article class="recent-review-item">
      <div class="recent-review-top">
        <strong>${escapeHtml(booking.outboundFlight.toCity)} trip</strong>
        <span class="muted-sm">${formatDateLong(review.createdAt || booking.bookingDate)}</span>
      </div>
      <div class="ai-review-stars">★★★★★</div>
      <p>${escapeHtml(getReviewText(review))}</p>
      <span class="muted-sm">Booking ${escapeHtml(booking.pnr)} · ${escapeHtml(booking.outboundFlight.airline.name)}</span>
    </article>
  `).join('');
}

function renderReviewContent(body, booking, reviewText) {
  // Deterministic 4-5 star rating derived from the PNR, just for a bit of visual flavor.
  const seed = booking.pnr.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const fullStars = 4 + (seed % 2);
  const starsHtml = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  body.innerHTML = `
    <div class="ai-review-stars">${starsHtml}</div>
    <p>${escapeHtml(reviewText)}</p>
    <p class="muted-sm" style="color:#9FB0C2; margin-top:8px">Based on your trip ${booking.pnr} · written by Groq (${GROQ_MODEL})</p>
  `;
}

async function generateAndShowReview(booking) {
  const body = document.getElementById('aiReviewBody');
  body.innerHTML = `<div class="ai-review-loading"><span class="ai-mini-spinner"></span> Writing your AI review…</div>`;
  try {
    const text = await callGroq(buildReviewPrompt(booking));
    const reviews = Storage.getAiReviews();
    reviews[booking.pnr] = { text, createdAt: new Date().toISOString() };
    Storage.saveAiReviews(reviews);
    renderReviewContent(body, booking, text);
    renderRecentReviews();
  } catch (err) {
    let msg = 'Could not generate a review. Check your Groq API key in Settings (⚙).';
    if (err.message === 'NO_KEY') msg = 'Add a Groq API key in Settings (⚙) first.';
    else if (String(err.message).startsWith('HTTP_401')) msg = 'Groq rejected that API key. Check it in Settings (⚙).';
    else if (err instanceof TypeError) msg = 'Network request was blocked. This works once the page is self-hosted (not inside the claude.ai preview sandbox).';
    body.innerHTML = `<p style="color:#F5C2BE">${escapeHtml(msg)}</p>
      <button class="btn btn-secondary btn-small" id="aiReviewRetryBtn" style="margin-top:8px">Try again</button>`;
    document.getElementById('aiReviewRetryBtn').onclick = () => generateAndShowReview(booking);
    showToast(msg, 'error');
  }
}

/* ============ 17d. SETTINGS MODAL ============ */
function openSettingsModal() {
  document.getElementById('groqKeyInput').value = Storage.getGroqKey() || '';
  document.getElementById('settingsError').textContent = '';
  document.getElementById('settingsModal').classList.remove('hidden');
}
function closeSettingsModal() {
  document.getElementById('settingsModal').classList.add('hidden');
}
function initSettingsModal() {
  document.getElementById('settingsBtn').addEventListener('click', openSettingsModal);
  document.getElementById('settingsBtnMobile').addEventListener('click', openSettingsModal);
  document.getElementById('settingsCloseBtn').addEventListener('click', closeSettingsModal);
  document.getElementById('settingsModal').addEventListener('click', (e) => {
    if (e.target.id === 'settingsModal') closeSettingsModal();
  });
  document.getElementById('groqKeySaveBtn').addEventListener('click', () => {
    const val = document.getElementById('groqKeyInput').value.trim();
    if (!val) { document.getElementById('settingsError').textContent = 'Enter a key, or use Clear key to remove it.'; return; }
    Storage.setGroqKey(val);
    showToast('Groq API key saved to this browser.', 'success');
    closeSettingsModal();
  });
  document.getElementById('groqKeyClearBtn').addEventListener('click', () => {
    Storage.setGroqKey('');
    document.getElementById('groqKeyInput').value = '';
    showToast('Groq API key cleared from this browser.', 'info');
  });
}

/* ============ 18. INIT ============ */
function initGlobalNav() {
  document.getElementById('navBurger').addEventListener('click', (e) => {
    const mobileNav = document.getElementById('navMobile');
    const isOpen = mobileNav.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', String(isOpen));
    e.currentTarget.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    e.currentTarget.textContent = isOpen ? '✕' : '☰';
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.getElementById('navMobile').classList.remove('open');
    const burger = document.getElementById('navBurger');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    burger.textContent = '☰';
  });
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);
  document.getElementById('profileLogoutBtn').addEventListener('click', handleLogout);

  document.getElementById('tabLogin').addEventListener('click', () => {
    currentAuthTab = 'login';
    document.getElementById('tabLogin').classList.add('active');
    document.getElementById('tabRegister').classList.remove('active');
    renderAuthView();
  });
  document.getElementById('tabRegister').addEventListener('click', () => {
    currentAuthTab = 'register';
    document.getElementById('tabRegister').classList.add('active');
    document.getElementById('tabLogin').classList.remove('active');
    renderAuthView();
  });
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
}

document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initHome();
  initGlobalNav();
  initSettingsModal();
  updatePaxLabel();
  navigate(state.currentUser ? 'home' : 'auth');
});