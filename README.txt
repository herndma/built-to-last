Built to Last - installable web app

1. Upload every file in this folder, kept together, to a free static host (Netlify Drop, GitHub Pages, or Cloudflare Pages).
2. Open the https:// link on a phone.
   - iPhone: open in Safari, tap Share, then Add to Home Screen.
   - Android: open in Chrome, tap the menu, then Install app.

Exercise library:
- On first open (with internet) the app loads the free, public-domain Free Exercise DB (800+ exercises) and keeps a copy on the phone. Text works offline afterward. Photos need a connection.
- Without internet on the very first open, a small starter set of 12 lifts is used.
- Optional: to host the data yourself, put exercises.json next to index.html. The app uses it first.

Notes:
- Must be served over https for install and offline mode.
- Your profile, log and history stay on your phone. On iPhone, use the home-screen icon after installing, since it stores data separately from Safari.
- Back up your data from Profile > Download backup. It works in the installed app.
- After changing index.html, change CACHE in sw.js (for example built-to-last-v12) so phones pick up the update.
