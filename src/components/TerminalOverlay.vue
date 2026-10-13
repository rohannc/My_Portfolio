<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { personalInfo, featuredProject, codolioStats } from '../data/portfolioData.js';

const isOpen = ref(false);
const inputCommand = ref('');
const output = ref([
  { type: 'system', text: 'RohanOS v1.0.0 (tty1)' },
  { type: 'system', text: 'Type "help" to see available commands.' }
]);
const terminalInput = ref(null);
const terminalBody = ref(null);
let keyCombo = '';
let comboTimeout = null;

// Handle keyboard shortcut to open terminal (Ctrl+` or typing 'sudo')
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
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
  }
};

const executeCommand = () => {
  const cmd = inputCommand.value.trim();
  if (!cmd) return;
  
  output.value.push({ type: 'input', text: `$ ${cmd}` });
  
  const args = cmd.toLowerCase().split(/\s+/);
  const command = args[0];
  
  switch (command) {
    case 'help':
      output.value.push({ type: 'system', text: 'Available commands:' });
      output.value.push({ type: 'system', text: '  whoareyou  - Display portfolio owner info & background' });
      output.value.push({ type: 'system', text: '  skills     - List technical competencies & agentic tools' });
      output.value.push({ type: 'system', text: '  projects   - Show featured engineering systems' });
      output.value.push({ type: 'system', text: '  stats      - Display live competitive DSA & platform metrics' });
      output.value.push({ type: 'system', text: '  resume     - Open official resume in a new tab' });
      output.value.push({ type: 'system', text: '  contact    - Show contact channels & direct email' });
      output.value.push({ type: 'system', text: '  clear      - Clear terminal output' });
      output.value.push({ type: 'system', text: '  sudo       - Superuser privileges test' });
      output.value.push({ type: 'system', text: '  exit       - Close terminal (or press ESC)' });
      break;
    case 'whoareyou':
      output.value.push({ type: 'success', text: personalInfo.name });
      output.value.push({ type: 'system', text: `Role: ${personalInfo.role} (${personalInfo.location})` });
      output.value.push({ type: 'system', text: 'Education: Master of Computer Applications, Jadavpur University' });
      output.value.push({ type: 'system', text: 'Focus: Autonomous AI Agents, LangGraph, Model Context Protocol (MCP), Distributed Systems, DevSecOps' });
      break;
    case 'skills':
      output.value.push({ type: 'success', text: 'Core Engineering Stack:' });
      output.value.push({ type: 'system', text: '⚡ Agentic AI: LangGraph, Model Context Protocol (MCP), Claude Code, Claude Skills' });
      output.value.push({ type: 'system', text: '⚡ Languages: Python (Asyncio), Java, SQL, C++, C, JavaScript' });
      output.value.push({ type: 'system', text: '⚡ Frameworks: Spring Boot, Vert.x, Vue.js 3, Flask, Node.js' });
      output.value.push({ type: 'system', text: '⚡ Cloud & Ops: Kubernetes, Jenkins, Docker, Kafka, Hazelcast' });
      output.value.push({ type: 'system', text: '⚡ DevSecOps: SonarQube, Checkmarx, Nexus IQ, HITL CI/CD Pipelines' });
      break;
    case 'projects':
      output.value.push({ type: 'success', text: 'Featured Engineering Project:' });
      output.value.push({ type: 'system', text: `🔍 ${featuredProject.title} (${featuredProject.accuracy} Validation Accuracy)` });
      output.value.push({ type: 'system', text: `   Summary: ${featuredProject.summary}` });
      output.value.push({ type: 'system', text: `   Tech: ${featuredProject.techStack.map(t => t.name).join(', ')}` });
      output.value.push({ type: 'system', text: `   Repo: ${featuredProject.githubUrl}` });
      break;
    case 'stats':
      output.value.push({ type: 'success', text: 'Live Competitive Metrics:' });
      output.value.push({ type: 'system', text: `🔥 Problems Solved: ${codolioStats.totalSolved} (LeetCode: 880, GFG: 671, CodeChef: 74, Codeforces: 36)` });
      output.value.push({ type: 'system', text: '🏆 State Entrance Rank: WBJECA 2024 - Rank 17' });
      output.value.push({ type: 'system', text: `⚡ Active Days: ${codolioStats.activeDays || '700+'} | Max Streak: ${codolioStats.maxStreak || '287'} Days` });
      output.value.push({ type: 'system', text: `🏅 Global Contests: ${codolioStats.contestsAttended || '28'} attended | 9+ Championships & Hackathons` });
      break;
    case 'resume':
      output.value.push({ type: 'success', text: 'Opening official resume in new tab...' });
      window.open(personalInfo.resumeUrl, '_blank');
      break;
    case 'contact':
      output.value.push({ type: 'success', text: 'Direct Contacts:' });
      output.value.push({ type: 'system', text: `✉️  Email: ${personalInfo.email}` });
      output.value.push({ type: 'system', text: '💼 LinkedIn: linkedin.com/in/rohanchakraborty0108' });
      output.value.push({ type: 'system', text: '🐙 GitHub: github.com/rohannc' });
      output.value.push({ type: 'system', text: `💻 Codolio: ${personalInfo.codolioUrl}` });
      break;
    case 'clear':
      output.value = [{ type: 'system', text: 'RohanOS v1.0.0 (tty1)' }];
      break;
    case 'sudo':
      if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
        output.value.push({ type: 'error', text: 'Permission denied: Nice try though!' });
      } else {
        output.value.push({ type: 'error', text: 'You are not in the sudoers file. Incident reported to Visa Security.' });
      }
      break;
    case 'exit':
      toggleTerminal();
      break;
    default:
      output.value.push({ type: 'error', text: `Command not found: "${command}". Type "help" for valid commands.` });
  }
  
  inputCommand.value = '';
  nextTick(() => {
    scrollToBottom();
  });
};

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown);
});
</script>

