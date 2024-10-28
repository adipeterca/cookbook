console.log("js script is added!!!")
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('.dish-details')
        const isActive = item.classList.contains('active')
        
        if (isActive) {
            details.style.display = 'none'
            item.classList.remove('active')
        } else {
            document.querySelectorAll('.dish-details').forEach(detail => detail.style.display = 'none')
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'))
            details.style.display = 'block'
            item.classList.add('active')
        }
    })
})