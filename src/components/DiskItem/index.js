import React from 'react';
import PropTypes from 'prop-types';
import { DiskItemWrapper } from './style';
export default function DiskItem(props) {
  console.log(props.item);
  return <DiskItemWrapper>DiskItem</DiskItemWrapper>;
}

DiskItem.propTypes = {
  item: PropTypes.object
};
