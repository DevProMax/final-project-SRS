import axios from "axios";

const tokenBot = "xoxb-5169513343826-5169554102002-JRdkA9oXrarPHP4epJDOslrj";
const tokenAdmin =
  "xoxp-5169513343826-5169380876243-5189669810737-c8ce1639f44347d035bafe967e3e1c70";

export const publicChannel = async () => {
  try {
    const response = await axios({
      method: "post",
      url: "https://slack.com/api/conversations.list",
      data: `token=${tokenBot}`,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const privateChannel = async () => {
  try {
    const response = await axios({
      method: "post",
      url: "https://slack.com/api/conversations.list",
      data: `token=${tokenAdmin}`,
      params: {
        types: "private_channel",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};