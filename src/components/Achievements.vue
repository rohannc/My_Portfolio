<script setup>
import { reactive } from 'vue';

const achievements = [
    {
        icon1: "https://img.icons8.com/?size=100&id=VfUsAOqMZCj5&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "General Merit Rank: 17",
        color: "#0d9fcf",
        name: "WBJECA 2024",
        institute: "West Bengal Joint Entrance Examination Board",
        description: "",
        medal: "",
        participation: "",
        view: "https://drive.google.com/file/d/1xO0XuySHLrjJ9MZeWgAh7oJokfVN_s27/view?usp=sharing",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "View"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=33486&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=43966&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "EUREKA - Mystery Solving Competition 2023",
        institute: "Ramakrishna Mission Vivekananda Centenary College, Rahara, Kolkata",
        description: "",
        medal: "Gold",
        participation: "Team of Two",
        view: "https://drive.google.com/file/d/1w1hQy0AGePx4jwjhxvmLAaQi8VFh6H43/view?usp=sharing",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "View"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=33486&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=71158&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "Sherlocked, Srijan'25",
        institute: "Faculty of Engineering and Technology, Jadavpur University",
        description: "",
        medal: "Gold",
        participation: "Team of Three",
        view: "https://drive.google.com/file/d/1PakvJlfb4XBnVtWNY-4-3HVm6JzF2b-V/view?usp=sharing",
        linkedin: "https://www.linkedin.com/posts/rohanchakraborty0108_srijanju-mca-jumca-activity-7319796457308311552-JpnY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmvFV8ByEhnQD5-VmVV6_1rsbq_VFrDukg",
        message: "View"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=33486&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "Error 404, Envision 2k25",
        institute: "Ramakrishna Mission Residential College, Narendrapur, Kolkata",
        description: "",
        medal: "Gold",
        participation: "Single Player",
        view: "https://drive.google.com/file/d/1QujfDQFttfx7SlyVsXCIlj6YIgjVBZfO/view?usp=sharing",
        linkedin: "https://www.linkedin.com/posts/rohanchakraborty0108_codingcompetition-error404-rkmrc-activity-7314332325641613312--KBI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmvFV8ByEhnQD5-VmVV6_1rsbq_VFrDukg",
        message: "View"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=23875&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "CodeCrafter, IgniteX 1.0",
        institute: "International Institute of Management, Kolkata",
        description: "",
        medal: "Bronze",
        participation: "Single Player",
        view: "https://drive.google.com/file/d/10W_Kjy_E2jnggi95a_kPv4L1YwYHm1Jv/view?usp=sharing",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "View"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=23875&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "Rahasyabhedi - Mystery Solving Competition, Nirdesh 2024",
        institute: "Ramakrishna Mission Vivekananda Centenary College, Rahara, Kolkata",
        description: "",
        medal: "Bronze",
        participation: "Single Player",
        view: "https://drive.google.com/file/d/1194-dcJvEL1IchtdqhIF5-Nya_OpkuZk/view?usp=sharing",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "View"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=23875&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "The Turing Show, Perceptron 2025",
        institute: "Ramakrishna Mission Vivekananda Educational and Research Institute",
        description: "",
        medal: "Bronze",
        participation: "Single Player",
        view: "https://drive.google.com/file/d/1b_B5QMO62DZasjctaB0_I-u6IZvgMPsw/view?usp=sharing",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "View"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=1FdYDpqhZ86g&format=png&color=000000",
        position: "250+ Problems Solved",
        color: "#bc7335",
        name: "GeeksForGeeks",
        institute: "With a Coding Score of 861 and Contest Rating of 1560 in 2 Contests",
        description: "",
        medal: "GFG",
        participation: "",
        view: "https://www.geeksforgeeks.org/user/rohannju/",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "Visit Profile"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=On4zzIgLaBAu&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=1FdYDpqhZ86g&format=png&color=000000",
        position: "300+ Problems Solved",
        color: "#bc7335",
        name: "LeetCode",
        institute: "With a Contest Rating of 1435 in 4 Contests and Problem of the Day Streak of 120+ Days",
        description: "",
        medal: "Leetcode",
        participation: "",
        view: "https://leetcode.com/u/rohanch0108003/",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "Visit Profile"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=42871&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=1FdYDpqhZ86g&format=png&color=000000",
        position: "650+ Problems Solved",
        color: "#bc7335",
        name: "Coding Profile Summary",
        institute: "Within Less Than 200 Active Days, with a Daily Streak of 135+ Days",
        description: "",
        medal: "Rohan Chakraborty",
        participation: "",
        view: "https://codolio.com/profile/Rohann/problemSolving",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/",
        message: "Visit Profile"
    }
];

// Initialize tooltipVisible with unique keys (using item.name)
const tooltipVisible = reactive(
    achievements.reduce((acc, item) => {
        acc[item.name] = { 1: false, 2: false, 3: false, 4: false };
        return acc;
    }, {})
);

