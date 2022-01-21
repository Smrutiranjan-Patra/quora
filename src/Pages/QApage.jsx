import {
  Container,
  Flex,
  HStack,
  Box,
  Text,
  VStack,
  Stack,
  StackDivider
} from "@chakra-ui/react";

import { HiOutlinePencil } from "react-icons/hi";

import "./styles.css";

import { Heading, Divider } from "@chakra-ui/react";

import { QaCard } from "../components/QAcard";
import Header from "../components/header";

let data = [
  {
    question: "whata is the new of this",
    answers: 1,
    id: 1,
    lastFollowed: "1y back"
  },
  {
    question: "whata is the question of this",
    answers: 12,
    id: 2,
    lastFollowed: "2y back"
  }
];

export const QApage = () => {
  return (
    <>
      <Header />
      <Container
        // bgColor="tomato"
        h="100vh"
        w="74%"
        // justifyContent="space-between"
        m="auto"
      >
        <Flex justifyContent="baseAlign">
          <Box
            w="200px"
            // bgColor="black"
            h="400px"
            // alignItems="flex-start"
          >
            <Heading
              as="h3"
              p="2"
              mb="7"
              size="xl"
              justifyContent="center"
              textAlign="left"
            >
              Questions
            </Heading>
            <Box className="my-box" p="5">
              Questions for you
            </Box>
            <Box p="5" className="my-box">
              Answer requests
            </Box>
            <Divider borderWidth="2px" bgColor="black" />
          </Box>
          <Box w="550px" p="10" mt="10" h="100vh">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              {data.map((e, index) => {
                console.log(e, index);
                return <QaCard key={index} prop={e} />;
              })}
            </VStack>
          </Box>
          <Box w="25%" p="10" mt="10" mr="0" h="400px">
            <VStack
              p="10"
              justifyContent="left"
              textAlign="left"
              alignItems="left"
            >
              <HStack spacing={4} justifyContent="space-between">
                <Heading as="h3">Topics you know about</Heading>
                <HiOutlinePencil
                  className="icons"
                  borderRadius="50%"
                  bgColor="black"
                />
              </HStack>
              <Stack
                h="300px"
                bgColor="white"
                textAlign="center"
                alignItems="center"
                justifyContent="center"
              >
                <Text>No topics yet</Text>
              </Stack>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </>
  );
};
