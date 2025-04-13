// Utility function to validate form fields
export function validateField(value, fieldName) {
  if (!value || value.trim() === '') {
    return `${fieldName} is required.`;
  }
  return null;
}

// Utility function to handle input changes
export function handleInputChange(setData, section, field, value) {
  setData((prev) => ({
    ...prev,
    [section]: {
      ...prev[section],
      [field]: value,
    },
  }));
}