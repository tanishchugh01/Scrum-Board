function changeDateFormat(inputDate: string): string {
  const dateObj = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return dateObj.toLocaleDateString('en-GB', options);
}

export default changeDateFormat;