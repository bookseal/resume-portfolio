import type { Stage } from "@/lib/landing";

// props의 타입도 명시한다. { stage } 하나를 받는다.
export default function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm
                    dark:border-white/10 dark:bg-neutral-900">
      <span className="text-xs font-bold tracking-widest text-teal-600">
        {stage.label}
      </span>
      <h3 className="mt-1 text-lg font-semibold">{stage.title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        {stage.body}
      </p>
      <p className="mt-3 rounded-md bg-neutral-100 p-2 font-mono text-xs
                    text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
        {stage.example}
      </p>
    </div>
  );
}