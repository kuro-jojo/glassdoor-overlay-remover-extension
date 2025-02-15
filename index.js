const observer = new MutationObserver((mutationsList, _) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Ensure it's an element node
                    if (node.matches(".hardsellOverlay, #HardsellOverlay") || node.querySelector(".hardsellOverlay, #HardsellOverlay")) {
                        let functions = [
                            () => {
                                const elements = [document.querySelector(".hardsellOverlay"), document.querySelector("#HardsellOverlay")];
                                elements.forEach(elt => {
                                    if (elt) {
                                        elt.remove();
                                        showToast("Annoying content wall removed!");
                                    }
                                });
                            },
                            () => {
                                const body = document.getElementsByTagName('body')[0];
                                body.style.removeProperty("overflow");
                                body.style.removeProperty("position");
                            },
                            () => document.addEventListener("scroll", event => event.stopPropagation(), true),
                            () => document.addEventListener("mousemove", event => event.stopPropagation(), true),
                        ];
                        functions.forEach(f => f());
                    }
                }
            });
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });