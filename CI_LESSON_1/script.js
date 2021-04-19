const navItems = [
    {
        name:'Item 1',
    },
    {
        name:'Item 2',
    },
    {
        name:'Item 3',
    },
    {
        name:'Item 4',
    },
    {
        name:'Item 5',
    },
];

let input = document.getElementsByClassName("menu")

window.onload = function() {
    for (i=0;i<navItems.length;i++){
        console.log(navItems[i].name)
        document.getElementsByClassName("menu")[0].innerHTML+=`<span>${navItems[i].name}</span>`;
    }   
}