export const getItem = (item) => {
  let data = null;

  if (window.localStorage.getItem(item)) {
    data = window.localStorage.getItem(item);
  }

  return data;
};

export const setItem = (item, data) => {
  window.localStorage.setItem(item, data);
};

export const deleteItem = (item) => {
  window.localStorage.removeItem(item);
};
