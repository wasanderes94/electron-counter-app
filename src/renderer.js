

const inc_btn = document.getElementById('inc-btn')
const dec_btn = document.getElementById('dec-btn')
//const counter = document.getElementById('counter')

counter.innerText = "0"
inc_btn.addEventListener('click', async () => {
    const res = await window.electronApi.increment(document.getElementById('counter').innerText)
    counter.innerText = res;
})

dec_btn.addEventListener('click', async () => {
    const res = await window.electronApi.decrement(document.getElementById('counter').innerText)
    counter.innerText = res;
})