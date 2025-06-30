export const getFormattedDate = (): string => {
  const today = new Date();
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(today);
};

 