<template>
  <Transition name="terminal-modal">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/70 backdrop-blur-md" 
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Developer Terminal"
      @click.self="toggleTerminal"
    >
      <div class="terminal-window w-full max-w-3xl bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-[15px] ring-1 ring-white/10">
        <!-- Title Bar -->
        <div class="bg-slate-900/70 px-4 py-3 flex items-center justify-between border-b border-white/5 select-none gap-4">
          <div class="flex gap-2.5 items-center flex-shrink-0">
            <button 
              @click="toggleTerminal" 
              title="Close Terminal (Esc)" 
              aria-label="Close terminal"
              class="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-400 border border-rose-600/50 transition-colors cursor-pointer"
            ></button>
            <div class="w-3.5 h-3.5 rounded-full bg-amber-500 hover:bg-amber-400 border border-amber-600/50 transition-colors"></div>
            <div class="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 border border-emerald-600/50 transition-colors"></div>
          </div>
          <div class="text-slate-400 text-xs font-semibold tracking-wider flex items-center gap-2 truncate">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0"></span>
            guest@rohanOS: ~
          </div>
          <div class="flex-shrink-0 text-right whitespace-nowrap">
            <span class="text-[11px] text-slate-500 font-mono tracking-wide inline-block whitespace-nowrap">ESC to exit</span>
          </div>
        </div>
        
        <!-- Terminal Body -->
        <div 
          ref="terminalBody"
          class="h-[60vh] max-h-[420px] sm:h-[400px] overflow-y-auto overscroll-contain p-4 sm:p-5 bg-transparent text-slate-300 custom-scrollbar text-xs sm:text-[15px]"
          @click="terminalInput?.focus()"
        >
          <div v-for="(line, index) in output" :key="index" class="mb-1.5 leading-relaxed tracking-wide">
            <span v-if="line.type === 'input'" class="text-emerald-400 font-semibold">{{ line.text }}</span>
            <span v-else-if="line.type === 'error'" class="text-rose-400">{{ line.text }}</span>
            <span v-else-if="line.type === 'success'" class="text-cyan-400">{{ line.text }}</span>
            <span v-else class="text-slate-300">{{ line.text }}</span>
          </div>
          
          <div class="flex items-center mt-3">
            <span class="text-emerald-400 mr-2.5 font-semibold">$</span>
            <input 
              ref="terminalInput"
              v-model="inputCommand"
              @keyup.enter="executeCommand"
              type="text" 
              class="flex-1 bg-transparent border-none outline-none text-slate-100 caret-cyan-400 tracking-wide"
              spellcheck="false"
              autocomplete="off"
              autofocus
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
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
  transform: translateY(16px) scale(0.96);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 1);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(71, 85, 105, 1);
  border-radius: 3px;
}
</style>
