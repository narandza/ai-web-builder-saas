import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { useState } from "react";
import { cn } from "@/lib/utils";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
  projectId: string;
}

const formSchema = z.object({
  value: z
    .string()
    .min(1, { message: "Value is required" })
    .max(10_000, { message: "Value is too long" }),
});

export const MessageForm = ({ projectId }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const showUsage = false;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "relative border p-4 pt-1 rounded-xl bg-sidebar dark:bg-sidebar transition-all",
          isFocused && "shadow-xs",
          showUsage && "rounded-t-none"
        )}
      >
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <TextareaAutosize
              {...field}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              minRows={2}
              maxRows={8}
              className="pt-4 resize-none border-none w-full outline-none bg-transparent"
              placeholder="What would yo like to build"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  form.handleSubmit(onSubmit)(e);
                }
              }}
            />
          )}
        />
      </form>
    </Form>
  );
};
