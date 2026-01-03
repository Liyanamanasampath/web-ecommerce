export default function WebFooter() {
    return (
      <footer className=" bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
          <div>
            <div className="font-semibold text-slate-900 mb-2">MyWebApp</div>
            <p>Modern web application built with Next.js.</p>
          </div>
  
          <div className="ml-auto">
          </div>

          <div className="ml-auto">
            <div className="font-semibold text-slate-900 mb-2">Contact</div>
            <p>support@mywebapp.com</p>
          </div>
        </div>
  
        <div className="text-center text-xs text-slate-500 pb-4">
          © 2026 MyWebApp. All rights reserved.
        </div>
      </footer>
    );
  }
  