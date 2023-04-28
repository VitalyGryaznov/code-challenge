import { TextField } from '@mui/material';
import React from 'react';

type PropType = {
  startDateValue: string;
  endDateValue: string;
  onStartChange: React.ChangeEventHandler<HTMLInputElement>;
  onEndChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Filter = ({ startDateValue, endDateValue, onStartChange, onEndChange }: PropType) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
      <TextField value={startDateValue} onChange={onStartChange} type={'date'} />
      <TextField value={endDateValue} onChange={onEndChange} type={'date'} />
    </div>
  );
};
