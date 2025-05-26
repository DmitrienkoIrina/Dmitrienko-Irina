const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.body');
    if (preloader && content) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            content.style.display = 'block';
            preloader.remove();
        }, 1500);
    };