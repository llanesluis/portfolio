import { actions, isInputError } from "astro:actions";
import { cn } from "../lib/utils";
import { useState } from "react";
import Spinner from "./icons/Spinner";

// Estoy llamando la accion desde el cliente porque para hacerlo desde
// la prop "action" del formulario necesito configurar el output de astro a "server"
// "Pages must be on-demand rendered when calling actions using a form action.
// Ensure prerendering is disabled on the page before using this API." >> https://docs.astro.build/en/guides/actions/#call-actions-from-an-html-form-action

export default function ContactForm() {
  const [submitText, setSubmitText] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
    null,
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    const target = event.currentTarget as HTMLFormElement;
    const inputData = new FormData(target);

    try {
      const res = await actions.message.orThrow(inputData);

      if (!res.success) return;

      setStatus("success");
      setSubmitText(res.message.toLowerCase());
      target.reset();
    } catch (error) {
      setStatus("error");

      if (isInputError(error)) {
        console.log(error.fields);
        setSubmitText("invalid inputs");
        return;
      }

      setSubmitText("something went wrong");
    } finally {
      setTimeout(() => {
        setStatus(null);
        setSubmitText(null);
      }, 3000);
    }
  };

  return (
    <form
      className="contact-form font-onest"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <span
        className={cn(
          "absolute right-0 top-0 size-2 animate-bounce rounded-full bg-accent",
          "transition-all duration-300",
          status === "success" && "size-4 bg-green-600",
          status === "error" && "size-4 bg-red-600",
        )}
      ></span>

      {submitText && (
        <span
          className={cn(
            "font-mono text-sm font-semibold text-muted-foreground max-sm:text-xs",
            "absolute -top-2 right-6 max-sm:-top-1",
            status === "success" && "text-green-600",
            status === "error" && "text-red-600",
          )}
        >
          {submitText}
        </span>
      )}

      <div className="grid gap-2">
        <label> Email </label>
        <input
          type="email"
          name="entry.1045781291"
          placeholder="your.email@gmail.com"
        />
      </div>

      <div className="grid gap-2">
        <label> Message </label>
        <textarea
          name="entry.839337160"
          placeholder="I would like to discuss..."
        ></textarea>
      </div>

      <button
        disabled={status === "loading" || status === "success"}
        className="relative"
      >
        <span
          className={cn(
            "transition duration-150",
            status === "loading" && "opacity-0",
          )}
        >
          Get in touch
        </span>

        {status === "loading" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner />
          </span>
        )}
      </button>
    </form>
  );
}
