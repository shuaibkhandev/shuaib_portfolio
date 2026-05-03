# Private Page Functionality Documentation

This document explains the authentication flow implemented to protect the `/private` page in this Next.js application.

## Overview

The protection mechanism relies on **Next.js Middleware** and **Server Actions**. It uses a single password (stored securely as an environment variable) rather than a full user database. It is a lightweight, secure way to protect routes in a Next.js App Router project.

## How It Works

### 1. Environment Variable (`.env.local`)
- The correct password is stored in the `PRIVATE_PAGE_PASSWORD` environment variable.
- This keeps the password secure and out of the version-controlled source code.

### 2. Middleware (`src/middleware.ts`)
- The middleware intercepts all requests to any path starting with `/private` (configured via `matcher: '/private/:path*'`).
- It checks for the presence of a specific HTTP-only cookie named `site_auth_token`.
- If the cookie is missing or its value is not `'true'`, the user is instantly redirected to the `/login` page.
- If the cookie is present and valid, the request proceeds, granting access to the private page.

### 3. Login Page (`src/app/login/page.tsx`)
- A client-side component containing the login form.
- It uses React 19's `useActionState` hook to submit the form data to the server. This allows handling the form submission and displaying loading/error states without manually writing fetch requests or API routes.

### 4. Server Action (`src/app/login/actions.ts`)
- This function runs securely on the server.
- It retrieves the submitted password and compares it against `process.env.PRIVATE_PAGE_PASSWORD`.
- If the password matches, it uses Next.js `cookies()` to set the `site_auth_token` cookie.
  - The cookie is marked as `httpOnly` so it cannot be accessed by client-side JavaScript (protecting against XSS).
  - The cookie is marked as `secure` in production.
  - The cookie is set to expire in 1 week.
- Finally, it redirects the authenticated user to `/private`.

### 5. Private Page & Logout (`src/app/private/page.tsx`)
- The protected content resides here.
- It also contains a `logout` Server Action. When triggered, it deletes the `site_auth_token` cookie and redirects the user back to the `/login` page, effectively ending their session.

## Testing Locally
1. Ensure you have `PRIVATE_PAGE_PASSWORD=shuaib123` (or your chosen password) in `.env.local`.
2. Ensure your dev server is running (`npm run dev`).
3. Navigate to `http://localhost:3000/private`. You will be automatically redirected to `/login`.
4. Enter `shuaib123` in the login form to gain access.
5. Click "Logout" on the private page to test the sign-out flow.
