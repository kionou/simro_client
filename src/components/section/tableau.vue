<template>
    <div class="container">
        {{ search }}
        <div class="search_wrap search_wrap_5">
				<input type="text" class="input" placeholder="Effectuez une recherche..." v-model="search" @click="rech">
				<div class="btn">
					<i class="fa-solid fa-magnifying-glass"></i>
				</div>
                <div class="dropdown" v-if="rechdisplay">
                    <ul class="liste">
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>

                    </ul>
                </div>
		</div>
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
            layout:'prix',
            search:'',
            rechdisplay:false
        };
    },

    mounted() {
        
    },

    methods: {
        rech () {
            console.log('onjour');
            this.rechdisplay = true
        
        }
    },
};
</script>

<style lang="css" scoped>


.container{
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 10px;
}

.search_wrap{
    max-width: 500px;
	width: 100%;
    /* height: 100px; */
	margin: 15px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 10px;
}
.search_wrap  .input{
	width: 100%;
	height: 48%;
	padding: 10px 20px;
	border-radius: 23px;
	font-size: 14px;
    border: 0;
	outline: none;
	color: #5f6368ff;
    box-shadow:0px 0px 10px #8888884f;
}

.search_wrap .btn{
	position: absolute;
	top: 0;
	right: 0;
	width: 60px;
	height: 100%;
	z-index: 1;
	cursor: pointer;
    color: #5f6368ff;
}

.search_wrap.search_wrap_5  .btn{
	width: 45px;
	height: 45px;
	top: 0px;
    left: 4px;
	border-radius: 23px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.search_wrap.search_wrap_5  .input{
	padding-left: 50px;
}

.search_wrap .dropdown{
    width: 100%;
    height: 300px;
    /* border: 1px solid red; */
    margin-top: 15px;
    padding: 15px 10px;
    box-shadow:0px 0px 10px #8888884f;
    font-weight: 600;
    font-size: 16px;
    overflow: auto;

}
.search_wrap .dropdown .liste{

display: flex;
flex-direction: column;
    align-items: center;
    list-style-type: none;
}
.search_wrap .dropdown .liste li{
    text-decoration: none;
    /* border: 1px solid blue; */
    width: 100%;
    /* text-align: center; */
    padding: 10px 0;
    margin-bottom: 10px;

}
main.table {
    /* box-shadow: 0 .4rem .8rem #0005; */
    box-shadow:0px 0px 10px #8888884f;
    overflow: hidden;
}

.table__header {
    width: 100%;
    padding: .8rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 19px;
    text-transform: uppercase;
}

.table__header .btn {
    width: 100%;
    max-width: 400px;
    padding: 0 .8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.table__header .btn button{
    padding: 15px 50px;
    border-radius: 30px;
    border: none;
    background-color: var(--vert);
    color: var(--blanc);
    cursor: pointer;
    margin-right: 10px;

}
.table__header .btn button:hover{
    background-color: var(--blanc);
    color: var(--vert);
    cursor: pointer;
    border: 1px solid var(--vert);
}
@media (max-width: 768px) {
    .table__header {
  
    font-size: 14px;
}

.table__header .btn {
    width: initial;
    max-width: 300px;
    flex-direction: column;
    margin-left: 15px;
}

.table__header .btn button{
    margin-bottom: 10px;
    margin-right: 0px;
    padding: 10px 40px;

}
}
@media (max-width: 375px) {
    .table__header {
  
  font-size: 11px;
}
.table__header {

    padding: .8rem 0.5rem;
}
}





.table__body {
    width: 95%;
    max-height: calc(89% - 1.6rem);
    margin: .8rem auto;
    /* border-radius: .6rem; */
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
    background-color: var(--vert);
    text-transform: capitalize;
    color: var(--blanc);
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

/* .export__file {
    position: relative;
}

.export__file .export__file-btn {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background: #fff6 url(images/export.png) center / 80% no-repeat;
    border-radius: 50%;
    transition: .2s ease-in-out;
}

.export__file .export__file-btn:hover { 
    background-color: #fff;
    transform: scale(1.15);
    cursor: pointer;
} */

/* .export__file .export__file-options {
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
} */

/* .export__file input:checked + .export__file-options {
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
} */

/* .export__file .export__file-options label:first-of-type{
    padding: 1rem 0;
    background-color: #86e49d !important;
}

.export__file .export__file-options label:hover{
    transform: scale(1.05);
    background-color: #fff;
    cursor: pointer;
} */

/* .export__file .export__file-options img{
    width: 2rem;
    height: auto;
} */


</style>