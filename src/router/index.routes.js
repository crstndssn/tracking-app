import { pages } from '../controllers/index'

const content = document.getElementById('root');

const router = async (route) => {
    content.innerHTML = '';
    switch(route) {
        
        case '#/':
            return content.appendChild(pages.home());
        
        case '#/login': 
            return content.appendChild(pages.login());

        case '#/signup':
            return content.appendChild(pages.signup());
        
        case '#/tasks':
            return content.appendChild(await pages.tasks());
        
        case '#/posts':
            return content.appendChild(await pages.posts());
        
        default:
            return console.log('404');

    }
};

export { router };