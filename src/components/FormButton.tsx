import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

import { ComponentProps } from 'react'

interface FormButtonProps extends ComponentProps<typeof TouchableOpacity> {
  isLoading: boolean
  title: string
}

export function FormButton({ isLoading, title, ...rest }: FormButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="items-center rounded-lg bg-green-900 px-3 py-4"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" size={18} />
      ) : (
        <Text className="font-title text-lg uppercase text-white">{title}</Text>
      )}
    </TouchableOpacity>
  )
}
