export const getFormData = (e) => {
  const formdata = new FormData(e.target);
  const data = Object.fromEntries(formdata);
  return data;
}