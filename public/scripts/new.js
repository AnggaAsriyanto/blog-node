const pgphPost      = document.querySelector('.pgph-post');
const pgphPosts     = document.querySelectorAll('.pgph-post');
const listPost      = document.querySelector('.list-post');
const listPosts     = document.querySelectorAll('.list-post');
const pgphBtn       = document.getElementById('add-pgph');
const listBtn       = document.getElementById('add-list');
const submitBtn     = document.getElementById('submit-button');
const removelistBtn = document.getElementById('remove-list');
const removepgphBtn = document.getElementById('remove-pgph');

let pgphIndex = pgphPosts.length;
let listIndex = pgphPosts.length;

pgphBtn.addEventListener('click', () => {
    pgphIndex += 1;

    const pgph = document.createElement('div');
    pgph.classList.add('pgph-container');

    pgph.innerHTML = `
    <div class="title">
        <small>
            <label for="pgph-${pgphIndex}">
                Paragraf ${pgphIndex}
            </label>
        </small>
    </div>
    <div class="input-fp">
        <textarea class="textarea-form"  name="pgph[]" id="pgph-${pgphIndex}" cols="30" rows="10" spellcheck="false"></textarea>
    </div>`;

    pgphPost.append(pgph);
})

listBtn.addEventListener('click', () => {
    listIndex += 1;

    const list = document.createElement('div');
    list.classList.add('list-container');

    list.innerHTML =`
    <div class="title-container-list">
        <div class="title-list">
            <small>
                <label for="title-list-${listIndex}">Title list - ${listIndex}</label>
            </small>
        </div>

        <div class="input-fp">
            <input class="title-form" type="text" name="title-list[]" id="title-list-${listIndex}" spellcheck="false">
        </div>

    </div>

    <div class="img-container-list">
        <div class="img-list">
            <small>
                <label for="img-list-${listIndex}">Gambar list - ${listIndex}</label>
            </small>
        </div>

        <div class="input-fp">
            <input class="input-file" type="file" name="img-list[]" id="img-list-${listIndex}" accept="image/png, image/jpeg">
        </div>
    </div>
        
    <div class="desc-container-list">
        <div class="desc-list">
            <small>
                <label for="desc-list-${listIndex}">Deskripsi list - ${listIndex}</label>
            </small>
        </div>

        <div class="input-fp">
            <textarea class="textarea-form" name="desc-list[]" id="desc-list-${listIndex}" cols="50" rows="10"></textarea>
        </div>
    </div>`

    listPost.append(list);
})

removepgphBtn.addEventListener('click', () => {
    if(pgphIndex > 1) {
        pgphIndex -= 1;
        const pgphCont = document.querySelectorAll('.pgph-container');
        pgphCont[pgphCont.length -1].remove();
    }
})

removelistBtn.addEventListener('click', () => {
    if(listIndex > 1) {
        listIndex -= 1;
        const listCont = document.querySelectorAll('.list-container');
        listCont[listCont.length -1].remove();
    }
})