import Footer from "@/src/components/layout/admin/Footer";
import Header from "@/src/components/layout/admin/Header";
import Sidebar from "@/src/components/layout/admin/Sidebar";



export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main column */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 px-4 md:px-6 py-4">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
