<script setup>
import { ref } from 'vue';
import ProjectNavbar from './ProjectNavbar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const copied = ref([false, false, false, false]);
const copyCommand = (command, index) => {
    navigator.clipboard.writeText(command).then(() => {
        copied.value[index] = true;
        setTimeout(() => {
            copied.value[index] = false;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
};

const modules = [Autoplay, Pagination, Navigation, EffectFade];

const tabs = [
    {
        id: 'Introduction',
        name: 'Introduction',
        icon: 'https://img.icons8.com/?size=100&id=104233&format=png&color=000000',
        content: {
            main: 'DeepFake Image Detection: Leveraging AI and Forensic Analysis\nA Robust System for Identifying Manipulated Images in the Age of Synthetic Media',
            secondary: ''
        }
    },
    {
        id: 'About',
        name: 'About',
        icon: 'https://img.icons8.com/?size=100&id=102326&format=png&color=000000',
        content: {
            main: 'DeepFake Image Detection: Leveraging AI and Forensic Analysis\nA Robust System for Identifying Manipulated Images in the Age of Synthetic Media',
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
        name: 'Rohan Chakraborty',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        username: 'https://www.linkedin.com/in/rohanchakraborty0108/'
    },
    {
        name: 'Adrika Ghosh',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        username: 'https://www.linkedin.com/in/adrika-ghosh-b07a66298/'
    },
    {
        name: 'Subhashis Mondal',
        image: 'https://images.unsplash.com/photo-1487412729047-8bef73b3f8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
        username: 'https://www.linkedin.com/in/subhashis360/'
    }
]);

const frontendButtons = ref([
    { text: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { text: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { text: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
    { text: 'Bootstrap', icon: 'https://img.icons8.com/?size=100&id=ldQqWiIRv9bc&format=png&color=000000' }
]);

const backendButtons = ref([
    { text: 'Flask', icon: 'https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000' },
]);

const elaButtons = ref([
    { text: 'PIL', icon: 'https://img.icons8.com/?size=100&id=zLlZqaDdonl7&format=png&color=000000' },
    { text: 'OpenCV', icon: 'https://img.icons8.com/?size=100&id=bpip0gGiBLT1&format=png&color=000000' }
]);

const mlButtons = ref([
    { text: 'PyTorch', icon: 'https://img.icons8.com/?size=100&id=O6SWwpPIM0GB&format=png&color=000000' },
    { text: 'Scikit-learn', icon: 'https://img.icons8.com/?size=100&id=qfwWgmubuPUl&format=png&color=000000' },
    { text: 'NumPy', icon: 'https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000' }
]);

const activeTab = ref('Introduction');
const activeAccordions = ref([]);

const setActiveTab = (tabId) => {
    activeTab.value = tabId;
};

const toggleAccordion = (index) => {
    if (activeAccordions.value.includes(index)) {
        activeAccordions.value = activeAccordions.value.filter(i => i !== index);
    } else {
        activeAccordions.value.push(index);
    }
};

const handleButtonClick = (text) => {
    console.log(`Button clicked: ${text}`);
};

const visitgithub = () => {
    window.open("https://github.com/rohannc/FinalYearProject_DeepFakeImageDetection", "_blank");
}
</script>

<template>
    <div id="projects"></div>
    <div class="heading w-[90%] mx-auto mt-25">
        <h1>Projects</h1>
    </div>
    <ProjectNavbar />
    <!-- Desktop View -->
    <div class="hidden md:flex mx-auto mb-20 mt-10 w-[95%] max-w-[1200px]">
        <ul
            class="tagesschrift-regular flex-column space-y-4 text-[1vw] font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 flex flex-col items-center sidebar">
            <li v-for="tab in tabs" :key="tab.id" class="w-full">
                <button type="button"
                    class="inline-flex items-center justify-start px-[1.5vw] py-[0.8vw] rounded-lg w-full text-[1.1vw] font-medium gap-2 cursor-pointer"
                    :class="{
                        'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800': activeTab === tab.id,
                        'text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400': activeTab !== tab.id
                    }" @click="setActiveTab(tab.id)">
                    <img :src="tab.icon" alt="Icon" class="my-1 w-[1.8vw] h-[1.8vw] object-contain" />
                    <span class="my-1 pr-[2vw]">{{ tab.name }}</span>
                </button>
            </li>
        </ul>
        <div class="content-area">
            <div id="introduction"
                class="p-[2vw] bg-gray-50 text-[1.3vw] text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg flex flex-col items-center"
                :class="{ 'hidden': activeTab !== 'Introduction' }">
                <h1
                    class="text-center mb-[3vw] text-[3vw] font-extrabold text-gray-900 dark:text-white md:text-[4vw] lg:text-[5vw]">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">DeepFake
                    </span> Image Detection
                </h1>
                <swiper class="w-full max-w-[80%] mb-[2vw]" :modules="modules" :slides-per-view="1" :space-between="0"
                    :loop="trueCop" :autoplay="{ delay: 5000, disableOnInteraction: false }"
                    :pagination="{ clickable: true }" :navigation="true" :effect="'fade'"
                    :fade-effect="{ crossFade: true }">
                    <swiper-slide>
                        <img src="../assets/Website01.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Front Page 01">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website02.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Front Page 02">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website03.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Image Upload">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website04.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Output Page 01">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website05.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Output Page 02">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website06.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Model Output">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website07.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Contact Page">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website08.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Responsive Design">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website09.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Responsive Design">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website10.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Responsive Design">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website11.png" class="w-full h-auto aspect-[16/9] object-cover rounded-lg"
                            alt="Responsive Design">
                    </swiper-slide>
                </swiper>
                <div class="py-[2vw] flex flex-row gap-[2vw] justify-center">
                    <div v-for="item in items" :key="item.name" class="flex items-center gap-[1vw]">
                        <img v-if="item.name == 'Rohan Chakraborty'" src="../assets/ProjectIcon1Cropper.jpg"
                            alt="Profile picture" class="w-[3vw] h-[3vw] rounded-full" />
                        <img v-if="item.name == 'Adrika Ghosh'" src="../assets/Adrika.jpeg" alt="Profile picture"
                            class="w-[3vw] h-[3vw] rounded-full" />
                        <img v-if="item.name == 'Subhashis Mondal'" src="../assets/Subhashis.jpeg" alt="Profile picture"
                            class="w-[3vw] h-[3vw] rounded-full" />
                        <div class="font-medium libre-baskerville-bold text-[1.3vw] dark:text-white">
                            {{ item.name }}
                        </div>
                        <div class="flex justify-center cursor-pointer">
                            <a :href="item.username" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/?size=100&id=lMUZwFHycz7a&format=png&color=000000"
                                    alt="LinkedIn" class="w-[3vw] h-[3vw]">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="about"
                class="min-h-[40vh] p-[2vw] bg-gray-50 text-[1.3vw] text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
                :class="{ 'hidden': activeTab !== 'About' }">
                <div class="max-w-[85%] mx-auto flex flex-col space-y-[2vw]">
                    <div>
                        <h2
                            class="text-[2vw] font-bold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-[0.5vw]">
                            <img src="https://img.icons8.com/?size=100&id=bCMIMDcgAmSp&format=png&color=000000"
                                alt="AI Icon" class="w-[2vw] h-[2vw]">
                            DeepFake Image Detection
                        </h2>
                        <p class="mt-[1vw] text-[1.3vw] text-gray-500 dark:text-gray-400 tabbed-paragraph">
                            The rise of deep learning and generative adversarial networks (GANs) has enabled the
                            creation of highly realistic "DeepFake" images and videos. These AI-generated manipulations
                            threaten the authenticity of digital content, facilitating misinformation, identity fraud,
                            and erosion of trust in media. As deepfake technology becomes more accessible, there is an
                            urgent need for robust detection frameworks to distinguish Genuine images from manipulated
                            ones. The "Learning to Identify DeepFake Images" project addresses this by developing an
                            advanced detection system that combines state-of-the-art machine learning with forensic
                            analysis to safeguard digital integrity.
                        </p>
                    </div>
                    <div>
                        <h3
                            class="text-[1.8vw] font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-[0.5vw]">
                            <img src="https://img.icons8.com/?size=100&id=46721&format=png&color=000000"
                                alt="Project Icon" class="w-[2vw] h-[2vw]">
                            Project Overview
                        </h3>
                        <p class="mt-[1vw] text-[1.2vw] text-gray-500 dark:text-gray-400 tabbed-paragraph">
                            This project designs a comprehensive DeepFake Image Detection framework, integrating deep
                            learning and forensic techniques. Key components include:
                        </p>
                        <ul class="mt-[1vw] space-y-[1vw] text-[1.2vw] text-gray-500 dark:text-gray-400 list-none">
                            <li class="flex items-start gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-[1.2vw] h-[1.2vw] mt-[0.3vw]">
                                <span>
                                    <strong class="font-semibold">DeepFake Image Dataset</strong>: Utilizes a diverse
                                    dataset of authentic and deepfake images with various manipulations,
                                    transformations, and demographics to ensure robust model generalization.
                                </span>
                            </li>
                            <li class="flex items-start gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-[1.2vw] h-[1.2vw] mt-[0.3vw]">
                                <span>
                                    <strong class="font-semibold">Two-Phase Deep Learning Architecture</strong>: Employs
                                    a CNN for feature extraction in the first phase, followed by a CNN classifier in the
                                    second phase to predict Real/Fake outcomes.
                                </span>
                            </li>
                            <li class="flex items-start gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-[1.2vw] h-[1.2vw] mt-[0.3vw]">
                                <span>
                                    <strong class="font-semibold">Error Level Analysis (ELA)</strong>: Highlights JPEG
                                    compression discrepancies to identify manipulated regions, providing a visual
                                    heatmap for transparency.
                                </span>
                            </li>
                            <li class="flex items-start gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-[1.2vw] h-[1.2vw] mt-[0.3vw]">
                                <span>
                                    <strong class="font-semibold">Web-Based Detection Interface</strong>: Offers a
                                    user-friendly web app for uploading images and receiving real-time classification
                                    results, enhancing accessibility.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <p class="text-[1.3vw] text-gray-500 dark:text-gray-400 tabbed-paragraph">
                        By combining deep learning with forensic analysis, this project delivers a robust, interpretable
                        solution for DeepFake detection. It achieves high accuracy, provides visual explanations, and
                        supports efforts to combat synthetic media risks, ensuring trust in digital content.
                    </p>
                </div>
            </div>
            <div id="techstack"
                class="p-[2vw] bg-gray-50 text-[1.3vw] text-gray-500 dark:text-gray-400 dark:bg-gray-800 min-h-[40vh] justify-center"
                :class="{ 'hidden': activeTab !== 'TechStack' }">
                <div class="flex flex-col space-y-[2vw] max-w-[85%] mx-auto">
                    <!-- FrontEnd -->
                    <h3
                        class="text-[1.5vw] font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-[0.5vw] justify-center py-[0.3vw]">
                        <img src="https://img.icons8.com/?size=100&id=42900&format=png&color=000000" alt="FrontEnd"
                            class="w-[2vw] h-[2vw]">
                        FrontEnd
                    </h3>
                    <div class="flex gap-[1vw] flex-wrap justify-center comic-relief-bold">
                        <button v-for="button in frontendButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[1.0vw] px-[1.2vw] py-[0.6vw] text-center me-[0.5vw] mb-[0.5vw] flex items-center gap-[0.4vw]"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-[2vw] h-[2vw] object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                    <!-- BackEnd -->
                    <h3
                        class="text-[1.5vw] font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-[0.5vw] justify-center py-[0.3vw]">
                        <img src="https://img.icons8.com/?size=100&id=43653&format=png&color=000000" alt="BackEnd"
                            class="w-[2vw] h-[2vw]">
                        BackEnd
                    </h3>
                    <div class="flex gap-[1vw] flex-wrap justify-center comic-relief-bold">
                        <button v-for="button in backendButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[1.0vw] px-[1.2vw] py-[0.6vw] text-center me-[0.5vw] mb-[0.5vw] flex items-center gap-[0.4vw]"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-[2vw] h-[2vw] object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                    <!-- Error Level Analysis -->
                    <h3
                        class="text-[1.5vw] font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-[0.5vw] justify-center py-[0.3vw]">
                        <img src="https://img.icons8.com/?size=100&id=42918&format=png&color=000000"
                            alt="Error Level Analysis" class="w-[2vw] h-[2vw]">
                        Error Level Analysis
                    </h3>
                    <div class="flex gap-[1vw] flex-wrap justify-center comic-relief-bold">
                        <button v-for="button in elaButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[1.0vw] px-[1.2vw] py-[0.6vw] text-center me-[0.5vw] mb-[0.5vw] flex items-center gap-[0.4vw]"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-[2vw] h-[2vw] object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                    <!-- Machine Learning -->
                    <h3
                        class="text-[1.5vw] font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-[0.5vw] justify-center py-[0.3vw]">
                        <img src="https://img.icons8.com/?size=100&id=xaquNfre75yC&format=png&color=000000"
                            alt="Machine Learning" class="w-[2vw] h-[2vw]">
                        Machine Learning
                    </h3>
                    <div class="flex gap-[1vw] flex-wrap justify-center comic-relief-bold">
                        <button v-for="button in mlButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[1.0vw] px-[1.2vw] py-[0.6vw] text-center me-[0.5vw] mb-[0.5vw] flex items-center gap-[0.4vw]"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-[2vw] h-[2vw] object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                </div>
            </div>
            <div id="link"
                class="p-[2vw] bg-gray-50 text-[1.3vw] text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg flex flex-col min-h-[30vh]"
                :class="{ 'hidden': activeTab !== 'Link' }">
                <div class="flex flex-col w-full max-w-[85%] mx-auto">
                    <h3 class="mb-[1.5vw] text-[1.8vw] font-semibold text-gray-900 dark:text-white pt-serif-bold">
                        DeepFake
                        Defender || Github Repository</h3>
                    <div class="mb-[1vw]">
                        <p class="mb-[0.5vw] text-[1.2vw]">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-[1.2vw] h-[1.2vw] inline-block mr-[0.5vw]">
                            Clone the repository:
                        </p>
                        <div class="flex items-center gap-[0.5vw]">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-[0.5vw] font-mono text-[1.1vw] text-gray-800 dark:text-gray-200">
                                <code>git clone https://github.com/rohannc/FinalYearProject_DeepFakeImageDetection.git</code>
                            </div>
                            <button
                                @click="copyCommand('git clone https://github.com/rohannc/FinalYearProject_DeepFakeImageDetection.git', 0)"
                                class="px-[1.2vw] py-[0.5vw] bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-[1.1vw] flex items-center justify-center gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-[1.3vw] h-[1.3vw]">
                                <span>{{ copied[0] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-[1vw]">
                        <p class="mb-[0.5vw] text-[1.2vw]">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-[1.2vw] h-[1.2vw] inline-block mr-[0.5vw]">
                            Navigate to the project folder:
                        </p>
                        <div class="flex items-center gap-[0.5vw]">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-[0.5vw] font-mono text-[1.1vw] text-gray-800 dark:text-gray-200">
                                <code>cd FinalYearProject_DeepFakeImageDetection</code>
                            </div>
                            <button @click="copyCommand('cd FinalYearProject_DeepFakeImageDetection', 1)"
                                class="px-[1.2vw] py-[0.5vw] bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-[1.1vw] flex items-center justify-center gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-[1.3vw] h-[1.3vw]">
                                <span>{{ copied[1] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-[1vw]">
                        <p class="mb-[0.5vw] text-[1.2vw]">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-[1.2vw] h-[1.2vw] inline-block mr-[0.5vw]">
                            Install dependencies:
                        </p>
                        <div class="flex items-center gap-[0.5vw]">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-[0.5vw] font-mono text-[1.1vw] text-gray-800 dark:text-gray-200">
                                <code>npm install</code>
                            </div>
                            <button @click="copyCommand('npm install', 2)"
                                class="px-[1.2vw] py-[0.5vw] bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-[1.1vw] flex items-center justify-center gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-[1.3vw] h-[1.3vw]">
                                <span>{{ copied[2] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-[1vw]">
                        <p class="mb-[0.5vw] text-[1.2vw]">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-[1.2vw] h-[1.2vw] inline-block mr-[0.5vw]">
                            Run the project:
                        </p>
                        <div class="flex items-center gap-[0.5vw]">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-[0.5vw] font-mono text-[1.1vw] text-gray-800 dark:text-gray-200">
                                <code>npm run dev</code>
                            </div>
                            <button @click="copyCommand('npm run dev', 3)"
                                class="px-[1.2vw] py-[0.5vw] bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-[1.1vw] flex items-center justify-center gap-[0.5vw]">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-[1.3vw] h-[1.3vw]">
                                <span>{{ copied[3] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="buttonDownload mx-auto mt-[3vw] flex justify-center cursor-pointer">
                    <button class="cursor-pointer" @click="visitgithub">
                        Click Me to Visit the Github Repository!
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile View -->
    <div class="block md:hidden mx-4 mb-10 mt-6">
        <div class="w-full">
            <!-- Introduction Section -->
            <div id="introduction"
                class="p-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg flex flex-col items-center">
                <h1 class="text-center mb-6 text-2xl font-extrabold text-gray-900 dark:text-white">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">DeepFake
                    </span> Image Detection
                </h1>
                <swiper class="w-full max-w-lg mb-6" :modules="modules" :slides-per-view="1" :space-between="0"
                    :loop="true" :autoplay="{ delay: 5000, disableOnInteraction: false }"
                    :pagination="{ clickable: true }" :navigation="true" :effect="'fade'"
                    :fade-effect="{ crossFade: true }">
                    <swiper-slide>
                        <img src="../assets/Website01.png" class="w-full h-40 object-cover rounded-lg"
                            alt="Front Page 01">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website02.png" class="w-full h-40 object-cover rounded-lg"
                            alt="Front Page 02">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website03.png" class="w-full h-40 object-cover rounded-lg"
                            alt="Image Upload">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website04.png" class="w-full h-40 object-cover rounded-lg"
                            alt="Output Page 01">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website05.png" class="w-full h-40 object-cover rounded-lg"
                            alt="Output Page 02">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website06.png" class="w-full h-40 object-cover rounded-lg"
                            alt="Model Output">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website07.png" class="w-full h-40 object-cover rounded-lg"
                            alt="Contact Page">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website08.png" class="w-fit h-40 object-cover rounded-lg"
                            alt="Responsive Design">
                    </swiper-slide>
                </swiper>
                <div class="mx-4 py-4">
                    <ul class="flex flex-col gap-4 justify-center items-center">
                        <li v-for="item in items" :key="item.name" class="flex items-center gap-3">
                            <img v-if="item.name == 'Rohan Chakraborty'" src="../assets/ProjectIcon1Cropper.jpg"
                                alt="Profile picture" class="w-8 h-8 rounded-full" />
                            <img v-if="item.name == 'Adrika Ghosh'" src="../assets/Adrika.jpeg" alt="Profile picture"
                                class="w-8 h-8 rounded-full" />
                            <img v-if="item.name == 'Subhashis Mondal'" src="../assets/Subhashis.jpeg"
                                alt="Profile picture" class="w-8 h-8 rounded-full" />
                            <div class="font-medium libre-baskerville-bold text-sm dark:text-white">
                                {{ item.name }}
                            </div>
                            <div class="flex justify-center cursor-pointer">
                                <a :href="item.username" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/?size=100&id=lMUZwFHycz7a&format=png&color=000000"
                                        alt="LinkedIn" class="w-8 h-8">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- About Section -->
            <div id="about"
                class="p-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg mt-4">
                <div class="max-w-lg mx-auto flex flex-col space-y-4">
                    <div>
                        <h2
                            class="text-lg font-bold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=100&id=bCMIMDcgAmSp&format=png&color=000000"
                                alt="AI Icon" class="w-5 h-5">
                            DeepFake Image Detection
                        </h2>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 tabbed-paragraph">
                            The rise of deep learning and generative adversarial networks (GANs) has enabled the
                            creation of highly realistic "DeepFake" images and videos. These AI-generated manipulations
                            threaten the authenticity of digital content, facilitating misinformation, identity fraud,
                            and erosion of trust in media. As deepfake technology becomes more accessible, there is an
                            urgent need for robust detection frameworks to distinguish Genuine images from manipulated
                            ones. The "Learning to Identify DeepFake Images" project addresses this by developing an
                            advanced detection system that combines state-of-the-art machine learning with forensic
                            analysis to safeguard digital integrity.
                        </p>
                    </div>
                    <div>
                        <h3
                            class="text-base font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=100&id=46721&format=png&color=000000"
                                alt="Project Icon" class="w-5 h-5">
                            Project Overview
                        </h3>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 tabbed-paragraph">
                            This project designs a comprehensive DeepFake Image Detection framework, integrating deep
                            learning and forensic techniques. Key components include:
                        </p>
                        <ul class="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400 list-none">
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-3 h-3 mt-1">
                                <span>
                                    <strong class="font-semibold">DeepFake Image Dataset</strong>: Utilizes a diverse
                                    dataset of authentic and deepfake images with various manipulations,
                                    transformations, and demographics to ensure robust model generalization.
                                </span>
                            </li>
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-3 h-3 mt-1">
                                <span>
                                    <strong class="font-semibold">Two-Phase Deep Learning Architecture</strong>: Employs
                                    a CNN for feature extraction in the first phase, followed by a CNN classifier in the
                                    second phase to predict Real/Fake outcomes.
                                </span>
                            </li>
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-3 h-3 mt-1">
                                <span>
                                    <strong class="font-semibold">Error Level Analysis (ELA)</strong>: Highlights JPEG
                                    compression discrepancies to identify manipulated regions, providing a visual
                                    heatmap for transparency.
                                </span>
                            </li>
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-3 h-3 mt-1">
                                <span>
                                    <strong class="font-semibold">Web-Based Detection Interface</strong>: Offers a
                                    user-friendly web app for uploading images and receiving real-time classification
                                    results, enhancing accessibility.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 tabbed-paragraph">
                        By combining deep learning with forensic analysis, this project delivers a robust, interpretable
                        solution for DeepFake detection. It achieves high accuracy, provides visual explanations, and
                        supports efforts to combat synthetic media risks, ensuring trust in digital content.
                    </p>
                </div>
            </div>
            <!-- TechStack Section -->
            <div id="techstack"
                class="p-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg mt-4">
                <div class="max-w-lg mx-auto flex flex-col space-y-4">
                    <!-- FrontEnd -->
                    <h3
                        class="text-base font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                        <img src="https://img.icons8.com/?size=100&id=42900&format=png&color=000000" alt="FrontEnd"
                            class="w-5 h-5">
                        FrontEnd
                    </h3>
                    <div class="flex gap-3 flex-wrap comic-relief-bold mb-3">
                        <button v-for="button in frontendButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-2"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-5 h-5 object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                    <!-- BackEnd -->
                    <h3
                        class="text-base font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                        <img src="https://img.icons8.com/?size=100&id=43653&format=png&color=000000" alt="BackEnd"
                            class="w-5 h-5">
                        BackEnd
                    </h3>
                    <div class="flex gap-3 flex-wrap comic-relief-bold mb-3">
                        <button v-for="button in backendButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-2"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-5 h-5 object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                    <!-- Error Level Analysis -->
                    <h3
                        class="text-base font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                        <img src="https://img.icons8.com/?size=100&id=42918&format=png&color=000000"
                            alt="Error Level Analysis" class="w-5 h-5">
                        Error Level Analysis
                    </h3>
                    <div class="flex gap-3 flex-wrap comic-relief-bold mb-3">
                        <button v-for="button in elaButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-2"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-5 h-5 object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                    <!-- Machine Learning -->
                    <h3
                        class="text-base font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                        <img src="https://img.icons8.com/?size=100&id=xaquNfre75yC&format=png&color=000000"
                            class="w-5 h-5">
                        Machine Learning
                    </h3>
                    <div class="flex gap-3 flex-wrap comic-relief-bold">
                        <button v-for="button in mlButtons" :key="button.text" type="button"
                            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-2"
                            @click="handleButtonClick(button.text)">
                            <img :src="button.icon" alt="Icon" class="w-5 h-5 object-contain" />
                            {{ button.text }}
                        </button>
                    </div>
                </div>
            </div>
            <!-- Link Section -->
            <div id="link"
                class="p-4 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg flex flex-col mt-4">
                <div class="flex flex-col w-full">
                    <h3 class="mb-4 text-base font-semibold text-gray-900 dark:text-white pt-serif-bold">DeepFake
                        Defender || Github Repository</h3>
                    <div class="mb-3">
                        <p class="mb-2 text-sm">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-3 h-3 inline-block mr-2">
                            Clone the repository:
                        </p>
                        <div class="flex items-center gap-2">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-xs text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-nowrap">
                                <code>git clone https://github.com/rohannc/FinalYearProject_DeepFakeImageDetection.git</code>
                            </div>
                            <button
                                @click="copyCommand('git clone https://github.com/rohannc/FinalYearProject_DeepFakeImageDetection.git', 0)"
                                class="px-3 py-1.5 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center justify-center gap-1.5 shrink-0">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[0] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <p class="mb-2 text-sm">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-3 h-3 inline-block mr-2">
                            Navigate to the project folder:
                        </p>
                        <div class="flex items-center gap-2">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-xs text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-nowrap">
                                <code>cd FinalYearProject_DeepFakeImageDetection</code>
                            </div>
                            <button @click="copyCommand('cd FinalYearProject_DeepFakeImageDetection', 1)"
                                class="px-3 py-1.5 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center justify-center gap-1.5 shrink-0">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[1] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <p class="mb-2 text-sm">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-3 h-3 inline-block mr-2">
                            Install dependencies:
                        </p>
                        <div class="flex items-center gap-2">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-xs text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-nowrap">
                                <code>npm install</code>
                            </div>
                            <button @click="copyCommand('npm install', 2)"
                                class="px-3 py-1.5 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center justify-center gap-1.5 shrink-0">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[2] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <p class="mb-2 text-sm">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-3 h-3 inline-block mr-2">
                            Run the project:
                        </p>
                        <div class="flex items-center gap-2">
                            <div
                                class="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-xs text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-nowrap">
                                <code>npm run dev</code>
                            </div>
                            <button @click="copyCommand('npm run dev', 3)"
                                class="px-3 py-1.5 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center justify-center gap-1.5 shrink-0">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[3] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="buttonDownload mx-auto mt-6 flex justify-center cursor-pointer w-[80%]">
                    <button class="cursor-pointer text-sm" @click="visitgithub">
                        Click Me to Visit the Github Repository!
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    width: 15vw;
    min-width: 120px;
    max-width: 200px;
}

.content-area {
    width: 85vw;
    max-width: 1000px;
    min-width: 300px;
}

.buttonDownload {
    --green: #1bfd9c;
    font-size: 1.2vw;
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

/* Swiper custom styles */
:deep(.swiper) {
    position: relative;
}

:deep(.swiper-slide) {
    display: flex;
    justify-content: center;
    align-items: center;
}

:deep(.swiper-pagination-bullet) {
    width: 0.8vw;
    height: 0.8vw;
    background: #fff;
    opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
    opacity: 1;
    background: #fff;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    transition: background 0.3s;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
    background: rgba(255, 255, 255, 0.5);
}

:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
    font-size: 1.2vw;
}
</style>