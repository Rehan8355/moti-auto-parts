import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Shield, DollarSign, Truck } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Package,
      title: "Wide Range of Spare Parts",
      description: "Comprehensive inventory covering all major bike brands and models with genuine OEM and high-quality aftermarket parts."
    },
    {
      icon: Shield,
      title: "100% Genuine Products",
      description: "All products are authenticated and sourced directly from certified manufacturers with quality guarantee certificates."
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Competitive pricing with transparent cost structure and regular discounts for our valued customers."
    },
    {
      icon: Truck,
      title: "Fast Delivery & Support",
      description: "Quick delivery across the country with 24/7 customer support and hassle-free return policy."
    }
  ];

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
            Why Choose <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing the best experience for every rider
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 hover-glow group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-primary"
              >
                <feature.icon className="w-8 h-8 text-foreground" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-20 text-center"
        >
          <div className="group">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform"
            >
              99%
            </motion.div>
            <div className="text-lg font-medium text-foreground">Customer Satisfaction</div>
            <div className="text-muted-foreground">Based on reviews</div>
          </div>
          
          <div className="group">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform"
            >
              24/7
            </motion.div>
            <div className="text-lg font-medium text-foreground">Support Available</div>
            <div className="text-muted-foreground">Round the clock</div>
          </div>
          
          <div className="group">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform"
            >
              48hrs
            </motion.div>
            <div className="text-lg font-medium text-foreground">Delivery Time</div>
            <div className="text-muted-foreground">Average delivery</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;