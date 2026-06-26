"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ErrorScreen from "@/components/ErrorScreen";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Nav />
      <ErrorScreen
        stamp="Falha de transcrição"
        eyebrow="Arquivos da Ordem · Incidente"
        code="⚠"
        title="Algo se rompeu nestas páginas."
        primary={{ type: "button", label: "Tentar novamente", onClick: reset }}
        secondary={{ type: "link", href: "/", label: "← Retornar ao vestíbulo" }}
      >
        Um erro inesperado interrompeu a leitura deste registro. Os arquivistas já foram avisados — tente recompor
        o documento, ou retorne ao vestíbulo principal.
      </ErrorScreen>
      <Footer />
    </>
  );
}
