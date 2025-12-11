class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer-link:hover {
                    color: #f43f5e;
                
                }
                           
            </style>
            <footer class="text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4">WhimsyWonders</h3>
                            <p class="text-primary-100">Bringing fictional dreams to reality (sort of).</p>
                        </div>
                        <div>
                            <h4 class="font-bold mb-4">Shop</h4>
                            <ul class="space-y-2">
                                <li><a href="page.html" class="footer-link text-primary-100 hover:text-white">All Products</a></li>
                                <li><a href="#" class="footer-link text-primary-100 hover:text-white">Special Offers</a></li>
                            </ul>
</div>
                        <div>
                            <h4 class="font-bold mb-4">Company</h4>
                            <ul class="space-y-2">
                                <li><a href="about.html" class="footer-link text-primary-100 hover:text-white">About Us</a></li>
                            </ul>
</div>
                        <div>
                            <h4 class="font-bold mb-4">Connect</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="footer-link text-primary-100 hover:text-white">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="footer-link text-primary-100 hover:text-white">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="footer-link text-primary-100 hover:text-white">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="footer-link text-primary-100 hover:text-white">
                                    <i data-feather="youtube"></i>
                                </a>
                            </div>
                            <p class="mt-4 text-primary-100">Subscribe to our newsletter</p>
                            <div class="flex mt-2">
                                <input type="email" placeholder="Your email" class="px-3 py-2 rounded-l-lg text-gray-800 w-full">
                                <button class="bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-r-lg">→</button>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-primary-500 mt-8 pt-8 text-center text-primary-200">
                        <p>© 2023 WhimsyWonders Emporium. All rights reserved. (Not really, it's all fictional)</p>
                    </div>
                </div>
            </footer>
        `;
    }
}


customElements.define('custom-footer', CustomFooter);
