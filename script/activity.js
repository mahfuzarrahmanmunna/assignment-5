


function clickButton() {
    let buttons = document.getElementsByClassName('define-btn');
    let completedCount = 0;
    const totalTask = buttons.length;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            let card = this.closest('.p-6');

            let heading = card.querySelector('.define-heading');

            let headingText = heading.innerText;
            console.log("✅ Found Heading:", headingText);

            let newParagraph = document.createElement('p');
            // initialize date
            let now = new Date();
            // and date to used time
            let timeNow = now.toLocaleTimeString();
            newParagraph.style.backgroundColor = '#f4f7ff';
            newParagraph.style.padding = '16px';
            newParagraph.style.marginTop = '12px';
            newParagraph.style.borderRadius = '12px'
            newParagraph.innerText = `You have completed the task ${headingText} at ${timeNow}`;

            document.getElementById('new-creation').appendChild(newParagraph);

            alert(`Board updated Successfully`);

            // Disable the button
            this.disabled = true;
            this.classList.add('opacity-90', 'cursor-not-allowed')



            // Disable the button
            let taskAssignedDecrement = document.getElementById('decrement');
            let taskCount = parseInt(taskAssignedDecrement.innerText);
            if (taskCount > 0) {
                taskAssignedDecrement.innerText = taskCount - 1
            }

            // Increment 
            let navbarCountElement = document.querySelector('li.text-3xl span'); // Adjust this selector if needed
            let navbarCount = parseInt(navbarCountElement.innerText);
            navbarCountElement.innerText = navbarCount + 1;


            // track completed task
            completedCount++
            if (completedCount == totalTask) {
                alert('Congrats!!! You have completed all the current task')
            }
        });
    }
}

clickButton();


function clearHistoryData() {
    document.getElementById('clear-history').addEventListener('click', () => {
        document.getElementById('new-creation').innerText = ''
    })
}
clearHistoryData();


