// Menu Data based on user requirements
const menuData = {
    "MENÚ": {
        description: "Nuestros clásicos para el día a día. Sabor casero con el toque especial de Abel.",
        mainImage: "images/menu/chicharron_de_pollo_menu.png",
        items: [
            { title: "CHICHARRON DE POLLO", price: "S/.15", img: "images/menu/chicharron_de_pollo_menu.png", time: "15m" },
            { title: "CHICHARRON DE POTA", price: "S/.15", img: "images/menu/chicharron_de_pota_menu.jpg", time: "15m" },
            { title: "CHICHARRON DE PESCADO", price: "S/.15", img: "images/menu/chicharron_de_pescado_menu.jpg", time: "15m" },
            { title: "CHAUFA DE PESCADO", price: "S/.15", img: "images/menu/chaufa_de_pescado_menu.jpg", time: "20m" },
            { title: "SALTADO DE PESCADO", price: "S/.15", img: "images/menu/saltado_de_pescado_menu.jpg", time: "20m" },
            { title: "PESCADO FRITO", price: "S/.15", img: "images/menu/pescado_frito_menu.jpg", time: "15m" },
        ]
    },
    "SUDADOS": {
        description: "Jugosos e intensos. Preparados a fuego lento para extraer todo el sabor del mar.",
        mainImage: "images/sudados/sudado_mixto.png",
        items: [
            { title: "SUDADO DE PESCADO", price: "S/.20", img: "images/sudados/sudado_de_pescado.jpg", time: "25m" },
            { title: "SUDADO DE LENGUADO", price: "S/.--", img: "images/sudados/sudado_de_lenguado.jpg", time: "25m" },
            { title: "SUDADO MIXTO", price: "S/.35", img: "images/sudados/sudado_mixto.png", time: "30m" },
            { title: "PARIHUELA DE ABEL", price: "S/.48", img: "images/sudados/parihuela.jpg", time: "30m" },
        ]
    },
    "SALTADOS": {
        description: "Poderoso sabor a wok. Cebolla, tomate y un toque de sillao saltados a fuego vivo.",
        mainImage: "images/saltados/saltado_de_mariscos.jpg",
        items: [
            { title: "SALTADO DE MARISCOS", price: "S/.38", img: "images/saltados/saltado_de_mariscos.jpg", time: "20m" },
            { title: "SALTADO DE LAPAS", price: "S/.38", img: "images/saltados/saltado_de_lapas.jpg", time: "20m" },
            { title: "SALTADO DE PESCADO", price: "S/.22", img: "images/saltados/saltado_de_pescado.jpg", time: "20m" },
            { title: "SALTADO DE PULPO", price: "S/.35", img: "images/saltados/saltado_de_pulpo.jpg", time: "20m" },
        ]
    },
    "CEVICHES": {
        description: "Fresco, cítrico y picante. El rey indiscutible de nuestra gastronomía peruana.",
        mainImage: "images/ceviches/ceviche_mixto.png",
        items: [
            { title: "PULPO AL OLIVO", price: "S/.35", img: "images/ceviches/pulpo_al_olivo.png", time: "15m" },
            { title: "PULPO AL GRILL", price: "S/.38", img: "images/ceviches/pulpo_al_grill.png", time: "20m" },
            { title: "CEVICHE DE PESCADO", price: "S/.25", img: "images/ceviches/ceviche_de_pescado.png", time: "10m" },
            { title: "CEVICHE MIXTO", price: "S/.30", img: "images/ceviches/ceviche_mixto.png", time: "10m" },
            { title: "CEVICHE MARISCOS", price: "S/.38", img: "images/ceviches/ceviche_de_mariscos.png", time: "12m" },
            { title: "CEVICHE LENGUADO", price: "S/.38", img: "images/ceviches/ceviche_de_lenguado.png", time: "10m" },
            { title: "CEVICHE 3 CREMAS", price: "S/.40", img: "images/ceviches/ceviche_tres_cremas.png", time: "15m" },
            { title: "CEVICHOP", price: "S/.28", img: "images/ceviches/cevichop.png", time: "10m" },
            { title: "LECHE DE TIGRE", price: "S/.18", img: "images/ceviches/leche_de_tigre.png", time: "10m" },
        ]
    },
    "ARROCES": {
        description: "El compañero perfecto. Sabores marinos infundidos en cada grano de arroz.",
        mainImage: "images/arroces/arroz_de_mariscos.jpg",
        items: [
            { title: "ARROZ DE MARISCOS", price: "S/.28", img: "images/arroces/arroz_de_mariscos.jpg", time: "25m" },
            { title: "CHAUFA DE MARISCOS", price: "S/.28", img: "images/arroces/chaufa_de_mariscos.jpg", time: "20m" },
            { title: "CHAUFA DE PESCADO", price: "S/.22", img: "images/arroces/chaufa_de_pescado.jpg", time: "20m" },
            { title: "RISOTTO DE MARISCOS", price: "S/.28", img: "images/arroces/rissot_de_mariscos.jpg", time: "30m" },
            { title: "ARROZ DE CAMARÓN", price: "S/.40", img: "images/arroces/arroz_de_camaron.jpg", time: "25m" },
        ]
    },
    "POLLO": {
        description: "Jugoso, suave y con un toque de sazón criolla. Desde milanesas hasta un clásico chaufa.",
        mainImage: "images/pollo/chaufa_especial.png",
        items: [
            { title: "SALTADO DE POLLO", price: "S/.20", img: "images/pollo/saltado_de_pollo.jpg", time: "15m" },
            { title: "CHAUFA DE POLLO", price: "S/.20", img: "images/pollo/chaufa_de_pollo.jpg", time: "20m" },
            { title: "SUDADO DE POLLO", price: "S/.20", img: "images/pollo/sudado_de_pollo.jpg", time: "25m" },
            { title: "MILANESA", price: "S/.20", img: "images/pollo/milanesa.png", time: "15m" },
            { title: "CHICHARRÓN DE POLLO", price: "S/.20", img: "images/pollo/chicharron_de_pollo.png", time: "15m" },
            { title: "CHAUFA ESPECIAL (POLLO - CARNE)", price: "S/.25", img: "images/pollo/chaufa_especial.png", time: "20m" }
        ]
    },
    "CARNE": {
        description: "Cortes sustanciosos bien sazonados, saltados al wok o a la plancha.",
        mainImage: "images/carne/lomo_saltado.png",
        items: [
            { title: "LOMO SALTADO", price: "S/.20", img: "images/carne/lomo_saltado.png", time: "20m" },
            { title: "CHAUFA DE CARNE", price: "S/.20", img: "images/carne/chaufa_de_carne.png", time: "20m" },
            { title: "SUDADO DE CARNE", price: "S/.20", img: "images/carne/sudado_de_carne.png", time: "25m" },
            { title: "BISTECK", price: "S/.20", img: "images/carne/bisteck.png", time: "15m" },
            { title: "BISTECK A LO POBRE", price: "S/.25", img: "images/carne/bisteck_a_lo_pobre.png", time: "20m" },
            { title: "CHURRASCO", price: "S/.20", img: "images/carne/churrazco.png", time: "20m" },
            { title: "TALLARÍN SALTADO", price: "S/.20", img: "images/carne/tallarin_saltado.png", time: "20m" }
        ]
    },
    "CROCANTES": {
        description: "Perfectamente dorados por fuera y tiernos por dentro. Chicharrones y jaleas espectaculares.",
        mainImage: "images/crocantes/jalea_real.png",
        items: [
            { title: "PESCADO FRITO", price: "S/.20", img: "images/crocantes/pescado_frito.png", time: "15m" },
            { title: "CHICHARRÓN DE PESCADO", price: "S/.22", img: "images/crocantes/chicharron_de_pescado.png", time: "15m" },
            { title: "CHICHARRÓN DE PULPO", price: "S/.35", img: "images/crocantes/chicharron_de_pulpo.jpg", time: "20m" },
            { title: "CHICHARRÓN MIXTO", price: "S/.38", img: "images/crocantes/chicharron_mixto.png", time: "15m" },
            { title: "CHICHARRÓN DE POTA", price: "S/.22", img: "images/crocantes/chicharron_de_pota.jpg", time: "15m" },
            { title: "CHICHARRÓN DE CAMARÓN", price: "S/.38", img: "images/crocantes/chicharron_de_camaron.jpg", time: "20m" },
            { title: "LAPAS FRITAS", price: "S/.40", img: "images/crocantes/lapas_fritas.jpg", time: "15m" },
            { title: "LAPAS ARREBOSADAS", price: "S/.38", img: "images/crocantes/lapas_arrebosadas.jpg", time: "20m" },
            { title: "JALEA PERSONAL", price: "S/.50", img: "images/crocantes/jalea_personal.jpg", time: "25m" },
            { title: "JALEA FAMILIAR", price: "S/.105", img: "images/crocantes/jalea_familiar.png", time: "30m" },
            { title: "JALEA REAL", price: "S/.115", img: "images/crocantes/jalea_real.png", time: "35m" }
        ]
    },
    "PICANTES": {
        description: "En salsa especial con mucho sabor marino, un toque picante y aromas tentadores.",
        mainImage: "images/picantes/picante_de_camaron.jpg",
        items: [
            { title: "PICANTE DE CAMARÓN", price: "S/.38", img: "images/picantes/picante_de_camaron.jpg", time: "25m" },
            { title: "PICANTE DE LAPAS", price: "S/.38", img: "images/picantes/picante_de_lapas.jpg", time: "25m" }
        ]
    },
    "DUOS Y TRIOS": {
        description: "La mejor manera de disfrutar varios platos al mismo tiempo.",
        mainImage: "images/duos_y_trios/trios.jpg",
        items: [
            {
                title: "DÚO MARINO",
                price: "S/.45",
                img: "images/duos_y_trios/duo.jpg",
                time: "20m",
                desc: "Elige 2: Ceviche Pescado, Arroz Mariscos, Chaufa Mariscos, Chicharrón Pescado, Chicharrón Mixto.",
                isCustom: true,
                options: ["Ceviche de Pescado", "Arroz de Mariscos", "Chaufa de Mariscos", "Chicharrón de Pescado", "Chicharrón Mixto"],
                maxSelections: 2
            },
            {
                title: "TRÍO MARINO",
                price: "S/.55",
                img: "images/duos_y_trios/trios.jpg",
                time: "25m",
                desc: "Elige 3: Ceviche Pescado, Arroz Mariscos, Chaufa Mariscos, Chicharrón Pescado, Chicharrón Mixto.",
                isCustom: true,
                options: ["Ceviche de Pescado", "Arroz de Mariscos", "Chaufa de Mariscos", "Chicharrón de Pescado", "Chicharrón Mixto"],
                maxSelections: 3
            }
        ]
    }
};

