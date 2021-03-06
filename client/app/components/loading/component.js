import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';
import images from '../../configs/images';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logo}
      />
    </View>
  );
};

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
