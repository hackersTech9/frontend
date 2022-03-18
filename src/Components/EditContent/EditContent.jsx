import React, { useEffect, useState, useContext } from 'react';
import { HELPER_FUNCTIONS } from "Helper/helper";
import { Stack } from '@chakra-ui/react'
import Global from 'Global';
import axios from 'axios';
import { MiniatureComponent } from './MiniatureComponent';
import { LoginContext } from 'Context/LoginContext';

export const EditContent = ({ sectionTitle, contentToEdit, closeModal }) => {

  const Login = useContext(LoginContext);
  const { updateUserInfo } = Login;
  const [dataToRender, setDataToRender] = useState(null);

  const getSectionList = async () => {
    const bearer = HELPER_FUNCTIONS.getToken();
    const config = { headers: { Authorization: bearer }};
    try{
      const response = await axios.get(Global.base + sectionTitle, config);

      setDataToRender(response.data.filter(content => content.name !== contentToEdit.name));
    } catch (error) {
      console.log(error);
    }
  };

  const editUserPreference = async (selectedContent) => {
    
    const bearer = HELPER_FUNCTIONS.getToken();
    const config = { headers: { Authorization: bearer }};
    let userPreference = HELPER_FUNCTIONS.getUserPreference(sectionTitle);

    
    const index = userPreference.findIndex(x => x.name === contentToEdit.name);
    userPreference[index] = selectedContent;

    const response = await axios.put(Global.base + 'users/' + sectionTitle, userPreference, config);
    updateUserInfo(response.data);
    closeModal();
  }

  useEffect(() => {
    getSectionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <Stack spacing='6' mb='15px'>
      {dataToRender &&
      dataToRender.map((v, i) => {
        return(<MiniatureComponent key={i} contentData={v} editUserPreference={editUserPreference}/>)
      })
      }
    </Stack>
  )
}