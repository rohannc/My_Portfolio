<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { personalInfo, featuredProject, codolioStats } from '../data/portfolioData.js';

const isOpen = ref(false);
const inputCommand = ref('');
const isStreaming = ref(false);

const initialBanner = {
  type: 'banner',
  title: 'RohanOS Interactive Terminal v2.4 (tty1)',
  subtitle: 'Autonomous AI Agents • Distributed Systems • Competitive DSA'
};

const output = ref([initialBanner]);
const terminalInput = ref(null);
const terminalBody = ref(null);
const bottomAnchor = ref(null);

// Command history
const history = ref([]);
const historyIndex = ref(-1);

// Key combo detection (Ctrl+` or typing 'sudo')
let keyCombo = '';
let comboTimeout = null;

const availableCommands = [
  'help', 'whoareyou', 'experience', 'skills', 'projects', 
  'stats', 'resume', 'contact', 'clear', 'sudo', 'exit'
];

const handleGlobalKeydown = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    e.preventDefault();
    toggleTerminal();
    return;
  }

  if (e.ctrlKey && e.key === '`') {
    e.preventDefault();
    toggleTerminal();
    return;
  }
  
  if (!isOpen.value) {
    if (e.key.length === 1) {
      keyCombo += e.key;
      clearTimeout(comboTimeout);
      comboTimeout = setTimeout(() => { keyCombo = ''; }, 1000);
      
      if (keyCombo.endsWith('sudo')) {
        e.preventDefault();
        toggleTerminal();
        keyCombo = '';
      }
    }
  }
};

const toggleTerminal = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    nextTick(() => {
      terminalInput.value?.focus();
      scrollToBottom();
    });
  } else {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
};

const scrollToBottom = () => {
  if (bottomAnchor.value) {
    bottomAnchor.value.scrollIntoView({ block: 'end' });
  } else if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
  }
};

const focusInput = () => {
  terminalInput.value?.focus();
};

// Keyword highlighting engine for terminal content
const highlightRules = [
  { pattern: /\b(Visa)\b/g, replace: '<span class="text-blue-400 font-bold">Visa</span>' },
  { pattern: /\b(Autonomous AI Agents|AI Agents)\b/gi, replace: '<span class="text-cyan-300 font-semibold">$1</span>' },
  { pattern: /\b(LangGraph|Model Context Protocol|MCP|Claude Code)\b/g, replace: '<span class="text-cyan-300 font-semibold bg-cyan-950/60 border border-cyan-500/30 px-1 py-0.5 rounded text-[11px]">$1</span>' },
  { pattern: /\b(Python \(Asyncio\)|Python|Asyncio|Java 21|Java|C\+\+|Spring Boot 3|Spring Boot|Kafka|Vert\.x|Docker|Kubernetes|Jenkins)\b/g, replace: '<span class="text-emerald-300 font-semibold">$1</span>' },
  { pattern: /\b(Jadavpur University|Master of Computer Applications)\b/g, replace: '<span class="text-purple-300 font-semibold">$1</span>' },
  { pattern: /\b(DevSecOps|Human-in-the-Loop|HITL|SonarQube|Checkmarx|Nexus IQ)\b/g, replace: '<span class="text-amber-300 font-semibold">$1</span>' },
  { pattern: /\b(WBJECA 2024|WBJECA|General Merit Rank 17|Rank 17|1,700\+|1700\+|92\.8%)\b/g, replace: '<span class="text-amber-300 font-bold bg-amber-500/10 px-1 rounded border border-amber-500/20">$1</span>' },
  { pattern: /\b(Error Level Analysis|ELA|DeepFake|Supabase|PostgreSQL|JWT Auto-Rotation|JWT)\b/g, replace: '<span class="text-teal-300 font-semibold">$1</span>' }
];

const highlight = (text) => {
  if (!text || typeof text !== 'string') return text;
  let res = text;
  for (const r of highlightRules) {
    res = res.replace(r.pattern, r.replace);
  }
  return res;
};

// Stream lines with high-speed typewriter cascade
let cancelStream = false;

