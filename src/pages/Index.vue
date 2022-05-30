<template>
  <main>
    <div
      v-if="currentStep == 0"
      class="bg-secondary m-auto ps-5 py-5 mt-5 main "
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
            class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-105 "
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
                v-on:keyup="cpfvalidate"
              >
                <p
                  id="errocpf"
                  class="mensageErro"
                ></p>
                  <label for="cel">Número de celular*</label>
                  <input
                    v-mask="['(##) # ####-####']"
                    type="tel"
                    name="cel"
                    placeholder="(00) 0 0000-0000"
                    class="bdr-5 bd-primary mb-4 fs-6 p-1 ps-3 w-85 "
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
                            id="input_estado"
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
                                </select> <br><br>
                                <p
                                  id="erroestado"
                                  class="mensageErro"
                                ></p>
                        </div>
                        <div>
                          <label for="cidade">cidade*</label><br>
                          <select
                            name="cidade"
                            class="bdr-5 fs-6 p-1 ps-3 ms-1 bd-primary"
                            placeholder="selecione"
                            id="cidades"
                            disabled
                            v-model="input_cidade"
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
                                </select><br><br>
                                <p
                                  id="errocidade"
                                  class="mensageErro"
                                ></p>
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
        v-on:click="nextpage"
        id="submit"
        class='border-0'
      />
      </form>
      <img
        src="@/assets/desktop-pagina-1.png"
        alt="img"
        class="img"
      >
        </div>
        </div>

        <!-- ==================================================================================== -->
        <!-- =============================PAGINA2================================================ -->

        <div
          class="m-auto"
          style="max-width:950px"
          v-else-if="currentStep == 1 "
        >
          <div class="pt-2">
            <a
              class="text-decoration-none text-black"
              @click="backpage"
            >
              <i
                class='bx bx-chevron-left fs-1'
              ></i>
                </a>
          </div>
          <div class="bg-secondary m-auto ps-5 py-5 mt-3 mb-3 section">
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
                  v-model="input_especialidade"
                  id="input_especialidade"
                >
                  <option
                    value=""
                    disabled
                    selected
                  >Selecione a especialidade</option>
                    <option
                      v-for="especialidade of especialidades_API"
                      :value="especialidade.nome"
                      :key="especialidade.id"
                    >{{especialidade.nome}}</option>

                      </select>
                      <p
                        id="erroespecialidade"
                        class="mensageErro"
                      ></p>
                        <label for="preço">informe o preço da consulta*</label>

                        <div class="d-flex align-items-center mb-4">
                          <label
                            for="preço"
                            class="text-white bg-primary preço cifr p-2 text-500 fs-OpenSans"
                          >R$</label>
                            <input
                              v-mask="['##,##','###,##']"
                              name="preço"
                              placeholder="valor"
                              class=" bd-primary fs-6 preço ps-3 w-85 valor"
                              required
                              v-model="input_valorConsulta"
                              id="input_valorConsulta"
                              @keyup="valideteValue"
                            >
                        </div>
                        <p
                          id="errovalor"
                          class="mensageErro"
                        ></p>
                          <h3 class="fs-6 mb-4">formas de pagamento da consulta*</h3>
                          <p
                            id="erropagamentos"
                            class="mensageErro"
                          ></p>
                            <label
                              class="d-flex align-items-center bg-secondary-1 cardd p-3 px-4 mb-3"
                              id="card_pix"
                            >
                              <input
                                type="checkbox"
                                name="pix"
                                class="me-4 check"
                                id="pix"
                                v-model="input_pix"
                              >
                                <label
                                  for="pix"
                                  class="fs-6 text-500"
                                > Pix </label>
                                  </label>
                                  <label
                                    class="d-flex align-items-center bg-secondary-1 cardd p-3 px-4 mb-3"
                                    id="card_dinheiro"
                                  >
                                    <input
                                      type="checkbox"
                                      name="dinheiro"
                                      class="me-4 check"
                                      id="dinheiro"
                                      v-model="input_dinheiro"
                                    >
                                      <label
                                        for="dinheiro"
                                        class="fs-6 text-500"
                                      > Em dinheiro </label>
                                        </label>
                                        <div
                                          class="bg-secondary-1 cardd p-3 px-4 mb-3"
                                          id="card_credito"
                                        >
                                          <label class="d-flex align-items-center">
                                            <input
                                              type="checkbox"
                                              name="credito"
                                              class=" check"
                                              id="credito"
                                              @change="card_credito"
                                              v-model="input_credito"
                                            >
                                              <label
                                                for="credito"
                                                class="fs-6 text-500 ms-4"
                                              > Cartão de credito </label>
                                          </label>
                                          <div
                                            style="display:none"
                                            id="parcelamentos"
                                          >
                                            <h4 class="fs-7 ms-4 ps-3 mt-4 text-500">parcelamento em</h4>
                                            <div class="fs-7 ms-4 ps-3 mt-4 text-500">
                                              <input
                                                type="radio"
                                                name="parcelas"
                                                id="1x"
                                                class="me-2 mb-3"
                                                value="parcelamento em 1x sem jurus"
                                                checked
                                                v-model="input_parcelamentos"
                                              >
                                                <label for="1x">1x, sem jurus</label>
                                                <br>
                                                <input
                                                  type="radio"
                                                  name="parcelas"
                                                  id="2x"
                                                  class="me-2 mb-3"
                                                  value="parcelamento em 2x sem jurus"
                                                  v-model="input_parcelamentos"
                                                >
                                                  <label for="2x">2x, sem jurus</label>
                                                  <br>
                                                  <input
                                                    type="radio"
                                                    name="parcelas"
                                                    id="3x"
                                                    class="me-2 mb-3"
                                                    value="parcelamento em 3x sem jurus"
                                                    v-model="input_parcelamentos"
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
          <Buttom
            mensagem="Próximo"
            @click="nextpage"
            id="submit2"
            class='border-0'
          />
          </form>
          <img
            src="@/assets/desktop-pagina-2.png"
            alt="img"
            class="img "
          >
            </div>
            </div>
            </div>

            <!-- ==================================================================================== -->
            <!-- =============================PAGINA3================================================ -->
            <div
              class="m-auto"
              style="max-width:950px"
              v-else-if="currentStep == 2"
            >
              <div class="pt-2">
                <a
                  @click="backpage"
                  class="text-decoration-none text-black"
                >
                  <i
                    class='bx bx-chevron-left fs-1'
                  ></i>
                    </a>
              </div>
              <div class="bg-secondary m-auto ps-5 py-5 mt-3 mb-3 section">
                <h1 class="fs-comfortaa text-primary text-700">Revisão do cadastro</h1>
                <div class="d-flex overflow-hidden justify-content-between align-items-center">
                  <form
                    action="/Pagina2"
                    class="mt-5 d-flex flex-column fs-OpenSans fs-6 mobile"
                  >
                    <h2 class="fs-5 text-600">Nome completo</h2>
                    <p class="mb-4">{{this.nome}}</p>

                    <h2 class="fs-5 text-600">Número de celular ou telefone</h2>
                    <p>{{this.celular}}</p>

                    <h2 class="fs-5 text-600">Estado/Cidade</h2>
                    <p class="mb-4">
                      <span>{{this.estadoselected}} </span> - {{this.input_cidade}}</p>

                    <h2 class="fs-5 text-600">Especialidade principal</h2>
                    <p class="mb-4">{{this.input_especialidade}}</p>

                    <h2 class="fs-5 text-600">Preço por consulta</h2>
                    <p class="mb-4">{{this.input_valorConsulta}}</p>

                    <h2 class="fs-5 text-600">Formas de pagamento da consulta</h2>
                    <p class="mb-4">
                      <span v-if="this.input_pix"> PIX, </span>
                      <span v-if="this.input_dinheiro">Dinheiro, </span>
                      <span v-if="this.input_credito"> Cartão de credito - {{this.input_parcelamentos}}</span>
                    </p>

                    <Buttom
                      mensagem='CADASTRAR PROFISSIONAL'
                      class="bg-terciary-1 fs-5 p-1 text-black text-500 border-0"
                      @click="nextpage"
                    />

                    <a
                      @click="editarCad"
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

              <!--=============================================================================
            =======================Tela4======================================= -->
              <div
                class="m-auto"
                style="max-width:950px"
                v-else
              >

                <div class="bg-secondary m-auto p-5 mt-5 mb-3 section">
                  <h1 class="fs-comfortaa text-primary text-700 text-center"> Cadastro concluído com sucesso!</h1>
                  <div class="d-flex justify-content-center align-items-center flex-wrap">
                    <img
                      src="../../public/check_img.jpg"
                      alt="check.png"
                      class="img_check"
                    >
                      <a
                        href="/"
                        class="text-decoration-none text-black fs-4 text-primary text-nowrap"
                      >
                        <i
                          class='bx bxs-home fs-3'
                        ></i>
                          voltar para o inicio
                          </a>
                  </div>
                </div>
                </div>

  </main>

