import Link from "next/link";
import { CrownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const UpgradeButton = () => {
  return (
    <Button asChild size="sm" variant="tertiary" className="ml-auto">
      <Link href="/pricing">
        <CrownIcon /> Upgrade
      </Link>
    </Button>
  );
};
