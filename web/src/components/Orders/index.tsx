import { OrderProps } from '../../@types/Order'
import { OrdersBoard } from '../Board'
import { Container } from './styles'


const orders: Array<OrderProps> = [
  {
    '_id': '6399da8ba0a17cea04ed88af',
    'table': '123',
    'status': 'Production',
    'products': [
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1671025455262-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6399da8ba0a17cea04ed88b0'
      },
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '1671026139271-quatro-queijos.png',
          'price': 60,
        },
        'quantity': 1,
        '_id': '6399da8ba0a17cea04ed88b1'
      }
    ],
  },
  {
    '_id': '6399dae8cb0688d87576d872',
    'table': '100',
    'status': 'Waiting',
    'products': [
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1671025455262-coca-cola.png',
          'price': 7,
        },
        'quantity': 10,
        '_id': '6399dae8cb0688d87576d873'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1671025455262-coca-cola.png',
          'price': 7,
        },
        'quantity': 10,
        '_id': '6399dae8cb0688d87576d873'
      },
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '1671026139271-quatro-queijos.png',
          'price': 60,
        },
        'quantity': 5,
        '_id': '6399dae8cb0688d87576d874'
      }
    ],
  },
  {
    '_id': '6399db7a834a34e2f5abf7a7',
    'table': '150',
    'status': 'Waiting',
    'products': [
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1671025455262-coca-cola.png',
          'price': 7,
        },
        'quantity': 5,
        '_id': '6399db7a834a34e2f5abf7a8'
      },
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '1671026139271-quatro-queijos.png',
          'price': 60,
        },
        'quantity': 3,
        '_id': '6399db7a834a34e2f5abf7a9'
      }
    ],
  }
]

export function Orders() {
  return(
    <Container>
      <OrdersBoard
        icon='🕒'
        title='Fila de espera'
        orders={orders}
      />
      <OrdersBoard
        icon='🍺'
        title='Em preparação'
        orders={[]}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto'
        orders={[]}
      />
    </Container>
  )
}