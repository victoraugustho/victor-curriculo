import Container from "@/components/Container"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Brain,
  Linkedin,
  ArrowUpRight,
  Code2,
  Database,
  Workflow,
  Blocks,
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <Container>
          <div className="grid lg:grid-cols-[1.3fr_.7fr] gap-12 items-center py-20">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
                Desenvolvedor Full Stack • Sistemas • Automações • Integrações
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Victor Augustho
                  <br />
                  <span className="text-blue-500">
                    Desenvolvedor Full Stack
                  </span>
                </h1>

                <p className="max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
                  Desenvolvo sistemas web, automações e integrações com foco em
                  regras de negócio, performance e soluções reais. Atuo com
                  Next.js, TypeScript, PostgreSQL, APIs, IA aplicada e fluxos
                  automatizados.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:victor.agustho@icloud.com"
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
                >
                  Entrar em contato
                </a>

                <a
                  href="https://github.com/victoraugustho"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500 transition flex items-center gap-2"
                >
                  <Github size={18} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/victor-augustho-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500 transition flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} /> Anápolis – GO
                  </span>

                  <a
                    href="https://wa.me/5562993204235"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <Phone size={16} /> (62) 99320-4235
                  </a>

                  <a
                    href="mailto:victor.agustho@icloud.com"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <Mail size={16} /> victor.agustho@icloud.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <StatCard title="Foco atual" value="Full Stack" />
                <StatCard title="Especialidade" value="Automações" />
                <StatCard title="Banco" value="PostgreSQL" />
                <StatCard title="Stack" value="Next.js + TS" />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="font-semibold text-lg mb-4">Tecnologias-chave</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "n8n",
                    "APIs REST",
                    "IA aplicada",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SOBRE */}
      <section className="py-24 border-t border-slate-800">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
                <img
                  src="/foto-minha.jpeg"
                  alt="Victor Augustho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>

              <div className="space-y-5 text-slate-300 leading-relaxed">
                <p>
                  Sou desenvolvedor de software com trajetória autodidata,
                  atuando desde cedo com criação de sites, sistemas web,
                  automações e integrações. Ao longo do tempo, evoluí de
                  projetos web e digitais para soluções mais completas com banco
                  de dados, autenticação, níveis de acesso, APIs e fluxos
                  operacionais.
                </p>

                <p>
                  Hoje meu foco está em desenvolvimento full stack, automações e
                  sistemas personalizados, especialmente em projetos que exigem
                  visão prática, implementação ponta a ponta e conexão entre
                  tecnologia e operação real.
                </p>
              </div>

              <ul className="space-y-4 text-slate-300 mt-8">
                <li className="flex items-center gap-3">
                  <GraduationCap className="text-blue-500" size={20} />
                  <span>
                    Bacharelado em Inteligência Artificial —{" "}
                    <strong>UniFAMA (Cursando)</strong>
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Briefcase className="text-blue-500" size={20} />
                  <span>
                    Experiência prática com portais, CRMs, integrações,
                    automações, sistemas com permissões e regras de negócio
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Brain className="text-blue-500" size={20} />
                  <span>
                    Perfil técnico, prático e orientado à entrega, com boa
                    comunicação e visão de produto
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ESPECIALIDADES */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold mb-12">Especialidades</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<Code2 className="text-blue-500" size={22} />}
              title="Desenvolvimento Web"
              items={[
                "Next.js, React e Node.js",
                "TypeScript e JavaScript",
                "Sistemas com autenticação e permissões",
                "Interfaces modernas e funcionais",
              ]}
            />

            <Card
              icon={<Workflow className="text-blue-500" size={22} />}
              title="Automações & Integrações"
              items={[
                "Fluxos com n8n",
                "Integração com APIs e serviços externos",
                "Mensageria, pagamentos e banco de dados",
                "Automação de processos operacionais",
              ]}
            />

            <Card
              icon={<Database className="text-blue-500" size={22} />}
              title="Sistemas Personalizados"
              items={[
                "CRMs e dashboards",
                "Portais administrativos",
                "Regras de negócio e multiusuário",
                "Modelagem com PostgreSQL",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* EXPERIÊNCIAS / PROJETOS */}
      <section className="py-24 border-t border-slate-800">
        <Container>
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <div>
              <h2 className="text-3xl font-bold">Experiências & Projetos</h2>
              <p className="text-slate-400 mt-2 max-w-2xl">
                Projetos e experiências que representam melhor minha atuação com
                desenvolvimento, automações e construção de sistemas reais.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <ExperienceCard
              title="Desenvolvedor Full Stack — BlueWorld 9"
              period="2025 — Atual"
              desc="Desenvolvimento de portal educacional com múltiplos níveis de acesso, gestão de notas, turmas, presença, organização de professores e notificações. Também atuo com aulas semanais de tecnologia para turmas do 6º ao 9º ano."
              tags={[
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Portal Educacional",
                "Perfis de Acesso",
              ]}
              link="https://bw9global.com"
            />

            <ExperienceCard
              title="Sistema de Teste de Temperamentos com IA"
              period="2025"
              desc="Solução com coleta de respostas, processamento automatizado, regras de acesso, checkout integrado e uso de IA aplicada para geração de resultados e relatórios."
              tags={[
                "IA aplicada",
                "Asaas",
                "Automação",
                "Sistema Web",
                "Fluxo de Pagamento",
              ]}
              link="https://gottardi.autonextech.com.br"
            />

            <ExperienceCard
              title="JAMES — Assistente com automações e integrações"
              period="2024 — 2025"
              desc="Projeto de automação com integração entre mensageria, banco de dados, agenda, planilhas, IA e execução de fluxos operacionais com foco em produtividade e centralização."
              tags={[
                "n8n",
                "PostgreSQL",
                "WhatsApp",
                "APIs",
                "IA",
              ]}
            />

            <ExperienceCard
              title="CRM e Sistemas Administrativos"
              period="2025"
              desc="Desenvolvimento de painéis administrativos, CRMs e sistemas internos com autenticação, permissões, persistência de dados e estrutura voltada à operação real."
              tags={[
                "CRM",
                "Dashboard",
                "Autenticação",
                "Permissões",
                "PostgreSQL",
              ]}
            />

            <ExperienceCard
              title="Projetos Web e Estruturas Digitais"
              period="2018 — 2024"
              desc="Criação de sites, landing pages, páginas de conversão e projetos web voltados à presença digital, operação online e estruturação de ativos digitais."
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "WordPress",
                "Elementor",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* STACK */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold mb-12">Stack Técnica</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "TypeScript",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "MySQL",
              "n8n",
              "REST APIs",
              "Git & GitHub",
              "VPS & Deploy",
              "WordPress",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTATO */}
      <section className="py-24 border-t border-slate-800">
        <Container>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Vamos conversar?
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Estou aberto a oportunidades em desenvolvimento full stack,
              backend, automações e integrações. Se fizer sentido para sua
              empresa ou projeto, será um prazer conversar.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:victor.agustho@icloud.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
              >
                <Mail size={18} />
                Enviar e-mail
              </a>

              <a
                href="https://www.linkedin.com/in/victor-augustho-dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-slate-700 hover:border-blue-500 transition font-semibold"
              >
                <Linkedin size={18} />
                Ver LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} Victor Augustho — Desenvolvedor Full Stack
      </footer>
    </main>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="mt-1 text-lg font-semibold text-slate-100">{value}</div>
    </div>
  )
}

function Card({
  title,
  items,
  icon,
}: {
  title: string
  items: string[]
  icon?: React.ReactNode
}) {
  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ul className="space-y-2 text-slate-300">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}

function ExperienceCard({
  title,
  period,
  desc,
  tags,
  link,
}: {
  title: string
  period: string
  desc: string
  tags: string[]
  link?: string
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-blue-400 mt-1">{period}</p>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            Ver projeto <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      <p className="text-slate-300 mt-4 leading-relaxed">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}