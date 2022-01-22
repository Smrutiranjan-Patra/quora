import {
  Container,
  Flex,
  HStack,
  Box,
  Text,
  VStack,
  StackDivider,
  CloseButton,
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
import { AnswerModal } from "./AnswerModal";
import { Link } from "react-router-dom";

export const QaCard = ({ prop }) => {
  // console.log(prop);
  return (
    <>
      <Box h="104px" w="full" bg="white" p="20px">
        <Box justifyContent="space-between">
          <HStack justifyContent="space-between" p="0" m="0">
            <Heading p="0" m="0" as="h3">
              {prop.question}
            </Heading>
            <CloseButton border="none" bgColor="white" />
          </HStack>
          <HStack p="0" m="0">
            <Text>
              <Link to={`/answers/${prop.id}`}>Answers:{prop.answers}</Link> Not
              followed
            </Text>
          </HStack>
          <HStack justifyContent="space-between" p="0" m="0">
            <HStack spacing={30}>
              <HStack>
                <FaEdit className="icons" />
                <AnswerModal />
                {/* <p>Answer</p> */}
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
    </>
  );
};
