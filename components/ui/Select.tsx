import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}
export function Select({ className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "block w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm text-text shadow-sm focus:border-primary focus:ring focus:ring-primary/20",
        className
      )}
      {...props}
    />
  );
}

export interface SelectItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}
export function SelectItem({ className, ...props }: SelectItemProps) {
  return <option className={cn("text-text", className)} {...props} />;
}

Select.displayName = "Select";
SelectItem.displayName = "SelectItem"; 