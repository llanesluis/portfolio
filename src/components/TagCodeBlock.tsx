import { useState, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  label: string;
  className?: string;
}

export default function TagCodeBlock({ children, label }: SectionWrapperProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={cn(
        "relative isolate origin-top transition-all",
        "grid grid-rows-[auto_0fr_auto] content-start",
        isOpen && "grid-rows-[auto_1fr_auto]",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute -left-[22px] top-[6px]",
          "transition duration-75",
          isOpen ? "rotate-90" : "rotate-0",
        )}
      >
        <span className="sr-only">Toggle open and close code block</span>
        <Chevron className="text-muted-foreground/50 hover:text-muted-foreground" />
      </button>

      <div className={cn(!isOpen && "bg-muted-foreground/10")}>
        <TextMono text={"<"} className="text-3xl text-muted-foreground/70" />
        <TextMono className="text-3xl font-semibold text-accent" text={label} />
        <TextMono
          text={`[data-status]="availableForWork"`}
          className="ml-3 hidden text-3xl text-foreground/80 transition-all lg:inline-flex"
        />
        <TextMono text={">"} className="text-3xl text-muted-foreground/70" />
      </div>

      <div
        className={cn(
          "border-l-2 border-muted-foreground/50 pl-8",
          "overflow-hidden",
          "hover:border-muted-foreground",
        )}
      >
        <div className="py-6">{children}</div>
      </div>

      <div>
        <TextMono text={"</"} className="text-3xl text-muted-foreground/70" />
        <TextMono className="text-3xl font-semibold text-accent" text={label} />
        <TextMono text={">"} className="text-3xl text-muted-foreground/70" />
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
      width="24"
      height="24"
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
