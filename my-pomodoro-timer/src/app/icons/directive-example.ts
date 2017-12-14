import { Directive } from '@angular/core';

@Directive({
    selector: '[selector]',
    inputs: ['inputPropertyName'],
    outputs: ['outputPropertyName'],
    host: {
        '(event1)': 'onMethodl($event)',
        '(target:event2)': 'onMethod2($event)',
        '[prop]': 'expression',
        'attributeName': 'attributeValue'
        },
    //providers: [MyCustomType]
})
class myDirective {
    @Input() otherInputPropertyName: any;
    @Output() otherOutputPropertyName: any;

    constructor(myCustomType: MyCustomType) {
        // реализация...
    }
}