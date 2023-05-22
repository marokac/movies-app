import { Directive, HostBinding, NgModule, } from '@angular/core';

@Directive({
    selector: '[primary-button]',
})
export class PrimaryButtonDirective {
    @HostBinding('class') get classes(): string {
        return 'button button--primary';
    }
}

@Directive({
    selector: '[secondary-button]',
})
export class SecondaryButtonDirective {
    @HostBinding('class') get classes(): string {
        return 'button button--secondary';
    }
}

@NgModule({
    declarations: [PrimaryButtonDirective, SecondaryButtonDirective],
    imports: [],
    exports: [PrimaryButtonDirective, SecondaryButtonDirective],
})
export class ButtonModule { }