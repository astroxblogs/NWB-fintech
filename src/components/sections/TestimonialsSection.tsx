import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SprintNXT transformed our payment infrastructure. We went from processing 10,000 transactions daily to over 500,000 with zero downtime.",
    author: "Priya Sharma",
    title: "CTO, PayFlow India",
    avatar: "PS",
  },
  {
    quote: "The developer experience is unmatched. We integrated their APIs in under a week and launched our fintech product months ahead of schedule.",
    author: "Rahul Mehta",
    title: "Founder, NeoBank",
    avatar: "RM",
  },
  {
    quote: "Their fraud detection saved us millions. The AI-powered system catches suspicious transactions that our previous provider completely missed.",
    author: "Anita Desai",
    title: "Head of Risk, SecurePay",
    avatar: "AD",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-4 block">TESTIMONIALS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by{' '}
            <span className="gradient-text">industry leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about transforming their financial operations with SprintNXT.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="feature-card h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-foreground text-lg mb-8 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <p className="text-center text-muted-foreground mb-10">
            Trusted by leading companies across the globe
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {['HDFC Bank', 'Paytm', 'Razorpay', 'PhonePe', 'ICICI'].map((company) => (
              <div
                key={company}
                className="text-2xl font-display font-bold text-muted-foreground/50"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
