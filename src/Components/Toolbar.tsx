import React, { useState } from 'react';
import { Layout, Radio, RadioGroupProps } from 'antd';
import { RiCursorFill, RiCursorLine, RiShape2Line } from 'react-icons/ri';
import { MdOutlineRectangle } from 'react-icons/md';
import Rectangle from './Rectangle';

const { Header } = Layout;

const options = [
  { label: 'regular selection'.toUpperCase(), value: 'regular-selection' },
  { label: 'direct selection'.toUpperCase(), value: 'direct-selection' },
  { label: 'rectangle'.toUpperCase(), value: 'rectangle' },
  { label: 'text'.toUpperCase(), value: 'text' },
];

const headerStyle: React.CSSProperties = {
  // textAlign: 'center',
  height: 50,
  // paddingInline: 50,
  lineHeight: '50px',
  backgroundColor: '#fff',
};

interface Props {
  activeTool: string;
  handleChangeTool: RadioGroupProps['onChange'];
}

const Toolbar = ({ activeTool, handleChangeTool }: Props) => {
  return (
    <Header style={headerStyle}>
      <Radio.Group
        value={activeTool}
        onChange={handleChangeTool}
        options={options}
        optionType="button"
      />
    </Header>
  );
};

export default Toolbar;
