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
          id="input_name"
          v-on:change="nomevalidate"
          v-model="nome"
        >
          <p
            id="erroName"
            class="mensageErro"
          ></p>

            <label for="CPf">CPF*</label>

            <input
              class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-85"
              v-mask="['###.###.###-##']"
              placeholder="Digite um CPF"
              required
              name="cpf"
              id="inputCpf"
              v-model="cpf"
              v-on:change="cpfvalidate"
            >
              <p
                id="demo"
                class="mensageErro"
              ></p>

                <label for="cel">Número de celular*</label>
                <input
                  v-mask="['(##) # ####-####']"
                  type="tel"
                  name="cel"
                  placeholder="(00) 0 0000-0000"
                  class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-85"
                  required
                  id="input_cell"
                  v-model="celular"
                  v-on:change="cellValidate"
                >
                  <p
                    id="erroCell"
                    class="mensageErro"
                  ></p>

                    <div class="d-flex justify-content-between w-105">
                      <div>
                        <label for="estado">Estado*</label><br>
                        <select
                          name="estado"
                          class="bdr-5 bd-primary fs-6 p-1 ps-3 me-1"
                          v-on:change="estadoselect"
                          v-model="input_estado"
                          placeholder="Selecione um estado"
                        >
                          <option
                            value=""
                            selected
                            disabled
                          >Selecione</option>
                            <option
                              :value="estado.id"
                              :id="estado.id"
                              v-for="estado of estado"
                              v-bind:key="estado.id"
                            >{{estado.nome}}</option>
                              </select>
                      </div>

                      <div>
                        <label for="cidade">cidade*</label><br>
                        <select
                          name="estado"
                          class="bdr-5 fs-6 p-1 ps-3 ms-1 bd-primary"
                          placeholder="selecione"
                          id="cidades"
                          disabled
                          v-model="cidadeselect"
                        >
                          <option
                            value=""
                            disabled
                            selected
                          >Selecione</option>
                            <option
                              :value="cidade.nome"
                              v-for="cidade of cidade"
                              :key="cidade.id"
                            >{{cidade.nome}}</option>
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

    <Buttom
      mensagem="Proximo"
      id="submit"
      v-on:click="onsubmit"
    />
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
import api from "../services/api.js";

export default {
  name: "page1",
  components: {
    Buttom,
  },

  data() {
    return {
      cidadeselect: "",
      cidade: "",
      cpf: "",
      nome: "",
      celular: "",

      estado: "",
      input_estado: "",
      profissionais: [],
    };
  },

  mounted() {
    //buca por todos os estados
    api.estado().then(res => {
      this.estado = res.data;
    });

    api.profissionais().then(res => {
      this.profissionais = res.data;
    });
  },

  methods: {
    estadoselect() {
      //ativa o input caso o estado ja esteja selecionado
      if (this.input_estado > 0) {
        var cdd = document.getElementById("cidades");
        cdd.disabled = false;
      }
      //Busca por todas as cidades que tem na api comforme o estado selecionado
      api.cidade(this.input_estado).then(res => {
        this.cidade = res.data;
      });
    },

    cpfvalidate() {
      this.cpf = this.cpf.replace(/[^\d]+/g, "");

      //percorre todos os profissionais verifica se o cpf digitado ja esta cadastrado
      var contador = 0;
      while (contador < this.profissionais.length) {
        //se sim exibe mensagem de erro e bloqueia o submit
        if (this.profissionais[contador].cpf == this.cpf) {
          document.getElementById("submit").disabled = true;
          document.getElementById("inputCpf").style.borderColor = "red";
          document.getElementById("demo").innerText = "CPF já cadastrado";
          break;
        } else {
          // se nao, deixa proceguir com o cadastro
          document.getElementById("submit").disabled = false;
          document.getElementById("inputCpf").style.borderColor = "#483698";
          document.getElementById("demo").innerText = "";
        }

        if (this.cpf.length < 11) {
          document.getElementById("submit").disabled = true;
          document.getElementById("inputCpf").style.borderColor = "red";
          document.getElementById("demo").innerText = "CPF invalido";
        } else {
          document.getElementById("submit").disabled = false;
          document.getElementById("inputCpf").style.borderColor = "#483698";
          document.getElementById("demo").innerText = "";
        }
        contador++;
      }
    },
    nomevalidate() {
      console.log(this.nome.length);
      if (this.nome.length < 3 || this.nome.length > 48) {
        document.getElementById("submit").disabled = true;
        document.getElementById("input_name").style.borderColor = "red";
        document.getElementById("erroName").innerText =
          "O nome deve conter de 3 a 48 caracteres.";
      } else {
        document.getElementById("submit").disabled = false;
        document.getElementById("input_name").style.borderColor = "#483698";
        document.getElementById("erroName").innerText = "";
      }
    },

    cellValidate() {
      this.celular = this.celular.replace(/[^\d]+/g, "");
      console.log(this.celular);
      if (this.celular.length < 11 || this.celular.length > 11) {
        document.getElementById("submit").disabled = true;
        document.getElementById("input_cell").style.borderColor = "red";
        document.getElementById("erroCell").innerText =
          "O numero de celular deve conter 11 digitos";
      } else {
        document.getElementById("submit").disabled = false;
        document.getElementById("input_cell").style.borderColor = "#483698";
        document.getElementById("erroCell").innerText = "";
      }
    },

    onsubmit(e) {
      e.preventDefault();
      console.log([this.nome, this.cpf, this.cidadeselect]);
    },
  },
};
</script>


<style scoped>
@media (max-width: 650px) {
  .img {
    display: none;
    width: 0px;
  }
  .mobile {
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
select:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 1px solid black;
  outline: 0;
}
.mensageErro {
  margin-top: -20px;
  color: red;
  font-weight: 500;
}
</style>