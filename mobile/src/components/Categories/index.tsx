//REACT
import { useState } from 'react'
import { FlatList } from 'react-native'
//STYLED
import { Text } from '../Text'
import { CategorieContainer, Category, Icon } from './styles'
//TYPES
import { CategoriesItem } from '../../@types/Category'


interface Props {
  categories: CategoriesItem[]
  onSelectCategory: (categoryId: string) => Promise<void>
}

export function Categories({ categories, onSelectCategory }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  function handleSelectedCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId

    setSelectedCategory(category)
    onSelectCategory(category)
  }


  return (
    <CategorieContainer>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 24 }}
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
