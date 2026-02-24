export const SITE = {
    name: 'Shashi Prakash',
    role: 'AI Researcher & Data Engineer',
    headline: 'AI Researcher and Data Engineer with 4+ years of experience across academia and industry',
    subhead: "Specialized in Retrieval-Augmented Generation (RAG), scalable data pipelines, and AI-powered conversational systems. Passionate about privacy-aware systems, explainable AI, and interactive data visualization.",
    email: 'prakashshashi610@gmail.com',
    phone: '+49-15758544726',
    location: 'Paderborn, Germany',
    socials: {
        github: 'https://github.com/shashiprakash', // Updated placeholder
        linkedin: 'https://linkedin.com/in/shashiprakash' // Updated placeholder
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
        slug: 'step-counting-sensor-data',
        title: 'Step Counting with Sensor Data',
        description: 'Developed a robust pipeline to accurately count left and right steps from raw IMU sensor data using signal processing and machine learning.',
        stack: ['Python', 'SciPy', 'PyTorch', 'XGBoost', 'Signal Processing'],
        image: '/assets/steps.jpg',
    },
    {
        slug: 'thesis-knowledge-graph-embeddings',
        title: 'Master Thesis — Knowledge Graph Embeddings',
        description: 'Developed function-based knowledge graph embeddings with Neural Architecture Search to optimize performance and enhanced LLM grounding.',
        stack: ['PyTorch', 'NAS', 'Knowledge Graphs', 'LLMs'],
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
        slug: 'financial-markets-strategy',
        title: 'Financial Market Investment Strategies',
        description: 'Time-series forecasting for crypto and equities, sentiment ingestion, and derivatives pricing with Quantlib to stress-test strategies.',
        stack: ['Python', 'Quantlib', 'Time-Series', 'Forecasting'],
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
        year: 'Nov 2025 – Present',
        title: 'AI Research Engineer',
        company: 'ZELTASK',
        location: 'Germany',
        description: 'Architecting enterprise-grade RAG systems for structured/unstructured data. Developed WhatsApp-based AI Copilot via Kapso Cloud API.',
        responsibilities: [
            'Architecting and developing enterprise-grade Retrieval-Augmented Generation (RAG) systems.',
            'Designed and deployed a WhatsApp-based AI Copilot using Kapso Cloud API.',
            'Built scalable document ingestion pipelines with semantic chunking and BGE model embeddings.',
            'Integrated LLM-driven response generation with context-aware retrieval to reduce hallucinations.',
            'Engineered backend integrations with Payload CMS APIs and multi-tenant support.',
            'Developed structured logging and evaluation frameworks (200+ query scenarios).',
            'Led system design for production readiness, including rate-limit handling and webhook validation.'
        ],
        techStack: ['Python', 'RAG', 'LLMs', 'BGE Models', 'FastAPI', 'Payload CMS', 'Vector DBs']
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
        year: 'Graduated Aug 2025',
        title: 'MS in Computer Science',
        institution: 'University of Paderborn',
        location: 'Paderborn, Germany',
        description: 'Master Thesis: Privacy Data Labelling Web Tool (Supervisor: Prof. Dr. Eric Bodden). Focus on identifies privacy-related data for Google Play DSS compliance.',
        modules: {
            'Thesis': [
                'Developed a web-based tool using Flask and D3.js.',
                'Implemented automated metadata extraction and interactive dashboards.',
                'Containerized with Docker and conducted usability studies.'
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
