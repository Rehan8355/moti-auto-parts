import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Disc, CircleDot, Wrench } from "lucide-react";
import productsShowcase from "@/assets/products-showcase.jpg";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      icon: Car,
      title: "Engine Parts",
      description: "Pistons, gaskets, filters, and complete engine components",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Disc,
      title: "Brake Systems",
      description: "Brake pads, discs, calipers, and brake fluid systems",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CircleDot,
      title: "Tires & Wheels",
      description: "Premium tires, alloy wheels, and wheel accessories",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wrench,
      title: "Accessories",
      description: "Lights, mirrors, chains, and essential bike accessories",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-hero" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Our <span className="text-gradient-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of quality bike spare parts
          </p>
        </motion.div>

        {/* Featured Product Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden mb-16 group"
        >
          <img
            src={productsShowcase}
            alt="Featured products showcase"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
            <div className="p-12">
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl font-black mb-4"
              >
                Premium Quality Parts
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-muted-foreground max-w-md"
              >
                All products are carefully selected and tested to ensure maximum performance and durability.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 hover-glow group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors text-center">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-center">
                {category.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-primary mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary hover-glow px-8 py-4 rounded-xl text-lg font-semibold text-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;