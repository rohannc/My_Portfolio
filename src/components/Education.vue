<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const openPdf = (link) => {
    window.open(link, '_blank');
};

const viewWidth = ref(window.innerWidth)

// Update viewWidth on window resize
const updateWidth = () => {
    viewWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
})

// Computed property to check if width is >= 1200
const isWideView = computed(() => viewWidth.value >= 1200)

const educationList = ref([
    {
        course: "Master of Computer Applications",
        institution: "Jadavpur University, Jadavpur, Kolkata",
        courseworks: [
            "Object Oriented Programming",
            "Computer Organisation and Architecture",
            "Database Management Systems",
            "Operating Systems"
        ],
        type: "CGPA",
        cgpa: "Not Available",
        text: "2024 - Current",
        link: "https://img.icons8.com/?size=100&id=YqmuQfHF9wvC&format=png&color=000000",
        linkToPdf: ""
    },
    {
        course: "Bachelor of Science in Computer Science",
        institution: "Bangabasi College, University of Calcutta, Kolkata",
        courseworks: [
            "Data Structures",
            "Computer Networks",
            "Digital Systems",
            "Software Engineering",
            "Design and Analysis of Algorithms",
            "Artificial Intelligence",
            "Physics",
            "Mathematics"
        ],
        type: "CGPA",
        cgpa: "7.706",
        text: "2021 - 2024",
        link: "https://img.icons8.com/?size=100&id=21258&format=png&color=000000",
        linkToPdf: "https://drive.google.com/file/d/1HKULzIIvT1GUxDIiueGjRIQunCXbDHm7/view?usp=drive_link"
    },
    {
        course: "Higher Secondary, West Bengal Council of Higher Secondary Education",
        institution: "Halisahar High School, Halisahar, North 24 Parganas",
        courseworks: [
            "Bengali",
            "English",
            "Physics",
            "Chemistry",
            "Mathematics",
            "Biology"
        ],
        type: "Percentage",
        cgpa: "83.60",
        text: "2020 - 2021",
        link: "https://img.icons8.com/?size=100&id=9HuXC128p4_T&format=png&color=000000",
        linkToPdf: "https://drive.google.com/file/d/1jH28piDO2Ew4jx97ouY51a8h8rY1wFL2/view?usp=sharing"
    },
    {
        course: "Secondary, West Bengal Board of Secondary Education",
        institution: "Halisahar High School, Halisahar, North 24 Parganas",
        courseworks: [
            "Bengali",
            "English",
            "Mathematics",
            "Physical Science",
            "Life Science",
            "History",
            "Geography"
        ],
        type: "Percentage",
        cgpa: "82.43",
        text: "2018 - 2019",
        link: "https://img.icons8.com/?size=100&id=RWH5eUW9Vr7f&format=png&color=000000",
        linkToPdf: "https://drive.google.com/file/d/1TqWli2_Qe8dQD2289YU5G0MHcvwmvO5C/view?usp=sharing"
    }
]);

const check = () => {
    return window.innerWidth > 1200;
}

</script>

