export const SITE = {
    name: 'Shashi Prakash',
    role: 'AI Researcher & Data Engineer',
    headline: 'AI Researcher and Data Engineer with 4+ years of experience across academia and industry',
    subhead: "Specialized in Retrieval-Augmented Generation (RAG), scalable data pipelines, and AI-powered conversational systems. Passionate about privacy-aware systems, explainable AI, and interactive data visualization.",
    email: 'prakashshashi610@gmail.com',
    phone: '+49-15758544726',
    location: 'Paderborn, Germany',
    socials: {
        github: 'https://github.com/shashiprakash610', // Updated to primary account
        linkedin: 'https://www.linkedin.com/in/shashi-prakash-01372bb5/' // Updated from placeholder
    },
}


export const PROJECTS = [
    {
        slug: 'cycling-tour-prediction',
        title: 'Cycling Tour Prediction',
        description: 'Designed an intelligent NLP pipeline for cycling route recommendations using advanced natural language processing and geospatial analysis.',
        stack: ['Hugging Face', 'Transformers', 'BART', 'Python', 'FastAPI', 'Pandas'],
        image: '/assets/cycling.jpg',
    },
    {
        slug: 'agentic-research-assistant',
        title: 'Agentic Research Assistant',
        description: 'An AI-powered research assistant featuring a multi-agent architecture for intelligent routing, document summarization, and data extraction using RAG with ChromaDB.',
        stack: ['FastAPI', 'LangChain', 'ChromaDB', 'React', 'TypeScript', 'Groq API'],
        image: '/assets/rag.jpg',
    },
    {
        slug: 'thesis-autoprice',
        title: 'Master Thesis — AutoPRICE',
        description: 'Developed a RAG-powered web tool to automate Google Play Data Safety Section (DSS) compliance for Android apps, featuring intelligent form-filling and interactive privacy dashboards.',
        stack: ['Python', 'Flask', 'RAG', 'D3.js', 'Docker', 'Android Analysis'],
        image: '/assets/thesis.jpg',
    },
    {
        slug: 'email-rag-langgraph',
        title: 'RAG with LangGraph on Email Data',
        description: 'Built a private email QA assistant backed by a LangGraph pipeline with retrieval and synthesis for automated drafting and search.',
        stack: ['LangGraph', 'RAG', 'Python', 'LLMs'],
        image: '/assets/rag.jpg',
    },
    {
        slug: 'smart-quality-monitoring',
        title: 'Smart Quality Monitoring – Kruse GmbH',
        description: 'Designed a data analytics pipeline to identify faulty washing machine parts by integrating multi-source logs (ERP, MES, QMS) with high-frequency vibration sensor data. Merged 1,500+ production records and visualized 20kHz vibration signals to identify bearing faults.',
        stack: ['Python', 'Pandas', 'Matplotlib', 'Time-Series', 'Big Data'],
        image: '/assets/finance.jpg',
    },
]


export const SKILLS = {
    'Programming Languages': ['Python', 'SQL', 'C#', 'JavaScript'],
    'AI & Machine Learning': ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'LLMs', 'Prompt Engineering'],
    'NLP & RAG Systems': ['RAG', 'Text Embeddings', 'Semantic Search', 'Document Chunking', 'Vector Similarity Search'],
    'Data Engineering': ['ETL/ELT', 'Data Ingestion', 'Data Mesh', 'Microsoft Fabric', 'Azure Data Factory'],
    'Cloud Platforms': ['Microsoft Azure'],
    'Databases & Storage': ['PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'MS SQL Server', 'Power Query'],
    'Vector Databases': ['FAISS', 'ChromaDB'],
    'Infrastructure & DevOps': ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Agile/Scrum'],
    'Data Processing & Analysis': ['Pandas', 'NumPy'],
    'Visualization & BI': ['Power BI', 'D3.js', 'Matplotlib'],
    'Web Technologies': ['Flask', 'REST APIs', 'HTML', 'CSS'],
    'Languages': ['English (C1)', 'German (B1)']
}