// Night Mode Data
const parrillaData = {
    "CORTES": {
        description: "Cortes seleccionados importados de primera.",
        mainImage: "images/cortes/parrilla_de_res.png",
        items: [
            { title: "PARRILLA DE POLLO", price: "S/.20", img: "images/cortes/parrilla_de_pollo.png", time: "20m", desc: "Pechuga de pollo a la parrilla." },
            { title: "PARRILLA DE CERDO", price: "S/.20", img: "images/cortes/parrilla_de_cerdo.png", time: "25m", desc: "Chuleta de cerdo tierna y jugosa." },
            { title: "PARRILLA DE RES", price: "S/.20", img: "images/cortes/parrilla_de_res.png", time: "20m", desc: "Lomo fino de res a la parrilla." }
        ]
    },
    "DOBLES": {
        description: "Doble porción, doble sabor. Arma tu combinación perfecta seleccionando 2 carnes.",
        mainImage: "images/dobles/dobles.png",
        items: [
            {
                title: "PARRILLA DOBLE A ELECCIÓN",
                price: "S/.38",
                img: "images/dobles/dobles.png",
                time: "30m",
                desc: "Elige exactamente 2 carnes: Pollo, Cerdo o Res.",
                isCustom: true,
                options: ["Pollo", "Cerdo", "Res"],
                maxSelections: 2
            }
        ]
    },
    "PARRILLA MARINA": {
        description: "Lo mejor del mar directo a las brasas.",
        mainImage: "images/parrilla_marina/parrilla_de_pulpo.png",
        items: [
            { title: "PULPO A LA PARRILLA", price: "S/.40", img: "images/parrilla_marina/parrilla_de_pulpo.png", time: "25m", desc: "Pulpo tierno a la parrilla con chimichurri." }
        ]
    },
    "TRIPLES": {
        description: "Para los amantes de la carne. Tres sabores en un solo plato.",
        mainImage: "images/triples/triples.png",
        items: [
            { title: "RES + POLLO + CERDO + CHORIZO", price: "S/.55", img: "images/triples/triples.png", time: "35m", desc: "Las mejores cuatro carnes juntas." }
        ]
    }
};

