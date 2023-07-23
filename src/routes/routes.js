import config from '~/configs';

// Layouts
import { DefaultLayout } from '~/layouts';

import Home from '~/pages/Home';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
];

// Privite routes
const priviteRoutes = [];

export { publicRoutes, priviteRoutes };
