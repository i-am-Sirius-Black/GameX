import { HStack, Image, Link} from "@chakra-ui/react"
import logo from '../assets/logo.svg'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


interface Props{
  onSearch: (searchText: string) => void;
}

function NavBar({onSearch}:Props) {
  return (
    <HStack padding='15px' >
      <Link href='/'>
        <Image src={logo} boxSize='60px' />
        </Link>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack> 
  )
}

export default NavBar