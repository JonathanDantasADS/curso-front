const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    ul: '#e93935',
    ol: '#a53115',
    header: '#a54935',
    nav: '#f5393c',
    main: '#e5393a',
    footer: '#d53935',
    form: '#c43935',
    body: '#b13935',
    padrao: '#a93935',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}


// Lógica para mostrar a tag de cada elemento na página
document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})