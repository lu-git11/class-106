/*
let title=title;
let description=description;
let color=color;
let status=status;
let date=date;
let budget=budget;
*/

function saveTask()
{
    console.log("saveTask is running");
}


function init()
{
    console.log("the init is running");
    $("#submit").click(saveTask);

}

window.onload = init;//wait til html and css loads to execute function