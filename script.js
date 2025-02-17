var selectedTask=null;

function addOrUpdateTask()
{
    if(selectedTask==null)
    {
        insertTask();
    }
    else
    {
        updateTask();
    }
}

function updateTask()
{
    selectedTask.getElementsByClassName('task-info')[0].innerHTML=`
        <strong>${document.getElementById('title').value}</strong>
        <p>${document.getElementById('description').value}</p>
        <small>Due: ${document.getElementById('dueDate').value}</small>
        <small>Priority: ${document.getElementById('priority').value}</small>
    `;

    clearForm();
    selectedTask=null;
}


function insertTask()
{
    const title= document.getElementById('title').value;
    const description= document.getElementById('description').value;
    const dueDate= document.getElementById('dueDate').value; 
    const priority= document.getElementById('priority').value;

    if(!title)
    {
        alert('Kindly add a title to your task!');
        return;
    }
    const taskList= document.getElementById('taskList');
    const taskDiv= document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.innerHTML=`
    <div class="task-info">
            <strong>${title}</strong>
            <p>${description}</p>
            <small>Due: ${dueDate}</small>
            <small>Priority: ${priority}</small>
    </div>

    <div class="task-actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Delete</button>
    </div>
    
    `;

    taskList.appendChild(taskDiv);
        
}

function editTask(button)
{
    selectedTask = button.parentElement.parentElement;

    document.getElementById('title').value =selectedTask.getElementsByTagName('strong')[0].innerText;
    document.getElementById('description').value =selectedTask.getElementsByTagName('p')[0].innerText;

    document.getElementById('dueDate').value =selectedTask.getElementsByTagName('small')[0].innerText.replace('Due: ','').trim();
    document.getElementById('priority').value =selectedTask.getElementsByTagName('small')[1].innerText.replace('Priority: ','').trim();
}

function removeTask(button)
{
    if(confirm('Do you want to delete this task?'))
    {
        const task=button.parentElement.parentElement;
        document.getElementById('taskList').removeChild(task);
    }
}

function clearForm()
{
    document.getElementById('title').value='';
    document.getElementById('description').value='';
    document.getElementById('dueDate').value='';
    document.getElementById('priority').value='';
}

 