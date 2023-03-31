<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue"
import { useCadastroStore } from "../store/cadastro";
const store = useCadastroStore()

let empresa = ref('')
let contato = ref('')
let email = ref('')

function enviarCadastro() {
    store.enviarCadastro({ empresa, contato, email })
}

</script>

<template>
    <div>
        <h1 class="text-4xl mx-auto">
            Cadastro
        </h1>
        <p class="text-xl font-light mt-12 w-full md:w-6/12 mx-auto text-justify">
            Após preencher seus dados pessoais e enviar sua solicitação de registro, nossa equipe verificará suas
            informações. Aguarde nosso contato para confirmar sua conta e, em seguida, comece a criar sua página
            personalizada de links sociais para compartilhar suas redes sociais de maneira eficiente e profissional.
            Cadastre-se agora e se prepare para se destacar nas redes sociais!
        </p>
        <form class="w-full md:w-6/12 md:mx-auto mt-12" @submit.prevent="enviarCadastro()">
            <fieldset>
                <legend class="text-2xl my-4">
                    Dados de Cadastro
                </legend>
                <div class="text-left">
                    <label class="block" for="empresa">Empresa</label>
                    <input v-model="empresa"
                        class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="Digite o nome da sua empresa aqui" type="text" name="empresa" id="empresa">
                </div>
                <div class="text-left mt-4">
                    <label class="block" for="contato">WhatsApp</label>
                    <input v-model="contato"
                        class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="+55 (XX) XXXX-XXXX" type="text" name="contato" id="contato">
                </div>
                <div class="text-left mt-4">
                    <label class="block" for="contato">Email</label>
                    <input v-model="email" class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="exemplo@empresa.com" type="email" name="email" id="email">
                </div>
            </fieldset>
            <Button :loading="store.loading" :button-text="store.loading ? 'Enviando Dados' : 'Cadastrar'" type="primary"
                class="w-full md:w-6/12 mt-12 font-bold" />
        </form>
    </div>
</template>

