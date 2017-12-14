import { Directive } from '@angular/core';

@Directive({
selector: '[selector]',
inputs: ['inputPropertyName'],
outputs: ['outputPropertyName'],
host: {
'(eventl)': 'onMethodl($event)',
' (target:event2)': 'onMethod2($event)',
'[prop]': 'expression',
'attributeName': 'attributeValue'
L
providers: [MyCustomType]
})
class myDirective {
@Input() otherlnputPropertyName: any;
@0utput() otherOutputPropertyName: any;
constructor(myCustomType: MyCustomType) {
// реализация...
}
}