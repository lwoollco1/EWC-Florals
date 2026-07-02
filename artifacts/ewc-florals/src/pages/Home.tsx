import { motion } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  useDocumentTitle("EWC Florals | Central Florida Wedding Florist", "Dreamlike floral arrangements for weddings, baby showers, birthday parties, and corporate events in Central Florida.");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&q=80&w=2000')" }}
        >
          {/* Gradient at top (behind nav) and bottom (behind headline) so text stays readable regardless of the photo underneath */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-md">
              Grown for <br />
              <span className="italic font-light">Your Moment</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-sans max-w-xl mx-auto drop-shadow-sm font-light">
              Organic, lush, and romantic floral design for weddings and events in Central Florida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/gallery">
                <Button size="lg" className="w-full sm:w-auto bg-white text-foreground hover:bg-white/90 rounded-none px-8 font-serif tracking-widest text-base">
                  VIEW OUR WORK
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 rounded-none px-8 font-serif tracking-widest text-base bg-transparent">
                  REQUEST A QUOTE
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">Our Passion</h2>
            <p className="text-muted-foreground font-sans leading-relaxed text-lg">
              We love telling stories with flowers. Every stem, texture, and color is chosen intentionally to reflect your story. From weddings to baby showers to dinner parties with your best friends, we love bringing character and warmth to the spaces where your best memories are made.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Services</h2>
            <Link href="/services" className="inline-flex items-center text-primary hover:text-foreground transition-colors font-sans tracking-wide uppercase text-sm group">
              Explore All Offerings <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                desc: "Full-service floral design tailored to your unique love story.",
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Baby Showers",
                desc: "Soft, joyful arrangements to celebrate new beginnings.",
                img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Private Events",
                desc: "Lush botanical focal points for birthdays, dinners, and corporate galas.",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <Link href="/services">
                  <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-sans">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469598614039-7140f04c5dc8?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Ready to bloom?</h2>
          <p className="font-sans mb-10 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Let us bring your vision to life. We are currently booking for 2026 and 2027 seasons.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 py-6 font-serif tracking-widest text-lg">
              INQUIRE NOW
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
