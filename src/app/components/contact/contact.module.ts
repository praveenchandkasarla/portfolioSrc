import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { ContactComponent } from './Contact.component';

@NgModule({
    imports: [SharedModule],
    declarations: [ContactComponent],
    exports: [ContactComponent]
})

export class ContactModule { }