</template>

<script>
import api from "../services/api.js";
import Buttom from "../components/Buttom.vue";

export default {
  name: "Index",
  components: {
    Buttom,
  },

  data() {
    return {
      //etapas
      currentStep: 0,
      step: [],

      //dados da API
      cidade: "",
      especialidades_API: [],

      //dados do input
      cpf: "",
      nome: "",
      celular: "",
      input_cidade: "",
      estado: "",
      input_estado: "",
      estadoselected: "",
      profissionais: [],
      input_especialidade: "",
      input_valorConsulta: "",
      input_pix: "",
      input_dinheiro: "",
      input_credito: "",
      input_parcelamentos: "parcelamento em 1x sem jurus",
    };
  },

  created() {
    this.steps = [
      { title: "pagina1" },
      { title: "pagina2" },
      { title: "pagina3" },
    ];
  },

  mounted() {
    //buca por todos os estados
    api.estado().then(res => {
      this.estado = res.data;
    });

    api.profissionais().then(res => {
      this.profissionais = res.data;
    });

    api.especialidades().then(res => {
      this.especialidades_API = res.data;
    });
  },

  computed: {
    firstIndex() {
      return this.currentStep == 0;
    },

    lastIndex() {
      return this.currentStep == this.steps.length - 1;
    },
  },

  methods: {
    backpage() {
      if (!this.firstIndex) {
        this.currentStep -= 1;
      }
    },

    nextpage(e) {
      if (this.currentStep == 0) {
        if (this.nome == "") {
          document.getElementById("input_name").style.borderColor = "red";
          document.getElementById("erroName").innerText =
            "* Preencha para prosseguir *";
        } else if (this.cpf == "") {
          document.getElementById("inputCpf").style.borderColor = "red";
          document.getElementById("errocpf").innerText =
            "* Preencha para prosseguir *";
        } else if (this.celular == "") {
          document.getElementById("input_cell").style.borderColor = "red";
          document.getElementById("erroCell").innerText =
            "* Preencha para prosseguir *";
        } else if (this.input_estado == "") {
          document.getElementById("input_estado").style.borderColor = "red";
          document.getElementById("erroestado").innerText =
            "*Selecione o Estado para prosseguir*";
          setTimeout(() => {
            document.getElementById("input_estado").style.borderColor = "";
            document.getElementById("erroestado").innerText = "";
          }, 3000);
          e.preventDefault();
        } else if (this.input_cidade == "") {
          document.getElementById("cidades").style.borderColor = "red";
          document.getElementById("errocidade").innerText =
            "*Selecione a Cidade para prosseguir*";
          setTimeout(() => {
            document.getElementById("input_estado").style.borderColor = "";
            document.getElementById("erroestado").innerText = "";
          }, 3000);

          e.preventDefault();
        } else if (!this.lastIndex) {
          this.currentStep += 1;
        }
      }
      if (this.currentStep == 1) {
        if (this.input_especialidade == "") {
          document.getElementById("input_especialidade").style.borderColor =
            "red";
          document.getElementById("erroespecialidade").innerText =
            "*Selecione uma especialidade* ";
          e.preventDefault();
        } else if (this.input_valorConsulta == "") {
          document.getElementById("input_valorConsulta").style.borderColor =
            "red";
          document.getElementById("errovalor").innerText =
            "*Informe o preço da consulta* ";
        } else if (
          this.input_pix == "" &&
          this.input_dinheiro == "" &&
          this.input_credito == ""
        ) {
          e.preventDefault();
          document.getElementById("erropagamentos").innerText =
            "* Uma das forma de pagamento deve ser selecionada *";
          document.getElementById("card_pix").style.boxShadow =
            "1px 1px 3px  red";
          document.getElementById("card_dinheiro").style.boxShadow =
            "1px 1px 3px  red";
          document.getElementById("card_credito").style.boxShadow =
            "1px 1px 3px  red";
        } else if (!this.lastIndex) {
          this.currentStep += 1;
        }
      } else if (this.currentStep == 2) {
        this.currentStep += 1;
      }
    },

    // =====================================
    estadoselect() {
      var nameForEstadoId = [
        "Rio Grande do Sul",
        "Santa Catarina",
        "Paraná",
        "Goiás",
        "Mato Grosso",
        "Mato Grosso do Sul",
      ];

      this.estadoselected = nameForEstadoId[this.input_estado - 1];

      //ativa o input caso o estado ja esteja selecionado
      if (this.input_estado > 0) {
        var cdd = document.getElementById("cidades");
        cdd.disabled = false;
      } else {
        document.getElementById("cidades").disabled = true;
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
          document.getElementById("errocpf").innerText = "CPF já cadastrado";
          break;
        } else {
          // se nao, deixa proceguir com o cadastro
          document.getElementById("submit").disabled = false;
          document.getElementById("inputCpf").style.borderColor = "#483698";
          document.getElementById("errocpf").innerText = "";
        }

        if (this.cpf.length < 11) {
          document.getElementById("submit").disabled = true;
          document.getElementById("inputCpf").style.borderColor = "red";
          document.getElementById("errocpf").innerText = "CPF incompleto";
        } else {
          document.getElementById("submit").disabled = false;
          document.getElementById("inputCpf").style.borderColor = "#483698";
          document.getElementById("errocpf").innerText = "";
        }
        contador++;
      }
    },
    nomevalidate() {
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

    card_credito() {
      if (this.input_credito == true) {
        document.getElementById("parcelamentos").style.display = "block";
      } else {
        document.getElementById("parcelamentos").style.display = "none";
      }
    },
    valideteValue() {
      this.input_valorConsulta = this.input_valorConsulta.replace(
        /[^\d]+/g,
        ""
      );

      if (this.input_valorConsulta < 3000 || this.input_valorConsulta > 35000) {
        document.getElementById("input_valorConsulta").style.borderColor =
          "red";
        document.getElementById("errovalor").innerText =
          "*O valor da consulta deve ser de R$30,00 a R$350,00.* ";
        var bt = document.getElementById("submit2");
        bt.disabled = true;
      } else {
        document.getElementById("input_valorConsulta").style.borderColor = "";
        document.getElementById("errovalor").innerText = "";
        var bt = document.getElementById("submit2");
        bt.disabled = false;
      }
    },
    editarCad(){
      this.currentStep = 0
    }
  },
};
</script>

<style>
@media (max-width: 650px) {
  .img {
    display: none;
    width: 0px;
  }
  .mobile {
    width: 90%;
  }
}

.main {
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

.return {
  width: 100px;
}

@media (max-width: 620px) {
  .img {
    display: none;
    width: 0px;
  }
  .mobile {
    width: 90%;
  }
}
@media (max-width: 550px) {
  .img_check {
    width: 100%;
  }
}
</style>
