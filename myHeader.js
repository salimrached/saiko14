// myHeader.js

// Load header content dynamically
document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header>
            <div id="logoSaiko"><a href="index.html" ><h1 >saiko14</h1></a></div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="gaming.html">Gaming</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;

    // Add the header content to the placeholder element
    document.getElementById("header").innerHTML = headerHTML;
});
