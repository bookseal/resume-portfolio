---
name: apply
description: >-
  Paste a job description and this runs the repo's pipeline to produce a resume and cover
  letter as .docx. JD save → load assets → draft md → build docx (auto hyperlinks, one-page
  check) → hand off. Trigger when the user pastes a JD and says "apply to this / make me a
  resume / /apply". It does NOT auto-generate application-form questions (product reviews,
  1000-char experience prompts) — only when the user asks separately.
---

# Job-application pipeline

This repo is a **resume / cover-letter / portfolio generator**. Pass the raw material
through a JD (the function) to produce a targeted application. Follow the order, and
honor the **judgment rules** at each step — learned from 7 real applications; skip them
and you repeat the same mistakes.

**Output language follows the JD.** Korean JD → write the resume/cover letter in Korean;
English JD → English. This skill's instructions are in English, but the documents match
the posting's language.

## 0. Check the input

The user **pastes the JD text** into chat. If they didn't, ask for it.
Pull the **company, role, and posting number/URL** from the JD. If unclear, ask.
Identifier: `<company>_<role-short>` or `<company>_<posting-number>_<role>`, consistent
with the existing `02_function/*_JD_*.md` naming.

## 1. Preserve the JD verbatim

Save to `02_function/<company>_JD_<id>.md`. **Do not summarize the original** — the exact
words the company used are the keywords you'll echo back in the cover letter. Format:

```markdown
# <role title>

**URL:** <posting URL>

## 직무 상세 (Job details)
<the full original, quoted as-is — keep it in the JD's language>

## Requirements (extracted from the original)
| Type | Item |   <- required / preferred / qualifications as a table

## Notes for later
- <what makes this JD distinct, the angle to aim at, cautions>
```

## 2. Load assets (required before drafting)

Read these first:
- `01_input/제출이력.md` — where you've applied, with what narrative; reusable assets; open items
- `02_function/04_자산_인벤토리.md` — every piece of evidence you can draw on
- **the 2–3 most recent submissions** (`03_output/submitted/<date>_*/이력서*.md`, `자기소개서*.md`) — the starting point for reusable sentences

Career bullets are facts and reusable, but **the headline, summary, and skill ordering are
a function of the company** — rewrite them.

## 3. Write the resume md → `03_output/drafts/<id>/GichanLee_Resume_<id>_<YYYYMMDD_HHMM>.md`

**Output filenames are English, using "GichanLee"** — so foreign-company submissions need no renaming.
`GichanLee_Resume_<id>_<timestamp>.md` and `GichanLee_CoverLetter_<id>_<timestamp>.md`.
(The `_YYYYMMDD_HHMM` at the end is the **creation time**, `date "+%Y%m%d_%H%M"`.)

**Rules (all of them):**
- **Summary maps 1:1 to the JD's required skills.** The 3–4 summary bullets must line up
  with the required competencies. Reviewers read the summary next to the posting. Don't put
  a *preferred* item on top (it reads as if you missed a required one).
- **The headline is for THIS JD.** No other company's role name (FDE, Solution Engineer…).
- **Project placement follows the role.** Experience-heavy role → lead with experience;
  **internship / role that doesn't weigh experience → put projects above experience**
  (they ask *what can you build*, not *what have you done*).
- **Check how each asset maps to THIS JD.** The same project gets a different emphasis per
  role (e.g. llm-app-lab reads as infra for SRE, an eval harness for an agent role, UI/UX for an internship).

## 4. Write the cover letter md → same folder, `GichanLee_CoverLetter_<id>_<timestamp>.md`

- **Sections 1–3 (what you did) can be reused from a recent letter. Sections 4–5 (why THIS
  company) are rewritten from scratch.**
- Quote a sentence the JD wrote about itself and echo it back (their self-image = "this person understood us").
- The last section is the **honest section**: name a weakness (years, missing experience,
  breadth of a stack) **first**. Hidden, it surfaces in 30 seconds of an interview and you're
  "inflating"; stated first, you're "self-aware."
- For roles where you look overqualified (internships), defend "why this role" pre-emptively.

## 5. Verify facts (after drafting, before building)

- `grep -i "upstage\|solar\|cognition\|<previous companies>"` for **leftover other-company names** → neutralize.
- Don't write a stack you can't show. JDs often void offers for false claims. When unsure,
  grep `gh repo list bookseal` / your project repos (`~/workspace/`) for evidence.
  (e.g. don't call Munhaepang a Next.js project — it's HTML. Use the verified stack, React+Vite.)
- Bring live links (`status.bit-habit.com`, `infra.bit-habit.com`, each project) to the front —
  verifiable evidence beats prose.

## 6. Build the docx (go all the way here)

```bash
python3 02_function/tools/md2docx_template.py 03_output/drafts/<id>/GichanLee_Resume_….md
python3 02_function/tools/md2docx_template.py 03_output/drafts/<id>/GichanLee_CoverLetter_….md
```

- Template, hyperlinks, and formatting are **automatic** (a filename containing "자기소개서"
  or "cover" auto-selects the cover-letter template). URLs written as plain text
  (`bit-habit.com`) become hyperlinks automatically.
- Read the build's **`length: ~N lines … OK/OVER`** line. **OVER means it spills past one
  page** — compress the 3-line bullets it points at first. **Lines, not paragraphs, are the
  budget** (one page ≈ 55 lines). Order to cut: ① compress 3-line bullets → ② JD-irrelevant
  experience (old / off-field) → ③ collapse summary bullets to one line each →
  **do not delete the skills section** (ATS / recruiter keyword filters need it).

## 7. Hand off (the user finishes)

After building, give the user:
- **The portfolio link**: `https://bit-habit.com/?title=<url-encoded role>` (add
  `&focus=infra|solutions|edu` if useful). The posting's exact title → the hero shows that title.
- **The one-page checklist**: open in Word, confirm one page, **save as PDF** (they do this).
- **Anything that needs a fact-check** (flag anything you had to guess).

## 8. After submission (when the user says "submitted")

1. `03_output/drafts/<id>` → `03_output/submitted/<YYYY-MM-DD>_<id>/` (git mv). Remove Word lock files `~$*`.
2. If the user hand-tuned the submitted docx, ask whether to **promote it as the template**
   (formatting-only change → copy into `02_function/templates/`; structural change → also reflect it in the md syntax).
3. Write `SUBMITTED.md`: company / role / posting number / **submission time (actual send time)** /
   result / stages + positioning axis + JD-required↔evidence mapping + reusable assets + open items.
4. Add a row to `03_output/submitted/INDEX.md`.
5. Update `01_input/제출이력.md`.

## Naming & paths

- Folder ids in English; submission folders `YYYY-MM-DD_company_role`.
- The `_YYYYMMDD_HHMM` at the end of a filename is the **creation time** (`date`). New version = new timestamp.
- **The md is the source of truth.** If you edited a sentence in Word, reflect it in the md.
  If you only changed formatting, don't rebuild (it would be lost).

## What this does not do

- **No auto-generated application-form questions.** Prompts like "product review / a
  1000-char experience answer" only when the user asks. (When asked: write only from real
  usage, and state honestly what you haven't evaluated. Document Parse / IE is still unevaluated.)
- PDF conversion and email sending are the user's to do (PDF from Word; they send the email).
