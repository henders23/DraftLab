// Topic 4: Sentence & Paragraph Structure — 4 annotated lessons

export const lessons = [
  // ─── LESSON 1: Topic Sentences and Paragraph Focus ───────────────────────
  {
    slug: 'topic-sentences',
    title: 'Topic Sentences and Paragraph Focus',
    durationMins: 8,
    intro:
      'A paragraph that lacks a clear topic sentence does not fail because of a missing first line — it fails because the writer has not yet decided what the paragraph is for. The topic sentence is not a formal requirement: it is the sign that the writer has made a commitment. These two extracts cover the same material on urban regeneration. Notice how the absence or presence of a claim at the opening changes everything about how the paragraph functions.',
    extracts: [
      {
        discipline: 'Urban Sociology — Regeneration and Displacement',
        source: 'PhD thesis excerpt (unfocused paragraph)',
        variant: 'weak',
        segments: [
          { t: 'Urban regeneration schemes have been implemented in many British cities since the 1990s.', a: 'a1' },
          { t: ' Manchester\'s Northern Quarter, London\'s King\'s Cross, and Birmingham\'s Digbeth all underwent substantial physical transformation during this period.', a: 'a2' },
          { t: ' Private developers played an increasing role in these schemes.' },
          { t: ' Community consultation processes varied considerably between projects.', a: 'a3' },
          { t: ' The displacement of long-standing residents was a documented outcome in several cases.' },
          { t: ' Gentrification has been a contested concept in urban studies since the 1970s (Glass, 1964).', a: 'a4' },
        ],
        annotations: {
          a1: {
            label: 'Background statement, not a claim',
            color: 'rose',
            text: 'This sentence reports a fact about timing and geography. It is not arguable — no one would disagree. A topic sentence must make a claim that requires the rest of the paragraph to support it.',
          },
          a2: {
            label: 'Example list, not argument',
            color: 'rose',
            text: 'Three place-names are listed. But listed for what purpose? The paragraph has not yet told the reader what argumentative work these examples are doing.',
          },
          a3: {
            label: 'Observation with no payoff',
            color: 'rose',
            text: '"Varied considerably" is vague and directionless. This sentence could be deleted without the reader noticing anything is missing — a reliable test of whether a sentence belongs in a paragraph.',
          },
          a4: {
            label: 'Late, mismatched introduction',
            color: 'rose',
            text: 'After five sentences on regeneration schemes, the paragraph suddenly introduces gentrification. This is a new idea that should open a new paragraph — or the paragraph should have been about gentrification all along.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Urban Sociology — Regeneration and Displacement',
        source: 'PhD thesis excerpt (focused paragraph)',
        variant: 'strong',
        segments: [
          { t: 'Urban regeneration schemes in post-industrial British cities have consistently ' },
          { t: 'privileged the interests of private developers over those of existing communities,', a: 'b1' },
          { t: ' a pattern documented across Manchester\'s Northern Quarter, London\'s King\'s Cross, and Birmingham\'s Digbeth. ' },
          { t: 'In each case, community consultation processes were either absent or tokenistic' },
          { t: ' (Davidson and Lees, 2010; Lees et al., 2016),', a: 'b2' },
          { t: ' while the displacement of established residents proceeded at a pace that outstripped any compensatory housing provision. ' },
          { t: 'This pattern cannot be attributed simply to the decisions of individual local authorities: ' },
          { t: 'it reflects instead the structural dependency of post-Thatcher urban policy on private investment,', a: 'b3' },
          { t: ' a dependency that constrained the range of policy options available to councils regardless of their political composition.' },
          { t: ' The paragraph\'s argument, in short, is that regeneration is not a neutral process but a mechanism of accumulation by dispossession', a: 'b4' },
          { t: ' (Harvey, 2003).' },
        ],
        annotations: {
          b1: {
            label: 'Arguable claim in the opening sentence',
            color: 'emerald',
            text: '"Privileged the interests of private developers over those of existing communities" is specific and arguable — someone could reasonably challenge it. This is what a topic sentence does: it commits the writer to a position that the rest of the paragraph must defend.',
          },
          b2: {
            label: 'Evidence follows the claim',
            color: 'blue',
            text: 'The three place-names from the weak version reappear here — but now they are evidence for the opening claim, not a free-floating list. The claim creates the frame that makes examples meaningful.',
          },
          b3: {
            label: 'Analytical move: structural explanation',
            color: 'yellow',
            text: '"Cannot be attributed simply to... reflects instead..." is the paragraph\'s analytical pivot. The writer isn\'t just describing what happened — they are explaining why, and at what level of causation. This is the job of the body sentences.',
          },
          b4: {
            label: 'Closing sentence draws significance',
            color: 'emerald',
            text: 'The final sentence names the theoretical frame ("accumulation by dispossession") and signals what this paragraph establishes for the broader argument. It closes the loop opened by the topic sentence.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
    ],
    activityPrompt:
      'Take five consecutive paragraphs from your draft. Cover the first sentence of each with a piece of paper, then read the rest of the paragraph. Can you infer what the opening sentence should say? If you can, the topic sentence is probably doing its job. If the paragraph gives you no clear idea what claim it is making, your topic sentence needs rewriting — or the paragraph needs to be reconceived.',
    keyTakeaways: [
      'A topic sentence is not a signpost ("This section will discuss...") — it is a claim that the rest of the paragraph is committed to supporting.',
      'If the opening sentence reports a fact that no one would dispute, it is background, not a topic sentence.',
      'The closing sentence should draw significance — connecting what the paragraph has shown back to the broader argument.',
      'Test your paragraph by deleting each sentence in turn. If a sentence can be deleted without loss, it should either be cut or rewritten to earn its place.',
    ],
  },

  // ─── LESSON 2: Coherence and Cohesion ────────────────────────────────────
  {
    slug: 'coherence-cohesion',
    title: 'Coherence and Cohesion',
    durationMins: 10,
    intro:
      'Coherence and cohesion are related but distinct. Coherence is the quality of logical connection — do the ideas in a paragraph follow from each other sensibly? Cohesion is the linguistic machinery that signals those connections — pronouns, repeated terms, and discourse markers that stitch sentences together. A paragraph can have one without the other. These extracts show both at work, across applied linguistics and epidemiology.',
    extracts: [
      {
        discipline: 'Applied Linguistics — Academic Writing Development',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Genre pedagogy rests on the premise that ' },
          { t: 'writing is a socially situated practice', a: 'a1' },
          { t: ' whose conventions are neither arbitrary nor neutral. ' },
          { t: 'This premise', a: 'a2' },
          { t: ' has significant consequences for how writing development is theorised: ' },
          { t: 'if conventions emerge from disciplinary communities\'s ways of making knowledge,', a: 'a3' },
          { t: ' then novice writers are not merely learning to format text but acquiring membership of a community of practice ' },
          { t: '(Lave and Wenger, 1991). ' },
          { t: 'Such membership is, however, asymmetrical —', a: 'a4' },
          { t: ' newcomers enter communities in which the conventions were established before them and often without their input. ' },
          { t: 'This asymmetry is ', a: 'a5' },
          { t: 'particularly consequential for students from non-dominant linguistic backgrounds,' },
          { t: ' for whom genre conventions may encode cultural norms that are simultaneously unfamiliar and unspoken.' },
        ],
        annotations: {
          a1: {
            label: 'Key term introduced',
            color: 'blue',
            text: '"Writing is a socially situated practice" — this phrase is introduced here and will generate the cohesive chain that holds the paragraph together. Introducing a key term clearly at the start is a cohesive strategy.',
          },
          a2: {
            label: 'Pronoun reference (cataphoric)',
            color: 'emerald',
            text: '"This premise" picks up the entire previous sentence. Using a noun phrase ("this premise") rather than a bare pronoun ("this") is a cohesion best practice — it reminds the reader what the "this" refers to and classifies it as a premise.',
          },
          a3: {
            label: 'Logical connector: conditional',
            color: 'yellow',
            text: '"If... then..." is a logical connector that makes the inferential relationship between sentences explicit. The reader knows they are being walked through a logical consequence, not a new topic.',
          },
          a4: {
            label: '"However" — contrast within the chain',
            color: 'rose',
            text: '"Such membership is, however, asymmetrical" — "such membership" maintains the lexical chain (membership → community → newcomers → membership), while "however" signals a complication within the established frame. Both cohesion and coherence are working simultaneously.',
          },
          a5: {
            label: 'Lexical repetition tying conclusion to opening',
            color: 'violet',
            text: '"This asymmetry" picks up the word introduced in the previous sentence and uses it to pivot toward the paragraph\'s culminating point. Lexical chains — where each sentence picks up a word from the one before — are one of the most powerful cohesive tools in academic writing.',
          },
        },
      },
      {
        discipline: 'Epidemiology — Social Determinants of Health',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The relationship between neighbourhood deprivation and cardiovascular outcomes is well documented' },
          { t: ' (Diez Roux and Mair, 2010; Pickett and Pearl, 2001),', a: 'b1' },
          { t: ' yet the mechanisms through which area-level disadvantage translates into individual-level risk remain contested. ' },
          { t: 'One strand of evidence implicates psychosocial pathways: ' },
          { t: 'chronic exposure to neighbourhood stressors — crime, disorder, resource deprivation — ', a: 'b2' },
          { t: 'activates allostatic load processes that, over time, increase cardiovascular vulnerability ' },
          { t: '(McEwen, 1998). ' },
          { t: 'A second strand emphasises material pathways,', a: 'b3' },
          { t: ' pointing to differential access to healthy food, green space, and primary care as the proximate causes of health disparities. ' },
          { t: 'These two explanations are not mutually exclusive,', a: 'b4' },
          { t: ' and a growing body of multilevel research suggests that ' },
          { t: 'psychosocial and material mechanisms operate simultaneously', a: 'b5' },
          { t: ' and may interact synergistically in the most deprived areas.' },
        ],
        annotations: {
          b1: {
            label: 'Concession + pivot: "yet"',
            color: 'rose',
            text: '"Well documented... yet... remain contested" — the single sentence establishes what is known and pivots to the unresolved question in one move. "Yet" is a high-efficiency coherence marker that signals disagreement without needing a new sentence.',
          },
          b2: {
            label: 'Signposting with enumerative structure',
            color: 'blue',
            text: '"One strand... A second strand" — this is explicit enumeration, one of the clearest cohesive strategies available. The reader knows there will be at least two strands and that the paragraph is mapping them. Parallel structure reinforces this.',
          },
          b3: {
            label: 'Parallel syntax across strands',
            color: 'blue',
            text: '"A second strand emphasises material pathways" mirrors "One strand implicates psychosocial pathways" — same syntactic frame, different content. Parallelism is a cohesive tool that makes comparison effortless for the reader.',
          },
          b4: {
            label: 'Integration move: "not mutually exclusive"',
            color: 'emerald',
            text: '"These two explanations are not mutually exclusive" draws both strands together. "These two explanations" picks up all the preceding content with a single noun phrase — this is cohesion doing heavy lifting at the paragraph\'s turning point.',
          },
          b5: {
            label: 'Lexical callback to both strands',
            color: 'violet',
            text: '"Psychosocial and material mechanisms" — both key terms from earlier in the paragraph reappear here in one phrase. This callback creates a sense of closure and signals that the paragraph has delivered what its structure promised.',
          },
        },
      },
    ],
    activityPrompt:
      'Select a paragraph from your draft and underline every word or phrase that links back to the previous sentence — pronouns ("this", "these", "they"), repeated key terms, synonyms, and discourse markers ("however", "therefore", "in contrast"). If you find fewer than two links per sentence, the paragraph likely has a cohesion problem: sentences are sitting next to each other without connecting. Rewrite the weakest transitions.',
    keyTakeaways: [
      'Cohesion is linguistic: the machinery of pronouns, repeated terms, and discourse markers that joins sentences together.',
      'Coherence is logical: the ideas must follow from each other sensibly, independently of the language used to signal that.',
      'Use noun phrases ("this argument", "this asymmetry") rather than bare "this" — they remind the reader what is being referred to and classify it, adding precision.',
      'Parallelism ("One strand... A second strand...") is a powerful cohesive device that makes structural logic visible without extra explanation.',
    ],
  },

  // ─── LESSON 3: Sentence Variety and Rhythm ───────────────────────────────
  {
    slug: 'sentence-variety',
    title: 'Sentence Variety and Rhythm',
    durationMins: 8,
    intro:
      'Reading a page of uniformly long sentences is exhausting — not because any single sentence is difficult, but because the reader never gets to rest. Sentence variety is not a stylistic flourish: it is a functional tool for emphasis, pacing, and clarity. Short sentences land claims. Long sentences elaborate, qualify, and contextualise. The extracts below, from post-colonial theory and biomedical science, show how writers in very different registers use sentence length deliberately.',
    extracts: [
      {
        discipline: 'Post-Colonial Theory — Frantz Fanon Scholarship',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Fanon\'s analysis of colonial psychiatry resists reduction to a single theoretical framework. ', a: 'a1' },
          { t: 'On one reading, it extends Marxist political economy into the domain of psychic life, treating mental illness as the predictable symptom of a mode of production built on racial subjugation. ' },
          { t: 'On another, it prefigures post-structuralist accounts of subject formation, tracing the ways in which colonial discourse interpolates the colonised subject into a position of constitutive inferiority — a position not externally imposed but internalised as the felt texture of everyday life (Fanon, 1952; Bhabha, 1994). ' },
          { t: 'Neither reading is wrong.', a: 'a2' },
          { t: ' But neither is sufficient. ', a: 'a3' },
          { t: 'What both miss is the specifically phenomenological register of Fanon\'s argument: his insistence that colonialism is experienced not merely as a set of material constraints or discursive positions but as a lived distortion of the body in space — ', a: 'a4' },
          { t: 'the zone of non-being that precedes and exceeds the analytic categories of either framework.' },
        ],
        annotations: {
          a1: {
            label: 'Short opening sentence — stakes a claim',
            color: 'emerald',
            text: 'Fourteen words. The sentence makes a bold claim and stops. Its brevity is not accidental: a short sentence at the opening of a paragraph signals confidence and invites the reader to lean in.',
          },
          a2: {
            label: 'Three-word sentence — maximum emphasis',
            color: 'emerald',
            text: 'After two long sentences presenting "On one reading... On another reading...", this three-word sentence lands like a full stop on the argument so far. Its brevity enacts the concession it makes: yes, both are right.',
          },
          a3: {
            label: 'Four-word sentence — the pivot',
            color: 'rose',
            text: '"But neither is sufficient." — the pivot of the entire paragraph. It is short because the claim is complete in itself; it needs no elaboration at this moment. Length withheld here creates anticipation for what follows.',
          },
          a4: {
            label: 'Long sentence — elaboration and qualification',
            color: 'blue',
            text: 'After two short emphatic sentences, the long sentence arrives to do the real analytical work: defining the phenomenological register and what "both miss." Long sentences earn their length through content — this one is doing three things at once (naming the gap, defining it, giving an example).',
          },
        },
      },
      {
        discipline: 'Biomedical Science — Tumour Microenvironment Research',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The tumour microenvironment is not passive.', a: 'b1' },
          { t: ' Far from providing a neutral scaffold for malignant cells, it comprises an actively remodelled network of stromal fibroblasts, immune cells, vascular endothelium, and extracellular matrix components — each of which may either suppress or promote tumour progression depending on the contextual signals they receive ' },
          { t: '(Hanahan and Coussens, 2012; Quail and Joyce, 2013). ', a: 'b2' },
          { t: 'The distinction between tumour-suppressive and tumour-promoting microenvironments is, however, ', a: 'b3' },
          { t: 'not fixed at diagnosis: longitudinal studies have shown that the balance between these states is dynamic, shifting in response to therapeutic pressure, hypoxia, and the accumulating mutational burden of the tumour itself. ' },
          { t: 'This has clinical implications.', a: 'b4' },
          { t: ' Treatments that are effective when the microenvironment is initially immunostimulatory may lose efficacy as the balance shifts, suggesting that ', a: 'b5' },
          { t: 'longitudinal profiling of microenvironmental state — rather than a single baseline assessment — may be necessary for durable therapeutic response.' },
        ],
        annotations: {
          b1: {
            label: 'Short claim — four words',
            color: 'emerald',
            text: '"The tumour microenvironment is not passive." — four words that overturn an implicit assumption. In scientific writing, where sentences tend toward length and complexity, a short declarative claim has particular force precisely because it is unexpected.',
          },
          b2: {
            label: 'Long sentence — technical elaboration',
            color: 'blue',
            text: 'The long sentence that follows earns its length: it has to list the components and qualify the claim with "depending on contextual signals." Technical content often requires long sentences — but only when the content genuinely requires it, not by habit.',
          },
          b3: {
            label: 'Medium sentence bridging to complication',
            color: 'yellow',
            text: 'A medium-length sentence signals a complication: "not fixed at diagnosis." It bridges between the long elaborating sentence and the next long one, giving the reader a moment to absorb the direction of travel before the detail follows.',
          },
          b4: {
            label: 'Short sentence — three words of implication',
            color: 'emerald',
            text: '"This has clinical implications." — another short sentence, this time functioning as a signpost rather than a claim. It tells the reader what kind of thing is coming next, creating anticipation. Short sentences don\'t just make arguments: they direct the reader\'s attention.',
          },
          b5: {
            label: 'Long sentence — the practical consequence',
            color: 'blue',
            text: 'The final long sentence delivers the clinical implication in full. Its length matches its content: it needs to describe a causal sequence (treatment → shift → loss of efficacy → implication). The rhythm of short-long-short-long-short-long is not accidental — it gives the writing movement.',
          },
        },
      },
    ],
    activityPrompt:
      'Take one page of your draft and mark each sentence S (short: under 15 words), M (medium: 15–30), or L (long: over 30). Read the pattern aloud. If you have five or more M or L sentences in a row, identify the most important claim in that run and rewrite it as a short sentence. Then read the page again — notice how the rhythm changes and where emphasis falls differently.',
    keyTakeaways: [
      'Short sentences create emphasis and force a pause — use them to land key claims, mark pivots, or signal implications.',
      'Long sentences do the work of elaboration, qualification, and accumulation of evidence — they earn their length through content, not verbosity.',
      'Vary sentence length deliberately, not randomly: the pattern S–L–S–L creates rhythm; five consecutive L sentences creates exhaustion.',
      'In both humanities and sciences, a short sentence arriving after a run of long ones has maximum impact — the contrast is the tool.',
    ],
  },

  // ─── LESSON 4: Building an Argument Across Sections ─────────────────────
  {
    slug: 'argument-across-sections',
    title: 'Building an Argument Across Sections',
    durationMins: 10,
    intro:
      'A paragraph makes a local argument. A section makes a larger argument from several paragraphs. A chapter makes an even larger argument from several sections. And a thesis makes its central argument by coordinating all its chapters. At each level, the same principle applies: each unit must advance the argument, not merely add material. The extracts below show how doctoral writers use signposting and transitional moves to make the accumulation of argument visible across sections.',
    extracts: [
      {
        discipline: 'Political Philosophy — Democratic Theory',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The preceding section argued that ' },
          { t: 'deliberative democracy\'s claim to legitimacy rests on an idealised model of communicative rationality', a: 'a1' },
          { t: ' — one that abstracts from the structural inequalities that shape who can speak, how, and with what authority. ' },
          { t: 'This abstraction, it was suggested, is not a peripheral flaw but a constitutive one: ' },
          { t: 'the procedural conditions that deliberative theory posits as sufficient for legitimate outcomes', a: 'a2' },
          { t: ' presuppose exactly the equality of standing that is most systematically denied to marginalised groups in actually existing liberal democracies. ' },
          { t: 'This section takes the argument a step further. ', a: 'a3' },
          { t: 'If the problem is structural rather than procedural, then the remedies deliberative theorists typically propose — ' },
          { t: 'better institutional design, more inclusive fora, expanded access to deliberation —', a: 'a4' },
          { t: ' cannot address the root difficulty, since they operate within the framework whose presuppositions are themselves the source of the problem. ' },
          { t: 'What is required instead,', a: 'a5' },
          { t: ' this section argues, is a reorientation toward agonistic accounts of democracy that abandon the aspiration to rational consensus in favour of a productive institutionalisation of conflict.' },
        ],
        annotations: {
          a1: {
            label: 'Retrospective summary of previous section',
            color: 'blue',
            text: '"The preceding section argued that..." — this opening move does two things: it reminds the reader of the ground covered, and it signals that the current section will build from that ground. Retrospective summaries are a navigational tool for multi-chapter arguments.',
          },
          a2: {
            label: 'Tightening the previous argument',
            color: 'blue',
            text: '"This abstraction is not a peripheral flaw but a constitutive one" — this sharpens what the previous section established. The current section opens by strengthening its starting point before moving forward. This is how arguments accumulate: each section leaves things in a slightly stronger position than it found them.',
          },
          a3: {
            label: 'Explicit advance: "a step further"',
            color: 'emerald',
            text: '"This section takes the argument a step further." — four words that do enormous work. They tell the reader the argument is not repeating but advancing. They signal that what follows depends on what came before. This is the key phrase in multi-section argument architecture.',
          },
          a4: {
            label: 'Conditional logic bridging sections',
            color: 'yellow',
            text: '"If the problem is structural... then the remedies..." — the "if... then" construction ties the current section\'s claim directly to the previous section\'s finding. The reader can see exactly how the two sections are logically connected.',
          },
          a5: {
            label: 'Thesis of this section stated explicitly',
            color: 'violet',
            text: '"What is required instead, this section argues, is..." — the section\'s own claim is stated openly. "This section argues" is a confident, useful phrase: it tells the reader that what follows is not just description but a positioned argument.',
          },
        },
      },
      {
        discipline: 'Environmental Policy — Carbon Pricing Mechanisms',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Chapter Two established that ' },
          { t: 'the political economy of carbon pricing is shaped by three factors', a: 'b1' },
          { t: ': the concentration of industry interests, the credibility of political commitment, and the distributional consequences of price signals for low-income households. ' },
          { t: 'Chapter Three turned to comparative evidence,', a: 'b2' },
          { t: ' examining how these factors have played out in the British Columbia carbon tax, the EU Emissions Trading System, and Sweden\'s energy tax regime. ' },
          { t: 'What that comparison revealed was not a single model of success ', a: 'b3' },
          { t: 'but a set of enabling conditions: effective carbon pricing requires not simply the right price level but a political architecture capable of maintaining policy credibility against organised industry opposition over electoral cycles. ' },
          { t: 'Chapter Four, which follows, builds on this finding ', a: 'b4' },
          { t: 'by examining the mechanisms through which that political architecture can be constructed and sustained — ' },
          { t: 'specifically, the role of independent regulatory bodies, hypothecation arrangements, and cross-party policy frameworks', a: 'b5' },
          { t: ' in insulating carbon pricing from short-term political disruption.' },
        ],
        annotations: {
          b1: {
            label: 'Chapter-level retrospective: three-factor summary',
            color: 'blue',
            text: '"Chapter Two established that..." followed by a numbered list compresses an entire chapter into one sentence. The numbered list is itself a cohesive device — it gives the reader something concrete to hold onto as the transition unfolds.',
          },
          b2: {
            label: 'Chapter Three positioned as the next step',
            color: 'blue',
            text: '"Chapter Three turned to comparative evidence" — the verb "turned to" implies that Chapter Two\'s framework made comparative evidence necessary. This is causal signposting: each chapter exists because the previous one created the need for it.',
          },
          b3: {
            label: 'Synthesis of the comparison',
            color: 'emerald',
            text: '"What that comparison revealed was not... but..." — this is the most important sentence in a chapter transition. It doesn\'t just say what Chapter Three covered; it states what Chapter Three found. Transitions that summarise content without conveying findings are weak.',
          },
          b4: {
            label: '"Builds on this finding" — the forward link',
            color: 'violet',
            text: '"Chapter Four... builds on this finding" explicitly names the dependency relationship: Chapter Four\'s inquiry is made possible by — and answerable only because of — Chapter Three\'s conclusion. This is what it means for chapters to build an argument rather than accumulate topics.',
          },
          b5: {
            label: 'Chapter Four\'s specific focus previewed',
            color: 'violet',
            text: 'Three specific mechanisms are named (independent regulatory bodies, hypothecation, cross-party frameworks). Previewing the specific investigative targets of the next chapter tells the reader what to look for — and implies that the rest of the thesis has been planned, not improvised.',
          },
        },
      },
    ],
    activityPrompt:
      'Write a chapter transition for your own thesis: a paragraph of 100–150 words that closes one chapter and opens the next. It should: (1) summarise what the current chapter has established in one sentence; (2) state the specific finding or conclusion that creates the need for the next chapter; (3) name what the next chapter will do and why it follows necessarily. If you cannot write step (2) — if the current chapter\'s finding does not obviously generate the next chapter\'s question — this signals a structural issue worth raising with your supervisor.',
    keyTakeaways: [
      'Each chapter should advance the argument: the question it answers must have been made necessary by the chapter before it.',
      '"The preceding section argued..." and "This section takes the argument a step further" are the core phrases of multi-section argument architecture — use them explicitly.',
      'Chapter transitions should convey findings, not just content: say what was established, not just what was covered.',
      'A thesis argument is cumulative: the conclusion should feel like the only possible destination given what has been shown across all the preceding chapters.',
    ],
  },

];
