"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions());
  return (
    <div className="">
      <Button onClick={() => invoke.mutate({ text: "John" })}>
        Invoke background job
      </Button>
    </div>
  );
};

export default Page;
