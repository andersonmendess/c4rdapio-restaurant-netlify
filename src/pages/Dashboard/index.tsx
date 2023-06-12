import { Button, Flex, Text, Box } from "@chakra-ui/react";
import useUser from "../../hooks/useAuthToken";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth_context";

const Dashboard: React.FC = () => {
  const currentUser = useUser();
  const authContext = useContext(AuthContext);

  return (
    <Box>
      <Flex direction="column">
        <Flex
          height={"55px"}
          w={"100%"}
          background={"red.500"}
          p={"15px"}
          align={"center"}
        >
          <Flex
            w={"1440px"}
            margin={"0 auto"}
            background={"red.500"}
            justify={"space-between"}
            align={"center"}
          >
            <Text fontWeight={500} color={"white"} fontSize={"20px"}>
              {currentUser?.restaurant.name}
            </Text>

            <Button
              onClick={() => {
                authContext?.signOut();
              }}
            >
              Sair
            </Button>
          </Flex>
        </Flex>

        <Box p={"10px"} maxW={"1440px"} margin={"0 auto"}>
          <Text>
            Olá {currentUser?.name}, seja bem-vindo a dashboard do C4rdapio
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
