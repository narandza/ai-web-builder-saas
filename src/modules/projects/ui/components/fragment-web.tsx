import { Button } from "@/components/ui/button";
import { Fragment } from "@/generated/prisma";
import { ExternalLinkIcon, RefreshCcwIcon } from "lucide-react";

interface Props {
  data: Fragment;
}

export function FragmentWeb({ data }: Props) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="p-2 border-b bg-sidebar flex items-center gap-x-2">
        <Button size="sm" variant="outline" onClick={() => {}}>
          <RefreshCcwIcon />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {}}
          className="flex-1 justify-start text-start font-normal"
          disabled={false}
        >
          <span className="truncate">{data.sandboxUrl}</span>
        </Button>
        <Button
          size="sm"
          disabled={!data.sandboxUrl}
          variant="outline"
          onClick={() => {
            if (!data.sandboxUrl) return;
            window.open(data.sandboxUrl, "_blank");
          }}
        >
          <ExternalLinkIcon />
        </Button>
      </div>
      <iframe
        className="h-full  w-full"
        sandbox="allow-forms allow-scripts allow-same-origin"
        loading="lazy"
        src={data.sandboxUrl}
      />
    </div>
  );
}
