<script setup>
import Button from "../components/Button.vue"
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
        <form class="w-full md:w-6/12 md:mx-auto mt-12">
            <fieldset>
                <legend class="text-2xl my-4">
                    Dados de Cadastro
                </legend>
                <div class="text-left">
                    <label class="block" for="empresa">Empresa</label>
                    <input class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="Digite o nome da sua empresa aqui" type="text" name="empresa" id="empresa">
                </div>
                <div class="text-left mt-4">
                    <label class="block" for="contato">WhatsApp</label>
                    <input class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="+55 (XX) XXXX-XXXX" type="text" name="contato" id="contato">
                </div>
                <div class="text-left mt-4">
                    <label class="block" for="contato">Email</label>
                    <input class="w-full text-xl p-2 text-white bg-transparent border-b b-none border-white"
                        placeholder="exemplo@empresa.com" type="email" name="email" id="email">
                </div>
            </fieldset>
        </form>
        <router-link to="/">
            <Button button-text="ENVIAR" primary class="w-full md:w-6/12 mt-12 font-bold" />
        </router-link>
    </div>
</template>

