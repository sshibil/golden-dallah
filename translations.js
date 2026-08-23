// Translations dictionary for Golden Dallah Wedding Services
// Supports English (LTR) and Arabic (RTL)

const translations = {
  en: {
    // Navigation & Branding
    nav: {
      brandName: "Golden Dallah",
      brandSub: "Luxury Event Services Since 1998",
      about: "About Us",
      services: "Core Services",
      capacity: "Capacity & Scale",
      booking: "Event Inquiry",
      contact: "Contact",
      vipCall: "VIP Line",
      langSwitch: "العربية",
    },

    // Hero Section (Scroll Animation & Features)
    hero: {
      badge: "Celebrating 25+ Years of Royal Hospitality in the UAE",
      titleLine1: "Golden Dallah",
      titleLine2: "Authentic Emirati Hospitality",
      titleLine3: "Since 1998",
      subtitle: "Specializing in luxury wedding catering, traditional Gahwa coffee service, and large-scale banquet event provisioning for up to 500+ guests across all Emirates.",
      ctaPrimary: "Inquire for Event",
      ctaSecondary: "WhatsApp VIP Booking",
      scrollHint: "Scroll down to explore Golden Dallah features",
      
      // Feature Callouts on Scroll
      features: [
        {
          tag: "Feature 01 — Master Coffee Service",
          title: "Traditional Arabic Gahwa & Saffron Brews",
          desc: "Master pourers (Sabbahin) in full Emirati attire, serving green cardamom & saffron infused Gahwa from golden copper Dallahs."
        },
        {
          tag: "Feature 02 — Royal Wedding Catering",
          title: "Luxury Banquet & Live Dessert Stations",
          desc: "Live Luqaimat & Khanfaroosh cooking stations, fine dining spreads, and handcrafted Emirati pastries for distinguished celebrations."
        },
        {
          tag: "Feature 03 — Grand Scale Logistics",
          title: "Provisioning for Up to 500+ Distinguished Guests",
          desc: "Full VIP majlis setup, hall coordination, protocol hospitality staff, and seamless banquet management across all 7 Emirates."
        }
      ],

      stats: [
        { value: "25+", label: "Years of Excellence" },
        { value: "10,000+", label: "Luxury Events Served" },
        { value: "500+", label: "Guest Capacity per Event" },
        { value: "100%", label: "Authentic Emirati Touch" }
      ]
    },

    // About Section
    about: {
      tag: "Our Royal Heritage",
      title: "Over 25 Years of Unrivaled Hospitality Across the UAE",
      desc1: "Since 1998, Golden Dallah Wedding Services has stood as a beacon of traditional Emirati hospitality and regal event provisioning. We combine the warmth of centuries-old bedouin traditions with modern 5-star event execution.",
      desc2: "From royal weddings in Abu Dhabi and grand galas in Dubai to intimate majlis gatherings across the Northern Emirates, our master coffee pourers (Sabbahin), royal table designers, and culinary artisans ensure every guest experiences true Emirati generosity.",
      features: [
        {
          title: "Master Gahwa Pourers",
          desc: "Trained in the sacred art of traditional Emirati coffee service with copper Dallahs and silver Finjans."
        },
        {
          title: "Royal Banquet Styling",
          desc: "Bespoke table settings, golden cutlery, and authentic majlis arrangements tailored for royalty."
        },
        {
          title: "Flawless Provisioning",
          desc: "Seamless logistical capability to cater grand weddings and celebrations for up to 500+ distinguished guests."
        },
        {
          title: "Premium Local Ingredients",
          desc: "Finest organic saffron, premium cardamom, local dates, and freshly handcrafted Emirati desserts."
        }
      ]
    },

    // Core Services Grid
    services: {
      tag: "Exquisite Offerings",
      title: "Signature Services Designed for Unforgettable Moments",
      subtitle: "Each service is crafted with precision, authentic Emirati aesthetics, and uncompromising hospitality standards.",
      cards: [
        {
          id: "hospitality",
          icon: "Coffee",
          title: "Traditional Event Hospitality",
          shortDesc: "Authentic Arabic Gahwa, Karak tea, saffron tea, and bespoke hot beverage bars served by master pourers in full Emirati attire.",
          details: [
            "Premium Arabian Gahwa infused with saffron & green cardamom",
            "Signature Karak Tea & Infused Herbal Blends",
            "Master Pourers (Sabbahin) in pristine traditional dress",
            "Custom Golden & Copper Dallah Bar Stations"
          ]
        },
        {
          id: "catering",
          icon: "Utensils",
          title: "Luxury Catering & Sweets",
          shortDesc: "Traditional Emirati sweets, live dessert stations, royal wedding banquets, and customized gourmet menus.",
          details: [
            "Live Luqaimat & Khanfaroosh cooking stations",
            "Royal Baklava, Kunafa & Date-infused luxury pastries",
            "5-Star International & Traditional Buffet spreads",
            "Custom dessert presentation boxes & silver tray service"
          ]
        },
        {
          id: "coordination",
          icon: "Sparkles",
          title: "Full Event Coordination",
          shortDesc: "End-to-end setup, VIP lounge management, bridal suite hospitality, and guest flow coordination for grand scale galas.",
          details: [
            "Complete hall & VIP majlis setup coordination",
            "Dedicated VIP protocol hospitality staff",
            "Bridal suite & royal family private beverage service",
            "Real-time guest flow & banquet seating management"
          ]
        }
      ],
      modalCta: "Select Service for Inquiry"
    },

    // Capacity & Scale Section
    capacity: {
      tag: "Scalable Luxury",
      title: "Catering & Provisioning Tailored to Any Event Scale",
      subtitle: "Whether an intimate private gathering or a grand royal celebration of 500+ guests, Golden Dallah guarantees perfection.",
      tiers: [
        {
          id: "intimate",
          range: "< 100 Guests",
          name: "Intimate VIP Majlis",
          desc: "Perfect for private family gatherings, engagement ceremonies, and executive VIP receptions.",
          includes: ["2 Master Gahwa Pourers", "Mobile Gold Dallah Station", "Premium Emirati Sweets & Dates", "Personalized Butler Service"]
        },
        {
          id: "medium",
          range: "100 – 500 Guests",
          name: "Grand Celebration & Gala",
          desc: "Ideal for wedding receptions, graduation galas, and corporate celebrations across the UAE.",
          includes: ["6+ Professional Hospitality Staff", "Dual Beverage & Live Dessert Stations", "Full Banquet Table Provisioning", "Dedicated VIP Manager"]
        },
        {
          id: "royal",
          range: "500+ Guests",
          name: "Royal & Mega Wedding Scale",
          desc: "Full-scale logistical & catering provisioning for massive royal weddings and national celebrations.",
          includes: ["15+ Senior Hospitality Team", "Multiple High-Capacity Stations", "Complete Banquet Logistics & Protocol", "Live Cooking & Beverage Performance"]
        }
      ]
    },

    // Booking Inquiry Form
    booking: {
      tag: "Reserve Your Date",
      title: "Interactive Event Inquiry Wizard",
      subtitle: "Customize your event requirements below. Submitting will format your request directly to Golden Dallah VIP WhatsApp booking desk.",
      steps: ["Event Type", "Date & Location", "Scale & Catering", "Contact Info"],
      
      step1Title: "Select Event Type",
      eventTypes: [
        { id: "wedding", label: "Luxury Wedding (حفل زفاف)", icon: "Heart" },
        { id: "graduation", label: "Graduation Party (حفل تخرج)", icon: "GraduationCap" },
        { id: "gathering", label: "Private VIP Gathering (تجمع خاص)", icon: "Users" },
        { id: "royal", label: "Royal Banquet & Gala (مأدبة ملكية)", icon: "Crown" }
      ],

      step2Title: "Event Date & UAE Emirate",
      dateLabel: "Event Date",
      locationLabel: "Select Emirate / Location",
      emirates: [
        "Abu Dhabi (أبوظبي)",
        "Dubai (دبي)",
        "Sharjah (الشارقة)",
        "Ajman (عجمان)",
        "Ras Al Khaimah (رأس الخيمة)",
        "Fujairah (الفجيرة)",
        "Umm Al Quwain (أم القيوين)"
      ],

      step3Title: "Guest Capacity & Service Add-ons",
      capacityLabel: "Estimated Guest Count",
      capacityOptions: ["< 100 Guests", "100 – 500 Guests", "500+ Guests"],
      addonsLabel: "Select Required Services (Select all that apply)",
      addons: [
        { id: "gahwa", label: "Traditional Gahwa & Tea Bar" },
        { id: "luqaimat", label: "Live Luqaimat & Dessert Station" },
        { id: "banquet", label: "Full Royal Banquet Catering" },
        { id: "vip_staff", label: "Dedicated VIP Butler Staff" }
      ],

      step4Title: "Contact Details",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. H.E. Sheikh / Mr. Ahmed Al Mansoori",
      phoneLabel: "WhatsApp / Phone Number",
      phonePlaceholder: "+971 50 xxx xxxx",
      notesLabel: "Special Notes or Custom Requests",
      notesPlaceholder: "Share any custom requirements, dietary preferences, or timing details...",

      btnBack: "Back",
      btnNext: "Next Step",
      btnSubmitWhatsApp: "Send VIP Inquiry via WhatsApp",
      
      summaryHeader: "Inquiry Summary Preview",
    },

    // Contact & Footer
    contact: {
      tag: "Get In Touch",
      title: "Direct VIP Communications & Headquarters",
      bookingDesk: "General & Event Booking",
      vipLine: "VIP Direct Executive Line",
      instagram: "Official Instagram Profile",
      hoursTitle: "Working Hours",
      hoursVal: "Open Daily: 9:00 AM – 11:00 PM (GST)",
      locationTitle: "Coverage Area",
      locationVal: "Serving All 7 Emirates Across the United Arab Emirates",
      copyright: "© 1998 – 2026 Golden Dallah Wedding Services. All Rights Reserved.",
      tagline: "Golden Dallah — The Benchmark of Luxury Emirati Hospitality."
    },

    // Floating actions & toasts
    floating: {
      chatHeader: "Golden Dallah VIP Desk",
      chatSubtitle: "Assisting you with luxury wedding & event inquiries instantly.",
      chatBtn: "Start Direct WhatsApp Chat",
      copiedToast: "Phone number copied to clipboard!"
    }
  },

  ar: {
    // Navigation & Branding
    nav: {
      brandName: "الدلة الذهبية",
      brandSub: "ضيافة فاخرة منذ عام 1998",
      about: "عن الدلة الذهبية",
      services: "خدماتنا الرئيسية",
      capacity: "الطاقة الاستيعابية",
      booking: "طلب حجز",
      contact: "التواصل",
      vipCall: "الخط المباشر",
      langSwitch: "English",
    },

    // Hero Section (Scroll Animation & Features)
    hero: {
      badge: "نحتفل بمرور أكثر من 25 عاماً من الضيافة الملكية في دولة الإمارات",
      titleLine1: "الدلة الذهبية",
      titleLine2: "إرث الضيافة الإماراتية الأصيلة",
      titleLine3: "منذ عام 1998",
      subtitle: "متخصصون في تموين الأعراس الفاخرة، تقديم القهوة العربية الأصيلة، وتجهيز الفعاليات الكبرى لعدد يصل إلى أكثر من 500 ضيف في جميع إمارات الدولة.",
      ctaPrimary: "طلب استفسار عن حفل",
      ctaSecondary: "حجز VIP عبر الواتساب",
      scrollHint: "قم بالتمرير للأسفل لاستكشاف مميزات الدلة الذهبية",
      
      // Feature Callouts on Scroll
      features: [
        {
          tag: "الخدمة الأولى — تقديم القهوة العربية الأصيلة",
          title: "قهوة عربية بالهيل والزعفران النقية",
          desc: "صبابو قهوة محترفون (صّبابين) بالزي التراثي الإماراتي الكامل، يقدمون القهوة العربية الفاخرة من دلال نحاسية وذهبية أصيلة."
        },
        {
          tag: "الخدمة الثانية — تموين الأعراس والمناسبات",
          title: "بوفيهات ملكية ومحطات حلويات حية",
          desc: "محطات تحضير حية للقيمات والخنفر وش، حلويات إماراتية وبقلاوة ملكية، وموائد طعام فاخرة مخصصة لكبار الشخصيات."
        },
        {
          tag: "الخدمة الثالثة — تموين الحفلات الكبرى",
          title: "تجهيز كامل لأكثر من 500 ضيف",
          desc: "إدارة مجالس VIP، تنسيق قاعات الأفراح، طاقم ضيافة مخصص للبروتوكول، وتنظيم لوجستي سلس في كافة الإمارات السبع."
        }
      ],

      stats: [
        { value: "+25", label: "عاماً من التميز والريادة" },
        { value: "+10,000", label: "حفل ومناسبة فاخرة" },
        { value: "+500", label: "سعة الضيوف للحفل الواحد" },
        { value: "100%", label: "أصالة إماراتية فريدة" }
      ]
    },

    // About Section
    about: {
      tag: "عراقتنا الملكية",
      title: "أكثر من 25 عاماً من الضيافة الاستثنائية في دولة الإمارات",
      desc1: "منذ عام 1998، تظل الدلة الذهبية لخدمات الأفراح عنواناً للضيافة الإماراتية الأصيلة والتجهيزات الفاخرة. نجمع بين دفء التقاليد العريقة والخبرة العصرية في إدارة وتنظيم أرقى المناسبات.",
      desc2: "من أعراس الشيوخ في أبوظبي وحفلات الزفاف الفاخرة في دبي إلى المجالس الخاصة في كافة الإمارات، يضمن صبابو القهوة المحترفون ومصممو الموائد تقديم تجربة ضيافة ملكية تليق بكبار الشخصيات.",
      features: [
        {
          title: "صبابو قهوة محترفون",
          desc: "مدربون على أصول تقديم القهوة العربية بالدلال النحاسية والأواني الفضية العريقة."
        },
        {
          title: "تجهيز موائد ملكية",
          desc: "تنسيق موائد فاخرة، أدوات طعام ذهبية، وتجهيزات مجلس إماراتي عالي المستوى."
        },
        {
          title: "تموين كبار المناسبات",
          desc: "قدرة لوجستية عالية لتغطية وتموين أضخم الأعراس والحفلات لأكثر من 500 ضيف."
        },
        {
          title: "مكونات محلية فاخرة",
          desc: "أجود أنواع الزعفران، الهيل الأخضر، التمور الفاخرة، والحلويات الإماراتية الطازجة."
        }
      ]
    },

    // Core Services Grid
    services: {
      tag: "خدماتنا المتميزة",
      title: "باقة خدمات صُممت خصيصاً لأجمل لحظات العمر",
      subtitle: "كل خدمة يتم تقديمها بدقة متناهية، وبلمسات تراثية إماراتية تعكس الكرم والأناقة.",
      cards: [
        {
          id: "hospitality",
          icon: "Coffee",
          title: "ضيافة المناسبات والأعراس",
          shortDesc: "تقديم القهوة العربية الأصيلة، شاي الكرك، شاي الزعفران، ومحطات المشروبات الدافئة بواسطة صبابين بالزي الوطني الكامل.",
          details: [
            "قهوة عربية فاخرة بالهيل والزعفران النقية",
            "شاي كرك مميز ومشروبات أعشاب طبيعية",
            "صبابين بالزي الإماراتي التراثي الأنيق",
            "محطات دلال ذهبية ونحاسية فاخرة"
          ]
        },
        {
          id: "catering",
          icon: "Utensils",
          title: "خدمات التموين والحلويات",
          shortDesc: "حلويات إماراتية شعبية، محطات تحضير حية، بوفيهات ملكية، وقائمات طعام فاخرة مخصصة للحفل.",
          details: [
            "محطات تحضير حية للقيمات والخنفر وش",
            "بقلاوة ملكية، كنافة، ومعجنات بالتمور الفاخرة",
            "بوفيهات عالمية وعربية بمستوى 5 نجوم",
            "صواني تقديم فضية وعلب حلويات فاخرة"
          ]
        },
        {
          id: "coordination",
          icon: "Sparkles",
          title: "تنظيم وتنسيق الفعاليات",
          shortDesc: "تجهيز شامل، إدارة مجالس VIP، خدمة جناحات العرائس، وتنظيم حركة الضيوف في الحفلات الضخمة.",
          details: [
            "تنسيق كامل للقاعات والمجالس الملكية",
            "طاقم ضيافة مخصص لبروتوكول كبار الشخصيات",
            "خدمة مشروبات خاصة لجناح العروس والعائلة",
            "إدارة سريعة وسلسة لبوفيهات الطعام وخدمة الضيوف"
          ]
        }
      ],
      modalCta: "اختر هذه الخدمة للطلب"
    },

    // Capacity & Scale Section
    capacity: {
      tag: "مرونة الاستيعاب",
      title: "تجهيزات وتموين يناسب كافة أحجام المناسبات",
      subtitle: "سواء كان تجمعاً خاصاً محدوداً أو حفل زفاف ملكي كبير يضم أكثر من 500 ضيف، تضمن لك الدلة الذهبية الكمال والإتقان.",
      tiers: [
        {
          id: "intimate",
          range: "أقل من 100 ضيف",
          name: "مجلس VIP خاص",
          desc: "مثالي للتجمعات العائلية الخاصة، حفلات الخطوبة، واستقبالات كبار الشخصيات.",
          includes: ["2 صبابين قهوة محترفين", "محطة دلال ذهبية متحركة", "حلويات إماراتية وتمور فاخرة", "خدمة ضيافة شخصية VIP"]
        },
        {
          id: "medium",
          range: "100 – 500 ضيف",
          name: "حفل زفاف وقاعة كبرى",
          desc: "مناسب لحفلات الزفاف الإقليمية، حفل التخرج، والمناسبات الرسمية في قاعات الأفراح.",
          includes: ["6+ طاقم ضيافة متخصص", "محطات مشروبات وحلويات حية مزدوجة", "تموين كامل لموائد الطعام", "مشرف ضيافة مخصص للحفل"]
        },
        {
          id: "royal",
          range: "أكثر من 500 ضيف",
          name: "أعراس ملكية ضخمة (Mega Event)",
          desc: "تجهيزات لوجستية وتموين كامل للأعراس الملكية والمناسبات الوطنية الضخمة.",
          includes: ["15+ فريق ضيافة ملكي متكامل", "محطات تقديم متعددة عالية الطاقة", "إدارة لوجستية وبروتوكولية شاملة", "عروض تحضير حية للمشروبات والحلويات"]
        }
      ]
    },

    // Booking Inquiry Form
    booking: {
      tag: "احجز تاريخ حفلكم",
      title: "نموذج استفسار وحجز الحفلات التفاعلي",
      subtitle: "حدد تفاصيل مناسبتكم أدناه. عند إرسال الطلب سيتم توجيهكم فوراً بمحتوى منسق إلى واتساب الدلة الذهبية VIP.",
      steps: ["نوع المناسبة", "التاريخ والموقع", "السعة والخدمات", "معلومات التواصل"],
      
      step1Title: "اختر نوع المناسبة",
      eventTypes: [
        { id: "wedding", label: "حفل زفاف فاخر (Wedding)", icon: "Heart" },
        { id: "graduation", label: "حفل تخرج (Graduation)", icon: "GraduationCap" },
        { id: "gathering", label: "تجمع خاص VIP (Private Gathering)", icon: "Users" },
        { id: "royal", label: "مأدبة ملكية ورسمية (Royal Banquet)", icon: "Crown" }
      ],

      step2Title: "تاريخ المناسبة والإمارة",
      dateLabel: "تاريخ الحفل",
      locationLabel: "اختر الإمارة / الموقع",
      emirates: [
        "أبوظبي (Abu Dhabi)",
        "دبي (Dubai)",
        "الشارقة (Sharjah)",
        "عجمان (Ajman)",
        "رأس الخيمة (Ras Al Khaimah)",
        "الفجيرة (Fujairah)",
        "أم القيوين (Umm Al Quwain)"
      ],

      step3Title: "عدد الضيوف والخدمات الإضافية",
      capacityLabel: "العدد التقديري للضيوف",
      capacityOptions: ["أقل من 100 ضيف", "100 – 500 ضيف", "أكثر من 500 ضيف"],
      addonsLabel: "حدد الخدمات المطلوبة (يمكنك اختيار أكثر من خدمة)",
      addons: [
        { id: "gahwa", label: "محطة القهوة العربية والشاي" },
        { id: "luqaimat", label: "محطة تحضير اللقيمات والحلويات الحية" },
        { id: "banquet", label: "تموين بوفيه مفتوح وموائد طعام ملكية" },
        { id: "vip_staff", label: "طاقم ضيافة مخصص VIP" }
      ],

      step4Title: "بيانات التواصل",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: سعادة الشيخ / السيد أحمد المنصوري",
      phoneLabel: "رقم الواتساب / الهاتف",
      phonePlaceholder: "+971 50 xxx xxxx",
      notesLabel: "ملاحظات أو طلبات خاصة",
      notesPlaceholder: "اكتب أي تفاصيل إضافية، تفضيلات الطعام، أو مواقيت الحفل...",

      btnBack: "السابق",
      btnNext: "الخطوة التالية",
      btnSubmitWhatsApp: "إرسال طلب الحجز عبر الواتساب VIP",
      
      summaryHeader: "معاينة ملخص الطلب",
    },

    // Contact & Footer
    contact: {
      tag: "تواصل معنا",
      title: "الخط السريع لخدمة العملاء والمقر الرئيسي",
      bookingDesk: "مكتب الحجوزات والاستفسارات العامة",
      vipLine: "الخط المباشر لكبار الشخصيات (VIP Line)",
      instagram: "الحساب الرسمي على الإنستغرام",
      hoursTitle: "ساعات العمل",
      hoursVal: "يومياً: 9:00 صباحاً – 11:00 مساءً (توقيت الإمارات)",
      locationTitle: "نطاق التغطية",
      locationVal: "نخدم جميع الإمارات السبع في دولة الإمارات العربية المتحدة",
      copyright: "© 1998 – 2026 الدلة الذهبية لخدمات الأفراح. جميع الحقوق محفوظة.",
      tagline: "الدلة الذهبية — العنوان الأول للضيافة الإماراتية الفاخرة."
    },

    // Floating actions & toasts
    floating: {
      chatHeader: "مكتب الدلة الذهبية VIP",
      chatSubtitle: "يسعدنا خدمتك وتنسيق تفاصيل حفلكم فوراً عبر الواتساب.",
      chatBtn: "بدء المحادثة المباشرة عبر الواتساب",
      copiedToast: "تم نسخ رقم الهاتف إلى الحافظة!"
    }
  }
};
