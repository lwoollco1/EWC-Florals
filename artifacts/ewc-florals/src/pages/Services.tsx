import { motion } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "weddings",
    title: "Weddings",
    description: "Your wedding day deserves florals that reflect your unique romance. From a show-stopping bridal bouquet to sweeping aisle installations and lush reception centerpieces, we offer full-service bespoke design to bring your vision to life.",
    tiers: [
      { label: "Custom Floral Service", price: "$2,500" },
      { label: "Full Event Design & Floral Service", price: "$3,500" },
    ],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    reverse: false,
  },
  {
    id: "baby-showers",
    title: "Baby Showers",
    description: "Welcome new life with soft, tender blooms. We create beautiful focal points—from sweet dessert table arrangements to full photo backdrops—perfect for celebrating the parents-to-be.",
    tiers: [
      { label: "Custom Floral Service", price: "$950" },
    ],
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1000",
    reverse: true,
  },
  {
    id: "birthdays",
    title: "Birthday Parties",
    description: "Milestones deserve to be celebrated in style. Whether it's an intimate dinner party or a grand birthday bash, our vibrant, textured floral designs set the perfect mood for an unforgettable evening.",
    tiers: [
      { label: "Custom Floral Service", price: "$750" },
    ],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000",
    reverse: false,
  },
  {
    id: "corporate",
    title: "Corporate & Events",
    description: "Elevate your brand or corporate gathering with sophisticated botanical designs. We provide entrance pieces, stage florals, and table arrangements that add warmth and professionalism to any venue.",
    tiers: [
      { label: "Custom Floral Service", price: "$500" },
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    reverse: true,
  }
];

export default function Services() {
  useDocumentTitle("Services & Pricing | EWC Florals", "Floral design packages and services for weddings, baby showers, and events in Orlando and Winter Park.");

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
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Our Services</h1>
            <p className="text-muted-foreground font-sans text-lg md:text-xl">
              Curated floral experiences for life's most beautiful celebrations.
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center ${service.reverse ? 'md:[&>*:first-child]:order-last' : ''}`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif mb-6">{service.title}</h2>
                  <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="mb-10 p-6 bg-card border-l-4 border-primary space-y-3">
                    {service.tiers.map((tier, i) => (
                      <div key={i} className="flex items-baseline justify-between gap-4 flex-wrap">
                        <p className="font-serif text-lg text-foreground whitespace-nowrap">{tier.label} starting at</p>
                        <span className="font-serif text-xl font-semibold text-foreground whitespace-nowrap">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/contact?service=${service.id}`}>
                    <Button variant="outline" className="rounded-none px-8 font-serif tracking-widest bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background">
                      INQUIRE NOW
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
