import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ErrorScreen from "@/components/ErrorScreen";

export default function NotFound() {
  return (
    <>
      <Nav />
      <ErrorScreen
        stamp="Não localizado"
        eyebrow="Arquivos da Ordem · Registro Ausente"
        code="404"
        title="Este documento não foi encontrado."
        primary={{ type: "link", href: "/", label: "← Retornar ao vestíbulo" }}
        secondary={{ type: "link", href: "/agentes", label: "Consultar os Agentes" }}
      >
        A página que você procura foi extraviada, selada por ordem superior, ou nunca existiu nestes arquivos.
        Alguns segredos a Ordem guarda a sete chaves — este, ao que parece, nem ela registrou.
      </ErrorScreen>
      <Footer />
    </>
  );
}
