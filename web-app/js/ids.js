const CORE_BASE = [
  '01-Course-Overview.md',
  'Week-by-Week-Narrative.md',
  'Fear-Killer-Packs.md',
  'Definition-Book.md',
  'Formula-Book.md',
  'Numerical-Book.md',
  'Diagram-Book.md',
  'Marks-Allocation.md',
  'Resources.md',
];

export const COURSES = {
  AI: {
    name: 'Artificial Intelligence',
    code: 'CS-323',
    accent: '#4f46e5',
    breakdownDir: '03-Lab-Breakdowns',
    aDays: ['Wed', 'Fri'],
    bDays: [],
    coreFiles: [
      ...CORE_BASE,
      '02-Official-Syllabus.md',
      'CS-323-Artificial-Intelligence-Workbook.md',
      'Lab-Resources.md',
      'Lab-Schedule.md',
      'Viva-Book.md',
      'AI-BEFORE-MID.md',
      'AI-AFTER-MID.md',
      'AI-LABS.md',
      'AI-NAV.md',
    ],
    breakdownFiles: [
      '01-ANN-and-ML.md', '02-Searching.md', '03-CSP.md',
      '04-Expert-Systems.md', '05-Fuzzy-Logic.md',
    ],
  },
  CA: {
    name: 'Computer Architecture',
    code: 'CS-328',
    accent: '#d97706',
    breakdownDir: '03-Chapter-Breakdowns',
    aDays: ['Mon', 'Tue'],
    bDays: [],
    coreFiles: [
      ...CORE_BASE,
      '02-Official-Syllabus.md',
      'Top-10-Tricky-Concepts.md',
      'Top-100-Questions.md',
      'CA-BEFORE-MID.md',
      'CA-AFTER-MID.md',
      'CA-NAV.md',
      'CA-TOC.md',
      'categorical-analysis.md',
    ],
    breakdownFiles: [
      '01-Instruction-Set-Architecture.md', '02-Single-Cycle-Datapath.md',
      '03-Multi-Cycle-Datapath.md', '04-Pipeline-Hazards.md', '05-Cache-and-Virtual-Memory.md',
    ],
  },
  CCN: {
    name: 'Computer Communication Networks',
    code: 'CS-327',
    accent: '#059669',
    breakdownDir: '03-Lab-Breakdowns',
    aDays: ['Thu'],
    bDays: ['Wed'],
    coreFiles: [
      ...CORE_BASE,
      '02-Official-Syllabus.md',
      'CS-318-Computer-Communication-Networks-Workbook.md',
      'Lab-Resources.md',
      'Lab-Schedule.md',
      'Viva-Book.md',
      'CCN-BEFORE-MID.md',
      'CCN-AFTER-MID.md',
      'CCN-LABS.md',
      'CCN-NAV.md',
    ],
    breakdownFiles: [
      '01-IP-Configuration.md', '02-UTP-Cables.md', '03-File-Sharing-Server.md',
      '04-Static-Routes.md', '05-RIP.md', '06-OSPF-Single-Area.md', '07-PPP.md',
      '08-Access-Lists.md', '09-LAN-Switch-STP.md', '10-Virtual-LANs.md', '11-NAT.md',
      '12-BGP.md', '13-Wireshark.md', '14-DHCP.md', 'Appendix-IPv4-Subnetting-VLSM.md',
    ],
  },
  SE: {
    name: 'Software Engineering',
    code: 'CS-326',
    accent: '#7c3aed',
    breakdownDir: null,
    aDays: [],
    bDays: ['Thu', 'Fri'],
    coreFiles: [...CORE_BASE, 'Lab-Resources.md', 'Viva-Book.md',
      'SE-BEFORE-MID.md', 'SE-AFTER-MID.md', 'SE-LABS.md', 'SE-NAV.md'],
    breakdownFiles: [],
  },
  PS: {
    name: 'Probability & Statistics',
    code: 'MT-335',
    accent: '#e11d48',
    breakdownDir: '03-Chapter-Breakdowns',
    aDays: [],
    bDays: ['Mon', 'Tue'],
    coreFiles: [...CORE_BASE, '02-Official-Syllabus.md',
      'PS-BEFORE-MID.md', 'PS-AFTER-MID.md', 'PS-NAV.md'],
    breakdownFiles: [
      '01-Introduction-to-Statistics.md', '02-Measures-of-Central-Tendency-and-Dispersion.md',
      '03-Probability.md', '04-Random-Variables-and-Random-Processes.md',
      '05-Probability-Distributions.md', '06-Sampling-and-Sampling-Distributions.md',
      '07-Statistical-Inference-and-Testing-of-Hypothesis.md', '08-Simple-Regression-and-Correlation.md',
    ],
  },
};

export const DAY_SLOT = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function makeTopicId(course, week, daySlot, index) {
  return `${course}-W${week}-D${daySlot}-T${index}`;
}

export function parseTopicId(id) {
  const m = /^([A-Z]+)-W(\d+)-D(\d+)-T(\d+)$/.exec(id);
  if (!m) return null;
  return { course: m[1], week: parseInt(m[2], 10), daySlot: parseInt(m[3], 10), index: parseInt(m[4], 10) };
}

export function courseFileUrl(course, file) {
  return `../terms/2026-fall/${course}/${file}`;
}

export function breakdownUrl(course, file) {
  const meta = COURSES[course];
  if (!meta || !meta.breakdownDir) return null;
  return `../terms/2026-fall/${course}/${meta.breakdownDir}/${file}`;
}

export function displayFileName(file) {
  return String(file || '')
    .replace(/\.md$/i, '')
    .replace(/^\d{2}-/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\bNAV\b/g, 'Navigator')
    .replace(/\bTOC\b/g, 'Contents')
    .replace(/\bBEFORE MID\b/g, 'Before-mid guide')
    .replace(/\bAFTER MID\b/g, 'After-mid guide')
    .replace(/\bLABS\b/g, 'Lab guide')
    .replace(/\s+/g, ' ')
    .trim();
}

export const SHARED_FILES = [
  { file: '01-Semester-Strategy.md', pinned: true },
  { file: 'ROI-Priority-by-Topic.md', pinned: true },
  { file: 'Cross-Course-Connections.md', pinned: true },
  { file: '02-Marks-Allocation-Strategy.md' },
  { file: '03-Weekly-Schedule.md' },
  { file: '04-Revision-Cycles.md' },
  { file: '05-Past-Paper-Strategy.md' },
  { file: '06-Exam-Week-Strategy.md' },
  { file: '07-Master-Overview.md' },
  { file: 'ENGINE-DATA-CONTRACT.md' },
  { file: 'Final-Plan.md', legacy: true },
  { file: 'General-Viva-Tips.md' },
  { file: 'Last-Week-Revision.md', legacy: true },
  { file: 'Master-Dashboard.md' },
  { file: 'Master-Error-Log.md' },
  { file: 'Midterm-Plan.md', legacy: true },
  { file: 'PACK-TEMPLATE-LABS.md' },
  { file: 'PACK-TEMPLATE.md' },
  { file: 'Quick-Reference-Comparison-Table.md' },
  { file: 'Weekly-Ledger.md' },
];

export function sharedFileUrl(file) {
  return `../terms/2026-fall/Shared/${file}`;
}
