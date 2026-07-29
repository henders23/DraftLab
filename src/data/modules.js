export const MODULES = [
  {
    id: 1,
    title: 'Mastering the Passive Voice',
    category: 'Academic Writing',
    level: 'Intermediate',
    estimatedMins: 25,
    description: 'Understand when and how to use the passive voice effectively in academic writing — and when to avoid it.',
    lessons: [
      {
        id: 1,
        title: 'What Is the Passive Voice?',
        durationMins: 5,
        content: `The passive voice occurs when the subject of a sentence receives the action rather than performs it. In active voice, you write "Researchers conducted the experiment." In passive voice, this becomes "The experiment was conducted by researchers." The agent — who did the action — moves to the end of the sentence or disappears entirely.

In everyday writing, the passive voice can feel evasive or weak. But academic writing is different. Disciplines like chemistry, biology, and the social sciences have long favoured the passive voice because it shifts focus from the person doing the work to the work itself. This depersonalisation is often exactly what scholarly writing requires.

Understanding the passive voice is the first step to using it deliberately. The goal is not to avoid it or embrace it blindly, but to know why you are choosing it in any given sentence.`,
        takeaway: 'The passive voice moves focus from the actor to the action — in academic writing, this is often intentional and appropriate.',
        quiz: [
          {
            id: 1,
            question: 'Which sentence is written in the passive voice?',
            options: [
              'The researcher analysed the data.',
              'The data was analysed by the researcher.',
              'Analysing data is an important step.',
              'The researcher found significant results.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'Why do academic writers often prefer the passive voice?',
            options: [
              'It makes sentences longer and more impressive.',
              'It removes the need for references.',
              'It shifts focus from the person to the process or finding.',
              'It is required by all journals.',
            ],
            correct: 2,
          },
        ],
      },
      {
        id: 2,
        title: 'When to Use It in Academic Writing',
        durationMins: 6,
        content: `The passive voice is most appropriate when the actor is unknown, unimportant, or deliberately omitted. In a methods section, for example, "Participants were recruited via email" is preferred over "We recruited participants via email" because the focus belongs on the procedure, not on the researchers. Many journals in the sciences explicitly require this style.

The passive voice also works well when you want to foreground a result rather than the person who found it. "A significant correlation was found between sleep duration and cognitive performance" emphasises the finding. Starting with "We found..." places unnecessary weight on the researchers.

However, the passive voice is often misused as a way to avoid commitment or clarity. "Mistakes were made" is a famous political evasion. In academic writing, if you are making a claim, arguing a position, or describing your own intellectual contribution, the active voice is usually stronger and clearer.`,
        takeaway: 'Use the passive voice in methods and results sections; use active voice when making arguments or describing your own contributions.',
        quiz: [
          {
            id: 1,
            question: 'Which section of a thesis most commonly uses the passive voice?',
            options: [
              'Introduction',
              'Discussion',
              'Methods',
              'Conclusion',
            ],
            correct: 2,
          },
          {
            id: 2,
            question: '"A positive relationship was observed between the variables." Why might a writer choose this construction?',
            options: [
              'To hide who conducted the study.',
              'To foreground the finding rather than the researcher.',
              'Because active voice is banned in academic writing.',
              'To make the sentence shorter.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 3,
        title: 'Common Mistakes to Avoid',
        durationMins: 7,
        content: `The most common mistake with the passive voice is overuse. When every sentence is passive, writing becomes flat and hard to follow. Readers lose track of who is doing what and why it matters. Even in scientific writing, a well-placed active sentence can add clarity and momentum.

A second mistake is using the passive voice to obscure weak logic. If you write "It has been suggested that..." without a citation, you are using impersonal passive to make a vague claim sound authoritative. Supervisors and reviewers will spot this immediately. If something has been suggested, by whom? Cite it.

Finally, watch out for unnecessarily long passive constructions. "It was decided by the committee that the proposal would be rejected" can simply be "The committee rejected the proposal." If the actor is known and relevant, use active voice. Passive voice should always serve a purpose — not just add words.`,
        takeaway: 'Passive voice becomes a problem when it is overused, hides weak reasoning, or makes sentences unnecessarily long.',
        quiz: [
          {
            id: 1,
            question: 'What is wrong with writing "It has been suggested that X is true" with no citation?',
            options: [
              'The passive voice is never acceptable in academic writing.',
              'It uses impersonal passive to make a vague claim sound authoritative.',
              'Suggestions cannot be cited.',
              'Nothing — this is standard academic style.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'How would you improve: "It was decided by the committee that the proposal would be rejected"?',
            options: [
              '"The proposal was decided to be rejected."',
              '"The committee rejected the proposal."',
              '"Rejection of the proposal was decided."',
              'The original sentence is already optimal.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 4,
        title: 'Practice and Revision Strategies',
        durationMins: 7,
        content: `Revising for passive and active voice is a specific editing pass — not something to think about while drafting. Write first, revise later. When you do revise, search your document for "was", "were", "been", and "by" — these are passive voice markers. For each instance, ask: is this passive construction serving a purpose, or can I rewrite it more clearly in active voice?

A useful exercise is to read your methods section alongside a published paper in your field. Notice where they use passive voice and where they switch to active. Disciplinary norms vary: humanities writing tends toward active voice even in methods, while lab science almost always uses passive. Your writing should match the expectations of your target journal or examiner.

Build a habit of reading your work aloud. Passive constructions often sound stilted when spoken. If a sentence is hard to read aloud smoothly, it may benefit from restructuring. This is not a rule — some passive sentences are perfectly clear — but it is a reliable signal worth paying attention to.`,
        takeaway: 'Revise for voice in a dedicated editing pass; search for "was/were/been/by" and ask whether each passive construction is doing useful work.',
        quiz: [
          {
            id: 1,
            question: 'Which strategy helps identify overuse of passive voice during revision?',
            options: [
              'Reading only the conclusion.',
              'Searching for "was", "were", "been", and "by".',
              'Counting the total number of sentences.',
              'Replacing all verbs with nouns.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'Why should you check the norms of your target journal when deciding on voice?',
            options: [
              'Journals always require passive voice.',
              'Voice preferences vary by discipline and publication.',
              'Active voice is banned in most scientific journals.',
              'Journals do not care about passive or active voice.',
            ],
            correct: 1,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: 'Building a Strong Argument',
    category: 'Structure',
    level: 'Beginner',
    estimatedMins: 40,
    description: 'Learn how to construct clear, well-reasoned arguments — the foundation of all academic writing.',
    lessons: [
      {
        id: 1,
        title: 'Claims, Evidence, and Reasoning',
        durationMins: 6,
        content: `Every academic argument rests on three components: a claim, evidence to support it, and reasoning that connects the two. A claim is your assertion — what you are arguing. Evidence is the data, literature, or examples you use to back it up. Reasoning explains why that evidence supports your claim.

Many PhD writers make strong claims and find good evidence but neglect the reasoning step. They assume the connection is obvious. It rarely is. Spelling out the logical link between your evidence and your claim is not stating the obvious — it is doing the intellectual work that academic writing requires.

A simple test: after writing any argumentative paragraph, ask "So what?" If you cannot answer that question in one or two sentences, your reasoning is likely missing. The "so what" is your reasoning — the explanation of why the evidence matters for your argument.`,
        takeaway: 'A complete argument requires a claim, evidence, AND explicit reasoning connecting the two — never assume the link is obvious.',
        quiz: [
          {
            id: 1,
            question: 'Which element of an argument explains why the evidence supports the claim?',
            options: ['The claim', 'The citation', 'The reasoning', 'The counterargument'],
            correct: 2,
          },
          {
            id: 2,
            question: 'What does the "so what?" test help you identify?',
            options: [
              'Whether your claim is original.',
              'Whether your reasoning is present and clear.',
              'Whether you have enough citations.',
              'Whether your evidence is peer-reviewed.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 2,
        title: 'Structuring a Paragraph',
        durationMins: 6,
        content: `A well-structured academic paragraph follows a consistent pattern. It opens with a topic sentence that states the paragraph's main point — its contribution to your overall argument. The body of the paragraph develops this point with evidence and reasoning. The paragraph closes with a sentence that either summarises the point or transitions to the next one.

This structure — sometimes called PEEL (Point, Evidence, Explanation, Link) or variations of it — is not a formula to follow rigidly. It is a way of ensuring every paragraph has a clear purpose and a clear arc. If a paragraph lacks a topic sentence, readers have to infer what it is arguing. If it lacks a closing sentence, it can feel abrupt.

Paragraphs should contain one main idea. If you find yourself writing a paragraph that covers two distinct points, split it. Short, focused paragraphs are almost always clearer than long, sprawling ones.`,
        takeaway: 'Open with a topic sentence, develop with evidence and reasoning, and close with a link or summary — every paragraph needs a clear arc.',
        quiz: [
          {
            id: 1,
            question: 'What is the purpose of a topic sentence?',
            options: [
              'To introduce a quotation.',
              'To state the paragraph\'s main point and its role in the argument.',
              'To summarise the whole chapter.',
              'To provide background context.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'If a paragraph covers two distinct points, what should you do?',
            options: [
              'Add more citations to justify the length.',
              'Remove one of the points entirely.',
              'Split it into two paragraphs.',
              'Move one point to the conclusion.',
            ],
            correct: 2,
          },
        ],
      },
      {
        id: 3,
        title: 'Using Signposting Language',
        durationMins: 5,
        content: `Signposting language guides readers through your argument. It tells them when you are moving from one point to the next, when you are providing evidence, when you are drawing a conclusion, and when you are acknowledging a counterargument. Without signposting, even a well-structured argument can feel disjointed.

Common signposting phrases serve different functions. Additive signals ("Furthermore", "In addition", "Moreover") build on a previous point. Contrastive signals ("However", "Nevertheless", "By contrast") introduce a shift or qualification. Causal signals ("Therefore", "As a result", "Consequently") signal conclusions. Exemplifying signals ("For instance", "To illustrate") introduce evidence.

The key is to use signposting purposefully, not mechanically. Beginning every paragraph with "Furthermore" becomes noise. Use signposting when it genuinely helps a reader navigate a transition — particularly at the start of paragraphs, between sections, and when introducing counterarguments.`,
        takeaway: 'Signposting language helps readers follow your argument — use it at key transitions, not mechanically at the start of every sentence.',
        quiz: [
          {
            id: 1,
            question: 'Which signposting phrase signals a contrast or qualification?',
            options: ['Furthermore', 'Therefore', 'Nevertheless', 'For instance'],
            correct: 2,
          },
          {
            id: 2,
            question: 'What is the risk of overusing signposting phrases like "Furthermore"?',
            options: [
              'It makes writing too formal for academic contexts.',
              'It becomes mechanical noise that no longer aids the reader.',
              'It introduces logical errors in the argument.',
              'It is grammatically incorrect.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 4,
        title: 'Counterarguments and Rebuttals',
        durationMins: 8,
        content: `Engaging with counterarguments is a sign of intellectual maturity. A thesis that ignores objections appears unaware of the debate it is entering. A thesis that acknowledges and addresses them demonstrates that its author has thought carefully and is confident in their position despite the challenges.

The structure for handling a counterargument is: acknowledge, qualify, and rebut. Acknowledge the opposing view fairly — do not strawman it. Qualify your original claim if the counterargument reveals a genuine limitation. Then rebut: explain why your argument still holds, or why the counterargument does not undermine your central claim.

Phrases like "While X argues that..., this overlooks..." or "Although... it remains the case that..." signal to readers that you are engaging with the debate rather than avoiding it. In a PhD thesis, failing to engage with counterarguments is one of the most common reasons examiners push back.`,
        takeaway: 'Acknowledge counterarguments fairly, qualify your claim where needed, then rebut — this strengthens rather than weakens your argument.',
        quiz: [
          {
            id: 1,
            question: 'Why should academic writers engage with counterarguments?',
            options: [
              'To make the thesis longer.',
              'Because it is required by all universities.',
              'To demonstrate awareness of the debate and confidence in their position.',
              'To show that the topic is controversial.',
            ],
            correct: 2,
          },
          {
            id: 2,
            question: 'What does it mean to "strawman" a counterargument?',
            options: [
              'To cite it without reading it.',
              'To misrepresent it in a weaker form so it is easier to dismiss.',
              'To include it at the end of the chapter.',
              'To agree with it.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 5,
        title: 'Writing a Cohesive Section',
        durationMins: 8,
        content: `A section is not simply a collection of related paragraphs — it is a sustained, structured argument in miniature. It should have an opening that announces what the section will argue, a body that develops the argument through a logical sequence of paragraphs, and a close that draws the thread together and links forward.

Many PhD writers write sections by assembling notes and sources without a clear through-line. The result reads as a literature summary rather than an argument. To write an argumentative section, begin with a section-level claim — what is this section proving? — and then design each paragraph to contribute to that proof.

Revision is where sections get their shape. After drafting, read the first and last sentence of every paragraph in sequence. This "skeleton" should tell a coherent logical story. If paragraphs could be reordered without the reader noticing, the section lacks argumentative direction. Reorder, consolidate, or cut until the sequence feels inevitable.`,
        takeaway: 'A section is a mini-argument: give it an opening claim, a logical sequence of paragraphs, and a closing link — the paragraph skeleton test reveals whether it coheres.',
        quiz: [
          {
            id: 1,
            question: 'What does it mean if paragraphs in a section could be reordered without the reader noticing?',
            options: [
              'The section is well-balanced.',
              'The section lacks argumentative direction.',
              'The section is too long.',
              'The section is ready to submit.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'What is the "skeleton test" for a section?',
            options: [
              'Reading only the citations.',
              'Counting the number of paragraphs.',
              'Reading the first and last sentence of each paragraph in sequence.',
              'Removing all adjectives.',
            ],
            correct: 2,
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: 'Citing Sources Correctly',
    category: 'Referencing',
    level: 'Beginner',
    estimatedMins: 20,
    description: 'Master the principles of academic referencing — why it matters, how in-text citations work, and how to build a reference list.',
    lessons: [
      {
        id: 1,
        title: 'Why Referencing Matters',
        durationMins: 5,
        content: `Referencing is not a bureaucratic requirement — it is how academic knowledge is built and verified. When you cite a source, you are situating your work within an existing conversation, crediting the ideas you are building on, and giving readers a route to check your claims. Without references, academic writing cannot be trusted.

There are three core reasons to cite. First, attribution: ideas belong to people, and claiming others' ideas as your own is plagiarism. Second, evidence: references are how you demonstrate that your claims are grounded in the literature rather than personal opinion. Third, dialogue: citing specific works positions your argument in relation to specific scholars, which is what makes academic debate precise.

Different disciplines use different referencing systems — APA, MLA, Chicago, Harvard, Vancouver. The underlying principles are the same: be consistent, be accurate, and give readers everything they need to find the source. Your institution or target journal will specify which system to use.`,
        takeaway: 'Referencing serves three purposes: attribution, evidence, and positioning your work in an academic dialogue.',
        quiz: [
          {
            id: 1,
            question: 'Which of the following is NOT a core reason to cite sources?',
            options: [
              'To attribute ideas to their original author.',
              'To demonstrate your claims are evidence-based.',
              'To make your word count longer.',
              'To position your work in an academic dialogue.',
            ],
            correct: 2,
          },
          {
            id: 2,
            question: 'What does "consistency" mean in the context of referencing?',
            options: [
              'Always citing the same authors.',
              'Using the same referencing system throughout your work.',
              'Citing every sentence.',
              'Using the same number of references per page.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 2,
        title: 'In-Text Citations',
        durationMins: 7,
        content: `In-text citations appear within the body of your writing to link a claim to a source. In author-date systems like APA and Harvard, they take the form (Author, Year) — for example, (Smith, 2019). In numeric systems like Vancouver, they appear as superscript numbers that correspond to a reference list. In footnote systems like Chicago, they are footnotes at the bottom of the page.

The most common mistake is citing too late — placing the citation at the end of a paragraph that contains ideas from multiple sources. Citations should appear directly after the claim they support. If a paragraph draws on three different sources, each claim needs its own citation. Bunching all citations at the end misleads readers about which source supports which point.

You should also distinguish between paraphrase and quotation. Paraphrase — restating the source's idea in your own words — is the standard practice in most academic writing. Direct quotation should be reserved for cases where the exact wording matters. Over-quoting is a sign that a writer is not yet confident synthesising the literature.`,
        takeaway: 'Place citations directly after the claim they support — not at the end of the paragraph — and prefer paraphrase over direct quotation.',
        quiz: [
          {
            id: 1,
            question: 'What is the main problem with placing all citations at the end of a paragraph?',
            options: [
              'It looks untidy.',
              'It misleads readers about which source supports which claim.',
              'It is grammatically incorrect.',
              'It makes the paragraph too long.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'When should you use a direct quotation rather than a paraphrase?',
            options: [
              'Whenever you want to add length to your writing.',
              'For every point you make.',
              'When the exact wording of the source is significant.',
              'Only in the introduction.',
            ],
            correct: 2,
          },
        ],
      },
      {
        id: 3,
        title: 'Building a Reference List',
        durationMins: 8,
        content: `A reference list (or bibliography) appears at the end of your work and provides full details of every source cited in the text. Each entry must contain enough information for a reader to locate the source: typically author(s), year, title, and publication details. The exact format depends on your referencing system.

The most reliable way to manage references is with reference management software such as Zotero, Mendeley, or EndNote. These tools store your sources, generate citations in your chosen style, and automatically build your reference list. Formatting references by hand is error-prone and time-consuming — use a tool.

Common errors in reference lists include: inconsistent formatting (mixing styles), missing information (no page numbers for book chapters, no DOI for journal articles), and including sources not cited in the text. Your reference list should be an exact mirror of your in-text citations — every citation in the text appears in the list, and every entry in the list appears in the text.`,
        takeaway: 'Use reference management software, and ensure your reference list is an exact mirror of your in-text citations — every cited source in, every uncited source out.',
        quiz: [
          {
            id: 1,
            question: 'What is the main advantage of using reference management software?',
            options: [
              'It finds sources for you.',
              'It formats references consistently and reduces manual errors.',
              'It is required by most universities.',
              'It counts your word count automatically.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'A source appears in your reference list but is not cited anywhere in your text. What should you do?',
            options: [
              'Leave it — a longer reference list looks more thorough.',
              'Remove it — every entry must correspond to an in-text citation.',
              'Move it to a footnote.',
              'Add it to the appendix.',
            ],
            correct: 1,
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: 'Writing a Strong Introduction',
    category: 'Academic Writing',
    level: 'Beginner',
    estimatedMins: 30,
    description: 'Learn the four key moves of an academic introduction and how to hook your reader from the first paragraph.',
    lessons: [
      {
        id: 1,
        title: 'The Purpose of an Introduction',
        durationMins: 5,
        content: `An introduction does three things: it establishes the context and significance of your research, it identifies the problem or gap your work addresses, and it states what your work will do about it. In a PhD thesis, it also often outlines the structure of the chapters ahead. Every word in your introduction should serve one of these purposes.

Many PhD students write introductions last, after they know what the thesis has actually argued. This is a sensible strategy — it is hard to introduce something you have not yet written. But some writers draft an introduction early as a way of thinking through what they intend to argue, and then revise it heavily at the end.

The introduction sets the reader's expectations. A strong introduction makes readers feel that this work matters, that the writer knows the field, and that the argument to come will be clearly and confidently made. A weak introduction that buries the research question, omits the gap, or fails to situate the work in the literature will undermine the reader's confidence before they reach your first chapter.`,
        takeaway: 'An introduction must establish context, identify the gap, and state what your work does — every sentence should serve one of these purposes.',
        quiz: [
          {
            id: 1,
            question: 'Which of the following is NOT a core purpose of an academic introduction?',
            options: [
              'Establishing the context and significance of the research.',
              'Identifying the gap or problem the work addresses.',
              'Providing a full literature review.',
              'Stating what the work will do.',
            ],
            correct: 2,
          },
          {
            id: 2,
            question: 'Why do many PhD students write their introduction last?',
            options: [
              'It is the easiest section to write.',
              'Introductions are not important until the end.',
              'It is easier to introduce something you have already written.',
              'Word processors place introductions at the end by default.',
            ],
            correct: 2,
          },
        ],
      },
      {
        id: 2,
        title: 'Establishing Context',
        durationMins: 6,
        content: `The opening of your introduction needs to establish the broader context of your research — the field, the problem space, the stakes. This is sometimes called "the broad-to-narrow" move: you begin with the big picture and zoom in toward your specific research question. The challenge is calibrating the zoom correctly. Starting too broad ("Since the dawn of human civilisation...") wastes the reader's time. Starting too narrow ("This thesis examines the effect of variable X on outcome Y in population Z...") omits the context that makes your work legible.

A strong opening paragraph makes the reader care. It situates the work in a live debate, identifies a real-world problem, or highlights a tension in the existing literature. The question to ask is: why does this research matter, and to whom? Answering this — even implicitly — in your first paragraph is what earns your reader's attention.

Avoid opening with a definition ("According to the Oxford English Dictionary...") or with a sweeping historical claim. These are clichéd openings that experienced readers recognise immediately as padding. Start with the specific tension or problem your research engages.`,
        takeaway: 'Open with a focused, specific context that signals why your research matters — avoid definitions, sweeping claims, and overly broad framing.',
        quiz: [
          {
            id: 1,
            question: 'What is the "broad-to-narrow" move in an introduction?',
            options: [
              'Beginning with your conclusion and working backwards.',
              'Starting with the big picture and zooming toward your specific research question.',
              'Beginning with methodology before theory.',
              'Starting narrow and ending with general claims.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'Why should you avoid opening with "According to the Oxford English Dictionary..."?',
            options: [
              'Dictionaries are not academic sources.',
              'It is a clichéd opening that experienced readers recognise as padding.',
              'Definitions are never relevant in academic writing.',
              'It is grammatically incorrect.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 3,
        title: 'Identifying the Research Gap',
        durationMins: 7,
        content: `The research gap is the justification for your thesis. It is the moment in your introduction where you show that something important has not yet been studied, that existing studies have a methodological limitation, that two bodies of literature have not yet been brought into dialogue, or that a theoretical framework has not been applied to a particular context. Without a clear gap, your thesis has no reason to exist.

Identifying a gap is not the same as criticising existing research. You are not saying the literature is wrong — you are saying it is incomplete in a specific, consequential way that your work will address. The gap should feel significant. If readers think "so what?" after you state your gap, it needs sharpening.

The gap statement is one of the most scrutinised parts of a PhD thesis by examiners. It should be specific, grounded in the literature, and directly linked to your research question. A common mistake is making the gap too broad ("little research has been done on X") without pointing to specific studies and explaining precisely what is missing.`,
        takeaway: 'The research gap must be specific, grounded in the literature, and consequential — it is the entire justification for your thesis.',
        quiz: [
          {
            id: 1,
            question: 'Which of the following is an example of a well-defined research gap?',
            options: [
              '"No research exists on this topic."',
              '"While studies have examined X in Western contexts (Smith, 2018; Jones, 2020), none have applied this framework to Southeast Asian populations."',
              '"This is an interesting area that deserves more attention."',
              '"Researchers have not written enough about this subject."',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'What does identifying a research gap NOT require?',
            options: [
              'Grounding the gap in specific existing literature.',
              'Showing the gap is consequential.',
              'Criticising existing researchers as wrong or incompetent.',
              'Linking the gap to your research question.',
            ],
            correct: 2,
          },
        ],
      },
      {
        id: 4,
        title: 'The Thesis Statement',
        durationMins: 6,
        content: `The thesis statement is the single most important sentence in your introduction. It tells readers what your work argues, claims, or demonstrates — not just what it examines. In a PhD thesis, this is often framed as the central argument or contribution of the whole project. It should be specific, contestable, and positioned at the end of the introduction, after you have established context and identified the gap.

A weak thesis statement describes what the research does rather than what it argues. "This thesis examines the relationship between X and Y" is a description. "This thesis argues that X undermines Y in conditions where Z is present, challenging the prevailing assumption that..." is an argument. Examiners and readers need to know what position you are defending, not just what territory you are covering.

Revising your thesis statement is an ongoing process throughout the PhD. Your thinking will sharpen, your argument will develop, and your contribution will become clearer. Treat your thesis statement as a working hypothesis that you refine — not a fixed declaration that you commit to on day one.`,
        takeaway: 'A thesis statement must state what you argue, not just what you examine — it should be specific, contestable, and placed at the end of your introduction.',
        quiz: [
          {
            id: 1,
            question: 'Which of the following is a thesis statement rather than a description?',
            options: [
              '"This thesis examines migration patterns in urban areas."',
              '"This thesis argues that urban migration is driven primarily by informal networks rather than economic incentives, challenging human capital models."',
              '"Chapter 2 will review the literature on migration."',
              '"Migration is an important and complex phenomenon."',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'Why should a thesis statement be "contestable"?',
            options: [
              'Because examiners enjoy disagreeing with students.',
              'Because a statement that no one could disagree with is not an argument.',
              'Because it makes the thesis longer.',
              'Because contestability is required by APA style.',
            ],
            correct: 1,
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: 'Presenting Your Research Confidently',
    category: 'Presenting',
    level: 'Intermediate',
    estimatedMins: 25,
    description: 'Develop the skills to structure, design, and deliver compelling research presentations for academic audiences.',
    lessons: [
      {
        id: 1,
        title: 'Structuring a Research Presentation',
        durationMins: 7,
        content: `A research presentation is not a spoken version of your thesis. It is a compressed, shaped argument designed for a specific audience and time slot. The classic structure — problem, method, findings, so what — works because it mirrors the questions any informed audience will have: why does this matter, how did you do it, what did you find, and what should we conclude?

The most common mistake PhD researchers make in presentations is trying to say too much. A 15-minute presentation cannot cover everything in your thesis. It should cover one argument clearly. Choose the finding or contribution you most want the audience to leave with, and build the entire presentation around making that one thing clear and convincing.

Your first two minutes are critical. This is when the audience decides whether to invest their attention. Open with the problem, not the background. Tell the audience what is at stake before you tell them what you did. A presentation that opens with "I want to talk to you today about..." and then spends five minutes on context before getting to the question has already lost half the room.`,
        takeaway: 'A presentation covers one argument clearly — open with the problem, not the background, and build everything toward a single memorable takeaway.',
        quiz: [
          {
            id: 1,
            question: 'What is the most common structural mistake PhD researchers make in presentations?',
            options: [
              'Using too many slides.',
              'Trying to cover too much material rather than one clear argument.',
              'Not including enough citations.',
              'Spending too long on the conclusion.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'Why should you open with the problem rather than the background?',
            options: [
              'Background information is never relevant to presentations.',
              'Opening with the problem tells the audience what is at stake and earns their attention.',
              'Problem statements are shorter than background sections.',
              'It is required by conference guidelines.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 2,
        title: 'Slide Design for Academic Audiences',
        durationMins: 6,
        content: `Slides are a visual aid — they support your presentation, they are not your presentation. The most common failure in academic slide design is putting too much text on each slide. When slides are dense with text, audiences read the slides instead of listening to the presenter. You end up competing with your own slides for attention.

A practical rule: one idea per slide. Each slide should make a single point, and the visual design should make that point immediately legible. Use large font sizes (minimum 24pt for body text), high contrast, and generous white space. If a slide needs to be read rather than glanced at, it has too much on it.

Figures and data visualisations are often more effective than text for communicating research findings. If you have a clear graph or table, let it do the work. Avoid decorative elements — animations, clip art, unnecessary colour gradients — that distract without adding meaning. Academic audiences are forgiving of plain slides; they are not forgiving of slides that obscure your findings.`,
        takeaway: 'One idea per slide, minimum 24pt font, maximum legibility — slides are a visual aid, not a script.',
        quiz: [
          {
            id: 1,
            question: 'What is the main problem with putting too much text on a slide?',
            options: [
              'It makes slides too long.',
              'Audiences read the slides instead of listening to you.',
              'It uses too much ink when printed.',
              'Text is not allowed in academic presentations.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'What does "one idea per slide" mean in practice?',
            options: [
              'Each slide should have only one word.',
              'Each slide should make a single point that is immediately legible.',
              'Presentations should have no more than one slide.',
              'Each slide should contain one citation.',
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 3,
        title: 'Handling Questions and Discussion',
        durationMins: 8,
        content: `The Q&A session is not an obstacle after your presentation — it is an opportunity to demonstrate depth of knowledge and intellectual generosity. How you handle questions often leaves a stronger impression than the presentation itself. An anxious or defensive response to a challenging question can undermine a strong talk; a thoughtful, confident response to a weak question can elevate it.

When you receive a question, listen fully before responding. Do not interrupt. If the question is unclear, ask for clarification: "Could you say a little more about what you mean by X?" This is not a sign of confusion — it shows that you are taking the question seriously. Once you understand the question, restate it briefly before answering. This gives you a moment to gather your thoughts and ensures the rest of the audience is following.

The hardest questions are those that challenge your core claims. Resist the impulse to become defensive. Instead, acknowledge the challenge, engage with it directly, and explain why your argument still holds — or, if the challenge reveals a genuine limitation, acknowledge it honestly. "That is a fair point and it is a limitation of the current study — future work could address it by..." is a perfectly good answer. Examiners and conference audiences respect intellectual honesty.`,
        takeaway: 'Listen fully, restate before answering, and treat challenging questions as opportunities — intellectual honesty in Q&A leaves a stronger impression than defensiveness.',
        quiz: [
          {
            id: 1,
            question: 'Why is it useful to restate a question before answering it?',
            options: [
              'To show you have a good memory.',
              'It gives you a moment to think and ensures the audience is following.',
              'It is required by conference etiquette.',
              'It makes your answer longer.',
            ],
            correct: 1,
          },
          {
            id: 2,
            question: 'How should you respond to a question that reveals a genuine limitation in your research?',
            options: [
              'Dismiss the question as outside the scope of your study.',
              'Acknowledge the limitation honestly and explain how future work could address it.',
              'Argue that the limitation does not exist.',
              'End the Q&A session early.',
            ],
            correct: 1,
          },
        ],
      },
    ],
  },
];

// Peer review requests come from real members; empty until backend data is wired in.
export const PEER_REQUESTS = [];
