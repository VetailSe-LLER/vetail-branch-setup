import React, { ReactNode, useEffect, useState } from "react";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";

interface ComboboxProp {
  field: ControllerRenderProps<any, any>;
  error: boolean;
  labelInput: string;
  icon: ReactNode;
}

const Combobox = ({ field, error, labelInput, icon }: ComboboxProp) => {
  const [labelShrink, setLabelShrink] = useState(false);

  useEffect(() => {
    if (field.value) {
      setLabelShrink(true);
    }
  }, [field.value]);

  return (
    <Autocomplete
      id="country-select-demo"
      options={[{ label: "Yangon", name: "၇န်ကုန်" }]}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      value={field.value || null} // Ensure the value is set correctly
      onChange={(event, newValue) => field.onChange(newValue)} // Handle change correctly
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
          {option.label} ({option.name})
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
              fontSize: "18px",
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

export default Combobox;
