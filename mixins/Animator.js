var React = require('react');

module.exports = function(name) {
  return {
    pickNum: (a, b) => typeof a === 'number' ? a : b,

    childContextTypes: {
      animations: React.PropTypes.object
    },

    getChildContext() {
      var animations = this.context.animations || {
        [name]: {}
      };

      var step = this.pickNum(this.props.step, this.state && this.state.step);
      var index = this.pickNum(this.props.index, this.state && this.state.index);

      if (typeof step === 'number')
        animations[name].step = step;

      if (typeof index === 'number')
        animations[name].index = index;

      // debugger

      return { animations: animations };
    },
  }
};