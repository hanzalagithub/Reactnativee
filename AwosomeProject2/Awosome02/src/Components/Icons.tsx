import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type Iconsprops = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : Iconsprops) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle-thin" size={38}
        color="#F7CD2E" />
        break;
        case 'cross':
        return <Icon name="times" size={38}
        color="#000000" />
        break;
  
    default:
        return <Icon name="pencil" size={38}
        color="#38CC77" />
  }
}

export default Icons;
