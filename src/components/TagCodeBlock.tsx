import { useState, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface TagCodeBlockProps {
  children: ReactNode;
  label: string;
  className?: string;
  expanded?: boolean;
  status?: "availableNow" | "working";
}

export default function TagCodeBlock({
  children,
  label,
  className,
  status,
  expanded = true,
}: TagCodeBlockProps) {
  const [isOpen, setIsOpen] = useState(expanded);

  return (
    <div
      className={cn(
        "relative isolate origin-top transition-all duration-75",
        "grid grid-rows-[auto_0fr_auto] content-start",
        isOpen && "grid-rows-[auto_1fr_auto]",
        className,
      )}
    >
      <div className={cn("relative", !isOpen && "bg-muted-foreground/10")}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "absolute -left-[.9em] h-full",
            "transition duration-75",
            isOpen ? "rotate-90" : "rotate-0",
          )}
        >
          <span className="sr-only">Toggle open and close code block</span>
          <Chevron className="text-muted-foreground/50 hover:text-muted-foreground" />
        </button>

        <TextMono text={"<"} className="text-muted-foreground/70" />
        <TextMono className="font-semibold text-accent" text={label} />
        {status && (
          <TextMono
            text={`[data-status]="${status}"`}
            className="ml-3 hidden text-foreground/80 transition-all md:inline-flex"
          />
        )}
        <TextMono text={">"} className="text-muted-foreground/70" />
      </div>

      <div
        className={cn(
          "border-l-2 border-muted-foreground/50 pl-8 text-base",
          "overflow-hidden",
          "hover:border-muted-foreground",
        )}
      >
        <div className="py-4 font-mono">{children}</div>
      </div>

      <div>
        <TextMono text={"</"} className="text-muted-foreground/70" />
        <TextMono className="font-semibold text-accent" text={label} />
        <TextMono text={">"} className="text-muted-foreground/70" />
      </div>
    </div>
  );
}

function TextMono({ text, className }: { text: string; className?: string }) {
  return <span className={cn("font-mono", className)}>{text}</span>;
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
