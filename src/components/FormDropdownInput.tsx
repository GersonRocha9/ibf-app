import DropDownPicker from 'react-native-dropdown-picker'

interface FormDropdownInputProps {
  open: boolean
  value: string | boolean
  items: any[]
  setOpen: any
  setValue: any
  setItems: any
  placeholder: string
  zIndex?: number
  zIndexInverse?: number
}

export function FormDropdownInput({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  zIndex,
  zIndexInverse,
}: FormDropdownInputProps) {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      placeholderStyle={{
        color: '#A0AEC0',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
      }}
      style={{
        backgroundColor: '#f9fafb',
        borderColor: '#d1d5db',
        marginBottom: 16,
      }}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
      dropDownDirection="TOP"
    />
  )
}
