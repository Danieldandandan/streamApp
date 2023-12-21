"use client";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useSideBar } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSideBar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font=semibold text-primary"> ssss </p>
          <Hint label={label} side="right" asChild>
            <Button className="h-auto p-2 ml-auto" variant="ghost" onClick={onCollapse}>
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} variant="ghost">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};
