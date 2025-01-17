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
      }, 2000);
    }
  };

  return (
    <form
      className="contact-form py-6"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <div
        className={cn(
          "absolute right-0 top-0 size-2 animate-bounce rounded-full bg-accent",
          "overflow-hidden transition-all duration-300",
          "flex items-center justify-center",
          status === "success" &&
            "animation-pause size-5 w-60 bg-green-500/20 max-sm:w-52",
          status === "error" &&
            "animation-pause size-5 w-40 bg-red-500/20 max-sm:w-36",
        )}
      >
        {submitText && (
          <span
            className={cn(
              "absolute w-full text-center font-mono font-semibold",
              "text-nowrap text-sm max-sm:text-xs",
              "opacity-0 transition",
              status === "success" && "text-green-500 opacity-100",
              status === "error" && "text-red-500 opacity-100",
            )}
          >
            {submitText}
          </span>
        )}
      </div>

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

      <button disabled={!!status} className="relative">
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
