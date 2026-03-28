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
    lessons: [
      {
        slug: 'synthesis-vs-summary',
        title: 'Synthesis vs Summary',
        durationMins: 15,
        intro: 'A literature review that summarises sources one by one is an annotated bibliography, not a synthesis. Real synthesis identifies patterns, tensions, and convergences — and shows what the field as a whole does and doesn\'t know.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'research-gap',
        title: 'Identifying the Research Gap',
        durationMins: 12,
        intro: 'The research gap is the engine of your introduction and literature review. A well-articulated gap doesn\'t just say "this hasn\'t been studied" — it shows what existing work cannot account for, and why that matters.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'critical-evaluation',
        title: 'Critical Evaluation of Sources',
        durationMins: 12,
        intro: 'Citing a source is not the same as endorsing it. Critical evaluation means engaging with a study\'s methodology, sample, theoretical assumptions, or scope — and flagging where these limit what we can conclude.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'thematic-structure',
        title: 'Structuring the Literature Thematically',
        durationMins: 10,
        intro: 'Most literature reviews are best organised thematically rather than chronologically. Thematic organisation groups sources by idea, debate, or concept — letting you show how scholars are responding to the same set of questions.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'lit-review-language',
        title: 'Common Literature Review Language',
        durationMins: 8,
        intro: 'Certain phrases and structures recur across literature reviews in almost every discipline. Understanding these patterns helps you write fluently within — and eventually beyond — your disciplinary norms.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
    ],
  },

  // ── TOPIC 4 ─────────────────────────────────────────────────────────────────
  {
    slug: 'paragraph-structure',
    title: 'Sentence & Paragraph Structure',
    description: 'Build paragraphs that develop a single idea clearly, with coherent movement from claim to evidence to analysis.',
    icon: 'AlignLeft',
    color: 'blue',
    lessons: [
      {
        slug: 'topic-sentences',
        title: 'Topic Sentences and Paragraph Focus',
        durationMins: 8,
        intro: 'Every academic paragraph should do one thing: develop a single idea. The topic sentence announces that idea; everything else supports, qualifies, or evidences it.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'coherence-cohesion',
        title: 'Coherence and Cohesion',
        durationMins: 10,
        intro: 'Coherence is about meaning — does the paragraph hold together logically? Cohesion is about language — do the sentences connect grammatically and lexically? A strong paragraph needs both.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'sentence-variety',
        title: 'Sentence Variety and Rhythm',
        durationMins: 8,
        intro: 'Academic writing does not mean uniformly long sentences. Varied sentence length creates rhythm, emphasis, and readability — and signals a writer in control of their prose.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'argument-across-sections',
        title: 'Building an Argument Across Sections',
        durationMins: 10,
        intro: 'A thesis argument is not made in a single paragraph — it accumulates across sections and chapters. Understanding how to sustain and develop a line of argument over many pages is one of the key challenges of doctoral writing.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
    ],
  },

  // ── TOPIC 5 ─────────────────────────────────────────────────────────────────
  {
    slug: 'research-questions',
    title: 'Research Questions & Thesis Statements',
    description: 'Craft focused, arguable research questions and thesis statements that give your writing direction and purpose.',
    icon: 'HelpCircle',
    color: 'orange',
    lessons: [
      {
        slug: 'what-makes-a-good-rq',
        title: 'What Makes a Good Research Question',
        durationMins: 10,
        intro: 'A research question must be answerable, significant, and sufficiently focused. Too broad and it becomes a topic; too narrow and it becomes a sub-question. Getting the scope right takes iteration.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'thesis-statement',
        title: 'Writing a Thesis Statement',
        durationMins: 8,
        intro: 'A thesis statement is a one-to-two-sentence summary of your central argument. Not all disciplines require one explicitly, but every thesis benefits from the clarity that writing one forces.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'sub-questions',
        title: 'Sub-questions and Objectives',
        durationMins: 8,
        intro: 'Sub-questions break your central research question into manageable investigative units. Each chapter of your thesis will typically address one sub-question — so getting this architecture right matters early.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'discipline-conventions',
        title: 'Disciplinary Conventions for Framing Research',
        durationMins: 10,
        intro: 'How a research question is framed varies significantly across disciplines. Sciences tend to frame hypotheses; humanities tend to frame interpretive problems; social sciences often do both. Knowing your discipline\'s norms is essential.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
    ],
  },

  // ── TOPIC 6 ─────────────────────────────────────────────────────────────────
  {
    slug: 'introduction-chapter',
    title: 'Writing the Introduction Chapter',
    description: 'Open your thesis with clarity and authority — establishing territory, identifying the gap, and announcing your contribution.',
    icon: 'DoorOpen',
    color: 'yellow',
    lessons: [
      {
        slug: 'cars-model',
        title: 'The CARS Model',
        durationMins: 10,
        intro: 'The CARS model (Create A Research Space) describes the three rhetorical moves of most academic introductions: establishing territory, establishing a niche, and occupying the niche. Recognising these moves helps you write — and evaluate — introductions across disciplines.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'establishing-territory',
        title: 'Establishing Your Territory',
        durationMins: 8,
        intro: 'The opening of your introduction must convince the reader that the field you\'re entering is significant and active. This is not background for its own sake — it\'s rhetorical groundwork for the gap you\'re about to identify.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'scope-and-limits',
        title: 'Scope, Limitations, and Chapter Outline',
        durationMins: 8,
        intro: 'Stating what your thesis does not do is as important as stating what it does. A clearly delimited scope protects you from overreach and shows the reader exactly where to expect your contribution.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'intro-across-disciplines',
        title: 'Introduction Conventions Across Disciplines',
        durationMins: 10,
        intro: 'The structure of an introduction in a History thesis differs meaningfully from one in a Biology or Law thesis. Understanding how your discipline frames "the problem" shapes everything about how you open.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
    ],
  },

  // ── TOPIC 7 ─────────────────────────────────────────────────────────────────
  {
    slug: 'methodology-chapter',
    title: 'Writing the Methodology Chapter',
    description: 'Justify your research design with confidence — describing your approach, methods, and the philosophical underpinnings behind them.',
    icon: 'FlaskConical',
    color: 'blue',
    lessons: [
      {
        slug: 'philosophical-framing',
        title: 'Philosophical Framing: Ontology and Epistemology',
        durationMins: 12,
        intro: 'Your methodology chapter is not just a description of what you did — it is a justification of why you did it that way. Situating your approach within a philosophical framework is expected in most social science and humanities disciplines.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'justifying-methods',
        title: 'Justifying Your Methods',
        durationMins: 10,
        intro: 'The language of the methodology chapter is primarily the language of justification. You are not just describing your methods — you are defending them as the most appropriate means of answering your research questions.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'positionality',
        title: 'Reflexivity and Positionality',
        durationMins: 10,
        intro: 'In qualitative and ethnographic research, acknowledging your own position — your background, assumptions, and relationship to the field — is not a confession of bias. It is an act of scholarly honesty that strengthens, rather than undermines, your findings.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'limitations',
        title: 'Writing About Limitations',
        durationMins: 8,
        intro: 'Every study has limitations. Writing about them honestly — and framing them as boundaries rather than failures — demonstrates methodological maturity and protects your findings from overinterpretation.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'methods-across-disciplines',
        title: 'Methodology Conventions Across Disciplines',
        durationMins: 10,
        intro: 'What counts as a "methodology chapter" varies enormously: a laboratory sciences thesis may have a brief methods section; a social science thesis may dedicate twenty pages to philosophical justification. Knowing your discipline\'s conventions matters.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
    ],
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
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'referring-to-figures',
        title: 'Referring to Figures and Tables',
        durationMins: 8,
        intro: 'A figure or table should not speak for itself — you must direct the reader to what matters. The language for introducing and commenting on visual data has its own conventions, and using them correctly signals expertise.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'organising-findings',
        title: 'Organising Your Findings',
        durationMins: 10,
        intro: 'How you sequence your findings shapes the argument your results chapter makes. Whether you organise by theme, research question, chronology, or method depends on your discipline and data — but the choice must be deliberate.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'unexpected-results',
        title: 'Addressing Unexpected or Null Results',
        durationMins: 8,
        intro: 'Results that don\'t confirm your hypothesis are not failures — they are findings. The way you write about unexpected or null results reveals the intellectual maturity of your analysis.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
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
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'interpreting-in-light-of-lit',
        title: 'Interpreting Findings in Light of the Literature',
        durationMins: 12,
        intro: 'Your findings are only meaningful in relation to what already exists in the field. The discussion is where you bring your results into conversation with the literature — confirming, challenging, extending, or complicating prior work.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'claims-and-qualifications',
        title: 'Making Claims and Managing Qualifications',
        durationMins: 10,
        intro: 'The discussion is where you make your boldest claims — but also where you must manage them most carefully. The balance between confidence and appropriate qualification is the hallmark of strong doctoral discussion writing.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'articulating-contribution',
        title: 'Articulating Your Contribution',
        durationMins: 10,
        intro: 'The "so what?" of your thesis must be stated explicitly, not left for the reader to infer. Articulating your contribution clearly — to knowledge, theory, methodology, or practice — is one of the most important things your discussion chapter does.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
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
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'implications',
        title: 'Implications for Theory, Practice, and Policy',
        durationMins: 10,
        intro: 'Implications extend your findings beyond the immediate study. They answer "what does this mean for the field?" — and for some disciplines, "what should practitioners, policymakers, or future researchers do differently as a result?"',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'future-research',
        title: 'Directions for Future Research',
        durationMins: 8,
        intro: 'Identifying future research directions is not an admission of incompleteness — it is a mark of scholarly self-awareness. The best future directions follow logically from what your thesis found and what it couldn\'t address.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
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
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'quote-paraphrase-summary',
        title: 'Direct Quotation, Paraphrase, and Summary',
        durationMins: 10,
        intro: 'These three tools are not interchangeable. Each has a different effect on your argument and your relationship to the source. Most doctoral writing favours paraphrase — but knowing when a direct quotation is indispensable is itself a skill.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'avoiding-plagiarism',
        title: 'Avoiding Plagiarism and Patch-Writing',
        durationMins: 10,
        intro: 'Patch-writing — substituting synonyms or rearranging phrases without genuine restatement — is the most common form of unintentional plagiarism at doctoral level. Understanding what genuine paraphrase looks like is the most effective prevention.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'citation-styles',
        title: 'Citation Styles: APA, Harvard, Chicago, and Beyond',
        durationMins: 8,
        intro: 'Citation styles are not arbitrary — they reflect disciplinary cultures of attribution. Understanding not just how to format a reference, but why different disciplines organise attribution differently, is part of becoming a fluent academic writer.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
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
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'evaluating-sources',
        title: 'Evaluating Sources and Evidence',
        durationMins: 10,
        intro: 'Not all published research is equally reliable, relevant, or rigorous. Developing systematic criteria for evaluating sources — in terms of methodology, theoretical framework, and disciplinary standing — is a fundamental doctoral skill.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'identifying-assumptions',
        title: 'Identifying Theoretical Assumptions',
        durationMins: 10,
        intro: 'Every academic text rests on assumptions — about what counts as evidence, what explanatory frameworks are valid, and what questions are worth asking. Making these assumptions visible is what allows you to engage critically rather than just receptively.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'reading-into-writing',
        title: 'Translating Critical Reading into Writing',
        durationMins: 8,
        intro: 'There is a gap between reading a text critically and writing about it critically. Bridging this gap — keeping your own analytic voice present when working with sources — is where many doctoral writers struggle.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
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
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'editing-for-clarity',
        title: 'Editing for Clarity and Concision',
        durationMins: 10,
        intro: 'Academic writing does not need to be long to be credible. Cutting unnecessary words, untangling complex sentences, and replacing vague abstractions with precise language consistently improves both readability and persuasive force.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'common-errors',
        title: 'Common PhD Writing Errors',
        durationMins: 10,
        intro: 'Certain errors appear repeatedly in doctoral writing regardless of discipline: misused hedging, unsupported claims, loose paragraph structure, vague transitions, and passive constructions that obscure agency. Recognising them in your own work is the first step to eliminating them.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'proofreading',
        title: 'Proofreading Strategies',
        durationMins: 6,
        intro: 'Proofreading is not the same as re-reading. Effective proofreading requires defamiliarisation — reading your text as a stranger would. Concrete strategies make this possible even when you\'ve been living with a text for months.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
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
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'writing-abstracts',
        title: 'Writing Effective Abstracts',
        durationMins: 8,
        intro: 'The abstract is often the only part of your work that most readers will read. It must compress your research problem, method, findings, and contribution into 150–300 words without sacrificing accuracy or nuance.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
      },
      {
        slug: 'responding-to-reviewers',
        title: 'Responding to Peer Review',
        durationMins: 10,
        intro: 'Responding to reviewer comments is a genre in itself. The way you engage with criticism — demonstrating that you have understood, taken seriously, and substantively addressed each point — is as important as the revisions themselves.',
        extracts: [],
        activityPrompt: '',
        keyTakeaways: [],
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
