


function clickButton() {
    let buttons = document.getElementsByClassName('define-btn');

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
            this.classList.add('opacity-90', 'cursor-not-allowed');

            // Find the "Task Assigned" element and decrease the count
            let taskAssignedElement = document.getElementById('decrement'); // Adjust this selector if needed
            let taskCount = parseInt(taskAssignedElement.innerText);
            if (taskCount > 0) {
                taskAssignedElement.innerText = taskCount - 1;
            }

            // Find the navbar task count and increase it
            let navbarCountElement = document.querySelector('li.text-3xl span'); // Adjust this selector if needed
            let navbarCount = parseInt(navbarCountElement.innerText);
            navbarCountElement.innerText = navbarCount + 1;
        });
    }
}

clickButton();

function clearDataFunc() {
    
}
