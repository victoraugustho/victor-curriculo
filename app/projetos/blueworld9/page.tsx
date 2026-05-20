import type { Metadata } from "next"
import BlueWorld9Case from "@/components/blueworld9/BlueWorld9Case"

export const metadata: Metadata = {
  title: "BlueWorld9 | Estudo de Caso",
  description:
    "Estudo de caso premium da plataforma educacional corporativa BlueWorld9.",
}

export default function BlueWorld9Page() {
  return <BlueWorld9Case />
}
