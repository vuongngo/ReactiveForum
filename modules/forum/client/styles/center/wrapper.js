import { windowHeight } from 'forum/client/helpers';
import { Styles } from 'material-ui';
const { Colors } = Styles;

export default {
  wrapper: function(windowSize) {
    let w_h = windowHeight() - 80;
    let padding = '0rem 0.625rem';
    if (windowSize === 'small') {
      padding = 0;
    }
    return {
      //      backgroundColor: Colors.white,
      height: w_h,
      overflowY: windowSize === 'small' ? 'none' : 'auto',
      padding: padding,
    };
  }
}
