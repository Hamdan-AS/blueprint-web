const METHODS = {
  review: {
    title: 'Turn confusion into questions',
    steps: ['Scan your lecture copy without rereading every line.', 'Write the three points you cannot explain yet.', 'Move those three points into the Master Error Log.'],
    success: 'You finish with three precise questions, not a vague feeling of confusion.',
  },
  deep_study_A: {
    title: 'Learn by explaining',
    steps: ['Read one small section from the bundled material.', 'Close it and explain the idea in your own words.', 'Check the source, repair the gaps, then explain it once more.'],
    success: 'You can teach the main idea without looking at the page.',
  },
  deep_study_B: {
    title: 'Learn by explaining',
    steps: ['Read one small section from the bundled material.', 'Close it and explain the idea in your own words.', 'Check the source, repair the gaps, then explain it once more.'],
    success: 'You can teach the main idea without looking at the page.',
  },
  drill_A: {
    title: 'Build speed with one pattern',
    steps: ['Choose one representative problem type.', 'Solve it without notes and mark the exact slow step.', 'Repeat that type until the method feels automatic.'],
    success: 'You can solve the pattern correctly and explain why each step works.',
  },
  interleaved: {
    title: 'Retrieve before you review',
    steps: ['Pick one topic from 1, 2, and 4 weeks ago.', 'Write what you remember before opening notes.', 'Check each answer and log only the gaps.'],
    success: 'You attempted every answer from memory before checking.',
  },
  blank_page: {
    title: 'Prove what stayed',
    steps: ['Put every source out of sight.', 'Write the key ideas, formulas, or diagrams from memory.', 'Compare with the source and circle only what was missing.'],
    success: 'The blank page shows what you know and exactly what needs another pass.',
  },
  past_paper_run: {
    title: 'Simulate the exam',
    steps: ['Set the real exam time limit.', 'Answer without notes or interruptions.', 'Mark errors by cause: knowledge, method, or time.'],
    success: 'Every lost mark produces one specific correction in the Error Log.',
  },
  error_log_review: {
    title: 'Close old gaps',
    steps: ['Choose the highest-impact unresolved error.', 'Redo it without looking at the old solution.', 'Keep it open only if you still cannot explain the correction.'],
    success: 'Every closed error can be solved and explained from memory.',
  },
  default: {
    title: 'Work one clear outcome',
    steps: ['Define what finished looks like.', 'Work with unrelated tabs and notifications closed.', 'Stop at the timer and write the next action.'],
    success: 'You end with a visible result and a clear next step.',
  },
};

function guideFor(block) {
  if (block.label?.startsWith('lab_')) return {
    title: 'Make the lab reproducible',
    steps: ['Read the objective before touching the tools.', 'Build one step at a time and test each step.', 'Save the working result and explain it aloud as viva practice.'],
    success: 'You can recreate the result and explain why it works.',
  };
  return METHODS[block.label] || METHODS.default;
}

function focusTimer(minutes) {
  const total = Math.max(1, Number(minutes) || 25) * 60;
  let remaining = total; let timer = null;
  const wrap = document.createElement('div'); wrap.className = 'focus-timer';
  const display = document.createElement('strong'); display.className = 'focus-time';
  const status = document.createElement('span'); status.className = 'focus-status'; status.textContent = 'Ready for one focused block';
  const controls = document.createElement('div'); controls.className = 'focus-controls';
  const start = document.createElement('button'); start.type = 'button'; start.className = 'focus-control primary'; start.textContent = 'Start focus';
  const reset = document.createElement('button'); reset.type = 'button'; reset.className = 'focus-control'; reset.textContent = 'Reset';
  const render = () => {
    display.textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
    wrap.style.setProperty('--timer-progress', `${Math.round((1 - remaining / total) * 100)}%`);
  };
  const stop = () => { if (timer) clearInterval(timer); timer = null; start.textContent = remaining === total ? 'Start focus' : 'Resume'; };
  start.addEventListener('click', () => {
    if (timer) { stop(); status.textContent = 'Paused — resume when ready'; return; }
    start.textContent = 'Pause'; status.textContent = 'Focus mode · stay with this one task';
    timer = setInterval(() => {
      if (!wrap.isConnected) { stop(); return; }
      remaining = Math.max(0, remaining - 1); render();
      if (!remaining) { stop(); start.textContent = 'Finished'; start.disabled = true; status.textContent = 'Block finished — retrieve what you learned before moving on'; }
    }, 1000);
  });
  reset.addEventListener('click', () => { stop(); remaining = total; start.disabled = false; start.textContent = 'Start focus'; status.textContent = 'Ready for one focused block'; render(); });
  controls.append(start, reset); wrap.append(display, status, controls); render(); return wrap;
}

export function renderStudySession(block) {
  const guide = guideFor(block); const section = document.createElement('section'); section.className = 'study-session';
  const eyebrow = document.createElement('span'); eyebrow.className = 'section-eyebrow'; eyebrow.textContent = 'How to study this';
  const title = document.createElement('h3'); title.className = 'study-method-title'; title.textContent = guide.title;
  const list = document.createElement('ol'); list.className = 'study-steps';
  for (const step of guide.steps) { const item = document.createElement('li'); item.textContent = step; list.append(item); }
  const check = document.createElement('p'); check.className = 'success-check'; check.innerHTML = '<strong>Done when:</strong> ';
  check.append(document.createTextNode(guide.success));
  section.append(eyebrow, title, list, check, focusTimer(block.minutes)); return section;
}
