import * as _angular_core from '@angular/core';
import * as i1 from 'ng-primitives/button';

/**
 * The size of the button.
 */
type ButtonSize = "sm" | "md" | "lg" | "xl";
/**
 * The variant of the button.
 */
type ButtonVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link";
declare class Button {
    /**
     * The size of the button.
     */
    readonly size: _angular_core.InputSignal<ButtonSize>;
    /**
     * The variant of the button.
     */
    readonly variant: _angular_core.InputSignal<ButtonVariant>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<Button, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<Button, "button[app-button]", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, [{ directive: typeof i1.NgpButton; inputs: { "disabled": "disabled"; }; outputs: {}; }]>;
}

export { Button };
export type { ButtonSize, ButtonVariant };
