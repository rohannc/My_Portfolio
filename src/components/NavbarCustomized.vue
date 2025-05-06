<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";

// Navigation items with icons
const navItems = ref([
    { name: "Skills", url: "#skills", active: false, icon: "light-bulb" },
    { name: "Education", url: "#education", active: false, icon: "academic-cap" },
    { name: "Achievements", url: "#achievements", active: false, icon: "trophy" },
    { name: "Projects", url: "#projects", active: false, icon: "briefcase" },
    { name: "Contact Me", url: "#contact", active: false, icon: "envelope" },
]);

// Search state
const searchQuery = ref("");
const isSearchFocused = ref(false);

// Dark mode state
const isDarkMode = ref(false);

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Watch isDarkMode to update HTML class
watch(isDarkMode, (newValue) => {
    if (newValue) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Computed property to filter nav items
const filteredNavItems = computed(() => {
    if (!searchQuery.value.trim()) return [];
    return navItems.value.filter(item =>
        item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

// Handle navbar button click
const handleNavClick = (clickedItem) => {
    navItems.value.forEach((item) => {
        item.active = item === clickedItem;
    });
    isMobileMenuOpen.value = false; // Close mobile menu on item click
};

// Toggle mobile menu
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Handle Ctrl + K shortcut
const handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        const input = document.getElementById('search-navbar-desktop');
        if (input) {
            input.focus();
            isSearchFocused.value = true;
        }
    }
};

// Initialize dark mode and event listeners
onMounted(() => {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
    window.addEventListener('keydown', handleKeydown);
});

// Cleanup event listeners
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
    <nav id="navbar" class="fixed top-0 w-full z-50 bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <!-- Logo Section -->
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src="../assets/ProfileImageCropped.jpg" alt="Bordered avatar">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white md:block hidden">
                    Rohan Chakraborty
                </span>
            </a>
            <!-- Right Side: Hamburger (Mobile) and Desktop Navigation/Search -->
            <div class="flex items-center space-x-4">
                <!-- Desktop Navigation and Search -->
                <div class="hidden md:flex items-center space-x-8" id="navbar-search">
                    <!-- Desktop Navigation Links -->
                    <ul class="flex space-x-8 font-medium">
                        <li v-for="(item, index) in navItems" :key="index">
                            <a :href="item.url" @click="handleNavClick(item)" class="inline-flex items-center space-x-2"
                                :class="[
                                    item.active
                                        ? 'text-blue-700 dark:text-blue-500'
                                        : 'text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500'
                                ]">
                                <svg v-if="item.icon"
                                    :class="['w-5 h-5', item.active ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white']"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path v-if="item.icon === 'light-bulb'" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    <path v-if="item.icon === 'academic-cap'" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    <path v-if="item.icon === 'trophy'" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    <path v-if="item.icon === 'briefcase'" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    <path v-if="item.icon === 'envelope'" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{{ item.name }}</span>
                            </a>
                        </li>
                    </ul>
                    <!-- Search Button (Desktop) -->
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar-desktop" v-model="searchQuery"
                            @focus="isSearchFocused = true" @blur="isSearchFocused = false" class="block w-full p-2 ps-10 pr-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type to Search..." />
                        <!-- Right-Aligned Shortcut Indicator -->
                        <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                            <img src="https://img.icons8.com/?size=100&id=zP1mYl1gEfJz&format=png&color=000000"
                                alt="CTRL" width="20px" height="20px">
                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400 ml-1">+ K</span>
                        </div>
                        <!-- Search Results Dropdown -->
                        <ul v-if="isSearchFocused && filteredNavItems.length"
                            class="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                            <li v-for="(item, index) in filteredNavItems" :key="index"
                                class="px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                                <a :href="item.url" @click="searchQuery = ''; isSearchFocused = false">{{ item.name
                                    }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Hamburger Button (Mobile) -->
                <button @click="toggleMobileMenu"
                    class="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <span class="sr-only">Toggle menu</span>
                </button>
            </div>
        </div>
        <!-- Mobile Menu (Slide-in from Right) -->
        <div v-if="isMobileMenuOpen"
            class="md:hidden fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300">
            <div class="flex flex-col p-4">
                <!-- Close Button -->
                <button @click="toggleMobileMenu"
                    class="self-end p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <!-- Mobile Navigation Links -->
                <ul class="flex flex-col mt-4 space-y-4 font-medium">
                    <li v-for="(item, index) in navItems" :key="index">
                        <a :href="item.url" @click="handleNavClick(item)"
                            class="inline-flex items-center space-x-2 py-2 px-3 rounded-sm" :class="[
                                item.active
                                    ? 'text-white bg-blue-700'
                                    : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                            ]">
                            <svg v-if="item.icon"
                                :class="['w-5 h-5', item.active ? 'text-white' : 'text-gray-900 dark:text-white']"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path v-if="item.icon === 'light-bulb'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                <path v-if="item.icon === 'academic-cap'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                <path v-if="item.icon === 'trophy'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                <path v-if="item.icon === 'briefcase'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745	3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                <path v-if="item.icon === 'envelope'" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Overlay for Mobile Menu -->
        <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false"
            class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"></div>
    </nav>
</template>

<style scoped>
/* Ensure dropdown is above other elements */
.z-50 {
    z-index: 50;
}

/* Smooth transition for mobile menu */
.transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>