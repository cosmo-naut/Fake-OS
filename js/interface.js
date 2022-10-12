const menuData = {
    element: null,
    isShowing: false,
    hideOnClick: true
};

const toggleElement = (data) => {
    data.isShowing = !data.isShowing;
    setVisibility(data.element, data.isShowing);

    if (data.hideOnClick) {
        hideOnNextClick(data);
    }
}

const hideOnNextClick = (data) => {
    const hide = (e) => {
        if (!isAParentOf(data.element, e.target))
        {
            data.isShowing = false;
            setVisibility(data.element, false);
            document.removeEventListener("click", hide, true);
        }
    };

    document.addEventListener("click", hide, true);
}

const setVisibility = (element, visible) => {
    if (visible) element.classList.remove("hidden");
    else element.classList.add("hidden");
}

const onPageClicked = (e) => {

}

const isAParentOf = (parent, element) => {
    do {
        if (parent === element)
            return true;
    } while (element = element.parentElement);
    return false;
}

menuData.element = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", () => toggleElement(menuData));

document.addEventListener("click", onPageClicked);


