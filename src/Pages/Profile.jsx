import React from 'react'
import './Profile.css'
import {ImCalendar} from 'react-icons/im'
import {ImLocation2} from "react-icons/im";
import { FcGraduationCap  } from "react-icons/fc";
import { MdCardTravel } from "react-icons/md";
import { Heading } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, HStack , TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import {FiEdit2} from 'react-icons/fi'
import Header from '../components/header';
const Profile = () =>{
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
return(
 <>
 <Header/>
 <ChakraProvider>
 
   <div className='border'>
   
   
    <div className='box1'>
    <div className="box0">
        <div>
             <div className='pic'>
             <Avatar size='2xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
             </div>
         </div>
  
    </div>
    <div className="bigbox">
    <div className="profilename">
         <Heading as='h2' size='xl'>
          Nilesh Kumar
         </Heading>
         
    </div>
    <div className="sidebox">
    <div className='left'>
    <button onClick={onOpen}><FiEdit2/></button>
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div>
              <h1>First name</h1>
              <input ref={initialRef} placeholder='First name' />
            </div>

            
          </ModalBody>

          <ModalFooter>
            <button colorScheme='blue' mr={3}>
              Save
            </button>
            <button onClick={onClose}>Cancel</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    <h1>Credentials & Highlights</h1>
    <hr/>
    <div className='bag'><HStack><MdCardTravel/><p>Works at Masai</p></HStack></div>
    <div><HStack><FcGraduationCap/><p>Student at MASAI</p></HStack></div>
  
    <div><HStack><ImLocation2/><p>Lives in Delhi,India</p></HStack></div>
    <div><HStack><ImCalendar/><p>Joined in Nov 2019</p></HStack></div>
    </div>
    </div>
    <div className="para">
          <p>18 followers  20 following</p>
    </div>
    
   
    </div>
   
    <div className="box2">
    
    <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Profile</Tab>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Answers</Tab>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Questions</Tab>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Posts</Tab>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Followers</Tab>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Following</Tab>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Edits</Tab>
    <Tab _selected={{ color: 'red', bg: 'white' }}>Activity</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <div >Profile</div>
      </TabPanel>
      
    <hr/>
    <TabPanel>
      <p>Lorem ipsum</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    
    </div>
    <div className="knows">
    <div className='left'>
    <button onClick={onOpen}><FiEdit2/></button>
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Topics you know about</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div>
              <h1>Topics are how Quora knows what questions to send your way.Be as comprehensive and specific as possible to get the most relevant</h1>
              <input ref={initialRef} placeholder='Topics you know about' />
            </div>

            
          </ModalBody>

          <ModalFooter>
            <button colorScheme='blue' mr={3}>
              Save
            </button>
            <button onClick={onClose}>Cancel</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    <h1>Knows About</h1>
    <hr/>
    
    </div>
   
   
   </div>
   </ChakraProvider>
 </> 
 );
}
export default Profile;