"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [value, setValue] = useState("");

  const trpc = useTRPC();

  const { data: messages } = useQuery(trpc.messages.getMany.queryOptions());
  const createMessage = useMutation(
    trpc.messages.create.mutationOptions({
      onSuccess: () => {
        toast.success("Message created");
      },
    })
  );
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => createMessage.mutate({ value: value })}>
        Invoke background job
      </Button>

      {JSON.stringify(messages, null, 2)}
    </div>
  );
};

export default Page;
