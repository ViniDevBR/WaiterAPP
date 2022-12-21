import { categories } from '../../mocks/categories'
import { Text } from '../Text'
import { CategorieContainer, Category, Icon } from './styles'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  function handleSelectedCategory(categoryId: string) {
    if(categoryId === selectedCategory){
      return setSelectedCategory(null)
    }
    setSelectedCategory(categoryId)
  }


  return (
    <CategorieContainer>
      <FlatList
        contentContainerStyle={{ marginLeft: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={category => category._id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category._id

          return (
            <Category onPress={() => handleSelectedCategory(category._id)}>
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>

              <Text
                size={14}
                weight='600'
                opacity={isSelected ? 1 : 0.5}
              >
                {category.name}
              </Text>
            </Category>
          )
        }}
      />
    </CategorieContainer>
  )
}
