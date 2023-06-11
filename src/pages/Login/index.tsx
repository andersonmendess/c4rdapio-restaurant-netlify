import {
  Flex,
  Image,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
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
          <Text variant="title">Olá! Seja bem vindo!</Text>
          <Text variant="span">
            Informe os seus dados de acesso para continuar.
          </Text>
          <Flex h="30px" />
          <FormLabel>E-mail</FormLabel>
          <Input type="email" />
          <Flex h="10px" />
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
          <Flex h="20px" />
          <Button mt={4} colorScheme="red" w="full" alignSelf="center">
            Entrar
          </Button>

          <Button
            mt={4}
            colorScheme="red"
            w="full"
            alignSelf="center"
            variant="outline"
            onClick={() => navigate("/cadastro")}
          >
            Cadastrar-se grátis
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
