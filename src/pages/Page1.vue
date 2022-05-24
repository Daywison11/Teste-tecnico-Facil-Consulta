<template>
  <main
    class="bg-secondary m-auto ps-5 py-5 mt-5 "
    style="max-width:900px;"
  >
    <h1 class="fs-comfortaa text-primary text-700">Sobre o profissional</h1>
    <div class="d-flex overflow-hidden justify-content-between align-items-center ">
      <form
        action="/Pagina2"
        class="mt-5 d-flex flex-column fs-OpenSans fs-6 mobile"
      >
        <h2 class="fs-OpenSans fs-4 mb-4">Dados do profissional</h2>
        <label for="nome">Nome completo*</label>
        <input
          type="text"
          name="nome "
          placeholder="digite o nome completo"
          class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-105"
          required
        >

          <label for="CPf">CPF*</label>
          <input
            type="number"
            name="cpf"
            placeholder="Digite um CPF"
            class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-85"
            required
          >

            <label for="cel">Número de celular*</label>
            <input
              type="tel"
              name="cel"
              placeholder="(00) 0 0000-0000"
              class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-85"
              required
            >

              <div class="d-flex justify-content-between w-105">
                <div>
                  <label for="estado">Estado*</label><br>
                  <select
                    name="estado"
                    class="bdr-5 bd-primary fs-6 p-1 ps-3 me-1"
                  >
                    <option
                      value="0"
                      selected
                    >Selecione</option>
                      <option value="Amapá">Amapá</option>
                      <option value="Amapá">amazonas</option>
                      <option value="Amapá">maranhãe</option>
                      <option value="Amapá">Minas</option>
                      </select>
                </div>

                <div>
                  <label for="Cidade">cidade*</label><br>
                  <select
                    name="estado"
                    class="bdr-5 bd-primary fs-6 p-1 ps-3 ms-1"
                    placeholder="selecione"
                  >
                    <option value="0">Selecione</option>
                    <option value="Amapá">Rio de janeiro</option>
                    <option value="Amapá">belo horizonte</option>
                    <option value="Amapá">gonhães</option>
                    <option value="Amapá">ribeirao das neves</option>
                    </select>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-4">
                <div
                  class="progress  bdr-5"
                  style="width:80%"
                >
                  <div
                    class="progress-bar w-50 bg-primary "
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
    </div>
    <span class="text-primary p-1 text-700">1 de 2</span>
    </div>

    <Buttom mensagem="Proximo" />

    </form>
    <img
      src="@/assets/desktop-pagina-1.png"
      alt="img"
      class="img"
    >
      </div>
      </main>

</template>

<script>
import Buttom from "../components/Buttom.vue";

export default {
  name: "page1",
  components: {
    Buttom,
  },
};
</script>


<style scoped>
@media (max-width: 650px) {
    .img{
      display: none;
      width: 0px;
    }
    .mobile{
      width: 90%;
    }
}


main {
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.432);
}
.img {
  width: 55%;
}
</style>