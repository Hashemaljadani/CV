// Project details data
const projects = {
    'kawakeleen': {
        title: {
            ar: 'تطبيق كواكلين - غسيل السيارات',
            en: 'Kwaclean App - Car Wash'
        },
        image: 'images/projects/kawakeleen-main.jpg',
        gallery: [
            'images/projects/kawakeleen-1.jpg',
            'images/projects/kawakeleen-2.jpg',
            'images/projects/kawakeleen-3.jpg',
            'images/projects/kawakeleen-4.jpg',
            'images/projects/kawakeleen-5.jpg',
            'images/projects/kawakeleen-6.jpg',
            'images/projects/kawakeleen-7.jpg',
            'images/projects/kawakeleen-8.jpg'
        ],
        description: {
            ar: 'تطبيق منشور على Google Play لحجز خدمات غسيل السيارات مع خيارات الاشتراك الشهري وكوبونات الخصم',
            en: 'A published app on Google Play for booking car wash services with monthly subscription options and discount coupons'
        },
        features: {
            ar: [
                'تطبيق منشور على Google Play',
                'تسجيل دخول واختيار نوع السيارة (صغيرة/كبيرة)',
                'حجز خدمات غسيل مع تحديد الموقع والتاريخ والوقت',
                'خيارات الخدمة: غسيل مرة واحدة أو اشتراك شهري',
                'نظام كوبونات الخصم وحساب التكلفة تلقائياً',
                'صفحة حجوزاتي (مكتملة/قادمة)',
                'صفحة حسابي مع إمكانية التعديل',
                'مربوط مع Firebase وGoogle Cloud'
            ],
            en: [
                'Published app on Google Play',
                'Login and car type selection (small/large)',
                'Book wash services with location, date and time selection',
                'Service options: one-time wash or monthly subscription',
                'Discount coupon system and automatic cost calculation',
                'My bookings page (completed/upcoming)',
                'My account page with editing capabilities',
                'Connected with Firebase and Google Cloud'
            ]
        },
        technologies: ['Flutter', 'Dart', 'Firebase', 'Google Cloud', 'Google Play Store'],
        duration: '2024 - 2025',
        type: {
            ar: 'تطبيق منشور على Google Play',
            en: 'Published App on Google Play'
        },
        downloadApp: 'https://play.google.com/store/apps/details?id=com.kwaclean.app&pcampaignid=web_share'
    },
    'parking': {
        title: {
            ar: 'نظام المواقف الذكي',
            en: 'Smart Parking System'
        },
        image: 'images/projects/parking-main.jpg',
        gallery: [
            'images/projects/parking-1.jpg',
            'images/projects/parking-2.jpg',
            'images/projects/parking-3.jpg',
            'images/projects/parking-4.jpg',
            'images/projects/parking-5.jpg',
            'images/projects/parking-6.jpg',
            'images/projects/parking-7.jpg',
            'images/projects/parking-8.jpg',
            'images/projects/parking-9.jpg'
        ],
        description: {
            ar: 'مشروع التخرج - تطبيق حجز مواقف السيارات مع اختيار المكان والموقف والتاريخ والوقت',
            en: 'Graduation project - Car parking reservation app with location, spot, date and time selection'
        },
        features: {
            ar: [
                'تسجيل دخول المستخدم',
                'صفحة رئيسية تعريفي عن التطبيق',
                'حجز موقف محدد في أماكن مختلفة (ريدسي مول، جامعة جدة، مطار الملك عبدالعزيز)',
                'اختيار رقم الموقف والتاريخ والوقت وعدد الساعات',
                'صفحة تفاصيل الحجز مع جميع المعلومات',
                'صفحة دفع وهمية',
                'صفحة حجوزاتي مع QR code للموقف وجميع معلومات الحجز'
            ],
            en: [
                'User login',
                'Main page introducing the app',
                'Book specific spots in different locations (Red Sea Mall, Jeddah University, King Abdulaziz Airport)',
                'Select spot number, date, time and number of hours',
                'Booking details page with all information',
                'Mock payment page',
                'My bookings page with QR code for the spot and all booking information'
            ]
        },
        technologies: ['Java', 'XML', 'Firebase', 'Android Development', 'QR Code Generation'],
        duration: '2024 - 2025',
        type: {
            ar: 'مشروع التخرج',
            en: 'Graduation Project'
        },
        sourceCode: 'https://github.com/Hashemaljadani/CarParkingApp'
    },
    'training': {
        title: {
            ar: 'منصة التدريب',
            en: 'Training Platform'
        },
        image: 'images/projects/training-main.jpg',
        gallery: [
            'images/projects/training-1.jpg',
            'images/projects/training-2.jpg',
            'images/projects/training-3.jpg',
            'images/projects/training-4.jpg',
            'images/projects/training-5.jpg'
        ],
        description: {
            ar: 'منصة طلبات التدريب للطلاب باستخدام Figma، لتحل محل العملية اليدوية التقليدية',
            en: 'Training request platform for students using Figma, to replace the traditional manual process'
        },
        features: {
            ar: [
                'تصميم وتطوير منصة إدارة طلبات التدريب للطلاب',
                'استخدام Figma لإنشاء نموذج UI/UX كامل',
                'التركيز على سهولة الوصول والتصميم المتمحور حول المستخدم',
                'تحل محل العملية اليدوية التقليدية',
                'تحسين الكفاءة في إدارة طلبات التدريب'
            ],
            en: [
                'Design and development of training request management platform for students',
                'Using Figma to create a complete UI/UX model',
                'Focus on accessibility and user-centered design',
                'Replace the traditional manual process',
                'Improve efficiency in managing training requests'
            ]
        },
        technologies: ['Figma', 'XML', 'CSS', 'JavaScript', 'UI/UX Design'],
        duration: '2024 - 2025'
    },
    'appointments': {
        title: {
            ar: 'تطبيق إدارة المواعيد',
            en: 'Appointment Management App'
        },
        image: 'images/projects/appointments-main.jpg',
        gallery: [
            'images/projects/appointments-1.jpg',
            'images/projects/appointments-2.jpg',
            'images/projects/appointments-3.jpg',
            'images/projects/appointments-4.jpg',
            'images/projects/appointments-5.jpg',
            'images/projects/appointments-6.jpg'
        ],
        description: {
            ar: 'تطبيق لإدارة المواعيد مع تصنيفات وأولويات وتكرار، ومشاركة مع الزملاء',
            en: 'App for managing appointments with categories, priorities, repetition, and sharing with colleagues'
        },
        features: {
            ar: [
                'تسجيل دخول ومصادقة Firebase',
                'إضافة مواعيد مع تحديد الوقت والتاريخ والعنوان والحالة',
                'تصنيف المواعيد (شخصي، عمل، دراسة، صحة، عائلة، أخرى)',
                'مستويات أولوية (عالية، متوسطة، منخفضة)',
                'تكرار (يومي، أسبوعي، شهري)',
                'مشاركة المواعيد مع الزملاء عبر البريد الإلكتروني'
            ],
            en: [
                'Firebase login and authentication',
                'Add appointments with time, date, location and status',
                'Appointment categories (personal, work, study, health, family, other)',
                'Priority levels (high, medium, low)',
                'Repetition (daily, weekly, monthly)',
                'Share appointments with colleagues via email'
            ]
        },
        technologies: ['Java', 'XML', 'Firebase', 'Android Development', 'Email Integration'],
        duration: '2024 - 2025',
        sourceCode: 'https://github.com/Hashemaljadani/ScheduleManagment'
    },
    'ecommerce': {
        title: {
            ar: 'تطبيق التجارة الإلكترونية',
            en: 'E-commerce Application'
        },
        image: 'images/projects/ecommerce-main.webp',
        gallery: [
            'images/projects/ecommerce-1.jpg',
            'images/projects/ecommerce-2.jpg',
            'images/projects/ecommerce-3.jpg',
            'images/projects/ecommerce-4.jpg',
            'images/projects/ecommerce-5.jpg',
            'images/projects/ecommerce-6.jpg',
            'images/projects/ecommerce-7.jpg'
        ],
        description: {
            ar: 'تطبيق تجارة إلكترونية متكامل مع نظام تسجيل دخول منفصل للمشترين والبائعين',
            en: 'Complete e-commerce application with separate login system for buyers and sellers'
        },
        features: {
            ar: [
                'نظام تسجيل دخول منفصل للمشترين والبائعين',
                'البائع يعرض المنتجات مع اسم البراند والسعر',
                'المشتري يضيف المنتجات للسلة ويحذفها ويشتريها',
                'صفحة حسابي مع معلومات المستخدم وإمكانية التعديل',
                'معالجة البيانات في الوقت الفعلي باستخدام Firebase',
                'واجهة مستخدم سهلة الاستخدام ومتجاوبة'
            ],
            en: [
                'Separate login system for buyers and sellers',
                'Seller displays products with brand name and price',
                'Buyer adds products to cart, removes them and purchases',
                'My account page with user information and editing capabilities',
                'Real-time data processing using Firebase',
                'User-friendly and responsive interface'
            ]
        },
        technologies: ['Java', 'XML', 'Firebase', 'Android Development'],
        duration: '2024 - 2025'
    }
};

