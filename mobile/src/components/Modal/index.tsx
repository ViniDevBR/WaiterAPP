import React from 'react'
import { Modal as ModalContainer, TouchableOpacity, Platform } from 'react-native'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import { Overlay, ModalBody, ModalHeader, Form, Input} from './styles'

export function Modal() {
  return (
    <ModalContainer
      transparent
    >
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity>
              <Close color='#666'/>
            </TouchableOpacity>
          </ModalHeader>

          <Form>
            <Input
              placeholder='Informe o Numero da mesa'
              placeholderTextColor='#666'
              keyboardType='number-pad'
            />
            <Button onPress={() => []} title='Salvar'/>
          </Form>
        </ModalBody>
      </Overlay>

    </ModalContainer>
  )
}