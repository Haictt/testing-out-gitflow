const container = document.querySelector('.container')
init()

function init() {
    var dots = []
    var count = 0
    for (let i = 0; i <= container.offsetHeight / 24; i++) {
        for (let j = 0; j <= container.offsetWidth / 24; j++) {
            count += 1
            dots.push(count)
        }
    }
    var dots2 = dots.map((dot) => {
        return `<div class="dots" style="--bg:var(--${dot%9+1})"></div>`
    })
    container.innerHTML = dots2.join('')
};

window.addEventListener('resize', () => {
    init()
});