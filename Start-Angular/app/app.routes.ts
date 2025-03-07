import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { SignalComponent } from './components/signal/signal.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { linkedSignal } from '@angular/core';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'admin',
        pathMatch : 'full'
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path:'controllstatement',
        component:ControlStatementComponent
    },
    {
        path:'dataBinding',
        component: DataBindingComponent
    },
    {
        path:'ng-class',
        component: NgClassComponent
    },
    {
        path:'signal',
        component: SignalComponent
    },
    {
        path:'linkedsignal',
        component: LinkedSignalComponent
    },
    {
        path:'ngif',
        component: NgIfComponent
    },
    {
        path:'ngfor',
        component:NgForComponent
    },
    {
        path:'ngclass',
        component: NgClassComponent
    },
    {
        path:'ngstyle',
        component: NgStyleComponent
    },
    {
        path:'templateform',
        component: TemplateFormComponent
    },
    {
        path:'reactiveform',
        component: ReactiveFormComponent
    },
    {
        path:'get-api',
        component: GetApiComponent
    },
    {
        path:'post-api',
        component: PostApiComponent
    },
    {
        path:'lifecycle',
        component: LifeCycleComponent
    },
    
];
