import { motion } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";

export default function About() {
  useDocumentTitle("Our Story | EWC Florals", "Learn about EWC Florals and our organic, romantic approach to floral design in Central Florida.");

  return (
    <Layout>
      <div className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Our Story</h1>
            <p className="text-muted-foreground font-sans text-lg md:text-xl">
              Cultivating beauty from nature, designed exclusively for your most memorable days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800" 
                  alt="Founder of EWC Florals" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-serif text-foreground">Meet the Designer</h2>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed text-lg">
                <p>
                  Hi, I'm Elizabeth — the heart and hands behind EWC Florals. My love for flowers began as a young girl learning the beauty of nature from my grandmother. That early love has blossomed into a lifelong passion for creating florals that feel just as meaningful as they are beautiful.
                </p>
                <p>
                  Based in Central Florida, I design for weddings, baby showers, and celebrations across Orlando, Winter Park, and other parts of Central Florida. I strive for romance, timelessness, and elegance — I believe the best florals don't chase trends, but feel like they'll be just as breathtaking in photographs twenty years from now as they are on the day itself.
                </p>
                <p>
                  Every event I design starts with a conversation. I want to know your love story, your vision, your favorite color — the small details that make your celebration uniquely yours. From there, I bring it to life bloom by bloom, whether that's a cascading bridal bouquet or a whimsical balloon-and-floral installation for a baby shower.
                </p>
                <p>
                  I can't wait to create something beautiful for your celebration.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-32 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-10">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-card p-8 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-primary">Graceful Form</h3>
                <p className="text-muted-foreground font-sans">We design with movement and softness in mind, arranging each bloom to feel effortless and refined — never stiff, never overdone. The goal is always romance: florals that feel like they belong in a love story.</p>
              </div>
              <div className="bg-card p-8 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-primary">Timeless Detail</h3>
                <p className="text-muted-foreground font-sans">The most memorable arrangements reward a closer look. We layer delicate blooms with soft textures and fine detail, creating depth without losing elegance — designs meant to feel just as beautiful in ten years as they do today.</p>
              </div>
              <div className="bg-card p-8 rounded-sm">
                <h3 className="text-xl font-serif mb-3 text-primary">Considered Color</h3>
                <p className="text-muted-foreground font-sans">Every palette is built with intention. We blend blush, sage, cream, and ivory into soft, sophisticated gradients — colors chosen not to make a statement, but to feel timeless in every photograph.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
