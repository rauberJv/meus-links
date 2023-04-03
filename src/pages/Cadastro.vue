<script setup>
import { reactive, ref } from "vue";
import Button from "../components/Button.vue"
import { useCadastroStore } from "../store/cadastro";
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'

required.$message = "Este campo é obrigatório"
email.$message = "Este campo deve ser um email válido"
numeric.$message = "Este campo deve conter apenas números"

const cadastroStore = useCadastroStore()
const router = useRouter()
const store = reactive({
    empresa: '',
    contato: '',
    email: ''
})

const rules = {
    empresa: { required },
    contato: { required, numeric },
    email: { required, email }
}

const v$ = useVuelidate(rules, store)

async function enviarCadastro() {
    await v$._value.$validate()
    if (!v$._value.$invalid) {
        let uuid = uuidv4();
        await cadastroStore.enviarCadastro({ uuid, ...store, cadastrado: false })
        if (cadastroStore.status === 'sucesso')
            router.push('/cadastro-enviado')
        else
            router.push('/')
    }
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
                    <input v-model="store.empresa"
                        class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="Digite o nome da sua empresa aqui" type="text" name="empresa" id="empresa">
                    <div class="input-errors" v-for="error of v$.empresa.$errors" :key="error.$uid">
                        <div class="text-red-500 font-light">{{ error.$message }}</div>
                    </div>
                </div>
                <div class="text-left mt-4">
                    <label class="block" for="contato">WhatsApp</label>
                    <input v-model="store.contato"
                        class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="+55 (XX) XXXX-XXXX" type="text" name="contato" id="contato">
                    <div class="input-errors" v-for="error of v$.contato.$errors" :key="error.$uid">
                        <div class="text-red-500 font-light">{{ error.$message }}</div>
                    </div>
                </div>
                <div class="text-left mt-4">
                    <label class="block" for="contato">Email</label>
                    <input v-model="store.email"
                        class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="exemplo@empresa.com" type="email" name="email" id="email">
                    <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                        <div class="text-red-500 font-light">{{ error.$message }}</div>
                    </div>
                </div>
            </fieldset>
            <Button :loading="cadastroStore.loading" :button-text="cadastroStore.loading ? 'Enviando Dados' : 'Cadastrar'"
                type="primary" class="w-full md:w-6/12 mt-12 font-bold" />
        </form>
    </div>
</template>

