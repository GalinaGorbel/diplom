'use strict';

const clubLists = () => {

    const clubList = document.querySelector('.clubs-list'),
        clubListUl = clubList.querySelector('ul');

    clubList.addEventListener('click', () => {
        
        clubListUl.style.display === '' ? clubListUl.style.display = 'block' : clubListUl.style.display = '';

    });
};

export default clubLists;