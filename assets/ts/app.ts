import { select } from "./helpers/dom";
import Hamburger from "./modules/Hamburger";

const headerTrigger = select("#header-trigger[data-target]");

if (headerTrigger) {
    const sidenavTrigger = new Hamburger(headerTrigger);
    sidenavTrigger.init();

    if (window.matchMedia("(min-width: 1024px)").matches) {
        sidenavTrigger.open();
    }
}
