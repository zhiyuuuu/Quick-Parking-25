import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Center,
  ButtonGroup,
  ChakraProvider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function ParkingEnterModal({
  isOpen,
  onClose,
  initialRef,
  finalRef,
  endModalOpen,
  setEndModelOpen,
}) {
  return (
    <ChakraProvider>
      {endModalOpen ? <ParkingEndModal isEndOpen={endModalOpen} /> : <></>}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={'xs'}
        rounded={50}
      >
        <ModalOverlay bg={'blackAlpha.900'} />
        <ModalContent bg={'#FBFBF9'} color={'#9E896A'}>
          <ModalCloseButton />
          <ModalBody
            pb={6}
            paddingTop={'6vh'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Center>
              <Image
                borderRadius="10px"
                boxSize="150px"
                src={'https://img.icons8.com/isometric/512/1FB141/car.png'}
                alt={'car'}
              />
            </Center>

            <ModalHeader textAlign={'center'} color={'#9E896A'}>
              我要停車
            </ModalHeader>
            <FormControl>
              <FormLabel color={'black'}>請輸入車牌號碼</FormLabel>
              <Input
                ref={initialRef}
                placeholder="車號"
                borderColor={'#9E896A'}
                color={'gray.200'}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={'center'} paddingBottom={'4vh'}>
            <ButtonGroup
              background="#E8F0D7"
              paddingLeft={1}
              paddingRight={1}
              paddingTop={1}
              paddingBottom={1}
              rounded={40}
            >
              <Button
                w="8vw"
                variant="ghost"
                color="#779341"
                rounded={30}
                onClick={onClose}
              >
                取消
              </Button>
              <Button
                w="8vw"
                variant="solid"
                bg="#779341"
                color="#FFFFFF"
                rounded={30}
                onClick={setEndModelOpen}
              >
                確認
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

function ParkingEndModal({ isEndOpen }) {
  let navigate = useNavigate();
  const navigateToHome = () => {
    let path = `/home`;
    navigate(path);
  };


  return (
    <ChakraProvider>
      <Modal
        isOpen={isEndOpen}
        // onClose={onEndClose}
        isCentered
        size={'xs'}
        rounded={50}
      >
        <ModalOverlay bg={'blackAlpha.900'} />
        <ModalContent bg={'#FBFBF9'} color={'#9E896A'}>
          {/* <ModalCloseButton /> */}
          <ModalBody
            pb={6}
            paddingTop={'6vh'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Center>
              <Image
                borderRadius="10px"
                boxSize="150px"
                src={'https://img.icons8.com/isometric/512/1FB141/ok.png'}
                alt={'ok'}
              />
            </Center>
            <ModalHeader textAlign={'center'}>您已完成停車</ModalHeader>
          </ModalBody>

          <ModalFooter justifyContent={'center'} paddingBottom={'4vh'}>
            <ButtonGroup
              background="#E8F0D7"
              paddingLeft={1}
              paddingRight={1}
              paddingTop={1}
              paddingBottom={1}
              rounded={40}
            >
              <Button
                w="8vw"
                variant="ghost"
                color="#779341"
                rounded={30}
                onClick={navigateToHome}
              >
                回首頁
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default ParkingEnterModal;