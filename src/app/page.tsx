"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();

  const { data } = useQuery(
    trpc.hello.queryOptions({
      text: "Bob!",
    })
  );

  return (
    <div className="">
      Hello world!
      <div className="">{JSON.stringify(data)}</div>
    </div>
  );
};

export default Page;
