# shippermeetcarrier.com

A full React auth flow matching the shippermeetcarrier.com design: login, registration
(shipper + carrier), forgot/reset password (incl. expired-link state), email/phone
verification, and 2FA.

Update: Added the carrier dashboard, one page for now.

## Stack

- React + Vite
- Tailwind CSS
- Material UI
- React Router v6
- Formik + Yup
- TanStack Query (wired up and ready for real API calls)
- Sonner (toasts)

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/login`.

## Routes

| Path                  | Screen                                  |
|------------------------|------------------------------------------|
| `/login`               | Sign in (shipper/carrier toggle)         |
| `/forgot-password`     | Request reset link                       |
| `/reset-password?token=...` | Set new password (no/invalid token → expired-link state) |
| `/register/carrier`    | Carrier signup                           |
| `/register/shipper`    | Shipper signup                           |
| `/2fa`                 | Authenticator app code                   |
| `/verify-email`        | Email verification code                  |
| `/verify-phone`        | Phone verification code                  |
| `/dashboard`           | Placeholder landing page after auth      |
| `/dashboard/carrier`   | Carrier Dashboard                        |

## Wiring up your API

Every submit handler has a `// TODO` marking where to swap the simulated
`setTimeout` for a real call (e.g. via `fetch`, `axios`, or a TanStack Query
mutation). Error states already flow into `sonner` toasts and inline Formik
field errors, so you mostly just need to plug in the request.

## Notes

---