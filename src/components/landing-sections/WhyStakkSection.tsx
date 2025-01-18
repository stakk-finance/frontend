import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQAccordion } from "./FAQAccordion";
import { Brain, Droplet, Lock, Vote } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function WhyStakkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Optimized Yield",
      description:
        "Advanced AI algorithms analyze the market and allocate your assets into pools with the best risk-to-reward ratio, helping you earn more with less effort.",
    },
    {
      icon: Droplet,
      title: "Effortless Airdrop Farming",
      description:
        "Staking with Stakk doesn't just earn you interest. You'll automatically be eligible for exclusive airdrops across multiple DeFi platforms.",
    },
    {
      icon: Lock,
      title: "Simple and Secure Staking",
      description:
        "Enjoy a user-friendly platform that lets you stake with just a few clicks. Your funds are secured with audited smart contracts, so you can stake with confidence.",
    },
    {
      icon: Vote,
      title: "Participate in DeFi Governance",
      description:
        "By staking your assets, you'll get access to voting in popular DeFi governance processes like JUP and BONK. This gives you the power to influence decisions in the broader ecosystem.",
    },
  ];

  return (
    <motion.section 
      ref={ref}
      className="w-full py-32 relative overflow-hidden border-t border-b border-border-light/20 bg-background/30 backdrop-blur-2xl"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      }}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 -z-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Colored shapes */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Animated gradient */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(59,98,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(59,98,255,0.1) 100%)',
            'linear-gradient(135deg, rgba(59,98,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(59,98,255,0.1) 100%)',
            'linear-gradient(225deg, rgba(59,98,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(59,98,255,0.1) 100%)',
            'linear-gradient(315deg, rgba(59,98,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(59,98,255,0.1) 100%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div 
        className="max-w-7xl mx-auto px-content"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 text-primary"
          variants={itemVariants}
        >
          Why Stakk?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group perspective-1000"
            >
              <Card
                className={cn(
                  "h-full border-border-light/30 bg-card/80 hover:bg-background-darker/80",
                  "cursor-pointer transition-all duration-300",
                  "bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl",
                  "overflow-hidden relative group-hover:shadow-lg group-hover:shadow-primary/10"
                )}
              >
                <div className="absolute inset-0 rounded-2xl border border-border/20 pointer-events-none" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-secondary text-base leading-relaxed">
                    {feature.description}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-32"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-primary"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <FAQAccordion items={[
            {
              question: "How does Stakk ensure the security of my funds?",
              answer: "We use audited smart contracts and implement multiple layers of security measures, including cold storage for the majority of funds and regular security audits."
            },
            {
              question: "What makes Stakk different from other staking platforms?",
              answer: "Our AI-driven yield optimization and multi-chain support allow you to maximize returns across different ecosystems while maintaining a simple user experience."
            },
            {
              question: "Can I unstake my assets at any time?",
              answer: "Yes, our platform offers flexible staking options with no lock-up periods, allowing you to unstake your assets whenever you need."
            },
            {
              question: "How are the yields calculated?",
              answer: "Yields are calculated based on real-time market conditions and the performance of various DeFi protocols. Our AI continuously monitors and optimizes your positions."
            },
            {
              question: "What chains does Stakk support?",
              answer: "Currently we support Solana, Ethereum, and Polygon, with more chains coming soon. Our multi-chain architecture allows for seamless integration of new ecosystems."
            }
          ]}/>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
