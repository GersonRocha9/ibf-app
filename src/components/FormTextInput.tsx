import { ComponentProps } from 'react'
import { Controller } from 'react-hook-form'
import { TextInput } from 'react-native'

interface FormTextInputProps extends ComponentProps<typeof TextInput> {
  control: any
  name: string
  errors: any
  isRequired?: boolean
}

export function FormTextInput({
  control,
  name,
  errors,
  isRequired = true,
  ...rest
}: FormTextInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: isRequired,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          className={`border ${
            errors ? 'border-red-500' : 'border-gray-300'
          } rounded-lg px-3 py-2 text-lg font-body mb-4`}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholderTextColor="#A0AEC0"
          {...rest}
        />
      )}
    />
  )
}
