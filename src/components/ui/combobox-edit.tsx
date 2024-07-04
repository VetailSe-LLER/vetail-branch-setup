import React, { ReactNode, useEffect, useState } from "react";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface ComboboxProp {
  field: ControllerRenderProps<any, any>;
  error: boolean;
  labelInput: string;
  icon: ReactNode;
  option: any[];
}

const ComboEdit = ({
  field,
  error,
  labelInput,
  icon,
  option,
}: ComboboxProp) => {
  const [labelShrink, setLabelShrink] = useState(false);

  useEffect(() => {
    if (field.value) {
      setLabelShrink(true);
    }
  }, [field.value]);

  return (
    <Autocomplete
      id="country-select-demo"
      options={option}
      // isOptionEqualToValue={(option, value) => option.id === Number(value)}
      getOptionLabel={(option) => option.label}
      value={option.find((opt) => opt.value === field.value) || null} // Ensure the value is set correctly
      onChange={(event, newValue) =>
        field.onChange(newValue ? newValue.value : "")
      } // Handle change correctly
      sx={{
        "& fieldset": {
          borderRadius: "10px",
          borderColor: error ? "red" : "#EEEEEE",
        },
      }}
      autoHighlight
      fullWidth
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={labelInput}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // Disable autocomplete and autofill
            style: {
              fontSize: "14px",
              fontWeight: "300",
              boxShadow: "none",
            },
          }}
          onBlur={() => setLabelShrink(true)}
          onFocus={() => setLabelShrink(true)}
          sx={{
            "& fieldset": {
              borderRadius: "10px",
              borderColor: error ? "red" : "#EEEEEE",
            },
            "& .MuiInputLabel-root": {
              height: "100px",
              fontSize: "15px",
              color: "#9E9E9E",
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: error ? "red" : "#2E6EFF",
              },
            },
            "& .Mui-focused": {
              "& .MuiInputAdornment-root svg": {
                color: error ? "current" : "primary.main",
              },
            },
          }}
          InputLabelProps={{
            shrink: labelShrink,
            className: labelShrink
              ? undefined
              : icon
              ? "no-shrink"
              : "no-shrink-no-icon",
            style: {
              fontSize: "14px",
            },
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default ComboEdit;
