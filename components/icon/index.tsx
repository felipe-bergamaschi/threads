import favorite from '../../assets/svg/favorite.svg';
import home from '../../assets/svg/home.svg';
import logo from '../../assets/svg/logo.svg';
import newThread from '../../assets/svg/new-thread.svg';
import person from '../../assets/svg/person.svg';
import search from '../../assets/svg/search.svg';
import { View } from 'react-native';

type IconName = 'favorite' | 'home' | 'logo' | 'newThread' | 'person' | 'search';

interface DynamicSvgProps {
  name: IconName;
  fill: string;
}

export function Icon(props: DynamicSvgProps) {
  let SvgXml;

  switch (props.name) {
    case 'favorite':
      SvgXml = favorite;
      break;
    case 'home':
      SvgXml = home;
      break;
    case 'logo':
      SvgXml = logo;
      break;
    case 'newThread':
      SvgXml = newThread;
      break;
    case 'person':
      SvgXml = person;
      break;
    case 'search':
      SvgXml = search;
      break;
    default:
      SvgXml = null;
      break;
  }

  return (
    <View style={{ width: 24, height: 24 }}>
      {SvgXml && <SvgXml width={24} height={24} {...props} />}
    </View>
  )
}