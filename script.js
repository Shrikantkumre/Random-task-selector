const textarea = document.querySelector('textarea')
const tags = document.querySelector('.tags')



function displayarray(ele) {

    const string = ele.target.value.trim()
    const array = string.split(',').filter(value => value !== '')



    tags.innerHTML = '';
    array.forEach((value) => {
        const newelement = document.createElement('div')
        newelement.classList.add('tag')
        newelement.innerHTML = value
        tags.appendChild(newelement)
    });

    if (ele.key == "Enter") {
        const changeInterval = setInterval(() => {
            const randomEle = randomElement();
            randomEle.classList.add('highlight')


            setTimeout(() => {
                randomEle.classList.remove('highlight')
            }, 100)
        }, 100)
        setTimeout(() => {
            clearInterval(changeInterval);
            const randomEle = randomElement();
            randomEle.classList.add('highlight')
        }, 5000);

    }
}

textarea.addEventListener('keyup', displayarray)



function randomElement() {

    const allTags = document.querySelectorAll(".tag")
    const randomvalue = allTags[Math.round(Math.random() * allTags.length)]
    return randomvalue
}