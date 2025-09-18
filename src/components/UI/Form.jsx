import { useState } from "react";

const Form = ({ fields, onSubmit, submitLabel = "Submit" }) => {
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || "";
    return acc;
  }, {});

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach(({ name, label, type, required }) => {
      const value = values[name];

      if (required && !value) {
        newErrors[name] = `${label} is required`;
      }

      if (type === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[name] = "Invalid email format";
      }

      if (name === "password" && value && value.length < 8) {
        newErrors[name] = "Password must be at least 8 characters";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      {fields.map(({ name, label, type }) => (
        <div
          key={name}
          className={`${
            type === "checkbox"
              ? "flex flex-row items-center gap-2"
              : "flex flex-col gap-1"
          }`}
        >
          {type === "checkbox" ? (
            <>
              <input
                id={name}
                name={name}
                type="checkbox"
                checked={values[name] || false}
                onChange={handleChange}
                className="w-5 h-5 accent-primary cursor-pointer"
              />
              <label htmlFor={name} className="cursor-pointer">
                {label}
              </label>
            </>
          ) : type === "textarea" ? (
            <>
              <label htmlFor={name}>{label}</label>
              <textarea
                id={name}
                name={name}
                value={values[name] || ""}
                onChange={handleChange}
                className="border rounded p-2 min-h-[300px]"
              />
            </>
          ) : (
            <>
              <label htmlFor={name}>{label}</label>
              <input
                id={name}
                name={name}
                type={type}
                value={values[name] || ""}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </>
          )}
          {errors[name] && (
            <span className="text-sm text-red-500">{errors[name]}</span>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default Form;
