import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star, ShoppingCart, Filter, SlidersHorizontal, ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import { products } from "@/data/products"

// Sample product data


const brands = ["Apple", "Samsung", "Google", "OnePlus", "Nothing", "Motorola"]
const categories = ["Flagship", "Mid-range", "Budget"]
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Customer Rating", "Newest"]

export default function ProductListing() {
  return (
    <div className="min-h-screen bg-background">
    

      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop All Mobile Phones</h1>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              Browse our complete collection of the latest smartphones from top brands with exclusive deals and offers.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              <div className="bg-card rounded-lg shadow-sm p-6 border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Clear All
                  </Button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-10" />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <span className="text-xs text-muted-foreground">$0 - $1500</span>
                  </div>
                  <Slider defaultValue={[0, 1500]} min={0} max={1500} step={50} className="my-6" />
                  <div className="flex items-center justify-between">
                    <Input type="number" placeholder="Min" className="w-24 text-xs" />
                    <span className="text-muted-foreground mx-2">-</span>
                    <Input type="number" placeholder="Max" className="w-24 text-xs" />
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Brand</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <label
                          htmlFor={`brand-${brand}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          <div className="flex">
                            {Array.from({ length: rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {Array.from({ length: 5 - rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                          </div>
                          <span className="ml-1">& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600">
                  <Filter className="mr-2 h-4 w-4" />
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Sort and View Options */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  <span className="text-sm font-medium">Sort by:</span>
                  <div className="relative inline-block">
                    <select className="appearance-none bg-card border rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      {sortOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-medium">{products.length}</span> products
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={250}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          {product.badge}
                        </Badge>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 dark:bg-black/70">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
                          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {product.specs.map((spec, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
                                ${product.price}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            </div>
                            <div className="text-sm text-green-600 dark:text-green-500 font-medium">
                              Save ${product.originalPrice - product.price}
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 font-semibold">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" disabled>
                    &lt;
                  </Button>
                  <Button variant="outline" size="icon" className="bg-emerald-600 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="icon">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
