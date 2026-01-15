/**
 * layout.js - site-wide header/footer and navigation logic
 * Editing this file updates header/footer across all pages.
 */

// ==========================================================================
// 1. Header HTML
// ==========================================================================
const headerContent = `
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-24">
        
        <div class="flex-shrink-0 flex items-center cursor-pointer group" onclick="window.location.href='index.html'">
            <img class="h-16 w-auto transition-transform duration-300 group-hover:scale-105" src="images/logo_origin.webp" alt="99 Financial Inc.">
        </div>

        <nav class="hidden lg:flex space-x-8 items-center">
            <a href="index.html" class="nav-link text-slate-600 font-medium hover:text-brand-gold transition">Home</a>
            <a href="about.html" class="nav-link text-slate-600 font-medium hover:text-brand-gold transition">About</a>
            
            <div class="relative group h-full flex items-center z-50">
                <button class="nav-btn flex items-center text-slate-600 font-medium hover:text-brand-gold transition py-2 gap-1 focus:outline-none" data-group="solutions">
                    Solutions <i class="fa-solid fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                </button>
                <div data-dropdown="solutions" class="absolute top-full left-0 mt-2 w-64 bg-white border-t-4 border-brand-gold shadow-xl rounded-b-md hidden pt-2 animate-fadeIn">
                    <a href="solution.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold border-b border-slate-50 font-bold">Overview</a>
                    <a href="corporate-par.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Corporate Par</a>
                    <a href="cda.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">CDA Planning</a>
                    <a href="ifa.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">IFA Strategy</a>
                    <a href="estate-planning.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Estate Planning</a>
                </div>
            </div>

            <div class="relative group h-full flex items-center z-50">
                <button class="nav-btn flex items-center text-slate-600 font-medium hover:text-brand-gold transition py-2 gap-1 focus:outline-none" data-group="resources">
                    Resources <i class="fa-solid fa-chevron-down text-[10px] opacity-70 ml-1"></i>
                </button>
                <div data-dropdown="resources" class="absolute top-full left-0 mt-2 w-56 bg-white border-t-4 border-brand-gold shadow-xl rounded-b-md hidden pt-2 animate-fadeIn">
                    <a href="resources.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold border-b border-slate-50 font-bold">Overview</a>
                    <a href="case-studies.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Case Studies</a>
                    <a href="events.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">Events</a>
                    <a href="faq.html" class="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-gold">FAQ</a>
                </div>
            </div>

            <a href="contact.html" class="nav-link text-slate-600 font-medium hover:text-brand-gold transition">Contact</a>
        </nav>

        <div class="hidden lg:flex items-center">
            <a href="https://tidycal.com/greatec/30-minute-meeting" target="_blank" class="bg-brand-gold text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-brand-goldHover transition shadow-md hover:-translate-y-0.5 duration-200">
                Book a Consultation
            </a>
        </div>

        <div class="lg:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-brand-blue hover:text-brand-gold p-2">
                <i class="fa-solid fa-bars text-2xl"></i>
            </button>
        </div>
    </div>
</div>

<div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-32 left-0 top-24 z-40">
    <div class="px-6 py-6 space-y-3">
        <a href="index.html" class="block px-3 py-2 text-slate-600 font-bold hover:text-brand-gold">Home</a>
        <a href="about.html" class="block px-3 py-2 text-slate-600 hover:text-brand-gold">About</a>
        <div class="border-t border-gray-100 my-2"></div>
        <p class="px-3 text-xs text-gray-400 uppercase font-bold mb-2">Solutions</p>
        <a href="corporate-par.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold">Corporate Par</a>
        <a href="cda.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold">CDA Planning</a>
        <a href="ifa.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold">IFA Strategy</a>
        <a href="estate-planning.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold">Estate Planning</a>
        <div class="border-t border-gray-100 my-2"></div>
        <p class="px-3 text-xs text-gray-400 uppercase font-bold mb-2">Resources</p>
        <a href="resources.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold font-bold">Overview</a>
        <a href="case-studies.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold">Case Studies</a>
        <a href="events.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold">Events</a>
        <a href="faq.html" class="block pl-6 py-2 text-sm text-slate-600 hover:text-brand-gold">FAQ</a>
        <a href="contact.html" class="block px-3 py-2 text-lg font-medium text-slate-600 hover:text-brand-gold">Contact</a>
    </div>
</div>
`;

