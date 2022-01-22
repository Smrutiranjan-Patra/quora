import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  HStack,
  Box,
  Text,
  Avatar,
  WrapItem,
  Button,
  Textarea
} from "@chakra-ui/react";
import { FaBold, FaItalic, FaList, FaListOl } from "react-icons/fa";
import { AiOutlineGif, AiOutlineLink } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { useDisclosure } from "@chakra-ui/react";
import "../Pages/styles.css";

export function AnswerModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bgColor="white"
        border="none"
        cursor="pointer"
        fontSize="16px"
        alignItems="center"
        p="0"
        m="0"
      >
        Answer
      </Button>

      <Modal zIndex="20" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bgColor="gray" />
        <ModalContent
          w="500px"
          bgColor="white"
          margin="auto"
          p="10"
          justifyContent="center"
        >
          <HStack justifyContent="space-between">
            <p>
              {" "}
              <ModalHeader>Type Your Answer</ModalHeader>
            </p>
            <ModalCloseButton
              w="30px"
              bgColor="white"
              border="0"
              cursor="pointer"
            />
          </HStack>
          <ModalBody>
            <HStack>
              <WrapItem>
                <Avatar
                  borderRadius="50%"
                  h="50px"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </WrapItem>

              <VStack>
                <Text>Nilesh Kumar</Text>
                {/* <Text color="gray">{"   "}Edit Credentials</Text> */}
              </VStack>
            </HStack>
            <Box>
              <HStack justifyContent="space-between" p="10">
                <HStack spacing={10}>
                  <FaBold className="icons" />
                  <FaItalic className="icons" />
                  <FaListOl className="icons" />
                  <FaList className="icons" />
                </HStack>
                <HStack spacing={10}>
                  <AiOutlineGif className="icons2" />
                  <GrGallery className="icons2" />
                  <AiOutlineLink className="icons2" />
                  <BsThreeDots className="icons2" />
                </HStack>
              </HStack>
              <Textarea
                placeholder="Here is a sample placeholder"
                w="94%"
                h="100px"
                p="8"
                fontSize="19"
              />
              <HStack justifyContent="space-between">
                <HStack>
                  <Button
                    bgColor="#548CFF"
                    color="white"
                    borderRadius="40%"
                    p="2"
                    h="40px"
                    w="90px"
                    border="none"
                  >
                    Post
                  </Button>
                  <Button
                    bgColor="gray"
                    color="white"
                    borderRadius="40%"
                    p="2"
                    h="40px"
                    w="90px"
                    border="none"
                  >
                    Save Draft
                  </Button>
                </HStack>
                <BsThreeDots className="icons" />
              </HStack>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
