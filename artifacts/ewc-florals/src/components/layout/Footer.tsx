import { Link } from "wouter";
import { Instagram, Facebook, PinIcon as Pinterest } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-medium tracking-wide text-foreground mb-4 inline-block">
              EWC Florals
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm font-sans leading-relaxed">
              Dreamlike floral arrangements for weddings, baby showers, and events in Central Florida. Organic, lush, and tactile designs crafted for your most important moments.
            </p>
            <div className="flex items-center gap-4 text-foreground/80">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Pinterest">
                <Pinterest size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-4">Explore</h4>
            <ul className="space-y-3 font-sans text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-4">Contact</h4>
            <ul className="space-y-3 font-sans text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">hello@ewcflorals.com</Link></li>
              <li>(407) 433-8631</li>
              <li className="pt-2">
                <strong>Service Area</strong><br/>
                Orlando, Winter Park<br/>
                & Surrounding Areas
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground font-sans flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} EWC Florals. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
