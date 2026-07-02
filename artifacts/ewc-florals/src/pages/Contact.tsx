import { useState } from "react";
import { motion } from "framer-motion";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { Layout } from "@/components/layout/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InquiryInputEventType } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  eventType: z.enum([
    InquiryInputEventType.wedding, 
    InquiryInputEventType.baby_shower, 
    InquiryInputEventType.birthday, 
    InquiryInputEventType.corporate, 
    InquiryInputEventType.other
  ], { required_error: "Event type is required" }),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  budgetRange: z.string().optional(),
  venue: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit about your vision"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  useDocumentTitle("Contact Us | EWC Florals", "Request a quote for your event florals in Orlando and Winter Park.");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      budgetRange: "",
      venue: "",
      message: "",
    },
  });

  const encodeFormData = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
      .join("&");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact-inquiry", ...data }),
      });
      toast({
        title: "Inquiry Sent",
        description: "Thank you for reaching out! We'll be in touch shortly.",
      });
      form.reset();
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
          >
            {/* Info Side */}
            <div>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">Get in Touch</h1>
              <p className="text-muted-foreground font-sans text-lg mb-12 max-w-md">
                We'd love to hear about your upcoming event. Fill out the form, and we'll get back to you within 48 hours to schedule a consultation.
              </p>

              <div className="space-y-8 font-sans">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Email</h3>
                  <a href="mailto:hello@ewcflorals.com" className="text-foreground text-lg hover:text-primary transition-colors">hello@ewcflorals.com</a>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Phone</h3>
                  <p className="text-foreground text-lg">(407) 433-8631</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Service Area</h3>
                  <p className="text-foreground text-lg">Orlando, Winter Park & Central Florida</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-card p-8 md:p-10 border border-border shadow-sm">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  name="contact-inquiry"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact-inquiry" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl><Input {...field} className="bg-background rounded-none border-border" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl><Input type="email" {...field} className="bg-background rounded-none border-border" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input {...field} className="bg-background rounded-none border-border" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="eventType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background rounded-none border-border">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={InquiryInputEventType.wedding}>Wedding</SelectItem>
                            <SelectItem value={InquiryInputEventType.baby_shower}>Baby Shower</SelectItem>
                            <SelectItem value={InquiryInputEventType.birthday}>Birthday Party</SelectItem>
                            <SelectItem value={InquiryInputEventType.corporate}>Corporate Event</SelectItem>
                            <SelectItem value={InquiryInputEventType.other}>Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="eventDate" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Date</FormLabel>
                        <FormControl><Input type="date" {...field} className="bg-background rounded-none border-border" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="venue" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Venue</FormLabel>
                        <FormControl><Input placeholder="If known" {...field} className="bg-background rounded-none border-border" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="guestCount" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Est. Guest Count</FormLabel>
                        <FormControl><Input {...field} className="bg-background rounded-none border-border" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="budgetRange" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Floral Budget</FormLabel>
                        <FormControl><Input placeholder="e.g. $3k-$5k" {...field} className="bg-background rounded-none border-border" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us about your vision *</FormLabel>
                      <FormControl><Textarea rows={5} {...field} className="bg-background rounded-none border-border resize-none" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-6 font-serif tracking-widest text-lg"
                  >
                    {isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
