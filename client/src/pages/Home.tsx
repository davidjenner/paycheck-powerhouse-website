import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronDown, DollarSign, TrendingUp, Zap, BarChart3, Users, Clock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";

export default function Home() {
  const [, navigate] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "50/30/20 Budget Rule",
      description: "Automatically calculates your budget using the proven 50/30/20 rule"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Analytics",
      description: "Real-time dashboard showing your spending breakdown by category"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Setup",
      description: "Works immediately after copying - no complex setup required"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Track Everything",
      description: "Monitor income and expenses with smart category dropdowns"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Updates",
      description: "All calculations update instantly as you enter data"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fully Customizable",
      description: "Edit categories, colors, and formulas to match your needs"
    }
  ];

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Simply click the download button, make a copy to your Google Drive, and start entering your income and expenses. It takes 30 seconds to set up!"
    },
    {
      question: "Do I need any special software?",
      answer: "No! You just need a free Google account. Paycheck Powerhouse works in Google Sheets, which is free and works on any device."
    },
    {
      question: "Can I customize it?",
      answer: "Yes! It's fully editable. You can add categories, change colors, modify formulas - whatever you need to make it work for you."
    },
    {
      question: "Is my data safe?",
      answer: "Yes! Your data stays in your personal Google Drive. We have no access to it. You have complete control and privacy."
    },
    {
      question: "What's the 50/30/20 rule?",
      answer: "It's a simple budgeting framework: 50% of income goes to Needs (essentials), 30% to Wants (discretionary), and 20% to Savings. Paycheck Powerhouse automatically calculates this for you."
    },
    {
      question: "Can I use it on mobile?",
      answer: "Yes! Google Sheets works on phones, tablets, and computers. You can track your budget from anywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
            <span className="font-bold text-lg">Paycheck Powerhouse</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">Pricing</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition">FAQ</a>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate("/download")}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-teal-50 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10" />

        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 rounded-full border border-emerald-200">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Smart Budget Tracking</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Take Control of Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Finances</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Paycheck Powerhouse is a professional Google Sheets budget tracker that automatically calculates your spending using the proven 50/30/20 rule. Start budgeting smarter today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <StripeCheckoutButton
                productId="PAYCHECK_POWERHOUSE"
                productName="Paycheck Powerhouse"
                price="£5.99"
                size="lg"
              />
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 text-sm">
              <div>
                <div className="font-bold text-lg">30 sec</div>
                <div className="text-muted-foreground">Setup Time</div>
              </div>
              <div>
                <div className="font-bold text-lg">100%</div>
                <div className="text-muted-foreground">Private</div>
              </div>
              <div>
                <div className="font-bold text-lg">∞</div>
                <div className="text-muted-foreground">Customizable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need to master your budget</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to better budgeting</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter Your Income",
                description: "Add your income sources and amounts in the Input tab"
              },
              {
                step: "2",
                title: "Track Expenses",
                description: "Log your expenses with smart category dropdowns"
              },
              {
                step: "3",
                title: "View Your Budget",
                description: "Watch the dashboard automatically calculate your 50/30/20 breakdown"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-emerald-300">
                    <ChevronDown className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 50/30/20 Rule Section */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The 50/30/20 Rule</h2>
              <p className="text-lg text-muted-foreground">A proven budgeting framework that works</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  percentage: "50%",
                  title: "Needs",
                  color: "from-blue-500 to-blue-600",
                  items: ["Rent/Mortgage", "Utilities", "Groceries", "Transport", "Insurance"]
                },
                {
                  percentage: "30%",
                  title: "Wants",
                  color: "from-emerald-500 to-emerald-600",
                  items: ["Dining Out", "Shopping", "Entertainment", "Subscriptions", "Hobbies"]
                },
                {
                  percentage: "20%",
                  title: "Savings",
                  color: "from-purple-500 to-purple-600",
                  items: ["Emergency Fund", "Investments", "Debt Payoff", "Savings Account"]
                }
              ].map((category, index) => (
                <Card key={index} className="p-6 border-2">
                  <div className={`bg-gradient-to-r ${category.color} text-white rounded-lg p-4 mb-4 text-center`}>
                    <div className="text-3xl font-bold">{category.percentage}</div>
                    <div className="text-sm font-medium">{category.title}</div>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">One-time purchase, no subscriptions</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="p-8 border-2 border-emerald-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl font-bold mb-2">£5.99</div>
                <p className="text-muted-foreground">One-time payment</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Smart budget tracker",
                  "50/30/20 rule breakdown",
                  "Real-time calculations",
                  "Professional design",
                  "Works on any device",
                  "Fully customizable",
                  "No subscriptions",
                  "Lifetime access"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <StripeCheckoutButton
                productId="PAYCHECK_POWERHOUSE"
                productName="Paycheck Powerhouse"
                price="£5.99"
                size="lg"
                className="w-full"
              />

              <p className="text-xs text-muted-foreground text-center mt-4">
                Instant delivery via Google Drive link
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Everything you need to know</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 cursor-pointer hover:shadow-md transition-shadow" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold text-lg">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedFaq === index && (
                    <p className="text-muted-foreground mt-4">{faq.answer}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Take Control?</h2>
            <p className="text-xl opacity-90">Join thousands of people who are budgeting smarter with Paycheck Powerhouse</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StripeCheckoutButton
                productId="PAYCHECK_POWERHOUSE"
                productName="Paycheck Powerhouse"
                price="£5.99"
                size="lg"
                variant="default"
                className="bg-white text-emerald-600 hover:bg-gray-100"
              />
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PP</span>
                </div>
                <span className="font-bold">Paycheck Powerhouse</span>
              </div>
              <p className="text-sm text-muted-foreground">Smart budget tracking for everyone</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-foreground transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Paycheck Powerhouse. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition">Twitter</a>
              <a href="#" className="hover:text-foreground transition">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
