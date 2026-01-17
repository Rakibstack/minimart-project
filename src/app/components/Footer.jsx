import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-black text-white font-bold">
                M
              </span>
              <span className="text-lg font-semibold text-gray-900">
                Mini<span className="text-gray-600">Mart</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              MiniMart is a simple product listing application built with Next.js
              and Express.js.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-gray-900">
                  Items
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-gray-900">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Next.js App Router</li>
              <li>Express.js API</li>
              <li>Tailwind CSS</li>
              <li>Mock Authentication</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Contact
            </h4>
            <p className="text-sm text-gray-600">
              Email: admin@example.com
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Bangladesh
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MiniMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
