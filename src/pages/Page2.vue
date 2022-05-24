<template>
    <main class="m-auto" style="max-width:950px" >
        <div class="pt-2">
            <a href="/" class="text-decoration-none text-black">
                <i
                    class='bx bx-chevron-left fs-1'
                ></i>
            </a>
        </div>
        <div
            class="bg-secondary m-auto ps-5 py-5 mt-3 mb-3 section"
        >
            <h1 class="fs-comfortaa text-primary text-700">Sobre o atendimento</h1>
            <div class="d-flex overflow-hidden justify-content-between align-items-center">
                <form
                    action="/Pagina2"
                    class="mt-5 d-flex flex-column fs-OpenSans fs-6 mobile"
                >
                    <h2 class="fs-OpenSans fs-4 mb-4">Detalhes do atendimento</h2>
                    <label for="nome">Especialidade principal*</label>
                    <select
                        name="especialidade"
                        placeholder="Selecione a especialidade"
                        class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-105"
                    >
                        <option
                            value=""
                            disabled
                            selected
                        >Selecione a especialidade</option>
                            <option value="clinico">clinico</option>
                            <option value="pediatra">pediatra</option>
                            </select>
                            <label for="preço">informe o preço da consulta*</label>
                            <div class="d-flex align-items-center mb-4">
                                <label
                                    for="preço"
                                    class="text-white bg-primary preço cifr p-2 text-500 fs-OpenSans"
                                >R$</label>
                                    <input
                                        type="number"
                                        name="preço"
                                        placeholder="valor"
                                        class=" bd-primary fs-6 preço ps-3 w-85 valor"
                                        required
                                    >
                            </div>
                            <h3 class="fs-6 mb-4">formas de pagamento da consulta*</h3>
                            <div class="d-flex align-items-center bg-secondary-1 cardd p-3 px-4 mb-3">
                                <input
                                    type="checkbox"
                                    name="pix"
                                    class="me-4 check"
                                    id="pix"
                                    
                                >
                                    <label
                                        for="pix"
                                        class="fs-6 text-500"
                                    > Pix </label>
                            </div>
                            <div class="d-flex align-items-center bg-secondary-1 cardd p-3 px-4 mb-3">
                                <input
                                    type="checkbox"
                                    name="dinheiro"
                                    class="me-4 check"
                                    id="dinheiro"
                                    
                                >
                                    <label
                                        for="dinheiro"
                                        class="fs-6 text-500"
                                    > Em dinheiro </label>
                            </div>
                            <div class="bg-secondary-1 cardd p-3 px-4 mb-3">
                                <div class="d-flex align-items-center">
                                    <input
                                        type="checkbox"
                                        name="credito"
                                        class=" check"
                                        id="credito"
                                        
                                    >
                                        <label
                                            for="credito"
                                            class="fs-6 text-500 ms-4"
                                        > Cartão de credito </label>
                                </div>
                                <div style="display:none">
                                    <h4 class="fs-7 ms-4 ps-3 mt-4 text-500">parcelamento em</h4>
                                    <div class="fs-7 ms-4 ps-3 mt-4 text-500">
                                        <input
                                            type="radio"
                                            name="parcelas"
                                            id="1x"
                                            class="me-2 mb-3"
                                        >
                                            <label for="1x">1x, sem jurus</label>
                                            <br>
                                            <input
                                                type="radio"
                                                name="parcelas"
                                                id="2x"
                                                class="me-2 mb-3"
                                            >
                                                <label for="2x">2x, sem jurus</label>
                                                <br>
                                                <input
                                                    type="radio"
                                                    name="parcelas"
                                                    id="3x"
                                                    class="me-2 mb-3"
                                                >
                                                    <label for="3x">3x, sem jurus</label>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-4">
                                <div
                                    class="progress  bdr-5"
                                    style="width:80%"
                                >
                                    <div
                                        class="progress-bar w-100 bg-primary "
                                        role="progressbar"
                                    ></div>
            </div>
            <span class="text-primary p-1 text-700 text-nowrap ">2 de 2</span>
            </div>
            <Buttom mensagem="Próximo"/>
            </form>
            <img
                src="@/assets/desktop-pagina-2.png"
                alt="img"
                class="img "
            >
                </div>
                </div>
    </main>

</template>
    


<script>
import { ref } from 'vue'

import Buttom from "../components/Buttom.vue";

export default {
  name: "Page2",
  components: {
    Buttom,
  },

};
</script>

<style>
.section {
  border-radius: 10px;
}
form {
  width: 50%;
}
.img {
  max-width: 50%;
}

select:invalid {
  color: rgb(128, 128, 128);
}

.preço {
  height: 35px;
}
.valor {
  border-radius: 0px 5px 5px 0px;
}
.cifr {
  border-radius: 5px 0px 0px 5px;
  width: 35px;
  font-family: Arial, Helvetica, sans-serif;
}

.cardd {
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.404);
  border-radius: 5px;
}
.check {
  height: 17px;
  width: 17px;
}

.fs-7 {
  font-size: 15px;
}

.return{
    width: 100px;
}

@media (max-width: 620px) {
    .img{
      display: none;
      width: 0px;
    }
    .mobile{
      width: 90%;
    }
}
</style>
