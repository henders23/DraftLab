// Topic 10: Writing the Conclusion Chapter

export const lessons = [
  // ── LESSON 1 ──────────────────────────────────────────────────────────────
  {
    slug: 'summarising-without-repeating',
    title: 'Summarising Without Simply Repeating',
    durationMins: 10,
    intro: 'The conclusion is not a copy-paste of your abstract or a bullet-list of findings. Its job is to synthesise — to show how the parts of the thesis cohere into a whole, and to draw out the larger significance of what has been found. Done well, the conclusion gives the reader a new vantage point from which the whole thesis looks different.',
    extracts: [
      {
        discipline: 'Urban Planning — Housing Precarity and Informal Settlements',
        variant: 'weak',
        label: 'Weak example — restates findings without synthesis',
        segments: [
          { t: 'In conclusion, this thesis has found that informal settlement residents in Lagos face multiple forms of precarity. Chapter Three showed that tenure insecurity was the primary concern for most residents. Chapter Four found that access to water and sanitation was highly variable across sites. Chapter Five demonstrated that community organisations play an important role in service provision. Chapter Six showed that state intervention has been inconsistent and often counterproductive. These findings have implications for urban policy and planning in Lagos and potentially for other cities in sub-Saharan Africa.' },
        ],
        annotations: {},
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Urban Planning — Housing Precarity and Informal Settlements',
        variant: 'strong',
        label: 'Strong example — synthesises findings into a coherent argument',
        segments: [
          { t: 'This thesis has ', a: 'a1' },
          { t: 'argued', a: 'a2' },
          { t: ' that housing precarity in Lagos informal settlements cannot be understood as a series of discrete deficits — tenure insecurity, inadequate sanitation, weak governance — but must be ', a: 'a1' },
          { t: 'recognised as a single, compounding condition', a: 'a3' },
          { t: ' in which each dimension of insecurity reinforces the others. ', a: 'a1' },
          { t: 'The consistent finding across all three field sites', a: 'a4' },
          { t: ' was that community organisations function as de facto infrastructure providers precisely because formal state provision has been structured to exclude informal settlements from the outset — not, as technocratic accounts suggest, because of state incapacity. ', a: 'a4' },
          { t: 'This reframing has direct consequences', a: 'a5' },
          { t: ' for how urban policy should be designed: incrementalist improvement programmes that address tenure separately from sanitation separately from governance are structurally inadequate responses to a structurally integrated problem.', a: 'a5' },
        ],
        annotations: {
          a1: { label: 'Framing the synthesis', color: 'yellow', text: '"Argued" signals this is a conclusion that synthesises, not just reports. The thesis positions itself as having made a case, not merely collected findings.' },
          a2: { label: 'Reporting verb choice', color: 'emerald', text: '"Argued" is stronger than "found" or "showed" — it signals a conceptual contribution, not just empirical accumulation.' },
          a3: { label: 'The thesis-level claim', color: 'blue', text: 'This is the integrative claim that could only be made after examining all the data together — it\'s bigger than any single chapter finding.' },
          a4: { label: 'Key finding restated with interpretation', color: 'rose', text: 'The finding is restated, but now framed as a theoretical intervention: this is not about "incapacity" — it\'s about design. That move transforms a finding into an argument.' },
          a5: { label: 'Policy implications', color: 'violet', text: 'The conclusion draws out consequences — not just "this has implications" but specifying what those implications mean in practice.' },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
    ],
    activityPrompt: 'Look at your own conclusion draft (or write a paragraph now if you haven\'t started). Identify each sentence that simply restates a finding from an earlier chapter. For each one, ask: what does this finding mean when placed next to the others? What larger claim do the findings collectively support that no individual finding could support alone? Rewrite the conclusion so that it advances an integrative claim — a claim the thesis can now make that was not possible at the outset.',
    keyTakeaways: [
      'A conclusion that lists findings chapter by chapter is a summary, not a conclusion — readers come away with no sense of what the thesis as a whole amounts to.',
      'The integrative claim is the key move: what can you now say, having done all of this, that you could not have said before? That claim belongs at the heart of the conclusion.',
      'Conclusions should advance, not merely repeat — even in their restating of key findings, they should frame those findings in light of what they collectively mean.',
    ],
  },

  // ── LESSON 2 ──────────────────────────────────────────────────────────────
  {
    slug: 'implications-and-significance',
    title: 'Implications and Significance',
    durationMins: 10,
    intro: 'Implications are not the same as contributions, and they are not optional extras. Spelling out what your findings mean — for theory, for practice, for future research, or for policy — is what transforms a thesis from a record of what was found into an argument about why it matters. The challenge is to be specific: "this has implications for..." is not enough.',
    extracts: [
      {
        discipline: 'Public Health — Adolescent Mental Health Services',
        segments: [
          { t: 'The findings of this thesis carry ', a: 'a1' },
          { t: 'three distinct sets of implications', a: 'a1' },
          { t: '. ', a: 'a1' },
          { t: 'For clinical practice', a: 'a2' },
          { t: ', the evidence that adolescents systematically under-report distress in formal assessment contexts — but disclose freely in peer-led settings — suggests that current triage protocols, which rely almost exclusively on clinician-administered screening tools, are structurally blind to a significant proportion of clinical need. ', a: 'a2' },
          { t: 'Revised intake procedures that incorporate peer-mediated disclosure pathways', a: 'a3' },
          { t: ', rather than treating them as informal supplements to formal care, would address this gap directly. ', a: 'a3' },
          { t: 'For theory', a: 'a4' },
          { t: ', the findings complicate stage-based developmental models of help-seeking by demonstrating that social context — specifically the perceived stigma attached to formal versus informal support — mediates disclosure behaviour more powerfully than developmental stage alone. This suggests that Rickwood et al.\'s (2005) model requires contextual variables as central rather than peripheral parameters. ', a: 'a4' },
          { t: 'For future research', a: 'a5' },
          { t: ', the most pressing gap is longitudinal: the present study cannot determine whether peer-mediated disclosure translates into sustained engagement with formal services over time, and this question carries significant public health consequences.', a: 'a5' },
        ],
        annotations: {
          a1: { label: 'Signalling multiple implication types', color: 'yellow', text: 'Flagging "three distinct sets" upfront tells the reader what to expect and models clarity of organisation — the conclusion knows what it is doing.' },
          a2: { label: 'Clinical practice implications', color: 'emerald', text: 'The implication is grounded in a specific finding — not just "this has clinical relevance" but identifying the exact mechanism that creates the gap in current practice.' },
          a3: { label: 'Actionable recommendation', color: 'blue', text: 'Implications become valuable when they are translated into specific, actionable directions — not vague calls for "further attention" or "more integrated approaches".' },
          a4: { label: 'Theoretical implications', color: 'rose', text: 'Naming the specific theory and exactly how the findings complicate it demonstrates genuine theoretical engagement — not just gesture towards theory.' },
          a5: { label: 'Future research implications', color: 'violet', text: 'Pointing to what the study cannot determine is honest and useful — future research directions that emerge from real limitations are more credible than manufactured gaps.' },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Intellectual History — The Reception of Darwinism in Victorian Britain',
        segments: [
          { t: 'The significance of this thesis ', a: 'a1' },
          { t: 'extends beyond the Victorian case study', a: 'a1' },
          { t: ' that has been its primary empirical focus. ', a: 'a1' },
          { t: 'By demonstrating that the "Darwinian revolution" was not a singular event but a decades-long process of negotiation, fragmentation, and selective uptake across professional and lay publics', a: 'a2' },
          { t: ', this thesis offers a model for understanding how scientific ideas achieve cultural authority that is applicable to contemporary controversies over evolutionary biology, climate science, and vaccine hesitancy. ', a: 'a2' },
          { t: 'The mechanisms identified here — institutional gatekeeping, vernacular reinterpretation, strategic silence among professional elites — are not Victorian peculiarities but structural features of how contested scientific claims move through literate societies.', a: 'a3' },
          { t: ' The implication for science communication research is that diffusionist models, in which scientific consensus is "communicated" outward to a passive lay public, misrepresent the actual process by which ideas achieve or fail to achieve broad acceptance.', a: 'a4' },
        ],
        annotations: {
          a1: { label: 'Extending the case study\'s significance', color: 'yellow', text: 'Good conclusions make the case that the specific has general lessons — the Victorian case is the evidence, but the argument has broader reach.' },
          a2: { label: 'The finding restated as a model', color: 'emerald', text: 'Rather than just summarising, this reframes the thesis\'s finding as a "model" with transferable applicability — a more ambitious claim appropriate for a conclusion.' },
          a3: { label: 'Structural generalisation', color: 'blue', text: 'Asserting that specific mechanisms are "not Victorian peculiarities but structural features" is a move from the specific to the general — characteristic of strong conclusions.' },
          a4: { label: 'Disciplinary implication', color: 'rose', text: 'The implication names a specific research tradition (diffusionist models) and states precisely how the thesis challenges it — concrete and intellectually engaged.' },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
    ],
    activityPrompt: 'Draft the implications section of your conclusion. For each major finding, write one sentence that begins "This suggests that..." followed by a second sentence that specifies: (a) who needs to act differently, or think differently, or investigate differently, and (b) what exactly they should do or explore. Avoid generic phrases like "further research is needed" — say what specific question needs answering and why it matters.',
    keyTakeaways: [
      'Implications must be specific: "this has implications for X" is not sufficient — say what the implication is, for whom, and why it follows from your findings.',
      'Most theses carry at least three types of implication: theoretical (what does this mean for concepts and frameworks?), practical (what should practitioners or policymakers do differently?), and research-directional (what question does this thesis open up?).',
      'Implications that emerge from acknowledged limitations are more credible than implications that seem to float free of the thesis\'s actual scope.',
    ],
  },

  // ── LESSON 3 ──────────────────────────────────────────────────────────────
  {
    slug: 'future-research-directions',
    title: 'Future Research Directions',
    durationMins: 8,
    intro: 'Every thesis closes doors and opens others. The future research section of a conclusion is not a ritual gesture of humility — it is an opportunity to demonstrate that you understand what your thesis has achieved well enough to know what it has not, and cannot, achieve. The most persuasive future directions emerge directly from the thesis\'s own limitations and findings.',
    extracts: [
      {
        discipline: 'Cognitive Neuroscience — Attention and Working Memory in Ageing',
        segments: [
          { t: 'Several directions for future research emerge directly from the limitations and findings of the present study. ', a: 'a1' },
          { t: 'Most urgently', a: 'a2' },
          { t: ', the cross-sectional design employed here cannot distinguish age-related decline from cohort effects: longitudinal studies tracking the same individuals across a decade or more are necessary before causal claims about ageing-related changes in attentional switching can be made with confidence. ', a: 'a2' },
          { t: 'A second priority', a: 'a3' },
          { t: ' is replication in populations with lower educational attainment; all participants in the current study held at least a first degree, which introduces a potential confound given the well-documented relationship between educational experience and cognitive reserve. ', a: 'a3' },
          { t: 'Beyond these methodological refinements', a: 'a4' },
          { t: ', the unexpected finding that attentional switching costs were smaller in the 70–75 age cohort than in the 65–70 cohort warrants dedicated investigation. ', a: 'a4' },
          { t: 'Whether this reflects genuine non-linear ageing trajectories, compensatory neural recruitment, or a sampling artefact of the current study cannot be determined from the present data, but it constitutes a finding sufficiently anomalous to justify a targeted experimental programme.', a: 'a5' },
        ],
        annotations: {
          a1: { label: 'Grounding future directions in the thesis', color: 'yellow', text: 'Opening with "emerge directly from limitations and findings" signals that these are not generic calls for more research — they are specific and earned.' },
          a2: { label: 'Methodological limitation → future direction', color: 'emerald', text: 'The limitation is stated precisely (cross-sectional cannot establish causality), then the required study design is specified — this is actionable and credible.' },
          a3: { label: 'Sample limitation → future direction', color: 'blue', text: 'Naming the specific confound (educational attainment, cognitive reserve) shows awareness of the literature and links the limitation to its theoretical consequences.' },
          a4: { label: 'Unexpected finding → new research question', color: 'rose', text: 'Anomalous findings are among the most productive sources of future directions — they signal that something in the current model doesn\'t account for the data.' },
          a5: { label: 'Honest acknowledgement of indeterminacy', color: 'violet', text: '"Cannot be determined from the present data" — acknowledging what the thesis cannot explain is a mark of intellectual maturity, not weakness.' },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Cultural Anthropology — Ritual Practice and Digital Mediation',
        segments: [
          { t: 'This thesis has examined how ritual practice is mediated through digital platforms in three urban communities; ', a: 'a1' },
          { t: 'it has not, and could not, have examined how this mediation is experienced across the full range of cultural, economic, and technological contexts in which digital ritual now operates', a: 'a1' },
          { t: '. ', a: 'a1' },
          { t: 'The most productive next step', a: 'a2' },
          { t: ' would be comparative ethnographic work that examines digital ritual in contexts where platform access is intermittent or contested — rural communities with poor connectivity, diaspora communities navigating multiple platform ecologies simultaneously, or communities where platform governance conflicts with local ritual authority. ', a: 'a2' },
          { t: 'Such work would test whether the "platform domestication" dynamic', a: 'a3' },
          { t: ' identified in this thesis — in which communities adapt platform affordances to serve pre-existing ritual logics rather than allowing platform design to reshape ritual — holds across contexts with different technological and institutional environments.', a: 'a3' },
          { t: ' This is not a minor methodological extension but a fundamental theoretical question', a: 'a4' },
          { t: ': if platform domestication is context-dependent, its generalisability as an analytic concept must be reconsidered.', a: 'a4' },
        ],
        annotations: {
          a1: { label: 'Honest scope delimitation', color: 'yellow', text: 'Acknowledging what the thesis "has not, and could not, have examined" is not defensive — it demonstrates command of the research design\'s boundaries.' },
          a2: { label: 'Specific comparative direction', color: 'emerald', text: 'Three specific contexts are named — not "a broader range of communities" but identifiable types with identifiable reasons for interest. This is actionable.' },
          a3: { label: 'Thesis concept being tested', color: 'blue', text: 'Future research is framed as testing whether this thesis\'s central concept holds in other settings — the best future directions extend the thesis\'s own theoretical work.' },
          a4: { label: 'Theoretical stakes of future research', color: 'rose', text: 'Making explicit why the future work matters theoretically — not just empirically — elevates the future directions section from housekeeping to intellectual agenda-setting.' },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
    ],
    activityPrompt: 'List three future research directions for your thesis. For each one: (1) state what limitation or finding gives rise to it; (2) describe the study that would address it (briefly — one or two sentences on design or approach); (3) state why it matters — what would we know, or be able to claim, that we cannot currently? Avoid directions that amount to "a larger sample" or "a longer timeframe" without specifying what would be gained theoretically.',
    keyTakeaways: [
      'The most credible future directions emerge from the thesis\'s own limitations and unexpected findings — not from a general sense that "more research is needed".',
      'Future directions should be specific about design or approach: what kind of study, in what context, with what population, testing what claim or concept.',
      'Articulating the theoretical stakes of future research — why it matters, what would be resolved — demonstrates that you understand the intellectual significance of what your thesis has and has not achieved.',
    ],
  },
];
