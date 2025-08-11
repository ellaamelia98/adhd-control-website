import { Link } from 'wouter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <span className="font-poppins font-semibold text-sage-dark text-xl cursor-pointer">ADHD Control</span>
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <Link href="/">
                  <span className="text-charcoal hover:text-sage-dark transition duration-150 ease-in-out cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-charcoal hover:text-sage-dark transition duration-150 ease-in-out cursor-pointer">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <span className="text-charcoal hover:text-sage-dark transition duration-150 ease-in-out cursor-pointer">Resources</span>
                </Link>
              </li>
              <li>
                <Link href="/product-reviews">
                  <span className="text-charcoal hover:text-sage-dark transition duration-150 ease-in-out cursor-pointer">Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-charcoal hover:text-sage-dark transition duration-150 ease-in-out cursor-pointer">About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left text-sm text-gray-500">
            &copy; {currentYear} ADHD Control. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-500 hover:text-sage-dark">
              <span className="sr-only">Privacy Policy</span>
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-sage-dark">
              <span className="sr-only">Contact</span>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
