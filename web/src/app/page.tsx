import Link from "next/link";
import { STAGES } from "@/lib/landing";
import StageCard from "@/components/StageCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">paste-jd</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          채용지원은 문서가 아니라 <span className="text-teal-600">파이프라인</span>입니다
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          당신이 해온 모든 것을 한 번 올리면, 회사마다 맞춤 이력서가 나옵니다.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/dashboard" className="rounded-lg bg-teal-600 px-5 py-3 font-medium text-white hover:bg-teal-700">데모 보기 (John Doe)</Link>
          <Link href="/cookbook" className="rounded-lg border border-black/10 px-5 py-3 font-medium hover:bg-neutral-100 dark:border-white/15 dark:hover:bg-neutral-800">어떻게 동작하나</Link>
        </div>
      </section>

      {/* 3단 파이프라인 — 데이터를 map으로 반복 렌더 */}
      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {STAGES.map((stage) => (
          <StageCard key={stage.key} stage={stage} />
        ))}
      </section>
    </main>
  );
}