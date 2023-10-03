// const URL = `http://localhost:3001`;
const URL = `https://carpetas-virtuales.onrender.com`

export const login = async (data) => {
  const response = await fetch(`${URL}/user/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  return user;
};


//User functions

export const getUser = async (id) => {
  const response = await fetch(`${URL}/user/get-user/${id}`, {
    method: "GET",
  });
  const user = await response.json();
  return user;
};

export const getUsers = async () => {
  const response = await fetch(`${URL}/user/get-users`, {
    method: "GET",
  });
  const users = await response.json();
  return users;
};

export const registerUser = async (data) => {
  const response = await fetch(`${URL}/user/post-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteUser = async (id) => {
  const response = await fetch(`${URL}/user/delete-user/${id}`, {
    method: "DELETE",
  });
  return response;
};

export const updateUser = async (id, data) => {
  const response = await fetch(`${URL}/user/update-user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const resetPassword = async (id) => {
  const response = await fetch(`${URL}/user/reset-password/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  return response;
};

export const updatePassword = async (id, data) => {
  const response = await fetch(`${URL}/user/update-password/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getSupervisores = async () => {
  const response = await fetch(`${URL}/user/get-supervisores`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const supervisores = await response.json();
  return supervisores;
};

//Station functions

export const getStation = async (id) => {
  const response = await fetch(`${URL}/station/get-station/${id}`, {
    method: "GET",
  });
  const stations = await response.json();
  return stations;
};

export const getStationName = async (name) => {
  const response = await fetch(`${URL}/station/get-station-name/${name}`, {
    method: "GET",
  });
  const stations = await response.json();
  return stations;
};

export const getStations = async () => {
  const response = await fetch(`${URL}/station/get-stations`, {
    method: "GET",
  });
  const stations = await response.json();
  return stations;
};

export const registerStation = async (data) => {
  const response = await fetch(`${URL}/station/post-station`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteStation = async (id) => {
  const response = await fetch(`${URL}/station/delete-station/${id}`, {
    method: "DELETE",
  });
  return response;
};

export const updateStation = async (id, data) => {
  const response = await fetch(`${URL}/station/put-station/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getStationsByZone = async (zone) => {
  const response = await fetch(`${URL}/station/get-stations-zone/${zone}`, {
    method: "GET",
  });
  const stations = await response.json();
  return stations;
};

// Folder functions

export const registerFolder = async (id, data) => {
  const response = await fetch(`${URL}/folder/create-folder/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const registerSubFolder = async (id, data) => {
  const response = await fetch(`${URL}/folder/create-subfolder/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getFolders = async () => {
  const response = await fetch(`${URL}/folder/get-folders`, {
    method: "GET",
  });
  const folders = await response.json();
  return folders;
};

export const getFolder = async (id) => {
  const response = await fetch(`${URL}/folder/get-folder/${id}`, {
    method: "GET",
  });
  const folders = await response.json();
  return folders;
};

export const deleteFolder = async (id) => {
  const response = await fetch(`${URL}/folder/delete-folder/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

// File functions

export const registerFiles = async (id, formData) => {
  const response = await fetch(`${URL}/file/upload-files/${id}`, {
    method: "POST",
    body: formData,
  });
  return response;
};

export const getFile = async (id) => {
  const response = await fetch(`${URL}/file/download-file/${id}`, {
    method: "GET",
  });
  const files = await response.json();
  return files;
};

export const deleteFile = async (id) => {
  await fetch(`${URL}/file/delete-file/${id}`, {
    method: "DELETE",
  });
};

export const changeStatusFile = async (id, data) => {
  const response = await fetch(`${URL}/file/change-status/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};