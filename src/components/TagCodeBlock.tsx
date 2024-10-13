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
        "relative isolate transition duration-75",
        "before:absolute before:z-10 before:content-['']",
        "before:top-[32px] before:h-[calc(100%_-32px_-1.875rem)]",
        "before:border-[1.5px] before:border-l before:border-muted-foreground/50",
        "hover:before:border-muted-foreground",
        !isOpen && "rounded-lg bg-muted-foreground/10",
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
        <Chevron className="text-muted-foreground/50 hover:text-muted-foreground" />
      </button>

      <TextMono text={"<"} className="text-3xl text-muted-foreground/70" />
      <TextMono
        className="text-3xl font-semibold text-accent"
        text={label}
      ></TextMono>
      <TextMono text={">"} className="text-3xl text-muted-foreground/70" />

      <div
        className={cn(
          "overflow-hidden transition",
          isOpen ? "py-8 pl-8" : "h-0 opacity-0",
        )}
      >
        {children}
      </div>

      <TextMono text={"</"} className="text-3xl text-muted-foreground/70" />
      <TextMono
        className="text-3xl font-semibold text-accent"
        text={label}
      ></TextMono>
      <TextMono text={">"} className="text-3xl text-muted-foreground/70" />
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