<template>
    <div id="education"></div>
    <div class="heading w-[90%] mx-auto mt-[10vw]">
        <h1>Education</h1>
    </div>

    <!-- Desktop View -->
    <div class="relative px-[2rem] mx-[5vw] mb-[5rem] hidden md:block">
        <div v-for="(item, index) in educationList" :key="index" class="mb-[2.5rem] flex items-start">
            <!-- First Column -->
            <div class="relative flex-1">
                <span
                    class="absolute flex items-center mt-[0.125rem] justify-center bg-blue-100 rounded-full -left-[0.75rem] ring-[0.5rem] ring-white dark:ring-gray-900 dark:bg-blue-900 timeline-dot">
                    <img :src="item.link" alt="" class="timeline-icon">
                </span>
                <!-- Vertical line connecting spans -->
                <div v-if="index < educationList.length - 1 && isWideView"
                    class="absolute left-0 mt-[1.5rem] top-[1.5rem] w-[0.125rem] h-3/4 bg-gray-200 dark:bg-gray-700">
                </div>
                <div class="flex-1 ml-[1.5rem]">
                    <h3 class="mb-[0.25rem] font-semibold text-gray-900 dark:text-white course-text">
                        {{ item.course }}
                    </h3>
                    <p
                        class="block mb-[0.5rem] comic-relief-bold font-normal leading-none text-gray-400 dark:text-gray-300 info-text">
                        {{ item.institution }}
                    </p>
                    <p
                        class="block mb-[0.5rem] comic-relief-regular font-normal leading-none text-gray-400 dark:text-gray-300 info-text">
                        {{ item.type }}: {{ item.cgpa }}
                    </p>
                    <div class="mt-[1.25rem] flex gap-[0.25rem] flex-wrap">
                        <button v-for="(course, idx) in item.courseworks" :key="idx"
                            class="relative inline-flex items-center justify-center p-[0.125rem] mb-[0.5rem] me-[0.5rem] overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-[0.25rem] focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 coursework-text">
                            <span
                                class="relative px-[1.25rem] py-[0.625rem] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent hover:text-black">
                                {{ course }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Second Column -->
            <div class="flex flex-col gap-[1rem] w-[20%] items-end">
                <!-- Top part with text -->
                <p class="font-normal comic-relief-regular text-gray-500 dark:text-gray-400 info-text">
                    {{ item.text }}
                </p>
                <!-- Bottom part with view button -->
                <div class="flex gap-[0.5rem]">
                    <a v-if="item.linkToPdf" :href="item.linkToPdf" target="_blank"
                        class="inline-flex items-center px-[1rem] py-[0.5rem] font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-[0.25rem] focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 view-button-text">
                        <img src="https://img.icons8.com/?size=100&id=59964&format=png&color=000000" alt="View"
                            class="view-icon">
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile View -->
    <div class="relative px-[1rem] w-[90%] mx-auto mb-[3rem] md:hidden">
        <div v-for="(item, index) in educationList" :key="index" class="mb-[2rem] flex items-start">
            <div class="relative flex-1">
                <span
                    class="absolute flex items-center mt-[0.125rem] justify-center bg-blue-100 rounded-full -left-[0.625rem] ring-[0.375rem] ring-white dark:ring-gray-900 dark:bg-blue-900 timeline-dot">
                    <img :src="item.link" alt="" class="timeline-icon">
                </span>
                <!-- Vertical line connecting spans -->
                <div v-if="index < educationList.length"
                    class="absolute left-0 mt-[1.25rem] top-[1.25rem] w-[0.125rem] h-3/4 bg-gray-200 dark:bg-gray-700">
                </div>
                <div class="flex-1 ml-[1.25rem]">
                    <h3 class="mb-[0.25rem] font-semibold text-gray-900 dark:text-white course-text">
                        {{ item.course }}
                    </h3>
                    <p
                        class="block mb-[0.25rem] comic-relief-bold font-normal leading-none text-gray-400 dark:text-gray-300 info-text">
                        {{ item.institution }}
                    </p>
                    <p
                        class="block mb-[0.25rem] comic-relief-regular font-normal leading-none text-gray-400 dark:text-gray-300 info-text">
                        {{ item.type }}: {{ item.cgpa }}
                    </p>
                    <p class="font-normal comic-relief-regular text-gray-500 dark:text-gray-400 mb-[0.75rem] info-text">
                        {{ item.text }}
                    </p>
                    <div class="flex gap-[0.25rem] flex-wrap">
                        <button v-for="(course, idx) in item.courseworks" :key="idx"
                            class="relative inline-flex items-center justify-center p-[0.125rem] mb-[0.5rem] me-[0.5rem] overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-[0.25rem] focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 coursework-text">
                            <span
                                class="relative px-[0.75rem] py-[0.5rem] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent hover:text-black">
                                {{ course }}
                            </span>
                        </button>
                    </div>
                    <!-- View button below coursework buttons -->
                    <div class="mt-[1rem]" v-if="item.linkToPdf">
                        <a :href="item.linkToPdf" target="_blank"
                            class="inline-flex items-center px-[0.75rem] py-[0.375rem] font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-[0.25rem] focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 view-button-text">
                            <img src="https://img.icons8.com/?size=100&id=59964&format=png&color=000000" alt="View"
                                class="view-icon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Desktop (>1024px) */
.heading-text {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: bold;
    text-align: center;
}

.course-text {
    font-size: clamp(1rem, 2.5vw, 1.125rem);
}

.info-text {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
}

.coursework-text {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
}

.view-button-text {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
}

.timeline-dot {
    width: 1.5rem;
    height: 1.5rem;
}

.timeline-icon {
    width: 1.5rem;
    height: 1.5rem;
}

.view-icon {
    width: 1.25rem;
    height: 1.25rem;
}

/* iPad (768px–1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
    .heading-text {
        font-size: clamp(1.25rem, 3vw, 1.5rem);
    }

    .course-text {
        font-size: clamp(0.875rem, 2vw, 1rem);
    }

    .info-text {
        font-size: clamp(0.625rem, 1.5vw, 0.75rem);
    }

    .coursework-text {
        font-size: clamp(0.625rem, 1.5vw, 0.75rem);
    }

    .view-button-text {
        font-size: clamp(0.625rem, 1.5vw, 0.75rem);
    }

    .timeline-dot {
        width: 1.25rem;
        height: 1.25rem;
    }

    .timeline-icon {
        width: 1.25rem;
        height: 1.25rem;
    }

    .view-icon {
        width: 1rem;
        height: 1rem;
    }

    .w-\[20\%\] {
        width: 25%;
    }
}

/* Mobile (<768px) */
@media (max-width: 767px) {
    .heading-text {
        font-size: clamp(1rem, 3vw, 1.25rem);
    }

    .course-text {
        font-size: clamp(0.75rem, 2vw, 0.875rem);
    }

    .info-text {
        font-size: clamp(0.625rem, 1.5vw, 0.75rem);
    }

    .coursework-text {
        font-size: clamp(0.625rem, 1.5vw, 0.75rem);
    }

    .view-button-text {
        font-size: clamp(0.625rem, 1.5vw, 0.75rem);
    }

    .timeline-dot {
        width: 1rem;
        height: 1rem;
    }

    .timeline-icon {
        width: 1rem;
        height: 1rem;
    }

    .view-icon {
        width: 0.875rem;
        height: 0.875rem;
    }
}
</style>