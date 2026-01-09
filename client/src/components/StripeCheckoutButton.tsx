import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface StripeCheckoutButtonProps {
  productId: string;
  productName: string;
  price: string;
  email?: string;
  name?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function StripeCheckoutButton({
  productId,
  productName,
  price,
  email = "",
  name = "",
  className = "",
  variant = "default",
  size = "lg",
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      // Show loading toast
      toast.loading("Redirecting to checkout...");

      // Call the backend API to create a checkout session
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          email,
          name,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await response.json();

      if (!data.url) {
        throw new Error("No checkout URL returned");
      }

      // Dismiss the loading toast
      toast.dismiss();

      // Open checkout in new tab
      window.open(data.url, "_blank");

      // Show success toast
      toast.success("Redirecting to secure checkout");
    } catch (error) {
      console.error("Checkout error:", error);
      toast.dismiss();
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to start checkout. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      className={className}
      variant={variant}
      size={size}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          Buy Now - {price}
        </>
      )}
    </Button>
  );
}
