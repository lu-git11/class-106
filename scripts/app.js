
function sayHello()
{
    console.log("Hello again")
}

function init()
{
    console.log("Hello, Im init");
    sayHello();
}

window.onload = init;//wait til html and css loads to execute function