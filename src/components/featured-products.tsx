import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { featuredPhones } from '@/data/products'
import Image from "next/image"
import { Star, ShoppingCart} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'




export default function FeaturedProducts() {
  return (
  <>
     <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Featured Collection</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trending Mobile Phones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of the latest and most popular smartphones with exclusive offers and
              deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPhones.map((phone) => (
              <Card
                key={phone.id}
                className="group hover:shadow-2xl transition-all duration-300 border shadow-lg hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={phone.image || "/placeholder.svg"}
                      alt={phone.name}
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{phone.badge}</Badge>
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{phone.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{phone.brand}</p>
                      <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{phone.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({phone.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {phone.specs.map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-primary">${phone.price}</span>
                          <span className="text-sm text-muted-foreground line-through">${phone.originalPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                          Save ${phone.originalPrice - phone.price}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 font-semibold">
                       <Link href="/cart">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-semibold px-8" asChild>
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
  </>
  )
}

 