import Container from "@/components/Container"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Brain
} from "lucide-react"


export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <Container>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Victor Augustho <br />
              <span className="text-blue-500">
                Desenvolvedor Web & Automação
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-slate-300">
              Desenvolvimento de sistemas, automações e soluções com Inteligência Artificial,
              focadas em performance, estratégia e resultados reais.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:victor.augustho@icloud.com"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
              >
                Entrar em contato
              </a>

              <a
                href="https://github.com/victoraugustho"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500 transition"
              >
                Ver GitHub
              </a>
            </div>
          <div className="py-2 mt-50 border-t border-slate-800">
              <div className="flex flex-wrap justify-start text-white gap-6 text-sm pt-6">
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Anápolis – GO
                </span>
                <a href="https://wa.me/5562993204235" className="flex items-center gap-2">
                  <Phone size={16} /> (62) 99320-4235
                </a>
                <a href="mailto:victor.augustho@icloud.com" className="flex items-center gap-2">
                  <Mail size={16} /> victor.augustho@icloud.com
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SOBRE */}
      <section className="py-24 border-t border-slate-800">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* FOTO */}
            <div className="flex justify-center md:justify-center">
              <div className="w-75 h-75 rounded-full overflow-hidden border-4 border-slate-800">
                <img
                  src="/foto-minha.jpeg"
                  alt="Victor Augustho"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXTO */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>

              <p className="text-slate-300 leading-relaxed mb-6">
                Sou desenvolvedor web com foco em Inteligência Artificial,
                automações e sistemas personalizados. Atuo desde 2018 criando
                soluções digitais que unem tecnologia, eficiência e visão de negócio.
              </p>

              <ul className="space-y-4 text-slate-300">

                <li className="flex items-center gap-3">
                  <GraduationCap className="text-blue-500" size={20} />
                  <span>
                    Bacharelado em Inteligência Artificial — <strong>UniFAMA (Cursando)</strong>
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Briefcase className="text-blue-500" size={20} />
                  <span>
                    Experiência com sistemas, dashboards, CRMs, landing pages e automações
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Brain className="text-blue-500" size={20} />
                  <span>
                    Perfil técnico e estratégico, com forte base em comunicação e negócios
                  </span>
                </li>

              </ul>
            </div>

          </div>
        </Container>
      </section>


      {/* O QUE EU FAÇO */}
      <section className="py-24 bg-slate-900">
        <Container>
          <h2 className="text-3xl font-bold mb-12">O que eu faço</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Desenvolvimento Web"
              items={[
                "Node.js, React e Next.js",
                "TypeScript",
                "Landing Pages de alta conversão",
                "WordPress + Elementor",
              ]}
            />

            <Card
              title="Automações & IA"
              items={[
                "Fluxos avançados com N8N",
                "Atendimento automatizado com IA",
                "Integração com APIs e bancos de dados",
              ]}
            />

            <Card
              title="Sistemas Personalizados"
              items={[
                "CRMs e dashboards",
                "Controle de usuários e permissões",
                "Soluções sob medida",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* PROJETOS */}
      <section className="py-24 border-t border-slate-800">
        <Container>
          <h2 className="text-3xl font-bold mb-12">Projetos & Experiência</h2>

          <div className="space-y-6">
            <Project
              title="Sistema de Teste de Temperamentos com IA"
              desc="Análise facial com inteligência artificial e entrega automatizada de resultados."
              link="https://gottardi.autonextech.com.br"
            />

            <Project
              title="Portal do Professor — BlueWorld9"
              desc="Website e sistema educacional completo para professores."
              link="https://bw9global.com"
            />

            <Project
              title="CRM para Clínica de Psicanálise"
              desc="Dashboard organizacional e informacional de clientes."
            />

            <Project
              title="Fluxos de Atendimento com IA"
              desc="Automação para redes sociais (2024–2025)."
            />
          </div>
        </Container>
      </section>

      {/* STACK */}
      <section className="py-24 bg-slate-900">
        <Container>
          <h2 className="text-3xl font-bold mb-12">Stack Técnica</h2>

          <ul className="grid md:grid-cols-3 gap-6 text-slate-300">
            <li>JavaScript / TypeScript</li>
            <li>Node.js</li>
            <li>React / Next.js</li>
            <li>PostgreSQL / MySQL</li>
            <li>Docker (básico)</li>
            <li>VPS & Deploy</li>
            <li>Git & Versionamento</li>
            <li>SEO & Copywriting</li>
            <li>Tráfego Pago</li>
          </ul>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 border-t border-slate-800">
        <Container>
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Vamos criar algo juntos?
            </h2>

            <p className="text-slate-300 max-w-xl mx-auto">
              Se você precisa de um desenvolvedor que entende tecnologia,
              automação, IA e negócio, estou pronto para ajudar.
            </p>

            <a
              href="mailto:victor.augustho@icloud.com"
              className="inline-block px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
            >
              Falar comigo agora
            </a>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Victor Augustho
      </footer>

    </main>
  )
}

/* COMPONENTES AUXILIARES */

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-950">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-slate-300">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}

function Project({
  title,
  desc,
  link,
}: {
  title: string
  desc: string
  link?: string
}) {
  return (
    <div className="p-6 rounded-xl border border-slate-800">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-slate-300 mt-2">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="inline-block mt-3 text-blue-500 hover:underline"
        >
          Visitar projeto →
        </a>
      )}
    </div>
  )
}
