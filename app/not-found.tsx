import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-luxus-paper px-6 text-center">
      <Logo />
      <h1 className="headline mt-10 text-4xl">Página não encontrada.</h1>
      <p className="mt-4 text-luxus-muted">
        O caminho que você tentou não existe.
      </p>
      <Button href="/" className="mt-8">
        Voltar à Luxus
      </Button>
    </main>
  );
}
