import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LuArrowUpRight, LuCoins, LuLock } from "react-icons/lu";
import AppShowcaseSidebar from "./AppShowcaseSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import YieldsChart from "./YieldsChart";

export default function AppShowcaseLayout() {
  return (
    <div className="w-full h-full rounded-xl flex flex-row justify-start items-start bg-tranparent z-20 text-center overflow-hidden bg-background-darker border-border border">
      <AppShowcaseSidebar />

      <div className="flex flex-col w-full h-full">
        <div className="flex-1 flex-col gap-4 p-6">
          <div className="mb-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex-1 bg-transparent grid gap-4 md:grid-cols-2">
            <YieldsChart />

            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Staked
                </CardTitle>
                <LuCoins className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,000 SOL</div>
                <p className="text-xs text-muted-foreground">
                  +20% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Current APY
                </CardTitle>
                <LuArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.2%</div>
                <p className="text-xs text-muted-foreground">
                  +0.5% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Rewards Earned
                </CardTitle>
                <LuCoins className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">52 SOL</div>
                <p className="text-xs text-muted-foreground">
                  Since you started staking
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Locked Period
                </CardTitle>
                <LuLock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">30 days</div>
                <p className="text-xs text-muted-foreground">
                  Until next unlock
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
