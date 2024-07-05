import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState, FC, FocusEvent } from "react";
import IconClose from "../../assets/close.png";
import { UseFormResetField } from "react-hook-form";

interface CustomTextFieldWithLimitProps {
  field: any;
  name?: "address" | "map" | "email" | "shop" | "phone" | "nearest";
  maxLength: number;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  error?: boolean;
  resetField?: UseFormResetField<any>;
  type?: string;
  multiline?: boolean;
  fullwidth?: boolean;
  endSection?: string;
  minRows?: number;
}

const CustomTextFiled: FC<CustomTextFieldWithLimitProps> = ({
  field,
  name,
  maxLength,
  label,
  disabled = false,
  icon,
  error = false,
  resetField,
  type = "text",
  multiline = false,
  fullwidth = true,
  endSection,
  minRows = 0,
}) => {
  const [labelShrink, setLabelShrink] = useState(false);

  useEffect(() => {
    if (field.value) {
      setLabelShrink(true);
    }
  }, [field.value]);

  return (
    <TextField
      // disabled={disabled}
      multiline={multiline}
      type={type}
      minRows={minRows}
      fullWidth={fullwidth}
      variant="outlined"
      label={
        <Box component={"span"} ml={1}>
          {label}
        </Box>
      }
      {...field}
      onBlur={() =>
        field.value ? setLabelShrink(true) : setLabelShrink(false)
      }
      onFocus={() => setLabelShrink(true)}
      inputProps={{
        style: {
          fontSize: "14px",
          fontWeight: "300",
          boxShadow: "none",
        },
      }}
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
        startAdornment: (
          <InputAdornment
            sx={{ marginTop: minRows > 0 ? -8 : 0 }}
            position="start"
          >
            {icon}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Typography fontWeight="300" fontSize="10px" color="#929292">
              {!field.value && endSection}
            </Typography>
            {resetField && field.value && name ? (
              <Button onClick={() => field.onChange("")}>
                <img src={IconClose.src} width={20} alt="close" />
              </Button>
            ) : null}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomTextFiled;
