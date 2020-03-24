const btn = document.createElement('button');
let counter = -1;

btn.addEventListener('click', () => {
    counter++;
    btn.innerHTML = `Clicked ${String(counter).padStart(3, '0')} times :)`;
});

btn.click();
document.body.appendChild(btn);