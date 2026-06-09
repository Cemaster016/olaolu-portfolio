import { motion } from 'framer-motion';

const categories = [
  {
    label: 'AI & ML Engineering', icon: '🧠',
    skills: ['LLM Development', 'Agentic AI & MCP', 'RAG Architecture', 'Prompt Engineering', 'NL2DAX / NL2SQL', 'Conversational AI', 'MLflow', 'AutoML', 'Deep Learning', 'Predictive Modelling', 'Customer Segmentation', 'CLV Modelling', 'Recommendation Systems', 'Sentiment Analysis'],
  },
  {
    label: 'API & Software Development', icon: '⚙️',
    skills: ['REST API Design', 'FastAPI', 'Flask', 'WebSocket', 'Microservices', 'Docker', 'OpenAPI / Swagger', 'Serverless', 'Async Python', 'Event-Driven Architecture'],
  },
  {
    label: 'Cloud & Azure', icon: '☁️',
    skills: ['Azure OpenAI', 'Azure AI Foundry', 'Azure Functions', 'Azure Data Factory', 'Microsoft Fabric', 'Power BI', 'Azure Cognitive Search', 'CosmosDB', 'Azure Table Storage', 'Key Vault', 'Copilot Studio', 'AWS', 'Vertex AI'],
  },
  {
    label: 'Languages & Frameworks', icon: '💻',
    skills: ['Python', 'SQL', 'DAX', 'JavaScript', 'LangChain', 'LangGraph', 'scikit-learn', 'Keras', 'Pandas', 'Matplotlib', 'Power Automate', 'Git'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <span className="section-label">What I work with</span>
        <h2 className="section-heading">Core Competencies</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{ fontSize: '1.6rem' }}>{cat.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)' }}>
                  {cat.label}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.skills.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
