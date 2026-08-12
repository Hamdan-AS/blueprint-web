# FEAR-KILLER-PACKS

Each pack is 3-5 questions per syllabus topic. Questions are ordered hardest first — attack the fear immediately, then coast through the rest.

---

## CS-326 Software Engineering

**Resources:** Gate Smashers SE Playlist • Pressman & Maxim 9th Ed • Sommerville 10th Ed • Refactoring.Guru

### Week 1: topic-software-process-models
**Resources:** Gate Smashers (Process models) • Pressman Ch.2-3 • Sommerville Ch.2

1. A defense system with hard real-time requirements has 50,000 LOC, needs full documentation for certification, and requirements are fully known upfront. Which process model should you choose and why? Design the complete lifecycle showing phases, milestones, and deliverables. Now take a startup building a food delivery app with uncertain requirements — which model fits and why?
2. Show the Waterfall, Incremental, and Spiral models side by side. For each, state: when requirements are fixed, when customer sees the product, how risk is handled, and what happens if requirements change mid-project. Construct a scenario where each model is the ONLY appropriate choice.
3. Compare plan-driven vs agile development across: documentation, customer involvement, team size, response to change, and project predictability. A 5-person team building an internal tool for a small company with a flexible stakeholder — which approach wins and why?

---

### Week 2: topic-requirements-engineering
**Resources:** Pressman Ch.5-6 • Sommerville Ch.4

1. Write functional and non-functional requirements for an ATM system. Give 5 functional and 5 non-functional requirements. Then classify the NFRs into: product, organizational, and external requirements. Show how a functional requirement like "dispense cash" traces to specific NFRs like "dispense within 2 seconds" and "dispense correct amount with 99.999% accuracy."
2. Elicit requirements for a library management system. Use at least 4 elicitation techniques (interviews, surveys, domain analysis, observation). For each technique, state what type of requirement it uncovers best and what its blind spot is. Create a sample interview question set for a librarian stakeholder.
3. Write an SRS excerpt (IEEE 830 format) for the ATM system's "cash withdrawal" use case. Include: functional requirement, performance requirement, interface requirement, and a constraint. Show how each section of IEEE 830 maps to your content.

---

### Week 3: topic-project-management
**Resources:** Pressman Ch.21-22 • Sommerville Ch.22

1. A software project has tasks: A(5 days, precedes B,C), B(3 days, precedes D), C(4 days, precedes D,E), D(2 days, precedes F), E(6 days, precedes F), F(3 days, no successors). Draw the network diagram using CPM. Calculate ES, EF, LS, LF, slack for each task. Identify the critical path and total project duration. What happens if task C takes 7 days instead of 4?
2. Identify 5 risks for a web development project: one technology risk, one people risk, one organizational risk, one requirements risk, and one estimation risk. For each, apply RMMM: state the probability, impact, mitigation strategy (what you do proactively), and management plan (what you do if it occurs).
3. Draw a Work Breakdown Structure (WBS) for building a mobile banking app. Decompose to at least level 3 (4 levels total: project → phase → deliverable → work package). Show at least 15 work packages. How does the WBS feed into the Gantt chart and cost estimation?

---

### Week 4: topic-software-design
**Resources:** Pressman Ch.8-9, 12 • Sommerville Ch.6-7 • Refactoring.Guru

1. For a library management system, identify modules with high cohesion and low coupling. Given two designs: Design A has a single "LibraryManager" class handling books, members, loans, and fines. Design B separates BookManager, MemberManager, LoanManager, FineManager. Evaluate both for cohesion and coupling. Which is better and why?
2. Explain and give a concrete example for each of the 7 types of cohesion (coincidental to functional) and 7 types of coupling (content to data). Order them best to worst. For a given code snippet showing tight coupling, refactor to achieve data coupling.
3. Implement a Singleton pattern for a database connection manager. Draw the UML class diagram with all relationships. Then implement an Observer pattern for a notification system where EmailNotifier, SMSNotifier, and PushNotifier observe a OrderStatus subject. Show the sequence diagram for a status change.
4. Compare layered architecture, data-centered architecture, and call-and-return architecture. For a hospital management system, which architecture? Draw the architectural diagram showing all layers/components and the data flow between them.

---

### Week 5: topic-agile-and-scrum
**Resources:** Gate Smashers (Agile videos) • Pressman Ch.4 • Sommerville Ch.3

