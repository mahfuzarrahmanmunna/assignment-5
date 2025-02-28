function indexHtml() {
    const btn = document.getElementById('discover-something');
    if (btn) {
        btn.addEventListener('click', () => {
            window.location.href = './blogs.html'
        })
    }
}
indexHtml()

function blogHtml() {
    const btn = document.getElementById('back-to-desk-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            window.location.href = './index.html'
        })
    }
}
blogHtml()
