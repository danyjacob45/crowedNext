import { useEffect, useState } from 'react'
import Select from 'react-select'


export type Option = {
  value: string
  label: string
}


type Props = {
  data: any[]
  label: string,
  optionLabel: string
  defaultValue: string
  onChange: Function
}




export default ({data, label, optionLabel, defaultValue, onChange}: Props) => {

  const [ options, setOptions ] = useState<Option[]>([])  
  
  const [ defaultOpt, setDefaultOpt ] = useState<Option>({ value: '0', label }) 


  useEffect(() => {
    
    let arr: Option[] = []

    data.forEach(item => {
      let opt = {
        value: item.id.toString(),
        label: item[optionLabel]
      }

      arr.push(opt)

      if( defaultValue && defaultValue == item.id ) setDefaultOpt(opt)
    })

    setOptions(arr)

  }, [ data ])



  return (
    options ? 
      <Select  
          defaultValue={defaultOpt}
          onChange={(e) => onChange(e)}
          options={options}
        />  
    : null 
  )

}

