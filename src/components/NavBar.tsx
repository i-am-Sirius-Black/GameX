import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.svg'
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='15px' >
        <Image src={logo} boxSize='60px' />
        <ColorModeSwitch/>
    </HStack> 
  )
}

export default NavBar