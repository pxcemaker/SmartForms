/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CheckBoxDef } from "./components/sf-dynamicform/CheckBoxDef";
import { RadioDef } from "./components/sf-dynamicform/RadioDef";
import { ImageDef } from "./components/sf-dynamicform/ImageDef";
export namespace Components {
    interface SfAdddynform {
        "id": string;
        "value": string;
    }
    interface SfAddformbutton {
    }
    interface SfCheckbox {
        "value": string;
    }
    interface SfDescription {
        "valueDescription": string;
    }
    interface SfDescriptionempty {
    }
    interface SfDynamicform {
        "description": string;
        "isOpen": string;
        "question": string;
        "radio": string;
        "radioIdNmbr": number;
        "result": CheckBoxDef[] | RadioDef[] | string | ImageDef[];
    }
    interface SfEditformarea {
        "getFormElement": () => Promise<void>;
    }
    interface SfEmptyImageSelection {
    }
    interface SfEmptycheckbox {
    }
    interface SfImageSelection {
        "imageurl": string;
    }
    interface SfImageSelectionContainer {
    }
    interface SfInputText {
    }
    interface SfQuestion {
        "value": string;
    }
    interface SfQuestionempty {
    }
    interface SfRadio {
        "radioId": string;
        "radioName": string;
        "value": string;
    }
    interface SfRadioempty {
    }
    interface SfTextArea {
        "frageText": string;
        "fragenId": string;
    }
    interface SfUploadbutton {
    }
}
declare global {
    interface HTMLSfAdddynformElement extends Components.SfAdddynform, HTMLStencilElement {
    }
    var HTMLSfAdddynformElement: {
        prototype: HTMLSfAdddynformElement;
        new (): HTMLSfAdddynformElement;
    };
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
    interface HTMLSfDescriptionElement extends Components.SfDescription, HTMLStencilElement {
    }
    var HTMLSfDescriptionElement: {
        prototype: HTMLSfDescriptionElement;
        new (): HTMLSfDescriptionElement;
    };
    interface HTMLSfDescriptionemptyElement extends Components.SfDescriptionempty, HTMLStencilElement {
    }
    var HTMLSfDescriptionemptyElement: {
        prototype: HTMLSfDescriptionemptyElement;
        new (): HTMLSfDescriptionemptyElement;
    };
    interface HTMLSfDynamicformElement extends Components.SfDynamicform, HTMLStencilElement {
    }
    var HTMLSfDynamicformElement: {
        prototype: HTMLSfDynamicformElement;
        new (): HTMLSfDynamicformElement;
    };
    interface HTMLSfEditformareaElement extends Components.SfEditformarea, HTMLStencilElement {
    }
    var HTMLSfEditformareaElement: {
        prototype: HTMLSfEditformareaElement;
        new (): HTMLSfEditformareaElement;
    };
    interface HTMLSfEmptyImageSelectionElement extends Components.SfEmptyImageSelection, HTMLStencilElement {
    }
    var HTMLSfEmptyImageSelectionElement: {
        prototype: HTMLSfEmptyImageSelectionElement;
        new (): HTMLSfEmptyImageSelectionElement;
    };
    interface HTMLSfEmptycheckboxElement extends Components.SfEmptycheckbox, HTMLStencilElement {
    }
    var HTMLSfEmptycheckboxElement: {
        prototype: HTMLSfEmptycheckboxElement;
        new (): HTMLSfEmptycheckboxElement;
    };
    interface HTMLSfImageSelectionElement extends Components.SfImageSelection, HTMLStencilElement {
    }
    var HTMLSfImageSelectionElement: {
        prototype: HTMLSfImageSelectionElement;
        new (): HTMLSfImageSelectionElement;
    };
    interface HTMLSfImageSelectionContainerElement extends Components.SfImageSelectionContainer, HTMLStencilElement {
    }
    var HTMLSfImageSelectionContainerElement: {
        prototype: HTMLSfImageSelectionContainerElement;
        new (): HTMLSfImageSelectionContainerElement;
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
        "sf-adddynform": HTMLSfAdddynformElement;
        "sf-addformbutton": HTMLSfAddformbuttonElement;
        "sf-checkbox": HTMLSfCheckboxElement;
        "sf-description": HTMLSfDescriptionElement;
        "sf-descriptionempty": HTMLSfDescriptionemptyElement;
        "sf-dynamicform": HTMLSfDynamicformElement;
        "sf-editformarea": HTMLSfEditformareaElement;
        "sf-empty-image-selection": HTMLSfEmptyImageSelectionElement;
        "sf-emptycheckbox": HTMLSfEmptycheckboxElement;
        "sf-image-selection": HTMLSfImageSelectionElement;
        "sf-image-selection-container": HTMLSfImageSelectionContainerElement;
        "sf-input-text": HTMLSfInputTextElement;
        "sf-question": HTMLSfQuestionElement;
        "sf-questionempty": HTMLSfQuestionemptyElement;
        "sf-radio": HTMLSfRadioElement;
        "sf-radioempty": HTMLSfRadioemptyElement;
        "sf-text-area": HTMLSfTextAreaElement;
        "sf-uploadbutton": HTMLSfUploadbuttonElement;
    }
}
declare namespace LocalJSX {
    interface SfAdddynform {
        "id"?: string;
        "onIsClicked"?: (event: CustomEvent<void>) => void;
        "value"?: string;
    }
    interface SfAddformbutton {
    }
    interface SfCheckbox {
        "value"?: string;
    }
    interface SfDescription {
        "valueDescription"?: string;
    }
    interface SfDescriptionempty {
        "onDescriptionInput"?: (event: CustomEvent<string>) => void;
    }
    interface SfDynamicform {
        "description"?: string;
        "isOpen"?: string;
        "question"?: string;
        "radio"?: string;
        "radioIdNmbr"?: number;
        "result"?: CheckBoxDef[] | RadioDef[] | string | ImageDef[];
    }
    interface SfEditformarea {
    }
    interface SfEmptyImageSelection {
        "onImageAnswer"?: (event: CustomEvent<string>) => void;
    }
    interface SfEmptycheckbox {
        "onCheckboxAnswer"?: (event: CustomEvent<string>) => void;
    }
    interface SfImageSelection {
        "imageurl"?: string;
    }
    interface SfImageSelectionContainer {
    }
    interface SfInputText {
    }
    interface SfQuestion {
        "value"?: string;
    }
    interface SfQuestionempty {
        "onQuestionInput"?: (event: CustomEvent<string>) => void;
    }
    interface SfRadio {
        "radioId"?: string;
        "radioName"?: string;
        "value"?: string;
    }
    interface SfRadioempty {
        "onRadioAnswer"?: (event: CustomEvent<string>) => void;
    }
    interface SfTextArea {
        "frageText"?: string;
        "fragenId"?: string;
    }
    interface SfUploadbutton {
    }
    interface IntrinsicElements {
        "sf-adddynform": SfAdddynform;
        "sf-addformbutton": SfAddformbutton;
        "sf-checkbox": SfCheckbox;
        "sf-description": SfDescription;
        "sf-descriptionempty": SfDescriptionempty;
        "sf-dynamicform": SfDynamicform;
        "sf-editformarea": SfEditformarea;
        "sf-empty-image-selection": SfEmptyImageSelection;
        "sf-emptycheckbox": SfEmptycheckbox;
        "sf-image-selection": SfImageSelection;
        "sf-image-selection-container": SfImageSelectionContainer;
        "sf-input-text": SfInputText;
        "sf-question": SfQuestion;
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
            "sf-adddynform": LocalJSX.SfAdddynform & JSXBase.HTMLAttributes<HTMLSfAdddynformElement>;
            "sf-addformbutton": LocalJSX.SfAddformbutton & JSXBase.HTMLAttributes<HTMLSfAddformbuttonElement>;
            "sf-checkbox": LocalJSX.SfCheckbox & JSXBase.HTMLAttributes<HTMLSfCheckboxElement>;
            "sf-description": LocalJSX.SfDescription & JSXBase.HTMLAttributes<HTMLSfDescriptionElement>;
            "sf-descriptionempty": LocalJSX.SfDescriptionempty & JSXBase.HTMLAttributes<HTMLSfDescriptionemptyElement>;
            "sf-dynamicform": LocalJSX.SfDynamicform & JSXBase.HTMLAttributes<HTMLSfDynamicformElement>;
            "sf-editformarea": LocalJSX.SfEditformarea & JSXBase.HTMLAttributes<HTMLSfEditformareaElement>;
            "sf-empty-image-selection": LocalJSX.SfEmptyImageSelection & JSXBase.HTMLAttributes<HTMLSfEmptyImageSelectionElement>;
            "sf-emptycheckbox": LocalJSX.SfEmptycheckbox & JSXBase.HTMLAttributes<HTMLSfEmptycheckboxElement>;
            "sf-image-selection": LocalJSX.SfImageSelection & JSXBase.HTMLAttributes<HTMLSfImageSelectionElement>;
            "sf-image-selection-container": LocalJSX.SfImageSelectionContainer & JSXBase.HTMLAttributes<HTMLSfImageSelectionContainerElement>;
            "sf-input-text": LocalJSX.SfInputText & JSXBase.HTMLAttributes<HTMLSfInputTextElement>;
            "sf-question": LocalJSX.SfQuestion & JSXBase.HTMLAttributes<HTMLSfQuestionElement>;
            "sf-questionempty": LocalJSX.SfQuestionempty & JSXBase.HTMLAttributes<HTMLSfQuestionemptyElement>;
            "sf-radio": LocalJSX.SfRadio & JSXBase.HTMLAttributes<HTMLSfRadioElement>;
            "sf-radioempty": LocalJSX.SfRadioempty & JSXBase.HTMLAttributes<HTMLSfRadioemptyElement>;
            "sf-text-area": LocalJSX.SfTextArea & JSXBase.HTMLAttributes<HTMLSfTextAreaElement>;
            "sf-uploadbutton": LocalJSX.SfUploadbutton & JSXBase.HTMLAttributes<HTMLSfUploadbuttonElement>;
        }
    }
}
