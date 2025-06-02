"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Truck, Shield, ArrowLeft, MessageCircle, Phone, Mail, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample order items
const orderItems = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1199,
    quantity: 1,
    image: "/promax.jpeg",
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1099,
    quantity: 2,
    image: "/galaxy1.jpeg",
  },
]

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "whatsapp" | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 29.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleWhatsAppPayment = () => {
    const orderDetails = orderItems.map((item) => `${item.quantity}x ${item.name} - $${item.price}`).join("\n")

    const message = `Hi! I'd like to place an order:

${orderDetails}

Subtotal: $${subtotal.toFixed(2)}
Shipping: ${shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
Tax: $${tax.toFixed(2)}
Total: $${total.toFixed(2)}

Shipping Address:
${formData.firstName} ${formData.lastName}
${formData.address}
${formData.city}, ${formData.state} ${formData.zipCode}
Phone: ${formData.phone}
Email: ${formData.email}

Please confirm this order and provide payment instructions.`

    const whatsappUrl = `https://wa.me/18002662453?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCardPayment = () => {
    // Here you would integrate with a payment processor like Stripe
    alert("Card payment integration would be implemented here with Stripe or similar service")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 text-primary-foreground">
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/20">
              <Link href="/cart">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Link>
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="123 Main Street"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      placeholder="NY"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      placeholder="10001"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Payment Options */}
                <div className="grid gap-4">
                  {/* Credit Card Option */}
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          paymentMethod === "card" ? "border-primary bg-primary" : "border-gray-300"
                        }`}
                      >
                        {paymentMethod === "card" && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <h3 className="font-medium">Credit/Debit Card</h3>
                        <p className="text-sm text-muted-foreground">Secure payment with SSL encryption</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Option */}
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      paymentMethod === "whatsapp" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => setPaymentMethod("whatsapp")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          paymentMethod === "whatsapp" ? "border-primary bg-primary" : "border-gray-300"
                        }`}
                      >
                        {paymentMethod === "whatsapp" && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <h3 className="font-medium">WhatsApp Payment</h3>
                        <p className="text-sm text-muted-foreground">Contact us via WhatsApp for payment assistance</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Details Form */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-6 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* WhatsApp Contact Info */}
                {paymentMethod === "whatsapp" && (
                  <div className="space-y-4 mt-6 p-4 border rounded-lg bg-green-50 dark:bg-green-950">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                      <MessageCircle className="h-5 w-5" />
                      <h3 className="font-medium">WhatsApp Payment Process</h3>
                    </div>
                    <div className="space-y-2 text-sm text-green-600 dark:text-green-400">
                      <p>1. Click &quot Complete Order via WhatsApp &quot below</p>
                      <p>2. Your order details will be sent to our WhatsApp</p>
                      <p>3. Our team will confirm your order and provide payment instructions</p>
                      <p>4. Payment options: Bank transfer, Zelle, or Cash on Delivery</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>WhatsApp: +1 (800) 266-2453</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-4 lg:h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {item.quantity}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.brand}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Features */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>SSL Encrypted Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping on orders over $500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>30-day return policy</span>
                  </div>
                </div>

                {/* Complete Order Button */}
                {paymentMethod === "card" && (
                  <Button
                    className="w-full bg-primary hover:bg-primary/80"
                    size="lg"
                    onClick={handleCardPayment}
                    disabled={!formData.email || !formData.firstName || !formData.lastName || !formData.address}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Complete Payment - ${total.toFixed(2)}
                  </Button>
                )}

                {paymentMethod === "whatsapp" && (
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                    onClick={handleWhatsAppPayment}
                    disabled={!formData.email || !formData.firstName || !formData.lastName || !formData.address}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Complete Order via WhatsApp
                  </Button>
                )}

                {!paymentMethod && (
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Please select a payment method to continue</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
