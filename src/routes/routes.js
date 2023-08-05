import config from '~/configs';

// Layouts
import { DefaultLayout } from '~/layouts';

import Home from '~/pages/Home';
import Pages from '~/pages/Pages';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.pages, component: Pages, layout: DefaultLayout },
];

// Privite routes
const priviteRoutes = [];

export { publicRoutes, priviteRoutes };
