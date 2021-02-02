import Home from './home.controller';
import Login from './login.controller';
import Signup from './signup.controller';
import Posts from './post.controller';
import notFound from './404.controller';

const pages = {
    home: Home,
    login: Login,
    signup: Signup,
    posts: Posts,
    notFound: notFound
}

export {pages}