import { fetchContacts } from 'redux/operations';
import { FormLabel } from './Form/Form'; 
import { Filter } from './Filter/Filter';
import { FormContacts } from './Contacts/Contacts'; 
//import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Container, Box, Title, SubTitle} from 'components/App.styled';
import { FcContacts } from 'react-icons/fc';
import { FcMultipleSmartphones } from 'react-icons/fc';
import { selectError, selectIsLoading } from 'redux/selectors';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])
     
  //    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  //      ? Notify.info('Contacts is already in list-contacts')
       
  //      : setContacts([contact, ...contacts])
          
  //    console.log(setContacts)
  //  ;

  
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
         {isLoading && !error && <b>Request in progress...</b>} 
      </Container>
    </Box> 
   );
 }


