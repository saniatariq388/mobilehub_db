import React from 'react'
import {ShoppingCart } from "lucide-react"
import { Badge  } from "@/components/ui/badge"
import { Button  } from "@/components/ui/button"

import Image from "next/image"
export default function HeroSection() {

  return (
   <>
     
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30">
                  🔥 Limited Time Offer
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Latest Mobile Phones at
                  <span className="text-yellow-400"> Unbeatable Prices</span>
                </h1>
                <p className="text-xl text-primary-foreground/80 max-w-lg">
                  Discover the newest smartphones with cutting-edge technology, premium designs, and exclusive deals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
                >
                  View Catalog
                </Button>
              </div>
              <div className="flex items-center gap-8 text-primary-foreground/80">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">50K+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">500+</div>
                  <div className="text-sm">Mobile Models</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-foreground">4.9★</div>
                  <div className="text-sm">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero.jpeg"
                  alt="Latest Smartphone"
                  width={400}
                  height={600}
                  className="mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

