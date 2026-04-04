// Topic 9: Writing the Discussion Chapter — 4 annotated lessons

export const lessons = [
  // ─── LESSON 1: Returning to Your Research Questions ──────────────────────
  {
    slug: 'returning-to-rqs',
    title: 'Returning to Your Research Questions',
    durationMins: 10,
    intro:
      'The discussion chapter must do more than interpret findings — it must answer the questions the thesis set out to address. This sounds obvious, but it is surprisingly easy to write a discussion that comments insightfully on individual findings while never delivering a direct answer to the central research question. Examiners look explicitly for this: the discussion must return to the questions posed in the introduction and show, precisely, what the thesis has established. The two extracts below, from climate adaptation and sociology, show how this anchoring move works in different disciplinary registers.',
    extracts: [
      {
        discipline: 'Environmental Science — Climate Adaptation Governance',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'This thesis set out to ask ' },
          { t: 'why infrastructure adaptation governance in England has remained fragmented despite over a decade of policy frameworks designed to promote coordination.', a: 'a1' },
          { t: ' The findings provide a clear answer to this question, ' },
          { t: 'though not the one anticipated at the outset.', a: 'a2' },
          { t: ' Fragmentation persists not primarily because of resource constraints or institutional inertia, as the policy literature has tended to assume,', a: 'a3' },
          { t: ' but because the actors responsible for adaptation governance ' },
          { t: 'have incompatible time horizons: the electoral cycles of local authorities, the regulatory cycles of infrastructure operators, and the planning horizons of insurers and developers', a: 'a4' },
          { t: ' operate over periods ranging from four to forty years, ' },
          { t: 'producing a structural incoherence that coordination frameworks alone cannot resolve. ' },
          { t: 'This finding reframes the policy problem.', a: 'a5' },
          { t: ' The question is not how to build better coordination mechanisms — several of those already exist — but how to align the temporal horizons of actors who have legitimate but structurally incompatible planning logics.' },
        ],
        annotations: {
          a1: {
            label: 'Research question restated explicitly',
            color: 'blue',
            text: '"This thesis set out to ask..." — the discussion opens by returning verbatim to the central research question. This is not repetition for its own sake: it reminds the reader of the original promise and signals that what follows will deliver on it. The research question frames everything that comes after.',
          },
          a2: {
            label: '"Not the one anticipated at the outset" — intellectual honesty',
            color: 'emerald',
            text: '"Though not the one anticipated at the outset" — the finding departs from the original expectation. Acknowledging this explicitly is a mark of intellectual integrity. It shows the research was genuinely open to being surprised, and it raises the reader\'s interest: something unexpected was found.',
          },
          a3: {
            label: 'Existing explanation contested with specificity',
            color: 'rose',
            text: '"Not primarily because of resource constraints or institutional inertia, as the policy literature has tended to assume" — the alternative explanation (the one the literature offered) is named and rejected before the study\'s own explanation is introduced. This is the discussion\'s key rhetorical move: showing what the findings add by showing what they displace.',
          },
          a4: {
            label: 'The actual answer — specific mechanism identified',
            color: 'emerald',
            text: '"Incompatible time horizons" is the specific explanatory mechanism the thesis has identified. Three actors are named, their planning horizons are quantified (four to forty years), and the structural consequence is stated. This is an answer, not just an observation.',
          },
          a5: {
            label: '"This finding reframes the policy problem" — contribution stated',
            color: 'violet',
            text: '"Reframes the policy problem" is a contribution claim: the thesis does not just add another finding to the pile but changes how the question should be understood. Moving from "how do we improve coordination?" to "how do we align temporal horizons?" is a genuine intellectual shift.',
          },
        },
      },
      {
        discipline: 'Sociology — Precarious Employment and Social Belonging',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The second research question asked ' },
          { t: 'whether precarious employment undermines the social relationships through which workers sustain a sense of belonging.', a: 'b1' },
          { t: ' The answer is qualified but consistent: precariousness does not uniformly erode belonging, ' },
          { t: 'but its effects are strongly conditioned by the residential and associational contexts in which workers are embedded.', a: 'b2' },
          { t: ' Workers who lived in areas of concentrated precariousness — ' },
          { t: 'where insecure employment was a shared condition rather than an individual misfortune —', a: 'b3' },
          { t: ' reported forms of horizontal solidarity that partially compensated for the erosion of workplace-based ties. ' },
          { t: 'This finding qualifies Standing\'s (2011) account of the precariat as a class defined by the absence of social networks,', a: 'b4' },
          { t: ' suggesting that the geography of precariousness matters: ' },
          { t: 'social networks do not simply dissolve under conditions of insecurity ', a: 'b5' },
          { t: 'but reconstitute themselves — differently, and with different consequences for political subjectivity — depending on the spatial density of the shared condition.' },
        ],
        annotations: {
          b1: {
            label: 'Research question numbered and restated',
            color: 'blue',
            text: '"The second research question asked..." — in a multi-question thesis, numbering the questions in the discussion establishes a clear structure. The reader can track which question is being answered at any point in the chapter.',
          },
          b2: {
            label: '"The answer is qualified but consistent"',
            color: 'emerald',
            text: '"Qualified but consistent" — this is a precise summary of what the findings show: not a simple yes or no, but a patterned conditional relationship. The qualification is not evasion; it is analytical accuracy. Discussion chapters should deliver the most precise answer the data can support.',
          },
          b3: {
            label: 'The conditioning factor specified',
            color: 'yellow',
            text: '"Concentrated precariousness — where insecure employment was a shared condition rather than an individual misfortune" — the moderating variable is named and explained. This is the analytical contribution: not just "it depends" but specifying precisely what it depends on and why.',
          },
          b4: {
            label: 'Prior theory engaged — "qualifies Standing\'s account"',
            color: 'violet',
            text: '"Qualifies Standing\'s (2011) account" — the discussion does not just announce its finding but places it in direct conversation with the key theoretical source it extends. "Qualifies" is precisely chosen: stronger than "nuances" but less strong than "refutes."',
          },
          b5: {
            label: 'Mechanism specified — "reconstitute themselves... depending on spatial density"',
            color: 'violet',
            text: '"Social networks do not simply dissolve... but reconstitute themselves — differently, and with different consequences for political subjectivity" — the discussion closes with a claim about mechanism. This is the highest-level move: not just what happens, but how and with what consequences for theory.',
          },
        },
      },
    ],
    activityPrompt:
      'Write a paragraph for each of your research questions using this structure: (1) restate the question explicitly ("This thesis set out to ask..."); (2) state the answer directly, even if qualified ("The findings show that..., though..."); (3) name the prior assumption or theory the finding qualifies, extends, or challenges. Read each paragraph back and ask: if someone read only this paragraph, would they know what the thesis found?',
    keyTakeaways: [
      'Restate each research question explicitly at the start of the relevant discussion section — do not assume the reader remembers it.',
      '"The answer is qualified but consistent" is stronger than a vague "the findings suggest" — give the most precise answer your evidence can support.',
      'Naming what the finding displaces (the prior assumption it replaces) shows what the thesis adds, not just what it found.',
      'The discussion must deliver on the introduction\'s promise: every question posed must receive an answer.',
    ],
  },

  // ─── LESSON 2: Interpreting Findings in Light of the Literature ──────────
  {
    slug: 'interpreting-in-light-of-lit',
    title: 'Interpreting Findings in Light of the Literature',
    durationMins: 12,
    intro:
      'The discussion chapter is where your findings meet the literature — not to perform a mechanical comparison but to build an argument about what your study adds to, qualifies, or challenges in the field. The moves here are more demanding than summary: you need to say not just whether your findings align with prior work, but what the alignment or divergence means and why it matters. These two extracts, from developmental psychology and criminology, show what it looks like to bring findings and literature into genuine intellectual engagement.',
    extracts: [
      {
        discipline: 'Developmental Psychology — Parental Scaffolding and Language Acquisition',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The finding that scaffolding quality at eighteen months predicted expressive vocabulary at thirty-six months ' },
          { t: 'is consistent with the predictions of Vygotskian theory', a: 'a1' },
          { t: ' and with the meta-analytic evidence reviewed by Tamis-LeMonda et al. (2001), ' },
          { t: 'who reported a weighted mean effect of r = .34 across twelve longitudinal studies. ' },
          { t: 'The present effect size (r = .41) falls at the higher end of this range,', a: 'a2' },
          { t: ' which may reflect the study\'s focus on a population with elevated rates of language delay — a group for whom scaffolding quality may exert stronger effects than in typical-development samples. ' },
          { t: 'More unexpected is the finding that ', a: 'a3' },
          { t: 'the predictive relationship was significantly stronger for children with low initial vocabulary than for those with average or high initial vocabulary, ' },
          { t: 'a moderating effect not reported in the Tamis-LeMonda review. ' },
          { t: 'This interaction suggests that scaffolding may function as a compensatory mechanism rather than a uniformly facilitative one,', a: 'a4' },
          { t: ' consistent with dynamic systems perspectives on developmental plasticity (Thelen and Smith, 1994) ' },
          { t: 'but not with simple additive models in which all children benefit equally from high-quality interaction.', a: 'a5' },
        ],
        annotations: {
          a1: {
            label: 'Confirmation stated — but with precision',
            color: 'blue',
            text: '"Consistent with Vygotskian theory and with the meta-analytic evidence" — the confirmation is stated but immediately anchored to a specific prior source with a specific effect size. "Consistent with" is the right level of claim: the finding matches prior expectations, but the study does not claim to have proved the theory.',
          },
          a2: {
            label: 'Own effect size compared to the prior range',
            color: 'yellow',
            text: '"Falls at the higher end of this range" — the comparison is quantified: r = .41 vs mean r = .34. More importantly, the reason for the higher effect is proposed: a population with elevated language delay rates. This is genuine engagement, not just reporting numbers side by side.',
          },
          a3: {
            label: '"More unexpected is the finding that..." — pivoting to the novel contribution',
            color: 'emerald',
            text: '"More unexpected" signals that the discussion is shifting from confirmation to extension. The most important findings in a discussion are often those that go beyond what the literature predicted. Marking this shift explicitly tells the reader to pay particular attention to what follows.',
          },
          a4: {
            label: '"Suggests that scaffolding may function as a compensatory mechanism"',
            color: 'emerald',
            text: 'This is the discussion\'s key interpretive claim: the moderating effect is explained through a theoretical reframing (compensatory mechanism rather than uniformly facilitative). This is the difference between reporting and interpreting: the finding is used to propose a more nuanced theoretical understanding.',
          },
          a5: {
            label: 'Theoretical alignment and divergence both named',
            color: 'violet',
            text: '"Consistent with dynamic systems perspectives... but not with simple additive models" — the finding aligns with one theoretical tradition while ruling out another. This dual move — supporting one theory, challenging another — is the hallmark of a sophisticated discussion.',
          },
        },
      },
      {
        discipline: 'Criminology — Desistance and Social Identity',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The central finding of this thesis — ' },
          { t: 'that desistance from crime is not best described as a linear process of cognitive transformation', a: 'b1' },
          { t: ' but as a series of repeated, unstable attempts at identity renegotiation — ' },
          { t: 'complicates the dominant narrative within desistance research. ' },
          { t: 'Maruna\'s (2001) redemption script model posits a relatively coherent process of narrative reconstruction', a: 'b2' },
          { t: ' in which desisters develop a stable "pro-social" identity that retrospectively reframes their offending past. ' },
          { t: 'The accounts in this study suggest a messier picture:', a: 'b3' },
          { t: ' participants oscillated between identities — between the "desisting self" and the "criminal self" — ' },
          { t: 'sometimes within a single interview, ' },
          { t: 'in ways that Maruna\'s framework would classify as evidence of incomplete desistance rather than as evidence of its intrinsic instability.', a: 'b4' },
          { t: ' This leads to a theoretical re-evaluation: ' },
          { t: 'the instability the present data reveal may be not a transitional phase en route to stable desistance', a: 'b5' },
          { t: ' but a permanent structural feature of identity under conditions of continued social exclusion — ' },
          { t: 'a conclusion with direct implications for how practitioners should interpret and respond to relapse.' },
        ],
        annotations: {
          b1: {
            label: 'Central finding stated as a direct challenge to prior theory',
            color: 'rose',
            text: '"Not best described as a linear process of cognitive transformation but as a series of repeated, unstable attempts" — the finding is framed explicitly as a challenge to the existing model. The contrast is built into the sentence: "not X but Y." This is the most direct form of theoretical engagement.',
          },
          b2: {
            label: 'The prior theory characterised accurately before being challenged',
            color: 'blue',
            text: 'Maruna\'s model is characterised accurately and fairly — "relatively coherent process", "stable pro-social identity", "retrospectively reframes" — before the challenge is made. Intellectual integrity requires presenting the prior theory at its strongest before showing where the new data complicates it.',
          },
          b3: {
            label: '"The accounts in this study suggest a messier picture" — pivot',
            color: 'emerald',
            text: '"Suggest a messier picture" is a measured but decisive phrase. "Messier" is not pejorative but analytically descriptive: the data is more complex than the prior model captured. "Suggest" is the appropriate epistemic marker — the data is consistent with this interpretation, not proof of it.',
          },
          b4: {
            label: 'Showing what the prior framework would miss',
            color: 'yellow',
            text: '"Maruna\'s framework would classify as evidence of incomplete desistance rather than as evidence of its intrinsic instability" — this sentence identifies the specific interpretive move the prior framework makes and shows that the new data demands a different interpretation. This is high-level theoretical engagement.',
          },
          b5: {
            label: '"Leads to a theoretical re-evaluation" — contribution named',
            color: 'violet',
            text: '"A permanent structural feature of identity under conditions of continued social exclusion" — the theoretical re-evaluation is stated as a positive claim, not just a critique of Maruna. The contribution is to reframe instability itself: not as failure but as structurally produced. The practical implication follows naturally.',
          },
        },
      },
    ],
    activityPrompt:
      'For each of your three most important findings, write a paragraph that: (1) states the finding in one sentence; (2) names the prior study or theoretical position it most directly engages with; (3) uses one of these verbs to characterise the relationship — confirms, extends, qualifies, complicates, challenges, or reframes; (4) explains in one sentence what the engagement means for the field. Avoid "my findings support X" without specifics.',
    keyTakeaways: [
      'Confirmation of prior work is worth noting but not your most important move — extension, qualification, and complication are analytically richer.',
      'Characterise prior theories accurately and fairly before challenging them — intellectual honesty strengthens, not weakens, your critique.',
      '"My findings are consistent with X but not with Y" is a stronger move than "my findings support the literature" — name what they align with and what they rule out.',
      'The highest-value interpretive move is to propose a new mechanism or reframing that explains both your findings and the prior findings they complicate.',
    ],
  },

  // ─── LESSON 3: Making Claims and Managing Qualifications ─────────────────
  {
    slug: 'claims-and-qualifications',
    title: 'Making Claims and Managing Qualifications',
    durationMins: 10,
    intro:
      'The discussion chapter is where you make your boldest claims — and where the temptation to either overstate or understate those claims is strongest. Over-claiming (asserting more than the evidence supports) will draw examiner challenge; under-claiming (hedging so heavily that the finding disappears) wastes the contribution. The two extracts below, from public health and education, show what over-claiming and appropriate qualification look like in practice — and how the same finding can be expressed with very different levels of evidential precision.',
    extracts: [
      {
        discipline: 'Public Health — Dietary Intervention and Cardiometabolic Risk',
        source: 'PhD thesis excerpt (over-claimed)',
        variant: 'weak',
        segments: [
          { t: 'This study proves that ', a: 'a1' },
          { t: 'a Mediterranean-style dietary intervention reduces cardiometabolic risk in adults with type 2 diabetes. ' },
          { t: 'The findings clearly demonstrate that ', a: 'a2' },
          { t: 'dietary change is more effective than pharmacological intervention for this population. ' },
          { t: 'It is obvious from the data that ', a: 'a3' },
          { t: 'all adults with diabetes should adopt a Mediterranean diet. ' },
          { t: 'This research definitively settles the debate about ', a: 'a4' },
          { t: 'the role of diet in diabetes management and has major implications for clinical guidelines worldwide.' },
        ],
        annotations: {
          a1: {
            label: '"This study proves" — no single study proves anything',
            color: 'rose',
            text: '"Proves" is not an appropriate epistemic claim for empirical research. A single study provides evidence consistent with, or inconsistent with, a claim — it does not prove it. Proof belongs to mathematics and formal logic. Any examiner will push back immediately on this word.',
          },
          a2: {
            label: '"Clearly demonstrate" + comparison not supported by the study design',
            color: 'rose',
            text: '"More effective than pharmacological intervention" — this comparison requires a head-to-head trial of dietary versus pharmacological approaches. Unless this study included such a comparison, this claim goes far beyond what the data supports. "Clearly" signals the writer is trying to assert confidence rather than earn it.',
          },
          a3: {
            label: '"It is obvious from the data" — obviousness is not evidence',
            color: 'rose',
            text: '"It is obvious" is a rhetorical attempt to forestall questioning. Nothing is obvious in empirical research; everything requires justification. The word signals that the writer has not done the work of actually demonstrating the claim.',
          },
          a4: {
            label: '"Definitively settles the debate" and "worldwide" implications',
            color: 'rose',
            text: 'No single PhD thesis settles any debate definitively, and no study conducted in one population and context can directly generate worldwide clinical guidelines. These claims are not just academically imprecise — they are the kind of overreach that damages a thesis\'s credibility with an examiner.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Public Health — Dietary Intervention and Cardiometabolic Risk',
        source: 'PhD thesis excerpt (appropriately qualified)',
        variant: 'strong',
        segments: [
          { t: 'These findings provide evidence ', a: 'b1' },
          { t: 'that a structured Mediterranean-style dietary intervention, when delivered with sustained dietitian support, ' },
          { t: 'is associated with clinically meaningful reductions in HbA1c, triglycerides, and waist circumference ', a: 'b2' },
          { t: 'over a twelve-month period in adults with recently diagnosed type 2 diabetes. ' },
          { t: 'The effect sizes observed are comparable to those achieved by first-line pharmacological agents in equivalent populations,', a: 'b3' },
          { t: ' though a direct head-to-head comparison was beyond the scope of this study. ' },
          { t: 'These results cannot be generalised to populations with long-standing diabetes or significant comorbidities,', a: 'b4' },
          { t: ' given that the trial excluded participants with HbA1c above 86 mmol/mol or a history of cardiovascular events. ' },
          { t: 'Taken together, however, the findings are consistent with a growing evidence base ', a: 'b5' },
          { t: 'supporting dietary intervention as a first-line option in diabetes management, ' },
          { t: 'and suggest that clinical guidelines should consider structured dietary support as an adjunct to, or — in selected patients — an alternative to, early pharmacotherapy.' },
        ],
        annotations: {
          b1: {
            label: '"Provide evidence that" — accurate epistemic framing',
            color: 'emerald',
            text: '"Provide evidence that" is the correct register: the study adds to the evidence base, it does not settle the question. This opening is not timid — it is accurate. The confidence comes from the precision and specificity of what follows, not from the framing verb.',
          },
          b2: {
            label: 'Specific outcomes named — not "reduces risk" in general',
            color: 'emerald',
            text: '"HbA1c, triglycerides, and waist circumference" — three specific outcomes are named. This precision is itself a form of confidence: the writer knows exactly what was measured and what changed. Specific claims are more credible than general ones.',
          },
          b3: {
            label: 'Comparison drawn — but with explicit caveat',
            color: 'yellow',
            text: '"Comparable to those achieved by first-line pharmacological agents... though a direct head-to-head comparison was beyond the scope of this study" — the comparison is made but immediately bounded. This is how to make an ambitious interpretive point without overclaiming: state what the evidence suggests, then explicitly acknowledge what it cannot show.',
          },
          b4: {
            label: 'Scope of inference specified — who is excluded',
            color: 'blue',
            text: '"Cannot be generalised to populations with long-standing diabetes or significant comorbidities... given that the trial excluded participants with HbA1c above 86 mmol/mol" — the limitation of generalisation is stated with the specific exclusion criterion that produces it. This is precise, not apologetic.',
          },
          b5: {
            label: '"Consistent with a growing evidence base" — locating the finding',
            color: 'violet',
            text: '"Consistent with a growing evidence base supporting dietary intervention as a first-line option" — the finding is located within the broader trajectory of the field. "Consistent with" is accurate and suitably modest; "clinical guidelines should consider" is appropriately cautious but still policy-relevant.',
          },
        },
      },
    ],
    activityPrompt:
      'Scan your discussion chapter for "proves", "clearly shows", "it is obvious", "definitively", and "all". Replace each with a proportionate alternative. Then look for the opposite problem: paragraphs where every sentence ends with "however", "although", or "it should be noted that" — excessive qualification that drains findings of force. For those, identify the core claim and write it as a single unhedged sentence, then add one calibrated qualification.',
    keyTakeaways: [
      'No single study "proves" anything — use "provides evidence that", "is consistent with", "suggests", or "indicates" depending on the strength of the design.',
      'Specific claims are more credible than general ones — name the outcomes, populations, and conditions to which your claims apply.',
      'Make comparisons, but bound them: "comparable to X, though a direct comparison was beyond the scope of this study" is ambitious and honest simultaneously.',
      'Over-qualification is as damaging as over-claiming — if every sentence is hedged, the finding disappears. State the core claim clearly, then add one well-placed qualification.',
    ],
  },

  // ─── LESSON 4: Articulating Your Contribution ────────────────────────────
  {
    slug: 'articulating-contribution',
    title: 'Articulating Your Contribution',
    durationMins: 10,
    intro:
      'The contribution to knowledge is the intellectual purpose of a doctoral thesis — and yet it is the section most doctoral writers find hardest to write. The difficulty is often not that the contribution does not exist but that the writer cannot yet see it clearly enough to state it. A contribution must be stated explicitly: examiners cannot be expected to infer it from the findings. These two extracts, from sociology and history of science, show what it looks like to state a contribution with precision and without false modesty.',
    extracts: [
      {
        discipline: 'Sociology — Informal Economy and Moral Frameworks',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'This thesis makes three distinct contributions to knowledge. ', a: 'a1' },
          { t: 'Empirically, it provides the first systematic account of informal economic practices ' },
          { t: 'among recently arrived migrants in three northern English cities,', a: 'a2' },
          { t: ' a population whose economic lives have been largely absent from the UK informal economy literature, ' },
          { t: 'which has focused disproportionately on settled communities in London and the South East. ' },
          { t: 'Theoretically, the thesis challenges the dominant framing of informal work as a survival strategy', a: 'a3' },
          { t: ' adopted under conditions of necessity. ' },
          { t: 'The accounts generated in this study reveal instead that informal economic participation is organised ', a: 'a4' },
          { t: 'around moral frameworks — about obligation, reciprocity, and community responsibility — ' },
          { t: 'that are not reducible to rational actor models of economic behaviour. ' },
          { t: 'Methodologically, the thesis demonstrates the value of longitudinal ethnographic access', a: 'a5' },
          { t: ' for capturing the temporal dynamics of informal economic relationships, ' },
          { t: 'showing that single-interview studies systematically underestimate the complexity of these arrangements by capturing only their surface features.' },
        ],
        annotations: {
          a1: {
            label: 'Contribution announced and enumerated',
            color: 'emerald',
            text: '"Three distinct contributions to knowledge" — the contribution section opens by telling the reader how many contributions there are. Enumeration is a structural courtesy: it creates the expectation that the following paragraphs will deliver three clearly differentiated things. "Distinct" signals they are not variations on a theme.',
          },
          a2: {
            label: 'Empirical contribution — new population, absent from the literature',
            color: 'blue',
            text: '"The first systematic account of informal economic practices among recently arrived migrants in three northern English cities" — the empirical contribution is stated with precision: who (recently arrived migrants), where (three northern English cities), and what makes it new ("absent from the UK literature, focused disproportionately on..."). A contribution claim is stronger when it names specifically what was missing.',
          },
          a3: {
            label: 'Theoretical contribution — challenging a dominant framing',
            color: 'rose',
            text: '"Challenges the dominant framing of informal work as a survival strategy adopted under conditions of necessity" — the theoretical contribution is stated as a challenge to the field\'s prevailing explanation. The move is precise: not "adds nuance" but identifies the specific claim being contested.',
          },
          a4: {
            label: 'Alternative theoretical frame offered',
            color: 'violet',
            text: '"Organised around moral frameworks — obligation, reciprocity, community responsibility — that are not reducible to rational actor models" — the theoretical contribution is not just a critique but a positive reframing. The new frame is named (moral economy), its components listed, and its incompatibility with the dominant model stated. This is a complete theoretical contribution.',
          },
          a5: {
            label: 'Methodological contribution — what the approach revealed',
            color: 'yellow',
            text: '"Demonstrates the value of longitudinal ethnographic access for capturing temporal dynamics... showing that single-interview studies systematically underestimate complexity" — the methodological contribution is stated in terms of what the approach revealed that other methods could not. This is more persuasive than claiming the method is generally superior.',
          },
        },
      },
      {
        discipline: 'History and Philosophy of Science — Peer Review and Scientific Authority',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The principal contribution of this thesis is to historicise peer review ', a: 'b1' },
          { t: 'as a set of practices whose current form was not discovered but constructed — ' },
          { t: 'assembled from heterogeneous institutional interests, disciplinary politics, and publishing economies ', a: 'b2' },
          { t: 'over a period of several decades in the mid-twentieth century. ' },
          { t: 'This historicisation has two consequences for contemporary debates about the reform of peer review. ', a: 'b3' },
          { t: 'First, it defamiliarises the current system: ' },
          { t: 'what is often treated as the natural and inevitable mechanism of scientific quality control', a: 'b4' },
          { t: ' is revealed as a historically contingent arrangement that serves particular interests and could, in principle, be otherwise. ' },
          { t: 'Second, it identifies the conditions under which previous peer review reforms succeeded or failed,', a: 'b5' },
          { t: ' providing historical resources for evaluating current reform proposals ' },
          { t: 'that would otherwise be invisible to analyses focused exclusively on the present.' },
        ],
        annotations: {
          b1: {
            label: '"The principal contribution is to historicise" — verb-first framing',
            color: 'emerald',
            text: '"The principal contribution is to historicise peer review" — the contribution is stated as a verb: "historicise." This is more active and precise than "this thesis contributes to the history of peer review." The contribution is not a topic but an intellectual operation performed on a topic.',
          },
          b2: {
            label: 'What historicising reveals — the specific finding',
            color: 'blue',
            text: '"Assembled from heterogeneous institutional interests, disciplinary politics, and publishing economies" — the historical account is not just that peer review changed over time but that it was constructed from specific, named forces. The contribution claim is grounded in the thesis\'s actual findings.',
          },
          b3: {
            label: '"This historicisation has two consequences" — contribution linked to current debates',
            color: 'violet',
            text: '"Two consequences for contemporary debates about the reform of peer review" — the contribution is connected to a live debate. The thesis is not just of historical interest but has contemporary implications. Linking a historical contribution to a present concern is a powerful way to demonstrate significance.',
          },
          b4: {
            label: '"Defamiliarises" — naming the intellectual operation',
            color: 'emerald',
            text: '"What is often treated as natural and inevitable... is revealed as historically contingent" — "defamiliarise" names the specific intellectual move: making the taken-for-granted seem strange. This is a precise contribution claim in the humanities tradition. The contribution is not data but a changed way of seeing.',
          },
          b5: {
            label: 'Second consequence — historical evidence for present decisions',
            color: 'yellow',
            text: '"Identifies the conditions under which previous reforms succeeded or failed, providing historical resources for evaluating current proposals" — the second contribution is practical: the historical analysis generates usable evidence for contemporary reform debates. Showing that a historical thesis has policy-relevant implications expands its audience and significance.',
          },
        },
      },
    ],
    activityPrompt:
      'Write your contribution section using this structure: "This thesis makes [number] distinct contributions. Empirically, it [specific claim about new data, population, or context]. Theoretically, it [specific claim about what prior framework it challenges or what new framework it offers]. Methodologically, it [if applicable — specific claim about what the approach enabled that alternatives could not]." Read each sentence and ask: could this sentence have been written before this thesis existed? If yes, it is not yet a contribution claim — it is a description of what you did.',
    keyTakeaways: [
      'Contributions must be stated explicitly — in the form "this thesis contributes X to Y" — not left for examiners to infer.',
      'Contributions can be empirical (new data, population, context), theoretical (new or revised framework), or methodological (new approach or demonstration of a method\'s capabilities).',
      'State contributions as intellectual operations — "historicises", "challenges", "reframes", "demonstrates" — not as topics covered.',
      'The test of a contribution claim: could this sentence have been written before this thesis existed? If yes, it needs sharpening.',
    ],
  },

];
