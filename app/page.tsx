import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react"

const siteUrl = "https://curriculo.autonextech.com.br"

const stats = [
  { value: "+12k", label: "alunos impactados em produto educacional" },
  { value: "+20", label: "escolas conectadas em operação real" },
  { value: "Full stack", label: "produto, dados, API e interface" },
  { value: "IA", label: "aplicada a automações e apoio pedagógico" },
]

const specialties = [
  {
    icon: <Layers3 />,
    title: "Produtos web completos",
    text: "Sistemas com autenticação, permissões, dashboards, banco de dados, APIs e experiência responsiva.",
  },
  {
    icon: <Workflow />,
    title: "Automações e integrações",
    text: "Fluxos conectando mensageria, pagamentos, planilhas, banco de dados, IA e serviços externos.",
  },
  {
    icon: <ShieldCheck />,
    title: "Arquitetura e governança",
    text: "Controle hierárquico, auditoria, logs, rastreabilidade e regras de negócio pensadas para operação real.",
  },
]

const projects = [
  {
    title: "BlueWorld9",
    eyebrow: "SaaS educacional em produção",
    status: "Case principal",
    href: `${siteUrl}/projetos/blueworld9`,
    text: "Plataforma educacional corporativa multiunidade com gestão acadêmica, auditoria, métricas, IA aplicada e operação internacional.",
    impact: ["+12.000 alunos", "+20 escolas", "multi-país", "auditoria completa"],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "JWT", "Docker"],
    featured: true,
  },
  {
    title: "Teste de Temperamentos com IA",
    eyebrow: "Produto com checkout e automação",
    status: "Produto publicado",
    href: "https://gottardi.autonextech.com.br",
    text: "Sistema com coleta de respostas, regras de acesso, pagamento integrado e geração de resultados com IA aplicada.",
    impact: ["checkout integrado", "relatórios com IA", "acesso por regras"],
    tags: ["IA", "Asaas", "Automação", "Sistema web"],
  },
  {
    title: "JAMES",
    eyebrow: "Assistente operacional",
    status: "Automação interna",
    href: "#contato",
    text: "Automação com WhatsApp, agenda, planilhas, PostgreSQL, IA e fluxos operacionais centralizados.",
    impact: ["WhatsApp", "agenda", "dados centralizados"],
    tags: ["n8n", "APIs", "PostgreSQL", "WhatsApp"],
  },
]

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "n8n",
  "APIs REST",
  "Docker",
  "VPS",
  "GitHub",
  "IA aplicada",
]

export default function HomePage() {
  return (
    <main className="home-shell">
      <div className="home-grid-bg" />

      <nav className="home-nav">
        <Link href="/" className="home-logo">
          Victor Augustho
        </Link>
        <div>
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-eyebrow">
            Desenvolvedor Full Stack • Automações • IA aplicada
          </span>
          <h1>Sistemas web, automações e IA para operações reais.</h1>
          <p>
            Desenvolvedor focado em plataformas web, integrações, dashboards e
            soluções com regras de negócio complexas. Trabalho com Next.js,
            TypeScript, PostgreSQL, APIs, IA aplicada e fluxos operacionais.
          </p>
          <div className="home-actions">
            <Link href="/projetos/blueworld9" className="home-primary">
              Ver case BlueWorld9 <ArrowUpRight size={18} />
            </Link>
            <a href="#contato" className="home-secondary">
              Entrar em contato
            </a>
          </div>
          <a className="home-domain" href={siteUrl}>
            curriculo.autonextech.com.br
          </a>
        </div>

        <div className="home-orbital-card">
          <div className="home-profile-card">
            <div className="home-photo">
              <Image
                src="/foto-minha.jpeg"
                alt="Victor Augustho"
                width={220}
                height={220}
                priority
              />
            </div>
            <div>
              <span>Full Stack Developer</span>
              <strong>Victor Augustho</strong>
              <p>
                <MapPin size={14} />
                Anápolis — GO
              </p>
            </div>
          </div>

          <div className="home-system-card">
            <div className="home-window-bar">
              <span />
              <span />
              <span />
              <strong>curriculo.autonextech.com.br</strong>
            </div>
            <div className="home-mini-dashboard">
              <div>
                <BrainCircuit size={22} />
                <span>IA aplicada</span>
              </div>
              <div>
                <Database size={22} />
                <span>Dados e métricas</span>
              </div>
              <div>
                <Globe2 size={22} />
                <span>Multiunidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <span className="home-eyebrow">Como eu trabalho</span>
          <h2>Da regra de negócio ao produto em produção.</h2>
        </div>
        <div className="home-specialties">
          {specialties.map((item) => (
            <article key={item.title}>
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section" id="projetos">
        <div className="home-section-head projects-head">
          <span className="home-eyebrow">Projetos selecionados</span>
          <h2>Cases com produto, arquitetura e operação real.</h2>
          <p>
            Uma vitrine objetiva dos projetos que melhor mostram capacidade de
            entregar sistemas completos, integrações, segurança, dados e
            experiência de uso.
          </p>
        </div>
        <div className="home-projects">
          {projects.map((project) => (
            <Link
              className={project.featured ? "home-project featured" : "home-project"}
              href={project.href}
              key={project.title}
            >
              <div className="home-project-top">
                <span>{project.eyebrow}</span>
                <small>{project.status}</small>
              </div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="home-project-impact">
                {project.impact.map((item) => (
                  <strong key={item}>{item}</strong>
                ))}
              </div>
              <div className="home-project-tags">
                {project.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
              <span className="home-project-cta">
                Ver projeto <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section" id="stack">
        <div className="home-section-head">
          <span className="home-eyebrow">Stack técnica</span>
          <h2>Tecnologias para construir produtos completos.</h2>
        </div>
        <div className="home-stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="home-contact" id="contato">
        <div>
          <span className="home-eyebrow">Disponível para oportunidades</span>
          <h2>Vamos conversar sobre produto, sistemas ou automações?</h2>
          <p>
            Aberto a oportunidades em desenvolvimento full stack, backend,
            automações, integrações e produtos com IA aplicada.
          </p>
        </div>
        <div className="home-contact-actions">
          <a href="mailto:victor.agustho@icloud.com">
            <Mail size={18} />
            Enviar e-mail
          </a>
          <a href="https://wa.me/5562993204235">
            <Phone size={18} />
            WhatsApp
          </a>
          <a href="https://github.com/victoraugustho" target="_blank">
            <Github size={18} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/victor-augustho-dev/" target="_blank">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}
