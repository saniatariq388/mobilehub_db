"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User, Menu, X, Smartphone, Heart, MapPin, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Free shipping nationwide
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span>📞 1-800-MOBILE</span>
              <span>✉️ support@mobilestore.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">MobileHub</h1>
              <p className="text-xs text-muted-foreground">Premium Mobile Store</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for mobiles, brands, models..." className="pl-10 pr-20 py-2 w-full" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/shop" className="text-foreground hover:text-primary font-medium transition-colors">
              Shop
            </Link>
            <Link href="/phones" className="text-foreground hover:text-primary font-medium transition-colors">
              Phones
            </Link>
            <Link href="/accessories" className="text-foreground hover:text-primary font-medium transition-colors">
              Accessories
            </Link>
            <Link href="/deals" className="text-foreground hover:text-primary font-medium transition-colors">
              Deals
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="hover:bg-accent"
              >
                {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            {/* Search Button - Mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                3
              </Badge>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                2
              </Badge>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search mobiles..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link href="/shop" className="text-foreground hover:text-primary font-medium">
                Shop
              </Link>
              <Link href="/phones" className="text-foreground hover:text-primary font-medium">
                Phones
              </Link>
              <Link href="/accessories" className="text-foreground hover:text-primary font-medium">
                Accessories
              </Link>
              <Link href="/deals" className="text-foreground hover:text-primary font-medium">
                Deals
              </Link>
              <div className="pt-4 border-t">
                <Button className="w-full bg-primary hover:bg-primary/90">Sign In</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