1. A team of 7 is building a food delivery app with a tight 3-month deadline and a product owner who wants to see progress every 2 weeks. Set up the complete Scrum framework: define all 3 roles (PO, SM, Dev Team), all 5 events (Sprint Planning, Daily Scrum, Sprint Review, Retrospective, Backlog Refinement), and all 3 artifacts (Product Backlog, Sprint Backlog, Increment). Show the first Sprint Backlog with 5 user stories and acceptance criteria.
2. Write the four values of the Agile Manifesto. For each value, give a concrete development practice that exemplifies it. Then list 12 XP practices and for each, state the problem it solves (e.g., pair programming solves code quality and knowledge silos).
3. Given 10 user stories with story points 3,5,8,2,3,13,5,8,3,5 and a team velocity of 20 points per sprint, plan the first two sprints. Show which stories go in Sprint 1 vs Sprint 2. Track using a burndown chart showing ideal vs actual progress for Sprint 1.

---

### Week 6: topic-verification-and-validation
**Resources:** Gate Smashers (Testing videos) • Pressman Ch.14-16 • Sommerville Ch.8

1. Given the following code: `int f(int a, int b, int c) { if (a > 5) { if (b < 10) { return c / (b - a); } } return 0; }` Draw the control flow graph. Calculate cyclomatic complexity using all three methods (edges-nodes+2, regions, predicates+1). Design test cases to achieve 100% statement coverage, 100% branch coverage, and 100% path coverage. How many test cases for each?
2. Apply equivalence partitioning and boundary value analysis to a function that accepts a date in format DD/MM/YYYY. The valid range is 01/01/2000 to 31/12/2099. Identify all equivalence classes (valid and invalid) and boundary values. Generate the minimal test set for BVA including all boundaries.
3. Differentiate verification and validation. Given a requirements document for a railway signaling system, describe what you would do for verification vs validation. Then differentiate unit, integration, system, and acceptance testing for the same system. Who performs each type and when?

---

### Week 7: topic-cost-estimation
**Resources:** Gate Smashers (COCOMO videos) • Pressman Ch.23

1. Calculate effort, schedule, and team size using Basic COCOMO for an Organic project of 50 KLOC. Use coefficients: a=2.4, b=1.05, c=2.5, d=0.38. Then recalculate for a Semi-detached project (a=3.0, b=1.12, c=2.5, d=0.35). Compare the two — which requires more effort and why?
2. Using Intermediate COCOMO, the nominal effort for 40 KLOC Semi-detached is 160 PM. The project has: high required reliability (1.15), high product complexity (1.15), low analyst capability (1.29), low language experience (1.14), and high use of modern tools (0.91). Calculate EAF and adjusted effort. Which cost driver has the most impact?
3. Differentiate size-oriented metrics (LOC) from function-oriented metrics (FP). Given a project with 10,000 LOC in Java delivering 200 function points at 12 person-months, calculate: productivity (LOC/PM and FP/PM), quality (defects/KLOC), and cost per FP (at $8000/PM). Why might FP be preferred over LOC?
4. Calculate the exponents and coefficients for Basic COCOMO: if effort = 2.4 × (KLOC)^1.05 for Organic, what is the effort and schedule for 100 KLOC? Show the formulas and then explain why the exponent > 1 implies diseconomy of scale.

---

### Week 8: topic-maintenance-and-sqa
**Resources:** Pressman Ch.13, 17 • Sommerville Ch.9, 24

1. A banking application has 5 million LOC with 500 reported defects per year. The maintenance team handles 2000 change requests annually: 40% corrective, 25% adaptive, 20% perfective, 15% preventive. Calculate the maintenance effort distribution and compute the maintenance cost if each PM costs $10,000 and the team processes 50 PM per month. Show the cost breakdown by maintenance type.
2. Compare the four types of software maintenance. Take a legacy payroll system: the tax laws change (adaptive), a bug causes incorrect overtime calculation (corrective), the UI needs modernization (perfective), and code documentation needs updating (preventive). Show the effort distribution and which type typically consumes the most resources.
3. Define SQA and list 5 SQA activities. For a critical medical device software, design the SQA plan including: standards to follow, review types (technical, management), testing levels, and metrics to track. How does SQA differ from testing? Given a budget of 15% of total project cost, allocate the SQA budget across activities.

---

