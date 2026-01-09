import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, Copy, ExternalLink, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Success() {
  const [, navigate] = useLocation();
  const [sessionId, setSessionId] = useState<string>("");
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // This is the Google Sheets link template - replace with your actual link
  const googleSheetsLink = "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/copy";

  useEffect(() => {
    // Get session ID from URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("session_id");

    if (id) {
      setSessionId(id);
      fetchSessionData(id);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchSessionData = async (id: string) => {
    try {
      const response = await fetch(`/api/stripe/session/${id}`);
      if (response.ok) {
        const data = await response.json();
        setSessionData(data);
      }
    } catch (error) {
      console.error("Failed to fetch session data:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(googleSheetsLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Processing your purchase...</p>
        </div>
      </div>
    );
  }

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
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Payment Successful! 🎉</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase! Your Paycheck Powerhouse template is ready to use.
            </p>
          </div>

          {/* Session Details */}
          {sessionData && (
            <Card className="p-6 mb-8 bg-emerald-50 border-emerald-200">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span className="font-mono text-sm">{sessionData.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount Paid:</span>
                  <span className="font-bold">
                    {sessionData.currency?.toUpperCase()} {(sessionData.amount / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-sm font-medium">
                    <Check className="w-4 h-4" />
                    Paid
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Next Steps */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold">What's Next?</h2>

            {/* Step 1 */}
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Get Your Template</h3>
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
                    Google will show a popup asking "Would you like to make a copy of Paycheck Powerhouse?" Click "Make a copy" to create your personal copy.
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
                  <h3 className="font-bold text-lg mb-2">Start Budgeting</h3>
                  <p className="text-muted-foreground">
                    Go to the "Input" tab and start entering your income and expenses. Your budget will automatically calculate on the Dashboard tab!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Email Confirmation */}
          <Card className="p-6 bg-blue-50 border-blue-200 mb-8">
            <div className="flex gap-3">
              <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                ℹ
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Check Your Email</h3>
                <p className="text-sm text-blue-800">
                  A confirmation email has been sent to <strong>{sessionData?.email || "your email"}</strong> with your order details and the template link.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 gap-2 mb-4"
              onClick={() => window.open(googleSheetsLink, "_blank")}
            >
              <Download className="w-4 h-4" />
              Get Your Template Now
            </Button>
            <p className="text-sm text-muted-foreground">
              or{" "}
              <button
                onClick={() => navigate("/")}
                className="text-emerald-600 hover:underline font-medium"
              >
                return to home
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Paycheck Powerhouse. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/" className="hover:text-foreground transition">
                Home
              </a>
              <a href="#" className="hover:text-foreground transition">
                Support
              </a>
              <a href="#" className="hover:text-foreground transition">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
