import directives from './breathing-colors';

const BreathingColors = {
  install(Vue, options) {
    directives(Vue);
  }
}

export default BreathingColors;