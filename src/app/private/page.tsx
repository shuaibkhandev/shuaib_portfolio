import { LockOpen, LogOut } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  
  // A server action to handle logout directly from the private page
  async function logout() {
    "use server";
    const cookieStore = await cookies();
    cookieStore.delete("site_auth_token");
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 relative overflow-hidden flex flex-col items-center py-20">
      
      {/* Header section */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-12">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          &larr; Back to Portfolio
        </Link>
        <form action={logout}>
          <button 
            type="submit" 
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/10 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut size={16} /> Logout
          </button>
        </form>
      </div>

      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">
        
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <LockOpen className="w-6 h-6 text-green-600 dark:text-green-500" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Private Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">You have successfully authenticated.</p>
          </div>
        </div>

        <div className="space-y-6 text-slate-600 dark:text-slate-400">
          <p>
            Welcome to your private page. This route is protected by Next.js Middleware. 
            Only users with the correct password can view this content.
          </p>
          
          <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-center font-medium">
              You can start adding your private content, confidential projects, or personal tools here!
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
