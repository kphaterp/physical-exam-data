// Physical Exam Data — evidence compiled primarily from the JAMA Rational Clinical Examination (RCE) series.
// Fields per finding: n = finding, how = technique, se/sp = sensitivity/specificity (%), lrp = LR+, lrn = LR−, note.
// LR strings may be ranges across studies. Always confirm against the primary source before high-stakes use.

window.SYSTEMS = [
  { id: "cv", label: "Cardiovascular" },
  { id: "resp", label: "Respiratory" },
  { id: "abdo", label: "Abdomen / GI" },
  { id: "neuro", label: "Neuro" },
  { id: "msk", label: "MSK / Trauma" },
  { id: "ent", label: "HEENT / ID" },
  { id: "peds", label: "Pediatrics" }
];

window.CONDITIONS = [
// ───────────────────────── CARDIOVASCULAR ─────────────────────────
{
  id: "chf", sys: ["cv"], name: "Heart failure (dyspneic ED patient)",
  src: "Wang CS et al. Does this dyspneic patient in the ED have congestive heart failure? JAMA 2005;294:1944",
  bottom: "S3 and pulmonary venous congestion on CXR are the strongest rule-ins. BNP <100 is the best rule-out. Absence of rales or cardiomegaly lowers probability modestly.",
  f: [
    { n: "S3 gallop", how: "Bell at apex, patient in left lateral decubitus, end-expiration", se: 13, sp: 99, lrp: "11", lrn: "0.88" },
    { n: "Abdominojugular reflux", how: "Firm mid-abdominal pressure 10–15 s; positive if JVP rises ≥3–4 cm and stays elevated", se: 24, sp: 96, lrp: "6.4", lrn: "0.79" },
    { n: "Jugular venous distension", how: "Patient at 30–45°; measure height above sternal angle (+5 cm = CVP)", se: 39, sp: 92, lrp: "5.1", lrn: "0.66" },
    { n: "Rales / crackles", how: "Bilateral basal inspiratory crackles", se: 60, sp: 78, lrp: "2.8", lrn: "0.51" },
    { n: "Any murmur", how: "", se: 27, sp: 90, lrp: "2.6", lrn: "0.81" },
    { n: "Lower-extremity edema", how: "Pitting edema of legs", se: 50, sp: 78, lrp: "2.3", lrn: "0.64" },
    { n: "Valsalva square-wave response", how: "BP cuff inflated 15 mmHg above SBP during Valsalva; Korotkoff sounds persisting through strain = square wave", lrp: "7.2", lrn: "0.71" },
    { n: "Hx: prior heart failure", how: "History", lrp: "5.8", lrn: "0.45" },
    { n: "Hx: PND", how: "History", lrp: "2.6", lrn: "0.70" },
    { n: "CXR: pulmonary venous congestion", how: "Imaging", lrp: "12", lrn: "0.48" },
    { n: "CXR: cardiomegaly", how: "Imaging", lrp: "3.3", lrn: "0.33" },
    { n: "ECG: atrial fibrillation", how: "ECG", lrp: "3.8", lrn: "0.79" },
    { n: "BNP <100 pg/mL", how: "Lab", lrn: "0.11", note: "Best single rule-out" }
  ]
},
{
  id: "volume", sys: ["cv"], name: "Volume overload (non-intubated)",
  src: "JAMA Rational Clinical Examination, Feb 2026 — Does This Patient Have Volume Overload? (summary via JournalFeed)",
  bottom: "Exam findings are specific but insensitive — JVD is the best exam rule-in. A normal BNP or a collapsing IVC (≥50%) argues against overload.",
  f: [
    { n: "Jugular venous distension", how: "See JVP technique", se: 35, sp: 92, lrp: "4.1", note: "Best exam finding" },
    { n: "Pulmonary crackles", how: "", se: 56, sp: 81, lrp: "2.7" },
    { n: "Lower-extremity edema", how: "", se: 44, sp: 80, lrp: "2.2" },
    { n: "CXR: pulmonary vascular congestion", how: "Imaging", sp: 91, lrp: "5.9" },
    { n: "POCUS: B-lines", how: "≥3 B-lines in ≥2 zones bilaterally", sp: 77, lrp: "4.0" },
    { n: "POCUS: IVC plethoric, low collapsibility", how: "", sp: 79, lrp: "3.9" },
    { n: "POCUS: IVC collapsibility ≥50%", how: "", se: 82, lrn: "0.22", note: "Argues against overload" },
    { n: "BNP (normal)", how: "Lab", se: 87, lrn: "0.14" }
  ]
},
{
  id: "as", sys: ["cv"], name: "Aortic stenosis (systolic murmur)",
  src: "Etchells E et al. Does this patient have an abnormal systolic murmur? JAMA 1997;277:564",
  bottom: "Absence of a murmur over the right clavicle essentially rules out AS. Slow-rising carotid, soft/absent S2 and a late-peaking murmur rule it in.",
  f: [
    { n: "No murmur over right clavicle", how: "Listen over R clavicle / 2nd R ICS", lrn: "0.10", note: "Rules out AS" },
    { n: "Slow rate of rise of carotid pulse", how: "Palpate carotid (pulsus parvus et tardus)", lrp: "2.8–130" },
    { n: "Reduced or absent S2", how: "", lrp: "3.5–50" },
    { n: "Late peak of murmur", how: "Murmur peaks in late systole", lrp: "8.0–101" },
    { n: "Apical–carotid delay", how: "Simultaneously auscultate apex & palpate carotid", lrp: "Large (single study)" }
  ]
},
{
  id: "ar", sys: ["cv"], name: "Aortic regurgitation",
  src: "Choudhry NK, Etchells EE. Does this patient have aortic regurgitation? JAMA 1999;281:2231",
  bottom: "A typical early diastolic murmur heard by cardiologists strongly rules in AR; its absence helps rule it out. Peripheral signs (Corrigan, Duroziez, Quincke) are poorly studied.",
  f: [
    { n: "Early diastolic murmur present", how: "Diaphragm, LSB 3rd–4th ICS, patient sitting forward, end-expiration", lrp: "8.8–32" },
    { n: "Early diastolic murmur absent", how: "", lrn: "0.2–0.3" }
  ]
},
{
  id: "murmur-maneuvers", sys: ["cv"], name: "Dynamic murmur maneuvers (HCM, MR/VSD)",
  src: "Lembo NJ et al. NEJM 1988;318:1572 (cited in Etchells, JAMA RCE 1997)",
  bottom: "HCM murmur increases with ↓preload (Valsalva, squat→stand) and decreases with ↑preload (stand→squat, leg raise). Handgrip increases MR/VSD murmurs.",
  f: [
    { n: "HCM: ↑ murmur with Valsalva", how: "Strain 10–15 s", se: 65, sp: 96, lrp: "14", lrn: "0.4" },
    { n: "HCM: ↑ murmur squat → stand", how: "", se: 95, sp: 84, lrp: "6.0", lrn: "0.1" },
    { n: "HCM: ↓ murmur stand → squat", how: "", se: 95, sp: 85, lrp: "7.6", lrn: "0.1" },
    { n: "HCM: ↓ murmur with passive leg elevation", how: "", se: 85, sp: 91, lrp: "9.4", lrn: "0.2" },
    { n: "MR/VSD: ↑ murmur with handgrip", how: "Sustained isometric handgrip", se: 68, sp: 92, lrp: "5.8", lrn: "0.3" },
    { n: "MR/VSD: ↑ murmur with transient arterial occlusion", how: "Bilateral arm cuffs 20 mmHg above SBP for 20 s", se: 78, sp: 100, lrp: "Large", lrn: "0.2" }
  ]
},
{
  id: "acs", sys: ["cv"], name: "Acute coronary syndrome / MI (chest pain)",
  src: "Panju AA et al. Is this patient having a myocardial infarction? JAMA 1998;280:1256; Swap CJ, Nagurney JT. JAMA 2005;294:2623; Fanaroff AC et al. JAMA 2015;314:1955",
  bottom: "Physical exam rarely rules in ACS. Chest wall pain reproduced by palpation, pleuritic or positional pain lowers probability. Use ECG + troponin + risk score (HEART) for disposition.",
  f: [
    { n: "S3", how: "", lrp: "3.2", note: "For MI (Panju)" },
    { n: "Hypotension (SBP ≤80)", how: "", lrp: "3.1" },
    { n: "Pulmonary crackles", how: "", lrp: "2.1" },
    { n: "Pain reproduced by palpation", how: "Palpate chest wall at site of pain", lrp: "0.2–0.4", note: "LR <1 when present — lowers probability" },
    { n: "Pleuritic pain", how: "History", lrp: "0.2" },
    { n: "Positional pain", how: "History", lrp: "0.3" },
    { n: "Radiation to both arms", how: "History", lrp: "2.6–4.1" }
  ]
},
{
  id: "dissection", sys: ["cv"], name: "Thoracic aortic dissection",
  src: "Klompas M. Does this patient have an acute thoracic aortic dissection? JAMA 2002;287:2262",
  bottom: "Pulse deficit and focal neuro deficit strongly increase probability. Normal aorta/mediastinum on CXR and absence of sudden-onset pain each lower it. If abrupt pain, mediastinal widening and pulse/BP differential are all absent, probability is low (~7%).",
  f: [
    { n: "Pulse deficit", how: "Compare carotid, radial, femoral pulses bilaterally", lrp: "5.7", note: "Also inter-arm SBP difference >20 mmHg" },
    { n: "Focal neurologic deficit", how: "", lrp: "6.6–33" },
    { n: "Diastolic murmur (AR)", how: "", lrp: "1.4" },
    { n: "Tearing / ripping pain", how: "History", lrp: "1.2–10.8" },
    { n: "Absence of sudden-onset pain", how: "History", lrn: "0.3" },
    { n: "CXR: widened mediastinum / enlarged aorta", how: "Imaging", lrp: "2.0", lrn: "0.3" }
  ]
},
{
  id: "aaa", sys: ["cv"], name: "Abdominal aortic aneurysm",
  src: "Lederle FA, Simel DL. Does this patient have abdominal aortic aneurysm? JAMA 1999;281:77",
  bottom: "A palpably widened aorta strongly suggests AAA, but a negative exam doesn't exclude it — sensitivity rises with size and falls with girth. Ultrasound if suspected.",
  f: [
    { n: "Palpable widened aorta (AAA ≥3 cm)", how: "Patient supine, knees flexed; two-handed palpation above umbilicus, measure width between fingers (>2.5–3 cm abnormal)", se: 39, lrp: "12", lrn: "0.72" },
    { n: "Palpable widened aorta (AAA ≥5 cm)", how: "", se: 76, lrp: "15.6", lrn: "0.51" },
    { n: "Abdominal girth <100 cm", how: "", note: "Sensitivity substantially higher in thin patients" }
  ]
},
{
  id: "pad", sys: ["cv"], name: "Peripheral arterial disease (legs)",
  src: "Khan NA et al. Does the clinical examination predict lower extremity peripheral arterial disease? JAMA 2006;295:536",
  bottom: "In symptomatic patients, cool skin, any bruit, or pulse abnormality rule in; absence of bruits and normal pulses lower probability. ABI <0.9 is the bedside standard.",
  f: [
    { n: "Cool skin (symptomatic)", how: "Back of hand along both legs, compare sides", lrp: "5.9" },
    { n: "≥1 bruit (iliac/femoral/popliteal) (symptomatic)", how: "", lrp: "5.6", lrn: "0.39" },
    { n: "Any palpable pulse abnormality (symptomatic)", how: "Femoral, popliteal, DP, PT", lrp: "4.7", lrn: "0.38" },
    { n: "Femoral bruit (asymptomatic)", how: "", se: 20, lrp: "4.8" },
    { n: "Claudication (asymptomatic)", how: "History", lrp: "3.3" },
    { n: "Pulse abnormality (asymptomatic)", how: "", lrp: "3.1" },
    { n: "ABI <0.9", how: "Doppler SBP ankle ÷ arm", note: "Sens/spec >90% vs angiography" }
  ]
},
{
  id: "dvt", sys: ["cv"], name: "Deep vein thrombosis",
  src: "Anand SS et al. Does this patient have deep vein thrombosis? JAMA 1998;279:1094; Wells PS et al. JAMA 2006;295:199",
  bottom: "Individual signs (Homan's, calf tenderness) are near-useless. Use the Wells score to set pretest probability, then D-dimer ± ultrasound.",
  f: [
    { n: "Wells: low probability (≤0)", how: "Score", note: "DVT prevalence ≈5%" },
    { n: "Wells: moderate (1–2)", how: "Score", note: "≈17%" },
    { n: "Wells: high (≥3)", how: "Score", note: "≈53%" },
    { n: "Homan's sign", how: "Dorsiflex foot → calf pain", lrp: "≈1", note: "Not useful" },
    { n: "Calf circumference asymmetry >3 cm", how: "Measure 10 cm below tibial tuberosity", note: "Wells criterion; modest LR (~2)" }
  ]
},
{
  id: "syncope", sys: ["cv"], name: "Cardiac syncope",
  src: "Albassam OT et al. Did this patient have cardiac syncope? JAMA 2019;321:2448",
  bottom: "First syncope at ≥35, AF/flutter, structural heart disease, and witnessed cyanosis point to cardiac cause. Classic vasovagal prodrome (feeling cold, mood change) argues against it. EGSYS <3 lowers probability.",
  f: [
    { n: "Hx atrial fibrillation / flutter", how: "History", lrp: "7.3" },
    { n: "Cyanosis during episode (witnessed)", how: "Witness", lrp: "6.2" },
    { n: "Severe structural heart disease", how: "History", lrp: "3.3–4.8" },
    { n: "Dyspnea before syncope", how: "History", lrp: "3.5" },
    { n: "Chest pain before syncope", how: "History", lrp: "3.4–3.8" },
    { n: "First syncope at age ≥35", how: "History", lrp: "3.3", lrn: "0.13", note: "LR− is for first episode <35" },
    { n: "Prodromal mood change / preoccupation", how: "History", lrp: "0.09", note: "Present → argues against cardiac" },
    { n: "Feeling cold before syncope", how: "History", lrp: "0.16" },
    { n: "EGSYS score <3", how: "Score", lrp: "0.12–0.17", note: "Score ≥3: LR 2.8–3.3" },
    { n: "NT-proBNP ≥210.5 pg/mL", how: "Lab", lrp: "47" }
  ]
},
{
  id: "fluid-resp", sys: ["cv"], name: "Fluid responsiveness (hemodynamically unstable)",
  src: "Bentzer P et al. Will this hemodynamically unstable patient respond to a bolus of IV fluids? JAMA 2016;316:1298",
  bottom: "Passive leg raise with a real-time cardiac output measure is the best bedside test. Static measures (CVP, BP, HR) do not predict response.",
  f: [
    { n: "Passive leg raise (with CO/SV measure)", how: "From semi-recumbent 45° → trunk flat, legs raised 45° for 1 min; positive if CO/SV ↑ ≥10–15%", lrp: "11", lrn: "0.13" },
    { n: "Pulse pressure variation (ventilated)", how: "Requires controlled ventilation, sinus rhythm, TV ≥8 mL/kg", lrp: "4.5", lrn: "0.30" },
    { n: "CVP / static measures", how: "", lrp: "≈1", note: "Do not use to predict response" }
  ]
},
{
  id: "hypovolemia", sys: ["cv"], name: "Hypovolemia (adult)",
  src: "McGee S et al. Is this patient hypovolemic? JAMA 1999;281:1022",
  bottom: "Postural pulse increase ≥30/min (or inability to stand from dizziness) is the most useful sign for large blood loss. Supine tachycardia/hypotension and cap refill are insensitive. Dry axilla modestly supports dehydration.",
  f: [
    { n: "Postural pulse ↑ ≥30/min or severe postural dizziness — large blood loss (630–1150 mL)", how: "Supine 2 min → stand 1 min, then measure HR", se: 97, sp: 98, lrp: "≈48", lrn: "0.03" },
    { n: "Same — moderate blood loss (450–630 mL)", how: "", se: 22, sp: 98 },
    { n: "Postural hypotension (SBP drop >20)", how: "", note: "Little added value — common in normovolemic elderly" },
    { n: "Dry axilla", how: "Palpate axilla", lrp: "2.8", lrn: "0.6" },
    { n: "Supine tachycardia (>100)", how: "", se: 12, note: "Insensitive" }
  ]
},
// ───────────────────────── RESPIRATORY ─────────────────────────
{
  id: "pna", sys: ["resp"], name: "Community-acquired pneumonia (adult)",
  src: "Metlay JP et al. Does this patient have community-acquired pneumonia? JAMA 1997;278:1440",
  bottom: "Normal vital signs (HR, RR, temp) make pneumonia unlikely. Asymmetric respirations, egophony, dullness and bronchial breath sounds increase probability but are insensitive. CXR still needed.",
  f: [
    { n: "All vital signs normal", how: "RR ≤20, HR ≤100, T ≤37.8", lrn: "0.18", note: "Best rule-out" },
    { n: "Asymmetric respirations", how: "", lrp: "∞ (rare)", note: "Very specific, rarely present" },
    { n: "Egophony", how: "Patient says 'ee' → sounds like 'ay'", lrp: "2.0–8.6", lrn: "0.76–0.96" },
    { n: "Dullness to percussion", how: "", lrp: "2.2–4.3", lrn: "0.79–0.93" },
    { n: "Bronchial breath sounds", how: "", lrp: "3.5", lrn: "0.9" },
    { n: "Decreased breath sounds", how: "", lrp: "2.3–2.5", lrn: "0.64–0.78" },
    { n: "Crackles", how: "", lrp: "1.6–2.7", lrn: "0.62–0.87" },
    { n: "RR >25", how: "", lrp: "1.5–3.4" },
    { n: "Temperature >37.8 °C", how: "", lrp: "1.4–4.4" }
  ]
},
{
  id: "effusion", sys: ["resp"], name: "Pleural effusion",
  src: "Wong CL et al. Does this patient have a pleural effusion? JAMA 2009;301:309",
  bottom: "Dullness to percussion is the best rule-in; normal tactile fremitus is the best rule-out.",
  f: [
    { n: "Dullness to conventional percussion", how: "Compare sides posteriorly, top to bottom", lrp: "8.7", lrn: "0.31" },
    { n: "Asymmetric chest expansion", how: "Hands on lower posterior chest, thumbs at spine; watch for lag", lrp: "8.1", lrn: "0.29" },
    { n: "Reduced tactile vocal fremitus", how: "Ulnar hand surface; patient says 'ninety-nine'", lrp: "5.7", lrn: "0.21", note: "Normal fremitus = best rule-out" },
    { n: "Diminished breath sounds", how: "", lrp: "5.2", lrn: "0.12" },
    { n: "Crackles", how: "", lrp: "≈1", note: "Not useful" }
  ]
},
{
  id: "copd", sys: ["resp"], name: "COPD / obstructive airway disease",
  src: "Straus SE et al. The accuracy of patient history, wheezing, and laryngeal measurements in diagnosing obstructive airway disease. JAMA 2000;283:1853; Holleman DR, Simel DL. JAMA 1995;273:313",
  bottom: "Combine: self-reported COPD, >40 pack-years, age >45, max laryngeal height ≤4 cm. All four present = near-diagnostic; none present ≈ rules out.",
  f: [
    { n: "All 4: self-reported COPD + >40 pack-yr + age >45 + laryngeal height ≤4 cm", how: "Laryngeal height: top of thyroid cartilage to suprasternal notch at end-expiration", lrp: "220" },
    { n: "None of the 4", how: "", lrn: "0.13" },
    { n: "Forced expiratory time ≥9 s", how: "Stethoscope over trachea, full forced exhalation", lrp: "≈4", note: "FET <3 s LR ≈0.2 (McGee)" },
    { n: "Wheezing (unforced)", how: "", note: "Increases probability but not enough alone" }
  ]
},
{
  id: "osa", sys: ["resp"], name: "Obstructive sleep apnea",
  src: "Myers KA et al. Does this patient have obstructive sleep apnea? JAMA 2013;310:731",
  bottom: "Nocturnal choking/gasping is the most useful single finding. Snoring is common but non-discriminating. Mild snoring + BMI <26 makes moderate–severe OSA unlikely.",
  f: [
    { n: "Nocturnal choking or gasping", how: "History (bed partner)", lrp: "3.3" },
    { n: "Snoring", how: "History", lrp: "1.1", note: "Not useful" },
    { n: "Mild snoring + BMI <26", how: "", lrn: "0.07", note: "For AHI ≥15" },
    { n: "STOP-Bang high score", how: "Questionnaire", note: "Useful screening tool" }
  ]
},
{
  id: "airway", sys: ["resp"], name: "Difficult intubation",
  src: "Detsky ME et al. Will this patient be difficult to intubate? JAMA 2019;321:493",
  bottom: "Baseline risk ~10%. Upper lip bite test (class 3) and prior difficult intubation are the best predictors. No bedside test reliably rules out a difficult airway — always prepare.",
  f: [
    { n: "Upper lip bite test class 3", how: "Patient tries to cover upper lip with lower incisors; class 3 = cannot reach lip", sp: 96, lrp: "14", lrn: "0.42" },
    { n: "Prior difficult intubation", how: "History", lrp: "16–19", lrn: "0.72–0.82" },
    { n: "Wilson score ≥2", how: "Weight, head/neck movement, jaw movement, receding mandible, buck teeth", sp: 95, lrp: "9.1", lrn: "0.60" },
    { n: "Upper lip catch test (edentulous)", how: "", lrp: "7.2", lrn: "0.28" },
    { n: "Hyomental distance short (<3–5.5 cm)", how: "", sp: 97, lrp: "6.4", lrn: "0.84" },
    { n: "Retrognathia", how: "Mandible <9 cm or subjectively short", sp: 98, lrp: "6.0", lrn: "0.85" },
    { n: "Impaired mandibular protrusion", how: "Can't advance lower teeth past upper", lrp: "5.5", lrn: "0.78" },
    { n: "Height : thyromental distance ratio ≥17–25", how: "", lrp: "5.2", lrn: "0.36" },
    { n: "Prayer sign", how: "Palms together — gap between fingers", lrp: "4.9", lrn: "0.75" },
    { n: "Restricted neck mobility", how: "", lrp: "4.2", lrn: "0.77" },
    { n: "Modified Mallampati ≥3", how: "Seated, mouth open, tongue out, no phonation", sp: 87, lrp: "4.1", lrn: "0.52" },
    { n: "Sternomental distance short (<12–15 cm)", how: "", lrp: "4.1", lrn: "0.65" },
    { n: "Interincisor gap short (<2–5 cm)", how: "", lrp: "3.6", lrn: "0.71" },
    { n: "Thyromental distance short (<4–7 cm)", how: "", lrp: "3.3", lrn: "0.63" }
  ]
},
// ───────────────────────── ABDOMEN / GI ─────────────────────────
{
  id: "ascites", sys: ["abdo"], name: "Ascites",
  src: "Williams JW Jr, Simel DL. Does this patient have ascites? JAMA 1992;267:2645",
  bottom: "Fluid wave best rules in; absence of flank dullness (or no history of ankle swelling / increased girth) best rules out. Ultrasound confirms.",
  f: [
    { n: "Fluid wave", how: "Patient's/assistant's hand edge on midline; tap one flank, feel impulse on other", lrp: "6.0", lrn: "0.4" },
    { n: "Shifting dullness", how: "Percuss tympany→dullness border supine, roll patient to side, re-percuss", lrp: "2.7", lrn: "0.3" },
    { n: "Flank dullness", how: "", lrp: "2.0", lrn: "0.3" },
    { n: "Bulging flanks", how: "", lrp: "2.0", lrn: "0.3" },
    { n: "Hx: increased abdominal girth", how: "History", lrp: "4.2", lrn: "0.17" },
    { n: "Hx: ankle swelling", how: "History", lrp: "2.8", lrn: "0.10" }
  ]
},
{
  id: "cirrhosis", sys: ["abdo"], name: "Cirrhosis (known liver disease)",
  src: "Udell JA et al. Does this patient with liver disease have cirrhosis? JAMA 2012;307:832",
  bottom: "Ascites, spider nevi, platelets <160 and Bonacini score >7 increase probability. Lok index <0.2, normal platelets, and absent hepatomegaly lower it.",
  f: [
    { n: "Bonacini discriminant score >7", how: "Platelets + ALT/AST ratio + INR", lrp: "9.4" },
    { n: "Ascites", how: "", lrp: "7.2" },
    { n: "Platelets <160 ×10⁹/L", how: "Lab", lrp: "6.3", lrn: "0.29" },
    { n: "Spider nevi", how: "Central arteriole blanches with pressure; SVC distribution", lrp: "4.3" },
    { n: "Hepatomegaly absent", how: "", lrn: "0.37" },
    { n: "Lok index <0.2", how: "Platelets, AST/ALT, INR", lrn: "0.09" }
  ]
},
{
  id: "spleen", sys: ["abdo"], name: "Splenomegaly",
  src: "Grover SA et al. Does this patient have splenomegaly? JAMA 1993;270:2218",
  bottom: "If pretest probability ≥10%, percuss first; if percussion is positive, palpate. Positive palpation rules in. Neither rules out reliably.",
  f: [
    { n: "Palpable spleen", how: "Supine, knees flexed; start in RLQ, move toward LUQ with inspiration; or right lateral decubitus", lrp: "8.2", lrn: "0.4" },
    { n: "Traube's space dullness", how: "Percuss 6th rib–costal margin–anterior axillary line triangle", lrp: "2.1", lrn: "0.8" },
    { n: "Castell's sign", how: "Percuss lowest L intercostal space, anterior axillary line, in full inspiration — dullness = positive", lrp: "1.7", lrn: "0.7" }
  ]
},
{
  id: "appy", sys: ["abdo"], name: "Appendicitis (adult)",
  src: "Wagner JM et al. Does this patient have appendicitis? JAMA 1996;276:1589",
  bottom: "RLQ pain, rigidity, and migration of pain rule in. Absence of RLQ pain or a history of similar prior pain lowers probability.",
  f: [
    { n: "RLQ pain", how: "", lrp: "8.0", lrn: "0.2" },
    { n: "Rigidity", how: "", lrp: "4.0" },
    { n: "Migration of pain periumbilical → RLQ", how: "History", lrp: "3.2" },
    { n: "Pain before vomiting", how: "History", lrp: "2.8" },
    { n: "Psoas sign", how: "Left lateral decubitus; extend right hip → RLQ pain", lrp: "2.4" },
    { n: "Fever", how: "", lrp: "1.9" },
    { n: "Rebound tenderness", how: "", lrp: "1.1–6.3" },
    { n: "Similar pain previously", how: "History", lrp: "0.3", note: "Present → argues against" }
  ]
},
{
  id: "chole", sys: ["abdo"], name: "Acute cholecystitis",
  src: "Trowbridge RL et al. Does this patient have acute cholecystitis? JAMA 2003;289:80",
  bottom: "No single sign rules in or out. Murphy's sign is the best exam finding. Combine with labs and ultrasound.",
  f: [
    { n: "Murphy's sign", how: "Palpate RUQ under costal margin; inspiratory arrest from pain", se: 65, sp: 87, lrp: "2.8", lrn: "0.5" },
    { n: "RUQ tenderness", how: "", lrp: "1.6", lrn: "0.4" },
    { n: "Fever", how: "", lrp: "≈1", note: "Not useful" }
  ]
},
{
  id: "anemia", sys: ["abdo"], name: "Anemia",
  src: "Sheth TN et al. The relation of conjunctival pallor to the presence of anemia. J Gen Intern Med 1997;12:102 (cited in JAMA RCE)",
  bottom: "Conjunctival rim pallor is the most useful sign when present. Absence of pallor doesn't exclude anemia.",
  f: [
    { n: "Conjunctival rim pallor", how: "Pull down lower lid; anterior rim same pale colour as posterior", lrp: "16.7" },
    { n: "Palmar crease pallor", how: "", lrp: "7.9" },
    { n: "Conjunctival pallor absent", how: "", lrn: "0.6" }
  ]
},
// ───────────────────────── NEURO ─────────────────────────
{
  id: "stroke", sys: ["neuro"], name: "Acute stroke",
  src: "Goldstein LB, Simel DL. Is this patient having a stroke? JAMA 2005;293:2391",
  bottom: "Any of facial paresis, arm drift or abnormal speech (Cincinnati) increases probability; absence of all three lowers it but doesn't exclude posterior circulation stroke.",
  f: [
    { n: "Any of: facial paresis, arm drift, abnormal speech", how: "Smile; arms out palms up eyes closed 10 s; repeat a sentence", lrp: "5.5", lrn: "0.39" }
  ]
},
{
  id: "meningitis", sys: ["neuro"], name: "Meningitis (adult)",
  src: "Attia J et al. Does this adult patient have acute meningitis? JAMA 1999;282:175; Thomas KE et al. Clin Infect Dis 2002;35:46",
  bottom: "Absence of fever, neck stiffness AND altered mental status essentially excludes meningitis. Kernig & Brudzinski are specific but very insensitive. Jolt accentuation less sensitive in later studies than first reported.",
  f: [
    { n: "Absence of all: fever, neck stiffness, altered mental status", how: "", se: "99–100", note: "Virtually rules out" },
    { n: "Fever", how: "", se: 85 },
    { n: "Neck stiffness", how: "", se: 70 },
    { n: "Jolt accentuation of headache", how: "Rotate head horizontally 2–3×/s; worsening headache = positive", se: 97, sp: 60, lrp: "2.4", lrn: "0.05", note: "Original study; later studies sens 21–64%" },
    { n: "Kernig sign", how: "Hip flexed 90°, extend knee → resistance/pain", se: 5, sp: 95, lrp: "≈1" },
    { n: "Brudzinski sign", how: "Passive neck flexion → hip/knee flexion", se: 5, sp: 95, lrp: "≈1" }
  ]
},
{
  id: "delirium", sys: ["neuro"], name: "Delirium",
  src: "Wong CL et al. Does this patient have delirium? JAMA 2010;304:779",
  bottom: "CAM is the best-validated bedside tool. Requires (1) acute onset/fluctuating course AND (2) inattention, plus (3) disorganized thinking OR (4) altered LOC.",
  f: [
    { n: "Confusion Assessment Method (CAM) positive", how: "Features 1 + 2 + (3 or 4)", lrp: "9.6", lrn: "0.16" },
    { n: "Inattention test (e.g., months backward)", how: "Errors or inability = positive", note: "Core feature — screen every time" }
  ]
},
{
  id: "neuropathy", sys: ["neuro"], name: "Diabetic large-fiber peripheral neuropathy",
  src: "Kanji JN et al. Does this patient with diabetes have large-fiber peripheral neuropathy? JAMA 2010;303:1526",
  bottom: "Abnormal 128-Hz vibration and 5.07 (10-g) monofilament are the most useful. Normal results help rule out.",
  f: [
    { n: "Vibration (128 Hz, on-off): ≥5/8 insensate", how: "Dorsum of great toe; randomise on/off applications", lrp: "35", lrn: "0.51", note: "≤1/8 insensate: LR 0.51" },
    { n: "Vibration (timed): ≥20 s longer than examiner", how: "Time until patient stops feeling vs. examiner's finger", lrp: "16", lrn: "0.33" },
    { n: "Monofilament 5.07 (10 g)", how: "Apply until buckles, 1.5 s; plantar sites", se: "57–93", sp: "95–100", lrp: "11–16", lrn: "0.09–0.54" },
    { n: "Inability to walk on heels", how: "", se: 25, sp: 98, lrp: "11", lrn: "0.76" },
    { n: "Abnormal ankle reflexes", how: "", se: 71, sp: 80, lrp: "3.6", lrn: "0.36" }
  ]
},
{
  id: "head-ct", sys: ["neuro", "msk"], name: "Minor head trauma — intracranial injury (adult)",
  src: "Easter JS et al. Will neuroimaging reveal a severe intracranial injury in this adult with minor head trauma? JAMA 2015;314:2672",
  bottom: "Signs of skull fracture, GCS decline, GCS 13 and ≥2 vomiting episodes increase risk. LOC and headache are minimally useful. Negative Canadian CT Head Rule lowers risk to ~0.3%.",
  f: [
    { n: "Signs of skull fracture", how: "Open/depressed fracture, Battle sign, raccoon eyes, hemotympanum, CSF otorrhea/rhinorrhea", lrp: "16" },
    { n: "Any GCS decline", how: "", lrp: "3.4–16" },
    { n: "GCS 13", how: "", lrp: "4.9" },
    { n: "Vomiting ≥2 episodes", how: "", lrp: "3.6" },
    { n: "Pedestrian struck by vehicle", how: "Mechanism", lrp: "3.0–4.3" },
    { n: "Post-traumatic seizure", how: "", lrp: "2.5" },
    { n: "Age ≥65", how: "", lrp: "2.3" },
    { n: "Focal neuro deficit", how: "", lrp: "1.9–7.0" },
    { n: "Canadian CT Head Rule negative", how: "Rule", note: "Risk of severe injury ≈0.31%" }
  ]
},
{
  id: "cts", sys: ["neuro", "msk"], name: "Carpal tunnel syndrome",
  src: "D'Arcy CA, McGee S. Does this patient have carpal tunnel syndrome? JAMA 2000;283:3110",
  bottom: "Hand symptom diagram (Katz) and hypalgesia in median distribution are most useful. Tinel and Phalen add little.",
  f: [
    { n: "Katz hand diagram — classic/probable", how: "Patient shades symptoms on hand diagram", lrp: "2.4", lrn: "0.5", note: "'Unlikely' pattern: LR 0.2" },
    { n: "Hypalgesia (median territory, index finger pad)", how: "Pin vs. ipsilateral little finger", lrp: "3.1", lrn: "0.7" },
    { n: "Weak thumb abduction", how: "Resist abduction of thumb perpendicular to palm", lrp: "1.8", lrn: "0.5" },
    { n: "Tinel sign", how: "Tap over carpal tunnel", lrp: "≈1.4", lrn: "≈0.8", note: "Not useful" },
    { n: "Phalen sign", how: "Wrist flexion 60 s", lrp: "≈1.3", lrn: "≈0.7", note: "Not useful" }
  ]
},
{
  id: "lss", sys: ["neuro", "msk"], name: "Lumbar spinal stenosis (older adult with leg pain)",
  src: "Suri P et al. Does this older adult with lower extremity pain have the clinical syndrome of lumbar spinal stenosis? JAMA 2010;304:2628",
  bottom: "No pain when seated and relief with bending forward are the most helpful history items. Wide-based gait and abnormal Romberg are useful exam signs. Absence of neurogenic claudication lowers probability.",
  f: [
    { n: "Wide-based gait", how: "", lrp: "14.3" },
    { n: "Thigh pain after 30 s lumbar extension", how: "Patient stands and extends lumbar spine 30 s", lrp: "8.2" },
    { n: "No pain when seated", how: "History", lrp: "7.4" },
    { n: "Symptoms improve bending forward", how: "History", lrp: "6.4" },
    { n: "Bilateral buttock or leg pain", how: "History", lrp: "6.3" },
    { n: "Abnormal Romberg test", how: "", lrp: "4.2" },
    { n: "Neurogenic claudication", how: "History", lrp: "3.7", lrn: "0.23" },
    { n: "Age >70", how: "", lrp: "2.0" }
  ]
},
// ───────────────────────── MSK / TRAUMA ─────────────────────────
{
  id: "knee", sys: ["msk"], name: "Knee: ACL / PCL / meniscal tear",
  src: "Solomon DH et al. Does this patient have a torn meniscus or ligament of the knee? JAMA 2001;286:1610",
  bottom: "Lachman best for ACL (rules in & out). Posterior drawer for PCL. McMurray rules in meniscal tear; joint-line tenderness is non-discriminating.",
  f: [
    { n: "ACL — Lachman test", how: "Knee 20–30° flexion; stabilise femur, pull tibia anteriorly; soft end-point = positive", lrp: "42", lrn: "0.1" },
    { n: "ACL — Pivot shift", how: "Valgus + internal rotation while flexing from extension; clunk = positive", lrp: "20", lrn: "0.4" },
    { n: "ACL — Anterior drawer", how: "Knee 90°, sit on foot, pull tibia forward", lrp: "3.8", lrn: "0.30" },
    { n: "PCL — Posterior drawer", how: "Knee 90°, push tibia posteriorly", lrp: "90", lrn: "0.2" },
    { n: "Meniscus — McMurray test", how: "Full flexion, rotate tibia, extend; palpable click on joint line", lrp: "17.3", lrn: "0.5" },
    { n: "Meniscus — Joint-line tenderness", how: "", lrp: "0.9", lrn: "1.1", note: "Not useful" },
    { n: "Composite clinical exam (ACL)", how: "Experienced examiner", lrp: "25", lrn: "0.04" }
  ]
},
{
  id: "rotator", sys: ["msk"], name: "Rotator cuff disease / tear",
  src: "Hermans J et al. Does this patient with shoulder pain have rotator cuff disease? JAMA 2013;310:837",
  bottom: "Painful arc suggests rotator cuff disease. Lag signs (ER / IR) are the best rule-in for full-thickness tears. Impingement tests (Hawkins, Neer) are sensitive but nonspecific.",
  f: [
    { n: "Painful arc (60–120° abduction)", how: "Active abduction in scapular plane", lrp: "3.7", note: "Any RC disease" },
    { n: "External rotation lag sign", how: "Elbow 90°, shoulder 20° abduction, passively max ER; patient can't hold = positive", lrp: "7.2", note: "Full-thickness tear (supraspinatus/infraspinatus)" },
    { n: "Internal rotation lag sign", how: "Hand behind back, lifted off; can't hold = positive", lrp: "5.6", note: "Subscapularis tear" },
    { n: "Hawkins / Neer", how: "", note: "Sensitive, not specific — LR+ small" }
  ]
},
{
  id: "hipoa", sys: ["msk"], name: "Hip osteoarthritis",
  src: "Metcalfe D et al. Does this patient have hip osteoarthritis? JAMA 2019;322:2323",
  bottom: "Posterior pain with squatting, groin pain on passive abduction/adduction, abductor weakness, and reduced adduction/IR rule in. Age <60 and normal passive adduction rule out.",
  f: [
    { n: "Worst pain in medial thigh", how: "History", lrp: "7.8" },
    { n: "Posterior hip pain with squatting", how: "", lrp: "6.1" },
    { n: "Groin pain on passive abduction/adduction", how: "", lrp: "5.7" },
    { n: "Abductor weakness", how: "Side-lying resisted abduction", lrp: "4.5" },
    { n: "Decreased passive hip adduction", how: "", lrp: "4.2", lrn: "0.25", note: "LR− = normal adduction" },
    { n: "Decreased passive internal rotation", how: "", lrp: "3.2" },
    { n: "Normal passive abduction", how: "", lrn: "0.26" },
    { n: "Age <60", how: "", lrn: "0.11" },
    { n: "Pain not improved by sitting", how: "History", lrn: "0.24" }
  ]
},
{
  id: "ottawa-ankle", sys: ["msk"], name: "Ankle / midfoot fracture — Ottawa Ankle Rules",
  src: "Stiell IG et al. JAMA 1993; Bachmann LM et al. BMJ 2003;326:417 (meta-analysis)",
  bottom: "Highly sensitive: a negative rule essentially excludes fracture (≈1.4% miss rate). Not reliable in intoxicated, distracted, or neurologically impaired patients.",
  f: [
    { n: "Ankle X-ray if malleolar pain AND any of:", how: "Bone tenderness posterior edge/tip of lateral or medial malleolus (distal 6 cm), OR unable to bear weight 4 steps immediately and in ED", se: "≈98", sp: "≈30", lrn: "0.08–0.10" },
    { n: "Foot X-ray if midfoot pain AND any of:", how: "Tenderness at base of 5th metatarsal or navicular, OR unable to bear weight 4 steps", se: "≈99", lrn: "≈0.08" }
  ]
},
{
  id: "ottawa-knee", sys: ["msk"], name: "Knee fracture — Ottawa Knee Rule",
  src: "Stiell IG et al. JAMA 1996; Bachmann LM et al. Ann Intern Med 2004;140:121",
  bottom: "X-ray only if any criterion present. Negative rule virtually excludes fracture.",
  f: [
    { n: "Any of: age ≥55, isolated patellar tenderness, fibular head tenderness, can't flex to 90°, can't bear weight 4 steps", how: "", se: 98.5, sp: 49, lrn: "0.05" }
  ]
},
{
  id: "cspine", sys: ["msk"], name: "Cervical spine injury — Canadian C-Spine / NEXUS",
  src: "Stiell IG et al. NEJM 2003;349:2510; Hoffman JR et al. NEJM 2000;343:94",
  bottom: "Canadian C-Spine Rule is more sensitive and specific than NEXUS in alert, stable adults.",
  f: [
    { n: "Canadian C-Spine Rule", how: "High-risk factor (age ≥65, dangerous mechanism, paresthesias) → image; low-risk factor allowing ROM + able to rotate 45° L & R → no imaging", se: 99.4, sp: 45 },
    { n: "NEXUS criteria", how: "No midline tenderness, no intoxication, normal alertness, no focal deficit, no distracting injury", se: "90.7 (head-to-head) – 99.6 (original)", sp: "12.9–37" }
  ]
},
// ───────────────────────── HEENT / ID ─────────────────────────
{
  id: "strep", sys: ["ent"], name: "Streptococcal pharyngitis",
  src: "Ebell MH et al. Does this patient have strep throat? JAMA 2000;284:2912",
  bottom: "No single finding is accurate enough. Use Centor/McIsaac to decide whom to test: tonsillar exudate is the best single rule-in; absence of tender anterior nodes or tonsillar enlargement modestly lowers probability.",
  f: [
    { n: "Tonsillar exudate", how: "", lrp: "3.4", lrn: "0.72" },
    { n: "Pharyngeal exudate", how: "", lrp: "2.1" },
    { n: "Strep exposure in past 2 wks", how: "History", lrp: "1.9" },
    { n: "Tender anterior cervical nodes — absent", how: "", lrn: "0.60" },
    { n: "Tonsillar enlargement — absent", how: "", lrn: "0.63" },
    { n: "McIsaac/Centor score", how: "T >38, no cough, tender ant. nodes, tonsillar swelling/exudate, age 3–14 (+1) / ≥45 (−1)", note: "0–1: no test; 2–3: rapid test; ≥4: test ± treat" }
  ]
},
{
  id: "mono", sys: ["ent"], name: "Infectious mononucleosis",
  src: "Ebell MH et al. Does this patient have infectious mononucleosis? JAMA 2016;315:1502",
  bottom: "Palatine petechiae, posterior cervical/axillary/inguinal nodes and splenomegaly rule in; absence of lymphadenopathy lowers probability. Atypical lymphocytosis is highly predictive.",
  f: [
    { n: "Palatine petechiae", how: "Junction of hard & soft palate", sp: 95, lrp: "5.3" },
    { n: "Posterior cervical adenopathy", how: "", sp: 87, lrp: "3.1" },
    { n: "Inguinal or axillary adenopathy", how: "", sp: "82–91", lrp: "3.0–3.1" },
    { n: "Splenomegaly", how: "", sp: "71–99", lrp: "1.9–6.6" },
    { n: "Absence of any lymphadenopathy", how: "", se: 91, lrn: "0.23–0.44" },
    { n: "Atypical lymphocytes ≥10%", how: "Lab", lrp: "11.4" },
    { n: "Atypical lymphocytes ≥20%", how: "Lab", lrp: "26" },
    { n: "≥50% lymphocytes + ≥10% atypical", how: "Lab", sp: 99, lrp: "54" }
  ]
},
{
  id: "sinusitis", sys: ["ent"], name: "Acute bacterial sinusitis",
  src: "Williams JW Jr, Simel DL. Does this patient have sinusitis? JAMA 1993;270:1242",
  bottom: "Count the 5 findings: maxillary toothache, poor response to decongestants, abnormal transillumination, coloured discharge, purulent secretions on exam. 4+ rules in; 0 rules out.",
  f: [
    { n: "Maxillary toothache", how: "History", lrp: "2.5" },
    { n: "Poor response to decongestants", how: "History", lrp: "2.1" },
    { n: "Purulent secretions on exam", how: "", lrp: "2.1" },
    { n: "Abnormal transillumination", how: "Darkened room, light in mouth against palate", lrp: "1.6" },
    { n: "Coloured nasal discharge", how: "History", lrp: "1.5" },
    { n: "≥4 of 5 findings", how: "", lrp: "6.4" },
    { n: "0 of 5 findings", how: "", lrn: "0.1" }
  ]
},
// ───────────────────────── PEDIATRICS ─────────────────────────
{
  id: "aom", sys: ["peds", "ent"], name: "Acute otitis media (child)",
  src: "Rothman R et al. Does this child have acute otitis media? JAMA 2003;290:1633",
  bottom: "A cloudy, bulging, or distinctly immobile TM strongly rules in AOM. A normal-coloured TM makes it unlikely. Redness alone is weak.",
  f: [
    { n: "Bulging TM", how: "", lrp: "51" },
    { n: "Cloudy TM", how: "", lrp: "34" },
    { n: "Distinctly immobile TM (pneumatic otoscopy)", how: "", lrp: "31" },
    { n: "Distinctly red TM", how: "", lrp: "8.4" },
    { n: "Slightly red TM", how: "", lrp: "1.4" },
    { n: "Normal-coloured TM", how: "", lrn: "0.2" }
  ]
},
{
  id: "peds-pna", sys: ["peds", "resp"], name: "Pneumonia (child)",
  src: "Shah SN et al. Does this child have pneumonia? JAMA 2017;318:462",
  bottom: "Hypoxemia (SpO₂ ≤96%) and increased work of breathing are the best predictors. Auscultation (crackles) does not discriminate. No single finding rules in/out.",
  f: [
    { n: "SpO₂ ≤96%", how: "", se: 64, sp: 77, lrp: "2.8", lrn: "0.47" },
    { n: "Increased work of breathing", how: "Grunting, flaring, retractions", lrp: "2.1" },
    { n: "Fever >37.5 °C", how: "", se: "80–92", sp: "47–54", lrp: "1.7–1.8" },
    { n: "Tachypnea >40/min", how: "", se: 79, sp: 51, lrp: "1.5" },
    { n: "Chest pain (adolescents)", how: "History", lrp: "1.5–5.5" },
    { n: "Crackles", how: "", lrp: "1.2", lrn: "0.90", note: "Not useful" }
  ]
},
{
  id: "peds-dehyd", sys: ["peds"], name: "Dehydration (child, ≥5%)",
  src: "Steiner MJ et al. Is this child dehydrated? JAMA 2004;291:2746",
  bottom: "Prolonged capillary refill, abnormal skin turgor, and abnormal respiratory pattern are the best individual signs. Combine signs (clinical scales) for best accuracy.",
  f: [
    { n: "Prolonged capillary refill", how: "Press fingertip pad until blanched; refill >2 s abnormal (warm room)", lrp: "4.1", lrn: "0.57" },
    { n: "Abnormal skin turgor", how: "Pinch abdominal skin lateral to umbilicus; slow recoil", lrp: "2.5", lrn: "0.66" },
    { n: "Abnormal respiratory pattern", how: "Deep (acidotic) breathing ± tachypnea", lrp: "2.0", lrn: "0.76" }
  ]
},
{
  id: "peds-appy", sys: ["peds", "abdo"], name: "Appendicitis (child)",
  src: "Bundy DG et al. Does this child have appendicitis? JAMA 2007;298:438",
  bottom: "Fever and rebound tenderness are the most useful signs; WBC <10 000 and normal ANC lower probability. Use Pediatric Appendicitis Score / Alvarado for risk stratification.",
  f: [
    { n: "Fever", how: "", lrp: "3.4", lrn: "0.32" },
    { n: "Rebound tenderness", how: "", lrp: "3.0", lrn: "0.28" },
    { n: "Migration of pain to RLQ", how: "History", lrp: "1.9–3.1" },
    { n: "WBC <10 000/µL", how: "Lab", lrn: "0.22" }
  ]
}
];