const showTooltip = (itemName, buttonId) => {
    // Reset all tooltips for this item
    tooltipVisible[itemName][1] = false;
    tooltipVisible[itemName][2] = false;
    tooltipVisible[itemName][3] = false;
    tooltipVisible[itemName][4] = false;
    // Show the specific tooltip
    tooltipVisible[itemName][buttonId] = true;
};

const hideTooltip = (itemName, buttonId) => {
    tooltipVisible[itemName][buttonId] = false;
};
</script>

<template>
    <div id="achievements"></div>
    <div class="heading w-[90%] mx-auto mt-[15vw] mb-[2vw]">
        <h1 class="text-[4vw] md:text-[3vw] font-bold text-center">Achievements</h1>
    </div>
    <!-- Desktop and iPad View -->
    <div class="hidden md:grid mx-[2vw] grid-cols-3 gap-[2vw] p-[2vw]">
        <div v-for="item in achievements" :key="item.name"
            class="card-container bg-gray-800 border border-gray-800 rounded-xl shadow-sm mb-[2vw] flex flex-col h-[22rem]">
            <div class="mx-[2vw] mt-[1vw] flex justify-between p-[1vw]">
                <!-- Medal Button -->
                <div class="relative" @mouseover="showTooltip(item.name, 1)" @mouseleave="hideTooltip(item.name, 1)">
                    <button
                        class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform"
                        :aria-label="item.medal ? `Medal: ${item.medal}` : 'No Medal'">
                        <img :src="item.icon1" alt="Medal Icon" class="w-[4rem] h-auto rounded-tl-md" />
                    </button>
                    <div v-if="item.medal && tooltipVisible[item.name]?.[1]"
                        class="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.875rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                        role="tooltip">
                        {{ item.medal }}
                        <div
                            class="absolute bottom-[-0.3rem] left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                        </div>
                    </div>
                </div>
                <!-- Profile Button -->
                <div class="relative" @mouseover="showTooltip(item.name, 2)" @mouseleave="hideTooltip(item.name, 2)">
                    <button
                        class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform"
                        :aria-label="item.participation ? `Participation: ${item.participation}` : 'No Participation Info'">
                        <img :src="item.icon2" alt="Profile Icon" class="w-[4rem] h-auto rounded-tr-md" />
                    </button>
                    <div v-if="item.participation && tooltipVisible[item.name]?.[2]"
                        class="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.875rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                        role="tooltip">
                        {{ item.participation }}
                        <div
                            class="absolute bottom-[-0.3rem] left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-content p-[1rem] text-center flex flex-col flex-grow">
                <div class="text-content">
                    <h5 class="mb-[0.2rem] text-[1.4rem] font-bold" :style="{ color: item.color }">
                        {{ item.position }}
                    </h5>
                    <h5 class="mb-[0.7rem] text-[1.1rem] font-semibold text-[#d35757]">
                        {{ item.name }}
                    </h5>
                    <h3 class="mb-[1rem] text-[0.9rem] font-normal text-[#16e607]">
                        {{ item.institute }}
                    </h3>
                </div>
                <div class="card-buttons flex gap-[4rem] justify-center pb-[0.75rem] items-center">
                    <!-- View Button -->
                    <div class="relative" @mouseover="showTooltip(item.name, 3)"
                        @mouseleave="hideTooltip(item.name, 3)">
                        <a target="_blank" :href="item.view"
                            class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform inline-block"
                            aria-label="View Achievement">
                            <img src="https://img.icons8.com/?size=100&id=Psrfh0UtjRyD&format=png&color=000000"
                                alt="View Icon" class="w-[2.5rem] h-auto" />
                        </a>
                        <div v-if="tooltipVisible[item.name]?.[3]"
                            class="absolute bottom-[2.5rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.875rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                            role="tooltip">
                            {{ item.message }}
                            <div
                                class="absolute top-full left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                            </div>
                        </div>
                    </div>
                    <!-- LinkedIn Button -->
                    <div class="relative" @mouseover="showTooltip(item.name, 4)"
                        @mouseleave="hideTooltip(item.name, 4)">
                        <a :href="item.linkedin" target="_blank"
                            class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform inline-block"
                            aria-label="Visit LinkedIn">
                            <img src="https://img.icons8.com/?size=100&id=67570&format=png&color=000000"
                                alt="LinkedIn Icon" class="w-[3rem] h-auto" />
                        </a>
                        <div v-if="tooltipVisible[item.name]?.[4]"
                            class="absolute bottom-[2.5rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.875rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                            role="tooltip">
                            Visit LinkedIn
                            <div
                                class="absolute top-full left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile View -->
    <div class="block md:hidden mx-[4vw] p-[2vw]">
        <div v-for="item in achievements" :key="item.name"
            class="card-container bg-gray-800 border border-gray-800 rounded-xl shadow-sm mb-[2vw] flex flex-col h-[20rem] w-[90%] mx-auto">
            <div class="mx-[2vw] mt-[1vw] flex justify-between p-[1vw]">
                <!-- Medal Button -->
                <div class="relative" @click="showTooltip(item.name, 1)">
                    <button
                        class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform"
                        :aria-label="item.medal ? `Medal: ${item.medal}` : 'No Medal'">
                        <img :src="item.icon1" alt="Medal Icon" class="w-[3rem] h-auto rounded-tl-md" />
                    </button>
                    <div v-if="item.medal && tooltipVisible[item.name]?.[1]"
                        class="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.75rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                        role="tooltip">
                        {{ item.medal }}
                        <div
                            class="absolute bottom-[-0.3rem] left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                        </div>
                    </div>
                </div>
                <!-- Profile Button -->
                <div class="relative" @click="showTooltip(item.name, 2)">
                    <button
                        class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform"
                        :aria-label="item.participation ? `Participation: ${item.participation}` : 'No Participation Info'">
                        <img :src="item.icon2" alt="Profile Icon" class="w-[3rem] h-auto rounded-tr-md" />
                    </button>
                    <div v-if="item.participation && tooltipVisible[item.name]?.[2]"
                        class="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.75rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                        role="tooltip">
                        {{ item.participation }}
                        <div
                            class="absolute bottom-[-0.3rem] left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-content p-[0.75rem] text-center flex flex-col flex-grow">
                <div class="text-content">
                    <h5 class="mb-[0.2rem] text-[1.2rem] font-bold" :style="{ color: item.color }">
                        {{ item.position }}
                    </h5>
                    <h5 class="mb-[0.5rem] text-[0.9rem] font-semibold text-[#d35757]">
                        {{ item.name }}
                    </h5>
                    <h3 class="mb-[0.75rem] text-[0.8rem] font-normal text-[#16e607]">
                        {{ item.institute }}
                    </h3>
                </div>
                <div class="card-buttons flex gap-[4rem] justify-center pb-[0.75rem] items-center">
                    <!-- View Button -->
                    <div class="relative" @click="showTooltip(item.name, 3)">
                        <a target="_blank" :href="item.view"
                            class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform inline-block"
                            aria-label="View Achievement">
                            <img src="https://img.icons8.com/?size=100&id=Psrfh0UtjRyD&format=png&color=000000"
                                alt="View Icon" class="w-[2rem] h-auto" />
                        </a>
                        <div v-if="tooltipVisible[item.name]?.[3]"
                            class="absolute bottom-[2rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.75rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                            role="tooltip">
                            View
                            <div
                                class="absolute top-full left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                            </div>
                        </div>
                    </div>
                    <!-- LinkedIn Button -->
                    <div class="relative" @click="showTooltip(item.name, 4)">
                        <a :href="item.linkedin" target="_blank"
                            class="bg-transparent border-none cursor-pointer p-[0.5vw] hover:scale-110 transition-transform inline-block"
                            aria-label="Visit LinkedIn">
                            <img src="https://img.icons8.com/?size=100&id=67570&format=png&color=000000"
                                alt="LinkedIn Icon" class="w-[2.4rem] h-auto" />
                        </a>
                        <div v-if="tooltipVisible[item.name]?.[4]"
                            class="absolute bottom-[2rem] left-1/2 transform -translate-x-1/2 z-10 px-[1vw] py-[0.5vw] text-[0.75rem] text-white bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap"
                            role="tooltip">
                            Visit LinkedIn
                            <div
                                class="absolute top-full left-1/2 transform -translate-x-1/2 border-[0.3rem] border-t-gray-700 border-x-transparent border-b-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.text-content {
    flex-grow: 0;
    flex-shrink: 0;
    min-height: 10rem;
}

.card-buttons {
    margin-top: auto;
    padding-bottom: 0.75rem;
    align-items: center;
}

.card-buttons img {
    line-height: 1;
    vertical-align: middle;
}

/* iPad-specific adjustments */
@media (min-width: 768px) and (max-width: 1024px) {
    .grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }

    .card-container {
        height: 21rem;
    }

    .text-content {
        min-height: 9rem;
    }

    .text-\[1\.4rem\] {
        font-size: 1.2rem;
    }

    .text-\[1\.1rem\] {
        font-size: 1rem;
    }

    .text-\[0\.9rem\] {
        font-size: 0.875rem;
    }

    .w-\[4rem\] {
        width: 3.5rem;
        height: 3.5rem;
    }

    .w-\[2\.5rem\] {
        width: 2rem;
        height: 2rem;
    }

    .gap-\[4rem\] {
        gap: 3rem;
    }
}

/* Mobile-specific adjustments */
@media (max-width: 767px) {
    .text-content {
        min-height: 8rem;
    }

    .w-\[2rem\] {
        width: 2rem;
        height: 2rem;
    }
}
</style>