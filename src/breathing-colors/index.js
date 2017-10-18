const validate = (colors, interval, transition) => {
  if(!colors) {
    console.warn(`Breathing Colors Warn: Colors is ${colors}. Array of colors is required.`);
    return;
  }

  if(!interval) {
    console.warn(`Breathing Colors Warn: Interval is ${colors}. Animation interval is required.`);
    return; 
  }

  if(typeof interval !== 'number') {
    console.warn(`Breathing Colors Warn: Interval expects a number got - ${typeof interval}.`);
    return; 
  }

  if(!transition) {
    console.warn(`Breathing Colors Warn: Transition object is ${interval}. Transition object required,.`);
    return; 
  }

  if(!transition.duration) {
    console.warn(`Breathing Colors Warn: Transition duration is ${transition.duration}. Transition duration is required.`);
    return;  
  }

  if(typeof transition.duration !== 'number') {
    console.warn(`Breathing Colors Warn: Transition duration expects a number got - ${typeof transition.duration}.`);
    return; 
  }
}

export default (Vue) => {
  Vue.directive('breathing-colors', {
    inserted: (el) => {
      console.log(el)
    },
    bind: (el, binding, vnode) => {
      const {
        name, value, oldValue, expression, arg, modifiers
      } = binding;
      var {
        colors, interval, transition
      } = value;
      var {
        hover, random
      } = modifiers;

      validate(colors, interval, transition);

      var count = colors.length;      
      colors = new Array(colors)[0].reverse();
      transition = `background-color ${ transition.duration || 1000 }ms linear ${ transition.delay ? transition.delay+'ms' : '' }`;

      el.style.backgroundColor = colors[colors.length - 1];
      el.style['-webkit-transition'] = transition;
      el.style['-moz-transition'] = transition;
      el.style['-o-transition'] = transition;
      el.style.transition = transition;

      const animate = () => {
        if(random) {
          var num = Math.round(Math.random()*colors.length);
          el.style.backgroundColor = colors[num];
        } else {
          el.style.backgroundColor = colors[--count];
          if(count === 0) {
            count = colors.length;
          }
        }
      }

      if(hover) {
        el.onmouseover = () => {
          animate();
        }
      } else {
        setInterval(() => {
          animate();
        }, interval);
      }
    }
  })
};