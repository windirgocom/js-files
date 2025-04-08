        document.addEventListener("DOMContentLoaded", function() {
            // Create loading spinner
            function createLoadingSpinner() {
                // Create container for spinner and image
                var container = document.createElement("div");
                container.className = "container";
                
                // Create spinner element
                var spinner = document.createElement("div");
                spinner.className = "spinner";
                
                // Create image element
                var image = document.createElement("img");
                image.src = "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/windir-go-pazaryeri-mxp4pr/assets/0w7x9j1t4ifv/windirim_logo_bej.png";
                image.style.width = "100px"; // Adjust image size as needed
                
                // Append elements to the container
                container.appendChild(spinner);
                container.appendChild(image);
                
                // Append container to the body
                document.body.appendChild(container);
            }
            
            // Call the function to create loading spinner
            createLoadingSpinner();
        });
