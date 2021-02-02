import  './css/main.css'
import './css/styles.css'

import {router} from './router/index.routes'

router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
    
})

