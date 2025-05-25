
class MySidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Jack Isaacs <span style="color: grey;"> | Software Developer</span></h1>
                <nav>
                    <ul>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Work">My Work</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }

}
customElements.define('my-sidebar', MySidebar);