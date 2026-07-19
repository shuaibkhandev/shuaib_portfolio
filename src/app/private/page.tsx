import { LockOpen, LogOut, BookOpen, Globe } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jsInterviewQuestions, reactInterviewQuestions, nextjsInterviewQuestions, nodeExpressInterviewQuestions, databaseInterviewQuestions, web3InterviewQuestions, pythonInterviewQuestions, typescriptInterviewQuestions, genAiInterviewQuestions } from "@/lib/questions";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const allQuestions = [
  { title: "JavaScript", categories: jsInterviewQuestions },
  { title: "TypeScript", categories: typescriptInterviewQuestions },
  { title: "React", categories: reactInterviewQuestions },
  { title: "Next.js", categories: nextjsInterviewQuestions },
  { title: "Node.js", categories: nodeExpressInterviewQuestions },
  // { title: "MySQL", categories: databaseInterviewQuestions.mysql },
  // { title: "MongoDB", categories: databaseInterviewQuestions.mongodb },
  // { title: "Web3", categories: web3InterviewQuestions },
  // { title: "Python", categories: pythonInterviewQuestions },
  { title: "GenAI", categories: genAiInterviewQuestions },
];


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
      <div className="w-full max-w-[1600px] flex justify-between items-center mb-12">
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

      <div className="w-full max-w-[1600px] bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">

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

          {/* Interview Questions Section */}
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-[28px] md:text-[42px] font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-10 h-10 text-brand-blue" />
              Interview Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
              {allQuestions.map((topic, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-[26px] md:text-[32] font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">{topic.title}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    {Object.entries(topic.categories).map(([level, questions]) => (
                      questions.length > 0 && (
                        <div key={level} className="flex flex-col gap-2">
                          <h4 className="font-semibold text-[20px] md:text-[26px] text-brand-blue capitalize">{level}</h4>
                          <ul className="list-disc list-inside text-[16px] md:text-[22px] text-slate-600 dark:text-slate-400 space-y-1">
                            {questions.map((q, i) => (
                              <li key={i}>{q}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
