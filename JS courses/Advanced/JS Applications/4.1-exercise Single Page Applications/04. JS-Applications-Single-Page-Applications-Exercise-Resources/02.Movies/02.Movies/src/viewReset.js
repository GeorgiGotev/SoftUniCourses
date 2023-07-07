const allViewSectionsElements = Array.from(document.querySelectorAll('div.container > section'));

export function viewReset() {
    allViewSectionsElements.forEach(view => view.style.display = 'none');
}
