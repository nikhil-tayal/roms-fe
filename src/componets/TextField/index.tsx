import React from 'react';
import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { CssOverrideType } from 'src/types';
import Label from '../Label';

export type TextFieldProps = CssOverrideType & {
  /**
   * label of the input box
   */
  labelText?: React.ReactNode;
  /**
   * if field is required (it will not show optional text)
   */
  required?: boolean;
  /**
   * placeholder text for the input field
   */
  placeholder?: string;
  /**
   * if we need a input field with 100% of it's parent
   */
  fullWidth?: boolean;
  /**
   * for Prefix icons
   */
  startIcon?: JSX.Element;
  /**
   * for Postfix icons
   */
  endIcon?: JSX.Element;
  /**
   * to disable user to edit anything in the input field
   */
  disabled?: boolean;
  /**
   * current value of textfield
   */
  value: string;
  /**
   * change handler
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * type of input we want to render
   * Supported values - | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week'
   */
  type?: React.InputHTMLAttributes<unknown>['type'];
  /**
   * will render error
   */
  error?: string;
  /**
   * maximum length of the input characters
   */
  maxLength?: number;
  /**
   * name of the text field in the DOM
   */
  name?: string;
};

const TextField = ({
  labelText = '',
  required = false,
  placeholder = 'Please enter the value',
  fullWidth = false,
  disabled = false,
  value,
  onChange,
  onKeyDown,
  type = 'text',
  error,
  maxLength,
  startIcon = undefined,
  endIcon = undefined,
  name = '',
  sx = {},
  className = '',
}: TextFieldProps) => {

  const getInputProps = () => {
    if (startIcon) {
      return {
        startAdornment: (
          <InputAdornment position='start'>{startIcon}</InputAdornment>
        ),
      };
    } else {
      return {
        endAdornment: (
          <InputAdornment position='start'>{endIcon}</InputAdornment>
        ),
      };
    }
  };

  return (
    <>
      {labelText && <Label>{labelText}</Label>}
      <MuiTextField
        sx={sx}
        className={className}
        onKeyDown={onKeyDown}
        required={required}
        placeholder={placeholder}
        fullWidth={fullWidth}
        InputProps={getInputProps()}
        disabled={disabled}
        value={value}
        onChange={onChange}
        type={type}
        error={Boolean(error)}
        helperText={error ? error : null}
        inputProps={{ maxLength: maxLength }}
        name={name}
      />
    </>
  );
};

export default TextField