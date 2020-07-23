type DOMElement = HTMLElement | null;

export function select(query: string): DOMElement {
    return document.querySelector(query);
}

export default {
    select
};