const streamLines = async (lines) => {
  isStreaming.value = true;
  cancelStream = false;

  for (const item of lines) {
    if (cancelStream) break;
    output.value.push(item);
    await nextTick();
    scrollToBottom();
    
    // Balanced medium typing/printing cadence
    let lineDelay = 75;
    if (item.type === 'header') lineDelay = 55;
    else if (item.type === 'help' || item.type === 'kv') lineDelay = 70;
    else if (item.type === 'bullet' || item.type === 'project-card') lineDelay = 95;
    else if (item.type === 'stat-grid' || item.type === 'error-banner') lineDelay = 110;
    
    await new Promise(r => setTimeout(r, lineDelay));
  }

  isStreaming.value = false;
  await nextTick();
  scrollToBottom();
  focusInput();
};

const executeCommand = async (customCmd = null) => {
  const raw = customCmd !== null ? customCmd : inputCommand.value;
  const cmd = raw.trim();
  if (!cmd) return;

  // Add to history
  history.value.push(cmd);
  historyIndex.value = history.value.length;

  // Echo user input immediately
  output.value.push({ type: 'input', text: cmd });
  inputCommand.value = '';
  await nextTick();
  scrollToBottom();

  const args = cmd.toLowerCase().split(/\s+/);
  const command = args[0];

  let resultLines = [];

  switch (command) {
    case 'help':
      resultLines = [
        { type: 'header', text: 'SYSTEM COMMAND REFERENCE', icon: '⚡' },
        { type: 'help', cmd: 'whoareyou', desc: 'Display engineer dossier, alma mater & mission' },
        { type: 'help', cmd: 'experience', desc: 'Enterprise role at Visa, SDLC agents & distributed systems' },
        { type: 'help', cmd: 'skills', desc: 'Inspect Agentic AI, core languages, frameworks & DevOps' },
        { type: 'help', cmd: 'projects', desc: 'DeepFake forensic verification & cloud platforms' },
        { type: 'help', cmd: 'stats', desc: 'Competitive DSA metrics, WBJECA rank & streaks' },
        { type: 'help', cmd: 'resume', desc: 'Open verified resume in a new browser tab' },
        { type: 'help', cmd: 'contact', desc: 'Direct communication channels & verified links' },
        { type: 'help', cmd: 'clear', desc: 'Flush output buffer and reset terminal screen' },
        { type: 'help', cmd: 'sudo', desc: 'Request root / superuser administrative access' },
        { type: 'help', cmd: 'exit', desc: 'Close interactive overlay (or press Escape)' }
      ];
      break;

    case 'whoareyou':
      resultLines = [
        { type: 'header', text: 'ENGINEER DOSSIER', icon: '👤' },
        { type: 'kv', label: 'Identity', value: personalInfo.name, highlight: true },
        { type: 'kv', label: 'Current Role', value: `${personalInfo.role} (${personalInfo.location})`, highlight: true },
        { type: 'kv', label: 'Education', value: 'Master of Computer Applications, Jadavpur University' },
        { type: 'kv', label: 'State Rank', value: 'WBJECA 2024 — General Merit Rank 17' },
        { type: 'kv', label: 'Focus', value: 'Autonomous AI Agents (LangGraph, MCP), Enterprise DevSecOps, Distributed Systems' },
        { type: 'bullet', text: 'Passionate competitive programmer with 1,700+ problems solved across global platforms.' }
      ];
      break;

    case 'experience':
      resultLines = [
        { type: 'header', text: 'ENTERPRISE CAREER & ARCHITECTURAL ROLES', icon: '🏢' },
        { type: 'highlight', title: 'Visa — Software Engineer', sub: 'Bengaluru, Karnataka | June 2026 — Present', badge: 'Active Role' },
        { type: 'bullet', text: 'Autonomous AI Agents: Engineering LangGraph and Model Context Protocol (MCP) workflows to optimize enterprise SDLC.' },
        { type: 'bullet', text: 'DevSecOps & CI/CD: Automated vulnerability remediation with Human-in-the-Loop review gates.' },
        { type: 'bullet', text: 'Distributed Systems: High-throughput microservices using Spring Boot, Kafka, Vert.x, Docker, and Jenkins.' }
      ];
      break;

    case 'skills':
      resultLines = [
        { type: 'header', text: 'CORE TECHNICAL STACK & AGENTIC TOOLING', icon: '⚡' },
        { type: 'pills', category: 'Agentic AI & LLMs', items: ['LangGraph', 'Model Context Protocol (MCP)', 'Claude Code', 'Autonomous Workflows'] },
        { type: 'pills', category: 'Languages', items: ['Python (Asyncio)', 'Java', 'SQL', 'C++', 'C', 'JavaScript'] },
        { type: 'pills', category: 'Frameworks', items: ['Spring Boot 3', 'Vert.x', 'Vue.js 3', 'Flask', 'Node.js'] },
        { type: 'pills', category: 'Cloud & Infrastructure', items: ['Kubernetes', 'Docker', 'Apache Kafka', 'Jenkins', 'Hazelcast'] },
        { type: 'pills', category: 'Security & DevSecOps', items: ['SonarQube', 'Checkmarx', 'Nexus IQ', 'HITL CI/CD'] }
      ];
      break;

    case 'projects':
      resultLines = [
        { type: 'header', text: 'FEATURED ENGINEERING ARCHITECTURES', icon: '🚀' },
        { 
          type: 'project-card', 
          title: featuredProject.title, 
          badge: featuredProject.badge,
          summary: featuredProject.summary,
          tech: featuredProject.techStack.map(t => t.name).slice(0, 6).join(' • '),
          link: featuredProject.githubUrl
        },
        { 
          type: 'project-preview', 
          title: 'Khoj — Healthcare Management Platform', 
          badge: 'In Development / Private Preview',
          desc: 'Multi-tenant cloud platform with role-based doctor/patient portals, automated negotiations, and JWT auto-rotation.'
        }
      ];
      break;

    case 'stats':
      resultLines = [
        { type: 'header', text: 'COMPETITIVE PROGRAMMING & DSA TELEMETRY', icon: '📊' },
        { 
          type: 'stat-grid', 
          items: [
            { label: 'Total Problems', value: codolioStats.totalSolved || '1700+' },
            { label: 'State Rank', value: 'WBJECA Rank 17' },
            { label: 'Max Streak', value: `${codolioStats.maxStreak || '287'} Days` },
            { label: 'Contests', value: `${codolioStats.contestsAttended || '28'}+ Attended` }
          ]
        },
        { type: 'bullet', text: 'Platform Distribution: LeetCode (880) • GeeksforGeeks (671) • CodeChef (74) • Codeforces (36)' },
        { type: 'bullet', text: 'Collegiate Milestones: 9+ Hackathons and Collegiate Competitive Coding Championships won.' }
      ];
      break;

    case 'resume':
      resultLines = [
        { type: 'success', text: 'Opening official verified resume in a new tab...' }
      ];
      window.open(personalInfo.resumeUrl, '_blank');
      break;

    case 'contact':
      resultLines = [
        { type: 'header', text: 'DIRECT CHANNELS & VERIFIED PROFILES', icon: '📡' },
        { type: 'contact-item', icon: '✉️', label: 'Email', value: personalInfo.email, url: `mailto:${personalInfo.email}` },
        { type: 'contact-item', icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/rohanchakraborty0108', url: 'https://www.linkedin.com/in/rohanchakraborty0108/' },
        { type: 'contact-item', icon: '🐙', label: 'GitHub', value: 'github.com/rohannc', url: 'https://github.com/rohannc' },
        { type: 'contact-item', icon: '⚡', label: 'Codolio', value: personalInfo.codolioUrl, url: personalInfo.codolioUrl }
      ];
      break;

    case 'clear':
      output.value = [initialBanner];
      return;

    case 'sudo':
      if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
        resultLines = [
          { type: 'error-banner', title: 'ACCESS DENIED', text: 'Nice try! The root filesystem is read-only and immutable.' }
        ];
      } else {
        resultLines = [
          { type: 'error-banner', title: 'PERMISSION DENIED', text: 'User "guest" is not in the sudoers file. Incident is reported.' }
        ];
      }
      break;

    case 'exit':
      toggleTerminal();
      return;

    default:
      resultLines = [
        { type: 'error', text: `Command not found: "${command}". Type "help" to inspect valid system commands.` }
      ];
  }

  await streamLines(resultLines, 22);
};

