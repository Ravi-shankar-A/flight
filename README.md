 ✈️ SkyRoute — Flight Booking Website

A fully functional, front-end flight booking experience built with plain HTML, CSS, and JavaScript — no framework, no build step. Search flights, pick seats, pay (simulated), get a PNR, manage trips, save flights for later, and get an AI-written review of your last trip.

Live demo: https://claude.ai/artifact/NXomuzgSEXNcYwxqFtx3Nn

✨ Features
Home / Search — round trip or one-way, airport autocomplete, swap button, passenger + cabin class picker, popular destination shortcuts.
Search Results — mock but realistic flights per route/date, with working price/airline/non-stop filters and sort (price, duration, departure time).
Full booking flow — Search → Select Flight → Passenger Details → Seat Selection → Booking Summary → Payment → Confirmation, all state-linked.
Seat selection — clickable seat map (available / selected / occupied / extra-legroom), live price recalculation.
Extras — baggage, meal, and travel insurance add-ons, priced per passenger.
Payment — simulated Card / UPI / Net Banking with real client-side validation, unique PNR generation.
My Trips — view, print/download, and cancel bookings; a separate Saved Flights tab for bookmarked flights.
Login / Register — email + password auth.
AI Trip Review — generates a short, witty review of your most recent trip using the Groq API.
Optional Supabase backend — plug in a free Supabase (Postgres) project to sync accounts, bookings, and saved flights across devices instead of using local-only browser storage.
📁 Project structure
skyroute/
├── index.html            # Markup for all views (SPA — one page, JS-driven routing)
├── style.css             # All styling (responsive, mobile/tablet/desktop)
├── script.js             # App logic: search, filters, booking flow, auth, Supabase/local storage
├── supabase-schema.sql   # Run once in Supabase's SQL editor to create the required tables
└── README.md

There's also a single self-contained skyroute-single.html (CSS + JS inlined) if you want a one-file version to drop anywhere.

🚀 Getting started

No build tools needed.

Clone the repo.
Open index.html directly in a browser, or serve it locally:
bash
   npx serve .
   # or
   python3 -m http.server 8080
That's it — search, book, and manage trips. By default everything is stored in your browser's localStorage, so it works with zero configuration.
Deploying

Any static host works — GitHub Pages, Netlify, Vercel, etc. There's no server/backend required unless you enable Supabase (see below).

GitHub Pages:

bash
# from the repo root, on the branch you want to publish
git add .
git commit -m "Deploy SkyRoute"
git push

Then in your repo: Settings → Pages → Deploy from branch, pick main and /root, save. Your site will be live at https://<your-username>.github.io/<repo-name>/.

🔑 Optional integrations

Both are configured in the app itself via the ⚙ Settings panel (top-right of the navbar) — no .env files, no rebuild. Keys are stored only in the visitor's own browser.

1. AI Trip Review (Groq)
Get a free API key at console.groq.com/keys.
Open Settings (⚙) in the app → paste it under AI trip review settings → Save.
Go to My Trips after completing a booking and click ✨ Generate review.

⚠️ This calls the Groq API directly from the browser. It won't work inside the claude.ai preview sandbox (which blocks outbound calls to third-party APIs) — only once the page is self-hosted or opened locally.

2. Supabase (real Postgres database)

By default, SkyRoute stores everything in localStorage (per-browser only). To sync accounts, bookings, and saved flights to a real database instead:

Create a free project at supabase.com.
In your Supabase project, open SQL Editor → New query, paste the contents of supabase-schema.sql, and run it. This creates the bookings and saved_flights tables with row-level security so each user can only see their own data.
In your Supabase project, go to Settings → API and copy the Project URL and anon public key.
In the app, open Settings (⚙) → paste both under Database (Supabase) → Save & connect.
Register/log in again — accounts now go through Supabase Auth, and bookings/saved flights sync to Postgres instead of just the local browser.

Leave the Supabase fields blank to keep using local-only storage — the app works either way.

🛠️ Tech notes
Zero dependencies beyond two CDN scripts, loaded only when needed: Google Fonts and the Supabase JS client (@supabase/supabase-js).
No backend server — Supabase (when connected) is called directly from the browser using its public anon key, which is safe because access is enforced by Postgres row-level security policies, not by keeping the key secret.
All flight data is realistic mock data generated client-side per search — there's no live flight inventory API behind this.
⚠️ Disclaimer

This is a demo project. No real flights are booked, no real payments are processed, and no real airline data is used.
