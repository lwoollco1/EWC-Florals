cat > artifacts/ewc-florals/src/pages/Testimonials.tsx << 'EOF'
import { motion } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";
import { Star } from "lucide-react";

type Testimonial = {
  id: string;
  rating: number;
  review: string;
  clientName: string;
  eventType: string;
  location?: string;
};

// Hardcoded testimonials (static site — no backend/database).
// Edit this list directly to add, remove, or update reviews.
const testimonials: Testimonial[] = [
  {
    id: "1",
    rating: 5,
    review: "EWC Florals made our wedding day absolutely breathtaking. Every arrangement was more beautiful than we imagined.",
    clientName: "Sarah & James",
    eventType: "Wedding",
    location: "Winter Park",
  },
  {
    id: "2",
    rating: 5,
    review: "From the consultation to the final delivery, the whole process was seamless. Our guests couldn't stop talking about the flowers.",
    clientName: "Maria Gonzalez",
    eventType: "Baby Shower",
    location: "Orlando",
  },
  {
    id: "3",
    rating: 5,
    review: "Professional, creative, and so easy to work with. They brought our vision to life better than we could have hoped.",
    clientName: "Emily Chen",
    eventType: "Corporate Event",
    location: "Orlando",
  },
  {
    id: "4",
    rating: 5,
    review: "The floral arrangements were the highlight of the party. Stunning colors and impeccable attention to detail.",
    clientName: "Ashley Roberts",
    eventType: "Birthday Party",
    location: "Winter Park",
  },
  {
    id: "5",
    rating: 5,
    review: "We booked EWC Florals for our anniversary and they exceeded every expectation. Truly artists with flowers.",
    clientName: "David & Priya Patel",
    eventType: "Anniversary",
    location: "Central Florida",
  },
  {
    id: "6",
    rating: 5,
    review: "Timely, gorgeous, and within budget. I recommend EWC Florals to everyone planning an event in the area.",
    clientName: "Lauren Mitchell",
    eventType: "Wedding",
    location: "Orlando",
  },
];

export default function Testimonials() {
  useDocumentTitle("Client Love | EWC Florals", "Read reviews and testimonials from our wonderful clients in Central Florida.");

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-card min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Kind Words</h1>
            <p className="text-muted-foreground font-sans text-lg md:text-xl">
              There is no greater joy than bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background p-8 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-1 text-primary mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill={idx < t.rating ? "currentColor" : "none"} strokeWidth={idx < t.rating ? 0 : 1} />
                  ))}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6 text-foreground/90 italic">
                  "{t.review}"
                </p>
                <div>
                  <p className="font-sans font-medium text-foreground">{t.clientName}</p>
                  <p className="font-sans text-sm text-muted-foreground uppercase tracking-wider mt-1">
                    {t.eventType} {t.location ? `— ${t.location}` : ""}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
EOF