export const WORK_EXPERIENCE = [
    {
        year: 'Jun 2026 – Present',
        title: 'Student Research Data Engineer',
        company: 'ZIH, Technische Universität Dresden',
        location: 'Dresden, Germany',
        description: 'Building Python and Django services that automate research workflows, standardize metadata, and support secure research data exchange.',
        responsibilities: [
            'Developed Python and Django backend services integrating REDCap REST APIs to automate research workflows and metadata management across multiple projects.',
            'Built metadata transformation and validation pipelines to map hierarchical research data into standardized formats for data exchange and repository submission.',
            'Implemented encrypted credential storage, project-specific request validation, scoped file access, and audit logging for security and traceability.',
            'Built Docker-based deployment infrastructure with PostgreSQL, Gunicorn, and Nginx on Linux, including health checks and backup and recovery scripts.',
            'Added GitLab CI pipelines for automated testing and deployment validation.'
        ],
        techStack: ['Python', 'Django', 'REDCap REST API', 'PostgreSQL', 'Docker', 'Gunicorn', 'Nginx', 'Linux', 'GitLab CI']
    },
    {
        year: 'Mar 2025 – Present',
        title: 'AI Research Engineer',
        company: 'ZELTASK',
        location: 'Leipzig, Germany',
        description: 'Developing enterprise AI assistants that connect conversational interfaces with operational workflows, combining Python backend services, RAG, and enterprise API integrations.',
        responsibilities: [
            'Developed enterprise AI assistants using Python, LLMs, LangChain, and Retrieval-Augmented Generation (RAG) for operational workflows and context-aware question answering.',
            'Built FastAPI services and enterprise REST API integrations with PostgreSQL and Redis, supporting authentication, role-based permissions, tool execution, and conversational memory.',
            'Implemented document ingestion, embedding, and vector-search pipelines; evaluated retrieval quality, intent classification, and prompt performance using Promptfoo and Giskard.',
            'Engineered automated evaluations for webhook idempotency and concurrency to detect duplicate processing and assess reliability across restarts and multiple workers.',
            'Collaborated with product owners and business stakeholders to translate operational requirements into AI-assisted workflows integrated with enterprise systems.'
        ],
        techStack: ['Python', 'FastAPI', 'LLMs', 'LangChain', 'RAG', 'REST APIs', 'PostgreSQL', 'Redis', 'Vector Search', 'Promptfoo', 'Giskard']
    },
    {
        year: 'Jan 2024 – Jan 2025',
        title: 'Student Research Assistant',
        company: 'Secure Software Engineering Group, University of Paderborn',
        location: 'Paderborn, Germany',
        description: 'Developed a web-based privacy data labeling tool for Android apps to support DSS compliance.',
        responsibilities: [
            'Developed a web-based extension to identify and label privacy-related data in Android apps.',
            'Conducted user surveys with developers to improve usability and feature prioritization.',
            'Implemented interactive dashboards using Flask, Vanilla JavaScript, and D3.js.',
            'Containerized the solution with Docker for reproducible deployment.'
        ],
        techStack: ['Flask', 'JavaScript', 'D3.js', 'Docker', 'Android Analysis']
    },
    {
        year: 'April 2022 – March 2023',
        title: 'Extern',
        company: 'Fraunhofer IEM',
        location: 'Paderborn, Germany',
        description: 'Developed VR workstation simulations to study ergonomics using C# and Unity.',
        responsibilities: [
            'Developed VR workstation simulation using C# and Unity for ergonomic factors study.',
            'Implemented Python scripts for sensor and observational data analysis.',
            'Created interactive 3D visualizations for real-time ergonomic metrics.',
            'Collaborated on experiment design and ergonomic improvement recommendations.'
        ],
        techStack: ['C#', 'Unity', 'Python', 'VR', 'Data Analysis']
    },
    {
        year: 'April 2021 – December 2021',
        title: 'Research Project Member',
        company: 'Data Science Group, University of Paderborn',
        location: 'Paderborn, Germany',
        description: 'Explainable AI project migrating ontology management to Neo4j for scalable reasoning.',
        responsibilities: [
            'Migrated ontology management from Owlready2 to Neo4j for scalable reasoning and visualization.',
            'Developed ETL pipelines to import RDF/OWL ontologies using Neosemantics (n10s).',
            'Implemented Cypher queries to extract semantic relationships in large knowledge graphs.',
            'Evaluated Neo4j for industrial cases like fraud detection and personalization.'
        ],
        techStack: ['Neo4j', 'Cypher', 'RDF/OWL', 'Python', 'Explainable AI']
    },
    {
        year: 'August 2018 – February 2020',
        title: 'Associate Data Analytics BI',
        company: 'Qunito Technologies Pvt. Ltd',
        location: 'India',
        description: 'Designed Azure Data Factory pipelines and Python ETL scripts for data lake ingestion.',
        responsibilities: [
            'Designed and maintained Azure Data Factory pipelines for various data sources.',
            'Created and optimized Python ETL scripts for automated cleansing and aggregation.',
            'Developed Power BI dashboards for KPI visualization and insights.',
            'Implemented data validation procedures and quality checks.',
            'Collaborated with teams to translate requirements into scalable BI solutions.'
        ],
        techStack: ['Azure Data Factory', 'Python', 'Power BI', 'SQL Server', 'ETL']
    },
]


export const EDUCATION = [
    {
        year: '2020 – 2025',
        title: 'MS in Software Engineering',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        description: 'Master Thesis: Automatically Generating the Data Safety Section Using AutoPRICE (Supervisor: Prof. Dr. Eric Bodden). Developed a web-based extension of a command-line tool to identify and label privacy-related data in Android apps, assisting developers with Google Play Data Safety Section (DSS) compliance. The solution features an intelligent Retrieval-Augmented Generation (RAG) pipeline to automate the data filling form process, significantly increasing accuracy and efficiency. Implemented using Flask, D3.js, and Docker, and validated through user surveys and usability studies with Android developers.',
        modules: {
            'Software Engineering': [
                'Data-Driven Innovation and Engineering',
                'Model-Based Systems Engineering',
                'Software Quality Assurance'
            ],
            'Networks and Communication': [
                'Mobile Communication',
                'Networked Embedded Systems'
            ],
            'Intelligence and Data': [
                'Computational Argumentation',
                'Planning and Heuristic Search'
            ],
            'Data Science': [
                'Data Science in Industrial Applications'
            ],
            'Seminars & Projects': [
                'Seminar: Gems of Theoretical Computer Science',
                'Seminar: Special Topics on System-of-Systems Engineering',
                'Project Group: Virtual Technologies in Engineering'
            ],
            'Thesis (AutoPRICE)': [
                'Developed "AutoPRICE", a web-based privacy labeling tool using Flask and D3.js.',
                'Integrated a RAG pipeline to intelligently automate the filling of complex data safety forms.',
                'Implemented automated metadata extraction and interactive dashboards for real-time visualization.',
                'Containerized with Docker for cross-platform deployment and conducted developer usability studies.'
            ]
        }
    },
    {
        year: 'Graduated June 2018',
        title: 'BE in Computer Science and Engineering',
        institution: 'Nitte Meenakshi Institute of Technology',
        location: 'Bangalore, India',
        description: 'Comprehensive curriculum in CS and IT foundations.',
        modules: {}
    },
]

// Keep the old TIMELINE for backward compatibility but mark as deprecated
export const TIMELINE = WORK_EXPERIENCE
