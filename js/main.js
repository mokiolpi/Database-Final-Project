document.querySelector('.menu .nav').addEventListener('click', function (e) {
    const target = e.target

    if(!target.classList.contains('nav-link') || target.classList.contains('active'))
        return
    
    removeNavActive()
    target.classList.add('active')

    const type = target.innerHTML.toLowerCase()

    removeContentActive()

    document.getElementById(type).classList.remove('fade');
    document.getElementById(type).classList.add('active');
})

function removeNavActive() {
    if(document.querySelector('.nav-burgers').classList.contains('active'))
        document.querySelector('.nav-burgers').classList.remove('active')
    if(document.querySelector('.nav-snacks').classList.contains('active'))
        document.querySelector('.nav-snacks').classList.remove('active')
    if(document.querySelector('.nav-beverages').classList.contains('active'))
        document.querySelector('.nav-beverages').classList.remove('active')
}

function removeContentActive() {
    if(document.getElementById('burgers').classList.contains('active')){
        document.getElementById('burgers').classList.remove('active')
        document.getElementById('burgers').classList.add('fade')
    }
    if(document.getElementById('snacks').classList.contains('active')){
        document.getElementById('snacks').classList.remove('active')
        document.getElementById('snacks').classList.add('fade')
    }
    if(document.getElementById('beverages').classList.contains('active')){
        document.getElementById('beverages').classList.remove('active')
        document.getElementById('beverages').classList.add('fade')
    }
}