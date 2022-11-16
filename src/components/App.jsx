import { FormLabel } from './Form/Form'; 
import { Filter } from './Filter/Filter';
import { FormContacts } from './Contacts/Contacts'; 
//import { nanoid } from "nanoid";
import { Container, Box, Title, SubTitle} from 'components/App.styled';
import { FcContacts } from 'react-icons/fc';
import { FcMultipleSmartphones } from 'react-icons/fc';

export const App = () => {
  
     
  //    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  //      ? Notify.info('Contacts is already in list-contacts')
       
  //      : setContacts([contact, ...contacts])
          
  //    console.log(setContacts)
  //  };

  
  return (
    <Box>
      <Container >
          
          <Title><FcContacts />
            Phonebook          
          </Title> 
          <FormLabel/>
          
          <SubTitle><FcMultipleSmartphones/>
            Contacts
          </SubTitle>
          <Filter />
          
         <FormContacts/>  
          
      </Container>
    </Box> 
   );
 }


