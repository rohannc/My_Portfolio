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
        view: "",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=46669&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=43966&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "EUREKA - Mystery Solving Competition 2023",
        institute: "Ramakrishna Mission Vivekananda Centenary College, Rahara, Kolkata",
        description: "",
        medal: "Gold",
        participation: "Team of Two",
        view: "",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/"
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
        view: "",
        linkedin: "https://www.linkedin.com/posts/rohanchakraborty0108_srijanju-mca-jumca-activity-7319796457308311552-JpnY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmvFV8ByEhnQD5-VmVV6_1rsbq_VFrDukg"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=YpZH52a9GdnR&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "Error 404, Envision 2k25",
        institute: "Ramakrishna Mission Residential College, Narendrapur, Kolkata",
        description: "",
        medal: "Gold",
        participation: "Single Player",
        view: "",
        linkedin: "https://www.linkedin.com/posts/rohanchakraborty0108_codingcompetition-error404-rkmrc-activity-7314332325641613312--KBI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmvFV8ByEhnQD5-VmVV6_1rsbq_VFrDukg"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=KL1txQ7JoYvd&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "CodeCrafter, IgniteX 1.0",
        institute: "International Institute of Management, Kolkata",
        description: "",
        medal: "Bronze",
        participation: "Single Player",
        view: "",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/"
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=J7CvaM9VdM3e&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=44831&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "Rahasyabhedi - Mystery Solving Competition, Nirdesh 2024",
        institute: "Ramakrishna Mission Vivekananda Centenary College, Rahara, Kolkata",
        description: "",
        medal: "Bronze",
        participation: "Single Player",
        view: "",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/"
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
        view: "",
        linkedin: "https://www.linkedin.com/in/rohanchakraborty0108/"
    }
];

// Use reactive to make tooltipVisible reactive, scoped to each v-for item
const tooltipVisible = reactive({});

const showTooltip = (item, buttonId) => {
    if (!tooltipVisible[item]) {
        tooltipVisible[item] = { 1: false, 2: false, 3: false, 4: false };
    }
    // Reset all tooltips for this item
    tooltipVisible[item][1] = false;
    tooltipVisible[item][2] = false;
    tooltipVisible[item][3] = false;
    tooltipVisible[item][4] = false;
    // Show the specific tooltip
    tooltipVisible[item][buttonId] = true;
};

const hideTooltip = (item, buttonId) => {
    if (tooltipVisible[item]) {
        tooltipVisible[item][buttonId] = false;
    }
};
</script>

<template>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; padding: 10px;" class="mx-35">
        <div v-for="(item, index) in achievements" :key="index"
            style="max-width: 22rem; background-color: rgb(28, 36, 50); border: 1px solid rgb(28, 36, 50); border-radius: 1rem; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); margin-bottom: 15px; display: flex; flex-direction: column; min-height: 300px; position: relative;">
            <div>
                <div class="mx-17 mt-5" style="display: flex; justify-content: space-between; padding: 10px 5px;">
                    <!-- Medal Button -->
                    <div style="position: relative;" @mouseover="showTooltip(index, 1)"
                        @mouseleave="hideTooltip(index, 1)">
                        <button
                            style="background: none; border: none; cursor: pointer; padding: 3px; transition: transform 0.2s;">
                            <img :src="item.icon1" alt="Medal Icon"
                                style="width: 70px; height: auto; border-radius: 0.5rem 0 0 0;" />
                        </button>
                        <div v-if="item.medal !== '' && tooltipVisible[index]?.[1]"
                            style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); z-index: 1000; padding: 6px 10px; font-size: 14px; color: #fff; background-color: #293246; border-radius: 0.25rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: opacity 0.3s; opacity: 1; white-space: nowrap;">
                            {{ item.medal }}
                            <div
                                style="position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); border-width: 5px; border-style: solid; border-color: #293246 transparent transparent transparent;">
                            </div>
                        </div>
                    </div>
                    <!-- Profile Button -->
                    <div style="position: relative;" @mouseover="showTooltip(index, 2)"
                        @mouseleave="hideTooltip(index, 2)">
                        <button
                            style="background: none; border: none; cursor: pointer; padding: 3px; transition: transform 0.2s;">
                            <img :src="item.icon2" alt="Profile Icon"
                                style="width: 70px; height: auto; border-radius: 0 0.5rem 0 0;" />
                        </button>
                        <div v-if="item.medal !== '' && tooltipVisible[index]?.[2]"
                            style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); z-index: 1000; padding: 6px 10px; font-size: 14px; color: #fff; background-color: #293246; border-radius: 0.25rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: opacity 0.3s; opacity: 1; white-space: nowrap;">
                            {{ item.participation }}
                            <div
                                style="position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); border-width: 5px; border-style: solid; border-color: #293246 transparent transparent transparent;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style="padding: 1rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <h5 style="margin-bottom: 0.2rem; font-size: 1.4rem; font-weight: 700;"
                        :style="{ color: item.color }">
                        {{ item.position }}
                    </h5>
                    <h5 style="margin-bottom: 0.7rem; font-size: 1.1rem; font-weight: 600; color: #d35757;">
                        {{ item.name }}
                    </h5>
                    <h3 style="margin-bottom: 1.5rem; font-size: 0.9rem; font-weight: 400; color: #16e607;">
                        {{ item.institute }}
                    </h3>
                </div>
                <div style="display: flex; gap: 80px; justify-content: center; margin-top: auto; padding-top: 1rem;">
                    <!-- View Button -->
                    <div style="position: relative;" @mouseover="showTooltip(index, 3)"
                        @mouseleave="hideTooltip(index, 3)">
                        <button
                            style="background: none; border: none; cursor: pointer; padding: 3px; transition: transform 0.2s;">
                            <img src="https://img.icons8.com/?size=100&id=Psrfh0UtjRyD&format=png&color=000000"
                                alt="View Icon" style="width: 40px; height: auto; padding-top: 4px;" />
                        </button>
                        <div v-if="tooltipVisible[index]?.[3]"
                            style="position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); z-index: 1000; padding: 6px 10px; font-size: 14px; color: #fff; background-color: #293246; border-radius: 0.25rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: opacity 0.3s; opacity: 1; white-space: nowrap;">
                            View
                            <div
                                style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 5px; border-style: solid; border-color: #293246 transparent transparent transparent;">
                            </div>
                        </div>
                    </div>
                    <!-- LinkedIn Button -->
                    <div style="position: relative;" @mouseover="showTooltip(index, 4)"
                        @mouseleave="hideTooltip(index, 4)">
                        <button
                            style="background: none; border: none; cursor: pointer; padding: 3px; transition: transform 0.2s;">
                            <img src="https://img.icons8.com/?size=100&id=67570&format=png&color=000000"
                                alt="LinkedIn Icon" style="width: 50px; height: auto;" />
                        </button>
                        <div v-if="tooltipVisible[index]?.[4]"
                            style="position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); z-index: 1000; padding: 6px 10px; font-size: 14px; color: #fff; background-color: #293246; border-radius: 0.25rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: opacity 0.3s; opacity: 1; white-space: nowrap;">
                            Visit LinkedIn
                            <div
                                style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 5px; border-style: solid; border-color: #293246 transparent transparent transparent;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-buttons {
    margin-top: auto;
    padding-top: 1rem;
}
</style>