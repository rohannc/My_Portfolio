<script setup>
import { computed, ref } from 'vue';
import heatmapData from '../data/heatmapStats.json';

const tooltipContent = ref('');
const showTooltip = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);

const handleMouseOver = (event, day) => {
  const rect = event.target.getBoundingClientRect();
  tooltipX.value = rect.left + window.scrollX + rect.width / 2;
  tooltipY.value = rect.top + window.scrollY - 10;
  
  const formattedDate = new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const total = day.total;
  let text = '';
  if (total === 0) {
    text = `No activity on ${formattedDate}`;
  } else {
    text = `${total} total activity (${day.github} GitHub, ${day.codolio} Codolio) on ${formattedDate}`;
  }
  
  tooltipContent.value = text;
  showTooltip.value = true;
};

const handleMouseLeave = () => {
  showTooltip.value = false;
};

const getLevel = (total) => {
  if (total === 0) return 0;
  if (total <= 2) return 1;
  if (total <= 5) return 2;
  if (total <= 8) return 3;
  return 4;
};

const getColor = (level) => {
  switch (level) {
    case 1: return '#164e63'; // cyan-900
    case 2: return '#0e7490'; // cyan-700
    case 3: return '#06b6d4'; // cyan-500
    case 4: return '#22d3ee'; // cyan-400
    default: return 'rgba(255, 255, 255, 0.05)';
  }
};

const weeks = computed(() => {
  const result = [];
  let currentWeek = [];
  
  heatmapData.days.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === heatmapData.days.length - 1) {
      result.push(currentWeek);
      currentWeek = [];
    }
  });
  
  return result;
});

const monthLabels = computed(() => {
  const labels = [];
  let lastMonth = -1;
  
  weeks.value.forEach((week, index) => {
    if (week.length === 0) return;
    
    // Parse date securely
    const dateObj = new Date(week[0].date);
    const month = dateObj.getMonth();
    
    if (month !== lastMonth) {
      labels.push({
        text: dateObj.toLocaleString('en-US', { month: 'short' }),
        x: index
      });
      lastMonth = month;
    }
  });
  
  // Prevent labels from bunching up too closely (if a month change happens in consecutive weeks)
  const filteredLabels = [];
  labels.forEach(label => {
    if (filteredLabels.length === 0 || (label.x - filteredLabels[filteredLabels.length - 1].x) >= 2) {
      filteredLabels.push(label);
    }
  });
  
  return filteredLabels;
});
</script>

<template>
  <div class="relative w-full overflow-x-auto custom-scrollbar pb-4">
    <div class="min-w-fit flex justify-center">
      <svg width="980" height="164" class="heatmap-svg mx-auto">
        <g transform="translate(16, 16)">
          
          <!-- Month Labels -->
          <text 
            v-for="label in monthLabels" 
            :key="label.text + label.x"
            :x="label.x * 18" 
            y="0" 
            class="text-xs fill-slate-400 font-medium"
          >
            {{ label.text }}
          </text>

          <!-- Grid -->
          <g transform="translate(0, 16)">
            <g v-for="(week, weekIndex) in weeks" :key="weekIndex" :transform="`translate(${weekIndex * 18}, 0)`">
              <rect 
                v-for="(day, dayIndex) in week" 
                :key="day.date"
                width="14" 
                height="14" 
                :y="dayIndex * 18" 
                rx="3" 
                ry="3" 
                :fill="getColor(getLevel(day.total))"
                class="transition-all duration-200 hover:stroke-white hover:stroke-1 cursor-pointer"
                @mouseover="(e) => handleMouseOver(e, day)"
                @mouseleave="handleMouseLeave"
              />
            </g>
          </g>
          
        </g>
      </svg>
    </div>

    <!-- Tooltip -->
    <Teleport to="body">
      <div 
        v-if="showTooltip" 
        class="fixed z-50 px-3 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full border border-white/10"
        :style="{ top: `${tooltipY}px`, left: `${tooltipX}px` }"
      >
        {{ tooltipContent }}
        <div class="absolute w-2 h-2 bg-slate-900 border-b border-r border-white/10 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.heatmap-svg {
  min-width: 980px;
}
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.5);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.8);
}
</style>
