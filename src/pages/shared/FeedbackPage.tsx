import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/ui/page-header";
import { Star, Send, CheckCircle } from "lucide-react";

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="space-y-6 animate-fade-in">
        <PageHeader title="Feedback" description="Thank you for your feedback!" />
        <Card className="max-w-lg mx-auto border-2 text-center">
          <CardContent className="py-12">
            <div className="h-16 w-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your feedback has been submitted successfully. We appreciate you taking the
              time to help us improve our services.
            </p>
            <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
              Submit Another Response
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Feedback"
        description="Help us improve our services by sharing your experience"
      />

      <Card className="max-w-lg mx-auto border-2">
        <CardHeader>
          <CardTitle>How was your experience?</CardTitle>
          <CardDescription>
            Your feedback helps us provide better care for all patients
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Star Rating */}
          <div className="space-y-2">
            <Label>Overall Rating</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="p-1 transition-transform hover:scale-110"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoveredRating || rating)
                        ? "text-warning fill-warning"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-muted-foreground">
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </p>
            )}
          </div>

          {/* Comments */}
          <div className="space-y-2">
            <Label htmlFor="feedback">Your Comments</Label>
            <Textarea
              id="feedback"
              placeholder="Tell us about your experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={5}
            />
          </div>

          <Button
            className="w-full gradient-primary"
            onClick={handleSubmit}
            disabled={rating === 0}
          >
            <Send className="mr-2 h-4 w-4" />
            Submit Feedback
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackPage;
