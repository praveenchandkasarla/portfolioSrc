import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
    imports: [SharedModule],
    exports: [PortfolioComponent],
    declarations: [PortfolioComponent]
})

export class PortfolioModule { }
