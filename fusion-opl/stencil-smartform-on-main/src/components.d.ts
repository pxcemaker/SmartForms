/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SfAddformbutton {
    }
    interface SfCheckbox {
        "value": string;
    }
    interface SfDynamicform {
    }
    interface SfEmptycheckbox {
    }
    interface SfInputText {
    }
    interface SfQuestion {
        "value": string;
    }
    interface SfQuestionContainer {
        "frageText": string;
        "fragenId": string;
        "onOff": string;
    }
    interface SfQuestionempty {
    }
    interface SfRadio {
        "value": string;
    }
    interface SfRadioempty {
    }
    interface SfTextArea {
        "frageText": string;
        "fragenId": string;
        "onOff": string;
    }
    interface SfUploadbutton {
    }
}
declare global {
    interface HTMLSfAddformbuttonElement extends Components.SfAddformbutton, HTMLStencilElement {
    }
    var HTMLSfAddformbuttonElement: {
        prototype: HTMLSfAddformbuttonElement;
        new (): HTMLSfAddformbuttonElement;
    };
    interface HTMLSfCheckboxElement extends Components.SfCheckbox, HTMLStencilElement {
    }
    var HTMLSfCheckboxElement: {
        prototype: HTMLSfCheckboxElement;
        new (): HTMLSfCheckboxElement;
    };
    interface HTMLSfDynamicformElement extends Components.SfDynamicform, HTMLStencilElement {
    }
    var HTMLSfDynamicformElement: {
        prototype: HTMLSfDynamicformElement;
        new (): HTMLSfDynamicformElement;
    };
    interface HTMLSfEmptycheckboxElement extends Components.SfEmptycheckbox, HTMLStencilElement {
    }
    var HTMLSfEmptycheckboxElement: {
        prototype: HTMLSfEmptycheckboxElement;
        new (): HTMLSfEmptycheckboxElement;
    };
    interface HTMLSfInputTextElement extends Components.SfInputText, HTMLStencilElement {
    }
    var HTMLSfInputTextElement: {
        prototype: HTMLSfInputTextElement;
        new (): HTMLSfInputTextElement;
    };
    interface HTMLSfQuestionElement extends Components.SfQuestion, HTMLStencilElement {
    }
    var HTMLSfQuestionElement: {
        prototype: HTMLSfQuestionElement;
        new (): HTMLSfQuestionElement;
    };
    interface HTMLSfQuestionContainerElement extends Components.SfQuestionContainer, HTMLStencilElement {
    }
    var HTMLSfQuestionContainerElement: {
        prototype: HTMLSfQuestionContainerElement;
        new (): HTMLSfQuestionContainerElement;
    };
    interface HTMLSfQuestionemptyElement extends Components.SfQuestionempty, HTMLStencilElement {
    }
    var HTMLSfQuestionemptyElement: {
        prototype: HTMLSfQuestionemptyElement;
        new (): HTMLSfQuestionemptyElement;
    };
    interface HTMLSfRadioElement extends Components.SfRadio, HTMLStencilElement {
    }
    var HTMLSfRadioElement: {
        prototype: HTMLSfRadioElement;
        new (): HTMLSfRadioElement;
    };
    interface HTMLSfRadioemptyElement extends Components.SfRadioempty, HTMLStencilElement {
    }
    var HTMLSfRadioemptyElement: {
        prototype: HTMLSfRadioemptyElement;
        new (): HTMLSfRadioemptyElement;
    };
    interface HTMLSfTextAreaElement extends Components.SfTextArea, HTMLStencilElement {
    }
    var HTMLSfTextAreaElement: {
        prototype: HTMLSfTextAreaElement;
        new (): HTMLSfTextAreaElement;
    };
    interface HTMLSfUploadbuttonElement extends Components.SfUploadbutton, HTMLStencilElement {
    }
    var HTMLSfUploadbuttonElement: {
        prototype: HTMLSfUploadbuttonElement;
        new (): HTMLSfUploadbuttonElement;
    };
    interface HTMLElementTagNameMap {
        "sf-addformbutton": HTMLSfAddformbuttonElement;
        "sf-checkbox": HTMLSfCheckboxElement;
        "sf-dynamicform": HTMLSfDynamicformElement;
        "sf-emptycheckbox": HTMLSfEmptycheckboxElement;
        "sf-input-text": HTMLSfInputTextElement;
        "sf-question": HTMLSfQuestionElement;
        "sf-question-container": HTMLSfQuestionContainerElement;
        "sf-questionempty": HTMLSfQuestionemptyElement;
        "sf-radio": HTMLSfRadioElement;
        "sf-radioempty": HTMLSfRadioemptyElement;
        "sf-text-area": HTMLSfTextAreaElement;
        "sf-uploadbutton": HTMLSfUploadbuttonElement;
    }
}
declare namespace LocalJSX {
    interface SfAddformbutton {
    }
    interface SfCheckbox {
        "value"?: string;
    }
    interface SfDynamicform {
    }
    interface SfEmptycheckbox {
        "onCheckboxAnswer"?: (event: CustomEvent<string>) => void;
    }
    interface SfInputText {
    }
    interface SfQuestion {
        "value"?: string;
    }
    interface SfQuestionContainer {
        "frageText"?: string;
        "fragenId"?: string;
        "onOff"?: string;
    }
    interface SfQuestionempty {
        "onQuestionInput"?: (event: CustomEvent<string>) => void;
    }
    interface SfRadio {
        "value"?: string;
    }
    interface SfRadioempty {
        "onRadioAnswer"?: (event: CustomEvent<string>) => void;
    }
    interface SfTextArea {
        "frageText"?: string;
        "fragenId"?: string;
        "onOff"?: string;
    }
    interface SfUploadbutton {
    }
    interface IntrinsicElements {
        "sf-addformbutton": SfAddformbutton;
        "sf-checkbox": SfCheckbox;
        "sf-dynamicform": SfDynamicform;
        "sf-emptycheckbox": SfEmptycheckbox;
        "sf-input-text": SfInputText;
        "sf-question": SfQuestion;
        "sf-question-container": SfQuestionContainer;
        "sf-questionempty": SfQuestionempty;
        "sf-radio": SfRadio;
        "sf-radioempty": SfRadioempty;
        "sf-text-area": SfTextArea;
        "sf-uploadbutton": SfUploadbutton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sf-addformbutton": LocalJSX.SfAddformbutton & JSXBase.HTMLAttributes<HTMLSfAddformbuttonElement>;
            "sf-checkbox": LocalJSX.SfCheckbox & JSXBase.HTMLAttributes<HTMLSfCheckboxElement>;
            "sf-dynamicform": LocalJSX.SfDynamicform & JSXBase.HTMLAttributes<HTMLSfDynamicformElement>;
            "sf-emptycheckbox": LocalJSX.SfEmptycheckbox & JSXBase.HTMLAttributes<HTMLSfEmptycheckboxElement>;
            "sf-input-text": LocalJSX.SfInputText & JSXBase.HTMLAttributes<HTMLSfInputTextElement>;
            "sf-question": LocalJSX.SfQuestion & JSXBase.HTMLAttributes<HTMLSfQuestionElement>;
            "sf-question-container": LocalJSX.SfQuestionContainer & JSXBase.HTMLAttributes<HTMLSfQuestionContainerElement>;
            "sf-questionempty": LocalJSX.SfQuestionempty & JSXBase.HTMLAttributes<HTMLSfQuestionemptyElement>;
            "sf-radio": LocalJSX.SfRadio & JSXBase.HTMLAttributes<HTMLSfRadioElement>;
            "sf-radioempty": LocalJSX.SfRadioempty & JSXBase.HTMLAttributes<HTMLSfRadioemptyElement>;
            "sf-text-area": LocalJSX.SfTextArea & JSXBase.HTMLAttributes<HTMLSfTextAreaElement>;
            "sf-uploadbutton": LocalJSX.SfUploadbutton & JSXBase.HTMLAttributes<HTMLSfUploadbuttonElement>;
        }
    }
}
