document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('section');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });

    document.getElementById('home').classList.add('active');
});
