import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppShowcaseSidebar from "./AppShowcaseSidebar"

export default function AppShowcaseLayout() {
  return (
    <div className="w-full h-full rounded-xl flex flex-row justify-start items-center bg-tranparent z-20 text-center overflow-hidden bg-background-darker border-border border">
      <AppShowcaseSidebar />

      <div className="flex-1 bg-transparent h-full flex justify-center items-center">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staked</CardTitle>
            {/* <Coins className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,000 SOL</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
