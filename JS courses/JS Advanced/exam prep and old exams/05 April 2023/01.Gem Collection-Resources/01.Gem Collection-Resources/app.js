window.addEventListener('load', solve);

function solve() {
    let previewListSection = document.querySelector('#preview-list');
    let addBtn = document.querySelector('#add-btn');

    let name = document.querySelector('#gem-name');
    let color = document.querySelector('#color');
    let carats = document.querySelector('#carats');
    let price = document.querySelector('#price');
    let type = document.querySelector('#type');

    addBtn.addEventListener('click', () => {
        if (
            name.value &&
            color.value &&
            carats.value &&
            price.value &&
            type.value
        ) {
            let liItem = document.createElement('li');
            liItem.classList = 'gem-info';
            let articleItem = document.createElement('article');
            let h4Element = document.createElement('h4');
            h4Element.textContent = name.value;
            let colorElement = document.createElement('p');
            colorElement.textContent = `Color: ${color.value}`;
            let caratsElement = document.createElement('p');
            caratsElement.textContent = `Carats: ${carats.value}`;
            let priceElement = document.createElement('p');
            priceElement.textContent = `Price: ${price.value} $`;
            let typeElement = document.createElement('p');
            typeElement.textContent = `Type: ${type.value}`;
            articleItem.appendChild(h4Element);
            articleItem.appendChild(colorElement);
            articleItem.appendChild(caratsElement);
            articleItem.appendChild(priceElement);
            articleItem.appendChild(typeElement);
            liItem.appendChild(articleItem);
            let saveToCollectionBtn = document.createElement('button');
            saveToCollectionBtn.classList = 'save-btn';
            saveToCollectionBtn.textContent = 'Save to Collection';
            saveToCollectionBtn.addEventListener('click', saveToCollection);

            function saveToCollection(e) {
                let newLiItem = document.createElement('li');
                let pElement = document.createElement('p');
                pElement.classList = 'collection-item';
                let parent = e.currentTarget.parentNode;
                let targetArticle = parent.querySelector('article');
                pElement.textContent = `${
                    targetArticle.querySelector(':nth-child(1)').textContent
                } - Color: ${
                    targetArticle
                        .querySelector(':nth-child(2)')
                        .textContent.split(': ')[1]
                }/ Carats: ${
                    targetArticle
                        .querySelector(':nth-child(3)')
                        .textContent.split(': ')[1]
                }/ Price: ${
                    targetArticle
                        .querySelector(':nth-child(4)')
                        .textContent.split(': ')[1]
                        .split(' $')[0]
                }$/ Type: ${
                    targetArticle
                        .querySelector(':nth-child(5)')
                        .textContent.split(': ')[1]
                }`;
                newLiItem.appendChild(pElement);
                document.querySelector('#collection').appendChild(newLiItem);
                addBtn.disabled = false;
                liItem.remove();
            }

            liItem.appendChild(saveToCollectionBtn);
            let editBtn = document.createElement('button');
            editBtn.classList = 'edit-btn';
            editBtn.textContent = 'Edit Information';
            editBtn.addEventListener('click', edit);

            function edit(e) {
                addBtn.disabled = false;
                e.currentTarget.parentNode.remove();
                let parent = e.currentTarget.parentNode;
                let targetArticle = parent.querySelector('article');
                document.querySelector('#gem-name').value =
                    targetArticle.querySelector(':nth-child(1)').textContent;
                document.querySelector('#color').value = targetArticle
                    .querySelector(':nth-child(2)')
                    .textContent.split(': ')[1];
                document.querySelector('#carats').value = targetArticle
                    .querySelector(':nth-child(3)')
                    .textContent.split(': ')[1];
                document.querySelector('#price').value = targetArticle
                    .querySelector(':nth-child(4)')
                    .textContent.split(': ')[1]
                    .split(' $')[0];
                document.querySelector('#type').value = targetArticle
                    .querySelector(':nth-child(5)')
                    .textContent.split(': ')[1];
            }

            liItem.appendChild(editBtn);
            let cancelBtn = document.createElement('button');
            cancelBtn.classList = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', cancel);

            function cancel(e) {
                e.currentTarget.parentNode.remove();
                addBtn.disabled = false;
            }

            liItem.appendChild(cancelBtn);
            addBtn.disabled = true;
            previewListSection.appendChild(liItem);

            name.value = '';
            color.value = '';
            carats.value = '';
            price.value = '';
            type.value = '';
        }
    });
}
