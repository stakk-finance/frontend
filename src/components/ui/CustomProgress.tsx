"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

interface CustomProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

const CustomProgress = React.forwardRef<HTMLDivElement, CustomProgressProps>(
  ({ value, className, indicatorClassName, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        <Progress value={value} className={`h-2 ${indicatorClassName}`} />
      </div>
    );
  },
);

CustomProgress.displayName = "CustomProgress";

export { CustomProgress };
