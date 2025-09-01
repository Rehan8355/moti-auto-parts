import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Clock } from "lucide-react";

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-hero" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our <span className="text-gradient-primary">Journey</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Since Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-8 hover-glow group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Since 2007</h3>
                  <p className="text-muted-foreground">Our Foundation</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Starting as a small workshop with a vision to provide quality bike parts, 
                we've grown into a trusted name in the automotive spare parts industry.
              </p>
            </motion.div>

            {/* Aim Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass rounded-2xl p-8 hover-glow group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Our Aim</h3>
                  <p className="text-muted-foreground">Mission Statement</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                To keep every rider moving with trust and safety. We believe in building 
                long-term relationships through quality products and exceptional service.
              </p>
            </motion.div>
          </div>

          {/* Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="relative mt-16"
          >
            <div className="h-1 bg-gradient-primary mx-auto max-w-md"></div>
            <div className="flex justify-between items-center mt-4 max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center"
              >
                <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-muted-foreground">2007</div>
                <div className="text-xs text-muted-foreground">Founded</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center"
              >
                <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                <div className="text-sm font-medium text-muted-foreground">2025</div>
                <div className="text-xs text-muted-foreground">Today</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;