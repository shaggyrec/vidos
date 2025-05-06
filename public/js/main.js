window.addEventListener('DOMContentLoaded',function () {
    const h1 = document.getElementById('h1');
    const moto = document.getElementById('moto');
    const moto1 = document.getElementById('moto1');
    const moto2 = document.getElementById('moto2');

    h1.style.opacity = 0;

    moto.innerText = 'I shoot you';
    setTimeout(() => {
        moto1.innerText = 'I shoot your business for real';
        moto1.classList.remove('opacity-0');
        moto1.classList.add('opacity-50');
        setTimeout(() => {
            moto1.classList.remove('opacity-50');
            setTimeout(() => {
                moto2.innerHTML = 'I shoot your business for <s>real</s> reel';
                moto2.classList.remove('opacity-0');
                moto2.classList.add('opacity-50');
                setTimeout(() => {
                    moto2.classList.remove('opacity-50');

                    setTimeout(() => scrollToBottom(), 1000);
                }, 400);
            }, 400);
        }, 400);
    }, 500);

    const buttons = document.getElementsByClassName('contact-button');
    const modal = document.getElementById('modal');
    for (const button of buttons) {
        button.addEventListener('click', function () {
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.remove('opacity-0'), 1);
        })
    }

    const closeModalButton = document.getElementById('close-modal');
    closeModalButton.addEventListener('click', function () {
        modal.classList.add('opacity-0');
        setTimeout(() => modal.classList.add('hidden'), 300);
    })

    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });
});

function scrollToBottom () {
    document.getElementById('end').scrollIntoView({behavior: "smooth"});
}