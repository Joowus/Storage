
document.addEventListener('DOMContentLoaded', () => {
    const helpTextList = [
        {
            id: 'home',
            text: 'This is the home section. Here you can find an overview of the project.'
        },
        {
            id: 'about',
            text: 'This section provides information about the project and its goals.'
        },
        {
            id: 'contact',
            text: 'In the contact section, you can find ways to get in touch with the project team.'
        }
    ]


    for(var i = 0; i < helpTextList.length; i++){
        let btn = document.querySelector('#' + helpTextList[i].id);

        btn.addEventListener('mouseenter', () => {

        })
    }

});