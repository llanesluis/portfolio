import { useEffect, useState, type ComponentProps } from "react";
import { cn } from "../../lib/utils";
import { Close } from "../icons/Close";

const THEME_TOAST_KEY = "themeToastDismissed";
const THEME_TOAST_TIMEOUT = 5000;

export function ThemeToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const themeToastDismissed = localStorage.getItem(THEME_TOAST_KEY);
    themeToastDismissed !== "true";

    let timer: number;
    if (!themeToastDismissed) {
      timer = setTimeout(() => {
        setShow(true);
      }, THEME_TOAST_TIMEOUT);
    }

    return () => clearTimeout(timer);
  }, [show]);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("themeToastDismissed", "true");
  };

  return (
    <div
      className={cn(
        "fixed right-6 top-[84vh] z-10 max-w-[11.5rem] rounded-xl border-2 border-accent/40 bg-muted/40 p-4 font-mono backdrop-blur transition-all duration-300 ease-in-out",
        show ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <button
        onClick={handleClose}
        className="group/button absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full border border-accent/40 bg-muted/60 p-1 backdrop-blur-lg transition-all hover:bg-muted"
      >
        <Close className="size-3 text-muted-foreground transition-all group-hover/button:scale-110 group-hover/button:text-foreground" />
      </button>

      <span className="text-balance text-sm text-muted-foreground">
        Press{" "}
        <Shortcut>
          <LeftArrow className="size-3" />
        </Shortcut>{" "}
        and{" "}
        <Shortcut>
          <RightArrow className="size-3" />
        </Shortcut>{" "}
        to change the accent color :p
      </span>
    </div>
  );
}

function Shortcut({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="mx-0.5 inline-flex h-fit content-center rounded-sm border border-accent/50 bg-muted/50 px-1 py-0.5 text-sm leading-none text-accent ring-2 ring-accent/30">
      {children}
    </kbd>
  );
}

function LeftArrow({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={cn("inline-flex size-4", className)}
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function RightArrow({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={cn("inline-flex size-4", className)}
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
