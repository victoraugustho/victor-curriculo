"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CloudCog,
  Database,
  Dock,
  FileSpreadsheet,
  Fingerprint,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Network,
  Orbit,
  ReceiptText,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  WalletCards,
  Workflow,
  Zap,
} from "lucide-react"

const metrics = [
  { value: "WhatsApp", label: "como camada conversacional" },
  { value: "IA", label: "orquestrando intenções e módulos" },
  { value: "Redis", label: "memória contextual por usuário" },
  { value: "n8n", label: "workflows e automações conectadas" },
]

const flow = [
  { icon: <MessageCircle />, title: "WhatsApp", detail: "entrada natural" },
  { icon: <Server />, title: "API", detail: "validação e roteamento" },
  { icon: <BrainCircuit />, title: "Orquestrador IA", detail: "interpretação semântica" },
  { icon: <Database />, title: "Memória", detail: "RedisChatMemory" },
  { icon: <Layers3 />, title: "Módulos", detail: "agenda, tasks, finanças" },
  { icon: <Bot />, title: "Resposta", detail: "ação + feedback inteligente" },
]

const architecture = [
  {
    title: "Entrada",
    icon: <MessageCircle />,
    text: "Recebimento de mensagens via WhatsApp, identificação do usuário, validação de acesso e verificação de assinatura.",
  },
  {
    title: "Orquestrador",
    icon: <Orbit />,
    text: "IA principal interpreta intenção, avalia contexto, decide o fluxo e aciona módulos especializados.",
  },
  {
    title: "Memória",
    icon: <Database />,
    text: "RedisChatMemory com sessionKey por usuário para preservar continuidade operacional temporária.",
  },
  {
    title: "Módulos",
    icon: <Layers3 />,
    text: "Agenda, tarefas, finanças e ferramentas auxiliares operam como capacidades desacopladas.",
  },
  {
    title: "Integrações",
    icon: <Network />,
    text: "Google Calendar, Google Tasks, Google Sheets, WhatsApp API, PostgreSQL e modelos GPT.",
  },
  {
    title: "Resposta",
    icon: <Zap />,
    text: "O sistema executa, registra, compõe uma resposta inteligente e mantém histórico da interação.",
  },
]

const modules = [
  {
    icon: <CalendarDays />,
    title: "Agenda",
    items: ["criar eventos", "atualizar eventos", "listar eventos", "deletar eventos"],
  },
  {
    icon: <ClipboardCheck />,
    title: "Google Tasks",
    items: ["criar tarefas", "listar tarefas", "concluir tarefas", "deletar tarefas"],
  },
  {
    icon: <WalletCards />,
    title: "Finanças",
    items: ["registrar transações", "consultar movimentações", "integrar planilhas"],
  },
  {
    icon: <BrainCircuit />,
    title: "IA",
    items: ["interpretar intenção", "decisão contextual", "múltiplos modelos", "resposta inteligente"],
  },
  {
    icon: <FileSpreadsheet />,
    title: "Multimodal",
    items: ["áudio", "imagem", "texto", "cálculos auxiliares"],
  },
  {
    icon: <Workflow />,
    title: "Automação",
    items: ["workflows n8n", "rotinas operacionais", "integrações externas", "logs"],
  },
]

const infrastructure = [
  { title: "Frontend", text: "React, Next.js e TypeScript" },
  { title: "Backend", text: "Node.js e APIs customizadas" },
  { title: "Banco", text: "PostgreSQL para usuários, histórico e regras" },
  { title: "Memória", text: "Redis para contexto temporário por sessão" },
  { title: "Automação", text: "n8n para workflows e agentes especializados" },
  { title: "Infra", text: "Docker, VPS e EasyPanel" },
]

const security = [
  "Identificação de usuário antes da orquestração principal",
  "Validação de acesso e controle de assinatura",
  "Histórico de interações para rastreabilidade operacional",
  "Logs por workflow e ações executadas",
  "Separação entre entrada, IA principal, módulos e integrações",
  "Controle de módulos sensíveis como finanças e agenda",
]

