import * as WebBrowser from 'expo-web-browser'

import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { mockedDownloads } from '@models'
import { limitText } from '@utils'
import { DownloadSimple } from 'phosphor-react-native'
import React from 'react'

export default function Downloads() {
  async function handleOpenPDFBrowser(downloadLink: string) {
    await WebBrowser.openBrowserAsync(downloadLink)
  }

  return (
    <View className="bg-gray-50 flex-1 px-5">
      <Text className="text-gray-950 text-base text-center font-title mt-2">
        Toque em algum card para abrir o arquivo
      </Text>

      <FlatList
        data={mockedDownloads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageBackground
            source={{
              uri: item.thumbUrl,
            }}
            className="mt-2 rounded-lg overflow-hidden m-3 relative flex-grow aspect-square border border-gray-200"
          >
            <TouchableOpacity
              className="flex-1"
              onPress={() => handleOpenPDFBrowser(item.downloadLink)}
            >
              <View className="flex flex-row justify-between items-center absolute bottom-0 p-2 w-full bg-gray-50">
                <Text className="text-gray-950 text-xs font-title max-w-[100px]">
                  {limitText(item.name)}
                </Text>
                <DownloadSimple size={20} weight="bold" />
              </View>
            </TouchableOpacity>
          </ImageBackground>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
        className="mt-5"
      />
    </View>
  )
}
