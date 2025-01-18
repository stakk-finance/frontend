import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Droplet, Lock, Vote } from "lucide-react";

export default function WhyStakkSection() {
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
    <section className="py-24 w-full flex justify-center items-center">
      <div className="w-full lg:w-xl px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Why Stakk?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border-light/30 bg-card hover:bg-background-darker/90 cursor-pointer transition-colors bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-secondary text-sm">
                  {feature.description}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
