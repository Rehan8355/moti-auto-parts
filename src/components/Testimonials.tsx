import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Deoband",
      rating: 5,
      text: "Excellent quality parts at competitive prices. My Royal Enfield runs smoother than ever after getting parts from MOTI AUTO PARTS. Highly recommended!",
      bike: "Royal Enfield Classic 350"
    },
    {
      name: "Babu",
      location: "Deoband", 
      rating: 5,
      text: "Fast delivery and genuine products. The brake pads I ordered were exactly what I needed. Great customer service and very professional approach.",
      bike: "Honda CB Shine"
    },
    {
      name: "Amit Singh",
      location: "Saharanpur",
      rating: 5,
      text: "Been buying parts from them for 3 years now. Never had any issues with quality. They really understand what riders need and deliver accordingly.",
      bike: "Bajaj Pulsar 220F"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Customer <span className="text-gradient-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What our satisfied customers say about their experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-12 text-center relative overflow-hidden"
              >
                {/* Quote Icon */}
                <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
                
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t border-border pt-8">
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-primary font-medium">
                    {testimonials[currentIndex].bike}
                  </p>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-full translate-y-12 -translate-x-12" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-foreground transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-foreground transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-20 text-center"
        >
          <div className="group">
            <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
              4.9/5
            </div>
            <div className="text-lg font-medium text-foreground">Average Rating</div>
            <div className="text-muted-foreground">From 500+ reviews</div>
          </div>
          
          <div className="group">
            <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
              95%
            </div>
            <div className="text-lg font-medium text-foreground">Repeat Customers</div>
            <div className="text-muted-foreground">Customer loyalty</div>
          </div>
          
          <div className="group">
            <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
              10K+
            </div>
            <div className="text-lg font-medium text-foreground">Parts Sold</div>
            <div className="text-muted-foreground">This year alone</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;