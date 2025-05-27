import React from 'react'
import { Link } from 'react-router-dom';
const Footer=()=> {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} BloggiesAwards.com</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link href="/terms" className="hover:text-[#3F51B5] transition">Terms</Link>
          <Link href="/privacy" className="hover:text-[#3F51B5] transition">Privacy</Link>
          <Link href="/contact" className="hover:text-[#3F51B5] transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

