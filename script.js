const modeToggle = document.getElementById('modeToggle');
//TOGGLE MODE
modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

function toggleMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
}


var storedSentences = [];

function storeSentence() {
    var noteTitle = document.getElementById('noteTitle').value;
    var userText = document.getElementById('userText').value;
    var sentences = userText.trim().split(/\.\s+/g);

    sentences.forEach(function (sentence) {
        storedSentences.push({
            title: noteTitle,
            text: sentence.trim()
        });
    });
}

// STORE SENTENCES IN AN ARRAY

// Empty the array and store the sentences again in the array every 3 seconds
setInterval(function() {
    storedSentences = [];
    var noteTitle = document.getElementById('noteTitle').value;
    var userText = document.getElementById('userText').value;
    var sentences = userText.trim().split(/\.\s+/g);

    sentences.forEach(function (sentence) {
        storedSentences.push({
            title: noteTitle,
            text: sentence.trim()
        });
    });
}, 3000); // Run every 3 seconds


// KEYPHRASE EXTRACTION

var keyphraseArray = []; // Array to store keyphrases

// Function to extract keyphrases from each sentence
function extractKeyphrases() {
    var userText = document.getElementById('userText').value;
    var sentences = userText.trim().split(/\.\s+/g);

    // Clear the existing keyphrase array
    keyphraseArray = [];

    // Extract keyphrases from each sentence
    sentences.forEach(function(sentence) {
        // Split the sentence into words
        var words = sentence.trim().split(/\s+/g);

        // Define a regular expression for a phrase with 2 or more words
        var phraseRegex = /(?:[A-Za-z]+(?:'[A-Za-z]{1,2})?\s){2,}[A-Za-z]+(?:'[A-Za-z]{1,2})?/g;

        // Extract keyphrases from each sentence
        var keyphrases = sentence.match(phraseRegex) || [];

        // Add the keyphrases to the keyphrase array
        keyphraseArray.push(...keyphrases);
    });
}

// Run the keyphrase extraction code every 3 seconds
setInterval(extractKeyphrases, 3000);

// webscraping code------------------------------------------------------------




// WEBSCRAPE CODE





//------------------------------------------------------------------------------

// ADD KEYPHRASE TO REFERENCE SECTION

const userInput = document.getElementById('userText'); // Add this line to fix the error

const referenceSection = document.createElement('div');
referenceSection.id = 'referenceSection';
referenceSection.style.marginTop = '20px';
referenceSection.style.padding = '10px';
referenceSection.style.border = '1px solid #ccc';
referenceSection.style.borderRadius = '5px';

const heading = document.createElement('h3');
heading.style.marginTop = '0';
heading.style.fontSize = '1.2em';
heading.textContent = 'References';
referenceSection.appendChild(heading);

const keyphraseList = document.createElement('ul');
keyphraseList.style.listStyleType = 'none';
keyphraseList.style.paddingLeft = '0';
referenceSection.appendChild(keyphraseList);

function updateKeyphraseList() {
    keyphraseList.innerHTML = '';
    keyphraseArray.forEach((keyphrase, index) => {
        const item = document.createElement('li');
        item.style.padding = '5px';
        item.textContent = `${index + 1}. ${keyphrase}`;
        keyphraseList.appendChild(item);
    });
}

updateKeyphraseList();
setInterval(updateKeyphraseList, 3000);

userInput.parentNode.insertBefore(referenceSection, userInput.nextSibling);



//-----------------------------------------------------------reference height adjustment---------------------------------------------------------------



// ADJUST THE HEIGHT OF THE REFERENCE SECTION


referenceSection.style.maxHeight = '200px'; // Set the maximum height
referenceSection.style.overflowY = 'auto'; // Enable scroll if the content exceeds the maximum height
referenceSection.style.wordWrap = 'break-word'; // Allow long words to break and wrap to the next line

// Check if the content exceeds the maximum height and adjust the height accordingly
function adjustHeight() {
    referenceSection.style.height = 'auto'; // Reset the height to auto
    if (referenceSection.scrollHeight > referenceSection.offsetHeight) {
        referenceSection.style.height = referenceSection.scrollHeight + 'px';
    }
}

// Call the adjustHeight function whenever the window is resized
window.addEventListener('resize', adjustHeight);

// Call the adjustHeight function initially
adjustHeight();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

        

       




// DOWNLOAD TEXT FUNCTION


const downloadbtn = document.querySelector('#downloadButton');
downloadbtn.addEventListener('click', function() {
    const userText = document.querySelector('#userText').value;
    const downloadText = userText + "\n\n\n";
    
    // Add keyphrases from keyphrase array after the reference
    let keyphrasesText = "";
    for(let i = 0; i < keyphraseArray.length; i++) {
        keyphrasesText += `\n${i+1}. ${keyphraseArray[i].trim()}`;
    }
    const combinedText =  downloadText.trim() + `\n\n\n\nREFERENCES:\n${keyphrasesText.trim()}`;


   
    const blob = new Blob([combinedText], { type: 'text/plain' });

    // Create a temporary link element
    const tempLink = document.createElement('a');
    tempLink.href = URL.createObjectURL(blob);

    // Set the filename for the download
    const noteTitle = document.querySelector('#noteTitle').value;
    const fileName = (noteTitle ? noteTitle.toLowerCase().replace(/ /g, '_') : 'untitled') + '.txt';
    tempLink.download = fileName;

    // Add the link to the document and click on it
    document.body.appendChild(tempLink);
    tempLink.click();

    // Clean up the link
    document.body.removeChild(tempLink);
    setTimeout(function() {
        URL.revokeObjectURL(tempLink.href);
    }, 100);
});








        






