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
    <div class="heading w-[90%] mx-auto mt-45">
        <h1>Skills</h1>
    </div>

    <!-- Desktop View -->
    <div class="w-[80%] mx-auto flex flex-col items-center hidden md:block">
        <!-- First Section: Programming Languages -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center space-x-4">
                <!-- Left Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.programmingSkillsLeft" :key="'left-top-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.programmingSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="w-1/3 flex items-center relative">
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                    <div class="mx-4 px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg z-10">
                        <h2 class="text-lg font-semibold text-gray-900" style="color: #5bed7d;">
                            Programming Languages
                        </h2>
                    </div>
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                </div>

                <!-- Right Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.programmingSkillsRight"
                                :key="'right-top-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.programmingSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
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
        <div class="flex justify-center my-5">
            <div class="w-0.5 h-16 bg-gray-400 dark:bg-gray-600"></div>
        </div>

        <!-- Second Section: Web Development -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center space-x-4">
                <!-- Left Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.webSkillsLeft" :key="'left-second-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.webSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="w-1/3 flex items-center relative">
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                    <div class="mx-4 px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg z-10">
                        <h2 class="text-lg font-semibold text-gray-900" style="color: #5bed7d;">
                            Web Development
                        </h2>
                    </div>
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                </div>

                <!-- Right Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.webSkillsRight" :key="'right-second-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.webSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
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
        <div class="flex justify-center my-5">
            <div class="w-0.5 h-16 bg-gray-400 dark:bg-gray-600"></div>
        </div>

        <!-- Third Section: Developer Tools -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center space-x-4">
                <!-- Left Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.devToolsSkillsLeft" :key="'left-third-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.devToolsSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="w-1/3 flex items-center relative">
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                    <div class="mx-4 px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg z-10">
                        <h2 class="text-lg font-semibold text-gray-900" style="color: #5bed7d;">
                            Developer Tools
                        </h2>
                    </div>
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                </div>

                <!-- Right Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.devToolsSkillsRight"
                                :key="'right-third-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.devToolsSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
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
        <div class="flex justify-center my-5">
            <div class="w-0.5 h-16 bg-gray-400 dark:bg-gray-600"></div>
        </div>

        <!-- Fourth Section: Technologies/Frameworks -->
        <div class="relative overflow-x-auto sm:rounded-lg w-full">
            <div class="flex justify-center items-center space-x-4">
                <!-- Left Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.frameworksSkillsLeft"
                                :key="'left-fourth-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.frameworksSkillsLeft.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                            :style="{ width: skill.percentage + '%' }"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Middle Heading with Lines -->
                <div class="w-1/3 flex items-center relative">
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                    <div class="mx-4 px-6 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg z-10">
                        <h2 class="text-lg font-semibold text-gray-900" style="color: #5bed7d;">
                            Technologies & Frameworks
                        </h2>
                    </div>
                    <div class="flex-grow h-0.5 bg-gray-400 dark:bg-gray-600"></div>
                </div>

                <!-- Right Table -->
                <div class="w-1/3 overflow-x-auto">
                    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr v-for="(skill, index) in SkillsSection.frameworksSkillsRight"
                                :key="'right-fourth-' + index"
                                class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                                    'rounded-t-lg': index === 0,
                                    'rounded-b-lg': index === SkillsSection.frameworksSkillsRight.length - 1
                                }">
                                <td>
                                    <img :src="skill.icon" class="h-8 w-8 ml-4">
                                </td>
                                <th scope="row"
                                    class="px-6 py-3 comic-relief-bold font-medium text-gray-900 whitespace-nowrap"
                                    style="color: #ff6600;">
                                    {{ skill.name }}
                                </th>
                                <td class="px-6 py-3">
                                    <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
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
    <div class="w-[90%] mx-auto flex flex-col items-center md:hidden">
        <!-- Programming Languages Section -->
        <div class="w-full mb-8">
            <div class="flex justify-center mb-2">
                <h2 class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-base font-semibold text-gray-900"
                    style="color: #5bed7d;">
                    Programming Languages
                </h2>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.programmingSkillsLeft, ...SkillsSection.programmingSkillsRight]"
                        :key="'mobile-prog-' + index"
                        class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.programmingSkillsLeft.length + SkillsSection.programmingSkillsRight.length - 1
                        }">
                        <td class="px-4 py-3 flex items-center">
                            <img :src="skill.icon" class="h-6 w-6 mr-2">
                            <span class="comic-relief-bold font-medium text-sm text-gray-900 whitespace-nowrap"
                                style="color: #ff6600;">{{ skill.name }}</span>
                        </td>
                        <td class="px-4 py-3">
                            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Web Development Section -->
        <div class="w-full mb-8">
            <div class="flex justify-center mb-2">
                <h2 class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-base font-semibold text-gray-900"
                    style="color: #5bed7d;">
                    Web Development
                </h2>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.webSkillsLeft, ...SkillsSection.webSkillsRight]"
                        :key="'mobile-web-' + index"
                        class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.webSkillsLeft.length + SkillsSection.webSkillsRight.length - 1
                        }">
                        <td class="px-4 py-3 flex items-center">
                            <img :src="skill.icon" class="h-6 w-6 mr-2">
                            <span class="comic-relief-bold font-medium text-sm text-gray-900 whitespace-nowrap"
                                style="color: #ff6600;">{{ skill.name }}</span>
                        </td>
                        <td class="px-4 py-3">
                            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Developer Tools Section -->
        <div class="w-full mb-8">
            <div class="flex justify-center mb-2">
                <h2 class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-base font-semibold text-gray-900"
                    style="color: #5bed7d;">
                    Developer Tools
                </h2>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.devToolsSkillsLeft, ...SkillsSection.devToolsSkillsRight]"
                        :key="'mobile-devtools-' + index"
                        class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.devToolsSkillsLeft.length + SkillsSection.devToolsSkillsRight.length - 1
                        }">
                        <td class="px-4 py-3 flex items-center">
                            <img :src="skill.icon" class="h-6 w-6 mr-2">
                            <span class="comic-relief-bold font-medium text-sm text-gray-900 whitespace-nowrap"
                                style="color: #ff6600;">{{ skill.name }}</span>
                        </td>
                        <td class="px-4 py-3">
                            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Technologies & Frameworks Section -->
        <div class="w-full mb-8">
            <div class="flex justify-center mb-2">
                <h2 class="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-base font-semibold text-gray-900"
                    style="color: #5bed7d;">
                    Technologies & Frameworks
                </h2>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr v-for="(skill, index) in [...SkillsSection.frameworksSkillsLeft, ...SkillsSection.frameworksSkillsRight]"
                        :key="'mobile-frameworks-' + index"
                        class="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200" :class="{
                            'rounded-t-lg': index === 0,
                            'rounded-b-lg': index === SkillsSection.frameworksSkillsLeft.length + SkillsSection.frameworksSkillsRight.length - 1
                        }">
                        <td class="px-4 py-3 flex items-center">
                            <img :src="skill.icon" class="h-6 w-6 mr-2">
                            <span class="comic-relief-bold font-medium text-sm text-gray-900 whitespace-nowrap"
                                style="color: #ff6600;">{{ skill.name }}</span>
                        </td>
                        <td class="px-4 py-3">
                            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                    :style="{ width: skill.percentage + '%' }"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
/* Ensure rounded corners for the first and last rows of each table */
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

/* Ensure the table cells respect the border radius */
table {
    border-collapse: separate;
    border-spacing: 0;
}
</style>