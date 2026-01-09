import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy, ExternalLink, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Download() {
  const [, navigate] = useLocation();
  const [copied, setCopied] = useState(false);

  // This is the Google Sheets link template - replace with your actual link
  const googleSheetsLink = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/copy";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(googleSheetsLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
            <span className="font-bold text-lg">Paycheck Powerhouse</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-20">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-emerald-900">Thank you for your purchase!</h3>
                <p className="text-sm text-emerald-800 mt-1">Your Paycheck Powerhouse template is ready to use. Follow the steps below to get started.</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Click the Link Below</h3>
                  <p className="text-muted-foreground mb-4">
                    Click the button below to open your Paycheck Powerhouse template. Google will ask if you want to make a copy.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700 gap-2"
                      onClick={() => window.open(googleSheetsLink, "_blank")}
                    >
                      Open Template
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={copyToClipboard}
                      className="gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Make a Copy</h3>
                  <p className="text-muted-foreground">
                    Google will show a popup asking "Would you like to make a copy of Paycheck Powerhouse?" Click the "Make a copy" button. This creates a fresh, private copy in your Google Drive.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Start Using It</h3>
                  <p className="text-muted-foreground mb-4">
                    Your personal copy is now ready! You'll see three tabs:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Start Here</strong> - Instructions and welcome message</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Input</strong> - Enter your income and expenses</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Dashboard</strong> - View your budget breakdown</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Enter Your Data</h3>
                  <p className="text-muted-foreground mb-4">
                    Go to the "Input" tab and start entering:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Your income sources and amounts</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Your expenses with categories from the dropdown</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 5 */}
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">View Your Budget</h3>
                  <p className="text-muted-foreground">
                    Go to the "Dashboard" tab to see your budget breakdown. The dashboard automatically calculates your 50/30/20 budget and shows exactly where your money is going.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Quick Help</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold mb-2">The link didn't work. What should I do?</h3>
                <p className="text-muted-foreground text-sm">
                  Try copying the link and pasting it into your browser's address bar. Make sure you're logged into your Google account. If you still have issues, check that you have a Google account and internet connection.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Can I edit the template?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Your copy is completely yours to customize. You can add more categories, change colors, modify formulas - whatever you need. The template is fully editable.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">What's the 50/30/20 rule?</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  It's a simple budgeting framework:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>50%</strong> for Needs (rent, utilities, groceries, transport)</li>
                  <li>• <strong>30%</strong> for Wants (dining out, shopping, entertainment)</li>
                  <li>• <strong>20%</strong> for Savings (emergency fund, investments)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold mb-2">Is my data private?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Your data stays in your personal Google Drive. We have no access to it. You have complete control and privacy.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
            <h3 className="font-bold text-lg mb-2">Ready to get started?</h3>
            <p className="text-muted-foreground mb-4">
              Click the button below to open your template and start budgeting smarter today!
            </p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 gap-2"
              onClick={() => window.open(googleSheetsLink, "_blank")}
            >
              Open Your Template
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Paycheck Powerhouse. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/" className="hover:text-foreground transition">Home</a>
              <a href="#" className="hover:text-foreground transition">Support</a>
              <a href="#" className="hover:text-foreground transition">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
