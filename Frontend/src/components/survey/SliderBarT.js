// import '../assets/index.less';
import 'rc-tooltip/assets/bootstrap.css';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const { createSliderWithTooltip } = Slider;
const { Handle } = Slider;
const wrapperStyle = { width: 400, margin: 50 };
class SliderBarT extends Component {
  
  state = {
    value: this.props.weight[this.props.category]
  }
  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };
  
  // const wrapperStyle = { width: 400, margin: 50 };
  
  render () {
    return (
      <div style={wrapperStyle}>
        <p>Slider with custom handle</p>
        <Slider  min={0} max={100} defaultValue={3} handle={this.handle}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      weight: state.weight
  }
}
export default connect(mapStateToProps)(SliderBarT);