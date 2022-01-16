// Dark mode toggle using Bootstrap
document.getElementById('dark-mode-switch').onclick = () => {
    const head_tag = document.querySelector('head')
    head_tag.classList.toggle('Active')
    if (head_tag.getAttribute('class') == 'Active') {
        // Dark Mode -->
        document.body.classList.toggle('dark')
        document.body.classList.toggle('light')
        const remo_tag = head_tag.getElementsByClassName('cdn_link_light') // selecciona los links de los bootstrap anteriores
        remo_tag[0].remove() // remueve el link del estilo Bootstrap anterior
        head_tag.insertAdjacentHTML('beforeend', '<link class="cdn_link_dark" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.6.1/darkly/bootstrap.min.css" integrity="sha512-IfpSSZVYeTkzLWKDhcrbTIXJQA0R2xZJ47LxtdQvvukSFealc/FHjLAkZBTvmxQQyY3IC+qZx27Z5JmiJqUYVQ==" crossorigin="anonymous" referrerpolicy="no-referrer">') // inserta el nuevo estilo
        
    } else {
        // Light Mode
        document.body.classList.toggle('light')
        document.body.classList.toggle('dark')
        const remove_tag = head_tag.getElementsByClassName('cdn_link_dark')
        remove_tag[0].remove() // remueve el link del estilo Bootstrap anterior
        head_tag.insertAdjacentHTML('beforeend', '<link class="cdn_link_light" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.6.1/flatly/bootstrap.min.css" integrity="sha512-NnOXwTfcNBeRenMzrDACGwxbThjRcI5H8jvM+VDKKkXA6wkAb2c0t1YgDXWmW2TNX1CUSe6Ma6HXYG2J1rBGDQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />') // inserta el nuevo estilo        
    }    
}