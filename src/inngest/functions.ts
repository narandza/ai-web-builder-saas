import { Sandbox } from "@e2b/code-interpreter";
import { inngest } from "./client";
import { createAgent, openai } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "code-agent" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("vibe-next-js-devmitrije010");

      return sandbox.sandboxId;
    });

    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert. next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets",
      model: openai({ model: "gpt-4o" }),
    });
  }
);
