import { Link } from 'react-router-dom';

const Header =()=> {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-[#3F51B5] text-xl font-bold">
          Bloggies<span className="text-[#FFC107]">Awards</span>
        </Link>
        <nav className="space-x-6 text-sm text-gray-700">
          <Link to="/pro-dashboard" className="hover:text-[#3F51B5] transition">
            Dashboard
          </Link>
          <Link to="/pricing" className="hover:text-[#3F51B5] transition">
            Pricing
          </Link>
          <Link to="/about" className="hover:text-[#3F51B5] transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;