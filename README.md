
#  BloggiesAwards.com – Module I: Blogger Pro Subscription

This repository contains the implementation for **Module I** of the BloggiesAwards.com challenge, focused on enabling users to subscribe to the **Blogger Pro** plan using Stripe.

---

##  Features Implemented

- **Pricing Page** (`/pricing`)
  - Includes a "Subscribe to Pro" button
  - Triggers a simulated POST request to initiate subscription
  - Navigates to the Pro Dashboard on success

- **Pro Dashboard** (`/pro-dashboard`)
  - Displays trial status, payments, and next billing date
  - Conditioned on user being a Pro subscriber

- **Not Found Page** (`/404`)
  - Clean, user-friendly 404 page for unmatched routes

- **Header & Footer**
  - Simple layout for navigation and consistent branding

- **Styling**
  - Tailwind CSS with BloggiesAwards.com theme:
    - **Primary Indigo:** `#3F51B5`
    - **Accent Amber:** `#FFC107`
    - Rounded UI with soft shadows
    - Typography using `Lora` (headings) & `Open Sans` (body)

---

## Tech Stack

- **React** (with React Router)
- **Tailwind CSS**
- **Mock API Integration** (`testApi.js`)
- **SPA Routing** with clean navigation flow

---

##  Demo Instructions

1. Clone the repo
2. Install dependencies:

   ```bash
   npm install
3. Run the development.
   ```bash 
   npm run dev

