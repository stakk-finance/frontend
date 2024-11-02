import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LuArrowUpRight, LuCoins, LuLock } from "react-icons/lu"
import AppShowcaseSidebar from "./AppShowcaseSidebar"

export default function AppShowcaseLayout() {
  return (
    <div className="w-full h-full rounded-xl flex flex-row justify-start items-start bg-tranparent z-20 text-center overflow-hidden bg-background-darker border-border border">
      <AppShowcaseSidebar />

      <div className="flex-1 bg-transparent p-6 grid gap-4 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staked</CardTitle>
            <LuCoins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,000 SOL</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current APY</CardTitle>
            <LuArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Earned</CardTitle>
            <LuCoins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52 SOL</div>
            <p className="text-xs text-muted-foreground">Since you started staking</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locked Period</CardTitle>
            <LuLock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30 days</div>
            <p className="text-xs text-muted-foreground">Until next unlock</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
