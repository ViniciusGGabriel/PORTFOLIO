import emailjs from "@emailjs/browser";

type eventProp = {
  preventDefault(): void;
};

type emailProps = {
  name: string;
  email: string;
  mensagem: string;
};

export default async function EnviarEmail(
  { name, email, mensagem }: emailProps,
  event: eventProp
) {
  event.preventDefault();

  try {
    if (name === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos necessários");
      return false;
    }

    const templatesParams = {
      to_name: name,
      message: mensagem,
      email: email,
    };

    await emailjs.send(
      "service_qbg0iql",
      "template_ptiynwz",
      templatesParams,
      "EI7-BnDf-SzmLRKkX"
    );

    console.log("Email enviado com sucesso");
    return true;
  } catch (error) {
    console.error("Erro ao enviar email", error);
    alert(
      "Houve um erro ao enviar o email. Por favor, tente novamente mais tarde."
    );
    return false;
  }
}
