import React from 'react'
import { Button } from './ui/button'
import { Mail, ShoppingCart } from 'lucide-react'
import { Input } from './ui/input'

export default function CTASection() {
  return (
    <>
     {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Ready to Upgrade Your Mobile Experience?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Join thousands of satisfied customers and get the latest smartphones with exclusive deals and premium
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Shopping
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        {/* Newsletter Section */}
      {/* <div className="bg-primary py-18 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Stay Updated with Latest Deals</h3>
          <p className="mb-6 text-primary-foreground/80">
            Get exclusive offers and be the first to know about new arrivals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>
      </div> */}
      </section>
    </>
  )
}

