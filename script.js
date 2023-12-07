async function buscaEndereco(cep) {
    var mensagemDeErro = document.getElementById('erro')
    mensagemDeErro.innerHTML = ""
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json()
        if (consultaCepConvertida.erro) {
            console.log('CEP não existe!')
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        cidade.value = consultaCepConvertida.localidade
        logradouro.value = consultaCepConvertida.logradouro
        estado.value = consultaCepConvertida.uf
        bairro.value = consultaCepConvertida.bairro
        console.log(consultaCepConvertida)
    } catch (erro) {
        mensagemDeErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

const cep = document.getElementById('cep')

cep.addEventListener('focusout', () => buscaEndereco(cep.value))