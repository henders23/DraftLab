// Topic 2: Your Academic Voice
// Full lesson content — annotated extracts from multiple disciplines

export const lessons = [

  // ── LESSON 1 ────────────────────────────────────────────────────────────────
  {
    slug: 'first-vs-third-person',
    title: 'First Person vs Third Person',
    durationMins: 10,
    intro: 'Whether to write "I argue" or "this thesis argues" is not a minor style choice — it reflects disciplinary convention, authorial positioning, and the degree of presence you want to project as a writer.',
    extracts: [
      {
        discipline: 'Molecular Biology — Cell Biology',
        source: 'PhD thesis excerpt',
        segments: [
          { t: '' },
          { t: 'This study investigates', a: 'a1' },
          { t: ' the role of mitochondrial membrane potential in the regulation of apoptosis under hypoxic conditions. ' },
          { t: 'It is proposed that', a: 'a2' },
          { t: ' fluctuations in membrane potential serve as an early signalling mechanism that precedes cytochrome c release. ' },
          { t: 'The present findings suggest', a: 'a3' },
          { t: ' that therapeutic targeting of this pathway ' },
          { t: 'may offer', a: 'a4' },
          { t: ' a more selective approach to inducing apoptosis in solid tumours than existing pharmacological agents.' },
        ],
        annotations: {
          a1: { label: 'Study as grammatical subject', color: 'yellow', text: '"This study investigates" keeps the author out of the sentence entirely. In lab sciences, the research itself is foregrounded — the convention is that findings matter more than who produced them.' },
          a2: { label: 'Impersonal passive for claims', color: 'blue', text: '"It is proposed that" allows a claim to be advanced without a named agent. Common in sciences where the collective, institutional voice of the research matters more than individual authorship.' },
          a3: { label: '"Findings" as subject', color: 'violet', text: 'Making "the present findings" the grammatical subject attributes the claim to the data rather than to the researcher. A standard device for avoiding first person in empirical sciences.' },
          a4: { label: 'Hedged claim without "I"', color: 'rose', text: '"May offer" hedges the therapeutic claim without any first-person framing. The caution comes from the modal verb, not from the researcher\'s personal qualification.' },
        },
      },
      {
        discipline: 'Anthropology — Economic Anthropology',
        source: 'PhD thesis excerpt',
        segments: [
          { t: '' },
          { t: 'I approach', a: 'a1' },
          { t: ' this ethnography with an awareness that ' },
          { t: 'my position as an outsider researcher', a: 'a2' },
          { t: ' necessarily shapes what I am able to observe and what informants are willing to share. Drawing on fifteen months of fieldwork in three rural communities in Northern Ghana, ' },
          { t: 'I argue', a: 'a3' },
          { t: ' that gift exchange networks serve not merely as economic mechanisms but as technologies of social reproduction that sustain kinship obligations across generations. ' },
          { t: 'I make this argument against the grain of', a: 'a4' },
          { t: ' dominant market-centred readings of sub-Saharan economic life.' },
        ],
        annotations: {
          a1: { label: 'First person: positionality', color: 'yellow', text: '"I approach" opens a reflexivity statement — an acknowledgment of how the researcher\'s subject position shapes the research. In ethnography this is methodologically required, not optional.' },
          a2: { label: 'First person: named subjectivity', color: 'blue', text: 'Naming your position explicitly ("outsider researcher") is a mark of methodological honesty. It invites the reader to calibrate the findings accordingly — a strength, not a vulnerability.' },
          a3: { label: 'First person: direct claim ownership', color: 'emerald', text: '"I argue" is clear, direct, and confident. In qualitative social sciences and humanities, taking explicit ownership of your argument is expected — and signals intellectual courage.' },
          a4: { label: 'First person: explicit positioning', color: 'rose', text: '"I make this argument against the grain of" is a bold critical stance. First person makes the positioning unambiguous — the author is consciously working against a dominant interpretation.' },
        },
      },
    ],
    activityPrompt: 'Take a paragraph from your own thesis. Identify how you refer to yourself and your work. If you use third person, rewrite two sentences in first person. If you use first person, rewrite two sentences in third person. Which version feels more natural in your discipline — and why?',
    keyTakeaways: [
      'Neither first nor third person is inherently superior — the choice is disciplinary. Sciences use impersonal constructions; humanities and qualitative social sciences frequently use first person.',
      'First person ("I argue") signals direct ownership. It is unambiguous, often more direct, and in many fields expected — especially for claims and positioning statements.',
      'Third person ("this study finds", "the present findings suggest") foregrounds the research rather than the researcher. It is not more objective — it is a different rhetorical stance.',
      'Be consistent. Switching between "I" and "this researcher" or "this thesis" in the same chapter signals uncertainty about your own voice.',
    ],
  },

  // ── LESSON 2 ────────────────────────────────────────────────────────────────
  {
    slug: 'positioning',
    title: 'Positioning Yourself in the Literature',
    durationMins: 12,
    intro: 'A literature review is not a reading list. It is an argument about where knowledge currently stands — and why your research is necessary. Positioning means showing where you agree, diverge, and what gap your work addresses.',
    extracts: [
      {
        discipline: 'Sociology — Urban Poverty',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Existing accounts of urban poverty ' },
          { t: 'have tended to privilege', a: 'a1' },
          { t: ' either structural explanations, emphasising the role of labour market changes and welfare retrenchment (Wilson, 1987; Wacquant, 2008), or cultural ones, focusing on the attitudes and behaviours of poor communities (Murray, 1984; Mead, 1992). ' },
          { t: 'This thesis departs from both positions.', a: 'a2' },
          { t: ' ' },
          { t: 'While structural forces are indispensable', a: 'a3' },
          { t: ' to any adequate account of concentrated disadvantage, this thesis ' },
          { t: 'contends that', a: 'a4' },
          { t: ' attention to the micro-level practices through which residents navigate deprivation reveals forms of agency and moral reasoning that structural accounts ' },
          { t: 'tend to obscure', a: 'a5' },
          { t: '.' },
        ],
        annotations: {
          a1: { label: 'Characterising the field', color: 'yellow', text: '"Have tended to privilege" evaluates the field\'s pattern rather than merely describing it. It signals the dominant tendency is not the only option — and implies the thesis will take a different path.' },
          a2: { label: 'Explicit divergence', color: 'rose', text: '"This thesis departs from both positions" is a confident, unambiguous positioning statement. The short sentence creates emphasis. The reader now knows exactly where the thesis stands.' },
          a3: { label: 'Concession before claim', color: 'blue', text: 'Acknowledging what existing work gets right before advancing your own claim makes the argument more persuasive. It shows intellectual fairness and protects the thesis from appearing to dismiss serious scholarship.' },
          a4: { label: 'Thesis claim verb', color: 'emerald', text: '"Contends that" is a strong, direct verb for the thesis\'s own argument. Using "thesis" as subject maintains formal register while still claiming the argument with confidence.' },
          a5: { label: 'Identifying what existing accounts miss', color: 'violet', text: '"Tend to obscure" is precise and targeted — not a vague dismissal but a specific claim about what structural accounts cannot see. This is the gap the thesis is designed to fill.' },
        },
      },
      {
        discipline: 'Cognitive Psychology — Dual-Process Theory',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The dual-process model of cognition, as elaborated by Kahneman (2011), ' },
          { t: 'has been enormously influential', a: 'a1' },
          { t: ' in experimental psychology. However, subsequent empirical work ' },
          { t: 'has begun to complicate', a: 'a2' },
          { t: ' the clean distinction between System 1 and System 2 processing (Evans & Stanovich, 2013; Keren & Schul, 2009). This thesis ' },
          { t: 'builds on this revisionist strand', a: 'a3' },
          { t: ' by examining whether the boundary between intuitive and deliberate cognition is better understood as a continuum than a binary — a question that the original formulation of dual-process theory ' },
          { t: 'leaves largely unaddressed', a: 'a4' },
          { t: '.' },
        ],
        annotations: {
          a1: { label: 'Acknowledging prior influence', color: 'yellow', text: 'Opening by acknowledging a theory\'s influence establishes the stakes. If the framework weren\'t important, positioning against it wouldn\'t carry weight.' },
          a2: { label: 'Signalling a field shift', color: 'blue', text: '"Has begun to complicate" signals that the field is in motion — a critical challenge is already underway. The thesis will join, not start, this conversation.' },
          a3: { label: 'Locating own work in a movement', color: 'emerald', text: '"Builds on this revisionist strand" positions the thesis within an existing critical movement rather than claiming lone novelty. A more persuasive and more accurate stance.' },
          a4: { label: 'Naming the specific gap', color: 'rose', text: '"Leaves largely unaddressed" names the precise question the thesis will answer. Specific enough to be credible — not "the field ignores X" but "this particular question has not been asked".' },
        },
      },
    ],
    activityPrompt: 'Draft a positioning paragraph for your own thesis. Try to include: (1) a characterisation of the dominant tendency in your field; (2) an acknowledgment of what that tendency gets right; (3) your explicit departure or contribution; (4) the specific gap you are addressing.',
    keyTakeaways: [
      'Positioning is not about dismissing existing work — it is about locating your contribution precisely within it.',
      'Acknowledge what the field does well before you diverge from it. Concessions make arguments more persuasive, not weaker.',
      '"This thesis departs from / builds on / extends / challenges..." — these are the verbs of positioning. Use them explicitly, not implicitly.',
      'The gap you identify should be specific enough to be credible. "Not enough research exists on X" is weaker than "existing research cannot account for Y because of Z".',
    ],
  },

  // ── LESSON 3 ────────────────────────────────────────────────────────────────
  {
    slug: 'making-claims',
    title: 'Making Confident Claims',
    durationMins: 10,
    intro: 'The difference between a PhD thesis and a research essay is often the confidence with which it stakes out original claims. You have spent years with this material — your job is not just to report what others found, but to say something new, clearly and without over-hedging.',
    extracts: [
      {
        discipline: 'Philosophy — Ethics',
        source: 'PhD thesis excerpt',
        segments: [
          { t: '' },
          { t: 'I contend that', a: 'a1' },
          { t: ' the standard consequentialist response to the separateness-of-persons objection ' },
          { t: 'is inadequate', a: 'a2' },
          { t: '. While Parfit (1984) attempts to defuse the objection through his reductionist theory of personal identity, his argument ' },
          { t: 'relies on metaphysical commitments that a preference utilitarian need not — and arguably should not — accept', a: 'a3' },
          { t: '. The argument developed in this chapter ' },
          { t: 'demonstrates that', a: 'a4' },
          { t: ' a coherent consequentialism must engage more seriously with the demands of distributive justice than is customary in the utilitarian tradition.' },
        ],
        annotations: {
          a1: { label: 'Direct first-person claim', color: 'yellow', text: '"I contend that" is unambiguous. In philosophy, where argument is the primary currency, claiming your position directly is a virtue — not presumption. Equivocation is a weakness.' },
          a2: { label: 'Strong evaluative judgment', color: 'rose', text: '"Is inadequate" is a confident, unhedged verdict. It is appropriate here because it will be supported by argument. Strong claims invite the reader to follow the reasoning that justifies them.' },
          a3: { label: 'Qualification that strengthens', color: 'blue', text: '"Need not — and arguably should not — accept" qualifies without retreating. The parenthetical intensification ("and arguably should not") actually makes the critique stronger, not weaker.' },
          a4: { label: 'Strong evidential verb for own argument', color: 'emerald', text: '"Demonstrates that" claims the argument that follows is decisive, not merely suggestive. Reserve it for your strongest moves — using it for routine observations dilutes its force.' },
        },
      },
      {
        discipline: 'Business Strategy — SME Research',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The evidence presented in Chapters 4 and 5 ' },
          { t: 'establishes that', a: 'a1' },
          { t: ' dynamic capability development in SMEs ' },
          { t: 'follows a qualitatively different trajectory', a: 'a2' },
          { t: ' from that documented in large-firm research. This finding has implications that extend beyond the SME literature: it ' },
          { t: 'calls into question', a: 'a3' },
          { t: ' whether the resource-based view, developed primarily in the context of large corporations, ' },
          { t: 'can serve as a general theory of competitive advantage without significant theoretical modification', a: 'a4' },
          { t: '.' },
        ],
        annotations: {
          a1: { label: '"Establishes" — anchored to evidence', color: 'yellow', text: '"Establishes that" is strong, but it is anchored to specific chapters. The confidence is earned — the claim is grounded in demonstrated evidence, not assertion alone.' },
          a2: { label: 'Specific original claim', color: 'blue', text: '"Follows a qualitatively different trajectory" is a precise, original observation — not a vague claim of novelty, but a specific characterisation of what the evidence actually shows.' },
          a3: { label: '"Calls into question" — implication verb', color: 'violet', text: '"Calls into question" extends the finding beyond the data into theoretical territory. It is a confident move: the thesis is not just reporting findings, it is challenging a framework.' },
          a4: { label: 'Bold theoretical claim', color: 'rose', text: 'Claiming a major framework requires "significant theoretical modification" is substantial. It is appropriate here because it follows directly from evidence and has been carefully argued.' },
        },
      },
    ],
    activityPrompt: 'Find the central claim of your thesis — the single thing you most need your reader to believe. Write it three ways: (1) hedged and cautious; (2) direct and confident; (3) direct with a supporting qualification. Which version best reflects what your evidence actually supports?',
    keyTakeaways: [
      'Confidence comes from your relationship to your evidence. If the evidence supports the claim, state it directly. Unnecessary hedging weakens arguments you have earned the right to make.',
      '"Establishes", "demonstrates", and "shows" are appropriate when your evidence genuinely supports the claim. "Suggests" and "indicates" are for when it does not fully.',
      'Qualifications ("arguably", "in many cases") can strengthen a claim by showing you have thought about its limits — they are not the same as retreating from it.',
      'Anchor strong claims to evidence explicitly: "the evidence presented in Chapter 4 establishes..." is more persuasive than an ungrounded assertion.',
    ],
  },

  // ── LESSON 4 ────────────────────────────────────────────────────────────────
  {
    slug: 'academic-critique',
    title: 'Expressing Academic Critique',
    durationMins: 10,
    intro: 'Being critical does not mean being dismissive. Academic critique means identifying the specific limits of a claim, method, or framework — while still acknowledging what it contributes.',
    extracts: [
      {
        discipline: 'Education — Evidence-Based Policy',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Hattie\'s (2009) synthesis of over 800 meta-analyses has been enormously influential in educational policy, and ' },
          { t: 'there is much to commend in the approach', a: 'a1' },
          { t: ': the sheer scale of the evidence base ' },
          { t: 'provides a useful corrective to', a: 'a2' },
          { t: ' the anecdote-driven claims that characterise much practitioner discourse. ' },
          { t: 'However', a: 'a3' },
          { t: ', the effect-size metric that organises Hattie\'s findings ' },
          { t: 'obscures important variation', a: 'a4' },
          { t: ' in study design, population, and context. A mean effect size drawn from studies across radically different educational systems and socioeconomic contexts ' },
          { t: 'may tell us considerably less than it appears to', a: 'a5' },
          { t: '.' },
        ],
        annotations: {
          a1: { label: 'Genuine acknowledgment', color: 'emerald', text: '"There is much to commend" is a real — not perfunctory — acknowledgment of value. It signals careful reading and fair engagement, which makes the critique that follows more credible.' },
          a2: { label: 'Specific positive framing', color: 'blue', text: '"Provides a useful corrective to" names exactly what the work contributes. Specific praise is far more convincing than vague compliments — and makes the critique more persuasive by contrast.' },
          a3: { label: 'The pivot', color: 'yellow', text: '"However" is the pivot that signals the critique is coming. Placed after a full acknowledgment of value, it ensures the critique reads as considered rather than adversarial.' },
          a4: { label: 'Specific critique', color: 'rose', text: '"Obscures important variation" is precise and targeted. It names exactly what the methodological problem is — not "Hattie is wrong" but "this specific metric has this specific limitation".' },
          a5: { label: 'Hedged critical conclusion', color: 'violet', text: '"May tell us considerably less than it appears to" is a crisp, hedged conclusion. "May" preserves appropriate caution; "considerably less than it appears to" is still substantive and memorable.' },
        },
      },
      {
        discipline: 'Environmental Science — Carbon Modelling',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Chen et al.\'s (2020) model of permafrost carbon release ' },
          { t: 'represents a significant contribution to the field', a: 'a1' },
          { t: ' and has directly informed subsequent IPCC projections. ' },
          { t: 'Nonetheless', a: 'a2' },
          { t: ', the model\'s reliance on a relatively small number of measurement sites in Siberia ' },
          { t: 'raises questions about its applicability', a: 'a3' },
          { t: ' to the broader Arctic region. ' },
          { t: 'This is not to suggest that the findings are invalid', a: 'a4' },
          { t: '; rather, it is to note that the confidence intervals reported in the original paper ' },
          { t: 'may not fully reflect', a: 'a5' },
          { t: ' the spatial heterogeneity of Arctic permafrost distribution.' },
        ],
        annotations: {
          a1: { label: 'Substantive acknowledgment', color: 'emerald', text: '"Directly informed IPCC projections" is a specific, high-stakes acknowledgment. If the model were trivial, critiquing it wouldn\'t matter. The acknowledgment makes the critique meaningful.' },
          a2: { label: '"Nonetheless" — calibrated pivot', color: 'yellow', text: '"Nonetheless" is slightly softer than "however" — appropriate when the concern is scope rather than fundamental error. Calibrating your pivot word to the severity of the critique matters.' },
          a3: { label: 'Targeted methodological concern', color: 'blue', text: '"Raises questions about applicability" is specific: the concern is geographic scope, not general validity. Targeted critique is more credible and more useful than broad dismissal.' },
          a4: { label: 'Pre-emptive clarification', color: 'rose', text: '"This is not to suggest that the findings are invalid" protects the critique from being misread as an attack. In science, explicitly clarifying what you are not claiming prevents productive critique from being dismissed.' },
          a5: { label: 'Precise hedged conclusion', color: 'violet', text: '"May not fully reflect" is exact: not "is wrong" or "ignores" — but "may not fully capture this specific feature". Precision makes the critique harder to dismiss and easier to engage with seriously.' },
        },
      },
    ],
    activityPrompt: 'Find a source in your own literature review that you need to critique. Write a critique paragraph that: (1) opens with a genuine acknowledgment of the work\'s contribution; (2) uses a pivot word calibrated to the severity of your critique; (3) makes a specific rather than general criticism; and (4) closes with a hedged but substantive verdict.',
    keyTakeaways: [
      'Academic critique is about identifying the specific limits of a claim or method. Specificity is everything — "this metric obscures variation in X" is far more useful than "this approach has problems".',
      'Always acknowledge genuine contribution before critiquing. It signals fair engagement and makes the critique that follows more credible, not less.',
      '"However" and "nonetheless" are different pivot words — calibrate the strength of your pivot to the seriousness of the critique.',
      'Pre-emptive clarifications ("this is not to suggest that...") protect your critique from misreading and signal intellectual precision.',
    ],
  },

]; // end lessons
