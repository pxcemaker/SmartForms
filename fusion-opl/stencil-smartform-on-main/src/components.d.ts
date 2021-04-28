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
    interface SfMultiplechoice {
    }
    interface SfQuestion {
    }
    interface SfQuestionContainer {
        "frageText": string;
        "fragenId": string;
        "onOff": string;
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
    interface HTMLSfMultiplechoiceElement extends Components.SfMultiplechoice, HTMLStencilElement {
    }
    var HTMLSfMultiplechoiceElement: {
        prototype: HTMLSfMultiplechoiceElement;
        new (): HTMLSfMultiplechoiceElement;
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
        "sf-multiplechoice": HTMLSfMultiplechoiceElement;
        "sf-question": HTMLSfQuestionElement;
        "sf-question-container": HTMLSfQuestionContainerElement;
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
    interface SfMultiplechoice {
    }
    interface SfQuestion {
    }
    interface SfQuestionContainer {
        "frageText"?: string;
        "fragenId"?: string;
        "onOff"?: string;
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
        "sf-multiplechoice": SfMultiplechoice;
        "sf-question": SfQuestion;
        "sf-question-container": SfQuestionContainer;
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
            "sf-multiplechoice": LocalJSX.SfMultiplechoice & JSXBase.HTMLAttributes<HTMLSfMultiplechoiceElement>;
            "sf-question": LocalJSX.SfQuestion & JSXBase.HTMLAttributes<HTMLSfQuestionElement>;
            "sf-question-container": LocalJSX.SfQuestionContainer & JSXBase.HTMLAttributes<HTMLSfQuestionContainerElement>;
            "sf-text-area": LocalJSX.SfTextArea & JSXBase.HTMLAttributes<HTMLSfTextAreaElement>;
            "sf-uploadbutton": LocalJSX.SfUploadbutton & JSXBase.HTMLAttributes<HTMLSfUploadbuttonElement>;
        }
    }
}
