Toy Shop — simple toy shop UI

This project is a sample online toy shop UI built with Next.js (App Router), React 19 and Firebase Realtime Database. Users can browse products and view contact information. The project is set up so product and contact data can be managed via an admin dashboard (either through the Firebase Console or a custom admin UI).

**Key features**
- Product listing and details — read from Firebase Realtime Database (app/Pages/shop.tsx).
- Contact information and social links — read in real-time (app/lib/contactService.js).
- Single-app layout with a shared sidebar — see `app/layout.tsx` and `app/components/Sidebar/sidebar.jsx`.
- UI libraries: Material UI (MUI) together with Tailwind CSS.
- Built with Next.js 16 (App Router) and React 19.

**Technologies used**
- Next.js
- React 19
- Firebase (Realtime Database)
- Material UI (@mui/material)
- Tailwind CSS
- Emotion
- react-icons

Installation and running
1. Install dependencies:

```bash
npm install
```

2. Set environment variables (example):

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` (optional)

3. Start the development server:

```bash
npm run dev
```

The app runs by default at http://localhost:3000.

Database and Admin Dashboard
- The app reads products from the `products` path and contact info from the `contact` path in Firebase Realtime Database (app/Pages/shop.tsx, app/lib/contactService.js).
- There is no built-in admin dashboard in the repository. Two common approaches to manage data are:
  - Quick approach: Use the Firebase Console to edit the `products` and `contact` nodes directly.
  - Persistent solution: Build a separate Next.js or React admin UI that uses the same Firebase setup (`app/lib/firebase.js`) to create/update/delete products and edit contact info.

Example admin workflow:
1. In the admin panel, create a new product with `title`, `price`, `imageUrl`, and a `createdAt` timestamp.
2. The `createdAt` field is used to sort products on the shop page.
3. Updating the `contact` node with social links, phone or email will automatically update the `Sidebar` and `Contact` page in the app.

Important files & components
- `app/layout.tsx` — application layout and global styles.
- `app/components/Sidebar/sidebar.jsx` — sidebar and social links.
- `app/Pages/shop.tsx` — shop page, reads products from Firebase.
- `app/lib/firebase.js` — Firebase initialization and helper.
- `app/lib/contactService.js` — helpers to listen/save contact info.

Deployment
- The app is easy to deploy to Vercel, Netlify or similar platforms. Remember to add Firebase environment variables to the deployment settings.

Development notes
- The repository uses both Tailwind CSS and MUI; styles are applied at the component level to keep a consistent look.
- Firebase Analytics is initialized only in the browser and only if a `measurementId` is provided (see `app/lib/firebase.js`).

If you want, I can add a simple admin dashboard example (a small CRUD page) and wire it to `app/lib/firebase.js`. Would you like me to add that?

