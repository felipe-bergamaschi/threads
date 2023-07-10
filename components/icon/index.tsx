import { View } from 'react-native';

import favorite from '../../assets/svg/favorite.svg';
import home from '../../assets/svg/home.svg';
import logo from '../../assets/svg/logo.svg';
import newThread from '../../assets/svg/new-thread.svg';
import person from '../../assets/svg/person.svg';
import search from '../../assets/svg/search.svg';
import moreHoriz from '../../assets/svg/more-horiz.svg';

import favoriteOutline from '../../assets/svg/favorite-outline.svg';
import messageOutline from '../../assets/svg/message-outline.svg';
import repostOutline from '../../assets/svg/repost-outline.svg';
import sendOutline from '../../assets/svg/send-outline.svg';

type IconName = 'favorite' | 'home' | 'logo' | 'newThread' | 'person' | 'search' | 'moreHoriz' | 'favoriteOutline' | 'messageOutline' | 'repostOutline' | 'sendOutline';

interface DynamicSvgProps {
  name: IconName;
  fill: string;
  size?: number;
}

export function Icon(props: DynamicSvgProps) {
  const width = props.size || 24;
  const height = props.size || 24;

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
    case 'moreHoriz':
      SvgXml = moreHoriz;
      break;
    case 'favoriteOutline':
      SvgXml = favoriteOutline;
      break;
    case 'messageOutline':
      SvgXml = messageOutline;
      break;
    case 'repostOutline':
      SvgXml = repostOutline;
      break;
    case 'sendOutline':
      SvgXml = sendOutline;
      break;
    default:
      SvgXml = null;
      break;
  }

  return (
    <View style={{ width, height }}>
      {SvgXml && (
        <SvgXml
          width={width}
          height={height}
          {...props}
        />
      )}
    </View>
  )
}