let currentDataSet = menuData;
let currentCategory = "CEVICHES"; // Default starting category
let currentHeroItem = null;

// DOM Elements
const categoryNav = document.getElementById('category-nav');
const mainDishImg = document.getElementById('main-dish-img');
const mainDishTitle = document.getElementById('main-dish-title');
const mainDishDesc = document.getElementById('main-dish-desc');
const mainDishPrice = document.getElementById('main-dish-price');
const cardsContainer = document.getElementById('cards-container');

// Login Modal Elements
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');

const toggleLink = document.getElementById('toggle-link');
const toggleModalMode = document.getElementById('toggle-modal-mode');
const modalTitle = document.getElementById('modal-title');
const nameGroup = document.getElementById('name-group');
const modalSubmitBtn = document.getElementById('modal-submit-btn');
let isLoginMode = true;

// Cart Elements
const cartBtn = document.getElementById('cart-btn');
const cartIcon = document.querySelector('.cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
let cartContent = [];

// Carousel and Header
const mainHeader = document.getElementById('main-header');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const paginationDots = document.getElementById('pagination-dots');
const themeBtn = document.getElementById('theme-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const body = document.body;

let isNightMode = false;

function init() {
    renderCategoryNav();
    updateUI(currentCategory);
    setupEventListeners();
}

function renderCategoryNav() {
    categoryNav.innerHTML = '';
    const categories = Object.keys(currentDataSet);

    categories.forEach((category) => {
        const span = document.createElement('span');
        span.textContent = category;
        if (category === currentCategory) {
            span.classList.add('active');
        }

        span.addEventListener('click', () => {
            // Update active state
            categoryNav.querySelectorAll('span').forEach(el => el.classList.remove('active'));
            span.classList.add('active');

            // On mobile, close the menu when an item is selected
            if (window.innerWidth <= 900) {
                categoryNav.classList.remove('active');
                body.classList.remove('no-scroll'); // Allow scrolling again
            }

            updateUI(category);
        });

        categoryNav.appendChild(span);
    });
}

function updateUI(category) {
    currentCategory = category;
    const data = currentDataSet[category];

    if (!data) return;

    // Trigger animations
    mainDishImg.classList.remove('spin-animation');
    // small delay to allow reflow so the animation re-triggers
    setTimeout(() => {
        mainDishImg.src = data.mainImage;
        mainDishImg.classList.add('spin-animation');
    }, 50);

    mainDishTitle.style.opacity = 0;
    setTimeout(() => {
        mainDishTitle.textContent = category;
        mainDishDesc.textContent = data.description;
        mainDishPrice.textContent = data.items[0] ? data.items[0].price : "S/.0";
        currentHeroItem = data.items[0] || null; // Provide fallback to click tracking

        renderHeroCustomOptions(currentHeroItem);

        mainDishTitle.style.opacity = 1;
        mainDishTitle.style.transition = "opacity 0.3s ease";
    }, 200);

    renderCards(data.items);
}

function updateHeroWithItem(item) {
    // Dynamic update of hero section on hover
    mainDishImg.classList.remove('spin-animation');
    setTimeout(() => {
        mainDishImg.src = item.img;
        mainDishImg.classList.add('spin-animation');
    }, 50);

    mainDishTitle.style.opacity = 0;
    setTimeout(() => {
        mainDishTitle.textContent = item.title;
        mainDishDesc.textContent = item.desc || currentDataSet[currentCategory].description;
        mainDishPrice.textContent = item.price;
        currentHeroItem = item; // Keep track of the active hero

        renderHeroCustomOptions(item);

        mainDishTitle.style.opacity = 1;
    }, 200);
}

function renderHeroCustomOptions(item) {
    const heroCustomOptions = document.getElementById('hero-custom-options');
    if (!heroCustomOptions) return;

    if (item && item.isCustom) {
        heroCustomOptions.style.display = 'flex';
        heroCustomOptions.innerHTML = '';
        item.options.forEach(opt => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" value="${opt}" class="hero-custom-cb"> ${opt}`;
            const cb = label.querySelector('input');
            cb.addEventListener('change', () => {
                const checked = heroCustomOptions.querySelectorAll('.hero-custom-cb:checked');
                if (checked.length > item.maxSelections) {
                    cb.checked = false; // Prevent checking more than max
                }
            });
            heroCustomOptions.appendChild(label);
        });
    } else {
        heroCustomOptions.style.display = 'none';
        heroCustomOptions.innerHTML = '';
    }
}

function renderCards(items) {
    cardsContainer.style.opacity = 0;

    setTimeout(() => {
        cardsContainer.innerHTML = '';
        if (paginationDots) paginationDots.innerHTML = '';

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}" class="card-img">
                <span class="card-price">${item.price}</span>
                <div class="card-info">
                    <h3 class="card-title">${item.title}</h3>
                    ${item.isCustom ? `
                        <div class="custom-selection card-custom-opts" style="margin-bottom: 10px; flex-wrap: wrap; gap: 5px;">
                            ${item.options.map(opt => `
                               <label><input type="checkbox" value="${opt}"> ${opt}</label>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="card-subtitle">${item.desc || 'Especialidad de la Casa'}</p>
                    `}
                    <div class="card-bottom">
                        <span><i class="fa-regular fa-clock"></i> ${item.time || '15m'}</span>
                        <button class="card-btn" aria-label="Agregar al carrito"><i class="fa-solid fa-play"></i></button>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card);

            if (item.isCustom) {
                const cbs = card.querySelectorAll('.card-custom-opts input');
                cbs.forEach(cb => {
                    cb.addEventListener('change', () => {
                        const checked = card.querySelectorAll('.card-custom-opts input:checked');
                        if (checked.length > item.maxSelections) {
                            cb.checked = false;
                        }
                    });
                });
            }

            // Add hover listener to update hero
            card.addEventListener('mouseenter', () => {
                updateHeroWithItem(item);
            });

            // Add To Cart listener
            const btn = card.querySelector('.card-btn');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // prevent hero trigger if needed
                    addToCart(item, card);
                });
            }

            // Create pagination dot
            if (paginationDots) {
                const dot = document.createElement('span');
                dot.className = index === 0 ? 'dot active' : 'dot';
                dot.addEventListener('click', () => {
                    const cardElement = cardsContainer.children[index];
                    if (cardElement) {
                        cardsContainer.scrollTo({
                            left: cardElement.offsetLeft - cardsContainer.offsetLeft - 60,
                            behavior: 'smooth'
                        });
                    }
                });
                paginationDots.appendChild(dot);
            }

            // Stagger animation for cards coming in
            card.style.opacity = 0;
            card.style.transform = "translateY(20px)";
            setTimeout(() => {
                card.style.transition = "all 0.4s ease";
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }, 100 * index);
        });

        cardsContainer.style.opacity = 1;
        cardsContainer.style.transition = "opacity 0.3s ease";
    }, 300);
}

function addToCart(item, cardElement = null) {
    if (!item) return;

    let cartItem = { ...item };

    if (item.isCustom) {
        let checkboxes = [];
        if (cardElement) {
            checkboxes = cardElement.querySelectorAll('.card-custom-opts input:checked');
        }

        const heroCheckboxes = document.getElementById('hero-custom-options').querySelectorAll('input:checked');

        // Use hero choices if the card choices were empty
        if ((!checkboxes || checkboxes.length === 0) && heroCheckboxes.length > 0) {
            checkboxes = heroCheckboxes;
        } else if ((!checkboxes || checkboxes.length === 0) && heroCheckboxes.length === 0) {
            alert(`Por favor, selecciona exactamente ${item.maxSelections} opciones.`);
            return;
        }

        if (checkboxes.length !== item.maxSelections) {
            alert(`Por favor, selecciona exactamente ${item.maxSelections} opciones.`);
            return;
        }

        const selected = Array.from(checkboxes).map(cb => cb.value).join(' + ');
        cartItem.title = `${item.title} (${selected})`;
    }

    // Check if item already exists
    const existingItem = cartContent.find(c => c.title === cartItem.title);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartContent.push({ ...cartItem, quantity: 1 });
    }

    // Visual feedback on cart icon
    cartIcon.classList.add('pulse');
    setTimeout(() => cartIcon.classList.remove('pulse'), 300);

    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cartContent.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío</p>';
        cartCount.textContent = "0";
        cartTotalPrice.textContent = "S/.0.00";
        return;
    }

    cartContent.forEach((item, index) => {
        const itemTotal = parseFloat(item.price.replace('S/.', '')) * item.quantity;
        total += itemTotal;
        count += item.quantity;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.title} x${item.quantity}</h4>
                <span>${item.price}</span>
            </div>
            <i class="fa-solid fa-trash remove-item" data-index="${index}"></i>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    cartCount.textContent = count;
    cartTotalPrice.textContent = `S/.${total.toFixed(2)}`;

    // Add remove listeners
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            cartContent.splice(index, 1);
            updateCartUI();
        });
    });
}

function setupEventListeners() {
    // Login functionality
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        loginModal.classList.remove('show');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
        }
    });

    // Hero Add To Cart Button
    const heroOrderBtn = document.getElementById('hero-order-btn');
    if (heroOrderBtn) {
        heroOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(currentHeroItem);
        });
    }

    // Theme Toggle (Night Mode)
    themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isNightMode = !isNightMode;
        document.body.classList.toggle('dark-theme');

        if (isNightMode) {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            currentDataSet = parrillaData;
            currentCategory = "CORTES";
        } else {
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            currentDataSet = menuData;
            currentCategory = "CEVICHES";
        }

        renderCategoryNav();
        updateUI(currentCategory);
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        categoryNav.classList.toggle('active');
    });

    // Prevent scrolling horizontally with wheel
    cardsContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        cardsContainer.scrollLeft += evt.deltaY;
    });

    // Auto-scroll Carousel
    let autoScrollInterval = setInterval(() => {
        if (!cardsContainer) return;
        if (cardsContainer.scrollLeft + cardsContainer.clientWidth >= cardsContainer.scrollWidth - 10) {
            cardsContainer.scrollTo({ left: 0, behavior: 'smooth' }); // Reset if at end
        } else {
            cardsContainer.scrollBy({ left: 330, behavior: 'smooth' });
        }
    }, 4000);

    // Pause auto-scroll on hover or touch
    cardsContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    cardsContainer.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            if (!cardsContainer) return;
            if (cardsContainer.scrollLeft + cardsContainer.clientWidth >= cardsContainer.scrollWidth - 10) {
                cardsContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                cardsContainer.scrollBy({ left: 330, behavior: 'smooth' });
            }
        }, 4000);
    });

    // Handle active dot update on scroll
    cardsContainer.addEventListener('scroll', () => {
        if (!paginationDots) return;
        const scrollLeft = cardsContainer.scrollLeft;
        const cardWidth = 330;
        const index = Math.round(scrollLeft / cardWidth);
        const dots = paginationDots.querySelectorAll('.dot');
        dots.forEach((d, i) => {
            if (i === index) d.classList.add('active');
            else d.classList.remove('active');
        });
    });

    // Carousel buttons
    carouselPrev.addEventListener('click', () => {
        cardsContainer.scrollLeft -= 300;
    });

    carouselNext.addEventListener('click', () => {
        cardsContainer.scrollLeft += 300;
    });

    // Handle 'add to order' buttons
    cardsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.card-btn');
        if (btn) {
            const card = btn.closest('.menu-card');
            const title = card.querySelector('.card-title').textContent;
            const price = card.querySelector('.card-price').textContent;

            // Check if already in cart
            const existingItem = cartContent.find(item => item.title === title);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartContent.push({ title, price, quantity: 1 });
            }

            updateCartUI();

            // Pulse animation on cart to show it was added
            cartBtn.style.transform = "scale(1.2)";
            setTimeout(() => { cartBtn.style.transform = "scale(1)"; }, 200);
        }
    });

    // Cart Dropdown Toggle
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartDropdown.classList.toggle('show');
    });

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // Form toggle (Login vs Register)
    if (toggleLink) {
        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            isLoginMode = !isLoginMode;
            if (isLoginMode) {
                modalTitle.textContent = 'Iniciar Sesión';
                nameGroup.style.display = 'none';
                modalSubmitBtn.textContent = 'Ingresar';
                toggleModalMode.childNodes[0].nodeValue = '¿No tienes cuenta? ';
                toggleLink.textContent = 'Regístrate aquí';
            } else {
                modalTitle.textContent = 'Registrarse';
                nameGroup.style.display = 'block';
                modalSubmitBtn.textContent = 'Crear Cuenta';
                toggleModalMode.childNodes[0].nodeValue = '¿Ya tienes cuenta? ';
                toggleLink.textContent = 'Inicia sesión aquí';
            }
        });
    }

    // Form submission
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (isLoginMode) {
            alert('Inicio de sesión simulado correctamente.');
        } else {
            alert('Registro exitoso. ¡Bienvenido!');
        }
        loginModal.classList.remove('show');
    });

    // Cart Checkout to WhatsApp
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (cartContent.length === 0) {
                alert('Tu carrito está vacío.');
                return;
            }
            let message = 'Hola, quisiera hacer el siguiente pedido:\n\n';
            let total = 0;
            cartContent.forEach(item => {
                const itemTotal = parseFloat(item.price.replace('S/.', '')) * item.quantity;
                total += itemTotal;
                message += `- ${item.quantity}x ${item.title} (${item.price})\n`;
            });
            message += `\nTotal a pagar: S/.${total.toFixed(2)}`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/51957710977?text=${encodedMessage}`, '_blank');
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
