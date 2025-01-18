"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coins, PieChart, Rocket, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FeaturesSection({ id }: { id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const features = [
    {
      icon: Wallet,
      title: "One Asset Staking",
      description: "Stake your favorite assets with a single click.",
      animation: "float",
      preview: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-medium">SOL Staking</p>
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">APY</p>
              <p className="text-sm font-medium text-success">6.8%</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 h-2 bg-background-darker/50 rounded-full" />
            <div
              className="h-2 rounded-full bg-primary"
              style={{ width: `${78}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Staked: 78 SOL</span>
            <span className="text-muted-foreground">Total: 100 SOL</span>
          </div>
          <Separator />
          <Button
            variant="outline"
            className="w-full hover:bg-primary/10 hover:border-primary/20 transition-colors"
          >
            Manage Stake
          </Button>
        </div>
      ),
    },
    {
      icon: Coins,
      title: "Multi-Chain Support",
      description: "Access best yields across ecosystems.",
      animation: "float-slower",
      preview: (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">Ethereum</p>
              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-0 h-2 bg-background-darker/50 rounded-full" />
                  <div
                    className="h-2 rounded-full bg-warning"
                    style={{ width: `${45}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">Solana</p>
              <div className="relative">
                <div className="absolute inset-0 h-2 bg-background-darker/50 rounded-full" />
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${78}%` }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Value</p>
              <p className="text-sm font-medium">$12,450</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Daily Yield</p>
              <p className="text-sm font-medium text-success">+$24.50</p>
            </div>
          </div>
          <Separator />
          <Button variant="outline" className="w-full">
            View All Chains
          </Button>
        </div>
      ),
    },
    {
      icon: PieChart,
      title: "AI-Driven Analytics",
      description:
        "Our advanced AI analyzes market conditions and allocates your assets to the most profitable DeFi protocols.",
      animation: "float-slowest",
      preview: (
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">AI Recommendations</p>
              <Badge variant="secondary" className="text-xs">
                Optimized
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Accuracy</p>
              <p className="text-sm font-medium text-success">92.5%</p>
            </div>
          </div>
          <div className="h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />
            <div className="relative z-10 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Protocols</span>
                <span className="text-muted-foreground">Allocation</span>
              </div>
              <div className="space-y-2 mt-2">
                {["Jupiter", "Marinade", "Solend"].map((protocol, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span>{protocol}</span>
                    <span className="font-medium">{25 + i * 15}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Separator />
          <Button variant="outline" className="w-full">
            View Analytics
          </Button>
        </div>
      ),
    },
    {
      icon: Rocket,
      title: "Optimized Yields",
      description:
        "Maximize your returns with our intelligent yield optimization strategies and risk management.",
      animation: "float",
      preview: (
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Portfolio Growth</p>
              <Badge variant="secondary" className="text-xs">
                +24.5%
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">30d Change</p>
              <p className="text-sm font-medium text-success">+$1,245</p>
            </div>
          </div>
          <div className="h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />
            <div className="relative z-10 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Strategy</span>
                <span className="text-muted-foreground">APY</span>
              </div>
              <div className="space-y-2 mt-2">
                {["Liquid Staking", "Lending", "Yield Aggregator"].map(
                  (strategy, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{strategy}</span>
                      <span className="font-medium">{6 + i * 2}%</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
          <Separator />
          <Button variant="outline" className="w-full">
            View Strategies
          </Button>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      ref={ref}
      id={id}
      className="w-full py-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full lg:w-xl mx-auto px-content">
        <motion.h2
          className="text-3xl font-bold text-center mb-contentLg text-primary"
          variants={itemVariants}
        >
          Powerful Features
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Card
                className={cn(
                  "h-full border-border-light/30 bg-card/80 hover:bg-background-darker/80 cursor-pointer transition-colors bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl animate-${feature.animation} overflow-hidden relative group-hover:shadow-lg group-hover:shadow-primary/10 min-h-[400px]",
                )}
              >
                <div className="absolute inset-0 rounded-2xl border border-border/20 pointer-events-none" />
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="text-secondary text-base">
                    {feature.description}
                  </span>
                  <div className="mt-6 -mx-6 -mb-6 border-t border-border/20">
                    <div className="p-6 bg-background/50 backdrop-blur-sm h-[300px]">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/10 rounded-lg blur-md" />
                        <div className="space-y-6 bg-background/90 rounded-lg p-6 border border-border/20 h-full relative z-10">
                          {feature.preview}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
