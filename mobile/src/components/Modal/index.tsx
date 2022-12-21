import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Modal as ModalContainer, TouchableOpacity, Platform } from 'react-native'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import { Overlay, ModalBody, ModalHeader, Form, Input} from './styles'


interface Props {
  visible?: boolean
  onClose: VoidFunction
  onSave: (table: string) => void
}


export function Modal({ visible=false, onClose, onSave }: Props) {
  const [inputText, setInputText] = useState<string>('')

  function handleSave() {
    setInputText('')
    onSave(inputText)
    onClose()
  }

  return (
    <ModalContainer
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={onClose}
    >
      <StatusBar animated style="light" backgroundColor="rgba(0, 0, 0, 0.6)" />
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </ModalHeader>

          <Form>
            <Input
              placeholder='Informe o Numero da mesa'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={setInputText}
            />
            <Button disabled={inputText.length === 0} onPress={handleSave} title='Salvar'/>
          </Form>
        </ModalBody>
      </Overlay>

    </ModalContainer>
  )
}