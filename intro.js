const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    loop: true,
    deletespeed: 10

})

    .changeDelay(20)
    .typeString(' Smail Ould Bey')
    .pauseFor(300)
    .typeString('<strong>, Dev en </strong>')


    .typeString('<span style="color: red" > HTML</span> ! ')
    .pauseFor(1000)
    .deleteChars(7)



    .typeString('<span style="color: blue"> CSS</span> !')
    .pauseFor(1000)
    .deleteChars(5)

    .typeString('<span style="color: green"> PHP</span> !')
    .pauseFor(1000)
    .deleteChars(5)

    .typeString('<span style="color: #D26901"> PHPmyAdmin</span> !')
    .pauseFor(1000)
    .deleteChars(12)

    .start()
