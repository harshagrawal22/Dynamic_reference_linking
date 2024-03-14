const modeToggle = document.getElementById('modeToggle');

        modeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
        });

        function toggleMode() {
            // Toggle dark mode class on the body
            document.body.classList.toggle('dark-mode');
        }

        function downloadText() {
            // Get the user's input title
            var noteTitle = document.getElementById('noteTitle').value;

            // Get the user's input text
            var userText = document.getElementById('userText').value;

            // Combine title and text
            var combinedText = userText;

            // Create a Blob with the combined text and specify the MIME type
            var blob = new Blob([combinedText], { type: 'text/plain' });

            // Create a link element to trigger the download
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);

            // Set the filename for the download
            var currentDate = new Date();
            var fileName = (noteTitle ? noteTitle.toLowerCase().replace(/ /g, '_') : 'untitled') + '.txt';
            a.download = fileName;

            // Append the link to the body and trigger the click event
            document.body.appendChild(a);
            a.click();

            // Remove the link from the body
            document.body.removeChild(a);
        }