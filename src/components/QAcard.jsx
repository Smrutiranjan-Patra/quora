import {
  Container,
  Flex,
  HStack,
  Box,
  Text,
  VStack,
  StackDivider,
  CloseButton,
  Link,
  Stack
} from "@chakra-ui/react";
import { FaRss, FaEdit } from "react-icons/fa";
import { MdEditOff } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { TiArrowDownOutline, TiArrowForwardOutline } from "react-icons/ti";
import { HiOutlinePencil } from "react-icons/hi";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import "../Pages/styles.css";
// import { Box } from "@mui/system";
import { Heading, Divider } from "@chakra-ui/react";

export const QaCard = () => {
  return (
    <>
      <Box w="550px" p="10" mt="10" h="100vh">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Box h="104px" w="full" bg="white" p="20px">
            <Box justifyContent="space-between">
              <HStack justifyContent="space-between" p="0" m="0">
                <Heading p="0" m="0" as="h3">
                  Question
                </Heading>
                <CloseButton border="none" bgColor="white" />
              </HStack>
              <HStack p="0" m="0">
                <Text>
                  <Link color="red">No aswers yet</Link> Not followed
                </Text>
              </HStack>
              <HStack justifyContent="space-between" p="0" m="0">
                <HStack spacing={30}>
                  <HStack>
                    <FaEdit className="icons" />
                    <p>Answer</p>
                  </HStack>
                  <HStack>
                    <FaRss className="icons" />
                    <p>Follow</p>
                  </HStack>
                  <HStack>
                    <MdEditOff className="icons" />
                    <p>Pass</p>
                  </HStack>
                </HStack>
                <HStack>
                  <TiArrowDownOutline className="icons2" />
                  <TiArrowForwardOutline className="icons2" />
                  <BsThreeDots className="icons2" />
                </HStack>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};
