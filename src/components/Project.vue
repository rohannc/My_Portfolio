<template>
    <ProjectNavbar/>
    <div class="md:flex mx-20 mt-10">
        <ul
            class="flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 flex flex-col items-center sidebar">
            <li v-for="tab in tabs" :key="tab.id" class="w-full">
                <button type="button"
                    class="inline-flex items-center justify-start px-5 py-2.5 rounded-lg w-full text-sm font-medium gap-2 cursor-pointer"
                    :class="{
                        'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800': activeTab === tab.id,
                        'text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400': activeTab !== tab.id
                    }" @click="setActiveTab(tab.id)">
                    <img :src="tab.icon" alt="Icon" class="my-1 w-6 h-6 object-contain" />
                    <span class="my-1">{{ tab.name }}</span>
                </button>
            </li>
        </ul>
        <div class="w-full">
            <div id="introduction"
                class="h-full p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
                :class="{ 'hidden': activeTab !== 'Introduction' }">

                <h1
                    class="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">DeepFake
                    </span> Image Detection
                </h1>
                <div class="mx-20 py-6">
                    <ul class="flex md:flex-row flex-col md:gap-8 gap-4 justify-center">
                        <li v-for="item in items" :key="item.name" class="flex items-center gap-4">
                            <img :src="item.image" alt="Profile picture" class="w-10 h-10 rounded-full" />
                            <div class="font-medium text-sm dark:text-white">
                                {{ item.name }}
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div id="about"
                class="h-full p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
                :class="{ 'hidden': activeTab !== 'About' }">

                <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Deliver great service experiences
                    fast - without the complexity of traditional ITSM solutions.Accelerate critical development work and
                    deploy.</p>
                <p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open,
                    collaborative platform. Link issues across Jira and ingest data from other software development
                    tools, so your IT support and operations teams have richer contextual information to rapidly respond
                    to requests, incidents, and changes.</p>

            </div>
            <div id="techstack"
                class="h-full p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
                :class="{ 'hidden': activeTab !== 'TechStack' }">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">TechStack Tab</h3>
                <p class="mb-2 text-purple-600 dark:text-purple-400 text-base font-bold">
                    {{ tabs[2].content.main }}
                </p>
                <p class="text-gray-600 dark:text-gray-200 text-sm italic">
                    {{ tabs[2].content.secondary }}
                </p>
            </div>
            <div id="link"
                class="h-full p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg flex flex-col min-h-full"
                :class="{ 'hidden': activeTab !== 'Link' }">
                <div class="buttonDownload mx-auto my-6 flex justify-center mt-auto cursor-pointer">
                    <button class="cursor-pointer">
                        Click Me to Visit the Github Repository!
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectNavbar from './ProjectNavbar.vue';

const tabs = [
    {
        id: 'Introduction',
        name: 'Introduction',
        icon: 'https://img.icons8.com/?size=100&id=104233&format=png&color=000000',
        content: {
            main: 'This is the Profile tab\'s content. Here you can view and edit your personal information, such as your name, email, and profile picture.',
            secondary: ''
        }
    },
    {
        id: 'About',
        name: 'About',
        icon: 'https://img.icons8.com/?size=100&id=102326&format=png&color=000000',
        content: {
            main: 'Welcome to the Dashboard tab. This section provides an overview of your activity, recent updates, and key metrics.',
            secondary: 'Check your progress and stay informed about your account status.'
        }
    },
    {
        id: 'TechStack',
        name: 'TechStack',
        icon: 'https://img.icons8.com/?size=100&id=19020&format=png&color=000000',
        content: {
            main: 'The Settings tab allows you to customize your experience. Adjust your notification preferences, privacy settings, and more.',
            secondary: 'Make changes to tailor the platform to your needs.'
        }
    },
    {
        id: 'Link',
        name: 'Link',
        icon: 'https://img.icons8.com/?size=100&id=43229&format=png&color=000000',
        content: {
            main: 'Get in touch with us through the Contact tab. Submit your questions, feedback, or support requests here.',
            secondary: 'Our team is here to assist you with any inquiries.'
        }
    }
];

const items = ref([
    {
        name: 'Alice Smith',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
        name: 'Bob Johnson',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
        name: 'Carol White',
        image: 'https://images.unsplash.com/photo-1487412729047-8bef73b3f8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    }
]);

const activeTab = ref('Introduction');

const setActiveTab = (tabId) => {
    activeTab.value = tabId;
};
</script>

<style scoped>
.sidebar {
    width: 160px;
    /* Fixed width to match the largest button ("Introduction") */
}

.buttonDownload {
    width: 40%;
    --green: #1bfd9c;
    font-size: 15px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--green);
    background: linear-gradient(to right,
            rgba(27, 253, 156, 0.1) 1%,
            transparent 40%,
            transparent 60%,
            rgba(27, 253, 156, 0.1) 100%);
    color: var(--green);
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
        0 0 9px 3px rgba(27, 253, 156, 0.1);
}

.buttonDownload:hover {
    color: #82ffc9;
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
        0 0 9px 3px rgba(27, 253, 156, 0.2);
}

.buttonDownload:before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(to right,
            transparent 1%,
            rgba(27, 253, 156, 0.1) 40%,
            rgba(27, 253, 156, 0.1) 60%,
            transparent 100%);
}

.buttonDownload:hover:before {
    transform: translateX(30em);
}
</style>