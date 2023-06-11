import {
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth_context";
import { useContext, useState } from "react";
import { SignupDto } from "../../dtos/auth/signup_dto";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");

  const authContext = useContext(AuthContext);
  const toast = useToast();

  const navigate = useNavigate();

  const submit = async () => {
    try {
      const params: SignupDto = {
        email,
        password,
        name,
        cnpj: document,
      };
      await authContext?.signup(params);
      toast({
        title: "Sucesso!",
        description: "Cadastro realizado com sucesso.",
        status: "success",
      });
      navigate("/");
    } catch (e) {
      toast({
        title: "Erro!",
        description: "Houve um erro ao realizar o cadastro." + e,
        status: "error",
      });
    }
  };

  return (
    <Flex direction="row" h="100vh">
      <Flex
        minW="450px"
        w="30vw"
        direction="column"
        justify="center"
        align="center"
        p="20"
      >
        <FormControl>
          <Text variant="title">Cadastre-se grátis.</Text>
          <Text variant="span">
            Em poucos instantes você acessará sua dashboard
          </Text>
          <Flex h="30px" />
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Flex h="10px" />
          <FormLabel>Nome</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Flex h="10px" />
          <FormLabel>CPF/CNPJ</FormLabel>
          <Input
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
          <Flex h="10px" />
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Flex h="20px" />
          <Button
            mt={4}
            colorScheme="red"
            w="full"
            alignSelf="center"
            onClick={() => submit()}
          >
            Cadastrar
          </Button>

          <Button
            mt={4}
            colorScheme="red"
            w="full"
            alignSelf="center"
            variant="outline"
            onClick={() => navigate("/")}
          >
            Voltar
          </Button>
          <Flex h="20px" />
          <Text variant="span" align="center" cursor="pointer">
            Esqueceu a sua senha? Recuperar agora.
          </Text>
        </FormControl>
      </Flex>
      <Flex w="70vw">
        <Image
          src="https://img.freepik.com/fotos-gratis/emocoes-positivas-close-up-de-jovem-bonito-homem-de-pele-escura-com-penteado-afro-em-camiseta-branca-e-camisa-vermelha-sorrindo-com-dentes-conversando-com-um-amigo-no-smartphone_176420-13009.jpg?w=1380&t=st=1686441311~exp=1686441911~hmac=6a806978ec2be0f79af8e6da27091ca5f802f1a74a7bd14074375a7c1589f1e0"
          alt="Dan Abramov"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Flex>
    </Flex>
  );
}
