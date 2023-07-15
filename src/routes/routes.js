import {createWebHistory,createRouter} from 'vue-router';
import Body from '@/components/Body.vue'
import About from '@/components/About.vue'
import Service from '@/components/Service.vue'
import Projects from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'



const routes = [
    { 
      name : 'Body',
      path: '/',
      component: Body
    },
    { name: 'About',
      path: '/about',
      component: About
    },
    { name: 'Service',
      path: '/service',
      component: Service
    },
    { name: 'Projects',
    path: '/projects',
    component: Projects
    },
    { name: 'Contact',
    path: '/contact',
    component: Contact
   },
  
  ];
  
const router = new createRouter({
  history:createWebHistory(),
  routes
});

export default router;
