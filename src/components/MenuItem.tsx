import { Text, TouchableOpacity, View } from 'react-native'

import { Link } from 'expo-router'
import { ReactNode } from 'react'

interface MenuItemProps {
  href: string
  icon: ReactNode
  text: string
}

export function MenuItem({ href, icon, text }: MenuItemProps) {
  return (
    <Link href={href.startsWith('/') ? href : `/${href}`} asChild>
      <TouchableOpacity>
        <View className="flex-row gap-2 items-center">
          {icon}

          <Text className="font-body text-base">{text}</Text>
        </View>

        <View className="h-1 my-2 border-b border-gray-200 flex-1" />
      </TouchableOpacity>
    </Link>
  )
}
