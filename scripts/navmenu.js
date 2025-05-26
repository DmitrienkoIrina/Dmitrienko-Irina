const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
        const headerList = headerMenu.querySelector('.header__list');

        const menuData = {
            link1: {
                UrlLink: '#',
                title: 'Курсы',
            },
            link2: {
                UrlLink: 'tests.html',
                title: 'Тесты',
            },
            link3: {
                UrlLink: '#',
                title: 'Репетиторство',
            },
            link4: {
                UrlLink: '#',
                title: 'О центре',
            }
        }

        const createLink = (UrlLink, title) =>{
            const link = `
            <li class="header__item"><a href="${UrlLink}" class="header__link">${title}</a></li>
            `;
            return link;
        }

        for (const linkItem in menuData) {
            const link = menuData[linkItem];
            const linkIndex = createLink(link.UrlLink, link.title);
            headerList.insertAdjacentHTML('beforeend', linkIndex);

        }
}
console.log('Навигацинное меню создано с помощью javascript!');