"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronRight,
  Database,
  FileClock,
  Fingerprint,
  GitBranch,
  Globe2,
  GraduationCap,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  RefreshCcw,
  School,
  Server,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react"

const metrics = [
  { value: "+12k", label: "alunos na operação" },
  { value: "+20", label: "escolas conectadas" },
  { value: "+20", label: "professores ativos" },
  { value: "multi", label: "país e linguagem" },
]

const before = [
  "Processos manuais e dependência de planilhas",
  "Comunicação descentralizada entre escolas",
  "Baixa rastreabilidade acadêmica e operacional",
  "Dificuldade de padronização pedagógica",
  "Análise de desempenho lenta e pouco estruturada",
]

const after = [
  "Gestão acadêmica centralizada e auditável",
  "Controle hierárquico por professor, admin e superadmin",
  "Dashboards pedagógicos e métricas de desempenho",
  "Padronização de conteúdo entre unidades e países",
  "IA aplicada para apoiar melhoria de planos de aula",
]

const capabilities = [
  {
    icon: <GraduationCap />,
    title: "Gestão acadêmica",
    text: "Turmas, alunos, professores, módulos, aulas, materiais, categorias, notas, presença e acompanhamento pedagógico.",
  },
  {
    icon: <ShieldCheck />,
    title: "Segurança",
    text: "JWT, refresh token, cookies seguros, sessões temporárias, middleware de autorização e controle hierárquico.",
  },
  {
    icon: <BrainCircuit />,
    title: "IA aplicada",
    text: "Uso de LLM para apoiar professores na melhoria de planos de aula e consistência pedagógica.",
  },
  {
    icon: <FileClock />,
    title: "Auditoria",
    text: "Logs em tempo real, histórico de ações e rastreabilidade para reduzir conflitos de informação.",
  },
  {
    icon: <BarChart3 />,
    title: "Dashboards",
    text: "Métricas de desempenho, visão pedagógica, filtros por contexto e exportações para análise operacional.",
  },
  {
    icon: <Workflow />,
    title: "Automação",
    text: "Notificações por e-mail, recuperação de senha, cadastro supervisionado e aprovação administrativa.",
  },
]

const architecture = [
  { icon: <Layers3 />, title: "Next.js", detail: "React + TypeScript" },
  { icon: <Server />, title: "APIs", detail: "rotas customizadas" },
  { icon: <KeyRound />, title: "JWT", detail: "sessões seguras" },
  { icon: <LockKeyhole />, title: "Middleware", detail: "autorização" },
  { icon: <Database />, title: "PostgreSQL", detail: "modelo relacional" },
  { icon: <Activity />, title: "Logs", detail: "auditoria em tempo real" },
]

const security = [
  "Cookies seguros e refresh token para sessões temporárias",
  "Middleware centralizado para proteção de rotas sensíveis",
  "Controle de acesso por papéis: professor, admin e superadmin",
  "Auditoria completa para rastrear ações críticas da operação",
  "Aprovação administrativa e cadastro supervisionado",
  "Filtro de conteúdo por admin para preservar consistência pedagógica",
]

const technicalChallenges = [
  {
    title: "Modelagem de regras complexas",
    text: "O sistema precisava representar diferentes perfis, níveis de acesso, escolas, turmas, professores, materiais e métricas sem gerar conflito entre unidades.",
  },
  {
    title: "Padronização internacional",
    text: "A plataforma foi pensada para multi-país, multi linguagem e consistência entre escolas, mantendo flexibilidade para operação local.",
  },
  {
    title: "Rastreabilidade operacional",
    text: "Logs, auditoria e hierarquia administrativa foram tratados como parte central da arquitetura, não como camada adicional tardia.",
  },
  {
    title: "Experiência responsiva",
    text: "A operação acadêmica precisava funcionar em diferentes dispositivos, preservando clareza para professores e administradores.",
  },
]

const gallery = [
  {
    title: "Dashboard operacional",
    label: "img1",
    src: "/blueworld9/dashboard.png",
    description:
      "Parâmetros de análise, métricas acadêmicas, qualidade operacional, alertas gerenciais e acompanhamento por turma.",
    className: "featured",
  },
  {
    title: "Gestão de turmas",
    label: "img2",
    src: "/blueworld9/turmas.png",
    description:
      "Fluxo de criação, busca, manutenção de turmas, vínculo com agenda, alunos e professor selecionado.",
  },
  {
    title: "Controle de presença",
    label: "img3",
    src: "/blueworld9/presenca.png",
    description:
      "Lançamento de presença, ciclos avaliativos e observações em uma interface de rotina acadêmica.",
  },
  {
    title: "Auditoria completa",
    label: "img4",
    src: "/blueworld9/auditoria.png",
    description:
      "Registro de ações, rotas, status, filtros e rastreabilidade para governança operacional.",
    className: "wide",
  },
  {
    title: "Mobile professor",
    label: "img5",
    src: "/blueworld9/mobile-professor.png",
    description:
      "Experiência responsiva com navegação por módulos, administração e acesso rápido às rotinas do professor.",
  },
]

