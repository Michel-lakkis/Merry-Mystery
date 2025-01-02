const number = document.getElementById('number');
const container = document.getElementById('allPlayers');
const numberinput = document.getElementById('numberinput');

function validateNumber() {
    if (number.value < 4) {
        alert("Number must be equal to or greater than 4");
        return;
    }
    fillData();
}

function fillData() {
    // Remove the initial input for number
    numberinput.remove();

    // Create player input fields
    for (let i = 1; i <= number.value; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `
            <input type="text" id="name${i}" class="name" placeholder="Name" required>
            <input type="text" id="email${i}" class="email" placeholder="Email" required>
        `;
        container.appendChild(playerDiv);
    }

    // Create the run button
    const runbutton = document.createElement('button');
    runbutton.textContent = 'Send emails';
    runbutton.id = 'Run';
    runbutton.disabled = true;
    container.appendChild(runbutton);

    // Re-check inputs whenever user types
    const inputs = container.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => checkInputs(inputs, runbutton));
    });

    // Add event listener to the button
    runbutton.addEventListener('click', () => {
        const pairings = generatePairings();
        sendEmails(pairings);
        window.location.href = 'final.html';
    });
}

function checkInputs(inputs, runbutton) {
    // Check if all inputs are filled
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
    runbutton.disabled = !allFilled;
}

function generatePairings() {
    const players = [];
    const numberOfPlayers = number.value;

    // Collect player data
    for (let i = 1; i <= numberOfPlayers; i++) {
        const name = document.getElementById("name" + i).value;
        const email = document.getElementById("email" + i).value;
        players.push({ name, email });
    }

    // Shuffle players ensuring no one gets themselves
    const shuffledPlayers = [...players];
    do {
        for (let i = shuffledPlayers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
        }
    } while (shuffledPlayers.some((player, index) => player.name === players[index].name));

    // Create pairings
    const pairings = [];
    for (let i = 0; i < numberOfPlayers; i++) {
        pairings.push({
            giver: players[i],
            getter: shuffledPlayers[i],
        });
    }

    // Log the pairings to the console
    console.log(pairings);

    return pairings;
}

// Initialize EmailJS with user ID
emailjs.init('x7I1plL0AygXMCvgr');

function sendEmails(pairings) {
    pairings.forEach((pair) => {
        const emailParams = {
            giver_name: pair.giver.name,
            giver_email: pair.giver.email,
            getter_name: pair.getter.name,
            getter_email: pair.getter.email,
        };

        emailjs.send('YourMerryMystery', 'template_hni301a', emailParams)
            .then((response) => {
                console.log(`Email sent to ${pair.giver.name} (${pair.giver.email}):`, response);
            })
            .catch((error) => {
                console.error(`Failed to send email to ${pair.giver.name} (${pair.giver.email}):`, error);
            });
    });
}
