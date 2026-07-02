import { motion } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book my wedding florals?",
    answer: "We recommend booking 9 to 12 months in advance, especially for spring and fall weddings in Florida. We only take a limited number of events per weekend to ensure our highest quality of service."
  },
  {
    question: "Do you have a minimum budget for weddings?",
    answer: "Our full-service wedding design starts at $3,500. This minimum allows us to source premium, lush blooms and provide the dedicated design time, delivery, and professional installation that our signature look requires."
  },
  {
    question: "Do you travel outside of Orlando / Winter Park?",
    answer: "Yes! While Central Florida is our home base, we happily travel throughout the state, including Tampa, St. Augustine, and coastal areas. Travel and accommodation fees apply depending on the distance."
  },
  {
    question: "What is the process for booking?",
    answer: "First, fill out our inquiry form. We'll respond to set up a complimentary consultation (phone or video). After discussing your vision, we'll create a custom visual proposal and quote. To secure your date, we require a signed contract and a 30% non-refundable retainer."
  },
  {
    question: "Do you provide rental items like candles and arches?",
    answer: "Yes. Our full-service design includes access to our curated inventory of vessels, candles, taper holders, and ceremony structures to complete the look."
  },
  {
    question: "Can I make changes to the proposal after booking?",
    answer: "Absolutely! The initial proposal secures your date. We expect things to evolve as you plan. We finalize all details, stem counts, and final payments 30 days prior to your event."
  }
];

export default function FAQ() {
  useDocumentTitle("FAQ | EWC Florals", "Frequently asked questions about booking event and wedding florals.");

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-card min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Frequently Asked Questions</h1>
              <p className="text-muted-foreground font-sans text-lg">
                Details on our process, booking, and design services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-background border border-border px-6">
                  <AccordionTrigger className="font-serif text-lg text-left hover:no-underline hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
