import { select } from "../helpers/dom";

export default class Hamburger {
    private element: HTMLElement;

    private target: HTMLElement;

    static isOpen: boolean;

    constructor(element: HTMLElement) {
        const target = select(<string>element.dataset.target);
        this.element = element;

        this.toggle = this.toggle.bind(this);

        if (target) {
            this.target = target;
            Hamburger.isOpen = target.getAttribute("aria-expanded") === "true";
        } else {
            throw new Error(
                `The ${element} must have in the data-target attribute a valid HTMLElement selector`
            );
        }
    }

    open(): boolean {
        this.target.setAttribute("aria-expanded", "true");
        return true;
    }

    close(): boolean {
        this.target.setAttribute("aria-expanded", "false");
        return false;
    }

    toggle(): void {
        Hamburger.isOpen = Hamburger.isOpen ? this.close() : this.open();
    }

    private addEvents() {
        this.element.addEventListener("click", this.toggle);
    }

    init(): Hamburger {
        this.addEvents();
        return this;
    }
}
