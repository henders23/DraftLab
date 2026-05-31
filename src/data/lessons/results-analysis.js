// Topic 8: Writing Results & Analysis — 4 annotated lessons

export const lessons = [
  // ─── LESSON 1: Description vs Interpretation ─────────────────────────────
  {
    slug: 'description-vs-interpretation',
    title: 'Description vs Interpretation',
    durationMins: 10,
    intro:
      'Description and interpretation are not the same move, and conflating them is one of the most persistent weaknesses in doctoral results chapters. Description answers "what?" — it reports what the data shows. Interpretation answers "so what?" — it states what the data means, why it matters, and how it relates to your argument. Both are necessary, but they must be clearly distinguished. These two extracts, from organisational psychology, show what happens when description and interpretation are separated carefully — and when they are not.',
    extracts: [
      {
        discipline: 'Organisational Psychology — Workplace Wellbeing',
        source: 'PhD thesis excerpt (description without interpretation)',
        variant: 'weak',
        segments: [
          { t: 'Table 3 shows the results of the survey.', a: 'a1' },
          { t: ' 72% of participants reported high levels of work-related stress. ' },
          { t: '45% reported low job satisfaction. ' },
          { t: '38% had considered leaving their current role in the previous twelve months.', a: 'a2' },
          { t: ' Participants working more than 45 hours per week reported higher stress scores than those working fewer hours.', a: 'a3' },
          { t: ' Female participants reported slightly higher stress scores than male participants.', a: 'a4' },
          { t: ' These findings are presented in Table 3 and Table 4.', a: 'a5' },
        ],
        annotations: {
          a1: {
            label: 'Uninstructive reference to a table',
            color: 'rose',
            text: '"Table 3 shows the results" tells the reader nothing about what the results are. A figure reference should direct the reader\'s attention: "Table 3 reveals a pattern of..." or "As Table 3 shows, over two-thirds of participants..." — guiding the reader to the finding, not just to the table.',
          },
          a2: {
            label: 'Three statistics listed with no interpretive connection',
            color: 'rose',
            text: 'Three percentages are reported in sequence without any analytical relationship being drawn between them. The reader does not know whether stress and low satisfaction co-occur, whether they predict one another, or what their joint pattern means. Description without interpretation leaves the data inert.',
          },
          a3: {
            label: 'Association reported without significance or meaning',
            color: 'rose',
            text: '"Reported higher stress scores than those working fewer hours" — is this association statistically significant? Is it substantively important? What does it mean for the thesis argument? The finding is dropped without context, evaluation, or inference.',
          },
          a4: {
            label: 'Gender difference noted without interpretation',
            color: 'rose',
            text: '"Slightly higher stress scores" — "slightly" is evaluative language, but no interpretation follows. Is this difference expected? Does it confirm or complicate existing research? Does it matter for the argument? Reporting a finding without commenting on its meaning is incomplete analysis.',
          },
          a5: {
            label: 'Closing sentence repeats the table references',
            color: 'rose',
            text: '"These findings are presented in Table 3 and Table 4" — this sentence adds nothing. The reader has already been directed to the tables. Ending a paragraph with a table reference signals that the writer has not yet decided what the findings mean.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Organisational Psychology — Workplace Wellbeing',
        source: 'PhD thesis excerpt (description + interpretation)',
        variant: 'strong',
        segments: [
          { t: 'Table 3 reveals a striking co-occurrence of stress and dissatisfaction: ', a: 'b1' },
          { t: '72% of participants reported high levels of work-related stress and nearly half (45%) reported low job satisfaction, ' },
          { t: 'rates that substantially exceed those reported in pre-pandemic surveys of equivalent professional populations', a: 'b2' },
          { t: ' (Johnson et al., 2019; CIPD, 2018). ' },
          { t: 'The finding that 38% had considered leaving their role in the previous twelve months ', a: 'b3' },
          { t: 'suggests that this co-occurrence is not merely attitudinal but behaviourally consequential. ' },
          { t: 'Notably, the association between working hours and stress was not linear.', a: 'b4' },
          { t: ' Participants working between 45 and 55 hours reported marginally lower stress than those working 36–45 hours — ' },
          { t: 'a counterintuitive pattern that is consistent with research on role identity and effortful engagement', a: 'b5' },
          { t: ' (Thoits, 2011): it is possible that for some participants, longer working hours reflect a degree of autonomy or role absorption that partially offsets their stressor effects.' },
        ],
        annotations: {
          b1: {
            label: 'Directed table reference with interpretive framing',
            color: 'emerald',
            text: '"Table 3 reveals a striking co-occurrence" — the table reference immediately introduces an interpretive frame ("striking co-occurrence"). The reader is directed not just to the table but to the specific pattern the writer wants them to see. "Reveals" is active and analytical; "shows" is neutral and descriptive.',
          },
          b2: {
            label: 'Contextualising against prior data',
            color: 'blue',
            text: '"Substantially exceed those reported in pre-pandemic surveys" — the description is immediately contextualised. The raw percentages gain meaning through comparison: it is not just that 72% is high, but that it is high relative to a known baseline. This is interpretation: making the data mean something.',
          },
          b3: {
            label: '"Suggests that..." — interpretive signal',
            color: 'emerald',
            text: '"Suggests that this co-occurrence is not merely attitudinal but behaviourally consequential" — "suggests that" is the classic signal that interpretation is beginning. The claim being drawn (behavioural consequence) goes beyond what the number directly states; it is an inference. Marking it as an inference with "suggests" is both accurate and analytically honest.',
          },
          b4: {
            label: 'Unexpected finding flagged explicitly',
            color: 'yellow',
            text: '"Notably, the association... was not linear" — "notably" signals that what follows is analytically significant and may be surprising. Flagging counterintuitive patterns explicitly prevents readers from overlooking them and shows the writer is actively interrogating the data rather than reporting it passively.',
          },
          b5: {
            label: 'Interpretation anchored in theory',
            color: 'violet',
            text: '"Consistent with research on role identity and effortful engagement... it is possible that for some participants, longer hours reflect autonomy or role absorption" — the interpretation draws on theoretical resources (Thoits, 2011) and offers a plausible mechanism. This is analysis at its best: surprising data explained through reasoned inference, hedged appropriately with "it is possible that."',
          },
        },
      },
    ],
    activityPrompt:
      'Take two paragraphs from your results chapter and label every sentence D (description) or I (interpretation). Then check: does every I sentence follow logically from the D sentences around it? Does every D sentence serve an I sentence somewhere? Rewrite any paragraph where all sentences are D — ask yourself "so what does this show?" and write that answer as the paragraph\'s closing sentence.',
    keyTakeaways: [
      'Description answers "what?" — it reports findings. Interpretation answers "so what?" — it states what findings mean for your argument.',
      'Signal interpretation explicitly: "This suggests...", "This pattern is consistent with...", "A plausible explanation is..." — these phrases mark the move from data to inference.',
      'Direct the reader to figures actively: "Table 3 reveals..." or "Figure 2 shows a marked divergence..." — not just "see Table 3."',
      'Flag counterintuitive or surprising patterns explicitly — they are often the most analytically productive findings and should not be buried in a sequence of unremarkable results.',
    ],
  },

  // ─── LESSON 2: Referring to Figures and Tables ───────────────────────────
  {
    slug: 'referring-to-figures',
    title: 'Referring to Figures and Tables',
    durationMins: 8,
    intro:
      'A figure or table never speaks for itself. Data displays must be introduced, directed, and interpreted in the surrounding prose — the reader needs to be told what to look at, what the key pattern is, and what it means for the argument. The language for doing this has its own conventions, and using them well is a mark of disciplinary fluency. These two extracts, from epidemiology and human geography, show how figures and tables are handled effectively.',
    extracts: [
      {
        discipline: 'Epidemiology — Cardiovascular Risk Factors',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Table 2 presents the unadjusted and adjusted hazard ratios for incident cardiovascular events ', a: 'a1' },
          { t: 'across the four dietary pattern groups identified in the cluster analysis. ' },
          { t: 'The most striking finding is the dose-response gradient visible across Groups 1 through 4:', a: 'a2' },
          { t: ' participants in the highest-quality dietary pattern group (Group 4) showed a 34% reduction in risk ' },
          { t: '(adjusted HR 0.66, 95% CI 0.54–0.81) relative to those in the lowest-quality group (Group 1)',  a: 'a3' },
          { t: ', with Groups 2 and 3 falling systematically between these extremes. ' },
          { t: 'This gradient persisted after adjustment for age, sex, smoking status, physical activity, and socioeconomic position,', a: 'a4' },
          { t: ' suggesting that the association is not explained by these potential confounders. ' },
          { t: 'The confidence intervals for Groups 2 and 3 overlap substantially,', a: 'a5' },
          { t: ' indicating that the distinction between intermediate dietary patterns is less reliable and should be interpreted with caution.' },
        ],
        annotations: {
          a1: {
            label: 'Table announced with its specific content named',
            color: 'blue',
            text: '"Presents the unadjusted and adjusted hazard ratios... across the four dietary pattern groups" — the table reference names precisely what the table contains. This is more informative than "presents the results." The reader knows what to look for before they look at the table.',
          },
          a2: {
            label: '"The most striking finding is..." — directing attention selectively',
            color: 'emerald',
            text: 'Rather than walking through every cell in the table, the writer directs the reader to the most significant pattern: the dose-response gradient. Selective commentary — not comprehensive description — is the correct approach to referring to figures and tables.',
          },
          a3: {
            label: 'Key statistic quoted with full precision',
            color: 'yellow',
            text: '"34% reduction in risk (adjusted HR 0.66, 95% CI 0.54–0.81)" — the key finding is quoted with the specific statistic and its confidence interval. The 95% CI is not decorative: it tells the reader how precisely the estimate is known and therefore how much weight to place on it.',
          },
          a4: {
            label: 'Adjusted results interpreted — confounders addressed',
            color: 'emerald',
            text: '"Persisted after adjustment for..." — the writer addresses the most obvious challenge to the finding (confounding) in the same sentence as reporting the adjusted result. This is interpretation integrated with description: reporting the finding while simultaneously showing it holds under scrutiny.',
          },
          a5: {
            label: 'Limitation within the table acknowledged',
            color: 'violet',
            text: '"Confidence intervals for Groups 2 and 3 overlap substantially, indicating that the distinction... is less reliable" — the writer identifies a limitation within the table rather than only highlighting the positive findings. Analytical integrity means reporting what the data does not show clearly as well as what it does.',
          },
        },
      },
      {
        discipline: 'Human Geography — Green Space Access and Urban Deprivation',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Figure 4 maps the spatial distribution of accessible green space per capita', a: 'b1' },
          { t: ' across all 526 Lower Super Output Areas in the study region, ' },
          { t: 'with areas classified by Index of Multiple Deprivation quintile. ' },
          { t: 'The map reveals a pronounced north-south disparity', a: 'b2' },
          { t: ': the most deprived quintile clusters systematically in the northern and inner-eastern zones of the city, ' },
          { t: 'precisely where per capita green space falls below the WHO-recommended threshold of 9 m² per person ' },
          { t: '(WHO, 2016). ' },
          { t: 'This spatial coincidence is not incidental: ', a: 'b3' },
          { t: 'as Figure 5 shows, the correlation between deprivation quintile and green space deficit is consistent across all three of the city\'s administrative districts, ' },
          { t: 'ruling out the possibility that the pattern is an artefact of a single anomalous area.', a: 'b4' },
          { t: ' What the map cannot show, however, is ', a: 'b5' },
          { t: 'whether this co-location reflects active planning decisions, historical land use patterns, or market processes — a question addressed in Chapter Five.' },
        ],
        annotations: {
          b1: {
            label: 'Figure announced with precise content',
            color: 'blue',
            text: '"Maps the spatial distribution of accessible green space per capita across all 526 Lower Super Output Areas... classified by IMD quintile" — the reader knows exactly what the figure shows before they look at it. Precise introductions prevent the reader from misreading what the visual is doing.',
          },
          b2: {
            label: '"The map reveals a pronounced north-south disparity" — directed reading',
            color: 'emerald',
            text: '"Reveals a pronounced north-south disparity" — the writer tells the reader what the map shows rather than leaving them to discover it. "Pronounced" is interpretive: it signals that the pattern is not subtle and therefore analytically significant. The spatial description that follows (northern and inner-eastern zones) is evidence for this claim.',
          },
          b3: {
            label: '"This spatial coincidence is not incidental"',
            color: 'emerald',
            text: '"Not incidental" is interpretation: it claims the pattern is systematic rather than random. The move to Figure 5 to support this claim is important — a single figure might be dismissed as an anomaly, but showing the pattern holds across all three administrative districts makes the interpretation harder to resist.',
          },
          b4: {
            label: 'Alternative explanation ruled out',
            color: 'yellow',
            text: '"Ruling out the possibility that the pattern is an artefact of a single anomalous area" — the writer explicitly addresses the most obvious alternative interpretation of the visual pattern. Good figure commentary does not just report what is visible; it reasons about what it means and pre-empts challenges.',
          },
          b5: {
            label: '"What the map cannot show, however..."',
            color: 'violet',
            text: '"What the map cannot show" — acknowledging what a figure cannot tell you is as important as reporting what it can. This moves the analysis forward: the limitation of the current evidence creates the need for the next chapter. Figures do not just support arguments; they define the boundaries of what can be claimed.',
          },
        },
      },
    ],
    activityPrompt:
      'Choose one figure or table from your thesis. Write three sentences: (1) an introduction that names what the figure shows precisely; (2) a sentence identifying the single most important pattern — using an active verb ("reveals", "shows", "demonstrates") — and quoting the key statistic or feature; (3) a sentence interpreting what this means for your argument, or acknowledging what the figure cannot show. Check that none of your three sentences simply repeat the figure caption.',
    keyTakeaways: [
      'Introduce figures precisely — name what they show, not just what they are ("Table 2 presents the adjusted hazard ratios for...", not "Table 2 shows the results").',
      'Direct attention selectively — identify the one or two patterns that matter for your argument, rather than walking through every value.',
      'Integrate interpretation — report what the data shows and what it means for your claim in the same passage, not in separate sections.',
      'Acknowledge what the figure cannot show — this demonstrates analytical integrity and often creates a natural bridge to the next section or chapter.',
    ],
  },

  // ─── LESSON 3: Organising Your Findings ──────────────────────────────────
  {
    slug: 'organising-findings',
    title: 'Organising Your Findings',
    durationMins: 10,
    intro:
      'How you organise your findings chapter shapes what argument the chapter makes. The most common structural error in qualitative results chapters is organising by data source — by participant, by interview question, or by the order in which data was collected — rather than by analytical theme. The result is a chapter that describes data but never builds an argument. These two extracts, from qualitative sociology, show the difference between organising by data and organising by analysis.',
    extracts: [
      {
        discipline: 'Sociology — Care Work and Gender Identity',
        source: 'PhD thesis excerpt (data-led structure)',
        variant: 'weak',
        segments: [
          { t: 'This chapter presents the findings from the twenty-two interviews conducted for this study.', a: 'a1' },
          { t: ' The first section presents the findings from Question 4 of the interview schedule,', a: 'a2' },
          { t: ' which asked participants how they first came to take on caring responsibilities. ' },
          { t: 'Participant 1 described how she had "just fallen into" caring for her mother after her father\'s death. ', a: 'a3' },
          { t: 'Participant 2 similarly noted that caring had not been a deliberate choice. ' },
          { t: 'Participant 3 offered a different perspective, describing how she had actively sought to take on a caring role. ' },
          { t: 'The remaining participants\' responses to this question are summarised in the table below.', a: 'a4' },
        ],
        annotations: {
          a1: {
            label: 'Chapter framed as "presenting" data, not building analysis',
            color: 'rose',
            text: '"Presents the findings from the twenty-two interviews" — framing the chapter as a data presentation signals that the structure will be data-led rather than argument-led. A stronger framing would state what the chapter argues: "This chapter develops three analytical themes that together account for how care work becomes gendered as obligation rather than choice."',
          },
          a2: {
            label: 'Section organised by interview question number',
            color: 'rose',
            text: '"The first section presents the findings from Question 4" — the findings are being presented in the order they were collected, not in the order that builds an argument. Interview questions are tools for generating data; they should not become the headings of a results chapter. The analytical themes need to be constructed from across the data.',
          },
          a3: {
            label: 'Participants reported sequentially, not analytically',
            color: 'rose',
            text: '"Participant 1... Participant 2 similarly... Participant 3 offered a different perspective" — reporting participants one by one is the hallmark of data description rather than thematic analysis. The word "similarly" suggests comparison, but no analytic category is named that would make the comparison meaningful.',
          },
          a4: {
            label: 'Remaining data summarised in a table',
            color: 'rose',
            text: '"The remaining participants\' responses are summarised in the table below" — this sentence reveals that the chapter is functioning as a data archive rather than an analytical argument. Summaries of all responses belong in an appendix, not the main findings chapter.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Sociology — Care Work and Gender Identity',
        source: 'PhD thesis excerpt (theme-led structure)',
        variant: 'strong',
        segments: [
          { t: 'This chapter develops three analytical themes from the interview data.', a: 'b1' },
          { t: ' The first — care as obligatory inheritance — explores how many participants described care work ', a: 'b2' },
          { t: 'as something that had accrued to them rather than been chosen: ' },
          { t: 'a responsibility that passed through family structures along lines that were simultaneously gendered and naturalised.', a: 'b3' },
          { t: ' The second theme — care as contested agency — ', a: 'b4' },
          { t: 'addresses those participants for whom the assumption of care was experienced as a site of both compliance and resistance, ' },
          { t: 'complicating any simple account of coercion. ' },
          { t: 'The third theme — care as professional identity — ', a: 'b5' },
          { t: 'focuses on participants who had formalised their caring role through paid employment, ' },
          { t: 'and examines how professional identity both sustained and transformed their relationship to unpaid caring work.', a: 'b6' },
        ],
        annotations: {
          b1: {
            label: 'Chapter framed as analytical theme development',
            color: 'emerald',
            text: '"Develops three analytical themes from the interview data" — the chapter is framed as argument construction, not data reporting. "Develops" is active: the themes are produced through analysis, not found ready-made in the data. The number (three) announces the structure explicitly.',
          },
          b2: {
            label: 'Theme 1 named as a conceptual category',
            color: 'emerald',
            text: '"Care as obligatory inheritance" — the theme has a name that is itself analytical: "obligatory inheritance" is a conceptual claim, not a description of what participants said. Good thematic names do interpretive work: they characterise the pattern rather than just labelling it.',
          },
          b3: {
            label: 'Theme characterised analytically before evidence is introduced',
            color: 'blue',
            text: '"A responsibility that passed through family structures along lines that were simultaneously gendered and naturalised" — this is the analytical content of Theme 1, stated before any particular participant is mentioned. The theme drives the chapter; the participants provide evidence for it.',
          },
          b4: {
            label: 'Theme 2 names a tension or complication',
            color: 'emerald',
            text: '"Care as contested agency" — this theme name signals complexity: the experience of care is not simply obligatory but also a site of resistance. Analytical themes are strongest when they capture tensions and contradictions in the data, not just patterns of similarity.',
          },
          b5: {
            label: 'Theme 3 introduces an unexpected dimension',
            color: 'emerald',
            text: '"Care as professional identity" — the third theme opens a new dimension: the formalisation of caring into paid work. By the third theme, the analysis has moved from obligation to agency to professional identity — the sequence itself tells a story about how caring is constituted in different contexts.',
          },
          b6: {
            label: 'Theme 3 identifies a productive tension',
            color: 'violet',
            text: '"How professional identity both sustained and transformed their relationship to unpaid caring work" — "both sustained and transformed" signals analytical complexity. The theme does not simply describe what professional carers said; it proposes an interpretive relationship between two phenomena. This is what analysis does that description cannot.',
          },
        },
      },
    ],
    activityPrompt:
      'Look at the section headings of your findings or results chapter. Could each heading be the title of a chapter in a textbook on your topic — i.e. is it a topic rather than an analytical claim? If so, rewrite each heading as an analytical category or conceptual claim. Then check: do the headings, read in sequence, tell a story? Could someone understand your argument from the headings alone?',
    keyTakeaways: [
      'Organise findings by analytical theme or research question, not by interview question, participant number, or data collection order.',
      'Theme names should do analytical work — "care as obligatory inheritance" is a claim; "experiences of taking on care" is a description.',
      'The sequence of themes should build an argument: each theme should add something that the previous theme could not account for.',
      'Data about participants who don\'t fit the main themes still belongs in the analysis — in a section that addresses variation, exceptions, or complicating cases.',
    ],
  },

  // ─── LESSON 4: Addressing Unexpected or Null Results ─────────────────────
  {
    slug: 'unexpected-results',
    title: 'Addressing Unexpected or Null Results',
    durationMins: 8,
    intro:
      'Results that surprise you, contradict your hypotheses, or show no effect are not failures — they are findings. How you write about them reveals the intellectual quality of your analysis. The temptation is to minimise unexpected results, bury them in supplementary material, or qualify them so heavily that they disappear. Resisting that temptation, and instead engaging analytically with what the surprise reveals, is a mark of genuine scholarly maturity. These two extracts, from cognitive psychology and education policy, show unexpected results handled with intellectual rigour.',
    extracts: [
      {
        discipline: 'Cognitive Psychology — Working Memory and Test Anxiety',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Contrary to the hypothesis that high working memory capacity would buffer the performance effects of test anxiety,', a: 'a1' },
          { t: ' no significant interaction between working memory and anxiety was found ' },
          { t: '(F(1, 118) = 0.84, p = .36, η² = .007). ', a: 'a2' },
          { t: 'This null result warrants careful consideration rather than dismissal.', a: 'a3' },
          { t: ' One possibility is that the buffering effect identified in laboratory studies ' },
          { t: '(Beilock and Carr, 2005; Ashcraft and Kirk, 2001) does not transfer to high-stakes assessment conditions,', a: 'a4' },
          { t: ' where the intensity of the stressor may exceed the regulatory capacity of working memory regardless of individual differences in capacity. ' },
          { t: 'Alternatively, the failure to replicate may reflect the operationalisation of anxiety in the current study:', a: 'a5' },
          { t: ' self-report measures of trait anxiety may not capture the momentary, state-level anxiety that drives the performance decrement Beilock and Carr observed using physiological indices. ' },
          { t: 'Either interpretation has implications for intervention design,', a: 'a6' },
          { t: ' suggesting that strategies targeting working memory capacity alone are unlikely to address the test anxiety problem adequately.' },
        ],
        annotations: {
          a1: {
            label: 'Hypothesis stated before the null result',
            color: 'blue',
            text: '"Contrary to the hypothesis that..." — the null result is placed explicitly in relation to the prior expectation. The reader needs to know what was expected before they can understand why the result is surprising. Stating the hypothesis first makes the significance of the null result immediately visible.',
          },
          a2: {
            label: 'Null result reported with full statistical detail',
            color: 'blue',
            text: '"F(1, 118) = 0.84, p = .36, η² = .007" — null results should be reported with the same statistical rigour as significant findings. The effect size (η² = .007) confirms that the null is not simply a power problem: the effect is genuinely negligible, not merely undetected.',
          },
          a3: {
            label: '"Warrants careful consideration rather than dismissal"',
            color: 'emerald',
            text: 'This sentence explicitly resists the temptation to minimise the null result. It signals to the reader that the analysis takes the finding seriously — and that the paragraphs that follow will reason carefully about what it means, not explain it away.',
          },
          a4: {
            label: 'First explanation: ecological validity of prior studies',
            color: 'yellow',
            text: '"Does not transfer to high-stakes assessment conditions... where the intensity of the stressor may exceed the regulatory capacity of working memory" — the null result is explained through a plausible mechanism (stressor intensity beyond regulatory capacity). This is interpretation: the result is not just reported but reasoned about.',
          },
          a5: {
            label: 'Second explanation: methodological difference',
            color: 'yellow',
            text: '"May reflect the operationalisation of anxiety" — the second explanation is self-critical: it acknowledges that the null result might be a measurement issue in the current study, not a finding about the real-world relationship. This intellectual honesty is a strength, not a weakness.',
          },
          a6: {
            label: 'Null result turned into a positive implication',
            color: 'violet',
            text: '"Strategies targeting working memory capacity alone are unlikely to address the test anxiety problem adequately" — the null result generates a practical implication. Even a finding that nothing happened produces knowledge: it rules out an approach. This is how null results contribute to science.',
          },
        },
      },
      {
        discipline: 'Education Policy — Phonics Screening Check and Reading Outcomes',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The most unexpected finding in the dataset concerns the schools in the highest pupil premium quartile.', a: 'b1' },
          { t: ' Against the general pattern in which greater disadvantage predicts lower phonics screening pass rates,', a: 'b2' },
          { t: ' twelve schools in this quartile achieved pass rates above the national median, ' },
          { t: 'a proportion significantly higher than chance (χ²(1) = 7.34, p = .007). ', a: 'b3' },
          { t: 'Initial analysis suggested that higher teaching assistant deployment might account for this pattern,', a: 'b4' },
          { t: ' but this association did not survive adjustment for school size and Ofsted category. ' },
          { t: 'A more consistent predictor was headteacher tenure: ', a: 'b5' },
          { t: 'schools with a headteacher in post for more than five years were disproportionately represented among high-performing disadvantaged schools, ' },
          { t: 'suggesting that sustained school leadership may produce institutional conditions — ', a: 'b6' },
          { t: 'curricular coherence, staff retention, community trust — that offset the attainment effects of poverty at the level of individual schools.' },
        ],
        annotations: {
          b1: {
            label: '"The most unexpected finding" — flagged openly',
            color: 'emerald',
            text: '"The most unexpected finding" — the writer flags the anomaly explicitly rather than burying it in a table. Unexpected findings are often the most analytically interesting; treating them as embarrassing exceptions misses their theoretical significance.',
          },
          b2: {
            label: 'Unexpected result located within the general pattern',
            color: 'blue',
            text: '"Against the general pattern in which greater disadvantage predicts lower pass rates" — the unexpected finding is introduced in relation to the background expectation. The anomaly is only intelligible as anomalous against an established pattern, and the writer makes that pattern explicit.',
          },
          b3: {
            label: 'Anomaly verified statistically',
            color: 'blue',
            text: '"A proportion significantly higher than chance (χ²(1) = 7.34, p = .007)" — the statistical test confirms that the pattern in high-disadvantage schools is not a random fluctuation. Verifying that the anomaly is real before explaining it is methodologically necessary.',
          },
          b4: {
            label: 'Initial explanation tested and rejected',
            color: 'yellow',
            text: '"Initial analysis suggested... but this association did not survive adjustment for school size and Ofsted category" — the writer shows their analytical work: an initial hypothesis was pursued, tested, and rejected. This transparency makes the eventual explanation more credible.',
          },
          b5: {
            label: 'Alternative explanation identified',
            color: 'emerald',
            text: '"A more consistent predictor was headteacher tenure" — the analysis keeps looking after the initial explanation fails. This is how research should work: not settling for the first available explanation, but testing alternatives. The finding about tenure emerges from the rejection of the initial hypothesis.',
          },
          b6: {
            label: 'Mechanism proposed and grounded in evidence',
            color: 'violet',
            text: '"Sustained school leadership may produce institutional conditions — curricular coherence, staff retention, community trust — that offset the attainment effects of poverty" — the final interpretation proposes a mechanism (institutional conditions) and lists its components. The unexpected finding generates a theoretical claim that the planned analysis could not have produced.',
          },
        },
      },
    ],
    activityPrompt:
      'Identify one finding from your data that surprised you, contradicted your expectations, or showed no effect. Write a paragraph using this structure: (1) state what you expected and what you found instead; (2) offer two possible explanations — one methodological (could the measure or design account for it?) and one substantive (what would it mean if the finding is real?); (3) state which explanation you find more convincing and why. Unexpected findings often produce the most important paragraphs in a thesis.',
    keyTakeaways: [
      'Unexpected and null results are findings — report them with the same rigour and the same statistical detail as significant ones.',
      'Never minimise or bury results that contradict your hypothesis — they are often the most analytically productive.',
      'Offer multiple possible explanations for surprising results, distinguishing methodological explanations (something in the design) from substantive ones (something in the world).',
      'The highest-value move: show what an unexpected result implies for theory or practice. Even findings that nothing happened generate knowledge — they rule out approaches and redirect future research.',
    ],
  },

];
