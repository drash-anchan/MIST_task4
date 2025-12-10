//customElements.define('navbar', CustomNavbar);
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    background-color: #5558efff;
                    color: white;
                }
                .navbar-container {
                    display: flex;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem;
                    justify-content: space-between;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .logo a {
                    color: white;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                }
                .nav-links a:hover {
                    text-decoration: underline;
                }
                .search-bar {
                    display: flex;
                    flex-grow: 1;
                    margin: 0 2rem;
                    max-width: 500px;
                }
                .search-bar input {
                    flex-grow: 1;
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 4px 0 0 4px;
                }
                .search-bar button {
                    background-color: #febd69;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0 4px 4px 0;
                    cursor: pointer;
                }
                .mobile-menu-btn {
                    display: none;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .search-bar {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block;
                        background: none;
                        border: none;
                        color: white;
                        cursor: pointer;
                    }
                }
            </style>
            <div class="navbar-container">
                <div class="logo">
                    <a href="/"Delulu</a>
                </div>
                
                <div class="search-bar">
                    <input type="text" placeholder="Search products...">
                    <button><i data-feather="search"></i></button>
                </div>
                
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Products</a>
                    <a href="login.html">Login</a>
                    <a href="#">Special Offers</a>
                </div>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </div>
`;
        
        // Initialize feather icons
        feather.replace();
       
         
        // Mobile menu toggle functionality
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const accountNav = this.shadowRoot.querySelector('.account-nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            accountNav.querySelector('.account-dropdown').style.display = 
                accountNav.querySelector('.account-dropdown').style.display === 'block' ? 'none' : 'block';
            feather.replace();
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);