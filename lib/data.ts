import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'anvalalan@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Anval, I am reaching out to you because...',

    oldPortfolio: 'https://github.com/achmadanval',
    linkedinProfile:
        'https://www.linkedin.com/in/achmad-anval-adhiem-allain-42304a388',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/achmadanval' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/achmad-anval-adhiem-allain-42304a388',
    },
    { name: 'email', url: 'mailto:anvalalan@gmail.com' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
        {
            name: 'HTML5',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS3',
            icon: '/logo/css.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'PHP',
            icon: '/logo/php.svg',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.svg',
        },
    ],
    'Mobile & AI': [
        {
            name: 'Flutter',
            icon: '/logo/flutter.svg',
        },
        {
            name: 'Dart',
            icon: '/logo/dart.svg',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'Google Colab',
            icon: '/logo/colab.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'SQLite',
            icon: '/logo/sqlite.svg',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'VS Code',
            icon: '/logo/vscode.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'LeafItToMe',
        slug: 'leafittome',
        year: 2026,
        description: `
      Aplikasi mobile deteksi penyakit daun tomat berbasis AI. Pengembang Aplikasi & Back-End Lead (PBL Semester 5). <br/> <br/>

      Key Features:<br/>
      <ul>
        <li>🛠️ Persistensi Offline: Arsitektur penyimpanan data lokal menggunakan SQLite untuk penggunaan tanpa koneksi internet</li>
        <li>☁️ Real-Time Sync: Sinkronisasi data cloud real-time via Firebase</li>
        <li>🧠 AI Detection: Integrasi pipeline model deteksi visual ke dalam antarmuka aplikasi</li>
        <li>📲 Cross-Platform: Dibangun dengan Flutter untuk Android & iOS</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Performa data preprocessing dan cleaning pada ribuan citra daun tomat menggunakan Google Colab guna meningkatkan akurasi inferensi model AI</li>
        <li>Membangun mekanisme penanganan galat (error handling) yang stabil di seluruh alur aplikasi</li>
        <li>Mengelola persistensi offline SQLite dengan sinkronisasi Firebase</li>
      </ul>
      `,
        role: `
      Pengembang Aplikasi & Back-End Lead <br/>
      Tanggung jawab utama:
      <ul>
        <li>✅ Backend: Merancang arsitektur penyimpanan data lokal SQLite dan sinkronisasi cloud Firebase</li>
        <li>🧠 AI: Data preprocessing dan cleaning ribuan citra pada Google Colab</li>
        <li>📱 Mobile: Integrasi pipeline model deteksi visual ke antarmuka Flutter</li>
        <li>🛡️ Reliability: Mekanisme error handling yang stabil</li>
      </ul>
      `,
        techStack: [
            'Flutter',
            'Dart',
            'Firebase',
            'SQLite',
            'Python',
            'Google Colab',
        ],
        thumbnail: '/projects/thumbnail/leafittome.png',
        longThumbnail: '/projects/long/leafittome.png',
        mockup: '/projects/mockups/leafittome.jpg',
        mockupLabel: 'Figma Mockup — PBL Semester 5 · TaniTomat',
        images: [
            '/projects/images/leafittome-splash.jpg',
            '/projects/images/leafittome-tanamanku.jpg',
            '/projects/images/leafittome-preview-foto.jpg',
            '/projects/images/leafittome-penanganan.jpg',
            '/projects/images/leafittome-profil.jpg',
        ],
    },
    {
        title: 'RunSnap',
        slug: 'runsnap',
        year: 2025,
        description: `
      Platform web distribusi & kurasi foto event lari. UI/UX Designer, Front-End & Back-End Contributor (PBL Semester 4). <br/><br/>

      Key Features:<br/>
      <ul>
        <li>📷 Event Photo Catalog: Katalog dan distribusi foto acara lari yang efisien</li>
        <li>🎨 High-Fidelity Prototype: Riset pengguna, wireframing, dan prototipe interaktif di Figma</li>
        <li>📱 Fully Responsive: Antarmuka web responsif dengan navigasi katalog yang efisien</li>
        <li>🐋 Consistent Environment: Container development untuk konsistensi antar tim</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Antarmuka web responsif berbasis template engine Laravel Blade dengan styling modular</li>
        <li>Berinisiatif membantu tim back-end merancang skema relasi basis data SQLite</li>
        <li>Mengonfigurasi routing serta controller pada framework Laravel</li>
        <li>Mengonfigurasi container development menggunakan Docker</li>
      </ul>
      `,
        role: `
      UI/UX Designer, Front-End & Back-End Contributor <br/>
      Tanggung jawab utama:
      <ul>
        <li>🎨 Design: Memimpin riset pengguna, wireframing, dan prototipe high-fidelity di Figma</li>
        <li>🖥️ Frontend: Mengembangkan antarmuka responsif dengan Laravel Blade + Tailwind/Bootstrap</li>
        <li>🗄️ Database: Membantu merancang skema relasi basis data SQLite</li>
        <li>🐳 DevOps: Konfigurasi container Docker untuk integrasi kolaborasi tim</li>
      </ul>
      `,
        techStack: [
            'Figma',
            'Laravel',
            'PHP',
            'Docker',
            'SQLite',
            'Blade',
            'Tailwind CSS',
            'Bootstrap',
        ],
        thumbnail: '/projects/thumbnail/Left_ Animation.jpg',
        longThumbnail: '/projects/long/runsnap.png',
        mockup: '/projects/mockups/runsnap.jpg',
        mockupLabel: 'Figma Mockup — PBL Semester 4',
        images: [
            '/projects/images/runsnap-register.jpg',
        ],
    },
    {
        title: 'Web Profile Lab NCS',
        slug: 'web-profile-ncs',
        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Bootstrap',
            'Tailwind CSS',
            'Git',
        ],
        thumbnail: '/projects/thumbnail/web-profile-ncs.jpg',
        longThumbnail: '/projects/long/web-profile-ncs.jpg',
        mockup: '/projects/mockups/web-profile-ncs.jpg',
        mockupLabel: 'Figma Mockup — NCS WEB',
        images: [
            '/projects/images/ncs-02-visi-misi.jpg',
            '/projects/images/ncs-03-struktur.jpg',
            '/projects/images/ncs-04-penelitian.jpg',
            '/projects/images/ncs-05-pengabdian.jpg',
            '/projects/images/ncs-10-link.jpg',
        ],
        year: 2025,
        description: `Situs resmi profil Laboratorium NCS (Network and Cyber Security). Front-End Developer & UI Contributor (PBL Semester 3). Situs ini menyajikan katalog informasi struktural dosen peneliti, riwayat publikasi ilmiah, dan galeri prestasi laboratorium dengan navigasi yang intuitif, dibangun dengan HTML semantik dan optimasi aset visual untuk performa lintas perangkat.`,
        role: `Front-End Developer & UI Contributor:<br/>
        - Merancang tata letak antarmuka dan mengonversi rancangan grafis ke kode web responsif.<br/>
        - Menyajikan katalog dosen peneliti, publikasi ilmiah, dan galeri prestasi dengan navigasi intuitif.<br/>
        - Menerapkan struktur HTML semantik serta optimasi aset visual untuk mempercepat load-time.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Sarjana Terapan (D4) Teknik Informatika — IPK: 3.65/4.00',
        company: 'Politeknik Negeri Malang',
        duration: '2024 - Present',
    },
    {
        title: 'Ketua Umum',
        company: 'UKM Karate — Politeknik Negeri Malang',
        duration: 'Nov 2025 - Present',
    },
    {
        title: 'Staf Divisi Kepelatihan',
        company: 'UKM Karate — Politeknik Negeri Malang',
        duration: 'Nov 2024 - Nov 2025',
    },
    {
        title: 'Teknisi Komputer & IT Support (Magang)',
        company: 'Aries Comp — Pasuruan',
        duration: 'Jul 2022 - Des 2022',
    },
];
