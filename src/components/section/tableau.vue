<template>
    <div class="container">
        {{ search }}
        <div class="search_wrap search_wrap_5">
            <Select />
        </div>
        <main class="table">
            <div class="sidebar close ">
                <ul class="nav-links">
                    <li @click="layout = 'riz'" :class="{ active: layout === 'riz' }">
                        <img src="@/assets/images/riz3.png" alt="">
                        <span class="link_name">Riz</span>
                    </li>

                    <li @click="layout = 'oignon'" :class="{ active: layout === 'oignon' }">
                        <img src="@/assets/images/icon1.png" alt="">
                        <span class="link_name">Oignon</span>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
            <div class="two-section">
                <Riz v-if="layout === 'riz'" />
                <Oignon v-if="layout === 'oignon'" />
            </div>
        </main>
    </div>
</template>

<script>
import Select from '../other/select.vue';
import Oignon from '../other/cptOignon.vue';
import Riz from '../other/cptRiz.vue';
export default {
    name: 'SimroClientTableau',
    components: { Select, Oignon, Riz },

    data() {
        return {
            layout: 'riz',
            search: '',
            active: true
        };
    },

    mounted() {
        let sidebar = document.querySelector(".sidebar");
        if (window.screen.width <= 700) {
            sidebar.classList.toggle("close");
        }

    },

    methods: {
        rech() {
            console.log('onjour');
            this.rechdisplay = !this.rechdisplay
        }
    },
};
</script>

<style lang="css" >
.container {
    margin: 0 auto;
    padding: 10px;
}

.search_wrap {
    max-width: 500px;
    width: 100%;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 0 10px;
}

main.table {
    box-shadow: 0px 0px 10px #8888884f;
    overflow: hidden;
    position: relative;
}

.sidebar {

    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: var(--vert);
    transition: all 0.5s ease;
    margin-right: 10px;
    position: absolute;
    z-index: 100;
}


.two-section {
    position: relative;
    height: 100%;
    left: 150px;
    width: calc(100% - 150px);
    position: relative;
}

.sidebar .nav-links {
    overflow: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sidebar.close .nav-links {
    overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
    display: none;
}

.sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
    color: var(--blanc);
    padding-right: 5px;
}

.sidebar .nav-links li:hover {
    background-color: var(--blanc);
    cursor: pointer;
    color: var(--vert);

}
.sidebar .nav-links li img {
    width: 37px;
    height: 37px;
    padding: 5px;
}

.sidebar .nav-links li .link_name {
    font-size: 13px;
    font-weight: 400;
    width: 100%;
}

.sidebar .nav-links li.active {
    background-color: hsl(162.17deg 89.52% 62.43% / 52%);
    color: var(--blanc);
}

@media (max-width: 768px) {
    .sidebar.close {
        width: 30px;
    }

    .sidebar.close~.two-section {
        left: 30px;
        width: calc(100% - 30px);
    }

    .sidebar.close .nav-links li .link_name {
        opacity: 0;
        pointer-events: none;
    }
}
</style>