// Keyboard navigation (Up/Down arrow history, Tab auto-complete)
const handleInputKeydown = (e) => {
  if (e.key === 'Enter') {
    executeCommand();
    return;
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (history.value.length === 0) return;
    if (historyIndex.value > 0) {
      historyIndex.value--;
      inputCommand.value = history.value[historyIndex.value];
    } else if (historyIndex.value === 0) {
      inputCommand.value = history.value[0];
    }
    return;
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex.value < history.value.length - 1) {
      historyIndex.value++;
      inputCommand.value = history.value[historyIndex.value];
    } else {
      historyIndex.value = history.value.length;
      inputCommand.value = '';
    }
    return;
  }

  if (e.key === 'Tab') {
    e.preventDefault();
    const current = inputCommand.value.trim().toLowerCase();
    if (!current) return;
    const match = availableCommands.find(c => c.startsWith(current));
    if (match) {
      inputCommand.value = match;
    }
  }
};

const runQuickCmd = (cmd) => {
  executeCommand(cmd);
};

const handleOpenTerminalEvent = () => {
  if (!isOpen.value) {
    toggleTerminal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown);
  window.addEventListener('open-terminal', handleOpenTerminalEvent);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown);
  window.removeEventListener('open-terminal', handleOpenTerminalEvent);
});
</script>