const learnings = [
  "Arquitetura de SaaS educacional precisa começar pelo modelo de permissão, não pela interface.",
  "Padronização entre unidades exige regras explícitas, auditoria e consistência de dados.",
  "IA aplicada gera mais valor quando entra como apoio ao professor, preservando controle humano.",
  "Logs e métricas deixam de ser recursos técnicos quando viram instrumentos de gestão.",
]

export default function BlueWorld9Case() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.35])

  return (
    <main className="bw-case">
      <motion.div
        className="bw-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <section className="bw-hero">
        <motion.div className="bw-hero-glow" style={{ opacity: glowOpacity }} />
        <div className="bw-grid-bg" />

        <motion.nav
          className="bw-nav"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/" className="bw-logo">
            Victor Augustho
          </Link>
          <div>
            <a href="#arquitetura">Arquitetura</a>
            <a href="#seguranca">Segurança</a>
            <a href="#impacto">Impacto</a>
          </div>
        </motion.nav>

        <div className="bw-hero-inner">
          <motion.div
            className="bw-hero-copy"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bw-eyebrow">
              <Sparkles size={16} />
              Case premium • SaaS educacional em produção
            </span>
            <h1>BlueWorld9</h1>
            <p className="bw-tagline">
              Plataforma educacional corporativa multiunidade com gestão
              acadêmica, auditoria, métricas e IA aplicada.
            </p>
            <div className="bw-hero-actions">
              <a href="#arquitetura" className="bw-primary">
                Ver arquitetura <ArrowRight size={18} />
              </a>
              <a href="#galeria" className="bw-secondary">
                Explorar telas
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bw-product-frame"
            style={{ y: heroY }}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="bw-window-bar">
              <span />
              <span />
              <span />
              <strong>blueworld9.app / academic-control</strong>
            </div>
            <div className="bw-dashboard-mock">
              <div className="bw-dashboard-top">
                <div>
                  <span>Academic Command Center</span>
                  <strong>Multi-school performance</strong>
                </div>
                <BadgeCheck size={24} />
              </div>
              <div className="bw-chart-grid">
                <div className="bw-chart-card wide">
                  <span>Presença consolidada</span>
                  <div className="bw-bars">
                    <i style={{ height: "42%" }} />
                    <i style={{ height: "76%" }} />
                    <i style={{ height: "58%" }} />
                    <i style={{ height: "86%" }} />
                    <i style={{ height: "70%" }} />
                    <i style={{ height: "93%" }} />
                  </div>
                </div>
                <div className="bw-chart-card">
                  <span>Auditoria</span>
                  <strong>98.7%</strong>
                  <small>ações rastreadas</small>
                </div>
                <div className="bw-chart-card">
                  <span>IA pedagógica</span>
                  <strong>LLM</strong>
                  <small>planos de aula</small>
                </div>
              </div>
              <div className="bw-live-feed">
                {["Admin aprovou cadastro", "Professor atualizou presença", "IA sugeriu melhoria", "Log sincronizado"].map(
                  (item) => (
                    <div key={item}>
                      <span />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bw-metrics">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08}>
              <div className="bw-metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bw-section bw-executive" id="impacto">
        <Reveal>
          <SectionLabel icon={<Building2 />}>Resumo executivo</SectionLabel>
          <div className="bw-two-col">
            <div>
              <h2>
                Uma operação educacional internacional centralizada em uma
                plataforma auditável.
              </h2>
            </div>
            <div className="bw-copy-stack">
              <p>
                O BlueWorld9 consolidou gestão acadêmica, comunicação,
                desempenho, acompanhamento pedagógico e padronização entre
                escolas em um sistema único.
              </p>
              <p>
                A plataforma foi arquitetada para lidar com hierarquia, múltiplas
                unidades, multi linguagem, dados acadêmicos sensíveis, logs em
                tempo real e apoio pedagógico com IA.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bw-section">
        <Reveal>
          <SectionLabel icon={<RefreshCcw />}>Problema vs solução</SectionLabel>
          <div className="bw-before-after">
            <ComparisonCard title="Antes da plataforma" items={before} tone="before" />
            <ComparisonCard title="Depois da plataforma" items={after} tone="after" />
          </div>
        </Reveal>
      </section>

      <section className="bw-section">
        <Reveal>
          <SectionLabel icon={<Globe2 />}>Escala e maturidade operacional</SectionLabel>
          <div className="bw-scale-panel">
            <div>
              <h2>Multi-país, multi linguagem e consistência de regras.</h2>
              <p>
                O sistema foi pensado para evitar conflitos de informação,
                padronizar ensino entre escolas e sustentar controle operacional
                com papéis claros, requisitos bem levantados e dados
                centralizados.
              </p>
            </div>
            <div className="bw-orbit">
              <span>Superadmin</span>
              <span>Admin</span>
              <span>Professor</span>
              <div>
                <School size={34} />
                <strong>BW9 Core</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bw-section">
        <Reveal>
          <SectionLabel icon={<Layers3 />}>Funcionalidades por domínio</SectionLabel>
          <div className="bw-capability-grid">
            {capabilities.map((item, index) => (
              <motion.article
                className="bw-capability-card"
                key={item.title}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div>{item.icon}</div>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bw-section" id="arquitetura">
        <Reveal>
          <SectionLabel icon={<Network />}>Arquitetura técnica</SectionLabel>
          <div className="bw-architecture">
            {architecture.map((node, index) => (
              <div className="bw-arch-node" key={node.title}>
                <div>{node.icon}</div>
                <strong>{node.title}</strong>
                <span>{node.detail}</span>
                {index < architecture.length - 1 && <ChevronRight className="bw-arch-arrow" />}
              </div>
            ))}
          </div>
          <div className="bw-tech-stack">
            <TechCard title="Frontend" text="React, Next.js e TypeScript com interface responsiva e componentes reutilizáveis." />
            <TechCard title="Backend" text="APIs customizadas, autenticação JWT, middleware de autorização e regras de acesso." />
            <TechCard title="Banco" text="PostgreSQL com modelagem relacional para operação acadêmica, métricas e auditoria." />
            <TechCard title="Infraestrutura" text="Docker, VPS, EasyPanel, deploy via GitHub e backup diário automatizado." />
          </div>
        </Reveal>
      </section>

      <section className="bw-section" id="seguranca">
        <Reveal>
          <SectionLabel icon={<Fingerprint />}>Segurança e governança</SectionLabel>
          <div className="bw-security-grid">
            <div className="bw-security-visual">
              <div className="bw-lock-core">
                <ShieldCheck size={44} />
                <strong>Trust Layer</strong>
                <span>JWT • Roles • Logs</span>
              </div>
              <div className="bw-security-rings" />
            </div>
            <div className="bw-security-list">
              {security.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bw-section">
        <Reveal>
          <SectionLabel icon={<BrainCircuit />}>IA aplicada ao ensino</SectionLabel>
          <div className="bw-ai-panel">
            <div>
              <h2>LLM como copiloto pedagógico, não como substituto do professor.</h2>
              <p>
                A IA foi posicionada como apoio para melhoria de planos de aula,
                ajudando professores a revisar estrutura, clareza, objetivos e
                consistência pedagógica dentro de um fluxo supervisionado.
              </p>
            </div>
            <div className="bw-ai-flow">
              {["Plano de aula", "Análise LLM", "Sugestões", "Revisão humana"].map(
                (step) => (
                  <span key={step}>{step}</span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bw-section">
        <Reveal>
          <SectionLabel icon={<GitBranch />}>Desafios técnicos</SectionLabel>
          <div className="bw-challenge-grid">
            {technicalChallenges.map((challenge) => (
              <article key={challenge.title}>
                <h3>{challenge.title}</h3>
                <p>{challenge.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bw-section" id="galeria">
        <Reveal>
          <SectionLabel icon={<BarChart3 />}>Galeria do produto</SectionLabel>
          <div className="bw-gallery">
            {gallery.map((item) => (
              <motion.article
                className={item.className ?? ""}
                key={item.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
              >
                <div className="bw-gallery-image">
                  <Image
                    src={item.src}
                    alt={`${item.title} - BlueWorld9`}
                    width={item.className === "featured" ? 1200 : 760}
                    height={item.className === "featured" ? 675 : 520}
                  />
                </div>
                <div className="bw-gallery-caption">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bw-section bw-learning">
        <Reveal>
          <SectionLabel icon={<UsersRound />}>Aprendizados técnicos</SectionLabel>
          <div className="bw-learning-list">
            {learnings.map((item) => (
              <article key={item}>
                <Bell size={18} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bw-final">
        <Reveal>
          <p className="bw-eyebrow">
            <Mail size={16} />
            Case de arquitetura, produto e operação real
          </p>
          <h2>
            BlueWorld9 demonstra capacidade de construir software além da tela:
            regras, segurança, dados, operação e escala.
          </h2>
          <Link href="/" className="bw-primary">
            Voltar ao currículo <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>
    </main>
  )
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({
  children,
  icon,
}: {
  children: React.ReactNode
  icon: React.ReactNode
}) {
  return (
    <div className="bw-section-label">
      {icon}
      <span>{children}</span>
    </div>
  )
}

function ComparisonCard({
  title,
  items,
  tone,
}: {
  title: string
  items: string[]
  tone: "before" | "after"
}) {
  return (
    <article className={`bw-comparison ${tone}`}>
      <h3>{title}</h3>
      <div>
        {items.map((item) => (
          <p key={item}>
            <CheckCircle2 size={16} />
            {item}
          </p>
        ))}
      </div>
    </article>
  )
}

function TechCard({ title, text }: { title: string; text: string }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
