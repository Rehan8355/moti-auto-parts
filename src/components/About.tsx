import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ownerPhoto from "@/assets/owner-photo.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-surface" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            About <span className="text-gradient-primary">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Owner Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-primary">
              <img
                src={ownerPhoto}
                alt="Owner - Mr. Mohd"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Owner Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-2xl font-bold text-foreground mb-1"
                >
                  Mr. Mohd Ahbab
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-primary font-medium"
                >
                  Founder & CEO
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Founded with passion and precision, <strong className="text-primary">MOTI AUTO PARTS</strong> has been serving riders since <strong className="text-foreground">2007</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our mission is to deliver reliable and affordable spare parts with guaranteed quality. We understand that every ride matters, and every part we sell carries the responsibility of keeping you safe on the road.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              With over a decade of experience in the automotive industry, we've built lasting relationships with riders across the country, earning their trust through consistent quality and exceptional service.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">10K+</div>
                <div className="text-muted-foreground font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">500+</div>
                <div className="text-muted-foreground font-medium">Product Variants</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;