<template>
  <Transition name="terminal-modal">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/75 backdrop-blur-md" 
      role="dialog"
      aria-modal="true"
      @click.self="toggleTerminal"
    >
      <div class="terminal-window w-full max-w-3xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-[13px] sm:text-[14px] ring-1 ring-cyan-500/20">
        <!-- Title Bar -->
        <div class="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-white/10 select-none gap-4">
          <div class="flex gap-2.5 items-center flex-shrink-0">
            <button 
              @click="toggleTerminal" 
              data-tooltip="Close (Esc)" 
              data-tooltip-pos="right"
              aria-label="Close terminal"
              class="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-400 border border-rose-600/50 transition-colors cursor-pointer"
            ></button>
            <div class="w-3.5 h-3.5 rounded-full bg-amber-500/80 border border-amber-600/50"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-emerald-500/80 border border-emerald-600/50"></div>
          </div>
          <div class="text-slate-400 text-xs font-semibold tracking-wider flex items-center gap-2 truncate">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0"></span>
            <span class="text-slate-200">guest@rohanOS</span>
            <span class="text-slate-600">:</span>
            <span class="text-cyan-400">~/terminal</span>
          </div>
          <div class="flex-shrink-0 text-right whitespace-nowrap">
            <span class="text-[10px] sm:text-[11px] text-slate-500 font-mono tracking-wide px-2 py-0.5 rounded bg-white/5 border border-white/5">ESC to exit</span>
          </div>
        </div>
        
        <!-- Terminal Body -->
        <div 
          ref="terminalBody"
          class="terminal-scroll-area h-[65vh] max-h-[460px] sm:h-[440px] overflow-y-auto overscroll-contain p-4 sm:p-5 bg-slate-950/80 text-slate-300 custom-scrollbar space-y-2 select-text"
          @click="focusInput"
        >
          <!-- Line Loop -->
          <div 
            v-for="(line, index) in output" 
            :key="index" 
            class="terminal-line leading-relaxed tracking-wide"
          >
            <!-- Banner line -->
            <div v-if="line.type === 'banner'" class="mb-3 p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/20 text-xs">
              <div class="flex items-center gap-2 text-cyan-300 font-bold mb-1">
                <span class="text-cyan-400">⚡</span>
                <span class="text-[13px] tracking-wide">{{ line.title }}</span>
              </div>
              <p class="text-slate-400 text-xs">{{ line.subtitle }}</p>
              <div class="mt-2.5 pt-2 border-t border-white/5 text-[11px] text-slate-400 flex flex-wrap items-center gap-2">
                <span class="text-slate-500">Quick Commands:</span>
                <button 
                  v-for="cmd in ['help', 'whoareyou', 'experience', 'skills', 'projects', 'stats']" 
                  :key="cmd"
                  @click.stop="runQuickCmd(cmd)" 
                  class="text-cyan-300 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 cursor-pointer transition-colors font-mono"
                >
                  {{ cmd }}
                </button>
              </div>
            </div>

            <!-- Input prompt line -->
            <div v-else-if="line.type === 'input'" class="flex items-center gap-2 py-1 text-slate-100">
              <span class="text-cyan-400 font-bold">rohanOS</span>
              <span class="text-slate-600">:</span>
              <span class="text-indigo-400 font-semibold">~</span>
              <span class="text-emerald-400 font-bold">$</span>
              <span class="text-white font-semibold tracking-wide ml-1 font-mono">{{ line.text }}</span>
            </div>

            <!-- Section Header -->
            <div v-else-if="line.type === 'header'" class="pt-2 pb-1">
              <span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold text-xs tracking-wider uppercase">
                <span>{{ line.icon }}</span>
                <span>{{ line.text }}</span>
              </span>
            </div>

            <!-- Command Help row -->
            <div v-else-if="line.type === 'help'" class="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-3 py-0.5 items-baseline">
              <button 
                @click.stop="runQuickCmd(line.cmd)"
                class="text-cyan-300 hover:text-white font-semibold text-xs px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-500/20 border border-cyan-500/30 text-center sm:text-left font-mono w-fit cursor-pointer transition-colors"
              >
                {{ line.cmd }}
              </button>
              <span class="text-slate-300 text-xs sm:text-[13px]" v-html="highlight(line.desc)"></span>
            </div>

            <!-- Key-Value Row -->
            <div v-else-if="line.type === 'kv'" class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-0.5">
              <span class="text-amber-300/90 font-semibold text-xs sm:text-[13px] sm:min-w-[120px]">{{ line.label }}:</span>
              <span class="text-slate-200 text-xs sm:text-[13px]" :class="{ 'text-cyan-300 font-semibold': line.highlight }" v-html="highlight(line.value)"></span>
            </div>

            <!-- Tech Pills Row -->
            <div v-else-if="line.type === 'pills'" class="py-1">
              <div class="text-xs font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{{ line.category }}:</span>
              </div>
              <div class="flex flex-wrap gap-1.5 pl-3">
                <span 
                  v-for="(pill, pIdx) in line.items" 
                  :key="pIdx"
                  class="px-2 py-0.5 rounded-md bg-slate-900/90 border border-white/10 text-cyan-200 text-[11px] font-mono shadow-xs hover:border-cyan-500/40 transition-colors"
                >
                  {{ pill }}
                </span>
              </div>
            </div>

            <!-- Highlight Card -->
            <div v-else-if="line.type === 'highlight'" class="p-2.5 rounded-xl bg-slate-900/70 border-l-2 border-cyan-400 border-y border-r border-white/5 space-y-1 my-1">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-white font-bold text-xs sm:text-[13px]">{{ line.title }}</span>
                <span v-if="line.badge" class="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">{{ line.badge }}</span>
              </div>
              <p v-if="line.sub" class="text-slate-400 text-xs font-mono" v-html="highlight(line.sub)"></p>
            </div>

            <!-- Bullet item -->
            <div v-else-if="line.type === 'bullet'" class="flex items-start gap-2 pl-3 py-0.5 text-xs sm:text-[13px] text-slate-300">
              <span class="text-cyan-400 mt-0.5">•</span>
              <span v-html="highlight(line.text)"></span>
            </div>

            <!-- Project Card -->
            <div v-else-if="line.type === 'project-card'" class="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 space-y-2 my-1">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-white font-bold text-xs sm:text-[13px]">{{ line.title }}</span>
                <span class="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-semibold">{{ line.badge }}</span>
              </div>
              <p class="text-slate-300 text-xs leading-relaxed" v-html="highlight(line.summary)"></p>
              <div class="text-xs text-slate-400 font-mono">
                <span class="text-amber-300">Stack:</span> <span v-html="highlight(line.tech)"></span>
              </div>
              <div v-if="line.link" class="pt-1">
                <a :href="line.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 underline font-mono">
                  <span>View Repository</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <!-- Project Preview (In Dev) -->
            <div v-else-if="line.type === 'project-preview'" class="p-3 rounded-xl bg-slate-900/50 border border-white/10 space-y-1.5 my-1">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-slate-200 font-semibold text-xs sm:text-[13px]">{{ line.title }}</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-semibold">{{ line.badge }}</span>
              </div>
              <p class="text-slate-400 text-xs" v-html="highlight(line.desc)"></p>
            </div>

            <!-- Stat Grid -->
            <div v-else-if="line.type === 'stat-grid'" class="grid grid-cols-2 sm:grid-cols-4 gap-2 my-1.5">
              <div 
                v-for="(st, sIdx) in line.items" 
                :key="sIdx"
                class="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-center space-y-1"
              >
                <div class="text-[10px] text-slate-400 uppercase font-mono tracking-wider">{{ st.label }}</div>
                <div class="text-sm sm:text-base font-bold text-emerald-400 font-mono">{{ st.value }}</div>
              </div>
            </div>

            <!-- Contact Item -->
            <div v-else-if="line.type === 'contact-item'" class="flex items-center gap-2.5 py-1">
              <span class="text-sm">{{ line.icon }}</span>
              <span class="text-amber-300 font-medium text-xs sm:text-[13px] min-w-[70px]">{{ line.label }}:</span>
              <a 
                :href="line.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-cyan-400 hover:text-cyan-300 hover:underline text-xs sm:text-[13px] font-mono transition-colors"
              >
                {{ line.value }} ↗
              </a>
            </div>

            <!-- Error Banner -->
            <div v-else-if="line.type === 'error-banner'" class="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 space-y-1 my-1">
              <div class="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <span>⛔</span>
                <span>{{ line.title }}</span>
              </div>
              <p class="text-rose-200 text-xs" v-html="highlight(line.text)"></p>
            </div>

            <!-- Success line -->
            <div v-else-if="line.type === 'success'" class="text-cyan-400 font-medium text-xs sm:text-[13px] flex items-center gap-2 py-0.5">
              <span>✔</span>
              <span v-html="highlight(line.text)"></span>
            </div>

            <!-- Error line -->
            <div v-else-if="line.type === 'error'" class="text-rose-400 text-xs sm:text-[13px] flex items-center gap-2 py-0.5">
              <span>✖</span>
              <span>{{ line.text }}</span>
            </div>

            <!-- Plain System/Text line -->
            <div v-else class="text-slate-300 text-xs sm:text-[13px]" v-html="highlight(line.text)"></div>
            <span v-if="isStreaming && index === output.length - 1" class="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse align-middle shadow-xs shadow-cyan-400/50"></span>
          </div>
          
          <!-- Active Input Line -->
          <div class="flex items-center pt-2">
            <span class="text-cyan-400 font-bold mr-1">rohanOS</span>
            <span class="text-slate-600">:</span>
            <span class="text-indigo-400 font-semibold mr-1">~</span>
            <span class="text-emerald-400 font-bold mr-2.5">$</span>
            <input 
              ref="terminalInput"
              v-model="inputCommand"
              @keydown="handleInputKeydown"
              type="text" 
              class="flex-1 bg-transparent border-none outline-none text-slate-100 caret-cyan-400 font-mono tracking-wide text-xs sm:text-[14px]"
              spellcheck="false"
              autocomplete="off"
              placeholder="Type a command (try 'help')..."
            />
            <span v-if="isStreaming" class="text-xs font-mono text-cyan-400 animate-pulse px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              executing...
            </span>
          </div>

          <!-- Bottom scroll anchor ensuring frame-perfect alignment -->
          <div ref="bottomAnchor" class="h-1.5 w-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Ensure instant scroll tracking during streaming */
.terminal-scroll-area {
  scroll-behavior: auto !important;
}

/* Smooth Modal Backdrop & Scale In/Out Animation */
.terminal-modal-enter-active,
.terminal-modal-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.terminal-modal-enter-active .terminal-window,
.terminal-modal-leave-active .terminal-window {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.terminal-modal-enter-from {
  opacity: 0;
}

.terminal-modal-enter-from .terminal-window {
  opacity: 0;
  transform: translateY(24px) scale(0.95);
}

.terminal-modal-leave-to {
  opacity: 0;
}

.terminal-modal-leave-to .terminal-window {
  opacity: 0;
  transform: translateY(24px) scale(0.95);
}

/* Stable Phosphor Line Entrance (zero vertical jitter, smooth brightness fade) */
@keyframes terminalLineStreamIn {
  0% {
    opacity: 0;
    filter: brightness(1.25);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

.terminal-line {
  animation: terminalLineStreamIn 0.22s ease-out both;
}

/* Custom Scrollbar for Terminal */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.25);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.5);
}
</style>