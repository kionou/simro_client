<template>
    <div class="container">
        <main class="table">
        <section class="table__header">
            <h1>Magasin du centre</h1>  
            <div class="btn">
                <button @click="layout = 'prix'">
                    Prix
                </button>
                <button @click="layout = 'stock'">
                    Stock
                </button>
            </div>
        </section>

        <section class="table__body" v-if="layout === 'prix'" >
            <table>
                <thead>
                    <tr>
                        <th> Ville </th>
                        <th> Oignon blanc </th>
                        <th> Oignon violet </th>
                        <th> Riz du nord </th>
                        <th> Riz du sud </th>
                     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Yaoude I </td>
                        <td>130 F CFA</td>
                        <td> 130 F CFA </td>
                        <td> 130 F CFA </td>
                        <td>
                            130 F CFA
                        </td>
                       
                    </tr>
                    <tr>
                        <td> Yaoude II </td>
                        <td>120 F CFA</td>
                        <td> 130 F CFA </td>
                        <td> 190 F CFA </td>
                        <td>
                            90 F CFA
                        </td>
                       
                    </tr>
                

                    
                </tbody>
            </table>
        </section>

        <section class="table__body"  v-if="layout === 'stock'" >
            <table>
                <thead>
                    <tr>
                        <th> Ville </th>
                        <th> Oignon blanc </th>
                        <th> Oignon violet </th>
                        <th> Riz du nord </th>
                        <th> Riz du sud </th>
                     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Yaoude I </td>
                        <td>207 T</td>
                        <td> 420 T </td>
                        <td> 240 T </td>
                        <td>
                            20 T
                        </td>
                       
                    </tr>
                    <tr>
                        <td> Yaoude II </td>
                        <td>200 T</td>
                        <td> 205 T</td>
                        <td> 320 T </td>
                        <td>
                            240 T
                        </td>
                       
                    </tr>
                

                    
                </tbody>
            </table>
        </section>
    </main>
    </div>
</template>

<script>
export default {
    name: 'SimroClientTableau',

    data() {
        return {
            layout:'prix'
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>


.container{
    max-width: var(--max-width);
    margin: 0 auto;

}


main.table {
    /* width: 82vw;
    height: 90vh; */
    background-color: #fff5;

    backdrop-filter: blur(7px);
    box-shadow: 0 .4rem .8rem #0005;
    border-radius: .8rem;

    overflow: hidden;
}

.table__header {
    width: 100%;
    height: 10%;
    background-color: #fff4;
    padding: .8rem 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.table__header .btn {
    width: 35%;
    background-color: #fff5;
    padding: 0 .8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.table__header .btn button{

    
    padding: 0.8rem 2rem;
    border-radius: 10px;
    border: none;
    background-color: var(--vert);
    color: var(--blanc);
    cursor: pointer;

}






.table__body {
    width: 95%;
    max-height: calc(89% - 1.6rem);
    background-color: #fffb;

    margin: .8rem auto;
    border-radius: .6rem;

    overflow: auto;
    overflow: overlay;
}

.table__body::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
    border-radius: .5rem;
    background-color: #0004;
    visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{ 
    visibility: visible;
}

table {
    width: 100%;
}



table, th, td {
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
}

thead th {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #d5d1defe;
    cursor: pointer;
    text-transform: capitalize;
}

tbody tr:nth-child(even) {
    background-color: #0000000b;
}

tbody tr {
    --delay: .1s;
    transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
    opacity: 0;
    transform: translateX(100%);
}

tbody tr:hover {
    background-color: #fff6 !important;
}

tbody tr td,
tbody tr td p,
tbody tr td img {
    transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
    padding: 0;
    font: 0 / 0 sans-serif;
    transition: .2s ease-in-out .5s;
}









@media (max-width: 1000px) {
    td:not(:first-of-type) {
        min-width: 12.1rem;
    }
}









.export__file {
    position: relative;
}

.export__file .export__file-btn {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    /* background: #fff6 url(images/export.png) center / 80% no-repeat; */
    border-radius: 50%;
    transition: .2s ease-in-out;
}

.export__file .export__file-btn:hover { 
    background-color: #fff;
    transform: scale(1.15);
    cursor: pointer;
}



.export__file .export__file-options {
    position: absolute;
    right: 0;
    
    width: 12rem;
    border-radius: .5rem;
    overflow: hidden;
    text-align: center;

    opacity: 0;
    transform: scale(.8);
    transform-origin: top right;
    
    box-shadow: 0 .2rem .5rem #0004;
    
    transition: .2s;
}

.export__file input:checked + .export__file-options {
    opacity: 1;
    transform: scale(1);
    z-index: 100;
}

.export__file .export__file-options label{
    display: block;
    width: 100%;
    padding: .6rem 0;
    background-color: #f2f2f2;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    transition: .2s ease-in-out;
}

.export__file .export__file-options label:first-of-type{
    padding: 1rem 0;
    background-color: #86e49d !important;
}

.export__file .export__file-options label:hover{
    transform: scale(1.05);
    background-color: #fff;
    cursor: pointer;
}

.export__file .export__file-options img{
    width: 2rem;
    height: auto;
}


</style>