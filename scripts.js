const navButton = document.querySelector('.toggle');
navButton.addEventListener('click', () => {
    const nav = document.querySelectorAll('.toggle > div').forEach((element) => {
        element.classList.toggle('active');
    })

    document.querySelector('.left-wrapper').classList.toggle('active-wrapper');
    document.querySelector('.right-wrapper').classList.toggle('active-wrapper');
})

document.querySelector('#gallery').addEventListener('click', () => {
    document.querySelector('.gallery-menu').classList.toggle('active');
    document.querySelector('#gallery > div').classList.toggle('active');
})

document.querySelectorAll('.slide-container').forEach((element) => {
    element.addEventListener('mouseover', () => {
        document.querySelector('.center-box').classList.add('hidden');
    })
    element.addEventListener('mouseout', () => {
        document.querySelector('.center-box').classList.remove('hidden');
    })
})