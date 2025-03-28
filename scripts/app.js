
function saveTask(){
    console.log("saveTask is running");
    //get value from fields
        let title = $("#txtTitle").val();
        let description = $("#txtDescription").val();
        let color = $("#selColor").val();
        let status = $("#txtStatus").val();
        let date = $("#txtDate").val();
        let budget = $("#txtBudget").val();
    // new task object
    let information = new Task(title, description, color, status, date, budget);
    console.log(information);
    
    display(information);
}

function display(information){
    let syntax = `
    <div class="task-container" style="border-color:${information.color}">
        <div class="task">
            <div class="task-information">
                <h5>${information.title}</h5>
                <p>${information.description}</p>
            </div>

            <div class="task-status">${information.status}</div>

            <div class="task-date-budget">
                <span>${information.date}</span>
                <span>${information.budget}</span>
            </div>
        </div>`

    $("#list").append(syntax);
}

function init(){
    console.log("the init is running");
    $("#submit").click(saveTask);

}

window.onload = init;//wait til html and css loads to execute function

/*
        <ul id="result">
        <li id="title">${information.title}</li>
        <li id="description">${information.description}</li>
        <li id="color">${information.color}</li>
        <li id="status">${information.status}</li>
        <li id="date">${information.date}</li>
        <li id="budget">${information.budget}</li>
    </ul>` */