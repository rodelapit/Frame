# Future-Proof Portfolio (Scaffold)

This small static scaffold implements the instructions from the "Future-Proof Portfolio Project" activity.

What's included
- `index.html`: Hero Statement, The Big Three project slots, Currently Learning section, and Contact.
- `styles.css`: Minimal responsive styles and accessibility focus styles.
- `.gitignore`: common ignores for simple projects.

How to use (Next.js)

This project has been converted to a minimal Next.js app. To run locally:

1. Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

2. Open the URL that Next.js prints in your terminal (usually http://localhost:3000).

3. Edit `pages/index.jsx` and `styles/globals.css` to personalize your content and styles.

Deployment to Vercel

1. Commit and push this repository to GitHub.
2. In Vercel, import the repository and deploy — Vercel will detect Next.js automatically.

Notes
- If you want to revert to the static Vite build, see your previous commits where the Vite configuration and `index.html` exist.

Tech stack guidance (from the activity)
- Beginner Path: Simple HTML, CSS, and JavaScript — this scaffold follows that path for maximum portability.
- Pro Path (Recommended): Next.js or React — choose this if you want server-side rendering, routing, or ready Vercel optimization.

Git-to-Vercel workflow (CI/CD)
1. Initialize git and commit your files:
   - `git init` (if not already a repo)
   - `git add .` and `git commit -m "Initial portfolio scaffold"`
2. Push to a remote (GitHub/GitLab/Bitbucket):
   - Create a repository on GitHub and follow the push instructions.
3. Connect the repository to Vercel:
   - In Vercel, click "New Project" → Import from Git → select your repo.
   - For a static site (this scaffold) there is no build command; Vercel will detect it automatically. If using a framework, set the proper build command (for Next.js: `npm run build`) and output folder.
4. Every git push to the main branch triggers Vercel to build and deploy via CI/CD. Use PR previews to show live changes to reviewers.

Personalization checklist
- Hero statement: one clear sentence about who you are and what you do.
- The Big Three: pick three projects that show growth: what you know, what you learned, what you aspire to do.
- Growth tab: keep a short list of currently learning topics.
- Add links to GitHub, LinkedIn, and live demos.

Next steps and optional improvements
- Convert to Next.js for server-side rendering and Vercel optimizations.
- Add project pages with screenshots and case study write-ups.
- Add a small test suite (Jest) and a linting pipeline.

Good luck! Tweak content and styling to match your voice and brand. If you want, I can convert this scaffold to a Next.js starter with example project pages and deployment config.

## Contact Form Email

The contact form posts to `pages/api/send-email.js`. It supports a serverless-friendly provider (SendGrid) and an optional SMTP fallback.

- Required env vars (see `.env.example`):
   - `TO_EMAIL`: Your Gmail address to receive messages.
   - `SENDGRID_API_KEY`: API key from SendGrid.
   - `FROM_EMAIL`: A verified sender in SendGrid (Single Sender or domain-verified address).
- Optional SMTP (not recommended on Vercel):
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (for Gmail use an App Password).

### Local setup

1. Copy `.env.example` to `.env.local` and fill values.
2. Run `npm run dev` and submit the form at `/`.

### Vercel deployment

1. In your Vercel project settings → Environment Variables, add:
    - `TO_EMAIL`, `SENDGRID_API_KEY`, `FROM_EMAIL` (at least in “Production”).
2. Redeploy. The API route will use SendGrid over HTTPS (works on Vercel). SMTP may be blocked on Vercel.
3. In SendGrid, verify a Single Sender identity or domain so `FROM_EMAIL` is authorized, otherwise emails will be rejected.

Tips
- You can set `TO_EMAIL` to your Gmail. Messages will arrive in your inbox; check Spam if testing.
- The API includes basic validation and a hidden honeypot field to reduce spam.

### Formspree (No backend option)
- If you prefer not to manage an email provider, use Formspree:
   - Create a form at Formspree and copy its endpoint (e.g., `https://formspree.io/f/xxxxxxx`).
   - Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in your env (local `.env.local` and Vercel → Environment Variables).
   - The frontend will POST directly to Formspree when this variable is present; otherwise it uses `/api/send-email`.
   - Set Formspree to deliver to your Gmail in its dashboard.