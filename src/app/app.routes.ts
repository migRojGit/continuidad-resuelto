import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home.component').then(c => c.HomeComponent),
    children: [
      {
        path: 'exercise-one',
        loadComponent: () => import('./components/exercicio-one/exercicio-one.component').then(c => c.ExercicioOneComponent)
      },
      {
        path: 'exercise-two',
        loadComponent: () => import('./components/exercicio-two/exercicio-two.component').then(c => c.ExercicioTwoComponent)
      },
      {
        path: 'exercise-three',
        loadComponent: () => import('./components/exercicio-three/exercicio-three.component').then(c => c.ExercicioThreeComponent)
      },
      {
        path: 'exercise-four',
        loadComponent: () => import('./components/exercicio-four/exercicio-four.component').then(c => c.ExercicioFourComponent)
      },
      {
        path: 'person',
        loadComponent: () => import('./components/person/person.component').then(c => c.PersonComponent)
      },
      {
        path: 'gallery',
        loadComponent: () => import('./components/gallery/gallery.component').then(c => c.GalleryComponent)
      },
      {
        path: 'table',
        loadComponent: () => import('./components/section-table/section-table.component').then(c => c.SectionTableComponent)
      }
    ]
  },

];
