import type { Metadata } from "next"
import JamesCase from "@/components/james/JamesCase"

export const metadata: Metadata = {
  title: "JAMES | Estudo de Caso",
  description:
    "Estudo de caso técnico do JAMES, ecossistema inteligente operacional via WhatsApp com IA, automações e memória contextual.",
}

export default function JamesPage() {
  return <JamesCase />
}
