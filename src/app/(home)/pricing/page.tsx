"use client";

import { dark } from "@clerk/themes";
import { PricingTable } from "@clerk/nextjs";

import { useCurrentTheme } from "@/hooks/use-current-theme";
import { Logo } from "@/components/logo";

const Page = () => {
  const currentTheme = useCurrentTheme();

  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <section className="space-y-6 pt-[16vh] 2xl:pt-48">
        <div className="flex flex-col items-center">
          <Logo width={50} height={50} className="hidden md:block" />
          <h1 className="text-xl md:text-3xl font-bold text-center">Pricing</h1>
          <p className="text-muted-foreground text-center text-sm md:text-base">
            Choose the plan that fits your needs
          </p>
        </div>
        <PricingTable
          appearance={{
            baseTheme: currentTheme === "dark" ? dark : undefined,
            elements: {
              pricingTableCard: "border! shadow-none! rounded-lg!",
            },
          }}
        />
      </section>
    </div>
  );
};

export default Page;