// ==========================================================================
// 2. Footer HTML
// ==========================================================================
const footerContent = `
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
            <img src="images/logo_origin.webp" alt="99 Financial" class="h-8 w-auto brightness-0 invert opacity-90 mb-6">
            <p class="mb-2 text-slate-400 text-sm"><i class="fa-solid fa-phone text-brand-gold mr-3"></i> 416 637 5302</p>
            <p class="mb-4 text-slate-400 text-sm"><i class="fa-solid fa-location-dot text-brand-gold mr-3 mt-1"></i> 85 Enterprise Blvd. Unit 306, Markham ON</p>
            <div class="flex space-x-4 mt-6">
                <a href="#" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition"><i class="fa-brands fa-linkedin-in text-sm"></i></a>
                <a href="#" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition"><i class="fa-brands fa-weixin text-sm"></i></a>
            </div>
        </div>
        <div>
            <h4 class="text-white font-bold uppercase text-xs border-l-2 border-brand-gold pl-3 mb-4">Solutions</h4>
            <ul class="space-y-2">
                <li><a href="corporate-par.html" class="hover:text-brand-gold transition">Corporate Par</a></li>
                <li><a href="cda.html" class="hover:text-brand-gold transition">CDA Planning</a></li>
                <li><a href="ifa.html" class="hover:text-brand-gold transition">IFA Strategy</a></li>
                <li><a href="estate-planning.html" class="hover:text-brand-gold transition">Estate Planning</a></li>
            </ul>
        </div>
        <div>
            <h4 class="text-white font-bold uppercase text-xs border-l-2 border-brand-gold pl-3 mb-4">Resources</h4>
            <ul class="space-y-2">
                <li><a href="case-studies.html" class="hover:text-brand-gold transition">Case Studies</a></li>
                <li><a href="resources.html" class="hover:text-brand-gold transition">Guides</a></li>
                <li><a href="faq.html" class="hover:text-brand-gold transition">FAQ</a></li>
                <li><a href="events.html" class="hover:text-brand-gold transition">Events</a></li>
            </ul>
        </div>
        <div>
            <h4 class="text-white font-bold uppercase text-xs border-l-2 border-brand-gold pl-3 mb-4">Legal</h4>
            <ul class="space-y-2">
                <li><a href="#" class="hover:text-brand-gold transition">Privacy Policy</a></li>
                <li><a href="#" class="hover:text-brand-gold transition">Terms & Conditions</a></li>
            </ul>
            <a href="https://tidycal.com/greatec/30-minute-meeting" class="inline-block mt-4 border border-slate-700 px-4 py-2 rounded text-xs hover:bg-brand-gold hover:text-white transition">Book a Meeting</a>
        </div>
    </div>
    <div class="border-t border-slate-800 pt-8 text-xs text-slate-500 text-justify">
        <p class="mb-2"><strong>Disclaimer:</strong> The information on this website is for general informational purposes only and does not constitute legal, tax, or accounting advice.</p>
        <p>© 2025 99 Financial Inc. All Rights Reserved.</p>
    </div>
</div>
`;

// ==========================================================================
// 3. Injection & interaction logic
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
    
    // A. Inject Header
    const headerEl = document.getElementById('app-header');
    if(headerEl) {
        headerEl.innerHTML = headerContent;
        headerEl.className = "fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 border-b border-gray-100";
    }

    // B. Inject Footer
    const footerEl = document.getElementById('app-footer');
    if(footerEl) {
        footerEl.innerHTML = footerContent;
        footerEl.className = "bg-brand-dark text-slate-400 pt-16 pb-8 border-t border-slate-800 text-sm font-light mt-auto";
    }

    // C. Mobile menu toggle (slight delay to ensure DOM ready)
    setTimeout(() => {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });
        }
    }, 50);

    // D. Auto-highlight current page
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    // 1. Highlight nav links
    const links = document.querySelectorAll('nav a, #mobile-menu a');
    links.forEach(link => {
        if(link.getAttribute('href') === currentPath) {
            link.classList.remove('text-slate-600', 'text-slate-700');
            link.classList.add('text-brand-gold', 'font-bold');
            
            // If inside dropdown, also highlight parent button
            const parentGroup = link.closest('.group');
            if(parentGroup) {
                const parentBtn = parentGroup.querySelector('button');
                if(parentBtn) {
                    parentBtn.classList.add('text-brand-gold', 'font-bold');
                    parentBtn.classList.remove('text-slate-600');
                }
            }
        }
    });

    // 2. Manually highlight dropdown parent buttons
    const solutionsPages = ['solutions.html', 'corporate-par.html', 'cda.html', 'ifa.html', 'estate-planning.html'];
    const resourcesPages = ['case-studies.html', 'events.html', 'resources.html', 'faq.html'];

    if(solutionsPages.includes(currentPath)) {
        const btn = document.querySelector('button[data-group="solutions"]');
        if(btn) { btn.classList.add('text-brand-gold', 'font-bold'); btn.classList.remove('text-slate-600'); }
    }
    if(resourcesPages.includes(currentPath)) {
        const btn = document.querySelector('button[data-group="resources"]');
        if(btn) { btn.classList.add('text-brand-gold', 'font-bold'); btn.classList.remove('text-slate-600'); }
    }

    // E. Scroll shadow
    window.addEventListener('scroll', () => {
        if (headerEl) {
            if (window.scrollY > 10) headerEl.classList.add('shadow-md');
            else headerEl.classList.remove('shadow-md');
        }
    });

    // F. Dropdown logic: hover/click opens; only outside click closes
    const dropdownConfigs = [
        {
            button: document.querySelector('button[data-group="solutions"]'),
            menu: document.querySelector('[data-dropdown="solutions"]')
        },
        {
            button: document.querySelector('button[data-group="resources"]'),
            menu: document.querySelector('[data-dropdown="resources"]')
        }
    ];

    const closeAllDropdowns = () => {
        dropdownConfigs.forEach(({ menu }) => {
            if(menu) menu.classList.add('hidden');
        });
    };

    dropdownConfigs.forEach(({ button, menu }) => {
        if(!button || !menu) return;

        const openMenu = () => {
            closeAllDropdowns();
            menu.classList.remove('hidden');
        };

        // Hover/focus keeps it open
        button.addEventListener('mouseenter', openMenu);
        button.addEventListener('focus', openMenu);
        menu.addEventListener('mouseenter', openMenu);

        // Click/keyboard opens but does not close
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openMenu();
        });
        button.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openMenu();
            }
        });
    });

    // Close only when clicking outside
    document.addEventListener('click', (e) => {
        const isInsideDropdown = dropdownConfigs.some(({ button, menu }) => {
            if(!button || !menu) return false;
            return button.contains(e.target) || menu.contains(e.target);
        });
        if(!isInsideDropdown) closeAllDropdowns();
    });
});
