import { motion, AnimatePresence } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { X } from "lucide-react";

type Category = "All" | "Weddings" | "Baby Showers" | "Events";

const images = [
  // Weddings
  { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", alt: "Wedding reception table with lush floral centerpieces", category: "Weddings" },
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800", alt: "Elegant bridal bouquet of white and blush roses", category: "Weddings" },
  { url: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D", alt: "Stunning floral arch at a wedding ceremony", category: "Weddings" },
  { url: "https://unsplash.com/photos/a-table-is-set-with-candles-and-flowers-pt34cohzJiU", alt: "Romantic flower-lined wedding ceremony aisle", category: "Weddings" },
  { url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800", alt: "Wedding ceremony floral arrangements in an outdoor venue", category: "Weddings" },
  { url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=800", alt: "Close-up of a lush bridal bouquet with garden roses", category: "Weddings" },
  // Baby Showers
  { url: "https://unsplash.com/photos/a-table-topped-with-a-cake-and-a-vase-filled-with-flowers-XYTGH8TqunE", alt: "Beautiful baby shower floral arrangement", category: "Baby Showers" },
  { url: "https://www.istockphoto.com/photo/baby-shower-gm512569076-87218301?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbaby-shower-flowers&utm_term=baby+shower+flowers%3A%3A%3A%3A68aec62a-f36f-49d1-87e0-06b669632bce", alt: "Soft pastel floral centerpiece for a baby shower", category: "Baby Showers" },
  { url: "https://www.istockphoto.com/photo/birthday-party-gm1350497216-426579827", alt: "Delicate pink and white floral display for baby shower", category: "Baby Showers" },
  // Events
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800", alt: "Intimate candlelit dinner party with floral centerpieces", category: "Events" },
  { url: "https://www.istockphoto.com/photo/serving-setting-table-festive-dinner-table-is-served-dishes-and-cutlery-and-gm1939425194-556496197", alt: "Birthday party floral installation and decor", category: "Events" },
  { url: "https://unsplash.com/photos/red-and-green-flower-bouquet-on-table-t76TZgu1FVM", alt: "Elegant corporate event with botanical floral arrangements", category: "Events" },
];

export default function Gallery() {
  useDocumentTitle("Portfolio & Gallery | EWC Florals", "View our portfolio of wedding and event floral designs.");

  const [activeTab, setActiveTab] = useState<Category>("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const categories: Category[] = ["All", "Weddings", "Baby Showers", "Events"];

  const filteredImages = activeTab === "All" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Our Work</h1>
            <p className="text-muted-foreground font-sans text-lg">
              A curated collection of our favorite floral installations and designs.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-none font-serif tracking-wider text-sm transition-all duration-300 ${
                  activeTab === cat 
                    ? "bg-foreground text-background" 
                    : "bg-transparent text-foreground border border-foreground/20 hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  key={`${img.url}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-[4/5] cursor-pointer overflow-hidden group"
                  onClick={() => setLightboxImg(img.url)}
                >
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-[101]"
              onClick={() => setLightboxImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Enlarged floral view"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
