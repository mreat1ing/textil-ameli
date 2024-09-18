export const setSessionName = (value: string | undefined | null) => {
  const name = value || '';
  sessionStorage.setItem('name', name);
};

export const getSessionName = (): string => {
  const name = sessionStorage.getItem('name') || '';
  return name;
};

export const setSessionPhone = (value: string | undefined | null) => {
  const phone = value || '';
  sessionStorage.setItem('phone', phone);
};

export const getSessionPhone = (): string => {
  const phone = sessionStorage.getItem('phone') || '';
  return phone;
};

export const setSessionComment = (value: string | undefined | null) => {
  const comment = value || '';
  sessionStorage.setItem('comment', comment);
};

export const getSessionComment = (): string => {
  const comment = sessionStorage.getItem('comment') || '';
  return comment;
};

export const setSessionChecks = (value: string[]) => {
  const checks = value?.length ? JSON.stringify(value) : '';
  sessionStorage.setItem('checks', checks);
};

export const getSessionChecks = (): string[] => {
  const checks = sessionStorage.getItem('checks') || '';
  if (!checks) return [];
  return JSON.parse(checks);
};
