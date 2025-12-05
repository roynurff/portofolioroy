import './globals.css';
import PillNav from '@/components/PillNav';
// import logo from "@/public/logo.png";
export const metadata = {
  title: 'Fazaa Portfolio',
  description: 'Personal Portfolio Website by Fazaa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        {/* Navbar */}
        {/* <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-purple-400">fazaa.dev</h1>
            <ul className="flex space-x-6 text-gray-300">
              <li><a href="#about" className="hover:text-purple-400">About</a></li>
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>
        </nav> */}
        <div className="flex justify-center">
          <PillNav 
            logo="dino.svg"
            logoAlt="Company Logo"
            items={[
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' }
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
        </div>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 text-center text-gray-500 py-8 text-sm">
          © {new Date().getFullYear()} Roy Nurfaza. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
