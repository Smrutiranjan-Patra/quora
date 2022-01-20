import {
  Container,
  Flex,
  HStack,
  Box,
  Text,
  VStack,
  Stack
} from "@chakra-ui/react";

import { HiOutlinePencil } from "react-icons/hi";

import "./styles.css";

import { Heading, Divider } from "@chakra-ui/react";

import { QaCard } from "../components/QAcard";
import Header from "../components/header";
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
          <QaCard />
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