// Get project ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('project');

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('preferredLanguage') || 'ar';
}

// Load project details
function loadProjectDetails() {
    const project = projects[projectId];
    if (!project) {
        document.getElementById('project-details').innerHTML = '<h2 data-ar="المشروع غير موجود" data-en="Project not found">المشروع غير موجود</h2>';
        return;
    }

    const currentLang = getCurrentLanguage();
    const projectDetailsElement = document.getElementById('project-details');
    projectDetailsElement.setAttribute('data-project', projectId);
    
    // Update HTML lang and dir attributes based on current language
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Generate project links section
    let projectLinksHtml = '';
    if (project.sourceCode) {
        projectLinksHtml = `
            <div class="project-links">
                <h3 data-ar="روابط المشروع" data-en="Project Links">روابط المشروع</h3>
                <div class="link-buttons">
                    <a href="${project.sourceCode}" target="_blank" class="btn btn-secondary">
                        <i class="fab fa-github"></i>
                        <span data-ar="كود مصدري" data-en="Source Code">كود مصدري</span>
                    </a>
                </div>
            </div>
        `;
    } else if (project.downloadApp) {
        projectLinksHtml = `
            <div class="project-links">
                <h3 data-ar="روابط المشروع" data-en="Project Links">روابط المشروع</h3>
                <div class="link-buttons">
                    <a href="${project.downloadApp}" target="_blank" class="btn btn-secondary">
                        <i class="fab fa-google-play"></i>
                        <span data-ar="تحميل التطبيق" data-en="Download App">تحميل التطبيق</span>
                    </a>
                </div>
            </div>
        `;
    }

    const detailsHtml = `
        <div class="project-details">
            <div class="project-header">
                <h1 class="section-title" data-ar="${project.title.ar}" data-en="${project.title.en}">${project.title[currentLang]}</h1>
                ${project.type ? `<span class="project-type" data-ar="${project.type.ar}" data-en="${project.type.en}">${project.type[currentLang]}</span>` : ''}
                <span class="project-duration">${project.duration}</span>
            </div>
            
            <div class="project-image">
                <img src="${project.image}" alt="${project.title[currentLang]}" onerror="this.src='https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=${encodeURIComponent(project.title[currentLang])}'">
            </div>
            
            <div class="project-content">
                <div class="project-description">
                    <h3 data-ar="وصف المشروع" data-en="Project Description">وصف المشروع</h3>
                    <p data-ar="${project.description.ar}" data-en="${project.description.en}">${project.description[currentLang]}</p>
                </div>
                
                <div class="project-gallery">
                    <h3 data-ar="معرض الصور" data-en="Image Gallery">معرض الصور</h3>
                    <div class="gallery-grid">
                        ${project.gallery.map((img, index) => `
                            <div class="gallery-item" onclick="openImageModal('${img}', '${project.title[currentLang]}')">
                                <img src="${img}" alt="${project.title[currentLang]}" onerror="this.src='https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=صورة+المشروع'">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="project-features">
                    <h3 data-ar="المميزات الرئيسية" data-en="Main Features">المميزات الرئيسية</h3>
                    <ul>
                        ${project.features[currentLang].map((feature, index) => {
                            const enFeature = project.features.en[index];
                            return `<li data-ar="${feature}" data-en="${enFeature}">${feature}</li>`;
                        }).join('')}
                    </ul>
                </div>
                
                <div class="project-technologies">
                    <h3 data-ar="التقنيات المستخدمة" data-en="Technologies Used">التقنيات المستخدمة</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                ${projectLinksHtml}
            </div>
        </div>
        
        <!-- Image Modal -->
        <div id="imageModal" class="image-modal">
            <span class="close-modal" onclick="closeImageModal()">&times;</span>
            <div class="modal-content">
                <img id="modalImage" src="" alt="">
            </div>
        </div>
    `;

    projectDetailsElement.innerHTML = detailsHtml;
    
    // Update all elements with data attributes after loading
    const elements = document.querySelectorAll('[data-ar][data-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });
}

// Function to open image modal
function openImageModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeImageModal();
        }
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeImageModal();
        }
    });
}

// Function to close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Load project details when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProjectDetails();
    
    // Add language toggle functionality
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = getCurrentLanguage();
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            
            // Update localStorage
            localStorage.setItem('preferredLanguage', newLang);
            
            // Reload project details with new language
            loadProjectDetails();
            
            // Update button text
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = langText.getAttribute(`data-${newLang}`);
            }
        });
    }
    
    // Initialize language based on saved preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== 'ar') {
        // Update HTML lang and dir attributes
        document.documentElement.lang = savedLanguage;
        document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
        
        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-ar][data-en]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${savedLanguage}`);
        });
        
        // Update button text
        const langText = langToggle.querySelector('.lang-text');
        if (langText) {
            langText.textContent = langText.getAttribute(`data-${savedLanguage}`);
        }
    }
}); 