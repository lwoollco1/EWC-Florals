import { motion } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";
import { useListTestimonials, getListTestimonialsQueryKey } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export default function Testimonials() {
  useDocumentTitle("Client Love | EWC Florals", "Read reviews and testimonials from our wonderful clients in Central Florida.");

  const { data: testimonials, isLoading, error } = useListTestimonials({
    query: { queryKey: getListTestimonialsQueryKey() }
  });

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

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-background p-8 border border-border">
                  <div className="flex gap-1 mb-4"><Skeleton className="h-4 w-24" /></div>
                  <Skeleton className="h-20 w-full mb-6" />
                  <Skeleton className="h-4 w-32 mb-1" />
                  <Skeleton className="h-3 w-24" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20 text-muted-foreground">
              Failed to load testimonials. Please try again later.
            </div>
          ) : testimonials?.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground italic font-serif">
              No reviews available yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials?.map((t, i) => (
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
          )}
        </div>
      </div>
    </Layout>
  );
}