const challenges = [
  {
    title: "Orquestração de agentes",
    text: "Coordenar múltiplos módulos inteligentes exigiu fluxo dinâmico, decisões contextuais e separação clara entre intenção, execução e resposta.",
  },
  {
    title: "Memória contextual",
    text: "A continuidade da conversa precisava existir sem transformar o sistema em um estado rígido. RedisChatMemory resolveu contexto temporário por usuário.",
  },
  {
    title: "Arquitetura modular",
    text: "Cada domínio foi isolado como capacidade: agenda, tasks, finanças, multimodal e automações. Isso aumenta manutenção e escalabilidade.",
  },
  {
    title: "Integrações externas",
    text: "WhatsApp, Google APIs, planilhas, banco e IA precisavam operar como um ecossistema único, com falhas controladas e respostas compreensíveis.",
  },
]

const learnings = [
  "Um sistema de IA útil precisa de orquestração, memória e limites claros de ação.",
  "WhatsApp pode ser uma interface operacional poderosa quando conectado a módulos bem definidos.",
  "Memória contextual deve ser tratada como infraestrutura, não como detalhe de prompt.",
  "Automação empresarial exige rastreabilidade, logs e separação de responsabilidades desde o início.",
]

export default function JamesCase() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -90])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.38])

  return (
    <main className="james-case">
      <motion.div className="james-progress" style={{ scaleX: scrollYProgress }} />

      <section className="james-hero">
        <motion.div className="james-hero-glow" style={{ opacity: glowOpacity }} />
        <div className="james-grid-bg" />

        <nav className="james-nav">
          <Link href="/" className="james-logo">
            Victor Augustho
          </Link>
          <div>
            <a href="#fluxo">Fluxo</a>
            <a href="#arquitetura">Arquitetura</a>
            <a href="#memoria">Memória</a>
          </div>
        </nav>

        <div className="james-hero-inner">
          <motion.div
            className="james-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="james-eyebrow">
              <Sparkles size={16} />
              Case técnico | IA operacional | WhatsApp automation
            </span>
            <h1>JAMES</h1>
            <p className="james-tagline">
              Ecossistema inteligente operacional via WhatsApp com IA,
              automações, memória contextual, agenda, tarefas e finanças.
            </p>
            <div className="james-actions">
              <a href="#fluxo" className="james-primary">
                Ver fluxo inteligente <ArrowRight size={18} />
              </a>
              <a href="#arquitetura" className="james-secondary">
                Arquitetura técnica
              </a>
            </div>
          </motion.div>

          <motion.div
            className="james-console"
            style={{ y: heroY }}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="james-window-bar">
              <span />
              <span />
              <span />
              <strong>james.orchestrator / production-flow</strong>
            </div>
            <div className="james-console-body">
              <div className="james-message incoming">
                <small>WhatsApp</small>
                <p>James, agende reunião amanhã e me lembre das tarefas pendentes.</p>
              </div>
              <div className="james-agent-card">
                <div>
                  <BrainCircuit size={22} />
                  <strong>Intent Router</strong>
                </div>
                <span>calendar.create + tasks.list + memory.read</span>
              </div>
              <div className="james-message outgoing">
                <small>JAMES</small>
                <p>Evento criado. Também encontrei 3 tarefas pendentes para hoje.</p>
              </div>
              <div className="james-live-grid">
                <span>sessionKey</span>
                <span>Redis memory</span>
                <span>Google APIs</span>
                <span>n8n workflow</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="james-metrics">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08}>
              <article>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="james-section">
        <Reveal>
          <SectionLabel icon={<Bot />}>Visão geral</SectionLabel>
          <div className="james-two-col">
            <h2>WhatsApp como interface para um sistema operacional inteligente.</h2>
            <div className="james-copy-stack">
              <p>
                O JAMES transforma mensagens naturais em ações automatizadas. A
                camada conversacional deixa de ser apenas atendimento e passa a
                operar agenda, tarefas, finanças, memória e integrações.
              </p>
              <p>
                O sistema é dividido em workflows e agentes especializados,
                permitindo que a IA principal interprete intenções, acione
                módulos e responda com contexto operacional.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="james-section" id="fluxo">
        <Reveal>
          <SectionLabel icon={<GitBranch />}>Fluxo inteligente</SectionLabel>
          <div className="james-flow">
            {flow.map((node, index) => (
              <article key={node.title}>
                <div>{node.icon}</div>
                <strong>{node.title}</strong>
                <span>{node.detail}</span>
                {index < flow.length - 1 && <ChevronRight className="james-flow-arrow" />}
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="james-section" id="arquitetura">
        <Reveal>
          <SectionLabel icon={<Network />}>Arquitetura do sistema</SectionLabel>
          <div className="james-architecture">
            {architecture.map((item, index) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
              >
                <span>0{index + 1}</span>
                <div>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="james-section">
        <Reveal>
          <SectionLabel icon={<Layers3 />}>Módulos inteligentes</SectionLabel>
          <div className="james-modules">
            {modules.map((module) => (
              <article key={module.title}>
                <div className="james-module-head">
                  {module.icon}
                  <h3>{module.title}</h3>
                </div>
                <ul>
                  {module.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="james-section" id="memoria">
        <Reveal>
          <SectionLabel icon={<Database />}>Memória contextual</SectionLabel>
          <div className="james-memory-panel">
            <div>
              <h2>RedisChatMemory para continuidade operacional por usuário.</h2>
              <p>
                A memória usa sessionKey por usuário, persistência temporária e
                contexto de conversa para manter continuidade sem acoplar o
                sistema inteiro a um estado rígido.
              </p>
            </div>
            <div className="james-memory-stack">
              <span>user.id</span>
              <span>sessionKey</span>
              <span>context window</span>
              <span>module state</span>
              <span>intelligent response</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="james-section">
        <Reveal>
          <SectionLabel icon={<BrainCircuit />}>IA aplicada</SectionLabel>
          <div className="james-ai-grid">
            <article>
              <h3>Interpretação semântica</h3>
              <p>Mensagens naturais são interpretadas para extrair intenção, entidades e próximos passos.</p>
            </article>
            <article>
              <h3>Agentes especializados</h3>
              <p>A IA principal coordena módulos de agenda, tasks, finanças, multimodal e ferramentas auxiliares.</p>
            </article>
            <article>
              <h3>Decisão contextual</h3>
              <p>A memória e o histórico ajudam o sistema a manter continuidade entre múltiplas interações.</p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="james-section">
        <Reveal>
          <SectionLabel icon={<CloudCog />}>Infraestrutura</SectionLabel>
          <div className="james-infra">
            {infrastructure.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="james-section">
        <Reveal>
          <SectionLabel icon={<Fingerprint />}>Segurança e controle</SectionLabel>
          <div className="james-security">
            <div className="james-security-core">
              <LockKeyhole size={42} />
              <strong>Access Control</strong>
              <span>assinatura | usuário | logs</span>
            </div>
            <div>
              {security.map((item) => (
                <p key={item}>
                  <ShieldCheck size={17} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="james-section">
        <Reveal>
          <SectionLabel icon={<TerminalSquare />}>Desafios técnicos</SectionLabel>
          <div className="james-challenges">
            {challenges.map((challenge) => (
              <article key={challenge.title}>
                <h3>{challenge.title}</h3>
                <p>{challenge.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="james-section james-learning">
        <Reveal>
          <SectionLabel icon={<Activity />}>Aprendizados técnicos</SectionLabel>
          <div className="james-learning-list">
            {learnings.map((item) => (
              <article key={item}>
                <ReceiptText size={18} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="james-final">
        <Reveal>
          <span className="james-eyebrow">
            <Dock size={16} />
            Ecossistema IA, automação e operação
          </span>
          <h2>
            JAMES demonstra arquitetura de sistemas inteligentes aplicada a
            produtividade real, com módulos, memória e integrações escaláveis.
          </h2>
          <Link href="/" className="james-primary">
            Voltar ao portfólio <ArrowRight size={18} />
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
  children: ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
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
  children: ReactNode
  icon: ReactNode
}) {
  return (
    <div className="james-section-label">
      {icon}
      <span>{children}</span>
    </div>
  )
}
