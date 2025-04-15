//mensagem olá mundo
function mostrarmsg() {
 document.getElementById('mensagem').textContent = 'Olá Mundo'
}

//soma 
function somar() {
    const n1 = parseInt(document.getElementById('tn1'))
    const n2 = parseInt(document.getElementById('tn2'))
    const res = document.getElementById('Res');
    const s1 = Number(tn1.value)
    const s2 = Number(tn2.value)
    const s = s1 + s2
    res.textContent = `Resultado: ${s}`
}
//id
function alterarid() {
    const elemento = document.getElementById('byid')
    elemento.style.color = 'red'
    elemento.style.backgroundColor = '#fdedec'
    elemento.textContent = 'Texto alterado por ID com sucesso' 
    }   
//name                                                                                                        
function alterarname() {
    const elementos = document.getElementsByName('byname')
    if (elementos.length > 0 ) {
        elementos[0].style.color = 'blue'
        elementos[0].style.backgroundColor = 'lightblue'
        elementos[0].textContent = 'Texto alterado por NAME com sucesso' 
    }
        
    }
//class
function alterarclasse() {
    const elementos = document.querySelector('.byclass')
    if (elementos) {
    elementos.style.color = 'purple'
    elementos.style.backgroundColor = 'pink'
    elementos.textContent = 'Texto alterado por CLASS com sucesso' 
    }
    
}

