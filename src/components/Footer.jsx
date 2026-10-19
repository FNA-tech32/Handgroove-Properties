import { Text, Center, VStack, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Center mt='8' py='8' px='4' bg='pink.700' color='white'>
      <VStack spacing='1' textAlign='center'>
        <Text fontWeight='semibold'>Handgroove Properties</Text>
        <Text fontSize='14px'>184 Grove Street, Suite 300, San Francisco, CA 94102</Text>
        <Text fontSize='14px'>
          <Link href='tel:+14152048830' color='white'>+1 (415) 204-8830</Link>
          {' · '}
          <Link href='mailto:hello@handgrooveproperties.com' color='white'>hello@handgrooveproperties.com</Link>
        </Text>
        <Text fontSize='13px' pt='2'>Copyright &copy; 2026 Handgroove Properties. All rights reserved.</Text>
      </VStack>
    </Center>
  )
}

export default Footer
