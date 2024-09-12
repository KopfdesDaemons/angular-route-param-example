import { Routes } from '@angular/router';
import { TabsPage } from './tabs-page/tabs-page.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./app.component').then((m) => m.AppComponent),
    },
    {
        path: 'tabs/:id',
        component: TabsPage,
        children: [
            {
                path: 'book', // dynamic route for story details
                loadComponent: () =>
                    import('./story/story.component').then((m) => m.StoryComponent),
            },
            {
                path: 'review',
                loadComponent: () =>
                    import('./practice/practice.component').then((m) => m.PracticeComponent),
            },
            {
                path: '',
                redirectTo: '/tabs/main',
                pathMatch: 'full',
            },
        ],
    },
];
