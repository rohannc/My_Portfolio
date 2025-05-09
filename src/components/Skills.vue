<script setup>
import { ref } from 'vue'

const SkillsSection = ref({
    programmingSkillsLeft: [
        { icon: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000', name: 'Java', percentage: 90 },
        { icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000', name: 'JavaScript', percentage: 70 },
        { icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000', name: 'Python', percentage: 80 },
    ],
    programmingSkillsRight: [
        { icon: 'https://img.icons8.com/?size=100&id=mfkStOwP4EC0&format=png&color=000000', name: 'C Programming', percentage: 90 },
        { icon: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000', name: 'C++', percentage: 75 },
        { icon: 'https://img.icons8.com/?size=100&id=ZoxjA0jZDdFZ&format=png&color=000000', name: 'Kotlin', percentage: 50 },
    ],
    webSkillsLeft: [
        { icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', name: 'HTML', percentage: 85 },
    ],
    webSkillsRight: [
        { icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', name: 'CSS', percentage: 85 },
    ],
    devToolsSkillsLeft: [
        { icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000', name: 'Git', percentage: 80 },
        { icon: 'https://img.icons8.com/?size=100&id=52539&format=png&color=000000', name: 'Github', percentage: 80 },
    ],
    devToolsSkillsRight: [
        { icon: 'https://img.icons8.com/?size=100&id=rPAHs7H1vriV&format=png&color=000000', name: 'Eclipse', percentage: 80 },
        { icon: 'https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000', name: 'VS Code', percentage: 90 },
    ],
    frameworksSkillsLeft: [
        { icon: 'https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000', name: 'React', percentage: 75 },
        { icon: 'https://img.icons8.com/?size=100&id=ouWtcsgDBiwO&format=png&color=000000', name: 'Node.js', percentage: 70 },
        { icon: 'https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000', name: 'Flask', percentage: 85 },
    ],
    frameworksSkillsRight: [
        { icon: 'https://img.icons8.com/?size=100&id=tbleCw0ch6QC&format=png&color=000000', name: 'Vue JS', percentage: 85 },
        { icon: 'https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000', name: 'Tailwind CSS', percentage: 80 },
        { icon: 'https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000', name: 'Bootstrap', percentage: 75 },
    ],
});
</script>

<template>
    <div id="skills"></div>
    <div class="heading w-[90%] mx-auto mt-[clamp(18rem,15vw,18rem)]">
        <h1>Skills</h1>
    </div>

    <!-- Desktop View -->
    <div
        class="container-desktop w-[clamp(70%,85%,95%)] max-w-[90rem] min-w-[48rem] mx-auto flex flex-col items-center hidden md:block">
        <!-- First Section: Programming Languages -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center gap-[clamp(1rem,3vw,1.5rem)]">
                <!-- Left Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.programmingSkillsLeft" :key="'left-top-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.programmingSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="table-width w-[clamp(28%,33%,38%)] flex items-center justify-center relative">
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                    <div
                        class="subheading-container mx-[1.5rem] px-[1.5rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg z-10 transition-colors duration-300">
                        <h2
                            class="section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                            Programming Languages
                        </h2>
                    </div>
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                </div>

                <!-- Right Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.programmingSkillsRight"
                                :key="'right-top-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.programmingSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Vertical Connecting Line -->
        <div class="flex justify-center my-[clamp(1.25rem,3vw,2rem)]">
            <div
                class="w-[0.125rem] h-[clamp(3rem,5vw,4rem)] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
            </div>
        </div>

        <!-- Second Section: Web Development -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center gap-[clamp(1rem,3vw,1.5rem)]">
                <!-- Left Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.webSkillsLeft" :key="'left-second-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.webSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="table-width w-[clamp(28%,33%,38%)] flex items-center justify-center relative">
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                    <div
                        class="subheading-container mx-[1.5rem] px-[1.5rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg z-10 transition-colors duration-300">
                        <h2
                            class="section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                            Web Development
                        </h2>
                    </div>
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                </div>

                <!-- Right Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.webSkillsRight" :key="'right-second-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.webSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Vertical Connecting Line -->
        <div class="flex justify-center my-[clamp(1.25rem,3vw,2rem)]">
            <div
                class="w-[0.125rem] h-[clamp(3rem,5vw,4rem)] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
            </div>
        </div>

        <!-- Third Section: Developer Tools -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center gap-[clamp(1rem,3vw,1.5rem)]">
                <!-- Left Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.devToolsSkillsLeft" :key="'left-third-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.devToolsSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="table-width w-[clamp(28%,33%,38%)] flex items-center justify-center relative">
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                    <div
                        class="subheading-container mx-[1.5rem] px-[1.5rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg z-10 transition-colors duration-300">
                        <h2
                            class="section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                            Developer Tools
                        </h2>
                    </div>
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                </div>

                <!-- Right Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.devToolsSkillsRight"
                                :key="'right-third-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.devToolsSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Vertical Connecting Line -->
        <div class="flex justify-center my-[clamp(1.25rem,3vw,2rem)]">
            <div
                class="w-[0.125rem] h-[clamp(3rem,5vw,4rem)] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
            </div>
        </div>

        <!-- Fourth Section: Technologies/Frameworks -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center gap-[clamp(1rem,3vw,1.5rem)]">
                <!-- Left Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.frameworksSkillsLeft"
                                :key="'left-fourth-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.frameworksSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="table-width w-[clamp(28%,33%,38%)] flex items-center justify-center relative">
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                    <div
                        class="subheading-container mx-[1.5rem] px-[1.5rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg z-10 transition-colors duration-300">
                        <h2
                            class="section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                            Technologies & Frameworks
                        </h2>
                    </div>
                    <div
                        class="horizontal-line w-[clamp(2rem,5vw,3rem)] h-[0.125rem] bg-gray-400 light-mode:bg-gray-400 dark:bg-gray-600 transition-colors duration-300">
                    </div>
                </div>

                <!-- Right Table -->
                <div class="table-width w-[clamp(28%,33%,38%)] overflow-x-auto">
                    <table class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.frameworksSkillsRight"
                                :key="'right-fourth-' + index"
                                class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                                :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.frameworksSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="skill-icon ml-[1rem]">
                                </td>
                                <th scope="row"
                                    class="px-[1.5rem] py-[0.75rem] comic-relief-bold font-medium text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap skill-name transition-colors duration-300">
                                    {{ skill.name }}
                                </th>
                                <td class="px-[1.5rem] py-[0.75rem]">
                                    <div
                                        class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                        <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile View -->
    <div class="container-mobile w-[95%] max-w-[40rem] min-w-[20rem] mx-auto flex flex-col items-center md:hidden">
        <!-- Programming Languages Section -->
        <div class="w-full mb-[clamp(2rem,5vw,2.5rem)]">
            <div class="flex justify-center mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                <h2
                    class="px-[1rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                    Programming Languages
                </h2>
            </div>
            <table class="w-full text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.programmingSkillsLeft, ...SkillsSection.programmingSkillsRight]"
                        :key="'mobile-prog-' + index"
                        class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                        :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.programmingSkillsLeft.length + SkillsSection.programmingSkillsRight.length - 1
                        }">
                        <td class="px-[1rem] py-[0.75rem] flex items-center">
                            <img :src="skill.icon" class="skill-icon mr-[0.75rem]">
                            <span
                                class="comic-relief-bold font-medium skill-name text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap transition-colors duration-300">
                                {{ skill.name }}
                            </span>
                        </td>
                        <td class="px-[1rem] py-[0.75rem]">
                            <div
                                class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Web Development Section -->
        <div class="w-full mb-[clamp(2rem,5vw,2.5rem)]">
            <div class="flex justify-center mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                <h2
                    class="px-[1rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                    Web Development
                </h2>
            </div>
            <table class="w-full text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.webSkillsLeft, ...SkillsSection.webSkillsRight]"
                        :key="'mobile-web-' + index"
                        class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                        :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.webSkillsLeft.length + SkillsSection.webSkillsRight.length - 1
                        }">
                        <td class="px-[1rem] py-[0.75rem] flex items-center">
                            <img :src="skill.icon" class="skill-icon mr-[0.75rem]">
                            <span
                                class="comic-relief-bold font-medium skill-name text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap transition-colors duration-300">
                                {{ skill.name }}
                            </span>
                        </td>
                        <td class="px-[1rem] py-[0.75rem]">
                            <div
                                class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Developer Tools Section -->
        <div class="w-full mb-[clamp(2rem,5vw,2.5rem)]">
            <div class="flex justify-center mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                <h2
                    class="px-[1rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                    Developer Tools
                </h2>
            </div>
            <table class="w-full text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.devToolsSkillsLeft, ...SkillsSection.devToolsSkillsRight]"
                        :key="'mobile-devtools-' + index"
                        class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                        :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.devToolsSkillsLeft.length + SkillsSection.devToolsSkillsRight.length - 1
                        }">
                        <td class="px-[1rem] py-[0.75rem] flex items-center">
                            <img :src="skill.icon" class="skill-icon mr-[0.75rem]">
                            <span
                                class="comic-relief-bold font-medium skill-name text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap transition-colors duration-300">
                                {{ skill.name }}
                            </span>
                        </td>
                        <td class="px-[1rem] py-[0.75rem]">
                            <div
                                class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Technologies & Frameworks Section -->
        <div class="w-full mb-[clamp(2rem,5vw,2.5rem)]">
            <div class="flex justify-center mb-[clamp(0.5rem,1.5vw,0.75rem)]">
                <h2
                    class="px-[1rem] py-[0.5rem] bg-gray-100 light-mode:bg-gray-100 dark:bg-gray-700 rounded-lg section-title text-[#5bed7d] light-mode:text-gray-900 transition-colors duration-300">
                    Technologies & Frameworks
                </h2>
            </div>
            <table class="w-full text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.frameworksSkillsLeft, ...SkillsSection.frameworksSkillsRight]"
                        :key="'mobile-frameworks-' + index"
                        class="bg-white light-mode:bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200 transition-colors duration-300"
                        :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.frameworksSkillsLeft.length + SkillsSection.frameworksSkillsRight.length - 1
                        }">
                        <td class="px-[1rem] py-[0.75rem] flex items-center">
                            <img :src="skill.icon" class="skill-icon mr-[0.75rem]">
                            <span
                                class="comic-relief-bold font-medium skill-name text-[#FFDB58] light-mode:text-gray-900 whitespace-nowrap transition-colors duration-300">
                                {{ skill.name }}
                            </span>
                        </td>
                        <td class="px-[1rem] py-[0.75rem]">
                            <div
                                class="w-full bg-gray-200 light-mode:bg-gray-200 rounded-full progress-bar dark:bg-gray-700 transition-colors duration-300">
                                <div class="bg-blue-600 light-mode:bg-blue-600 progress-bar rounded-full dark:bg-blue-500 transition-colors duration-300"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
/* Rounded corners for tables */
.rounded-t-lg td:first-child {
    border-top-left-radius: 0.5rem;
}

.rounded-t-lg td:last-child {
    border-top-right-radius: 0.5rem;
}

.rounded-b-lg td:first-child {
    border-bottom-left-radius: 0.5rem;
}

.rounded-b-lg td:last-child {
    border-bottom-right-radius: 0.5rem;
}

table {
    border-collapse: separate;
    border-spacing: 0;
}

/* Desktop (>1024px) */
.heading-text {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: bold;
    text-align: center;
}

.section-title {
    font-size: clamp(0.875rem, 1.75vw, 1rem);
    font-weight: 600;
    text-align: center;
}

.skill-name {
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
}

.skill-icon {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
}

.progress-bar {
    height: 0.375rem;
}

/* Desktop: Hide horizontal lines for 1025px–1199px */
@media (min-width: 1025px) and (max-width: 1199px) {
    .horizontal-line {
        display: none;
    }

    .subheading-container {
        margin-left: 0;
        margin-right: 0;
    }
}

/* iPad (768px–1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
    .heading-text {
        font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    }

    .section-title {
        font-size: clamp(0.75rem, 1.25vw, 0.875rem);
        text-align: center;
    }

    .skill-name {
        font-size: clamp(0.625rem, 1.25vw, 0.75rem);
    }

    .skill-icon {
        width: 1.75rem;
        height: 1.75rem;
        object-fit: contain;
    }

    .progress-bar {
        height: 0.3125rem;
    }

    .table-width {
        width: clamp(30%, 34%, 38%);
    }

    .gap-\[clamp\(1rem\,3vw\,1\.5rem\)\] {
        gap: clamp(0.75rem, 2.5vw, 1.25rem);
    }

    .my-\[clamp\(1\.25rem\,3vw\,2rem\)\] {
        margin-top: clamp(1rem, 2.5vw, 1.5rem);
        margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
    }

    .mx-\[1\.5rem\] {
        margin-left: 1.25rem;
        margin-right: 1.25rem;
    }

    .px-\[1\.5rem\] {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    .py-\[0\.75rem\] {
        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
    }

    .px-\[1rem\] {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .py-\[0\.5rem\] {
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
    }

    .h-\[clamp\(3rem\,5vw\,4rem\)\] {
        height: clamp(2.5rem, 4vw, 3.5rem);
    }
}

/* Mobile (<768px) */
@media (max-width: 767px) {
    .heading-text {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
    }

    .section-title {
        font-size: clamp(0.625rem, 1.25vw, 0.75rem);
        text-align: center;
    }

    .skill-name {
        font-size: clamp(0.625rem, 1.25vw, 0.75rem);
    }

    .skill-icon {
        width: 1.5rem;
        height: 1.5rem;
        object-fit: contain;
    }

    .progress-bar {
        height: 0.375rem;
    }
}
</style>