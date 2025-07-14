// components/LargeFooter.js
import Link from 'next/link';

export default function LargeFooter() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1 - About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="mb-4">
                            We provide innovative solutions to help your business grow in the digital era.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social icons would go here */}
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-gray-300 transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
                            <li><Link href="/services" className="hover:text-gray-300 transition">Services</Link></li>
                            <li><Link href="/blog" className="hover:text-gray-300 transition">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition">Web Development</Link></li>
                            <li><Link href="/services/mobile-apps" className="hover:text-gray-300 transition">Mobile Apps</Link></li>
                            <li><Link href="/services/seo" className="hover:text-gray-300 transition">SEO Optimization</Link></li>
                            <li><Link href="/services/ui-ux" className="hover:text-gray-300 transition">UI/UX Design</Link></li>
                            <li><Link href="/services/digital-marketing" className="hover:text-gray-300 transition">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <address className="not-italic">
                            <p className="mb-2">123 Business Ave, Suite 100</p>
                            <p className="mb-2">New York, NY 10001</p>
                            <p className="mb-2">Phone: (123) 456-7890</p>
                            <p className="mb-2">Email: info@example.com</p>
                        </address>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-gray-300 transition">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-gray-300 transition">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-gray-300 transition">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}