import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./textarea";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import EnviarEmail from "../utils/enviar-email";
import { Button } from "./button";

type eventProps = {
  preventDefault(): void;
};

const FormEmail = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [successful, setSuccessful] = useState(false);

  const handleEnviarEmail = async (event: eventProps) => {
    try {
      event.preventDefault();
      const enviadoComSucesso = await EnviarEmail(
        { name: nome, email: email, mensagem: mensagem },
        event
      );

      if (enviadoComSucesso) {
        setSuccessful(true);
      } else {
        setSuccessful(false);
      }
    } catch (error) {
      console.error("Ouve um erro ao enviar a mensagem");
    }
  };

  return (
    <Card className="md:w-11/12 border-none">
      <CardHeader>
        <CardTitle>Preencha para enviar um E-mail</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <form onSubmit={handleEnviarEmail}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nome">Nome</Label>
              <Input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                maxLength={60}
                onChange={(event) => setNome(event.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email@..."
                maxLength={60}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                placeholder="Mensagem..."
                className="resize-none md:w-96 md:h-48 h-24"
                maxLength={450}
                onChange={(event) => setMensagem(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around pt-3 gap-3">
            <button
              type="submit"
              className=" inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 px-3 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              Enviar
            </button>
            <button
              type="reset"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 px-3 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              Cancelar
            </button>
          </div>
        </form>
        {successful ? (
          <Alert className="fixed bg-transparent backdrop-blur-xl w-screen h-screen left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]">
            <div className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]">
              <AlertTitle>Email enviado ✅</AlertTitle>
              <AlertDescription className="flex items-center gap-3">
                <span>
                  Assim que possível responderei o seu email, desde já agradeço
                  😊.
                </span>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() => {
                    setSuccessful(false);
                  }}
                >
                  Fechar
                </Button>
              </AlertDescription>
            </div>
          </Alert>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
};

export default FormEmail;
