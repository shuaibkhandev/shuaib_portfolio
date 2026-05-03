"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import { Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const initialState: { error: string | null } = {
  error: null,
};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700">
            <Lock className="w-8 h-8 text-brand-blue" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Private Access</h1>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8 text-sm">
          This section of the portfolio is protected. Please enter the password to continue.
        </p>

        <form action={formAction} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
              placeholder="Enter password"
            />
            {state?.error && (
              <p className="mt-2 text-sm text-red-500 font-medium">{state.error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full group relative flex items-center justify-center gap-2 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? "Verifying..." : "Unlock"}
            {!isPending && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
