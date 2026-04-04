// ─────────────────────────────────────────────────────────────────────────────
// DraftLab — Learning Zone content
//
// Segment format for annotated extracts:
//   { t: 'plain text' }
//   { t: 'highlighted text', a: 'annotationId' }
//
// Annotation colors (must be full strings — no runtime interpolation):
//   yellow | emerald | blue | rose | violet | orange
// ─────────────────────────────────────────────────────────────────────────────

import { lessons as phdLanguageLessons } from './lessons/phd-language';
import { lessons as academicVoiceLessons } from './lessons/academic-voice';
import { lessons as literatureReviewLessons } from './lessons/literature-review';
import { lessons as paragraphStructureLessons } from './lessons/paragraph-structure';
import { lessons as researchQuestionsLessons } from './lessons/research-questions';
import { lessons as introductionChapterLessons } from './lessons/introduction-chapter';
import { lessons as methodologyChapterLessons } from './lessons/methodology-chapter';

export const TOPICS = [

  // ── TOPIC 1 ─────────────────────────────────────────────────────────────────
  {
    slug: 'phd-language',
    title: 'The Language of PhD Writing',
    description: 'Master the vocabulary, grammar, and register that marks doctoral writing across every discipline.',
    icon: 'PenLine',
    color: 'yellow',
    lessons: phdLanguageLessons,
  },

  // ── TOPIC 2 ─────────────────────────────────────────────────────────────────
  {
    slug: 'academic-voice',
    title: 'Your Academic Voice',
    description: 'Develop a confident, authoritative writing voice — one that positions you clearly within scholarly debates.',
    icon: 'Mic',
    color: 'violet',
    lessons: academicVoiceLessons,
  },

  // ── TOPIC 3 ─────────────────────────────────────────────────────────────────
  {
    slug: 'literature-review',
    title: 'Writing the Literature Review',
    description: 'Move from summary to genuine synthesis — structuring the field, locating the gap, and entering the conversation with authority.',
    icon: 'BookMarked',
    color: 'emerald',
    lessons: literatureReviewLessons,
  },

  // ── TOPIC 4 ─────────────────────────────────────────────────────────────────
  {
    slug: 'paragraph-structure',
    title: 'Sentence & Paragraph Structure',
    description: 'Build paragraphs that develop a single idea clearly, with coherent movement from claim to evidence to analysis.',
    icon: 'AlignLeft',
    color: 'blue',
    lessons: paragraphStructureLessons,
  },

  // ── TOPIC 5 ─────────────────────────────────────────────────────────────────
  {
    slug: 'research-questions',
    title: 'Research Questions & Thesis Statements',
    description: 'Craft focused, arguable research questions and thesis statements that give your writing direction and purpose.',
    icon: 'HelpCircle',
    color: 'orange',
    lessons: researchQuestionsLessons,
  },

  // ── TOPIC 6 ─────────────────────────────────────────────────────────────────
  {
    slug: 'introduction-chapter',
    title: 'Writing the Introduction Chapter',
    description: 'Open your thesis with clarity and authority — establishing territory, identifying the gap, and announcing your contribution.',
    icon: 'DoorOpen',
    color: 'yellow',
    lessons: introductionChapterLessons,
  },

  // ── TOPIC 7 ─────────────────────────────────────────────────────────────────
  {
    slug: 'methodology-chapter',
    title: 'Writing the Methodology Chapter',
    description: 'Justify your research design with confidence — describing your approach, methods, and the philosophical underpinnings behind them.',
    icon: 'FlaskConical',
    color: 'blue',
    lessons: methodologyChapterLessons,
  },

  // ── TOPIC 8 ─────────────────────────────────────────────────────────────────
  {
    slug: 'results-analysis',
    title: 'Writing Results & Analysis',
    description: 'Present your findings with precision — separating description from interpretation, and using data to build your argument.',
    icon: 'BarChart2',
    color: 'emerald',
    lessons: [
      {
        slug: 'description-vs-interpretation',
        title: 'Description vs Interpretation',
        durationMins: 10,
        intro: 'One of the most common weaknesses in results chapters is conflating what the data shows with what it means. Learning to separate these two moves — and to signal clearly which you are doing — is fundamental to analytic writing.',
        extracts: [],
        activityPrompt: 'Take two paragraphs from your results or findings chapter. Label every sentence D (describing what the data shows) or I (interpreting what it means). A strong results section needs both, clearly signalled. If any paragraph runs three or more sentences of interpretation without anchoring back in the data, revise. If any paragraph describes data for five sentences without a moment of interpretation, ask what it is for.',
        keyTakeaways: [
          'Description answers "what?" — it reports what the data shows. Interpretation answers "so what?" — it states what the data means. Keep them analytically distinct.',
          'Signal interpretation explicitly: "This suggests...", "The pattern indicates...", "A plausible explanation is..." — these phrases tell the reader you are moving from evidence to inference.',
          'The expected ratio of description to interpretation varies by discipline: scientific results chapters weight description heavily; social science analysis chapters typically integrate both throughout.',
        ],
      },
      {
        slug: 'referring-to-figures',
        title: 'Referring to Figures and Tables',
        durationMins: 8,
        intro: 'A figure or table should not speak for itself — you must direct the reader to what matters. The language for introducing and commenting on visual data has its own conventions, and using them correctly signals expertise.',
        extracts: [],
        activityPrompt: 'Select one figure or table from your thesis. Write three sentences for it: (1) a directing sentence that tells the reader where to look and names the key pattern ("Figure 3 shows a marked decline in X between 2010 and 2020..."); (2) a description of one or two specific data points that evidence the pattern; (3) a sentence interpreting what this means for your argument. Check that your sentences don\'t simply repeat the figure caption.',
        keyTakeaways: [
          'Never present a figure or table without accompanying prose — data displays don\'t interpret themselves, and leaving them to stand alone is a missed argumentative opportunity.',
          'Direct the reader actively: "As Figure 3 shows..." or "Table 2 reveals a striking divergence..." — don\'t just say "see Figure 3" and move on.',
          'Be selective: discuss the data points or patterns that matter for your argument, not every cell in the table.',
        ],
      },
      {
        slug: 'organising-findings',
        title: 'Organising Your Findings',
        durationMins: 10,
        intro: 'How you sequence your findings shapes the argument your results chapter makes. Whether you organise by theme, research question, chronology, or method depends on your discipline and data — but the choice must be deliberate.',
        extracts: [],
        activityPrompt: 'Map your findings to your research questions or analytical themes on paper. Draw a line from each major finding to the research question or theme it addresses. Are there findings that don\'t connect to any question? Are there questions that no finding addresses? Use this map to diagnose structural problems before they become drafting problems — it is much easier to reorganise at the mapping stage than at the revision stage.',
        keyTakeaways: [
          'Organise findings by research question, theme, or analytical category — not by the order in which data was collected, which is a process logic, not an argument logic.',
          'Every major finding should link back to your research questions — if it doesn\'t, question whether it belongs in the main chapter or in an appendix.',
          'Use section headings in your findings chapter to signal the organising logic: thematic headings tell the reader what analytical work each section does, not just what topic it covers.',
        ],
      },
      {
        slug: 'unexpected-results',
        title: 'Addressing Unexpected or Null Results',
        durationMins: 8,
        intro: 'Results that don\'t confirm your hypothesis are not failures — they are findings. The way you write about unexpected or null results reveals the intellectual maturity of your analysis.',
        extracts: [],
        activityPrompt: 'Identify one finding from your data that surprised you or ran counter to what you expected. Write a paragraph that: (1) states the finding clearly; (2) explains why it was unexpected given the existing literature or your hypotheses; (3) offers two possible explanations for it; (4) states which you find more plausible and why. Unexpected findings often produce the most intellectually rich analytical writing.',
        keyTakeaways: [
          'Null results (finding no relationship) and unexpected results are findings — they must be reported and discussed, not minimised or buried.',
          'Unexpected results often generate the most interesting discussion: they may reveal assumptions baked into prior research, suggest boundary conditions on existing theories, or point toward new questions.',
          'Examiners are not looking for results that confirm everything — they are looking for a researcher who can reason carefully and honestly about what the data actually shows.',
        ],
      },
    ],
  },

  // ── TOPIC 9 ─────────────────────────────────────────────────────────────────
  {
    slug: 'discussion-chapter',
    title: 'Writing the Discussion Chapter',
    description: 'Interpret your findings in light of the literature — making claims, managing complexity, and articulating your contribution.',
    icon: 'MessageCircle',
    color: 'violet',
    lessons: [
      {
        slug: 'returning-to-rqs',
        title: 'Returning to Your Research Questions',
        durationMins: 10,
        intro: 'The discussion chapter must be anchored to the research questions you posed at the outset. Revisiting them explicitly — not just implicitly — gives your discussion structural clarity and prevents drift.',
        extracts: [],
        activityPrompt: 'Write one paragraph per research question using this structure: restate the question explicitly ("The first research question asked..."), then provide a direct answer based on your findings ("This thesis has shown that..."), then explain what this answer contributes beyond a simple statement of results. Use this as scaffolding — you can refine the phrasing later, but the explicit anchoring must remain visible in the final draft.',
        keyTakeaways: [
          'The discussion should return to each research question explicitly, not just implicitly — examiners use this as a check on whether the thesis actually answered what it set out to answer.',
          'Restating each research question before answering it gives the discussion chapter a clear structure and makes it easy for the reader (and examiner) to follow your argument.',
          'Each sub-question answer should build cumulatively: the answers to your sub-questions, taken together, should constitute your answer to the central research question.',
        ],
      },
      {
        slug: 'interpreting-in-light-of-lit',
        title: 'Interpreting Findings in Light of the Literature',
        durationMins: 12,
        intro: 'Your findings are only meaningful in relation to what already exists in the field. The discussion is where you bring your results into conversation with the literature — confirming, challenging, extending, or complicating prior work.',
        extracts: [],
        activityPrompt: 'For each major finding, identify at least one source from your literature review that it confirms, extends, or challenges. Write a sentence in one of these patterns: "[Finding] is consistent with [Source]\'s argument that [X], and extends it by showing [Y]" or "[Finding] complicates [Source]\'s claim that [X] by demonstrating that [Y] under conditions [Z]." Avoid simply saying your findings "support" the literature — be specific about what, precisely, aligns or diverges and why it matters.',
        keyTakeaways: [
          'The discussion is where your findings and the literature meet — each finding should be interpreted in explicit relation to what the field already knows.',
          'Confirmation of prior literature is worth noting but not your most important move; divergence, extension, qualification, and complication are intellectually richer and more memorable.',
          '"My findings support X" without specifics is not adequate discussion — say what, precisely, your findings add to, qualify, or challenge in X.',
        ],
      },
      {
        slug: 'claims-and-qualifications',
        title: 'Making Claims and Managing Qualifications',
        durationMins: 10,
        intro: 'The discussion is where you make your boldest claims — but also where you must manage them most carefully. The balance between confidence and appropriate qualification is the hallmark of strong doctoral discussion writing.',
        extracts: [],
        activityPrompt: 'Scan your discussion for sentences beginning with "This proves...", "This shows that...", or "Clearly...". For each, ask: does my evidence actually support a claim this strong? If not, replace with appropriately hedged language ("This suggests...", "The evidence is consistent with...", "A plausible interpretation is..."). Then check the opposite direction: are there findings you have under-claimed out of excessive caution? Strengthen those too.',
        keyTakeaways: [
          'Claims should be proportionate to the evidence: strong, well-designed studies can support stronger claims; studies with recognised limitations require more hedging.',
          'Over-claiming is as problematic as under-claiming — examiners will push back on assertions that go beyond what the data can support.',
          'Hedging vocabulary signals epistemic precision: "suggests", "indicates", "is consistent with", "appears to", "may" all distinguish different degrees of evidential support.',
        ],
      },
      {
        slug: 'articulating-contribution',
        title: 'Articulating Your Contribution',
        durationMins: 10,
        intro: 'The "so what?" of your thesis must be stated explicitly, not left for the reader to infer. Articulating your contribution clearly — to knowledge, theory, methodology, or practice — is one of the most important things your discussion chapter does.',
        extracts: [],
        activityPrompt: 'Write three sentences that together articulate your contribution: (1) what your thesis has shown that was not known before; (2) what this means for one of the theoretical frameworks or debates you engaged with; (3) what it means for how future researchers should approach this topic. Read all three back and ask: could these sentences have been written before this thesis existed? If yes, the contribution is not yet specific enough.',
        keyTakeaways: [
          'The contribution to knowledge must be stated explicitly — examiners cannot be expected to infer it from the findings.',
          'Contributions can be empirical (new data, cases, or contexts), theoretical (new framework, concept, or critique), methodological (new approach or tool), or applied (implications for practice or policy).',
          '"This thesis contributes to knowledge by..." is a legitimate and necessary sentence in doctoral writing — intellectual modesty should not prevent you from stating clearly what you have added.',
        ],
      },
    ],
  },

  // ── TOPIC 10 ────────────────────────────────────────────────────────────────
  {
    slug: 'conclusion-chapter',
    title: 'Writing the Conclusion Chapter',
    description: 'Close your thesis with purpose — summarising your contribution, drawing out implications, and pointing to future work.',
    icon: 'Flag',
    color: 'rose',
    lessons: [
      {
        slug: 'summarising-without-repeating',
        title: 'Summarising Without Simply Repeating',
        durationMins: 8,
        intro: 'A conclusion that restates the introduction is a missed opportunity. The conclusion should synthesise — showing how your findings, taken together, answer your central research question in a way that no single chapter could.',
        extracts: [],
        activityPrompt: 'Write the opening paragraph of your conclusion using this structure: one sentence restating your central research question; one sentence stating the overall answer your thesis has produced; one sentence articulating what this reveals about the field that was not visible before. If the paragraph reads like a repeat of your introduction, you are summarising instead of synthesising. The conclusion should feel like an arrival at a higher vantage point — not a return to the start.',
        keyTakeaways: [
          'A conclusion that simply repeats the introduction adds no intellectual value — it restates the problem rather than delivering the promised resolution.',
          'Synthesis in the conclusion means showing how the parts of the thesis, taken together, produce an understanding that no individual chapter achieved alone.',
          'The conclusion should feel like an arrival: a reader who has followed the full argument should find that the conclusion articulates something they now understand that they couldn\'t have before reading.',
        ],
      },
      {
        slug: 'implications',
        title: 'Implications for Theory, Practice, and Policy',
        durationMins: 10,
        intro: 'Implications extend your findings beyond the immediate study. They answer "what does this mean for the field?" — and for some disciplines, "what should practitioners, policymakers, or future researchers do differently as a result?"',
        extracts: [],
        activityPrompt: 'Write one implication each for: (1) theory — what does your thesis suggest about an existing theoretical framework, concept, or debate in your field? (2) methodology — what does your approach suggest about how future researchers might study this topic? (3) practice or policy — if your discipline has applied dimensions, what should practitioners or policymakers take from your findings? Each implication should follow logically from a specific finding, not from the topic in general.',
        keyTakeaways: [
          'Implications answer the question "so what does this mean for anyone who wasn\'t part of this study?" — they extend findings outward.',
          'Not all studies have direct policy implications, but all should have theoretical and methodological ones.',
          'Implications should be grounded in specific findings, not generic statements about the importance of the topic area.',
        ],
      },
      {
        slug: 'future-research',
        title: 'Directions for Future Research',
        durationMins: 8,
        intro: 'Identifying future research directions is not an admission of incompleteness — it is a mark of scholarly self-awareness. The best future directions follow logically from what your thesis found and what it couldn\'t address.',
        extracts: [],
        activityPrompt: 'Identify three directions for future research that follow directly from your thesis. For each, state: (1) the specific question it would address; (2) why your thesis creates the need or the opening for it (either by generating a new question, or by revealing a limitation that constrains your own conclusions). Avoid generic recommendations like "further research is needed" — name the question, the context, and the reason it matters now.',
        keyTakeaways: [
          'Future research directions should follow logically from your own findings and limitations — they should be questions that your thesis has generated, not arbitrary extensions of your topic.',
          'The most compelling future directions arise directly from your limitations: "Because this study was limited to X, future work should examine Y in order to Z."',
          'A strong future research section demonstrates that your thesis has generated new questions — this is evidence of a genuine contribution to knowledge.',
        ],
      },
    ],
  },

  // ── TOPIC 11 ────────────────────────────────────────────────────────────────
  {
    slug: 'referencing',
    title: 'Referencing & Academic Integrity',
    description: 'Cite with precision and purpose — understanding when, how, and why to reference, across major citation styles.',
    icon: 'Quote',
    color: 'orange',
    lessons: [
      {
        slug: 'when-to-cite',
        title: 'When — and When Not — to Cite',
        durationMins: 8,
        intro: 'Knowing when to cite is as important as knowing how. Over-citing buries your own voice; under-citing raises questions about originality. Understanding the difference between common knowledge, disciplinary convention, and claims requiring attribution is key.',
        extracts: [],
        activityPrompt: 'Take one page of your draft and examine every uncited claim. For each, ask: is this common knowledge in my field, or am I asserting something that requires evidence or attribution? Mark any claim that needs a citation with [REF]. Then review your cited material: are any citations attached to points that are, in fact, common knowledge in your discipline? Remove unnecessary citations. The goal is precision — cite when a specific claim requires evidencing, not as a general gesture toward scholarship.',
        keyTakeaways: [
          'Cite when making specific claims about what research shows, what data reveals, or what a particular scholar argues — not for general background knowledge your discipline assumes.',
          'Over-citation buries your own voice and makes the writing feel like a list of sources; under-citation invites examiners to question what is your original thought.',
          'Common disciplinary knowledge — established facts, standard methods, foundational theories that everyone in the field knows — generally does not require citation in doctoral writing.',
        ],
      },
      {
        slug: 'quote-paraphrase-summary',
        title: 'Direct Quotation, Paraphrase, and Summary',
        durationMins: 10,
        intro: 'These three tools are not interchangeable. Each has a different effect on your argument and your relationship to the source. Most doctoral writing favours paraphrase — but knowing when a direct quotation is indispensable is itself a skill.',
        extracts: [],
        activityPrompt: 'Take a direct quotation from your draft. Now write a paraphrase of the same passage in your own words — close the source and write from memory. Compare the two versions: does the paraphrase capture the full meaning? Does it preserve the nuance without mirroring the structure? Finally, ask: given this comparison, is the direct quotation actually necessary, or does the paraphrase do the job as well or better? In most doctoral writing, it does.',
        keyTakeaways: [
          'Direct quotation is appropriate when: the source\'s exact phrasing is the object of analysis, the language is so distinctive that paraphrase would lose it, or a legal or policy text requires verbatim accuracy.',
          'Paraphrase is the default register of doctoral writing: it keeps the writing in your voice, demonstrates genuine understanding, and integrates more naturally with your argument.',
          'Summary is for handling a source\'s overall contribution efficiently — one or two sentences — when the detail of the argument is less important than its general position.',
        ],
      },
      {
        slug: 'avoiding-plagiarism',
        title: 'Avoiding Plagiarism and Patch-Writing',
        durationMins: 10,
        intro: 'Patch-writing — substituting synonyms or rearranging phrases without genuine restatement — is the most common form of unintentional plagiarism at doctoral level. Understanding what genuine paraphrase looks like is the most effective prevention.',
        extracts: [],
        activityPrompt: 'Select a dense paragraph from a source you are using. Read it carefully, then close it. Without looking back, write a paraphrase of the core idea from memory. Now reopen the source and compare the two: did you unconsciously mirror the sentence structure or word order? If yes, revise until the phrasing is genuinely yours. Genuine paraphrase requires comprehension, not just substitution — if you cannot write it from memory, you may not yet fully understand it.',
        keyTakeaways: [
          'Patch-writing — replacing words with synonyms without changing sentence structure — is a form of plagiarism even when a citation is present.',
          'Genuine paraphrase requires closing the source, understanding the idea, and writing it in your own words and your own structure.',
          'The risk of unintentional plagiarism rises when you are writing quickly under pressure — build in a checking habit especially when working with dense theoretical sources.',
        ],
      },
      {
        slug: 'citation-styles',
        title: 'Citation Styles: APA, Harvard, Chicago, and Beyond',
        durationMins: 8,
        intro: 'Citation styles are not arbitrary — they reflect disciplinary cultures of attribution. Understanding not just how to format a reference, but why different disciplines organise attribution differently, is part of becoming a fluent academic writer.',
        extracts: [],
        activityPrompt: 'Take one source and write its full reference in the citation style required by your discipline. Then look up the same source in a second style (if you use APA, try Chicago; if you use Chicago, try APA). Notice the structural differences: where does the date appear? Is the system author-date or footnote-bibliography? What counts as a "complete" reference? Understanding the logic behind the differences helps you remember — and apply — the rules more reliably.',
        keyTakeaways: [
          'APA and Harvard (author-date) are standard in social sciences; Chicago (notes-bibliography) in humanities; Vancouver (numbered) in medical and life sciences.',
          'Citation style reflects disciplinary culture: author-date systems foreground who said it and when; footnote systems keep the text cleaner and suit disciplines where prose flow matters most.',
          'Use a reference manager (Zotero, Mendeley, EndNote) to handle formatting, but always verify the output — these tools make errors, especially with unusual source types.',
        ],
      },
    ],
  },

  // ── TOPIC 12 ────────────────────────────────────────────────────────────────
  {
    slug: 'critical-reading',
    title: 'Critical Reading for Writers',
    description: 'Read academic texts analytically — evaluating arguments, identifying assumptions, and translating close reading into stronger writing.',
    icon: 'ScanText',
    color: 'blue',
    lessons: [
      {
        slug: 'reading-for-argument',
        title: 'Reading for Argument, Not Just Information',
        durationMins: 10,
        intro: 'Most readers ask "what does this text say?" A critical reader asks "what is this text arguing, and how?" The shift from information-gathering to argument-tracking is what separates a strong literature review from a weak one.',
        extracts: [],
        activityPrompt: 'Choose one academic article in your field. Read only the abstract, introduction, and conclusion. Answer these questions in writing: What is the central claim? What evidence does the author say supports it? What does the author claim as their contribution? Now read the full article and check: does the paper deliver what it promised? Does the evidence in the body actually support the claim in the conclusion? This argument-first approach to reading is faster and more analytically productive than reading linearly.',
        keyTakeaways: [
          'Reading for argument means asking "what is this text trying to persuade me of?" before "what information does it contain?" — this shifts you from passive reception to active evaluation.',
          'The abstract and conclusion are the most efficient entry points: they frame the claim and summarise findings. Read them first, then read the body as evidence for those claims.',
          'Annotate as you read: mark the main claim, key supporting moves, and any point where you disagree, find the reasoning weak, or want to push back.',
        ],
      },
      {
        slug: 'evaluating-sources',
        title: 'Evaluating Sources and Evidence',
        durationMins: 10,
        intro: 'Not all published research is equally reliable, relevant, or rigorous. Developing systematic criteria for evaluating sources — in terms of methodology, theoretical framework, and disciplinary standing — is a fundamental doctoral skill.',
        extracts: [],
        activityPrompt: 'Evaluate one key source from your literature review using three criteria: (1) Rigour — is the methodology clearly described and appropriate to the research question? (2) Relevance — how directly does it address your specific research question and context, rather than the general topic area? (3) Recency — is it current enough given your field\'s pace of development, or is it a foundational text whose value is independent of date? Write one sentence of evaluation for each criterion.',
        keyTakeaways: [
          'Not all published research is equally reliable — peer review filters out some poor scholarship but not all. Evaluate on rigour, relevance, recency, and venue.',
          'Evaluate methodological rigour specifically: is the method described clearly enough to assess? Is it appropriate to the question? Are limitations acknowledged?',
          'Grey literature (policy reports, think-tank documents, journalism) can be valuable but requires explicit evaluation of the author\'s authority, purpose, and potential bias.',
        ],
      },
      {
        slug: 'identifying-assumptions',
        title: 'Identifying Theoretical Assumptions',
        durationMins: 10,
        intro: 'Every academic text rests on assumptions — about what counts as evidence, what explanatory frameworks are valid, and what questions are worth asking. Making these assumptions visible is what allows you to engage critically rather than just receptively.',
        extracts: [],
        activityPrompt: 'Choose a theoretical source that is central to your thesis. Ask three questions of it: (1) What does this text take for granted about how the social, natural, or cultural world works? (2) Whose perspective or experience does it centre — and whose does it marginalise or exclude? (3) What questions does its framework make it difficult or impossible to ask? Answering these questions is not a way of dismissing the source — it is a way of using it more precisely and with greater intellectual integrity.',
        keyTakeaways: [
          'Every theoretical text has a standpoint — an implicit position on what counts as real, what counts as valid evidence, and whose experience is treated as generalisable.',
          'Identifying assumptions is not a way of dismissing a source but of using it with precision: understanding what it can and cannot account for.',
          'Engaging critically with a foundational text in your field — showing what it illuminates and what it obscures — is one of the most sophisticated moves in doctoral writing.',
        ],
      },
      {
        slug: 'reading-into-writing',
        title: 'Translating Critical Reading into Writing',
        durationMins: 8,
        intro: 'There is a gap between reading a text critically and writing about it critically. Bridging this gap — keeping your own analytic voice present when working with sources — is where many doctoral writers struggle.',
        extracts: [],
        activityPrompt: 'Take a source you have read critically and write a paragraph about it in your literature review draft. Read back what you have written. Is your own analytic voice present, or have you drifted into summary? Test it: remove all in-text citations. Does the paragraph still have a coherent argument? If it collapses into a series of disconnected observations without citations, your voice is absent. Rewrite starting from your own claim, then bring the source in as evidence.',
        keyTakeaways: [
          'The shift from reading critically to writing critically requires holding your own argument in view while you engage with sources — the source is evidence for your claim, not the driver of your paragraph.',
          'Your analytic voice is present when you are doing something with a source: evaluating its method, comparing it to another, applying it to your context, or qualifying its reach.',
          'If your paragraphs only make sense in the presence of citations — if there is no independent argumentative logic — the writing is driven by the literature rather than by your thesis.',
        ],
      },
    ],
  },

  // ── TOPIC 13 ────────────────────────────────────────────────────────────────
  {
    slug: 'editing-revising',
    title: 'Editing & Revising Your Draft',
    description: 'Move from first draft to polished text — editing for structure, clarity, concision, and correctness.',
    icon: 'PenSquare',
    color: 'yellow',
    lessons: [
      {
        slug: 'macro-vs-micro-editing',
        title: 'Macro vs Micro Editing',
        durationMins: 8,
        intro: 'Macro editing addresses structure and argument; micro editing addresses sentence-level clarity and correctness. Working at the wrong level — correcting commas in a chapter that needs restructuring — is one of the most common revision mistakes.',
        extracts: [],
        activityPrompt: 'Before opening a chapter to edit, write a one-sentence summary of what each paragraph does — not what it is about, but what argumentative work it performs. Review the sequence: does each paragraph advance the argument, or does it stall, repeat, or digress? Identify three structural changes (reordering, merging, splitting, or cutting paragraphs) before touching a single sentence. Only after making structural changes should you move to sentence-level work.',
        keyTakeaways: [
          'Macro editing (structure, argument, sequence) must come before micro editing (sentences, word choice, grammar) — polishing the prose in a badly structured chapter wastes effort.',
          'Macro editing questions: Does each paragraph do one distinct job? Are they in the right order? Is there anything missing? Is anything repeated or redundant?',
          'Micro editing questions: Is this sentence as clear and direct as it can be? Is every word earning its place? Is the word choice precise?',
        ],
      },
      {
        slug: 'editing-for-clarity',
        title: 'Editing for Clarity and Concision',
        durationMins: 10,
        intro: 'Academic writing does not need to be long to be credible. Cutting unnecessary words, untangling complex sentences, and replacing vague abstractions with precise language consistently improves both readability and persuasive force.',
        extracts: [],
        activityPrompt: 'Take one paragraph and cut its word count by 20% without losing any meaning. Use these strategies: cut throat-clearing openers ("It is important to note that..."); remove redundant pairs ("basic and fundamental", "each and every"); replace nominalised phrases with verbs ("make an assessment of" → "assess", "carry out an investigation into" → "investigate"); delete anything you included for yourself rather than for the reader. Compare the two versions — is anything actually lost?',
        keyTakeaways: [
          'Every word should earn its place in academic prose — if a sentence means the same without a word or phrase, remove it.',
          'Nominalisation (converting verbs to nouns: "undertake an examination of" instead of "examine") is the most common source of unnecessary length and distance in doctoral writing.',
          'Throat-clearing openers ("It should be noted that...", "It is worth pointing out that...") almost never add meaning — they delay the sentence\'s actual content.',
        ],
      },
      {
        slug: 'common-errors',
        title: 'Common PhD Writing Errors',
        durationMins: 10,
        intro: 'Certain errors appear repeatedly in doctoral writing regardless of discipline: misused hedging, unsupported claims, loose paragraph structure, vague transitions, and passive constructions that obscure agency. Recognising them in your own work is the first step to eliminating them.',
        extracts: [],
        activityPrompt: 'Read one page of your draft looking for one error type at a time, in separate passes: (1) unsupported claims — assertions made without citation or evidence; (2) vague hedges — "somewhat", "rather", "quite", "fairly" used without specifics; (3) unclear referents — "this", "it", "they" that could refer to more than one possible antecedent. Isolating one error type per pass is more effective than looking for everything at once.',
        keyTakeaways: [
          'The most common doctoral errors: over-hedging (which drains claims of force), under-hedging (which overstates the evidence), vague transitions, paragraphs that describe rather than argue, and nominalised verbs.',
          'Reading your work aloud is one of the most reliable ways to catch sentence-level errors — the ear notices what the eye, trained to expect what you meant to write, skips over.',
          'Pattern awareness: once you have identified your personal recurring errors, write a targeted edit pass to find every instance across the chapter.',
        ],
      },
      {
        slug: 'proofreading',
        title: 'Proofreading Strategies',
        durationMins: 6,
        intro: 'Proofreading is not the same as re-reading. Effective proofreading requires defamiliarisation — reading your text as a stranger would. Concrete strategies make this possible even when you\'ve been living with a text for months.',
        extracts: [],
        activityPrompt: 'Try one defamiliarisation technique on your next proofreading pass: (1) change the font, size, and colour of the text before reading; (2) read each paragraph in reverse order (last paragraph first, sentence by sentence); or (3) use text-to-speech software to hear your draft read aloud. Each technique breaks the familiarity that causes your brain to read what it intended to write rather than what is actually on the page.',
        keyTakeaways: [
          'Proofreading requires defamiliarisation — you need to encounter the text as if you didn\'t write it, which is why re-reading immediately after writing rarely works.',
          'Leave at least one night between finishing a draft and proofreading it — distance is the most effective defamiliarisation tool.',
          'Run separate passes for different error types: one for sense and argument, one for grammar and syntax, one for punctuation, one for formatting and consistency.',
        ],
      },
    ],
  },

  // ── TOPIC 14 ────────────────────────────────────────────────────────────────
  {
    slug: 'writing-for-publication',
    title: 'Writing for Publication',
    description: 'Adapt your doctoral writing for journals, conferences, and public audiences — making your research travel beyond the thesis.',
    icon: 'Send',
    color: 'rose',
    lessons: [
      {
        slug: 'thesis-to-article',
        title: 'From Thesis Chapter to Journal Article',
        durationMins: 12,
        intro: 'A thesis chapter and a journal article are different genres with different conventions. Converting one to the other is not simply a matter of cutting length — it requires rethinking structure, framing, and audience.',
        extracts: [],
        activityPrompt: 'Choose one chapter from your thesis as a candidate for an article. Answer these questions in writing: (1) What single claim would the article make — not the chapter\'s range of arguments, but one central, publishable claim? (2) What is the target journal, and what is its typical length, structure, and readership? (3) What literature review material can be cut because the journal audience already knows it? (4) What new framing does the article need to stand alone without the rest of the thesis? Use these answers to draft a one-paragraph article pitch.',
        keyTakeaways: [
          'A journal article is typically 7,000–10,000 words and must develop one argument; a thesis chapter is longer and may pursue several. Converting a chapter requires deciding, not just cutting.',
          'The article introduction must justify the piece as a standalone contribution — it cannot assume the reader has read the thesis or knows why this question matters.',
          'Choose the target journal before drafting the article — its scope, disciplinary norms, and readership should shape every structural decision, from how much theory to include to how findings are presented.',
        ],
      },
      {
        slug: 'writing-abstracts',
        title: 'Writing Effective Abstracts',
        durationMins: 8,
        intro: 'The abstract is often the only part of your work that most readers will read. It must compress your research problem, method, findings, and contribution into 150–300 words without sacrificing accuracy or nuance.',
        extracts: [],
        activityPrompt: 'Write a structured abstract for your thesis in 250 words or fewer, covering these four moves: (1) Background — what is the field and why does the problem matter? (2) Gap/aim — what question does your thesis address and why is it significant? (3) Methods — what did you do and how? (4) Findings/contribution — what did you find and what does it add? Time the exercise. The discipline of 250 words forces a precision that longer writing permits you to avoid.',
        keyTakeaways: [
          'An abstract must be self-contained: a reader should be able to assess the relevance and value of your work without reading anything else.',
          'Most effective abstracts follow a four-move structure: background, gap/aim, method, findings — though some journals specify their own structure and word count.',
          'Write the abstract last, but read it first when revising the thesis — it should accurately reflect what the thesis actually argues, not what you intended to argue at the start.',
        ],
      },
      {
        slug: 'responding-to-reviewers',
        title: 'Responding to Peer Review',
        durationMins: 10,
        intro: 'Responding to reviewer comments is a genre in itself. The way you engage with criticism — demonstrating that you have understood, taken seriously, and substantively addressed each point — is as important as the revisions themselves.',
        extracts: [],
        activityPrompt: 'Draft a response to this hypothetical reviewer comment: "The theoretical framework is underdeveloped and the relationship between the two central concepts is never clearly explained." Structure your response using four moves: (1) thank the reviewer for the observation; (2) summarise what they have asked (in your own words, not theirs); (3) describe specifically what change you have made and where in the manuscript it appears; (4) if you partially disagree, explain why respectfully and with evidence.',
        keyTakeaways: [
          'A response letter is a genre: it must be systematic, specific, and respectful — even, and especially, when you disagree with a reviewer.',
          'For every comment: acknowledge it, paraphrase it (showing you understood), state precisely what you did in response, and point the editor to the specific location of the change.',
          'You may disagree with a reviewer — but you must do so with reasoned argument and evidence, not assertion. Editors read both the review and the response letter carefully.',
        ],
      },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getTopicBySlug(slug) {
  return TOPICS.find((t) => t.slug === slug) ?? null;
}

export function getLessonBySlug(topicSlug, lessonSlug) {
  const topic = getTopicBySlug(topicSlug);
  return topic?.lessons.find((l) => l.slug === lessonSlug) ?? null;
}
