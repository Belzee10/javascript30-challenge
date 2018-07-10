const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index, array) => panel.addEventListener('click', function toggleOpen() {
    const arr = [...array];
    const nodes = arr
        .filter(n => n.classList.contains('open') && n !== this)
        .map(p => p.classList.remove('open'))                   

    this.classList.toggle('open');
}));

panels.forEach(panel => panel.addEventListener('transitionend', function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}))