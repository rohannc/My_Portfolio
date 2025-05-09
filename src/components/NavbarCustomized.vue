<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Navigation items with icons
const navItems = ref([
    { name: "Skills", url: "#skills", active: false, icon: "light-bulb" },
    { name: "Education", url: "#education", active: false, icon: "academic-cap" },
    { name: "Achievements", url: "#achievements", active: false, icon: "trophy" },
    { name: "Projects", url: "#projects", active: false, icon: "briefcase" },
    { name: "Contact Me", url: "#contact", active: false, icon: "envelope" },
]);

// Mobile menu state
const isMenuOpen = ref(false);

// Window width state for hiding profile name and adjusting margins
const windowWidth = ref(window.innerWidth);

// Update window width on resize
const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

// Handle navbar button click
const handleNavClick = (clickedItem) => {
    navItems.value.forEach((item) => {
        item.active = item === clickedItem;
    });
    isMenuOpen.value = false; // Close mobile menu
};

// Open link in new tab
const openLink = () => {
    window.open('https://codolio.com/profile/Rohann', '_blank');
};

// Initialize dark mode, Intersection Observer, and window width listener
onMounted(() => {
    document.documentElement.classList.add('dark');

    // Set up Intersection Observer for section visibility
    const observer = new IntersectionObserver(
        (entries) => {
            let isAnySectionVisible = false;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isAnySectionVisible = true;
                    const sectionId = `#${entry.target.id}`;
                    navItems.value.forEach((item) => {
                        item.active = item.url === sectionId;
                    });
                }
            });
            // If no section is visible (e.g., at top), unhighlight all
            if (!isAnySectionVisible) {
                navItems.value.forEach((item) => {
                    item.active = false;
                });
            }
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );

    // Observe each section
    navItems.value.forEach((item) => {
        const section = document.querySelector(item.url);
        if (section) {
            observer.observe(section);
        }
    });

    // Add window resize listener
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup observer and listener on unmount
    onUnmounted(() => {
        observer.disconnect();
        window.removeEventListener('resize', updateWindowWidth);
    });
});
</script>

<template>
    <nav id="navbar" class="fixed top-0 left-0 w-full z-50 bg-gray-900 border-gray-200">
        <div class="w-[96%] ml-[2%] mr-[2%] flex items-center justify-between p-4">
            <!-- Logo Section -->
            <a href="#" class="flex items-center space-x-3">
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-500" src="../assets/ProfileImageCropped.jpg"
                    alt="Bordered avatar">
                <span v-if="windowWidth >= 900 || windowWidth < 768"
                    class="self-center text-[clamp(1.125rem,2.25vw,1.5rem)] font-semibold whitespace-nowrap text-white hidden md:block">
                    Rohan Chakraborty
                </span>
            </a>
            <!-- Navigation and Toggle -->
            <div class="flex items-center space-x-8">
                <!-- Desktop Navigation -->
                <ul class="hidden md:flex space-x-8 font-medium text-[clamp(0.875rem,1.5vw,1rem)]">
                    <li v-for="(item, index) in navItems" :key="index">
                        <a :href="item.url" @click="handleNavClick(item)"
                            class="inline-flex items-center space-x-2 whitespace-nowrap" :class="[
                                item.active
                                    ? 'text-blue-500'
                                    : 'text-white hover:text-blue-500'
                            ]">
                            <svg v-if="item.icon"
                                :class="['w-[clamp(1.125rem,2vw,1.25rem)] h-[clamp(1.125rem,2vw,1.25rem)]', item.active ? 'text-blue-500' : 'text-white']"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path v-if="item.icon === 'light-bulb'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                <path v-if="item.icon === 'academic-cap'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                <path v-if="item.icon === 'trophy'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                <path v-if="item.icon === 'briefcase'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                <path v-if="item.icon === 'envelope'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
                <!-- Link Button with Tooltip -->
                <button @click="openLink" class="md:ml-4 mb-1.5 mr-8 relative" data-tooltip="Coding Profile">
                    <img src="https://img.icons8.com/?size=100&id=xXaeGQn5sAFy&format=png&color=000000" alt="Link icon"
                        class="w-6 h-6">
                </button>
                <!-- Hamburger Menu for Mobile -->
                <div class="md:hidden fixed top-4 right-4 z-60">
                    <input id="checkbox2" type="checkbox" class="hidden" v-model="isMenuOpen">
                    <label class="toggle2" for="checkbox2">
                        <div id="bar4" class="bars"></div>
                        <div id="bar5" class="bars"></div>
                        <div id="bar6" class="bars"></div>
                    </label>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="fixed top-0 left-0 w-full bg-gray-900/90 z-40 transform transition-transform duration-300 ease-in-out"
            :class="{ 'translate-y-0': isMenuOpen, '-translate-y-full': !isMenuOpen }">
            <ul class="flex flex-col items-center py-6 space-y-4 font-medium h-fit max-h-[80vh] mt-16">
                <li v-for="(item, index) in navItems" :key="index">
                    <a :href="item.url" @click="handleNavClick(item)" class="inline-flex items-center space-x-2" :class="[
                        item.active
                            ? 'text-blue-500'
                            : 'text-white hover:text-blue-500'
                    ]">
                        <svg v-if="item.icon" :class="['w-5 h-5', item.active ? 'text-blue-500' : 'text-white']"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path v-if="item.icon === 'light-bulb'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            <path v-if="item.icon === 'academic-cap'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            <path v-if="item.icon === 'trophy'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            <path v-if="item.icon === 'briefcase'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            <path v-if="item.icon === 'envelope'" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="md:hidden">{{ item.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
/* Ensure navbar is above other elements */
.z-50 {
    z-index: 50;
}

/* Navbar Styles */
#navbar {
    background-color: #1f2937;
    border-color: #374151;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Logo Section */
#navbar .flex.items-center.space-x-3 img {
    ring-color: #6b7280;
}

#navbar .flex.items-center.space-x-3 span {
    color: #ffffff;
}

/* Navigation Links */
#navbar ul li a {
    color: #ffffff;
}

#navbar ul li a:hover {
    color: #3b82f6;
}

#navbar ul li a.text-blue-500 {
    color: #3b82f6;
}

#navbar ul li a svg {
    stroke: #ffffff;
}

#navbar ul li a.text-blue-500 svg {
    stroke: #3b82f6;
}

/* Link Button with Tooltip */
#navbar button[data-tooltip] {
    cursor: pointer;
    position: relative;
}

#navbar button[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #374151;
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 100;
}

#navbar button[data-tooltip]:hover::after {
    opacity: 1;
    visibility: visible;
}

/* Mobile Menu */
#navbar .fixed.top-0.left-0.w-full {
    background-color: rgba(31, 41, 55, 0.9);
}

/* Hamburger Menu */
#checkbox2 {
    display: none;
}

.toggle2 {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition-duration: .5s;
}

.bars {
    width: 100%;
    height: 3px;
    background-color: #5cb0ff;
    border-radius: 3px;
}

#bar5 {
    transition-duration: .8s;
}

#bar4,
#bar6 {
    width: 80%;
}

#checkbox2:checked+.toggle2 .bars {
    position: absolute;
    transition-duration: .5s;
}

#checkbox2:checked+.toggle2 #bar5 {
    transform: scaleX(0);
    transition-duration: .5s;
}

#checkbox2:checked+.toggle2 #bar4 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
}

#checkbox2:checked+.toggle2 #bar6 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
}

#checkbox2:checked+.toggle2 {
    transition-duration: .5s;
    transform: rotate(180deg);
}
</style>