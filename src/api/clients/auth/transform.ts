import * as Response from 'api/clients/auth/response';
import { UserDetails } from 'models/User';

export const socialLogin = ({
  access_token: token,
  refresh_token: refresh,
  user,
}: Response.Login): { refresh: string; token: string; user: UserDetails } => ({
  token,
  refresh,
  user: {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  },
});

export const downloadResponse = (response: Blob, fileName: string) => {
  // create file link in browser's memory
  const href = URL.createObjectURL(response);

  // create "a" HTML element with href to file & click
  const link = document.createElement('a');
  link.href = href;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();

  // clean up "a" element & remove ObjectURL
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};
