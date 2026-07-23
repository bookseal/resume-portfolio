// landing pipeline 3 stack data
// in view(page.tsx), read this data and draw like the cards.

export type Stage = {
	key: string;	// "input" | "function" | "output" 
	label: string;
    title: string;
    body: string;
    example: string;
};

export const STAGES: Stage[] = [
 {
    key: "input",
    label: "INPUT",
    title: "당신이 해온 모든 것",
    body: "경력·프로젝트·과거 글을 한 번 정리해 올립니다. 지원마다 재사용됩니다.",
    example: "John Doe · ML Engineer · Acme AI, Globex, State University",
  },
  {
    key: "function",
    label: "FUNCTION",
    title: "회사별 Job Description",
    body: "지원하는 회사의 JD가 '함수'입니다. 같은 재료를 회사에 맞게 변환합니다.",
    example: "\"Senior Frontend @ 206525 — Next.js, TypeScript required\"",
  },
  {
    key: "output",
    label: "OUTPUT",
    title: "한 장짜리 맞춤 이력서",
    body: "회사에 딱 맞춘 resume.docx + coverletter.docx. 한 페이지, 재현 가능.",
    example: "resume_johndoe.docx · 55줄 예산 안에 맞춤",
  },



];


