<script setup>
import { ref } from 'vue';

const openPdf = (link) => {
    window.open(link, '_blank');
};

const educationList = ref([
    {
        course: "Master of Computer Applications",
        institution: "Jadavpur University, Jadavpur, Kolkata",
        courseworks: [
            "Object Oriented Programming",
            "Computer Organisation and Architecture",
            "Database Management Systems",
        ],
        type: "CGPA",
        cgpa: "Not Applicable",
        text: "2024 - Current",
        link: "https://img.icons8.com/?size=100&id=YqmuQfHF9wvC&format=png&color=000000",
        linkToPdf: ""
    },
    {
        course: "Bachelor of Science in Computer Science",
        institution: "Bangabasi College, University of Calcutta, Kolkata",
        courseworks: [
            "Data Structures",
            "Operating Systems",
            "Computer Networks",
            "Digital Systems",
            "Software Engineering",
            "Design and Analysis of Algorithms",
            "Artificial Intelligence"
        ],
        type: "CGPA",
        cgpa: "7.706",
        text: "2021 - 2024",
        link: "https://img.icons8.com/?size=100&id=21258&format=png&color=000000",
        linkToPdf: "src\\assets\\SemesterVIMarksheet.pdf"
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
        linkToPdf: "src\\assets\\HigherSecondaryMarksheet.pdf"
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
        linkToPdf: "src\\assets\\MadhyamikResult.pdf"
    }
]);
</script>

<template>

    <div class="relative px-8 mx-25 my-20">
        <div v-for="(item, index) in educationList" :key="index" class="mb-10 flex items-start">
            <!-- First Column -->
            <div class="relative flex-1">
                <span
                    class="absolute flex items-center mt-0.5 justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img :src="item.link" alt="" height="21px" width="21px">
                </span>
                <!-- Vertical line connecting spans -->
                <div v-if="index < educationList.length - 1"
                    class="absolute left-0 mt-5.5 top-6 w-0.5 h-3/4 bg-gray-200 dark:bg-gray-700"></div>
                <div class="flex-1 ml-6">
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {{ item.course }}
                    </h3>
                    <p
                        class="block mb-2 text-sm comic-relief-bold font-normal leading-none text-gray-400 dark:text-gray-300">
                        {{ item.institution }} </p>
                    <p
                        class="block mb-2 text-sm comic-relief-regular font-normal leading-none text-gray-400 dark:text-gray-300">
                        {{ item.type }}: {{ item.cgpa }} </p>
                    <div v-for="(course, idx) in item.courseworks" :key="idx"
                        class="inline-block m-1 px-2 py-1 text-sm font-normal text-gray-500 bg-gray-100 border border-gray-200 rounded-lg cursor-default hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                        {{ course }}
                    </div>
                </div>
            </div>
            <!-- Second Column -->
            <div class="flex flex-col gap-4 w-64 items-end">
                <!-- Top part with text -->
                <p class="text-sm font-normal comic-relief-regular text-gray-500 dark:text-gray-400">
                    {{ item.text }}
                </p>
                <!-- Bottom part with buttons -->
                <div class="flex gap-2">
                    <a :href="item.linkToPdf" download
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <img src="https://img.icons8.com/?size=100&id=104149&format=png&color=000000" alt="Download"
                            height="20" width="20px">
                    </a>
                    <a :href="item.linkToPdf" target="_blank"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <img src="https://img.icons8.com/?size=100&id=59964&format=png&color=000000" alt="Download"
                            height="20" width="20px">
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<style></style>