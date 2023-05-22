import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PanelComponent } from "./panel.component";

@NgModule({
    declarations: [PanelComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [PanelComponent],
})
export class PanelModule { }