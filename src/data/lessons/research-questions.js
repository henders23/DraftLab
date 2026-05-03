// Topic 5: Research Questions & Thesis Statements — 4 annotated lessons

export const lessons = [
  // ─── LESSON 1: What Makes a Good Research Question ───────────────────────
  {
    slug: 'what-makes-a-good-rq',
    title: 'What Makes a Good Research Question',
    durationMins: 10,
    intro:
      'A research question that is too broad cannot be answered — it can only be discussed. A research question that is too narrow answers itself. Getting the scope right is one of the most intellectually demanding tasks of the early PhD, and it is never purely a technical exercise: it requires you to know your field well enough to see what is genuinely unresolved. These two extracts, from Education Policy, show the difference between framing a topic and framing a question.',
    extracts: [
      {
        discipline: 'Education Policy — Poverty and Attainment',
        source: 'PhD thesis excerpt (unfocused framing)',
        variant: 'weak',
        segments: [
          { t: 'The relationship between poverty and educational outcomes ' },
          { t: 'is a major topic in educational research.', a: 'a1' },
          { t: ' Many studies have shown that children from low-income families perform worse in school than their more affluent peers.', a: 'a2' },
          { t: ' This thesis examines this relationship in contemporary England,', a: 'a3' },
          { t: ' drawing on both quantitative data and qualitative interviews with teachers and students.', a: 'a4' },
          { t: ' The aim is to contribute to our understanding of educational inequality ' },
          { t: 'and to consider what might be done about it.', a: 'a5' },
        ],
        annotations: {
          a1: {
            label: 'Topic description, not a question',
            color: 'rose',
            text: '"Is a major topic" describes a field, not a problem. A research question must identify something unresolved — something that cannot be answered by reading existing literature. Labelling a topic as "major" is not the same as identifying a gap.',
          },
          a2: {
            label: 'Settled ground stated without specificity',
            color: 'rose',
            text: '"Many studies have shown" invokes the literature without engaging it. Which studies? Showing what, precisely? This vagueness means the thesis has not yet located itself relative to what is already known.',
          },
          a3: {
            label: '"Examines" — an infinitely expansible verb',
            color: 'rose',
            text: '"Examines this relationship" tells us almost nothing. Which aspect of the relationship? Over what timeframe? For which population? Through which mechanism? A question without these specifications cannot be designed for or answered.',
          },
          a4: {
            label: 'Methods stated before the question is defined',
            color: 'yellow',
            text: 'Methods should follow from the research question — specifying "quantitative data and qualitative interviews" before the question is clear inverts the logic. The choice of methods should be answerable only after: what, precisely, are we trying to find out?',
          },
          a5: {
            label: '"What might be done" — undisciplined aspiration',
            color: 'rose',
            text: 'Policy recommendations are legitimate, but this phrase signals that the thesis has not decided what kind of contribution it is making. Is it empirical? Evaluative? Theoretical? Prescriptive? A good research question commits to a specific kind of answer.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Education Policy — Pupil Premium Funding',
        source: 'PhD thesis excerpt (focused framing)',
        variant: 'strong',
        segments: [
          { t: 'This thesis investigates ' },
          { t: 'whether the introduction of Pupil Premium funding in England between 2011 and 2018', a: 'b1' },
          { t: ' narrowed the Key Stage 4 mathematics attainment gap between pupils eligible for free school meals and their peers, ' },
          { t: 'and, if so, through which school-level mechanisms this effect was produced.', a: 'b2' },
          { t: ' While the macro-level association between disadvantage and attainment is extensively documented,' },
          { t: ' the causal question of whether and how a specific funding intervention produced measurable change', a: 'b3' },
          { t: ' has not been addressed using school-panel data covering the full period of policy implementation. ' },
          { t: 'The research is bounded to state-maintained secondary schools in England ', a: 'b4' },
          { t: 'and focuses on mathematics attainment specifically, ' },
          { t: 'given its status as a high-stakes, standardised outcome measure', a: 'b5' },
          { t: ' that permits reliable cross-school comparison across the study period.' },
        ],
        annotations: {
          b1: {
            label: 'Specific policy, bounded timeframe',
            color: 'emerald',
            text: 'Pupil Premium is a named policy; 2011–2018 is a defined period. The question is not "poverty and attainment" in general — it is about one specific intervention over a specific window. This makes the question answerable.',
          },
          b2: {
            label: 'Two-part question: effect + mechanism',
            color: 'emerald',
            text: '"Whether... and, if so, through which mechanisms" — this is a well-constructed two-part research question. The first part is evaluative (did it work?); the second is explanatory (how?). Separating these shows intellectual clarity about the kinds of answers the thesis will need to produce.',
          },
          b3: {
            label: 'Gap located with precision',
            color: 'blue',
            text: 'The gap is named exactly: the causal question, using school-panel data, covering the full implementation period. This specificity does two things: it justifies the study, and it bounds what the thesis needs to do to fill it.',
          },
          b4: {
            label: 'Scope stated as a deliberate decision',
            color: 'yellow',
            text: '"Bounded to state-maintained secondary schools" — scope is not an apology but a choice. By stating what is included and what is excluded, the researcher demonstrates control over the design, not the limitations of their ambition.',
          },
          b5: {
            label: 'Justification for the specific outcome measure',
            color: 'yellow',
            text: 'Why mathematics and not, say, English or GCSE overall? The researcher explains: standardised, high-stakes, permits reliable comparison. A focused research question justifies its own scope — it does not merely state it.',
          },
        },
      },
    ],
    activityPrompt:
      'Write your research question in one sentence. Then test it against five criteria: (1) Answerable — could evidence in principle settle it? (2) Focused — does it name a specific mechanism, population, period, or context? (3) Significant — why does the answer matter beyond your thesis? (4) Open — is the answer genuinely unknown? (5) Bounded — does it commit to a specific kind of answer (causal, interpretive, evaluative)? Rewrite any version that fails two or more tests.',
    keyTakeaways: [
      'A topic is not a question — "the relationship between X and Y" is a topic. A research question specifies which aspect of that relationship, for whom, over what period, and through what mechanism.',
      'Methods follow from questions: specifying your methodology before you have a precise question inverts the logic of research design.',
      'Scope is stated as a deliberate decision, not an apology — "bounded to X because Y" is a sign of methodological control.',
      'A good research question commits to a specific kind of answer: causal, interpretive, descriptive, evaluative. Not all of these at once.',
    ],
  },

  // ─── LESSON 2: Writing a Thesis Statement ────────────────────────────────
  {
    slug: 'thesis-statement',
    title: 'Writing a Thesis Statement',
    durationMins: 8,
    intro:
      'A thesis statement is the sentence (or two sentences) that states the central argument of your thesis. Not all disciplines require one to be explicitly named, but every thesis needs one to exist — and writing it forces a precision that vague framing can avoid for years. A good thesis statement makes a claim that is specific, arguable, and consequential. These two extracts, from modern history and sociology, show thesis statements in context — embedded in the argumentative framing of an introduction.',
    extracts: [
      {
        discipline: 'Modern History — The Collapse of the Weimar Republic',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The question of why the Weimar Republic collapsed has generated a substantial historiography, ' },
          { t: 'ranging from structural accounts that emphasise constitutional weakness', a: 'a1' },
          { t: ' to conjunctural accounts that foreground the economic dislocations of 1929–1933. ' },
          { t: 'This thesis argues that ' },
          { t: 'neither framework is sufficient on its own,', a: 'a2' },
          { t: ' and that the collapse can only be explained by examining the interaction between institutional vulnerability and the specific political agency of the conservative elites who chose, in January 1933, ' },
          { t: 'to appoint Hitler rather than defend the republic.', a: 'a3' },
          { t: ' The argument is not that structure was irrelevant ' },
          { t: 'but that structure created conditions of possibility rather than deterministic outcomes —', a: 'a4' },
          { t: ' the decisions of Hindenburg, Papen, and Hugenberg remain causally indispensable to any adequate account of the republic\'s end.' },
          { t: ' In making this argument, ', a: 'a5' },
          { t: 'the thesis contributes to the agency-structure debate in historical sociology and challenges voluntarist accounts that treat the Nazi seizure of power as historically inevitable.' },
        ],
        annotations: {
          a1: {
            label: 'Positioning within an existing debate',
            color: 'blue',
            text: 'The thesis statement is introduced by mapping two existing positions. This is standard move: before stating your argument, establish the debate you are entering. The statement\'s distinctiveness becomes visible only against this background.',
          },
          a2: {
            label: '"This thesis argues that" — the declarative marker',
            color: 'emerald',
            text: '"This thesis argues that" is the single most important phrase in a thesis introduction. It signals to the reader: this is the claim everything else in the thesis exists to support. Don\'t bury it — mark it explicitly.',
          },
          a3: {
            label: 'Specific actors, specific moment',
            color: 'emerald',
            text: '"Hindenburg, Papen, Hugenberg... January 1933" — the argument is anchored in specific historical agents at a specific moment. A thesis statement that names its evidence-base (even partially) is more credible than one that gestures at "structural factors."',
          },
          a4: {
            label: 'Qualification that sharpens the claim',
            color: 'yellow',
            text: '"Not that structure was irrelevant but that structure created conditions of possibility rather than deterministic outcomes" — this qualification is doing work: it pre-empts the most obvious objection and sharpens what the argument actually is. Strong thesis statements anticipate their critics.',
          },
          a5: {
            label: 'Contribution identified explicitly',
            color: 'violet',
            text: '"In making this argument, the thesis contributes to..." — the thesis statement closes by naming the scholarly conversation it enters. The reader now knows both what is being argued and why it matters for the field.',
          },
        },
      },
      {
        discipline: 'Medical Sociology — Men and Mental Health Help-Seeking',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Clinical and public health discourse has tended to frame men\'s reluctance to seek help for mental health difficulties as an attitudinal problem — ' },
          { t: 'a set of beliefs and behaviours requiring correction through targeted awareness campaigns', a: 'b1' },
          { t: ' (Galdas et al., 2005; Mackenzie et al., 2006). ' },
          { t: 'This thesis contends that ' },
          { t: 'this framing misidentifies the problem.', a: 'b2' },
          { t: ' Men\'s low rates of mental health help-seeking are not primarily an individual attitude problem ' },
          { t: 'but a structurally produced response to the interaction between hegemonic masculinity norms', a: 'b3' },
          { t: ' and a healthcare system whose communication conventions and service architectures were built around assumptions of a predominantly female patient population. ' },
          { t: 'Reframing the problem in this way has direct implications for intervention design:', a: 'b4' },
          { t: ' it suggests that the most effective strategies will not be those that attempt to change men\'s attitudes but those that reconfigure the structural conditions under which help-seeking occurs.' },
          { t: ' The thesis draws on forty qualitative interviews with men who had experienced mental health difficulties, ', a: 'b5' },
          { t: 'together with an institutional analysis of GP surgery consultation practices, to develop and substantiate this argument.' },
        ],
        annotations: {
          b1: {
            label: 'Existing framing characterised before being challenged',
            color: 'blue',
            text: 'The dominant view is stated accurately and fairly — with citations — before the thesis challenges it. This is intellectually honest: the reader can see exactly what claim is being contested.',
          },
          b2: {
            label: '"This thesis contends that this framing misidentifies the problem"',
            color: 'emerald',
            text: 'Notice how bold this is: not "adds nuance to" or "complicates" but "misidentifies." Strong thesis statements take a clear position. Hedged thesis statements ("this thesis explores some of the complexities of...") signal a writer who has not yet committed to an argument.',
          },
          b3: {
            label: 'Alternative explanation specified precisely',
            color: 'emerald',
            text: '"Not primarily an individual attitude problem but a structurally produced response to the interaction between X and Y" — this is the thesis statement in full. It names the reframing (structural, not attitudinal) and its mechanism (interaction between masculinity norms and healthcare design).',
          },
          b4: {
            label: 'Implications drawn from the reframing',
            color: 'violet',
            text: '"Reframing the problem in this way has direct implications for intervention design" — the thesis statement extends into a claim about consequences. This shows the argument is doing real work: it changes how the problem should be addressed, not just how it should be understood.',
          },
          b5: {
            label: 'Evidence base previewed',
            color: 'yellow',
            text: '"Forty qualitative interviews... together with an institutional analysis" — briefly naming the evidence base tells the reader how the thesis will substantiate its claim. It signals that the argument will be grounded, not merely asserted.',
          },
        },
      },
    ],
    activityPrompt:
      'Write a thesis statement for your own work using this structure: (1) name the existing view or dominant framing you are challenging, extending, or complicating; (2) state your own claim using "This thesis argues/contends that..."; (3) specify the evidence or approach you will use to substantiate it. Read it back: is the claim specific enough that someone could construct evidence that would refute it? If not, tighten it.',
    keyTakeaways: [
      '"This thesis argues that..." is not a cliché — it is the most important sentence in your introduction. Use it explicitly, and don\'t bury it.',
      'A thesis statement makes a claim that is falsifiable: if no evidence could in principle undermine it, it is an assertion, not an argument.',
      'Strong thesis statements anticipate their critics: "not that X, but that Y" pre-empts the most obvious objection and sharpens the claim.',
      'The thesis statement should name — at least briefly — the scholarly conversation it enters and what it adds to that conversation.',
    ],
  },

  // ─── LESSON 3: Sub-questions and Objectives ──────────────────────────────
  {
    slug: 'sub-questions',
    title: 'Sub-questions and Objectives',
    durationMins: 8,
    intro:
      'Sub-questions break the central research question into investigative units — typically one per chapter. Getting this architecture right early matters enormously, because it determines what your thesis actually needs to produce. A well-constructed set of sub-questions should be logically ordered (later ones depend on earlier ones), collectively sufficient (answering all of them should answer the central question), and mutually exclusive (no two sub-questions should address the same thing). The two extracts below show how sub-questions are developed and justified across public health and environmental studies.',
    extracts: [
      {
        discipline: 'Public Health — Early Nutrition and Cognitive Development',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The central research question asks: ' },
          { t: 'to what extent does dietary quality in the first three years of life predict cognitive outcomes at age seven,', a: 'a1' },
          { t: ' and what role do family socioeconomic resources play in mediating this relationship? ' },
          { t: 'This question is addressed through three subsidiary questions, each of which corresponds to an empirical chapter. ' },
          { t: 'The first asks ' },
          { t: 'what dietary patterns characterise children aged zero to three in the study cohort, and how these vary by maternal education and household income.', a: 'a2' },
          { t: ' The second examines the longitudinal association between dietary quality at each wave of data collection — ' },
          { t: 'ages one, two, and three — and performance on cognitive assessments at age seven,', a: 'a3' },
          { t: ' controlling for the range of confounding variables identified in the first chapter. ' },
          { t: 'The third asks to what extent the dietary-cognitive associations identified in the second chapter are mediated by socioeconomic resources,', a: 'a4' },
          { t: ' specifically maternal education, household food security, and income-to-needs ratio. ' },
          { t: 'Together, these three sub-questions constitute a sufficient answer to the central question:', a: 'a5' },
          { t: ' the first establishes the landscape of dietary variation; the second tests the predictive relationship; the third explains the conditions under which that relationship holds.' },
        ],
        annotations: {
          a1: {
            label: 'Central question: two-part structure',
            color: 'blue',
            text: 'The central question has two parts: a predictive part ("to what extent does X predict Y?") and a mediation part ("what role does Z play?"). The sub-questions exist to answer each part systematically — they should collectively exhaust the central question.',
          },
          a2: {
            label: 'Sub-question 1: descriptive and foundational',
            color: 'emerald',
            text: 'The first sub-question is descriptive: what does the dietary landscape look like? This is necessary groundwork — the analysis in Sub-question 2 depends on having established the pattern of variation in Sub-question 1. Ordering sub-questions so that earlier ones generate the inputs for later ones is the mark of a well-designed thesis architecture.',
          },
          a3: {
            label: 'Sub-question 2: analytical and dependent on Sub-Q 1',
            color: 'emerald',
            text: '"Controlling for the range of confounding variables identified in the first chapter" — the second sub-question depends on the first. The reader can see how the architecture accumulates: you cannot test prediction without first establishing the baseline distribution.',
          },
          a4: {
            label: 'Sub-question 3: explanatory and dependent on Sub-Q 2',
            color: 'emerald',
            text: '"The associations identified in the second chapter" — the third sub-question builds on the second. It asks why the association holds (or doesn\'t), which presupposes the association has been established. Logical dependency between sub-questions is what makes a thesis more than a collection of independent studies.',
          },
          a5: {
            label: 'Explicit claim of sufficiency',
            color: 'violet',
            text: '"Together, these three sub-questions constitute a sufficient answer to the central question" — the researcher makes the architecture explicit. This sentence is important: it tells the reader why these sub-questions and not others, and why three is enough.',
          },
        },
      },
      {
        discipline: 'Environmental Studies — Community Responses to Managed Coastal Retreat',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The research is organised around four objectives, which operationalise the central question of how coastal communities understand, respond to, and seek to influence managed retreat policy. ' },
          { t: 'Objective one is to document ' },
          { t: 'the range of community framings of managed retreat across three case-study sites', a: 'b1' },
          { t: ' in East Anglia, including how residents conceptualise the threats posed by coastal erosion and the legitimacy of different policy responses. ' },
          { t: 'Objective two is to analyse ' },
          { t: 'the processes through which these framings are formed and contested,', a: 'b2' },
          { t: ' with particular attention to the role of local knowledge, emotional attachment to place, and relationships with statutory authorities. ' },
          { t: 'Objective three is to examine ', a: 'b3' },
          { t: 'how community framings interact with official policy rationales during public consultation processes, and where the most significant points of conflict and alignment occur. ' },
          { t: 'Objective four is to develop ', a: 'b4' },
          { t: 'an analytic framework that can account for the variation in community responses observed across the three sites, ' },
          { t: 'drawing on theories of environmental justice, place attachment, and risk governance.', a: 'b5' },
        ],
        annotations: {
          b1: {
            label: 'Objective 1: descriptive grounding',
            color: 'emerald',
            text: 'The first objective is descriptive and empirical: document what the framings are. This is the necessary foundation. Like Sub-question 1 in the previous extract, it produces the data that all subsequent objectives work with.',
          },
          b2: {
            label: 'Objective 2: process analysis',
            color: 'emerald',
            text: 'The second objective asks how framings are formed — a process question rather than a descriptive one. It depends on Objective 1 having established what the framings are. The verbs escalate: document → analyse → examine → develop.',
          },
          b3: {
            label: 'Objective 3: relational analysis',
            color: 'yellow',
            text: '"How community framings interact with official policy rationales" — this objective requires the outputs of both Objective 1 (community framings) and an understanding of policy rationales. It synthesises across levels of analysis. Third objectives often do the most complex analytical work.',
          },
          b4: {
            label: 'Objective 4: theoretical contribution',
            color: 'violet',
            text: '"Develop an analytic framework" — the final objective is theoretical rather than empirical: it uses the empirical findings from Objectives 1–3 to build a broader analytical contribution. This is how a doctoral thesis moves from data to knowledge: the last objective is often where the original contribution lives.',
          },
          b5: {
            label: 'Theoretical anchors named',
            color: 'blue',
            text: 'Three theoretical frameworks are named: environmental justice, place attachment, risk governance. This signals that the theoretical framework has been chosen deliberately and relates directly to the questions being asked — the theory is not decorative but instrumental.',
          },
        },
      },
    ],
    activityPrompt:
      'Write out your central research question and your sub-questions or objectives side by side. For each sub-question, answer: (1) Which chapter addresses it? (2) Does it depend on any other sub-question being answered first? (3) What does it contribute toward answering the central question? If you cannot answer all three for every sub-question, the architecture needs rethinking.',
    keyTakeaways: [
      'Sub-questions should be logically ordered — later ones typically depend on findings from earlier ones.',
      'Collectively, your sub-questions should be sufficient: answering all of them should constitute an answer to your central research question.',
      'The verbs of your sub-questions escalate in analytical ambition: describe → analyse → explain → theorise.',
      'The final sub-question or objective is often where the original contribution of the thesis lives — it synthesises or theorises from what the empirical chapters established.',
    ],
  },

  // ─── LESSON 4: Disciplinary Conventions for Framing Research ─────────────
  {
    slug: 'discipline-conventions',
    title: 'Disciplinary Conventions for Framing Research',
    durationMins: 10,
    intro:
      'The language in which a research question is framed is not neutral. "Testing the hypothesis that..." signals a different epistemological commitment from "exploring how..." or "examining the extent to which...". Disciplinary conventions for framing research are not just stylistic preferences — they reflect deeper assumptions about what counts as knowledge, what kinds of evidence are valid, and what a contribution looks like. These two extracts, from molecular biology and literary studies, illustrate how different disciplinary frameworks produce radically different framing conventions.',
    extracts: [
      {
        discipline: 'Molecular Biology — CRISPR-Mediated Gene Regulation',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'This study tests the hypothesis that ' },
          { t: 'CRISPRi-mediated repression of the SLC7A11 promoter', a: 'a1' },
          { t: ' reduces cystine uptake in triple-negative breast cancer cell lines and sensitises them to ferroptosis induction under oxidative stress conditions. ' },
          { t: 'Three specific objectives are addressed. ' },
          { t: 'First, to establish baseline expression levels of SLC7A11 across a panel of five TNBC cell lines', a: 'a2' },
          { t: ' using qRT-PCR and western blotting. ' },
          { t: 'Second, to construct and validate a dCas9-KRAB transcriptional repressor system targeting the SLC7A11 promoter,', a: 'a3' },
          { t: ' assessing repression efficiency by comparing transcript and protein levels in transduced versus control cells. ' },
          { t: 'Third, to quantify the effects of SLC7A11 repression on ' },
          { t: 'cystine uptake, glutathione synthesis, and cell viability', a: 'a4' },
          { t: ' following treatment with RSL3 and erastin under normoxic and hypoxic conditions. ' },
          { t: 'The hypothesis will be considered supported if ', a: 'a5' },
          { t: 'CRISPRi-transduced cells show statistically significant reductions in cystine uptake and increased sensitivity to ferroptosis inducers relative to scrambled-guide controls.' },
        ],
        annotations: {
          a1: {
            label: 'Hypothesis framing — specific and falsifiable',
            color: 'blue',
            text: 'The hypothesis names a specific molecular target (SLC7A11 promoter), a specific mechanism (CRISPRi repression), a specific outcome (ferroptosis sensitivity), and a specific context (TNBC cell lines). In experimental science, a hypothesis must be falsifiable: the precise conditions under which it would be refuted are built into the framing.',
          },
          a2: {
            label: 'Objectives as experimental steps',
            color: 'emerald',
            text: '"First... Second... Third..." — in experimental biology, objectives are sequenced experimental procedures that build toward testing the hypothesis. Each produces a specific measurable output. The language is operational: "establish", "construct and validate", "quantify."',
          },
          a3: {
            label: 'Technical specificity signals expertise',
            color: 'yellow',
            text: '"dCas9-KRAB transcriptional repressor system" — the technical precision of the framing is itself a claim to disciplinary membership. In the sciences, vague framing signals junior status; specific technical language signals mastery of the relevant literature and methods.',
          },
          a4: {
            label: 'Outcomes are measurable quantities',
            color: 'yellow',
            text: 'Cystine uptake, glutathione synthesis, and cell viability are all quantifiable. The hypothesis is testable because the outcomes can be measured and compared. In contrast to humanities framing, interpretive flexibility is minimised: the question has a binary answer (supported / not supported).',
          },
          a5: {
            label: 'Pre-specified falsification criterion',
            color: 'violet',
            text: '"The hypothesis will be considered supported if..." — this is an unusual but rigorous move: specifying in advance what would count as support or refutation. Pre-registration of this kind is increasingly expected in clinical and biomedical research as a safeguard against post-hoc reasoning.',
          },
        },
      },
      {
        discipline: 'Literary Studies — Post-War British Fiction',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'This thesis offers a reading of ' },
          { t: 'the representation of masculine domesticity in British fiction of the 1950s and 1960s', a: 'b1' },
          { t: ' as a site of ideological negotiation between competing models of postwar national identity. ' },
          { t: 'Rather than treating domestic spaces in the fiction of this period as passive settings,' },
          { t: ' the thesis argues that they are actively contested cultural terrain,', a: 'b2' },
          { t: ' in which writers including Kingsley Amis, Alan Sillitoe, and John Braine deploy architectural and spatial metaphors to work through anxieties about ' },
          { t: 'class mobility, imperial decline, and the changing terms of masculine selfhood.', a: 'b3' },
          { t: ' The analysis proceeds through close reading of six novels, ', a: 'b4' },
          { t: 'situating each within its immediate cultural and publishing context ' },
          { t: 'before identifying the recurring figurative structures through which the novels articulate — ', a: 'b5' },
          { t: 'and, in some cases, resist — the dominant domestic ideologies of the period.' },
        ],
        annotations: {
          b1: {
            label: '"Offers a reading of" — interpretive framing',
            color: 'blue',
            text: '"Offers a reading" signals that the thesis is making an interpretive claim, not testing a falsifiable hypothesis. In literary studies, a reading is understood to be one plausible interpretation among others — authoritative but not exclusive. This epistemic modesty is built into the framing.',
          },
          b2: {
            label: 'Contested cultural terrain — the argument',
            color: 'emerald',
            text: '"Rather than treating X as Y, the thesis argues that X is Z" — this is the humanities version of the thesis statement. It is structured as a contestation of an implicit prior assumption ("passive settings") rather than a test of a hypothesis. The claim is interpretive, not predictive.',
          },
          b3: {
            label: 'Named texts and named cultural anxieties',
            color: 'yellow',
            text: 'Specific authors and specific cultural anxieties are named. In literary studies, particularity of reference — named texts, named figurative structures — is the humanities equivalent of scientific specificity. Vague claims ("fiction of this period reflects social change") carry no argumentative weight.',
          },
          b4: {
            label: '"Close reading" — the method',
            color: 'yellow',
            text: '"Close reading" is the dominant method of literary studies. Stating it does not require lengthy justification here — in humanities disciplines, method is often implied by the field and the type of claim being made, rather than specified procedurally as in the sciences.',
          },
          b5: {
            label: '"Articulate — and, in some cases, resist"',
            color: 'violet',
            text: 'The analytical framework allows for complexity: texts do not simply reproduce dominant ideologies but may resist them. This tolerance for interpretive ambiguity is characteristic of humanities framing — unlike scientific hypotheses, interpretive claims can be confirmed in degrees rather than confirmed or refuted outright.',
          },
        },
      },
    ],
    activityPrompt:
      'Find three recent PhD theses in your field through your university library. Read the first paragraph of each thesis\'s introduction. What verb does each use to frame the research — test, investigate, explore, argue, examine, read, analyse, demonstrate? What does the pattern of verbs tell you about the epistemological commitments of your discipline? Now check your own research question: does its verb accurately reflect what kind of answer your thesis will actually produce?',
    keyTakeaways: [
      'In experimental sciences, research is typically framed as hypothesis testing — specific, falsifiable, with pre-specified outcomes.',
      'In humanities, research is typically framed as interpretation or argument — plausible, positioned, allowing for complexity and ambiguity.',
      'In social sciences, both framings coexist — quantitative work tends toward hypothesis testing; qualitative work tends toward interpretive argument.',
      'The verb you use to frame your research question is not neutral: "test" implies a hypothesis; "explore" implies inductive inquiry; "argue" implies a position; "examine" implies analysis. Choose the verb that matches your epistemological commitments.',
    ],
  },

];
