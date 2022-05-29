<template>
    <div
        class="m-auto"
        style="max-width:950px"
    >
        <div class="pt-2">
            <a
                href="/"
                class="text-decoration-none text-black"
            >
                <i
                    class='bx bx-chevron-left fs-1'
                ></i>
                    </a>
        </div>
        <div class="bg-secondary m-auto ps-5 py-5 mt-3 mb-3 section" >
            <h1 class="fs-comfortaa text-primary text-700">Revisão do cadastro</h1>
            <div class="d-flex overflow-hidden justify-content-between align-items-center">
                <form
                    action="/Pagina2"
                    class="mt-5 d-flex flex-column fs-OpenSans fs-6 mobile"
                >
                    <h2 class="fs-5 text-600">Nome completo</h2>
                    <p class="mb-4">Lorem ipsum dolor sit amet.</p>

                    <h2 class="fs-5 text-600">Número de celular ou telefone</h2>
                    <p>(00) 0 0000-0000</p>

                    <h2 class="fs-5 text-600">Estado/Cidade</h2>
                    <p class="mb-4">Lorem, ipsum dolor.</p>

                    <h2 class="fs-5 text-600">Especialidade principal</h2>
                    <p class="mb-4">Lorem</p>

                    <h2 class="fs-5 text-600">Preço por consulta</h2>
                    <p class="mb-4">R$200,00</p>

                    <h2 class="fs-5 text-600">Formas de pagamento da consulta</h2>
                    <p class="mb-4">Lorem ipsum dolor sit amet consectetur.</p>

                    <Buttom
                        mensagem='CADASTRAR PROFICIONAL'
                        class="bg-terciary-1 fs-5 p-1 text-black text-500"
                    />

                    <a
                        href="#"
                        class="text-decoration-none text-primary fs-5 m-auto mt-2 fs-comfortaa text-700"
                    >Edtar cadastro</a>
                        </form>
                        <img
                            src="@/assets/desktop-pagina-3.png"
                            alt="img"
                            class="img "
                        >
            </div>
        </div>
        </div>

</template>
    


<script>
import { ref } from "vue";

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
  font-family: "Open Sans", sans-serif;
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
