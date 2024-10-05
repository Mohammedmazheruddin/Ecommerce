import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';

export const routes: Routes = [

{
path:"",
component:HomeComponent

},
{
    path:"menfashion",
    component:MenComponent
    
    }
,
{
    path:"womenfashion",
    component:WomenComponent
    
    }
    
    ,
    {
        path:"electronics",
        component:ElectronicsComponent
        
        }
        










];
