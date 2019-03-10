import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        /** ���� ng-zorro-antd ģ�� **/
        NgZorroAntdModule
    ],
    /** ���� ng-zorro-antd ���ʻ����İ� �� ���ڣ� **/
    providers: [
        { provide: NZ_I18N, useValue: zh_CN }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
