import TextField from '@mui/material/TextField';
import { type ReactElement } from 'react';
import { type QUMultiLineTextFieldProps } from './QUMultiLineTextFieldProps';

export default function QUMultiLineTextField({
  value,
  onChange,
  validationRule,
  placeholder,
  disabled,
  style,
  className,
}: QUMultiLineTextFieldProps): ReactElement {
  return (
    <TextField
      multiline
      value={value}
      onChange={({ target }): void =>
        onChange?.(
          target.value,
          validationRule ? validationRule(target.value) : true,
        )
      }
      placeholder={placeholder}
      disabled={disabled}
      type="text"
      InputProps={{
        sx: {
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              border: '2px solid white',
              color: 'white',
            },
            color: 'white',
            fontSize: '28px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
            borderColor: '#8E8E93',
            color: 'white',
          },
          '&:hover': {
            border: '1px solid white',
            borderColor: '#8E8E93',
          },
          borderRadius: '20px',
          background: 'black',
          color: 'gray',
          transition: '0.5s',
          height: '230px',
          fontSize: '24px',
          alignItems: 'flex-start'
        },
      }}
      style={style}
      className={'w-full' + (className ? ' ' + className : '')}
    />
  );
}
