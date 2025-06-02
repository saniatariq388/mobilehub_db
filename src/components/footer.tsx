import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Smartphone, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Deals</h3>
          <p className="mb-6 text-emerald-100">Get exclusive offers and be the first to know about new arrivals</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-emerald-100"
            />
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MobileHub</h3>
                <p className="text-sm text-gray-400">Premium Mobile Store</p>
              </div>
            </div>
            <p className="text-gray-400">
              Your trusted destination for the latest smartphones, accessories, and mobile technology. Quality products,
              competitive prices, and exceptional service.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/phones" className="text-gray-400 hover:text-white transition-colors">
                  All Phones
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-400 hover:text-white transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-400 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-400 hover:text-white transition-colors">
                  Special Deals
                </Link>
              </li>
              <li>
                <Link href="/trade-in" className="text-gray-400 hover:text-white transition-colors">
                  Trade-In Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-gray-400 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>1-800-MOBILE (1-800-662-4531)</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>support@mobilehub.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Address</p>
                <p>
                  123 Tech Street
                  <br />
                  Digital City, DC 12345
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Hours</p>
                <p>
                  Mon-Fri: 9AM-8PM
                  <br />
                  Sat-Sun: 10AM-6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 MobileHub. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
