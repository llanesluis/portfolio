import { actions, isInputError } from "astro:actions";
import { cn } from "../lib/utils";
import { useState } from "react";

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
      setSubmitText(res.message);
      target.reset();
    } catch (error) {
      setStatus("error");

      if (isInputError(error)) {
        console.log(error.fields);
        setSubmitText("🤨 Invalid inputs!");
        return;
      }

      setSubmitText("😭 Something went wrong!");
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
          status === "success" && "size-4 bg-green-500",
          status === "error" && "size-4 bg-red-500",
        )}
      ></span>

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

      <button disabled={status === "loading" || status === "success"}>
        Get in touch
      </button>

      {submitText && (
        <span
          className={cn(
            "mx-auto text-center text-sm font-semibold text-muted-foreground",
            status === "success" && "text-green-500/70",
            status === "error" && "text-red-500/70",
          )}
        >
          {submitText}
        </span>
      )}
    </form>
  );
}
